import {
    TrendingUp,
    Users,
    BookOpenCheck,
    DollarSign,
    MoreHorizontal,
    Plus,
    ArrowUpRight,
    PlayCircle,
    Clock,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

const MainDashboard = () => {
    const stats = [
        {
            label: 'Inscriptions Actives',
            value: '128,432',
            change: '+12.5%',
            icon: Users,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
        },
        {
            label: 'Taux de Complétion',
            value: '84.2%',
            change: '+3.2%',
            icon: BookOpenCheck,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
        },
        {
            label: 'Revenus Mensuels',
            value: '$1.24M',
            change: '+8.4%',
            icon: DollarSign,
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
        },
    ];

    const recentCourses = [
        {
            id: 1,
            title: 'Masterclass Next.js 14',
            students: 1240,
            status: 'Actif',
            load: '88%',
            color: 'bg-blue-500',
        },
        {
            id: 2,
            title: 'Architecture Cloud Native',
            students: 850,
            status: 'Actif',
            load: '42%',
            color: 'bg-indigo-500',
        },
        {
            id: 3,
            title: 'Python pour la Data Science',
            students: 2100,
            status: 'Surchargé',
            load: '94%',
            color: 'bg-orange-500',
        },
    ];

    return (
        <main className="flex-1 bg-[#0a0c11] p-8 overflow-y-auto">
            {/* Header de la page */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Dashboard
                    </h2>
                    <p className="text-gray-500">
                        Bienvenue, Alex. Voici les performances
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#161B22] border border-gray-700 text-gray-300 rounded-xl hover:bg-gray-800 transition-all font-medium">
                        Exporter le rapport
                    </button>
                    <Link
                        href="/admin/cours"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all font-bold shadow-lg shadow-blue-600/20"
                    >
                        <Plus size={18} />
                        Ajouter un cours
                    </Link>
                </div>
            </div>

            {/* Cartes de statistiques (Top Row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-[#12151b] border border-gray-800 p-6 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="flex justify-between items-start relative z-10">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    {stat.label}
                                </p>
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    {stat.value}
                                </h3>
                            </div>
                            <div
                                className={`${stat.bg} ${stat.color} p-2 rounded-lg`}
                            >
                                <stat.icon size={20} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 relative z-10">
                            <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                <ArrowUpRight size={12} className="mr-1" />{' '}
                                {stat.change}
                            </span>
                            <span className="text-gray-600 text-xs italic">
                                vs mois dernier
                            </span>
                        </div>
                        {/* Effet décoratif en fond */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-all" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Section Graphique (Simulé par CSS pour le style) */}
                <div className="lg:col-span-2 bg-[#11141B] border border-gray-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="text-white font-bold text-lg">
                            Activité des Étudiants (24h)
                        </h4>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-[10px] text-blue-500 font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                Live Traffic
                            </span>
                        </div>
                    </div>

                    {/* Placeholder graphique premium */}
                    <div className="h-64 w-full bg-gradient-to-t from-blue-600/5 to-transparent rounded-xl border border-dashed border-gray-800 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-end justify-between px-4 pb-2">
                            {[40, 70, 45, 90, 65, 80, 30, 50, 85, 45].map(
                                (h, i) => (
                                    <div
                                        key={i}
                                        style={{ height: `${h}%` }}
                                        className="w-8 bg-blue-600/20 hover:bg-blue-500/40 transition-all rounded-t-md border-t border-blue-500"
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </div>

                {/* Journal d'activité / Notifications */}
                <div className="bg-[#11141B] border border-gray-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-white font-bold text-lg">
                            Événements Récents
                        </h4>
                        <MoreHorizontal
                            className="text-gray-500 cursor-pointer"
                            size={20}
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-blue-500/20 p-2 h-fit rounded-full text-blue-500">
                                <CheckCircle2 size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-200 font-medium">
                                    Nouveau module déployé
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Cours "React Native" mis à jour à v2.1
                                </p>
                                <span className="text-[10px] text-gray-600 block mt-2">
                                    Il y a 2 min
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-orange-500/20 p-2 h-fit rounded-full text-orange-500">
                                <AlertCircle size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-200 font-medium">
                                    Pic de trafic détecté
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Cluster Singapore Edge : charge 94%
                                </p>
                                <span className="text-[10px] text-gray-600 block mt-2">
                                    Il y a 1 heure
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tableau des cours populaires */}
                <div className="lg:col-span-3 bg-[#11141B] border border-gray-800 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                        <h4 className="text-white font-bold text-lg">
                            Statut des Infrastructures de Cours
                        </h4>
                        <button className="text-blue-500 text-sm font-semibold hover:underline">
                            Voir tout
                        </button>
                    </div>
                    <table className="w-full text-left">
                        <thead className="bg-[#161B22]/50 text-gray-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">
                                    Titre du Cours
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Performance Serveur
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Inscrits
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {recentCourses.map((course) => (
                                <tr
                                    key={course.id}
                                    className="hover:bg-white/[0.02] transition-colors group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-2 h-2 rounded-full ${course.color}`}
                                            />
                                            <span className="text-gray-200 font-medium">
                                                {course.title}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 h-1.5 bg-gray-800 rounded-full max-w-[100px]">
                                                <div
                                                    className={`h-full rounded-full ${course.color}`}
                                                    style={{
                                                        width: course.load,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-400 font-mono">
                                                {course.load}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400 text-sm font-mono">
                                        {course.students}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                                course.status === 'Actif'
                                                    ? 'bg-emerald-500/10 text-emerald-500'
                                                    : 'bg-orange-500/10 text-orange-500'
                                            }`}
                                        >
                                            ● {course.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default MainDashboard;
