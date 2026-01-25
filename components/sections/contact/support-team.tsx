'use client';

import { MessageCircle } from 'lucide-react';

const team = [
    {
        name: 'Wilondja',
        last: 'Ebuela',
        role: 'Responsable Support',
        image: '/images/1366.jpg',
    },
    {
        name: 'Blaise',
        last: 'Munyamihana',
        role: 'Responsable Communauté',
        image: '/images/4271.jpg',
    },
];

export default function SupportTeam() {
    return (
        <section className="py-24 bg-bg-muted border-y border-card-border">
            <div className="wrapper">
                {/* Header Section */}
                <div className="max-w-2xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                            L'équipe derrière la plateforme
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">
                        Rencontrez nos responsables support
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg-nav:gap-12">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group relative bg-white p-8 rounded-[2rem] border border-card-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                        >
                            {/* Décoration en arrière-plan de la carte */}
                            <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />

                            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                                {/* Portrait avec anneau de design */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={member.image}
                                        className="relative w-28 h-28 object-cover rounded-2xl shadow-lg border-4 border-white transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                                        alt={`Portrait de ${member.name} ${member.last}`}
                                    />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-foreground tracking-tight">
                                            {member.name} {member.last}
                                        </h4>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">
                                            {member.role}
                                        </p>
                                    </div>

                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-primary transition-all shadow-lg shadow-slate-200 hover:shadow-primary/30 active:scale-95"
                                    >
                                        <MessageCircle size={16} />
                                        Discuter avec {member.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
