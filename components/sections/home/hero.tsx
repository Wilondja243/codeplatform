import Link from 'next/link';

export default function Hero() {
    return (
        <section
            style={{ backgroundImage: "url('/learn.png')" }}
            className="bg-gray-50 text-gray-900 py-20 bg-no-repeat bg-cover mt-24"
        >
            <div className="wrapper gap-12">
                <div className="max-w-[500px] flex-1 space-y-6 bg-card px-6 py-10 shadow-sm">
                    <h1 className="text-3xl font-extrabold leading-tight">
                        L'école de la{' '}
                        <span className="text-blue-600">pratique</span>
                    </h1>

                    <p className="text-gray-700 text-md max-w-lg">
                        Maîtrisez Python et le Web via des projets concrets.
                        Conçu pour les autodidactes qui veulent des résultats
                        rapides.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <Link
                            href="/roadmap"
                            className="btn bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Commencer à apprendre
                        </Link>
                        <Link
                            href="/explore"
                            className="btn-secondary border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition"
                        >
                            Voir les cours
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
