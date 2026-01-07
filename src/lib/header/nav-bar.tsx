import { Link } from 'react-router-dom';

export default function navBar() {
    return (
        <nav className="navbar">
            <div className="t-bar">
                <div className="nav-infos wrapper">
                    <div className="navbar-logo">
                        <div className="navbar-logo-icon">
                            <span className="material-symbols-outlined">
                                terminal
                            </span>
                        </div>
                        <span style={{ fontWeight: 'bold' }}>CodePlatform</span>
                    </div>
                    <div className="contact-infos">
                        <div className="navbar-actions">
                            <Link
                                className="btn"
                                to="/login"
                            >
                                Nous contactez
                            </Link>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-container wrapper">
                <nav className="navbar-nav">
                    <Link to="/">Explorer</Link>
                    <Link to="/paths">Roadmaps</Link>
                    <Link to="/how-it-works">La Méthode</Link>
                    <Link to="/testimonials">Succès</Link>
                </nav>

                <div className="navbar-actions">
                    <Link className="btn-secondary navbar-login" to="/login">
                        Connexion
                    </Link>
                    <button className="btn navbar-button">S'inscrire</button>
                </div>
            </div>
        </nav>
    );
}
