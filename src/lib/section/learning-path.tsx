import React from 'react';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useModuleQuery } from '../query/course.query';


export default function LearningPath() {
    const { data: modules, isLoading } = useModuleQuery();

    if (isLoading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                <ClipLoader size={24} />
                <p>Chargement...</p>
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: 350,
                margin: 'auto',
                paddingTop: 40,
                paddingBottom: 40,
            }}>
            <h2 className="sidebar-title" style={{ display: 'block'}}>Parcours Python</h2>

            <div className="modules-list" >
                {modules.map((module: any, index: number) => (
                    <div
                        key={module.id}
                        className={`module-item`}
                    >
                        <button
                            className="module-trigger"
                        >
                            <div className="module-info">
                                <span className="module-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="module-title" style={{ fontSize: 20}}>
                                    {module.title}
                                </span>
                            </div>
                        </button>

                        <div className="" style={{ marginLeft: 30}}>
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
