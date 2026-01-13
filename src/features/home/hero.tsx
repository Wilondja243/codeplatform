import { Link } from 'react-router-dom';
import MarkdownRenderer from '../../hooks/use-markdown';
import { cleanCode, highlightPython } from '../../utils/clean-code';

const rawCode = `
class Student:
    def __init__(self, name, course):
        self.name = name
        self.course = course

    def introduce(self):
        return f"I m {self.name} learning {self.course}"

student = Student("Alex", "Python")
print(student.introduce())
`;

const highlighted = highlightPython(rawCode);

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container wrapper">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="pulse-dot"></span>
                        <span className="badge-text">
                            Nouveaux cours disponibles
                        </span>
                    </div>
                    <h1 className="hero-title">
                        L'école de la{' '}
                        <span className="gradient-text">pratique.</span>
                    </h1>
                    <p className="hero-description">
                        Maîtrisez Python et le Web via des projets concrets.
                        Conçu pour les autodidactes qui veulent des résultats.
                    </p>
                    <div className="hero-buttons">
                        <Link to="roadmap" className="btn">
                            Commencer à apprendre
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </Link>
                        <Link to="/explore" className="btn-secondary">
                            Voir les cours
                        </Link>
                    </div>
                    <div className="hero-students">
                        <div className="student-avatars">
                            <div
                                className="avatar"
                                style={{ backgroundImage: 'url(images/b.jpg)' }}
                            ></div>
                            <div
                                className="avatar"
                                style={{
                                    backgroundImage: 'url(images/4442.jpg)',
                                }}
                            ></div>
                            <div
                                className="avatar"
                                style={{
                                    backgroundImage: 'url(images/4436.jpg)',
                                }}
                            ></div>
                        </div>
                        <p>Rejoignez plus de 100 étudiants dans le monde</p>
                    </div>
                </div>

                <div className="terminal">
                    <div className="terminal-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="terminal-title">python main.py</span>
                    </div>

                    <pre
                        className="terminal-body"
                        // style={{ overflow: 'hidden' }}
                    >
                        <code
                            dangerouslySetInnerHTML={{ __html: highlighted }}
                        />

                        {/* <MarkdownRenderer content={rawCode} /> */}
                    </pre>
                </div>
            </div>
        </section>
    );
}
