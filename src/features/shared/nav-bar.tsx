import { useState } from 'react';
import {
    BookOpen,
    Menu,
    X,
    Sun,
    Moon,
    Languages,
    Home,
    Compass,
    Map,
    ChevronDown,
    Phone,
} from 'lucide-react';
import { useUserMeQuery } from '../../lib/query/user.query';
import LanguageDropdown from '../../components/language-dropdown';

export default function Navbar() {
    const { data } = useUserMeQuery();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <header
            className={` ${isDarkMode ? 'bg-background-dark text-text-light' : 'bg-background-light text-text-dark'}`}
        >
            <div className="hidden lg-nav:flex justify-end items-center gap-6 px-6 py-2 border-b border-slate-100  text-[13px] font-medium text-text-dark">
                {/* Contact & Support */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+123456789"
                        className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                        <Phone size={14} className="opacity-70" />
                        <span>+257 62 10 95 22</span>
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-primary transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Séparateur visuel */}
                <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700" />

                {/* Préférences utilisateur */}
                <div className="flex items-center gap-5">
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center gap-2 hover:text-primary transition-all duration-200 group"
                    >
                        <div className="p-1 rounded-md group-hover:bg-primary/10">
                            {isDarkMode ? (
                                <Sun size={15} />
                            ) : (
                                <Moon size={15} />
                            )}
                        </div>
                        <span>{isDarkMode ? 'Mode Clair' : 'Mode Sombre'}</span>
                    </button>

                    <LanguageDropdown />
                </div>
            </div>

            <nav className="sticky top-0 z-50 border-b py-3">
                <div className="wrapper flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-1 text-primary">
                            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-text-light">
                                <BookOpen size={25} color="white" />
                            </div>
                            <h2 className="text-lg font-bold">CodePlatform</h2>
                        </div>

                        <nav className="hidden lg-nav:flex gap-5 text-sm font-medium">
                            <a href="/" className="hover:text-primary">
                                Accueil
                            </a>
                            <a href="/explore" className="hover:text-primary">
                                Explorer
                            </a>
                            <a href="/roadmap" className="hover:text-primary">
                                Roadmaps
                            </a>
                            <a href="#" className="hover:text-primary">
                                Méthodologie
                            </a>
                            <a href="#" className="hover:text-primary">
                                Ressources
                            </a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        {!data ? (
                            <div className="max-sm:hidden">
                                <a
                                    href="/login"
                                    className="flex items-center justify-center px-4 h-10 rounded-lg font-bold border border-card-light-border hover:text-primary hover:border-primary"
                                >
                                    Se connecter
                                </a>
                                <a
                                    href="/register"
                                    className="flex items-center justify-center bg-primary text-text-light px-6 h-10 rounded-lg font-bold hover:bg-primary-dark"
                                >
                                    S’inscrire
                                </a>
                            </div>
                        ) : (
                            <a
                                href="/contact"
                                className="flex items-center justify-center border border-card-light-border text-text-dark px-6 h-10 rounded-lg font-bold hover:text-primary hover:border-primary max-sm:hidden"
                            >
                                Contact
                            </a>
                        )}

                        <button
                            className="lg-nav:hidden ml-2 p-2 rounded-lg hover:bg-gray-100"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="lg-nav:hidden absolute top-[4.2em] left-4 right-4 z-50 bg-white dark:bg-background-dark shadow-2xl rounded-md border border-card-light-border dark:border-card-dark-border p-4 animate-in fade-in zoom-in duration-200">
                        <nav className="space-y-1 mb-6">
                            {[
                                {
                                    name: 'Accueil',
                                    href: '/',
                                    icon: <Home size={18} />,
                                },
                                {
                                    name: 'Explorer',
                                    href: '/explore',
                                    icon: <Compass size={18} />,
                                },
                                {
                                    name: 'Roadmaps',
                                    href: '/roadmap',
                                    icon: <Map size={18} />,
                                },
                                {
                                    name: 'Méthodologie',
                                    href: '#',
                                    icon: <BookOpen size={18} />,
                                },
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all group"
                                >
                                    <span className="text-slate-400 group-hover:text-primary transition-colors">
                                        {item.icon}
                                    </span>
                                    <span className="font-medium">
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </nav>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <button
                                onClick={toggleDarkMode}
                                className="flex items-center justify-center gap-2 p-3 rounded-md bg-card-dark dark:bg-card-dark text-text-light dark:text-text-light hover:bg-primary/10 hover:text-primary transition-colors text-sm font-semibold"
                            >
                                {isDarkMode ? (
                                    <Sun size={18} />
                                ) : (
                                    <Moon size={18} />
                                )}
                                {isDarkMode ? 'Clair' : 'Sombre'}
                            </button>

                            <div className="relative group">
                                <LanguageDropdown />
                            </div>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-800 mb-6" />

                        <div className="space-y-4">
                            <div className="flex flex-col gap-1 px-2">
                                <a
                                    href="tel:+123456789"
                                    className="text-xs text-text-muted hover:text-primary transition-colors italic"
                                >
                                    Besoin d'aide ? +257 62 10 95 22
                                </a>
                            </div>

                            {!data && (
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="/login"
                                        className="flex items-center justify-center w-full h-12 rounded-xl font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                                    >
                                        Se connecter
                                    </a>
                                    <a
                                        href="/register"
                                        className="flex items-center justify-center w-full h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:scale-[1.02] active:scale-95 transition-all"
                                    >
                                        Commencer gratuitement
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
