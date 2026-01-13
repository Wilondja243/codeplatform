export default function WebDevelopmentIntro() {
    return (
        <section className="relative overflow-hidden bg-white p-8 shadow-sm">
            {/* Header */}
            <div className="mb-6">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                    Avant-propos
                </span>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
                    Introduction au développement web
                </h1>

                <p className="mt-2 text-neutral-600">
                    Comprendre comment fonctionne le web et apprendre à créer
                    ses propres sites et applications modernes.
                </p>
            </div>

            {/* Content */}
            <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                    Le <strong>développement web</strong> est l’ensemble des
                    techniques utilisées pour créer des sites et des
                    applications accessibles via Internet. Chaque page que vous
                    visitez, chaque bouton que vous cliquez et chaque formulaire
                    que vous remplissez sont le résultat du travail d’un
                    développeur web.
                </p>

                <p>
                    Aujourd’hui, le web est devenu indispensable. Il est utilisé
                    dans presque tous les domaines : entreprises, éducation,
                    commerce, communication, services publics et projets
                    personnels.
                </p>

                <p>
                    Apprendre le développement web, ce n’est pas seulement
                    apprendre à écrire du code. C’est apprendre à{' '}
                    <strong>résoudre des problèmes</strong>, à structurer des
                    idées et à transformer une simple idée en un produit réel et
                    fonctionnel.
                </p>
            </div>

            {/* Key points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-900">
                        Front-end
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                        Ce que l’utilisateur voit et avec quoi il interagit.
                    </p>
                </div>

                <div className="rounded-xl border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-900">Back-end</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                        La logique, les données et la sécurité.
                    </p>
                </div>

                <div className="rounded-xl border border-neutral-200 p-4">
                    <h3 className="font-semibold text-neutral-900">
                        Bases de données
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                        Le stockage et la gestion des informations.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 rounded-xl bg-neutral-50 p-5">
                <p className="text-sm text-neutral-600">
                    👉 Cette formation est pensée pour les débutants complets.
                    Nous avancerons étape par étape, avec des explications
                    simples, des exemples clairs et beaucoup de pratique.
                </p>
            </div>
        </section>
    );
}
