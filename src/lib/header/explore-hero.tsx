export default function ExploreHero() {
    return (
        <section className="explore-header">
            <div className="wrapper explore-grid">
                <div className="explore-text">
                    <h1>
                        Explorez nos <br />{' '}
                        <span className="text-primary">Programmes</span>
                    </h1>
                    <h2 className="explore-subtitle">
                        Apprenez par la pratique, de débutant à professionnel.
                    </h2>
                    <p className="explore-description">
                        Maîtrisez les technologies les plus demandées grâce à
                        nos parcours axés sur la pratique et la réussite
                        professionnelle. Donnez vie à vos idées en réalisant des
                        projets concrets qui boosteront votre carrière.
                    </p>
                </div>

                <div className="explore-visual">
                    <img src="images/formation.webp" alt="" />
                </div>
            </div>
        </section>
    );
}
