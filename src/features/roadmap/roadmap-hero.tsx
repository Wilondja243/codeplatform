export default function RoadmapHero() {
    return (
        <section className="roadmap-hero">
            <div className="roadmap-hero-container wrapper">
                <div className="roadmap-hero-section">
                    <div className="roadmap-hero-content">
                        <h1>Maîtrisez votre parcours professionnel.</h1>
                        <p>
                            Suivez des roadmaps structurés créés par des experts
                            du secteur pour passer de débutant à prêt pour
                            l'emploi en quelques mois, pas des années.
                        </p>

                        <div className="btns">
                            <button className="btn">Commencer</button>
                            <button className="btn-secondary">
                                Comment ça marche
                            </button>
                        </div>
                    </div>
                    <div className="roadmap-visual">
                        <img src="images/roadmap.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
