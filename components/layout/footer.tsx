'use client';

import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0b] border-t border-card-border py-20">
            <div className="wrapper mx-auto space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg-nav:grid-cols-4 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 group cursor-pointer w-fit">
                            <div className="relative size-11 flex items-center justify-center bg-primary rounded-2xl transition-all duration-500 group-hover:rotate-6 shadow-xl shadow-primary/20">
                                <BookOpen
                                    size={22}
                                    className="text-white"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <span className="text-2xl font-black text-card-hover tracking-tighter">
                                Code
                                <span className="text-primary">Platform</span>
                            </span>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed font-medium">
                            Propulser la prochaine génération de développeurs
                            via un apprentissage{' '}
                            <span className="text-primary font-bold">
                                concret
                            </span>{' '}
                            et axé sur les projets.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://wa.me/62109522"
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-11 flex items-center justify-center rounded-xl border border-green-900 text-green-700 hover:text-green-500 transition-all duration-300 shadow-sm"
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                </svg>
                            </a>

                            <a
                                href="https://github.com/Wilondja243"
                                target="_blank"
                                aria-label="GitHub"
                                rel="noopener noreferrer"
                                className="size-11 flex items-center justify-center rounded-xl border border-gray-700 text-slate-400 hover:text-card transition-all duration-300 shadow-sm"
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    ></path>
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com/in/wilondja"
                                target="_blank"
                                aria-label="LinkedIn"
                                rel="noopener noreferrer"
                                className="size-11 flex items-center justify-center rounded-xl border border-blue-900 text-blue-400 hover:text-primary transition-all duration-300 shadow-sm"
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                            Platform
                        </h4>
                        <ul className="space-y-4 text-[15px] font-medium text-gray-300">
                            <li>
                                <a
                                    href="/explore"
                                    className="hover:text-bg-muted transition-colors"
                                >
                                    Explorer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/roadmap"
                                    className="hover:text-bg-muted transition-colors"
                                >
                                    Roadmaps
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-bg-muted transition-colors"
                                >
                                    Méthodologie
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-bg-muted transition-colors"
                                >
                                    Succès
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                            Entreprise
                        </h4>
                        <ul className="space-y-4 text-[15px] font-medium text-gray-300">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    Carrières
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-background transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                            Assistance
                        </h4>
                        <ul className="space-y-4 text-[15px] font-medium text-gray-300">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    Centre d'aide
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    Conditions d'utilisation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    Confidentialité
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-background transition-colors"
                                >
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-900 pt-10 gap-6">
                    <p className="text-sm font-medium text-bg-muted">
                        © 2026{' '}
                        <span className="text-primary font-bold">
                            CodePlatform
                        </span>
                        . Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-blue-900 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-slate-400 pascase tracking-tighter">
                            Tous les systèmes sont opérationnels
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
