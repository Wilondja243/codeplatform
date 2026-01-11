import { Link } from 'react-router-dom';

export default function navBar() {
    return (
        <nav className="navbar">
            {/* <div className="t-bar">
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
                            <Link className="btn" to="#">
                                Nous contactez
                            </Link>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

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
                    <Link to="/explore">Explorer</Link>
                    <Link to="/roadmap">Roadmaps</Link>
                    <Link to="#">Méthodologie</Link>
                    <Link to="#">Succès</Link>
                </nav>

                {/* <div className="navbar-actions">
                    <Link className="btn-secondary navbar-login" to="/login">
                        Connexion
                    </Link>
                    <a href="/register" className="btn navbar-button">
                        S'inscrire
                    </a>
                </div> */}
            </div>
        </nav>
    );
}
