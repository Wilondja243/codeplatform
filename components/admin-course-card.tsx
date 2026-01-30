'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    MoreVertical,
    BookOpen,
    Star,
    Pencil,
    Trash2,
    PlusCircle,
    Eye,
    BarChart3,
    ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import DropdownLink from './ui/drop-down';

export default function AdminCourseCard({ course }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-card rounded-2xl border border-card-border overflow-hidden hover:shadow-xl transition-all group relative">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div
                        className="p-3 rounded-xl bg-primary/10 text-primary"
                        dangerouslySetInnerHTML={{ __html: course.icon }}
                    />

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-background hover:text-text-main'}`}
                        >
                            <MoreVertical size={20} />
                        </button>

                        {/* Menu Déroulant */}
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-card border border-card-border rounded-xl shadow-xl z-50 py-2 animate-in fade-in zoom-in duration-200">
                                <DropdownLink
                                    href={`/admin/cours/${course.id}/lessons/add`}
                                    icon={<PlusCircle size={16} />}
                                    label="Ajouter une leçon"
                                />
                                <DropdownLink
                                    href={`/admin/cours/${course.id}/lessons`}
                                    icon={<Eye size={16} />}
                                    label="Voir les leçons"
                                />
                                <DropdownLink
                                    href={`/admin/analytics/${course.id}`}
                                    icon={<BarChart3 size={16} />}
                                    label="Statistiques"
                                />
                                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 border-t border-card-border hover:bg-red-500/10 transition-colors">
                                    <Trash2 size={16} /> Supprimer le cours
                                </button>
                            </div>
                        )}
                    </div>
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
                        <Star size={14} className="text-amber-400" />{' '}
                        {course.rating || course.note}
                    </span>
                </div>
            </div>

            <div className="flex border-t border-card-border bg-slate-50/5">
                <Link
                    href={`/admin/cours/form?id=${course.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-text-subtle hover:bg-card hover:text-primary transition-all border-r border-card-border"
                >
                    <Pencil size={16} /> Éditer
                </Link>
                <Link
                    href={`/cours/${course.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-text-subtle hover:bg-background hover:text-indigo-500 transition-all"
                >
                    <Eye size={16} /> Aperçu
                </Link>
            </div>
        </div>
    );
}
