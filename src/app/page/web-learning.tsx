import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../../features/shared/nav-bar';
import { ClipLoader } from 'react-spinners';
import CourseNavigation from '../../components/ui/CourseNavigation';
import CurriculumSidebar from '../../components/curriculum-sidebar';
import { htmlCourses } from '../../data/html-course';
import { useUserMeQuery } from '../../lib/query/user.query';

export default function WebLearning() {
    const { data: me, isLoading } = useUserMeQuery();
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCourse = htmlCourses[currentIndex];
    const CourseComponent = currentCourse.component as React.FC;

    return (
        <div>
            <header>
                <NavBar />
            </header>

            <main className="formation-layout wrapper">
                {isLoading ? (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 20,
                        }}
                    >
                        <ClipLoader size={24} />
                        <p>Chargement...</p>
                    </div>
                ) : !me ? (
                    <Navigate to="/login" />
                ) : (
                    <>
                        <div className="curriculum-sidebar">
                            <CurriculumSidebar
                                sections={currentCourse.sections}
                            />
                        </div>

                        <div className="lesson-content">
                            <CourseComponent />
                            {/* <LessonFeedback />
                            <Quiz /> */}

                            <CourseNavigation
                                prevLabel={
                                    currentIndex > 0
                                        ? htmlCourses[currentIndex - 1].title
                                        : ''
                                }
                                nextLabel={
                                    currentIndex < htmlCourses.length - 1
                                        ? htmlCourses[currentIndex + 1].title
                                        : ''
                                }
                                onPrev={() =>
                                    setCurrentIndex((prev) =>
                                        Math.max(prev - 1, 0),
                                    )
                                }
                                onNext={() =>
                                    setCurrentIndex((prev) =>
                                        Math.min(
                                            prev + 1,
                                            htmlCourses.length - 1,
                                        ),
                                    )
                                }
                            />
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
