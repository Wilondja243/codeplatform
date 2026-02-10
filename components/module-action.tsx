'use client';

import { useEffect, useState, useRef } from 'react';
import {
    Eye,
    Pencil,
    Trash2,
    MoreVertical,
    PlusCircle,
    BarChart3,
} from 'lucide-react';
import DropdownLink from './ui/drop-down';

export default function ModuleActions({
    courseId,
    m,
    course,
    setModuleToDelete,
    setDeleteModalOpen,
    setSelectedCourse,
    setSelectedModule,
    setIsModalOpen,
}: any) {
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
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="flex items-center gap-1 opacity-0 group-hover/module:opacity-100 transition-opacity">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCourse({ id: course.id, title: course.title });
                    setSelectedModule({
                        id: m?.id,
                        title: m?.title,
                    });
                    setIsModalOpen(true);
                }}
                className="p-2 hover:bg-white/10 rounded-lg text-text-muted cursor-pointer"
            >
                <Pencil size={14} />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setModuleToDelete({
                        id: m.id,
                        title: m.title,
                        courseId: course.id,
                    });
                    setDeleteModalOpen(true);
                }}
                className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 cursor-pointer"
            >
                <Trash2 size={14} />
            </button>
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`cursor-pointer p-2 rounded-lg transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-background hover:text-text-main'}`}
                >
                    <MoreVertical size={20} />
                </button>

                {/* Menu Déroulant */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-card border border-card-border rounded-xl shadow-xl z-50 py-2 animate-in fade-in zoom-in duration-200">
                        <DropdownLink
                            href={`/admin-1001/cours/${courseId}/lessons/add?moduleId=${m.id}`}
                            icon={<PlusCircle size={16} />}
                            label="Ajouter une leçon"
                        />
                        <DropdownLink
                            href={`/admin-1001/cours/${courseId}/lessons?moduleId=${m.id}`}
                            icon={<Eye size={16} />}
                            label="Voir les leçons"
                        />
                        <DropdownLink
                            href={`/admin-1001/analytics/${courseId}`}
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
    );
}
