export default function CurriculumSidebar({
    sections,
}: {
    sections: string[];
}) {
    return (
        <div className="curriculum-sidebar-container">
            <h3>Plan du cours</h3>
            <div className="modules-list">
                {sections.map((section, idx) => (
                    <div key={idx} className="lesson-link">
                        <span className="material-symbols-outlined">
                            play_circle
                        </span>
                        {section}
                    </div>
                ))}
            </div>
        </div>
    );
}
