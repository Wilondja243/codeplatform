import useNotification from '../../hooks/use-taost-notification';

export default function ContactHero() {
    const { notifyInfo } = useNotification();

    const message = "Cette fonctionnalité n'est pas disponible pour le moment.";

    return (
        <section className="relative overflow-hidden rounded-xl wrapper">
            <div className="absolute inset-0 z-0 bg-primary/20" />

            <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-text-dark">
                        Prenez <span className="text-primary">Contact</span>
                    </h1>
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                        Que vous soyez un étudiant curieux ou un mentor
                        aspirant, notre équipe est là pour vous guider. Nous
                        répondons généralement dans les 12 heures.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => notifyInfo(message)}
                            className="bg-primary text-text-light font-bold h-12 px-8 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => notifyInfo(message)}
                            className="bg-background-light text-text-dark font-bold h-12 px-8 rounded-lg border border-gray-200 hover:bg-slate-50 transition-all"
                        >
                            Support en direct
                        </button>
                    </div>
                </div>

                <div className="hidden md:block w-72 h-72 bg-primary/20 rounded-full blur-3xl absolute -right-20 -top-20" />

                <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 shadow-inner">
                    <span className="material-symbols-outlined text-primary text-9xl animate-pulse">
                        support_agent
                    </span>
                </div>
            </div>
        </section>
    );
}
