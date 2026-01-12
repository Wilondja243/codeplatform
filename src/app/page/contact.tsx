import Navbar from '../../features/shared/nav-bar';
import ContactHero from '../../features/contact/contact-hero';
import ContactMethods from '../../features/contact/contact-method';
import SupportTeam from '../../features/contact/support-team';
import ContactForm from '../../features/contact/contact-form';
import ContactMap from '../../features/contact/contact-map';
import ContactCTA from '../../features/contact/contact-cta';
import Footer from '../../features/shared/footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1400px] mx-auto py-6">
                <ContactHero />
                <ContactMethods />
                <SupportTeam />
                <div className="grid lg:grid-cols-2 gap-8 my-20 w-[85%] mx-auto">
                    <ContactForm />
                    <ContactMap />
                </div>
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
