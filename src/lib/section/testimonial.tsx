import { testimonials } from '../../data/data';

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container wrapper">
                <h2>Histoires de réussite</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="testimonial-header">
                                <div
                                    className="testimonial-avatar"
                                    style={{
                                        backgroundImage: `url(${t.image})`,
                                    }}
                                    aria-label={`Portrait de ${t.name}`}
                                />
                                <div>
                                    <h4>{t.name}</h4>
                                    <p className="testimonial-location">
                                        {t.location}
                                    </p>
                                </div>
                            </div>
                            <p className="testimonial-feedback">
                                "{t.feedback}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
