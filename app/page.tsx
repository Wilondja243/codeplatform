import NavBar from '@/components/layout/nav-bar';
import Hero from '@/components/sections/home/hero';
import Footer from '@/components/layout/footer';
import Features from '@/components/sections/home/feature';
import HowItWorks from '@/components/sections/home/roadmap-step';
import Testimonials from '@/components/sections/home/testimonial';
import Ready from '@/components/sections/home/ready';

export default function Home() {
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
