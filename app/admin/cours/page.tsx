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
import { useCoursesQuery } from '@/lib/query/query.cours';
import useNotification from '@/hooks/use-taost';
import AdminCourseCard from '@/components/admin-course-card';

export default function AdminCoursesPage() {
    const router = useRouter();
    const { notifyError } = useNotification();
    const { data: courses, isLoading, error, refetch } = useCoursesQuery();

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
                                onClick={() => router.push('/admin/cours/form')}
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
                                value={courses?.length.toString()}
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
                        {isLoading || error || !courses ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <CourseSkeleton key={i} />
                                ))}
                            </div>
                        ) : courses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.map((course: any) => (
                                    <AdminCourseCard
                                        key={course.id}
                                        course={course}
                                    />
                                ))}
                            </div>
                        ) : (
                            <EmptyState error={error} fetchCourses={refetch} />
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
        <div className="text-center py-20 bg-card rounded-xl border border-card-border">
            <div className="bg-slate-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} className="text-text-muted" />
            </div>
            <h3 className="text-xl font-bold text-text-subtle">
                Aucun cours pour le moment
            </h3>
            <p className="text-text-muted mb-6">
                Commencez par ajouter votre première formation premium.
            </p>
            <Link
                href="/admin/cours/form"
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark cursor-pointer"
            >
                Ajouter maintenant
            </Link>
        </div>
    );
