import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import RoadmapHero from '@/components/sections/roadmap/roadmap-hero';
import FeatureRoadmap from '@/components/sections/roadmap/features-roadmap';
import RoadmapStep from '@/components/sections/home/roadmap-step';

export default function RoadmapPage() {
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
