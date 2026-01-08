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
            titre: "Installation",
            lesson: [
                "premiere étape"
            ]
        }
    ]

    return (
        <div className="curriculum-sidebar-container">
            <h2 className="sidebar-title">Parcours Python</h2>

            <div className="modules-list">
                {modules.map((module: any, index: number) => (
                    <div
                        key={module.id}
                        className={`module-item ${
                            activeModule === module.id ? 'is-open' : ''
                        }`}
                    >
                        <button
                            className="module-trigger"
                            onClick={() => toggleModule(module.id)}
                        >
                            <div className="module-info">
                                <span className="module-number">
                                    {String(index + 1).padStart(2, '0')}
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
                            {module.lessons.map(
                                (lesson: any, index: string) => (
                                    <div key={index} className="lesson-link">
                                        <span className="material-symbols-outlined">
                                            {lesson.includes('Exercice') ||
                                            lesson.includes('Projet')
                                                ? 'assignment'
                                                : 'play_circle'}
                                        </span>
                                        {lesson}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
