import NavBar from '../../features/shared/nav-bar';
import Footer from '../../features/shared/footer';
import RoadmapHero from '../../features/roadmap/roadmap-hero';
import FeatureRoadmap from '../../features/roadmap/features-roadmap';
import RoadmapStep from '../../features/roadmap/roadmap-stet';

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
