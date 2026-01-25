'use client';

import { MessageSquare, Calendar, Users } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section className="relative bg-bg-muted py-24 px-8 border-t border-card-border overflow-hidden">
            {/* Effet de lumière central pour le focus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="wrapper relative z-10 text-center space-y-10">
                {/* Badge Communauté */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-card-border shadow-sm">
                    <Users size={16} className="text-primary" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                        +50,000 Étudiants nous ont rejoint
                    </span>
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
                        Voulez-vous rejoindre <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                            la conversation ?
                        </span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Rejoignez notre communauté mondiale sur Discord pour
                        partager des idées, trouver des partenaires d’étude et
                        obtenir de l’aide de mentors experts.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                    <a
                        href="#"
                        className="group flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all active:scale-95 w-full sm:w-auto justify-center"
                    >
                        <MessageSquare
                            size={22}
                            className="group-hover:rotate-12 transition-transform"
                        />
                        Rejoindre Discord
                    </a>
                    <a
                        href="#"
                        className="group flex items-center gap-3 bg-white text-foreground px-10 py-5 rounded-2xl font-black border border-card-border hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm w-full sm:w-auto justify-center"
                    >
                        <Calendar
                            size={22}
                            className="text-slate-400 group-hover:text-primary transition-colors"
                        />
                        Planifier une démo
                    </a>
                </div>

                {/* Petite note de confiance */}
                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest pt-4">
                    Gratuit • Sans engagement • Communauté active
                </p>
            </div>
        </section>
    );
}
