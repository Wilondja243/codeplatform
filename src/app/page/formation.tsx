import NavBar from '../../lib/header/nav-bar';
import Course1 from '../tempo/phase1';
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
                    <Course1 />
                </div>
            </main>
        </div>
    );
}
