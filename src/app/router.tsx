import NavBar from '../features/shared/nav-bar';
import Hero from '../features/shared/hero';
import Footer from '../features/shared/footer';
import Features from '../lib/section/feature';
import HowItWorks from '../lib/section/how-it-work';
import Testimonials from '../lib/section/testimonial';
import Ready from '../components/ready';

export default function Router() {
    return (
        <div>
            <header>
                <NavBar />
                <Hero />
            </header>
            <main>
                <Features />
                <HowItWorks />
                <Testimonials />
                <Ready />
                <Footer />
            </main>
        </div>
    );
}
