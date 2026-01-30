'use client';

import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import {
    Type,
    Code,
    Image as ImageIcon,
    Link as LinkIcon,
    Plus,
    Trash2,
    GripVertical,
    Save,
    List,
} from 'lucide-react';
import TopBar from '@/components/sections/panel/top-bar';
import Sidebar from '@/components/sections/panel/side-bar';

const LessonForm = () => {
    const [loading, setLoading] = useState(false);

    const { register, control, handleSubmit, watch } = useForm({
        defaultValues: {
            title: '',
            order: 1,
            contents: [{ type: 'PARAGRAPH', value: '', order: 1 }],
        },
    });

    const { fields, append, remove, move } = useFieldArray({
        control,
        name: 'contents',
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        console.log("Données à envoyer à l'API :", data);
        setLoading(false);
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
                                Nouvelle Leçon
                            </h2>
                            <p className="text-text-muted">
                                Structurez votre contenu pédagogique par blocs.
                            </p>
                        </div>
                        <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-md">
                            <Save size={20} />
                            Enregistrer la leçon
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
                                    placeholder="ex: 1. Introduction aux variables"
                                    className="text-2xl w-full bg-transparent border-b-2 border-card-border focus:border-primary outline-none pb-2 font-bold transition-all"
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
                                                ) === 'PARAGRAPH' && (
                                                    <Type size={14} />
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
                                                placeholder="Écrivez votre paragraphe ici..."
                                                className="w-full bg-background border border-card-border rounded-xl p-4 min-h-[120px] outline-none focus:ring-2 ring-primary/10 resize-none"
                                            />
                                        ) : (
                                            <input
                                                {...register(
                                                    `contents.${index}.value` as const,
                                                )}
                                                placeholder={
                                                    watch(
                                                        `contents.${index}.type`,
                                                    ) === 'IMAGE'
                                                        ? "URL de l'image..."
                                                        : 'Commande ou valeur...'
                                                }
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
                                    label="Texte"
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
};

const ToolbarButton = ({ icon, label, onClick }: any) => (
    <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 bg-card border border-card-border hover:border-primary hover:text-primary rounded-xl text-sm font-medium transition-all shadow-sm"
    >
        {icon} {label}
    </button>
);

export default LessonForm;
