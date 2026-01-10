interface Section {
    id?: string;
    title?: string;
    lessons?: string[];
}

export default function CurriculumSidebar({
    sections,
}: {
    sections: (string | Section)[];
}) {
    return (
        <div className="curriculum-sidebar-container">
            <h3>Plan du cours</h3>
            <div className="modules-list">
                {sections.map((section, idx) => {
                    // Si c'est juste une string, on l'affiche directement
                    if (typeof section === 'string') {
                        return (
                            <div key={idx} className="lesson-link">
                                <span className="material-symbols-outlined">
                                    play_circle
                                </span>
                                {section}
                            </div>
                        );
                    }

                    // Si c'est un objet avec title et lessons
                    if (section.title && section.lessons) {
                        return (
                            <div
                                key={section.id || idx}
                                className="section-block"
                                style={{ marginTop: 10 }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <span>{idx}</span>
                                    <h4>{section.title}</h4>
                                </div>

                                {section.lessons.map((lesson, lIdx) => (
                                    <div key={lIdx} className="lesson-link">
                                        <span className="material-symbols-outlined">
                                            play_circle
                                        </span>
                                        {lesson}
                                    </div>
                                ))}
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </div>
    );
}
