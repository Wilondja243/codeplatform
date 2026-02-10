'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useFieldArray } from 'react-hook-form';
import {
    Type,
    Code,
    Image as ImageIcon,
    Link as LinkIcon,
    Trash2,
    Text,
    Edit2,
    GripVertical,
    Save,
    List,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/sections/panel/top-bar';
import Sidebar from '@/components/sections/panel/side-bar';
import { useUpload } from '@/actions/course/upload-file';
import { ClipLoader } from 'react-spinners';
import useNotification from '@/hooks/use-taost';
import { useValidateLessonForm } from '@/hooks/use-validation-form';
import {
    getLessonByIdAction,
    updateLessonAction,
    createLessonAction,
} from '@/actions/course/lesson';

export default function LessonForm({
    courseId,
    moduleId,
    lessonId,
}: {
    courseId: string;
    moduleId: string;
    lessonId?: string;
}) {
    const router = useRouter();
    const { uploadFile, isUploading } = useUpload();
    const [isPending, startTransition] = useTransition();
    const { notifyError, notifySuccess } = useNotification();
    const [isInitialLoading, setIsInitialLoading] = useState(!!courseId);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        control,
        setValue,
    } = useValidateLessonForm();
    const { fields, append, remove, move } = useFieldArray({
        control,
        name: 'contents',
    });

    useEffect(() => {
        if (courseId && lessonId) {
            setIsInitialLoading(true);
            const fetchLesson = async () => {
                const result = await getLessonByIdAction({
                    courseId,
                    moduleId,
                    lessonId,
                });
                if (result.success) {
                    reset(result.data as any);
                } else {
                    notifyError(result.message as string);
                }
                setIsInitialLoading(false);
            };

            fetchLesson();
        }
    }, [courseId, moduleId, lessonId, reset]);

    const isEditing = !!lessonId;

    const onSubmit = (data: any) => {
        startTransition(async () => {
            let result;
            if (isEditing && moduleId && lessonId) {
                result = await updateLessonAction(
                    courseId,
                    moduleId,
                    lessonId,
                    data,
                );
            } else {
                result = await createLessonAction({
                    courseId,
                    moduleId,
                    data,
                });
            }

            if (result.success) {
                notifySuccess(
                    isEditing
                        ? 'Lesson updated successfully.'
                        : 'Lesson create successfully !',
                );
                router.push(
                    `/admin-1001/cours/${courseId}/lessons?moduleId=${moduleId}`,
                );
                router.refresh();
            } else {
                notifyError(
                    (result.message as string) || 'Une erreur est survenue.',
                );
            }
        });
    };

    const onFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = await uploadFile(file);

        if (url) {
            setValue(`contents.${index}.value`, url);
            notifySuccess('Image uploadée avec succès !');
        } else {
            notifyError("Échec de l'upload de l'image.");
        }
    };

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            {/* SIDE-BAR */}
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                {/* TOP-BAR */}
                <TopBar />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" mx-auto p-8 space-y-8 overflow-y-auto"
                >
                    {/* --- HEADER --- */}
                    <div className="flex justify-between items-end border-b border-card-border pb-6">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold text-text-main">
                                {isEditing
                                    ? 'Modifier la Leçon'
                                    : 'Nouvelle Leçon'}
                            </h2>
                            <p className="text-text-muted">
                                Structurez votre contenu pédagogique.
                            </p>
                        </div>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-md hover:opacity-90 disabled:opacity-50 font-bold shadow-lg"
                        >
                            {isEditing ? (
                                isPending ? (
                                    <>
                                        <ClipLoader size={20} color="white" />
                                        Encours...
                                    </>
                                ) : (
                                    <>
                                        <Edit2 size={18} /> Modifier
                                    </>
                                )
                            ) : isPending ? (
                                <>
                                    <ClipLoader size={20} color="white" />
                                    Encours...
                                </>
                            ) : (
                                <>
                                    <Save size={18} /> Enregistrer
                                </>
                            )}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* --- CONFIGURATION LATERALE --- */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-card border border-card-border p-5 rounded-2xl space-y-4">
                                <div className="text-xs font-bold uppercase tracking-widest text-primary">
                                    Paramètres
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">
                                        Ordre d'apparition
                                    </label>
                                    <input
                                        type="number"
                                        {...register('order')}
                                        className="w-full bg-background border border-card-border rounded-lg p-2.5 outline-none focus:border-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- EDITEUR DE CONTENU (BLOCS) --- */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase text-text-muted">
                                    Titre de la leçon
                                </label>
                                <input
                                    {...register('title')}
                                    placeholder="mettez le titre de votre lecon ici."
                                    className="placeholder:text-[12px] text-lg w-full bg-transparent border-b-2 border-card-border focus:border-primary outline-none pb-2 font-bold transition-all"
                                />
                            </div>

                            <div className="space-y-4">
                                {fields.map((field, index) => (
                                    <div
                                        key={field.id}
                                        className="group relative bg-card border border-card-border rounded-2xl p-6 transition-all hover:border-primary/30"
                                    >
                                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                                            <GripVertical className="text-text-muted" />
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <span className="flex items-center gap-2 text-xs font-bold py-1 px-3 bg-background rounded-full border border-card-border">
                                                {watch(
                                                    `contents.${index}.type`,
                                                ) === 'SECTION_TITLE' && (
                                                    <Type size={14} />
                                                )}
                                                {watch(
                                                    `contents.${index}.type`,
                                                ) === 'PARAGRAPH' && (
                                                    <Text size={14} />
                                                )}
                                                {watch(
                                                    `contents.${index}.type`,
                                                ) === 'COMMAND' && (
                                                    <Code size={14} />
                                                )}
                                                {watch(
                                                    `contents.${index}.type`,
                                                ) === 'IMAGE' && (
                                                    <ImageIcon size={14} />
                                                )}
                                                {watch(
                                                    `contents.${index}.type`,
                                                ) === 'LINK' && (
                                                    <LinkIcon size={14} />
                                                )}
                                                {watch(
                                                    `contents.${index}.type`,
                                                )}
                                            </span>
                                            <button
                                                onClick={() => remove(index)}
                                                className="text-text-muted hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                        {/* Rendu dynamique de l'input selon le type choisi */}
                                        {watch(`contents.${index}.type`) ===
                                        'PARAGRAPH' ? (
                                            <textarea
                                                {...register(
                                                    `contents.${index}.value` as const,
                                                )}
                                                className="w-full bg-background border border-card-border rounded-xl p-4 min-h-[120px] outline-none focus:ring-2 ring-primary/10"
                                                placeholder="Écrivez votre texte..."
                                            />
                                        ) : watch(`contents.${index}.type`) ===
                                          'IMAGE' ? (
                                            <div className="space-y-4">
                                                {/* Zone d'upload ou Aperçu */}
                                                {watch(
                                                    `contents.${index}.value`,
                                                ) ? (
                                                    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-card-border bg-background">
                                                        <img
                                                            src={watch(
                                                                `contents.${index}.value`,
                                                            )}
                                                            className="w-full h-full object-contain"
                                                            alt="Aperçu"
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                setValue(
                                                                    `contents.${index}.value`,
                                                                    '',
                                                                )
                                                            }
                                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-card-border rounded-xl cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-all">
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <ImageIcon
                                                                className="text-text-muted mb-2"
                                                                size={32}
                                                            />
                                                            <p className="text-sm text-text-muted">
                                                                Cliquez pour
                                                                uploader une
                                                                image
                                                            </p>
                                                            <p className="text-[10px] text-text-subtle uppercase mt-1">
                                                                PNG, JPG ou WebP
                                                            </p>
                                                        </div>
                                                        {/* Input caché qui déclenche l'upload */}
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            accept="image/*"
                                                            onChange={(e) =>
                                                                onFileChange(
                                                                    e,
                                                                    index,
                                                                )
                                                            }
                                                        />
                                                    </label>
                                                )}
                                                <input
                                                    type="hidden"
                                                    {...register(
                                                        `contents.${index}.value`,
                                                    )}
                                                />
                                            </div>
                                        ) : watch(`contents.${index}.type`) ===
                                          'COMMAND' ? (
                                            <textarea
                                                {...register(
                                                    `contents.${index}.value` as const,
                                                )}
                                                className="w-full bg-background border border-card-border rounded-xl p-4 min-h-[120px] outline-none focus:ring-2 ring-primary/10"
                                                placeholder="Écrivez votre commande..."
                                            />
                                        ) : (
                                            <input
                                                {...register(
                                                    `contents.${index}.value` as const,
                                                )}
                                                className="w-full bg-background border border-card-border rounded-xl p-4 outline-none font-mono text-sm"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* --- BARRE D'OUTILS D'AJOUT --- */}
                            <div className="flex flex-wrap items-center gap-3 p-4 bg-background border-2 border-dashed border-card-border rounded-2xl justify-center">
                                <p className="w-full text-center text-xs font-bold text-text-muted uppercase mb-2">
                                    Ajouter un bloc
                                </p>
                                <ToolbarButton
                                    icon={<Type size={18} />}
                                    label="Titre"
                                    onClick={() =>
                                        append({
                                            type: 'SECTION_TITLE',
                                            value: '',
                                            order: fields.length + 1,
                                        })
                                    }
                                />
                                <ToolbarButton
                                    icon={<Text size={18} />}
                                    label="Paragraphe"
                                    onClick={() =>
                                        append({
                                            type: 'PARAGRAPH',
                                            value: '',
                                            order: fields.length + 1,
                                        })
                                    }
                                />
                                <ToolbarButton
                                    icon={<Code size={18} />}
                                    label="Commande"
                                    onClick={() =>
                                        append({
                                            type: 'COMMAND',
                                            value: '',
                                            order: fields.length + 1,
                                        })
                                    }
                                />
                                <ToolbarButton
                                    icon={<ImageIcon size={18} />}
                                    label="Image"
                                    onClick={() =>
                                        append({
                                            type: 'IMAGE',
                                            value: '',
                                            order: fields.length + 1,
                                        })
                                    }
                                />
                                <ToolbarButton
                                    icon={<LinkIcon size={18} />}
                                    label="Lien"
                                    onClick={() =>
                                        append({
                                            type: 'LINK',
                                            value: '',
                                            order: fields.length + 1,
                                        })
                                    }
                                />
                                <ToolbarButton
                                    icon={<List size={18} />}
                                    label="Liste"
                                    onClick={() =>
                                        append({
                                            type: 'LIST_ITEM',
                                            value: '',
                                            order: fields.length + 1,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const ToolbarButton = ({ icon, label, onClick }: any) => (
    <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 bg-card border border-card-border hover:border-primary hover:text-primary rounded-xl text-sm font-medium transition-all shadow-sm"
    >
        {icon} {label}
    </button>
);
