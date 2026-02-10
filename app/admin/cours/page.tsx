'use client';

import React, { useState } from 'react';
import {
    Plus,
    BookOpen,
    Users,
    Pencil,
    Trash2,
    ChevronDown,
    Layers,
    GraduationCap,
    RefreshCw,
    MoreVertical,
    FileText,
    Layout,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AddModuleModal from '@/components/ui/add-module-modal';
import Sidebar from '@/components/sections/panel/side-bar';
import TopBar from '@/components/sections/panel/top-bar';
import { useCoursesQuery } from '@/lib/query/course.query';
import { deleteModuleAction } from '@/actions/course/course';
import useNotification from '@/hooks/use-taost';
import { CourseItem } from '@/components/admin-course-card';
import { CourseSkeleton } from '@/components/course-skelleton';
import DeleteConfirmModal from '@/components/ui/delete-confirm-modal';

export default function AdminCoursesPage() {
    const router = useRouter();
    const { notifyError, notifySuccess } = useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
    const [selectedModule, setSelectedModule] = useState<{
        id: string;
        title: string;
    } | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<{
        id: string;
        title: string;
    } | null>(null);

    // delete modal state
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [moduleToDelete, setModuleToDelete] = useState<{
        id: string;
        title: string;
        courseId: string;
    } | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const {
        data: courses,
        isLoading,
        isError,
        error,
        refetch,
    } = useCoursesQuery();

    if (isError) notifyError(error?.message);

    const handleDeleteModule = async (moduleId: string, courseId: string) => {
        setIsDeleting(true);
        try {
            const result = await deleteModuleAction({ moduleId, courseId });

            if (result.success) {
                notifySuccess(result?.message as string);
                setDeleteModalOpen(false);
            } else {
                notifyError(result?.message as string);
            }
        } catch (err) {
            notifyError('Impossible de supprimer le module.');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex h-screen bg-background text-text-subtle overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />

                <main className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
                    {/* --- HEADER --- */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div>
                            <div className="flex items-center gap-2 text-text-subtle mb-2">
                                <Layout size={18} />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                                    Dashboard
                                </span>
                            </div>
                            <h1 className="text-2xl font-black tracking-tighter text-text-main">
                                Catalogue Formations
                            </h1>
                        </div>
                        <button
                            onClick={() => router.push('/admin-1001/cours/add')}
                            className="group flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-md font-bold cursor-pointer hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                            <Plus size={20} strokeWidth={3} />
                            Créer un cours
                        </button>
                    </div>

                    {/* --- STATS --- */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        <QuickStat
                            icon={<BookOpen />}
                            label="Cours"
                            value={courses?.data?.length || 0}
                        />
                        <QuickStat
                            icon={<Layers />}
                            label="Modules"
                            value="--"
                            color="text-indigo-400"
                        />
                        <QuickStat
                            icon={<FileText />}
                            label="Leçons"
                            value="--"
                            color="text-emerald-400"
                        />
                        <QuickStat
                            icon={<Users />}
                            label="Élèves"
                            value="--"
                            color="text-amber-400"
                        />
                    </div>

                    {/* --- MAIN CONTENT --- */}
                    <div className="space-y-4">
                        {isLoading ? (
                            <div className="space-y-4">
                                <CourseSkeleton />
                                <CourseSkeleton />
                            </div>
                        ) : isError ? (
                            <ErrorState
                                onRetry={refetch}
                                message={error?.message}
                            />
                        ) : courses?.data && courses.data.length > 0 ? (
                            courses.data.map((course: any) => (
                                <CourseItem
                                    key={course.id}
                                    course={course}
                                    isExpanded={expandedCourse === course.id}
                                    onToggle={() =>
                                        setExpandedCourse(
                                            expandedCourse === course.id
                                                ? null
                                                : course.id,
                                        )
                                    }
                                    onEdit={() =>
                                        router.push(
                                            `/admin-1001/cours/${course.id}/edit`,
                                        )
                                    }
                                    setSelectedCourse={setSelectedCourse}
                                    setSelectedModule={setSelectedModule}
                                    setIsModalOpen={setIsModalOpen}
                                    setModuleToDelete={setModuleToDelete}
                                    setDeleteModalOpen={setDeleteModalOpen}
                                />
                            ))
                        ) : (
                            <EmptyState />
                        )}
                    </div>
                </main>
            </div>

            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={() => {
                    if (moduleToDelete) {
                        handleDeleteModule(
                            moduleToDelete?.id,
                            moduleToDelete?.courseId,
                        );
                    }
                }}
                title="Supprimer le module"
                itemName={moduleToDelete?.title || ''}
                isPending={isDeleting}
            />

            <AddModuleModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedModule(null);
                }}
                moduleId={selectedModule?.id || null}
                moduleTitle={selectedModule?.title}
                courseId={selectedCourse?.id || null}
                courseTitle={selectedCourse?.title}
            />
        </div>
    );
}

// --- SUB-COMPONENTS ---

const QuickStat = ({ icon, label, value, color = 'text-white' }: any) => (
    <div className="bg-card border border-white/5 p-5 rounded-2xl flex items-center gap-5 hover:border-white/10 transition-all group">
        <div
            className={`p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500 ${color}`}
        >
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <div>
            <p className="text-[10px] uppercase font-black tracking-[0.15em] text-slate-500">
                {label}
            </p>
            <p className="text-2xl font-black text-white">{value}</p>
        </div>
    </div>
);

const ErrorState = ({ message, onRetry }: any) => (
    <div className="p-10 text-center bg-red-500/5 border border-red-500/20 rounded-2xl">
        <p className="text-red-400 font-medium mb-4">
            {message || 'Une erreur est survenue'}
        </p>
        <button
            onClick={onRetry}
            className="bg-red-500 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-red-600 transition-all"
        >
            <RefreshCw size={18} /> Réessayer
        </button>
    </div>
);

const EmptyState = () => (
    <div className="py-24 text-center bg-background rounded-[3rem] border border-dashed border-white/10">
        <div className="size-24 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-500">
            <BookOpen size={48} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-black text-white mb-3">
            Votre catalogue est vide
        </h2>
        <p className="text-slate-500 max-w-sm mx-auto mb-10 leading-relaxed font-medium">
            Commencez à bâtir votre empire éducatif en créant votre tout premier
            cours premium.
        </p>
        <Link
            href="/admin-1001/cours/add"
            className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-indigo-500 hover:text-white transition-all"
        >
            C&apos;est parti !
        </Link>
    </div>
);
