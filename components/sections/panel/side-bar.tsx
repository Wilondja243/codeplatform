'use client';

import {
    LayoutDashboard,
    BookOpen,
    Users,
    GraduationCap,
    FileCode,
    Settings,
    Plus,
    LogOut,
    BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        {
            icon: LayoutDashboard,
            label: 'Tableau de bord',
            href: '/admin-1001',
            active: true,
        },
        {
            icon: BookOpen,
            label: 'Catalogue de cours',
            href: '/admin-1001/cours',
        },
        { icon: Users, label: 'Gestion Étudiants', href: '#' },
        {
            icon: GraduationCap,
            label: 'Certifications',
            href: '#',
        },
        {
            icon: FileCode,
            label: 'Exercices de Code',
            href: '#',
        },
        {
            icon: BarChart3,
            label: 'Analyses & Revenus',
            href: '#',
        },
        { icon: Settings, label: 'Configuration', href: '#' },
    ];

    return (
        <aside className="w-64 h-screen bg-card border-r border-card-border flex flex-col p-6">
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <BookOpen className="text-white size-6" strokeWidth={2.5} />
                </div>
                <div>
                    <h1 className="text-text-main font-bold leading-tight tracking-tight">
                        CodePlatform
                    </h1>
                    <p className="text-[10px] text-primary font-bold tracking-widest uppercase">
                        E-Learning LMS
                    </p>
                </div>
            </div>

            {/* Navigation principale */}
            <nav className="flex-1 space-y-1.5">
                {menuItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href !== '/admin-1001' &&
                            pathname.startsWith(item.href));

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                isActive
                                    ? 'bg-indigo-300/5 text-primary border border-indigo-500/10'
                                    : 'text-text-muted hover:bg-gray-800/50 hover:text-gray-200'
                            }`}
                        >
                            <item.icon
                                size={19}
                                className={
                                    isActive
                                        ? 'text-primary'
                                        : 'group-hover:text-gray-200'
                                }
                            />
                            <span className="font-medium text-sm">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto pt-6 space-y-4">
                <button className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-red-400 transition-colors w-full group">
                    <LogOut
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                    <span className="text-sm font-medium">Déconnexion</span>
                </button>
            </div>
        </aside>
    );
}
