import { cleanCode, highlightPython } from '../../utils/clean-code';

const rawCode = cleanCode(`
        class Student:
            def __init__(self, name, course):
                self.name = name
                self.course = course

            def introduce(self):
                return f"Hi, I'm {self.name} learning {self.course}"

        student = Student("Alex", "Python")
        print(student.introduce())
`);

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
                        <button className="btn">
                            Commencer à apprendre
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>
                        <button className="btn-secondary">
                            Voir les cours
                        </button>
                    </div>
                    <div className="hero-students">
                        <div className="student-avatars">
                            <div
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBENp_VQWW5M3RJtO2CfIIx4jgFgsj7t0UvMdWS2mH8HGJjNZ6AZ3j3keLlu9z21hpCSqwPJAkrFAgufHgR3Z-MnsDlWYtTNd88E5uesY2SxiHxmr13sprAD0KnsPJQyv5K4_puc0vnD2f2qgS76YPILNwWIeLEY-96Kp5_8UzJrbvckL3toQAYNeR463frVw3kk4Norz3XDMytpjKZYjWfPunDe3XP5V7aqxva7AGOnButygk3jeqfKfK7kps9BSNqWDMysSr_SNs')",
                                }}
                            ></div>
                            <div
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN7OvwdUsmrGXMgrgqW5SAM45J2QpEwMlr6MbsUX4SV4DXlPeeRNi7Ni20InvmtJL5u8hkY5TuTdfMbH4Bigl_XbRMGgR3BxRhHFf-RJ0H6-B0qyDNcwEuh4wCi5u8JFWK2ynSFs7kx-28VOCp2FXFfOU6g4y6f-ZKRqqdUe4vnt4xd1rxcVCwOg0e1QdjhiS5qwdd4Id7_m0LQGG-5waftgSu_J6R3qHqd__lgNFQP6AR1fiyZ1kWnSy_5ZOtckndlMFgxtSVySg')",
                                }}
                            ></div>
                            <div
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuFEJF5UDyv3ofulZHYdN5Or6c4r2JiTJYoVCyK-UZpc6DKLje8fOvSicR6WY8vS0HQbB7Bn2Vp3ItqdPjP5qQRznCzHrH5Gi6c7EqZhhHAdDMWvqqE1FoEYUqKPwQL_F8dsaprXaloF0vkxFxd5QRTVLVe-3QRrx6YwGOWY0ESd6b33Z37b12i4lvzTaBt5k3DuLP2Pmdy_5zek3kOT6IsubJER5dPZeHfFQ4gjGGkTzX3P3wPOMwjjrVn5qB_1HioHZCZ7kNcOs')",
                                }}
                            ></div>
                        </div>
                        <p>Rejoignez plus de 10 000 étudiants dans le monde</p>
                    </div>
                </div>

                <div className="terminal">
                    <div className="terminal-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="terminal-title">python main.py</span>
                    </div>

                    <pre className="terminal-body">
                        <code
                            dangerouslySetInnerHTML={{ __html: highlighted }}
                        />
                    </pre>
                </div>
            </div>
        </section>
    );
}
