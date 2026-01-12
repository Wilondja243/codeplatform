import { useFeatureQuery } from '../../lib/query/course.query';
import { features } from '../../data/data';

export default function Features() {
    const { data, isLoading, isError, error } = useFeatureQuery();

    return (
        <section className="features-section">
            <div className="feature-container wrapper">
                <div className="section-header">
                    <h2>Pourquoi choisir CodePlatform</h2>
                    <p>
                        Nous nous concentrons sur les compétences pratiques qui
                        vous font décrocher un emploi, pas seulement la théorie.
                        Notre programme est adapté au paysage technologique
                        moderne.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature: any) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">
                                <span className="material-symbols-outlined">
                                    {feature.icon}
                                </span>
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
