import { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown, Check } from 'lucide-react';
import useNotification from '../hooks/use-taost-notification';

export default function LanguageDropdown() {
    const { notifyInfo } = useNotification();
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('FR');

    return (
        <div className="relative z-[100]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center gap-2 max-lg-nav:p-3 text-text-dark px-2 py-1 rounded-md transition-all duration-200 group text-sm font-semibold max-lg-nav:w-full max-lg-nav:bg-card-dark ${
                    isOpen ? 'text-primary bg-primary/5' : 'hover:text-primary'
                }`}
            >
                <Languages
                    size={15}
                    className={`transition-opacity ${isOpen ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                />
                <span className="font-semibold uppercase">{lang}</span>
                <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'opacity-50'}`}
                />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-30"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute right-0 z-50 w-40 bg-white dark:bg-background-dark shadow-xl rounded-md overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-lg-nav:w-full">
                        <div className="p-1">
                            {[
                                { code: 'FR', name: 'Français' },
                                { code: 'EN', name: 'Englais' },
                            ].map((item) => (
                                <button
                                    key={item.code}
                                    onClick={() => {
                                        setLang(item.code);
                                        setIsOpen(false);
                                        notifyInfo(
                                            'Fonctionnalité à venir bientôt !',
                                        );
                                    }}
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                                >
                                    <span>{item.name}</span>
                                    {lang === item.code && (
                                        <Check
                                            size={14}
                                            className="text-primary"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
