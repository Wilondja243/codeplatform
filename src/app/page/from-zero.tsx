import Footer from '../../lib/header/footer';
import NavBar from '../../lib/header/nav-bar';
import Course from '../../lib/section/course';
import Start from '../../lib/section/start';

export default function FromZero() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="lesson-content wrapper">
                    <Course />
                </div>
                <Start />
                <Footer />
            </main>
        </div>
    );
}
