import NavBar from '../../lib/header/nav-bar';
import Footer from '../../lib/header/footer';
import RegisterForm from './signup';

export default function Register() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <RegisterForm />
                <Footer />
            </main>
        </div>
    );
}
