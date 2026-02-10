import { useState } from 'react';

export default function LessonFeedback() {
    const [useful, setUseful] = useState<boolean | null>(null);
    const [satisfied, setSatisfied] = useState<any | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (useful !== null && satisfied !== null) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="feedback-card feedback-success">
                <div className="icon-celebrate">🎉</div>
                <h3>Merci infiniment !</h3>
                <p>Votre avis est le moteur de notre amélioration.</p>
            </div>
        );
    }

    return (
        <div className="feedback-card">
            <header className="feedback-header">
                <h2>Votre avis nous intéresse</h2>
                <p>Aidez-nous à rendre ce cours encore meilleur.</p>
            </header>

            <div className="feedback-section">
                <label>La leçon était-elle utile ?</label>
                <div className="feedback-grid">
                    <button
                        onClick={() => setUseful(true)}
                        className={`feedback-btn ${useful === true ? 'active' : ''}`}
                    >
                        <span className="emoji">👍</span> Utile
                    </button>
                    <button
                        onClick={() => setUseful(false)}
                        className={`feedback-btn ${useful === false ? 'active' : ''}`}
                    >
                        <span className="emoji">👎</span> Pas vraiment
                    </button>
                </div>
            </div>

            <div className="feedback-section">
                <label>Niveau de satisfaction globale</label>
                <div className="feedback-grid">
                    {['😞', '😐', '🙂', '🤩'].map((emoji, index) => (
                        <button
                            key={index}
                            onClick={() => setSatisfied(index)}
                            className={`feedback-btn emoji-btn ${satisfied === index ? 'active' : ''}`}
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="submit-btn"
                disabled={useful === null || satisfied === null}
                onClick={handleSubmit}
            >
                Envoyer mon feedback
            </button>

            <style>{`
                .feedback-card {
                    max-width: 450px;
                    margin: 40px auto;
                    padding: 32px;
                    border-radius: 24px;
                    background: #ffffff;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
                    font-family: 'Inter', system-ui, sans-serif;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                .feedback-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #1f2937;
                }
                .feedback-header p {
                    color: #6b7280;
                    font-size: 0.95rem;
                    margin: 8px 0 24px 0;
                }
                .feedback-section {
                    margin-bottom: 24px;
                    text-align: left;
                }
                .feedback-section label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #374151;
                    font-size: 0.9rem;
                }
                .feedback-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
                    gap: 12px;
                }
                .feedback-btn {
                    padding: 12px;
                    border: 2px solid #f3f4f6;
                    border-radius: 12px;
                    background: #f9fafb;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.2s;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }
                .feedback-btn:hover {
                    border-color: #e5e7eb;
                    background: #f3f4f6;
                    transform: translateY(-2px);
                }
                .feedback-btn.active {
                    border-color: #6366f1;
                    background: #eef2ff;
                    color: #4338ca;
                }
                .emoji { font-size: 1.2rem; }
                .emoji-btn { font-size: 1.5rem; }
                
                .submit-btn {
                    width: 100%;
                    padding: 14px;
                    border: none;
                    border-radius: 12px;
                    background: #6366f1;
                    color: white;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: opacity 0.2s;
                    margin-top: 8px;
                }
                .submit-btn:disabled {
                    background: #d1d5db;
                    cursor: not-allowed;
                }
                .submit-btn:not(:disabled):hover {
                    background: #4f46e5;
                    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
                }
                .feedback-success {
                    animation: scaleIn 0.4s ease-out;
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
}
