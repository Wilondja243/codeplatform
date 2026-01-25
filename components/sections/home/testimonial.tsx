import React from 'react';
import { testimonials } from '@/data/data';

export default function Testimonials() {
    return (
        <section className="py-24 bg-[#fafafa] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="wrapper max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-cyan-600 bg-cyan-50 rounded-full">
                        Témoignages
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        Histoires de{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
                            réussite
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
                        Rejoignez des milliers de développeurs qui ont
                        transformé leur carrière grâce à notre approche
                        pratique.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid bg-white/70 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group"
                        >
                            <div className="mb-6 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg
                                    width="35"
                                    height="25"
                                    viewBox="0 0 35 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 25V12.5L6.25 0H12.5L8.75 12.5H12.5V25H0ZM18.75 25V12.5L25 0H31.25L27.5 12.5H31.25V25H18.75Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>

                            <p className="text-[1.1rem] leading-relaxed text-slate-700 italic mb-8 font-medium">
                                "{t.feedback}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div
                                    className="w-14 h-14 rounded-2xl bg-cover bg-center shadow-inner border-2 border-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                                    style={{
                                        backgroundImage: `url(${t.image})`,
                                    }}
                                    aria-label={`Portrait de ${t.name}`}
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg tracking-tight">
                                        {t.name}
                                    </h4>
                                    <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                                        {t.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
