import { useParams } from 'react-router-dom';

export default function Course() {
    const { id } = useParams();

    return (
        <section>
            <div className="course-header-page">
                {/* Fil d’Ariane */}
                <div className="uri">
                    <a href="/">Accueil/</a>
                    <a href="/formation">Formation/</a>
                    <small>{id}</small>
                </div>

                <div className="course-intro-grid">
                    <div className="course-intro-text">
                        <h1>
                            Python :
                            <span className="text-primary">De Zéro à Héro</span>
                        </h1>

                        <span className="badge-featured">
                            Formation Intensive
                        </span>

                        <p className="course-main-desc">
                            Aujourd'hui, savoir programmer n'est plus réservé
                            aux ingénieurs ou aux experts. Python est devenu
                            l'un des langages les plus accessibles et les plus
                            puissants au monde. Cette formation a été pensée
                            pour répondre à un problème concret : beaucoup de
                            débutants apprennent la syntaxe, mais échouent à
                            comprendre la logique derrière le code.
                        </p>

                        <p>
                            Ici, l'objectif n'est pas de vous noyer dans la
                            théorie, mais de vous accompagner étape par étape
                            pour développer une vraie capacité de raisonnement
                            algorithmique. Chaque notion abordée est
                            immédiatement appliquée à des cas réels, afin que
                            vous compreniez non seulement
                            <strong> comment écrire du code</strong>, mais
                            surtout
                            <strong> pourquoi vous l'écrivez</strong>.
                        </p>

                        <div className="course-quick-stats">
                            <span>
                                <i className="material-symbols-outlined">
                                    analytics
                                </i>
                                Débutant accepté
                            </span>
                            <span>
                                <i className="material-symbols-outlined">
                                    schedule
                                </i>
                                15 heures de contenu
                            </span>
                            <span>
                                <i className="material-symbols-outlined">
                                    workspace_premium
                                </i>
                                Certificat inclus
                            </span>
                        </div>

                        <button className="btn btn-primary btn-large">
                            S'inscrire à la formation
                        </button>
                    </div>

                    <div className="course-preview-card">
                        <div className="video-placeholder">
                            <span className="material-symbols-outlined">
                                play_circle
                            </span>
                            <p>Aperçu de la formation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="course-container">
                <div className="course-section">
                    <h2>Prérequis</h2>
                    <ul>
                        <li>
                            Aucune connaissance en programmation n'est requise
                        </li>
                        <li>Un ordinateur (Windows, Linux ou macOS)</li>
                        <li>Une connexion Internet basique</li>
                        <li>Motivation, discipline et curiosité</li>
                    </ul>
                </div>

                <div className="course-section">
                    <h2>Objectifs de la formation</h2>
                    <ul>
                        <li>
                            Comprendre la logique de programmation et les
                            algorithmes
                        </li>
                        <li>Maîtriser les bases solides du langage Python</li>
                        <li>Écrire un code clair, structuré et maintenable</li>
                        <li>Résoudre des problèmes concrets avec Python</li>
                        <li>Construire des mini-projets réels</li>
                    </ul>
                </div>

                <div className="course-section">
                    <h2>À la fin de cette formation, vous saurez</h2>
                    <ul>
                        <li>Créer des scripts Python utiles</li>
                        <li>Automatiser des tâches répétitives</li>
                        <li>Comprendre et corriger des erreurs de code</li>
                        <li>Lire et écrire un code professionnel</li>
                        <li>Continuer vers le Web, la Data ou l'Automation</li>
                    </ul>
                </div>

                <div className="course-section">
                    <h2>À qui s'adresse cette formation ?</h2>
                    <p>
                        Cette formation est destinée aux étudiants,
                        professionnels, entrepreneurs ou autodidactes souhaitant
                        acquérir des bases solides en programmation et entrer
                        sérieusement dans le monde du développement logiciel.
                    </p>
                </div>
            </div>
        </section>
    );
}
