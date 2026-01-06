import { courses } from '../../data/data';

export default function PopularCourses() {
    return (
        <section className="popular-courses">
            <div className="popular-container wrapper">
                <div className="header">
                    <div>
                        <h2>Parcours populaires</h2>
                        <p>
                            Des parcours structurés pour passer de débutant à
                            expert.
                        </p>
                    </div>
                    <a href="#" className="view-all">
                        Voir tous les parcours{' '}
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card">
                            <div
                                className={`course-gradient ${course.gradient}`}
                            ></div>
                            <div className="course-body">
                                <div
                                    className={`course-icon text-${course.gradient}-500`}
                                >
                                    <span className="material-symbols-outlined">
                                        {course.icon}
                                    </span>
                                </div>
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-desc">
                                    {course.description}
                                </p>
                                <div className="course-footer">
                                    <span className="course-level">
                                        {course.level}
                                    </span>
                                    <span className="course-duration">
                                        {course.duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
