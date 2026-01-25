'use client';

import { Mail, MessageCircle, Linkedin, ArrowUpRight } from 'lucide-react';

const methods = [
    {
        icon: <Mail size={24} />,
        title: 'Email',
        description:
            'Notre équipe amicale est là pour vous aider avec toute question.',
        contact: 'monalinacampany@gmail.com',
        href: 'mailto:monalinacampany@gmail.com',
        blank: false,
    },
    {
        icon: <MessageCircle size={24} />,
        title: 'WhatsApp',
        description:
            'Contactez-nous directement via WhatsApp pour une réponse rapide.',
        contact: '+257 62 10 95 22',
        href: 'https://wa.me/62109522',
        blank: true,
    },
    {
        icon: <Linkedin size={24} />,
        title: 'LinkedIn',
        description:
            'Connectez-vous avec nous pour des partenariats et opportunités.',
        contact: 'Monalina Company',
        href: 'https://www.linkedin.com/in/wilondja',
        blank: true,
    },
];

export default function ContactMethods() {
    return (
        <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-px bg-card-border border border-card-border rounded-3xl overflow-hidden my-24">
            {methods.map((m) => (
                <div
                    key={m.title}
                    className="bg-white p-10 flex flex-col items-start group hover:bg-slate-50/50 transition-all duration-500"
                >
                    {/* Icon Container - Square Soft Style */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 scale-150 group-hover:scale-100" />
                        <div className="relative w-14 h-14 flex items-center justify-center border border-card-border bg-white text-slate-400 group-hover:text-primary group-hover:border-primary/20 rounded-2xl transition-all duration-500 group-hover:rotate-[10deg] shadow-sm">
                            {m.icon}
                        </div>
                    </div>

                    <div className="space-y-3 flex-1">
                        <h3 className="text-xl font-bold text-foreground tracking-tight">
                            {m.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            {m.description}
                        </p>
                    </div>

                    <div className="mt-8 w-full">
                        {m.href ? (
                            <a
                                href={m.href}
                                target={m.blank ? '_blank' : undefined}
                                rel={
                                    m.blank ? 'noopener noreferrer' : undefined
                                }
                                className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link hover:gap-3 transition-all"
                            >
                                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-primary/30 after:origin-right after:scale-x-0 group-hover/link:after:scale-x-100 group-hover/link:after:origin-left after:transition-transform after:duration-300">
                                    {m.contact}
                                </span>
                                <ArrowUpRight
                                    size={16}
                                    className="text-primary/50 group-hover/link:text-primary group-hover/link:-translate-y-0.5 transition-all"
                                />
                            </a>
                        ) : (
                            <p className="text-foreground font-bold text-sm">
                                {m.contact}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}
