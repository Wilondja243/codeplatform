import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import ContactHero from '@/components/sections/contact/contact-hero';
import SupportTeam from '@/components/sections/contact/support-team';
import ContactMethods from '@/components/sections/contact/contact-method';
import ContactForm from '@/components/sections/contact/contact-form';
import ContactMap from '@/components/sections/contact/contact-map';
import ContactCTA from '@/components/sections/contact/contact-cta';

export default function Contact() {
    return (
        <>
            <NavBar />
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
