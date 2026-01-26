import React from 'react';
import { ArrowRight, PlayCircle, Sparkles, ChevronDown } from 'lucide-react';

export default function RoadmapHero() {
    return (
        <section className="relative w-full pt-24 pb-16 lg:pt-40 bg-white overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-8">
                    <Sparkles size={14} className="text-primary fill-primary" />
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500">
                        La méthode la plus rapide pour apprendre
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                    Maîtrisez votre <br />
                    <span className="text-primary underline decoration-8 underline-offset-8 decoration-primary/10">
                        parcours
                    </span>{' '}
                    professionnel.
                </h1>

                <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                    Suivez des roadmaps structurées créées par des experts du
                    secteur pour passer de débutant à prêt pour l'emploi en
                    quelques mois, pas des années.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <button className="w-full sm:w-auto h-16 px-12 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-primary transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group">
                        Commencer maintenant
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </button>

                    <button className="w-full sm:w-auto h-16 px-10 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                        <PlayCircle size={22} className="text-primary" />
                        Comment ça marche
                    </button>
                </div>

                {/* Indicateur de défilement ou preuve sociale légère */}
                <div className="mt-20 flex flex-col items-center gap-4 text-slate-300">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                        Découvrir les roadmaps
                    </p>
                    <ChevronDown size={20} className="animate-bounce" />
                </div>
            </div>
        </section>
    );
}
