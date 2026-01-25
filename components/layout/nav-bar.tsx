'use client';

import { useState, useEffect } from 'react';
import {
    BookOpen,
    Menu,
    X,
    Sun,
    Moon,
    Home,
    Compass,
    Map,
    Phone,
    ChevronRight,
} from 'lucide-react';
import LanguageDropdown from '../language-dropdown';
import useNotification from '../../hooks/use-taost';

export default function NavBar() {
    const data = null;
    const { notifyInfo } = useNotification();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header
            className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
                scrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-2'
                    : 'bg-white py-4'
            }`}
        >
            {!scrolled && (
                <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 pb-3 border-b border-slate-50 text-[11px] font-bold tracking-widest uppercase text-slate-400">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+25762109522"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <Phone size={12} strokeWidth={3} />
                            <span>Support: +257 62 10 95 22</span>
                        </a>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <a
                            href="/contact"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Contact Direct
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => notifyInfo('Bientôt disponible')}
                            className="hover:text-blue-600 transition-colors"
                        >
                            Communauté
                        </button>
                        <LanguageDropdown />
                    </div>
                </div>
            )}

            {/* Main Nav */}
            <nav className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-2.5 group cursor-pointer">
                            <div className="relative size-10 flex items-center justify-center bg-blue-600 rounded-xl transition-transform group-hover:rotate-6 shadow-lg shadow-blue-200">
                                <BookOpen
                                    size={20}
                                    className="text-white"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <span className="text-xl font-black text-slate-900 tracking-tighter">
                                Code
                                <span className="text-blue-600">Platform</span>
                            </span>
                        </div>

                        <div className="hidden lg:flex items-center gap-8">
                            {[
                                { id: 1, name: 'Accueil', href: '/' },
                                { id: 2, name: 'Explorer', href: '/explore' },
                                { id: 3, name: 'Roadmaps', href: '/roadmap' },
                                {
                                    id: 4,
                                    name: 'Méthodologie',
                                    href: '/methodology',
                                },
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="text-[14px] font-semibold text-slate-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href="/auth/login"
                                className="px-5 py-2.5 text-[14px] font-bold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                            >
                                Connexion
                            </a>
                            <a
                                href="/auth/register"
                                className="px-6 py-2.5 text-[14px] font-bold bg-slate-900 text-white rounded-xl shadow-xl shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-100 transition-all active:scale-95"
                            >
                                Essai Gratuit
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden p-2.5 bg-slate-50 rounded-xl text-slate-900 border border-slate-200"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Design "Slide & Blur" */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 space-y-8 animate-in slide-in-from-top-4 duration-300">
                        <div className="grid gap-2">
                            {[
                                'Accueil',
                                'Explorer',
                                'Roadmaps',
                                'Méthodologie',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 text-slate-900 font-bold group"
                                >
                                    {item}
                                    <ChevronRight
                                        size={18}
                                        className="text-slate-400 group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href="/auth/register"
                                className="w-full py-4 text-center bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200"
                            >
                                Créer un compte
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
