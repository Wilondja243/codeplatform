export default function ExploreHero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] size-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] size-[400px] bg-blue-400/5 rounded-full blur-[100px]" />
            </div>

            <div className="wrapper relative z-10 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 lg-nav:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-muted rounded-full border border-card-border shadow-sm">
                            <span className="size-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                                Catalogue 2026
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
                                Explorez nos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-cyan-500">
                                    Programmes
                                </span>
                            </h1>

                            <h2 className="text-xl font-bold text-text-main border-l-4 border-primary pl-6 py-1 mx-auto lg-nav:mx-0 max-w-fit">
                                Apprenez par la pratique, de débutant à
                                professionnel.
                            </h2>

                            <p className="text-slate-500 text-xl md:text-xl leading-relaxed max-w-xl mx-auto lg-nav:mx-0 font-medium">
                                Maîtrisez les technologies les plus demandées
                                grâce à nos parcours axés sur la pratique.
                                Donnez vie à vos idées en réalisant des projets
                                concrets qui{' '}
                                <span className="text-primary font-bold decoration-primary/30">
                                    boosteront votre carrière.
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-left lg-nav:justify-start gap-4 pt-4 text-slate-400 font-bold text-sm uppercase tracking-widest">
                            <div className="flex -space-x-3">
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4271.jpg" alt="student" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4442.jpg" alt="student" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4440.jpg" alt="student" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-white bg-bg-muted overflow-hidden">
                                    <img src="/images/4436.jpg" alt="student" />
                                </div>
                            </div>
                            <span>+300 étudiants déjà inscrits</span>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2.5rem] blur-2xl group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative max-w-[500px] mx-auto rounded-[2.5rem] border-8 border-card overflow-hidden bg-bg-muted">
                            <img
                                src="images/formation.webp"
                                alt="Formation CodePlatform"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-white/20 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-center text-foreground">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                                            Prochaines cohortes
                                        </p>
                                        <p className="font-bold">
                                            Lundi, 02 Février
                                        </p>
                                    </div>
                                    <div className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg uppercase tracking-tighter">
                                        Inscriptions Ouvertes
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-6 right-2 size-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10 animate-bounce-slow">
                            <div className="size-10 bg-white rounded-lg shadow-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
