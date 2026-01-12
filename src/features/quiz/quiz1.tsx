import { useState } from 'react';

interface QuizQuestion {
    question: string;
    answer: string;
}

const quizQuestions: QuizQuestion[] = [
    {
        question:
            'Écris une fonction "somme" qui prend deux nombres et retourne leur somme.',
        answer: 'def somme(a, b):\n    return a + b',
    },
    {
        question: 'Écris une boucle "for" qui affiche les nombres de 1 à 5.',
        answer: 'for i in range(1, 6):\n    print(i)',
    },
    {
        question: 'Crée une variable "nom" et assigne-lui la valeur "Alice".',
        answer: 'nom = "Alice"',
    },
    {
        question: 'Écris un "if" qui affiche "OK" si x vaut 10.',
        answer: 'if x == 10:\n    print("OK")',
    },
    {
        question:
            'Écris une fonction "bonjour" qui prend un nom et affiche "Bonjour, <nom>".',
        answer: 'def bonjour(nom):\n    print("Bonjour,", nom)',
    },
];

export default function Quiz1() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);

    const currentQuestion = quizQuestions[currentIndex];

    const handleSubmit = () => {
        if (userInput.trim() === currentQuestion.answer.trim()) {
            setFeedback('✅ Correct !');
            setScore(score + 1);
            setUserInput('');
            if (currentIndex < quizQuestions.length - 1) {
                setTimeout(() => setCurrentIndex(currentIndex + 1), 800);
            } else {
                setTimeout(() => setFeedback('Quiz terminé !'), 800);
            }
        } else {
            setFeedback('❌ Incorrect, essaye encore.');
        }
    };

    return (
        <div className="bg-background-dark">
            <h1 className="quiz-title">Quiz Python</h1>
            <p className="quiz-progress">
                Question {currentIndex + 1} / {quizQuestions.length}
            </p>

            {currentIndex < quizQuestions.length ? (
                <>
                    <div className="quiz-question">
                        {currentQuestion.question}
                    </div>

                    <textarea
                        className="quiz-input"
                        rows={5}
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Écris ton code ici..."
                    />

                    <button className="quiz-button" onClick={handleSubmit}>
                        Valider
                    </button>

                    {feedback && <p className="quiz-feedback">{feedback}</p>}

                    <div className="quiz-progress-bar">
                        <div
                            className="quiz-progress-filled"
                            style={{
                                width: `${((currentIndex + (feedback === '✅ Correct !' ? 1 : 0)) / quizQuestions.length) * 100}%`,
                            }}
                        />
                    </div>
                </>
            ) : (
                <div className="quiz-end">
                    <h2>Quiz terminé !</h2>
                    <p>
                        Ton score : {score} / {quizQuestions.length}
                    </p>
                </div>
            )}

            <style>{`
        .quiz-container {
          max-width: 700px;
          margin: 40px auto;
          padding: 30px;
          background: #f9f9f9;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .quiz-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 10px;
          color: #222;
        }

        .quiz-progress {
          text-align: center;
          margin-bottom: 20px;
          color: #555;
        }

        .quiz-question {
          background: #eef2ff;
          padding: 15px;
          border-radius: 8px;
          font-family: monospace;
          white-space: pre-wrap;
          margin-bottom: 15px;
        }

        .quiz-input {
          width: 100%;
          padding: 12px;
          font-family: monospace;
          font-size: 1rem;
          border: 2px solid #ccc;
          border-radius: 8px;
          margin-bottom: 12px;
          resize: vertical;
        }

        .quiz-input:focus {
          outline: none;
          border-color: #4f46e5;
        }

        .quiz-button {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 10px;
          transition: 0.2s;
        }

        .quiz-button:hover {
          background: #3730a3;
        }

        .quiz-feedback {
          font-weight: bold;
          margin-bottom: 15px;
        }

        .quiz-progress-bar {
          width: 100%;
          height: 8px;
          background: #ddd;
          border-radius: 4px;
        }

        .quiz-progress-filled {
          height: 100%;
          background: #4f46e5;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .quiz-end {
          text-align: center;
          font-size: 1.2rem;
          color: #333;
        }
      `}</style>
        </div>
    );
}
