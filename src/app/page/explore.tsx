import NavBar from '../../features/shared/nav-bar';
import ExploreHero from '../../features/explore/explore-hero';
import PopularCourses from '../../lib/section/popular-course';
import Footer from '../../features/shared/footer';

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
