import NavBar from '../features/shared/nav-bar';
import Hero from '../features/home/hero';
import Footer from '../features/shared/footer';
import Features from '../features/home/feature';
import HowItWorks from '../features/home/how-it-work';
import Testimonials from '../features/home/testimonial';
import Ready from '../features/home/ready';

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
