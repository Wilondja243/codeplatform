export default function SearchHero() {
    return (
        <section className="explore-hero">
            <div className="wrapper">
                <div className="explore-content">
                    <h1>
                        Toutes nos{' '}
                        <span className="gradient-text">Formations</span>
                    </h1>
                    <p>
                        Développez vos compétences avec nos projets pratiques et
                        concrets.
                    </p>
                </div>

                <div className="search-container">
                    <div className="search-wrapper">
                        <span className="material-symbols-outlined search-icon">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Que souhaitez-vous apprendre ?"
                            className="search-input"
                        />
                        <button className="btn search-btn">Rechercher</button>
                    </div>
                </div>

                <div className="explore-filters">
                    <span>Populaire :</span>
                    <button className="filter-chip">Python</button>
                    <button className="filter-chip">React</button>
                    <button className="filter-chip">Full-Stack</button>
                </div>
            </div>
        </section>
    );
}
