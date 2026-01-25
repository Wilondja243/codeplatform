import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import Courses from '@/components/sections/explore/expore-course';
import ExploreHero from '@/components/sections/explore/explore-hero';

export default function ExplorePage() {
    return (
        <div>
            <header>
                <NavBar />
                <ExploreHero />
            </header>
            <main>
                <Courses />
                <Footer />
            </main>
        </div>
    );
}
