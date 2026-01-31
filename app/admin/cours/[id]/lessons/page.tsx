'use client';

import React, { useState } from 'react';
import {
    Plus,
    Search,
    GripVertical,
    Pencil,
    Trash2,
    Eye,
    FileText,
    Clock,
    CheckCircle2,
    CircleDashed,
    ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import TopBar from '@/components/sections/panel/top-bar';
import Sidebar from '@/components/sections/panel/side-bar';

const mockLessons = [
    {
        id: '1',
        title: 'Introduction à Python',
        duration: '10min',
        status: 'published',
        order: 1,
    },
    {
        id: '2',
        title: "Installation de l'environnement",
        duration: '15min',
        status: 'published',
        order: 2,
    },
    {
        id: '3',
        title: 'Les variables et types de données',
        duration: '25min',
        status: 'draft',
        order: 3,
    },
];

export default function LessonPage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            {/* SIDE-BAR */}
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                {/* TOP-BAR */}
                <TopBar />

                <div className="flex-1 p-8 bg-background overflow-y-auto">
                    {/* Header avec Fil d'Ariane */}
                    <div className="max-w-5xl mx-auto mb-10">
                        <Link
                            href="/admin/cours"
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
                                    Curriculum : Python Masterclass
                                </h1>
                                <p className="text-text-muted mt-1">
                                    Gérez les chapitres et le contenu
                                    pédagogique de ce module.
                                </p>
                            </div>
                            <Link
                                href="/admin/cours/id/lessons/add"
                                className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all text-sm"
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
                        {mockLessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className="bg-card border border-card-border rounded-2xl p-4 flex items-center gap-4 group hover:border-primary/40 transition-all hover:shadow-md"
                            >
                                {/* Drag Handle (Visuel) */}
                                <div className="cursor-grab text-card-border group-hover:text-text-muted transition-colors">
                                    <GripVertical size={20} />
                                </div>

                                {/* Order Badge */}
                                <div className="w-8 h-8 rounded-lg bg-background border border-card-border flex items-center justify-center text-xs font-bold text-text-muted">
                                    {lesson.order}
                                </div>

                                {/* Title & Info */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">
                                        {lesson.title}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-1">
                                        <span className="text-[11px] text-text-muted flex items-center gap-1 font-medium">
                                            <Clock size={12} />{' '}
                                            {lesson.duration}
                                        </span>
                                        <span
                                            className={`text-[11px] font-bold flex items-center gap-1 uppercase tracking-wider ${
                                                lesson.status === 'published'
                                                    ? 'text-green-500'
                                                    : 'text-amber-500'
                                            }`}
                                        >
                                            {lesson.status === 'published' ? (
                                                <CheckCircle2 size={12} />
                                            ) : (
                                                <CircleDashed size={12} />
                                            )}
                                            {lesson.status === 'published'
                                                ? 'Publiée'
                                                : 'Brouillon'}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <ActionLink
                                        href={`/admin/lessons/edit/${lesson.id}`}
                                        icon={<Pencil size={16} />}
                                        label="Éditer"
                                    />
                                    <ActionLink
                                        href={`/lessons/${lesson.id}`}
                                        icon={<Eye size={16} />}
                                        label="Voir"
                                    />
                                    <button className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
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
