'use client';

import { Headset, MessageSquare, HelpCircle } from 'lucide-react';
import useNotification from '@/hooks/use-taost';

export default function ContactHero() {
    const { notifyInfo } = useNotification();
    const message = "Cette fonctionnalité n'est pas disponible pour le moment.";

    return (
        <section className="relative overflow-hidden rounded-3xl bg-bg-muted border border-card-border wrapper my-12">
            <div className="absolute -top-24 -right-24 size-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 size-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col lg-nav:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl text-center lg-nav:text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Support Réactif
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95]">
                        Parlons de votre <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            futur dans le code.
                        </span>
                    </h1>

                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
                        Que vous soyez un étudiant curieux ou un mentor
                        aspirant, notre équipe est là pour vous guider. Nous
                        répondons généralement{' '}
                        <span className="text-foreground font-bold">
                            sous 12 heures
                        </span>
                        .
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg-nav:justify-start">
                        <button
                            onClick={() => notifyInfo(message)}
                            className="flex items-center gap-2 bg-primary text-white font-bold h-14 px-10 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all active:scale-95"
                        >
                            <HelpCircle size={20} />
                            Consulter la FAQ
                        </button>
                        <button
                            onClick={() => notifyInfo(message)}
                            className="flex items-center gap-2 bg-white text-foreground font-bold h-14 px-10 rounded-2xl border border-card-border hover:bg-slate-50 transition-all shadow-sm"
                        >
                            <MessageSquare size={20} />
                            Support Direct
                        </button>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -top-6 -left-6 size-24 bg-blue-500/10 rounded-2xl blur-xl animate-pulse" />
                    <div className="absolute -bottom-6 -right-6 size-24 bg-primary/10 rounded-2xl blur-xl animate-pulse delay-700" />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-[2.5rem] border border-card-border shadow-2xl flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2">
                        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(circle,white,transparent)]">
                            <svg width="100%" height="100%">
                                <defs>
                                    <pattern
                                        id="grid-hero"
                                        width="20"
                                        height="20"
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M 20 0 L 0 0 0 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="url(#grid-hero)"
                                />
                            </svg>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <Headset
                                size={120}
                                strokeWidth={1.5}
                                className="text-primary animate-bounce-slow"
                            />
                            <div className="mt-4 px-4 py-1 bg-primary/5 rounded-full border border-primary/10">
                                <span className="text-xs font-bold text-primary italic">
                                    Online 24/7
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
