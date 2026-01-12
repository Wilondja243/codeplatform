export default function RoadmapStep() {
    return (
        <section className="roadmap-step">
            <div className="roadmap-step-container wrapper">
                <div className="roadmap-step-section">
                    <div className="roadmap-step-header">
                        <h1>Comment ca marche</h1>
                        <p>
                            Trois étapes simples pour maîtriser n’importe quelle
                            compétence
                        </p>
                    </div>

                    <div className="roadmap-step-content">
                        <div className="step-item">
                            <span
                                style={{
                                    background:
                                        'linear-gradient(135deg, #00b8beff 0%, #0045daff 100%)',
                                }}
                                className="step-icon material-symbols-outlined"
                            >
                                map
                            </span>
                            <div className="step-detail">
                                <h2>Choisir une voie</h2>
                                <p>
                                    Sélectionnez une filière qui correspond à
                                    vos objectifs et centres d'intérêt.
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span
                                style={{
                                    background:
                                        'linear-gradient(135deg, #be00beff 0%, #da9500ff 100%)',
                                }}
                                className="step-icon material-symbols-outlined"
                            >
                                school
                            </span>
                            <div className="step-detail">
                                <h2>Apprendre & Pratiquer</h2>
                                <p>
                                    Regardez des vidéos concises et résolvez des
                                    défis interactifs de code.
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span
                                style={{
                                    background:
                                        'linear-gradient(135deg, #00a8beff 0%, #19da00ff 100%)',
                                }}
                                className="step-icon material-symbols-outlined"
                            >
                                trending_up
                            </span>
                            <div className="step-detail">
                                <h2>Construire des projets</h2>
                                <p>
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
