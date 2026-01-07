import NavBar from '../lib/header/nav-bar';
import Hero from '../lib/header/hero';
import Footer from '../lib/header/footer';
import Features from '../lib/section/feature';
import PopularCourses from '../lib/section/popular-course';
import HowItWorks from '../lib/section/how-it-work';
import Testimonials from '../lib/section/testimonial';
import Ready from '../lib/section/ready';


export default function Router() {
    return (
        <div>
            <header>
                <NavBar />
                <Hero />
            </header>
            <main>
                <Features />
                {/* <PopularCourses /> */}
                <HowItWorks />
                <Testimonials />
                <Ready />
                <Footer />
            </main>
        </div>
    );
}
