import NavBar from '../../lib/header/nav-bar';
import ExploreHero from '../../lib/header/explore-hero';
import PopularCourses from '../../lib/section/popular-course';
import Footer from '../../lib/header/footer';

export default function Explore() {
    return (
        <div>
            <header>
                <NavBar />
                <ExploreHero />
            </header>
            <main>
                <PopularCourses />
                <Footer />
            </main>
        </div>
    );
}
