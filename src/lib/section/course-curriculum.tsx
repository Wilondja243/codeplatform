import React from 'react';
import { useState } from 'react';

export default function CourseCurriculum() {
    const [activeModule, setActiveModule] = useState<number | null>(1);

    const toggleModule = (id: number) => {
        setActiveModule(activeModule === id ? null : id);
    };

    const modules = [
        {
            id: 1,
            title: "L'Installation",
            lessons: [
                "Configuration de l'environnement",
                'VS Code & Extensions',
                'Premier script Python',
            ],
        },
        {
            id: 2,
            title: 'Fondamentaux',
            lessons: [
                'Les conditions (if, elif, else)',
                'Les boucles For et While',
                'Les fonctions et les arguments',
                'Exercices pratiques',
            ],
        },
        {
            id: 3,
            title: 'Introduction à la POO',
            lessons: [
                'Concept de Classe et Objet',
                'Attributs et Méthodes',
                "L'Héritage en Python",
                'Projet : Créer un système bancaire',
            ],
        },
        {
            id: 4,
            title: 'Base de Données (SQL)',
            lessons: [
                'Introduction aux bases de données',
                'SQL avec SQLite : Créer et Lire',
                'Mise à jour et Suppression (CRUD)',
                'Lier Python à une base de données',
                'Projet : Annuaire interactif',
            ],
        },
        {
            id: 5,
            title: 'Vers le niveau Héro',
            lessons: [
                'Gestion des erreurs (Try/Except)',
                'Manipulation des modules et packages',
                'Web Scraping ou Automatisation',
                'Examen final et Certification',
            ],
        },
    ];

    return (
        <div className="curriculum-sidebar-container">
            <h2 className="sidebar-title">Parcours Python</h2>

            <div className="modules-list">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className={`module-item ${activeModule === module.id ? 'is-open' : ''}`}
                    >
                        <button
                            className="module-trigger"
                            onClick={() => toggleModule(module.id)}
                        >
                            <div className="module-info">
                                <span className="module-number">
                                    0{module.id}
                                </span>
                                <span className="module-title">
                                    {module.title}
                                </span>
                            </div>
                            <span className="material-symbols-outlined arrow-icon">
                                {activeModule === module.id
                                    ? 'expand_less'
                                    : 'expand_more'}
                            </span>
                        </button>

                        <div className="lessons-dropdown">
                            {module.lessons.map((lesson, index) => (
                                <div key={index} className="lesson-link">
                                    <span className="material-symbols-outlined">
                                        {lesson.includes('Exercice') ||
                                        lesson.includes('Projet')
                                            ? 'assignment'
                                            : 'play_circle'}
                                    </span>
                                    {lesson}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
