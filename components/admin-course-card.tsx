'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    BookOpen,
    Star,
    Map,
    Pencil,
    Trash2,
    Layers,
    ChevronDown,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import ModuleActions from './module-action';

export const CourseItem = ({
    course,
    isExpanded,
    onToggle,
    onEdit,
    setSelectedCourse,
    setSelectedModule,
    setModuleToDelete,
    setDeleteModalOpen,
    setIsModalOpen,
}: any) => {
    const router = useRouter();
    const courseId = course?.id;

    return (
        <div
            className={`group transition-all duration-500 rounded-2xl border ${isExpanded ? 'bg-card border-indigo-500/30 shadow-2xl' : 'bg-[#0f0f12]/50 border-white/5 hover:border-white/10'}`}
        >
            <div className="p-4 md:px-6 flex items-center justify-between gap-4">
                <div
                    className="flex items-center gap-6 cursor-pointer flex-1"
                    onClick={onToggle}
                >
                    <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-indigo-600 text-white rotate-6' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}
                    >
                        <BookOpen size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {course.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                                <Layers size={14} />{' '}
                                {course.modules?.length || 0} Modules
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                Actif
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={onEdit}
                        title="Modifier le cours"
                        className="p-3 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
                    >
                        <Pencil size={20} />
                    </button>
                    <button
                        title="Supprimer le cours"
                        className="p-3 hover:bg-red-500/10 rounded-xl text-slate-500 hover:text-red-500 transition-all cursor-pointer"
                    >
                        <Trash2 size={20} />
                    </button>
                    <button
                        onClick={() =>
                            router.push(
                                `/admin-1001/cours/${courseId}/roadmaps/add`,
                            )
                        }
                        title="Ajouter un roadmap"
                        className="p-3 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
                    >
                        <Map size={20} />
                    </button>
                    <button
                        onClick={onToggle}
                        className={`p-3 rounded-xl transition-all ${isExpanded ? 'bg-indigo-500/10 text-indigo-400 rotate-180' : 'text-slate-600'}`}
                    >
                        <ChevronDown size={24} />
                    </button>
                </div>
            </div>

            {/* --- MODULES EXPANDABLE --- */}
            {isExpanded && (
                <div className="px-6 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <div className="flex items-center justify-between px-2 mb-4">
                        <span className="text-xs font-black uppercase tracking-widest text-indigo-500">
                            Structure du curriculum
                        </span>
                        <button
                            onClick={() => {
                                setSelectedCourse({
                                    id: course.id,
                                    title: course.title,
                                });
                                setIsModalOpen(true);
                            }}
                            className="..."
                        >
                            + Ajouter un module
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {course.modules?.length > 0 ? (
                            course.modules.map((m: any, idx: number) => (
                                <div
                                    key={m.id}
                                    className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/[0.05] rounded-2xl group/module hover:bg-white/[0.06] transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold text-indigo-500 size-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            {idx + 1}
                                        </span>
                                        <span className="font-semibold text-sm">
                                            {m.title}
                                        </span>
                                    </div>
                                    <ModuleActions
                                        m={m}
                                        courseId={courseId}
                                        course={course}
                                        setModuleToDelete={setModuleToDelete}
                                        setDeleteModalOpen={setDeleteModalOpen}
                                        setSelectedCourse={setSelectedCourse}
                                        setSelectedModule={setSelectedModule}
                                        setIsModalOpen={setIsModalOpen}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-8 text-center rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
                                <p className="text-sm text-slate-500 italic">
                                    Aucun module n&apos;a encore été créé pour
                                    cette formation.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
