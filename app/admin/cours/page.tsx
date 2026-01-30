'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Course } from '@/app/generated/prisma';
import {
    Plus,
    BookOpen,
    Users,
    Star,
    MoreVertical,
    Pencil,
    Trash2,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/sections/panel/top-bar';
import Sidebar from '@/components/sections/panel/side-bar';
import { CourseSkeleton } from '@/components/course-skelleton';
import useNotification from '@/hooks/use-taost';

export default function AdminCoursesPage() {
    const router = useRouter();
    const { notifyError } = useNotification();
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setError(null);
                const { data } = await axios.get('/api/cours');
                setCourses(data);
            } catch (error) {
                setError(
                    'Impossible de charger les cours. Vérifiez votre connexion.',
                );
                notifyError(
                    'Impossible de charger les cours. Vérifiez votre connexion.',
                );
                console.error('Erreur chargement:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="min-h-screen bg-background-dark p-6 lg:p-10">
                        {/* --- HEADER SECTION --- */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                            <div>
                                <h1 className="text-3xl font-bold text-text-main">
                                    Gestion des Formations
                                </h1>
                                <p className="text-text-muted mt-1">
                                    Créez, éditez et gérez votre catalogue de
                                    cours premium.
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    router.push('/admin/cours/form')
                                }
                                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-semibold transition-all shadow-sm cursor-pointer"
                            >
                                <Plus size={20} />
                                Nouveau cours
                            </button>
                        </div>

                        {/* --- QUICK STATS --- */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <StatCard
                                icon={<BookOpen className="text-blue-600" />}
                                label="Total Cours"
                                value={courses.length.toString()}
                                color="bg-blue-50/10"
                            />
                            <StatCard
                                icon={<Users className="text-purple-600" />}
                                label="Étudiants"
                                value="1,284"
                                color="bg-purple-50/10"
                            />
                            <StatCard
                                icon={<Star className="text-amber-600" />}
                                label="Note Moyenne"
                                value="4.8"
                                color="bg-amber-50/10"
                            />
                        </div>

                        {/* --- COURSES GRID --- */}
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <CourseSkeleton key={i} />
                                ))}
                            </div>
                        ) : courses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.map((course) => (
                                    <AdminCourseCard
                                        key={course.id}
                                        course={course}
                                    />
                                ))}
                            </div>
                        ) : (
                            <EmptyState
                                error={error}
                                fetchCourses={fetchCourses}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


// --- SOUS-COMPOSANTS ---

const StatCard = ({ icon, label, value, color }: any) => (
    <div className="bg-card p-6 rounded-2xl border border-card-border shadow-sm flex items-center gap-4">
        <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
        <div>
            <p className="text-sm text-text-main font-medium">{label}</p>
            <p className="text-2xl font-bold text-text-muted">{value}</p>
        </div>
    </div>
);

const AdminCourseCard = ({ course }: any) => (
    <div className="bg-card rounded-2xl border border-card-border overflow-hidden hover:shadow-xl transition-shadow group relative">
        
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div dangerouslySetInnerHTML={{ __html: course.icon }} />
                <button className="text-text-muted hover:text-text-main p-1">
                    <MoreVertical size={20} />
                </button>
            </div>

            <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                {course.title}
            </h3>
            <p className="text-text-muted text-sm line-clamp-2 mb-4">
                {course.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-text-subtle uppercase tracking-wider">
                <span className="flex items-center gap-1">
                    <BookOpen size={14} /> {course.lesson} Leçons
                </span>
                <span className="flex items-center gap-1">
                    <Star size={14} className="text-amber-400" /> {course.note}
                </span>
            </div>
        </div>

        <div className="flex border-t border-card-border bg-slate-50/5">
            <Link
                href={`/admin/cours/form?id=${course.id}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-slate-600 hover:bg-card hover:text-indigo-600 transition-all border-r border-slate-100"
            >
                <Pencil size={16} /> Éditer
            </Link>
            <Link
                href=""
                className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-red-500 hover:bg-card transition-all"
            >
                <Trash2 size={16} /> Supprimer
            </Link>
        </div>
    </div>
);

const EmptyState = ({ error, fetchCourses }: any) =>
    error ? (
        <div className="flex flex-col items-center justify-center p-10">
            <p className="text-red-500 mb-4">{error}</p>
            <button
                onClick={() => fetchCourses()}
                className="bg-primary text-card px-4 py-2 rounded"
            >
                Réessayer
            </button>
        </div>
    ) : (
        <div className="text-center py-20 bg-card-d rounded-md border border-card-d-border">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
                Aucun cours pour le moment
            </h3>
            <p className="text-slate-500 mb-6">
                Commencez par ajouter votre première formation premium.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium">
                Ajouter maintenant
            </button>
        </div>
    );
