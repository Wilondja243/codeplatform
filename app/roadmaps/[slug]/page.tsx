'use client';

import React, { use } from 'react';

import {
    ChevronLeft,
    Share2,
    Star,
    Clock,
    BarChart3,
    Play,
    Lock,
    CheckCircle2,
    Terminal,
    FileCode,
    Box,
    Layers,
    Database,
    Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';

export default function RoadmapDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const param = use(params);
    const slug = param.slug;
    const router = useRouter();

    if (slug !== 'python') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-black text-slate-900 uppercase">
                        Roadmap non disponible
                    </h2>
                    <button
                        onClick={() => router.back()}
                        className="text-primary font-bold hover:underline"
                    >
                        Retourner aux parcours
                    </button>
                </div>
            </div>
        );
    }

    const pythonSteps = [
        {
            id: 1,
            icon: <Terminal size={24} />,
            title: 'Les Fondamentaux',
            desc: 'Maîtrisez la syntaxe pure : variables, types de données (listes, dictionnaires), et structures de contrôle (if, while, for).',
            status: 'current',
            topics: [
                'Variables & Types',
                'Logique de contrôle',
                'Fonctions & Portée',
            ],
        },
        {
            id: 2,
            icon: <FileCode size={24} />,
            title: 'Gestion de Fichiers',
            desc: 'Apprenez à manipuler le système : lecture/écriture de fichiers TXT, CSV et JSON, et gestion sécurisée avec les context managers.',
            status: 'locked',
            topics: [
                'I/O Operations',
                'Format JSON',
                'Context Managers (with)',
            ],
        },
        {
            id: 3,
            icon: <Layers size={24} />,
            title: 'Programmation Orientée Objet',
            desc: 'Passez au niveau supérieur : classes, objets, héritage et encapsulation pour structurer des programmes complexes.',
            status: 'locked',
            topics: ['Classes & Instances', 'Méthodes spéciales', 'Héritage'],
        },
        {
            id: 4,
            icon: <Box size={24} />,
            title: 'Modules de Base',
            desc: 'Exploration de la bibliothèque standard : OS, Math, Datetime et Random pour booster vos scripts sans dépendances externes.',
            status: 'locked',
            topics: [
                'Standard Lib',
                'Import & Packages',
                'Pip & Environnements',
            ],
        },
        {
            id: 5,
            icon: <Database size={24} />,
            title: 'Persistance avec SQLite',
            desc: 'Stockage de données robuste : connectez Python à SQLite, exécutez des requêtes SQL et gérez vos bases de données localement.',
            status: 'locked',
            topics: ['SQL Fundamentals', 'Python SQLite3', 'Data Persistence'],
        },
    ];

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-white">
                <main className="max-w-4xl mx-auto px-6 pt-40 pb-20">
                    <div className="text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary border border-primary/10 mb-4">
                            <Sparkles size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                Parcours Certifiant
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter">
                            Python <br /> Essentials.
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Le guide complet pour maîtriser Python, de la
                            console à la base de données.
                        </p>
                        <div className="flex items-center justify-center gap-8 pt-4">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">
                                    Leçons
                                </p>
                                <p className="font-black text-slate-900 flex items-center gap-2">
                                    <Clock size={16} /> 24
                                </p>
                            </div>
                            <div className="h-8 w-px bg-slate-100" />
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">
                                    Niveau
                                </p>
                                <p className="font-black text-slate-900 flex items-center gap-2">
                                    <BarChart3 size={16} /> Débutant
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Roadmap */}
                    <div className="relative">
                        <div className="absolute left-10 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

                        <div className="space-y-16">
                            {pythonSteps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className="relative flex flex-col md:flex-row gap-8 md:gap-16 group"
                                >
                                    <div
                                        className={`relative z-10 size-20 rounded-[2rem] flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                                            step.status === 'current'
                                                ? 'bg-primary text-white shadow-2xl shadow-primary/40 rotate-6'
                                                : 'bg-slate-50 text-slate-300 border border-slate-100 group-hover:bg-white group-hover:border-slate-300'
                                        }`}
                                    >
                                        {step.status === 'completed' ? (
                                            <CheckCircle2 size={32} />
                                        ) : (
                                            step.icon
                                        )}
                                        <span className="absolute -top-2 -right-2 size-8 bg-white border border-slate-100 rounded-full flex items-center justify-center text-[10px] font-black text-slate-900 shadow-sm">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3
                                                    className={`text-3xl font-black tracking-tight ${step.status === 'locked' ? 'text-slate-300' : 'text-slate-900'}`}
                                                >
                                                    {step.title}
                                                </h3>
                                                {step.status === 'locked' && (
                                                    <Lock
                                                        size={20}
                                                        className="text-slate-200"
                                                    />
                                                )}
                                            </div>
                                            <p className="text-slate-500 font-medium leading-relaxed max-w-xl">
                                                {step.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {step.topics.map((topic, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-4 py-1.5 rounded-xl text-[11px] font-bold border transition-colors ${
                                                        step.status ===
                                                        'current'
                                                            ? 'bg-primary/5 border-primary/10 text-primary'
                                                            : 'bg-slate-50 border-slate-100 text-slate-400'
                                                    }`}
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        {step.status === 'current' && (
                                            <button className="flex items-center gap-3 h-12 px-6 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-primary transition-all">
                                                Lancer la première leçon
                                                <Play size={16} fill="white" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
