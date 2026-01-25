'use client';

import Link from 'next/link';

export default function Ready() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto relative group">
                <div className="relative bg-[#0a0a0b] rounded-[2.5rem] px-8 py-16 md:px-16 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                        <svg
                            className="h-full w-full"
                            width="100%"
                            height="100%"
                        >
                            <defs>
                                <pattern
                                    id="grid"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 40 0 L 0 0 0 40"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#grid)"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="mb-8 px-4 py-1 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
                            <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
                                Accès Illimité
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight max-w-4xl leading-[1.1]">
                            Prêt à commencer votre aventure dans le{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-light-blue-400 to-indigo-400">
                                code ?
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                            Rejoignez des centaines d'étudiants qui apprennent à
                            programmer et transforment leur carrière dès
                            aujourd'hui.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="/explore"
                                className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-cyan-600 rounded-2xl hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                            >
                                Rejoignez-nous maintenant
                                <svg
                                    className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </Link>

                            <Link
                                href="/curriculum"
                                className="inline-flex items-center justify-center px-10 py-5 font-bold text-slate-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:text-white"
                            >
                                Voir le programme
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-3">
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4271.jpg" alt="student" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4442.jpg" alt="student" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4440.jpg" alt="student" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4436.jpg" alt="student" />
                                </div>
                            </div>
                            <span>+200 membres actifs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
