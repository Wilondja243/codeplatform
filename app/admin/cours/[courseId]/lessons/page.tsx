'use client';

import React, { useState, useEffect, useTransition } from 'react';
import {
    Plus,
    Search,
    GripVertical,
    Pencil,
    Trash2,
    Eye,
    FileText,
    Clock,
    BookOpen,
    CheckCircle2,
    CircleCheck,
    CircleDashed,
    ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import MainAdminPage from '@/components/sections/panel/main-admin-page';
import { useLessonsByModuleQuery } from '@/lib/query/course.query';
import useNotification from '@/hooks/use-taost';
import Status from '@/components/status';

export default function LessonPage() {
    const params = useParams();
    const searchParam = useSearchParams();
    const courseId = params.courseId as string;
    const moduleId = searchParam.get('moduleId');
    const [searchTerm, setSearchTerm] = useState('');

    const { notifyError } = useNotification();
    const {
        data: lessons,
        isLoading,
        error,
        isError,
    } = useLessonsByModuleQuery({ moduleId: String(moduleId), courseId });

    if (isError) notifyError(error?.message as string);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    return (
        <MainAdminPage>
            <div className="flex-1 p-8 bg-background overflow-y-auto">
                {/* Header avec Fil d'Ariane */}
                <div className="max-w-5xl mx-auto mb-10">
                    <Link
                        href="/admin-1001/cours"
                        className="flex items-center gap-2 text-text-muted hover:text-primary mb-4 transition-colors group"
                    >
                        <ChevronLeft
                            size={18}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        <span className="text-sm font-medium">
                            Retour aux cours
                        </span>
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold text-text-main tracking-tight">
                                Python Masterclass
                            </h1>
                            <p className="text-text-muted mt-1">
                                Gérez les chapitres et le contenu pédagogique de
                                ce module.
                            </p>
                        </div>
                        <Link
                            href={`/admin-1001/cours/${courseId}/lessons/add?moduleId=${moduleId}`}
                            className="bg-primary text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 shadow-lg hover:opacity-90 transition-all text-sm"
                        >
                            <Plus size={20} />
                            Nouvelle Leçon
                        </Link>
                    </div>
                </div>

                {/* Statistiques Rapides */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        icon={<FileText className="text-blue-500" />}
                        label="Total Leçons"
                        value="12"
                    />
                    <StatCard
                        icon={<Clock className="text-purple-500" />}
                        label="Durée Totale"
                        value="4h 30min"
                    />
                    <StatCard
                        icon={<CheckCircle2 className="text-green-500" />}
                        label="Publiées"
                        value="8/12"
                    />
                </div>

                {/* Barre de recherche et filtres */}
                <div className="max-w-5xl mx-auto mb-6 flex gap-4">
                    <div className="relative flex-1">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Rechercher une leçon..."
                            className="w-full pl-10 pr-4 py-3 bg-card border border-card-border rounded-xl outline-none focus:border-primary transition-all text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Liste des Leçons */}
                <div className="max-w-5xl mx-auto space-y-3">
                    {isLoading ? (
                        [1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="h-20 w-full bg-card/50 animate-pulse rounded-2xl border border-card-border"
                            />
                        ))
                    ) : error ||
                      !lessons?.data ||
                      lessons?.data.length === 0 ? (
                        <div className="text-center py-12 bg-card rounded-2xl border-2 border-dashed border-card-border">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BookOpen size={24} className="text-primary" />
                            </div>
                            <p className="text-text-muted font-medium">
                                Aucune leçon pour le moment.
                            </p>
                            <Link
                                href={`/admin-1001/cours/${courseId}/lessons/add?moduleId=${moduleId}`}
                                className="text-primary text-sm font-bold hover:underline mt-2 inline-block"
                            >
                                Ajouter votre première leçon
                            </Link>
                        </div>
                    ) : (
                        lessons?.data.map((lesson: any) => (
                            <div
                                key={lesson.id}
                                className="bg-card border border-card-border rounded-2xl p-4 flex items-center gap-4 group hover:border-primary/40 transition-all hover:shadow-md"
                            >
                                <div className="cursor-grab text-card-border group-hover:text-text-muted transition-colors">
                                    <GripVertical size={20} />
                                </div>

                                <div className="w-10 h-10 rounded-xl bg-background border border-card-border flex items-center justify-center text-sm font-black text-primary shadow-sm">
                                    {lesson.order}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-text-main group-hover:text-primary transition-colors truncate">
                                        {lesson.title}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-1">
                                        <span className="text-[11px] text-text-muted flex items-center gap-1 font-medium">
                                            <Clock size={12} />{' '}
                                            {lesson.duration || '5 min'}
                                        </span>
                                        <Status status={lesson.status} />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 bg-background/50 p-1 rounded-xl border border-card-border opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ActionLink
                                        href={`/admin-1001/cours/${courseId}/lessons/${lesson.id}?moduleId=${moduleId}`}
                                        icon={<Pencil size={16} />}
                                        className="hover:bg-primary/10 hover:text-primary"
                                    />
                                    <ActionLink
                                        href={``}
                                        // href={`/cours/${course.slug}/${lesson.id}`}
                                        icon={<Eye size={16} />}
                                        className="hover:bg-blue-500/10 hover:text-blue-500"
                                    />
                                    <button className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </MainAdminPage>
    );
}

// Composants Utilitaires
const StatCard = ({ icon, label, value }: any) => (
    <div className="bg-card border border-card-border p-5 rounded-2xl flex items-center gap-4">
        <div className="p-3 bg-background rounded-xl border border-card-border">
            {icon}
        </div>
        <div>
            <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
                {label}
            </p>
            <p className="text-xl font-bold text-text-main">{value}</p>
        </div>
    </div>
);

const ActionLink = ({ href, icon, label }: any) => (
    <Link
        href={href}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-muted hover:bg-background hover:text-primary rounded-lg transition-all border border-transparent hover:border-card-border"
    >
        {icon}
        <span className="hidden sm:inline">{label}</span>
    </Link>
);
