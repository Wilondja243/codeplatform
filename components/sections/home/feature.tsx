'use client';

import { features } from '@/data/data';
import * as LucideIcons from 'lucide-react';

export default function Features() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="wrapper max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Avantage Compétitif
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Pourquoi choisir <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-blue-600">
                                    CodePlatform
                                </span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-50 -z-10"></span>
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-md text-slate-500 text-lg leading-relaxed font-medium">
                        Nous forgeons des carrières via la pratique réelle. Le
                        code n'est pas une théorie, c'est un{' '}
                        <span className="text-slate-900 font-bold">
                            outil de création
                        </span>
                        .
                    </p>
                </div>

                {/* Grid avec design "Border-Flow" */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden">
                    {features.map((feature: any) => {
                        const Icon =
                            LucideIcons[
                                feature.icon as keyof typeof LucideIcons
                            ];

                        return (
                            <div
                                key={feature.id}
                                className="group relative bg-white p-10 flex flex-col items-start transition-all duration-500 hover:bg-slate-50/50"
                            >
                                {/* Icon Container - Nouveau style : Square Soft */}
                                {Icon && (
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 scale-150 group-hover:scale-100"></div>
                                        <div className="relative w-14 h-14 flex items-center justify-center border border-slate-200 bg-white text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 rounded-2xl transition-all duration-500 group-hover:rotate-[10deg]">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Arrow indicator - Minimaliste */}
                                <div className="mt-8 flex items-center gap-2 text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-sm">
                                    En savoir plus
                                    <LucideIcons.ArrowRight size={16} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
