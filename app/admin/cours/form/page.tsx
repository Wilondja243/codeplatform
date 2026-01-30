'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Save,
    Layout,
    Type,
    Tag,
    Clock,
    Star,
    Link,
    Palette,
    FileText,
    Edit2,
} from 'lucide-react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import TopBar from '@/components/sections/panel/top-bar';
import Sidebar from '@/components/sections/panel/side-bar';
import { useValidateCourseForm } from '@/hooks/use-validation-cours-form';
import CourseFormSkeleton from '@/components/cours-form-skelleton';
import { CoursFormValues } from '@/lib/cours-schema';
import useNotification from '@/hooks/use-taost';

export default function CourseFormPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!!id);
    const { notifyError, notifySuccess } = useNotification();
    const [initialData, setInitialData] = useState<any>(null);

    useEffect(() => {
        if (id) {
            console.log("Appel API pour l'ID:", id);
            axios
                .get(`/api/cours/${id}`)
                .then((res) => {
                    console.log('DONNÉES REÇUES :', res.data);
                    setInitialData({ ...res.data, courseId: id });
                    setFetching(false);
                })
                .catch((err) => {
                    console.error('Erreur API:', err);
                    notifyError('Impossible de charger le cours');
                    setFetching(false);
                });
        }
    }, [id]);

    console.log('courseData : ', JSON.stringify(initialData, null, 4));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useValidateCourseForm(initialData);

    const isEditing = !!id;

    const onSubmit: SubmitHandler<CoursFormValues> = async (data) => {
        setLoading(true);

        try {
            if (isEditing) {
                await axios.patch(`/api/cours/${id}`, data);
                notifySuccess('Cours mise à jour avec success');
            } else {
                await axios.post('/api/cours', data);
                notifySuccess('Cours crée avec succès !');
            }

            router.push('/admin/cours');
            router.refresh();
        } catch (error) {
            console.log("Erreur lors de l'envoi :", error);
            notifyError('Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };

    const formKey = initialData ? initialData.courseId : 'new-course';

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                {/* ToBar */}
                <TopBar />

                {fetching ? (
                    <CourseFormSkeleton />
                ) : (
                    <form
                        key={formKey}
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex-1 py-10 overflow-y-auto bg-background custom-scrollbar"
                    >
                        <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-card-muted">
                                    Créer un nouveau cours
                                </h2>
                                <p className="text-sm text-text-muted font-medium">
                                    Configurez les détails pédagogiques de votre
                                    module.
                                </p>
                            </div>
                            <button
                                disabled={loading}
                                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-bg-muted cursor-pointer rounded-md hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20"
                            >
                                {loading ? (
                                    <div className="flex gap-x-3 items-center text-white">
                                        <ClipLoader size={20} color="white" />
                                        En cours
                                    </div>
                                ) : isEditing ? (
                                    <>
                                        <Edit2 size={18} />
                                        Modifier le cours
                                    </>
                                ) : (
                                    <>
                                        <Save size={18} />
                                        Publier le cours
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Corps du Formulaire */}
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-6">
                                <section className="bg-card border border-card-border rounded-md p-6 space-y-4">
                                    <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm uppercase tracking-wider">
                                        <Type size={16} /> Informations de base
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase">
                                            Titre du cours *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('title')}
                                            placeholder="ex: Masterclass Next.js Premium"
                                            className="w-full bg-background border border-card-border rounded-sm p-3 text-text-muted focus:border-primary/50 outline-none transition-all"
                                        />
                                        {errors.title && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.title.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase">
                                            Description *
                                        </label>
                                        <textarea
                                            rows={4}
                                            {...register('description')}
                                            placeholder="Décrivez l'objectif du cours..."
                                            className="w-full bg-background border border-card-border rounded-sm p-3 text-text-muted focus:border-primary/50 outline-none transition-all resize-none"
                                        />
                                        {errors.description && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.description.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase">
                                            Leçon (Nombre)
                                        </label>
                                        <div className="relative">
                                            <Layout
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                                                size={18}
                                            />
                                            <input
                                                type="number"
                                                {...register('lesson')}
                                                placeholder="nombre de leçons"
                                                className="w-full bg-background text-text-muted border border-card-border rounded-sm py-3 pl-10 pr-4 focus:border-primary/50 outline-none"
                                            />
                                            {errors.lesson && (
                                                <span className="text-red-500 pt-0.5 font-semibold">
                                                    {errors.lesson.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-card border border-card-border rounded-md p-6 space-y-4">
                                    <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm uppercase tracking-wider">
                                        <Link size={16} /> SEO & Identifiants
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase">
                                            Slug Unique *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('slug')}
                                            placeholder="python-masterclass"
                                            className="w-full bg-background border border-card-border rounded-sm p-3 text-text-muted font-mono text-sm focus:border-primary/50 outline-none"
                                        />
                                        {errors.slug && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.slug.message}
                                            </span>
                                        )}
                                    </div>
                                </section>
                            </div>

                            {/* Colonne Latérale (Paramètres) */}
                            <div className="space-y-6">
                                <section className="bg-card border border-card-border rounded-md p-6 space-y-6">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                        <Tag size={16} /> Métadonnées
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase flex items-center gap-2">
                                            <Tag size={12} /> Tag
                                        </label>
                                        <input
                                            type="text"
                                            {...register('tag')}
                                            placeholder="Développement"
                                            className="w-full bg-background border border-card-border rounded-sm p-2.5 text-sm text-bg-muted outline-none"
                                        />
                                        {errors.tag && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.tag.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase flex items-center gap-2">
                                            <Clock size={12} /> Durée
                                        </label>
                                        <input
                                            type="text"
                                            {...register('duration')}
                                            placeholder="12h 30min"
                                            className="w-full bg-background border border-card-border rounded-sm p-2.5 text-sm text-text-muted outline-none"
                                        />
                                        {errors.duration && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.duration.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-bg-muted uppercase flex items-center gap-2">
                                            <Star size={12} /> Note (Rating)
                                        </label>
                                        <input
                                            type="number"
                                            {...register('note')}
                                            step="0.1"
                                            defaultValue="0"
                                            className="w-full bg-background border border-card-border rounded-sm p-2.5 text-sm text-text-muted outline-none"
                                        />
                                        {errors.note && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.note.message}
                                            </span>
                                        )}
                                    </div>
                                </section>

                                <section className="bg-card border border-card-border rounded-md p-6 space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                        <Palette size={16} /> Apparence
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase">
                                            Icône (Nom Lucide)
                                        </label>
                                        <input
                                            type="text"
                                            {...register('icon')}
                                            placeholder="BookOpen"
                                            className="w-full bg-background text-text-muted border border-card-border rounded-sm p-2.5 text-sm outline-none"
                                        />
                                        {errors.icon && (
                                            <span className="text-red-500 pt-0.5 font-semibold">
                                                {errors.icon.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase">
                                            Couleur d'accent
                                        </label>
                                        <div className="flex gap-3 mt-2">
                                            {[
                                                '#2563eb',
                                                '#06b6d4',
                                                '#8b5cf6',
                                                '#ec4899',
                                            ].map((c) => (
                                                <button
                                                    key={c}
                                                    className="w-8 h-8 rounded-full border-2 border-background"
                                                    style={{
                                                        backgroundColor: c,
                                                    }}
                                                />
                                            ))}
                                            <input
                                                type="color"
                                                {...register('color')}
                                                className="w-8 h-8 bg-transparent border-none outline-none cursor-pointer"
                                            />
                                            {errors.color && (
                                                <span className="text-red-500 pt-0.5 font-semibold">
                                                    {errors.color.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
