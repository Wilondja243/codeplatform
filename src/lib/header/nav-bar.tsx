import { Link } from 'react-router-dom';

export default function navBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container wrapper">
                <div className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <span className="material-symbols-outlined">
                            terminal
                        </span>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>CodePlatform</span>
                </div>

                <nav className="navbar-nav">
                    <Link to="/">Courses</Link>
                    <Link to="/paths">Paths</Link>
                    <Link to="/how-it-works">How it Works</Link>
                    <Link to="/testimonials">Testimonials</Link>
                </nav>

                <div className="navbar-actions">
                    <Link className="navbar-login" to="/login">
                        Login
                    </Link>
                    <button className="btn navbar-button">Get Started</button>
                </div>
            </div>
        </nav>
    );
}
