'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { Plus, Trash2, MoveUp, MoveDown, Save, Map, Edit2 } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { useFieldArray } from 'react-hook-form';
import useNotification from '@/hooks/use-taost';
import { ClipLoader } from 'react-spinners';
import { useModulesQuery } from '@/lib/query/course.query';
import MainAdminPage from '@/components/sections/panel/main-admin-page';
import { useValidateRoadmapForm } from '@/hooks/use-validation-form';
import {
    createRoadmapAction,
    getRoadmapByIdAction,
    updateRoadmapAction,
} from '@/actions/course/roadmap';

export default function AddRoadmapPage({
    courseId,
    roadmapId,
}: {
    courseId: string;
    roadmapId?: string;
}) {
    const router = useRouter();
    const { notifyError, notifySuccess } = useNotification();
    const [isPending, startTransition] = useTransition();
    const [isInitialLoading, setIsInitialLoading] = useState(!!roadmapId);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useValidateRoadmapForm();

    const {
        data: modules,
        isLoading,
        error,
    } = useModulesQuery({ courseId: String(courseId) });

    console.log('modules.error: ', error);
    console.log('courseId: ', courseId);

    const { fields, append, remove, move } = useFieldArray({
        control,
        name: 'steps',
    });

    useEffect(() => {
        if (roadmapId) {
            setIsInitialLoading(true);
            startTransition(async () => {
                const result = await getRoadmapByIdAction({ roadmapId });
                if (result.success) {
                    reset(result.data as any);
                } else {
                    notifyError(result.message as string);
                }
                setIsInitialLoading(false);
            });
        }
    }, [roadmapId, reset]);

    const isEditing = !!roadmapId;

    const onSubmit = (data: any) => {
        startTransition(async () => {
            let result;
            if (isEditing && roadmapId) {
                result = await updateRoadmapAction({
                    roadmapId,
                    courseId: String(courseId),
                    data,
                });
            } else {
                result = await createRoadmapAction({
                    courseId: String(courseId),
                    data,
                });
            }

            if (result.success) {
                notifySuccess(
                    isEditing
                        ? 'Roadmap mise à jour avec success'
                        : 'Roadmap crée avec succès !',
                );
                router.push('/admin-1001/cours');
                router.refresh();
            } else {
                notifyError(
                    (result.message as string) || 'Une erreur est survenue.',
                );
            }
        });
    };

    return (
        <MainAdminPage>
            <div className="max-w-5xl mx-auto p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* --- HEADER --- */}
                    <div className="flex justify-between items-center bg-card p-6 rounded-2xl border border-card-border shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-primary">
                                <Map size={28} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    Créer une Roadmap
                                </h1>
                                <p className="text-slate-400 text-sm">
                                    Structurez le parcours du cours
                                </p>
                            </div>
                        </div>
                        <button
                            disabled={isPending}
                            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-bg-muted cursor-pointer rounded-md hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20"
                        >
                            {isPending ? (
                                <div className="flex gap-x-3 items-center text-white">
                                    <ClipLoader size={20} color="white" />
                                    En cours
                                </div>
                            ) : isEditing ? (
                                <>
                                    <Edit2 size={18} />
                                    Modifier le roadmap
                                </>
                            ) : (
                                <>
                                    <Save size={18} />
                                    Enregistrer le roadmap
                                </>
                            )}
                        </button>
                    </div>

                    {/* --- ROADMAP INFO --- */}
                    <div className="bg-card p-6 rounded-2xl border border-card-border space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Titre de la Roadmap
                                </label>
                                <input
                                    {...register('title')}
                                    placeholder="Ex: Masterclass Backend Node.js"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all"
                                />
                                {errors.title && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.title.message as string}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Slug (URL)
                                </label>
                                <input
                                    {...register('slug')}
                                    placeholder="ex: masterclass-backend"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Description Globale
                                </label>
                                <textarea
                                    {...register('description')}
                                    rows={2}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- STEPS DYNAMIQUES --- */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-indigo-400">
                                Étapes de progression
                            </h2>
                            <button
                                type="button"
                                onClick={() =>
                                    append({
                                        order: fields.length + 1,
                                        title: '',
                                        description: '',
                                        icon: 'BookOpen',
                                        status: 'NOT_STARTED',
                                        topics: '',
                                        moduleId: '',
                                    })
                                }
                                className="flex items-center gap-2 text-sm bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 px-4 py-2 rounded-lg border border-indigo-500/20 transition-all"
                            >
                                <Plus size={18} /> Ajouter un module au parcours
                            </button>
                        </div>

                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="bg-card p-6 rounded-2xl border border-card-border relative group animate-in slide-in-from-right-4 duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-indigo-500 text-white text-xs font-black px-3 py-1 rounded-full">
                                            Étape {index + 1}
                                        </span>
                                        <span className="text-slate-500 text-xs italic">
                                            Associez un module existant à cette
                                            étape
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                move(index, index - 1)
                                            }
                                            disabled={index === 0}
                                            className="p-2 text-slate-500 hover:text-white disabled:opacity-10"
                                        >
                                            <MoveUp size={16} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                move(index, index + 1)
                                            }
                                            disabled={
                                                index === fields.length - 1
                                            }
                                            className="p-2 text-slate-500 hover:text-white disabled:opacity-10"
                                        >
                                            <MoveDown size={16} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="p-2 text-red-500/50 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest font-bold text-indigo-500 mb-1">
                                                Module correspondant
                                            </label>
                                            <select
                                                {...register(
                                                    `steps.${index}.moduleId`,
                                                )}
                                                className="w-full bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-indigo-500"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <option>
                                                            Chargement des
                                                            modules...
                                                        </option>
                                                    </>
                                                ) : (
                                                    <>
                                                        <option
                                                            value=""
                                                            className="bg-[#1c1c21]"
                                                        >
                                                            Sélectionner le
                                                            module
                                                        </option>
                                                        {Array.isArray(
                                                            modules?.data,
                                                        ) &&
                                                            modules?.data.map(
                                                                (m) => (
                                                                    <option
                                                                        key={
                                                                            m.id
                                                                        }
                                                                        value={
                                                                            m.id
                                                                        }
                                                                        className="bg-[#1c1c21]"
                                                                    >
                                                                        {
                                                                            m.title
                                                                        }
                                                                    </option>
                                                                ),
                                                            )}
                                                    </>
                                                )}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                                                Titre du step
                                            </label>
                                            <input
                                                {...register(
                                                    `steps.${index}.title`,
                                                )}
                                                placeholder="Titre de l'étape"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                                                Description du step
                                            </label>
                                            <textarea
                                                {...register(
                                                    `steps.${index}.description`,
                                                )}
                                                placeholder="Description..."
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Colonne Droite: Config */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                                                Compétences / Topics
                                            </label>
                                            <input
                                                {...register(
                                                    `steps.${index}.topics`,
                                                )}
                                                placeholder="ex: ['Authentification', 'JWT', 'Middleware']"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-indigo-500"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                                                    Statut initial
                                                </label>
                                                <select
                                                    {...register(
                                                        `steps.${index}.status`,
                                                    )}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs outline-none"
                                                >
                                                    <option
                                                        value="NOT_STARTED"
                                                        className="bg-[#1c1c21]"
                                                    >
                                                        Pas commencé
                                                    </option>
                                                    <option
                                                        value="IN_PROGRESS"
                                                        className="bg-[#1c1c21]"
                                                    >
                                                        En cours
                                                    </option>
                                                    <option
                                                        value="COMPLETED"
                                                        className="bg-[#1c1c21]"
                                                    >
                                                        Terminé
                                                    </option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                                                    Icône (Lucide)
                                                </label>
                                                <input
                                                    {...register(
                                                        `steps.${index}.icon`,
                                                    )}
                                                    placeholder="ex: Code, Lock, Database"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-indigo-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </MainAdminPage>
    );
}
