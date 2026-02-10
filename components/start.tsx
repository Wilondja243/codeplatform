import Link from 'next/link';

interface StartProps {
    title: string;
    description: string;
    register?: string;
    connexion?: string;
    start_course?: string;
    path?: string;
}

export function Start({
    title,
    description,
    register,
    connexion,
    start_course,
    path,
}: StartProps) {
    return (
        <section className="start-section" aria-labelledby="start-title">
            <div className="start-container">
                <h2 id="start-title" className="sr-only">
                    Commencer la formation
                </h2>

                <div className="start-box">
                    <h3>{title}</h3>

                    <p>{description}</p>

                    <div className="start-actions">
                        {start_course ? (
                            <Link href={`${path}`} className="btn btn-primary">
                                <span className="material-symbols-outlined">
                                    rocket_launch
                                </span>
                                Commencer le cours
                            </Link>
                        ) : (
                            <>
                                <a href="/register" className="btn btn-primary">
                                    {register}
                                </a>
                                <a href="/login" className="link-secondary">
                                    {connexion}
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
