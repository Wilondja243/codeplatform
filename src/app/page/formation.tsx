import { Navigate } from 'react-router-dom';
import NavBar from '../../lib/header/nav-bar';
import Course1 from '../tempo/phase1';
import Course2 from '../tempo/phase2';
import CourseCurriculum from '../../lib/section/course-curriculum';
import { useUserMeQuery } from '../../lib/query/user.query';

export default function Formation() {
    const { data: me, isLoading } = useUserMeQuery();

    return (
        <div>
            <header>
                <NavBar />
            </header>

            {!isLoading && me ? (
                <main className="formation-layout wrapper">
                    <div className="curriculum-sidebar">
                        <CourseCurriculum />
                    </div>
                    <div className="lesson-content">
                        <Course2 />
                    </div>
                </main>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
}
