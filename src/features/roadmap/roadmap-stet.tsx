export default function RoadmapStep() {
    return (
        <section className="bg-background-muted py-[4em]">
            <div className="roadmap-step-container wrapper">
                <div className="roadmap-step-section">
                    <div className="flex text-center flex-col justify-center items-center">
                        <h1 className="mb-[1.2em] text-text-muted">
                            Comment ca marche
                        </h1>
                        <p>
                            Trois étapes simples pour maîtriser n’importe quelle
                            compétence
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[1.5em] gap-y-[3em] pt-[4em]">
                        <div className="flex text-center flex-col justify-center items-center">
                            <span
                                style={{
                                    background:
                                        'linear-gradient(135deg, #00b8beff 0%, #0045daff 100%)',
                                }}
                                className="text-text-light mb-[0.8em] p-[12px] rounded-md material-symbols-outlined"
                            >
                                map
                            </span>
                            <div className="p-5 bg-background-light rounded-md shadow-sm border-b border-card-light-border hover:shadow-md hover:-translate-y-3">
                                <h2 className="text-[1.1em] mb-[15px]">
                                    Choisir une voie
                                </h2>
                                <p className="text-text-muted text-[0.9em]">
                                    Sélectionnez une filière qui correspond à
                                    vos objectifs et centres d'intérêt.
                                </p>
                            </div>
                        </div>
                        <div className="flex text-center flex-col justify-center items-center">
                            <span
                                style={{
                                    background:
                                        'linear-gradient(135deg, #be00beff 0%, #da9500ff 100%)',
                                }}
                                className="text-text-light mb-[0.8em] p-[12px] rounded-md material-symbols-outlined"
                            >
                                school
                            </span>
                            <div className="p-5 bg-background-light rounded-md shadow-sm border-b border-card-light-border hover:shadow-md hover:-translate-y-3">
                                <h2 className="text-[1.1em] mb-[15px]">
                                    Apprendre & Pratiquer
                                </h2>
                                <p className="text-text-muted text-[0.9em]">
                                    Regardez des vidéos concises et résolvez des
                                    défis interactifs de code.
                                </p>
                            </div>
                        </div>
                        <div className="flex text-center flex-col justify-center items-center">
                            <span
                                style={{
                                    background:
                                        'linear-gradient(135deg, #00a8beff 0%, #19da00ff 100%)',
                                }}
                                className="text-text-light mb-[0.8em] p-[12px] rounded-md material-symbols-outlined"
                            >
                                trending_up
                            </span>
                            <div className="p-5 bg-background-light rounded-md shadow-sm border-b border-card-light-border hover:shadow-md hover:-translate-y-3">
                                <h2 className="text-[1.1em] mb-[15px]">
                                    Construire des projets
                                </h2>
                                <p className="text-text-muted text-[0.9em]">
                                    Appliquez vos compétences en créant des
                                    applications prêtes pour la production.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
