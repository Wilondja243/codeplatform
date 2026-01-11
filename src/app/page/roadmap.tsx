import NavBar from '../../lib/header/nav-bar';
import Footer from '../../lib/header/footer';
import RoadmapHero from './roadmaps/roadmap-hero';
import FeatureRoadmap from './roadmaps/features-roadmap';
import RoadmapStep from './roadmaps/roadmap-stet';

export default function Roadmap() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <RoadmapHero />
                <FeatureRoadmap />
                <RoadmapStep />
                <Footer />
            </main>
        </div>
    );
}
