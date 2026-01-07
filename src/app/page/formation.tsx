import NavBar from '../../lib/header/nav-bar';
import Course from '../../lib/section/course';
import CourseCurriculum from '../../lib/section/course-curriculum';

export default function Formation() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className="formation-layout wrapper">
                <div className="curriculum-sidebar">
                    <CourseCurriculum />
                </div>
                <div className="lesson-content">
                    <Course />
                </div>
            </main>
        </div>
    );
}
