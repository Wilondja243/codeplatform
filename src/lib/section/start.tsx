export default function Start() {
    return (
        <section className="start-section" aria-labelledby="start-title">
            <div className="start-container">
                <h2 id="start-title" className="sr-only">
                    Commencer la formation
                </h2>

                <div className="start-box">
                    <h3>Tarifs, programmes, inscription</h3>

                    <p>Créez votre compte pour continuer votre formation.</p>

                    <div className="start-actions">
                        <button type="button" className="btn btn-primary">
                            Créer un compte
                        </button>
                        <a href="/login" className="link-secondary">
                            Se connecter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
