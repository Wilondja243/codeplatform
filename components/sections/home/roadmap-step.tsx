import React from 'react';

export default function RoadmapStep() {
    const steps = [
        {
            number: '1',
            title: 'Choisir une voie',
            description:
                "Sélectionnez une filière qui correspond à vos objectifs et centres d'intérêt.",
            active: true,
        },
        {
            number: '2',
            title: 'Apprendre & Pratiquer',
            description:
                'Regardez des vidéos concises et résolvez des défis interactifs de code.',
            active: false,
        },
        {
            number: '3',
            title: 'Construire des projets',
            description:
                'Appliquez vos compétences en créant des applications prêtes pour la production.',
            active: false,
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa] overflow-hidden">
            <div className="wrapper max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Comment ça marche{' '}
                        <span className="text-cyan-600">?</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Commencez votre parcours pour devenir développeur
                        professionnel en{' '}
                        <span className="font-semibold text-slate-900 text-3xl">
                            3
                        </span>{' '}
                        étapes simples.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center"
                            >
                                <div
                                    className={`
                  w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-500
                  ${
                      step.active
                          ? 'bg-cyan-500 text-white shadow-md shadow-cyan-200 scale-110 ring-8 ring-cyan-50'
                          : 'bg-white text-slate-400 border-2 border-slate-200 group-hover:border-cyan-300 group-hover:text-cyan-500'
                  }
                `}
                                >
                                    {step.number}
                                </div>

                                <div className="mt-8 bg-background p-8 rounded-3xl border border-card-border group-hover:shadow-sm transition-shadow duration-300 h-full">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action optionnel */}
                <div className="mt-20 text-center">
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                        Commencer maintenant
                    </button>
                </div>
            </div>
        </section>
    );
}
