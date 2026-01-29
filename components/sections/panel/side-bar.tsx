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

const Sidebar = () => {
    const menuItems = [
        {
            icon: LayoutDashboard,
            label: 'Tableau de bord',
            Link: '/admin',
            active: true,
        },
        {
            icon: BookOpen,
            label: 'Catalogue de cours',
            Link: '#',
            active: false,
        },
        { icon: Users, label: 'Gestion Étudiants', Link: '#', active: false },
        {
            icon: GraduationCap,
            label: 'Certifications',
            Link: '#',
            active: false,
        },
        {
            icon: FileCode,
            label: 'Exercices de Code',
            Link: '#',
            active: false,
        },
        {
            icon: BarChart3,
            label: 'Analyses & Revenus',
            Link: '#',
            active: false,
        },
        { icon: Settings, label: 'Configuration', Link: '#', active: false },
    ];

    return (
        <aside className="w-64 h-screen bg-card-d border-r border-card-d-border flex flex-col p-6">
            {/* Logo CodePlatform */}
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <FileCode className="text-white size-6" />
                </div>
                <div>
                    <h1 className="text-white font-bold leading-tight tracking-tight">
                        CodePlatform
                    </h1>
                    <p className="text-[10px] text-blue-500 font-bold tracking-widest uppercase">
                        E-Learning LMS
                    </p>
                </div>
            </div>

            {/* Navigation principale */}
            <nav className="flex-1 space-y-1.5">
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.Link}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                            item.active
                                ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20'
                                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                        }`}
                    >
                        <item.icon
                            size={19}
                            className={
                                item.active
                                    ? 'text-blue-500'
                                    : 'group-hover:text-gray-200'
                            }
                        />
                        <span className="font-medium text-sm">
                            {item.label}
                        </span>
                    </Link>
                ))}
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
};

export default Sidebar;
