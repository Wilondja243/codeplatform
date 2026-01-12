export default function ContactCTA() {
    return (
        <section className="bg-primary/5 p-20 md:p-12 border-t border-card-light-border text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Voulez-vous rejoindre la conversation ?
            </h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 50k+ étudiants dans notre communauté mondiale
                sur Discord pour partager des idées, trouver des partenaires
                d’étude et obtenir de l’aide de mentors.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                <a
                    href="#"
                    className="flex items-center gap-3 bg-primary text-text-light px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all"
                >
                    <span className="material-symbols-outlined">forum</span>
                    Rejoindre Discord
                </a>
                <a
                    href="#"
                    className="flex items-center gap-3 bg-background-light text-text-dark px-8 py-4 rounded-xl font-bold border border-gray-200 hover:shadow-md transition-all"
                >
                    <span className="material-symbols-outlined">
                        calendar_month
                    </span>
                    Planifier une démo
                </a>
            </div>
        </section>
    );
}
