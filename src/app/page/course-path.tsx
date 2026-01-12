import { Navigate, useNavigate } from 'react-router-dom';
import NavBar from '../../features/shared/nav-bar';
import LearningPath from '../../lib/section/learning-path';
import { useUserMeQuery } from '../../lib/query/user.query';
import CourseNavigation from '../../components/ui/CourseNavigation';

export default function PathCourse() {
    const navigate = useNavigate();
    const { data: me, isLoading } = useUserMeQuery();

    return (
        <div>
            <header>
                <NavBar />
            </header>

            {!isLoading && me ? (
                <main className="wrapper">
                    <LearningPath />
                    <CourseNavigation
                        onNext={() =>
                            navigate(
                                '/formation/apprendre-python-pour-debutant',
                            )
                        }
                        nextLabel="Commencer le cours"
                    />
                </main>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
}
