import { Link } from "react-router-dom";


export default function Ready() {
    return (
        <div className="ready">
            <div className="ready-container wrapper">
                <div className="details">
                    <h2 className="">Prêt à commencer votre aventure dans le code ?</h2>
                    <p>
                        Rejoignez des centaines d'étudiants qui apprennent à
                        programmer et transforment leur carrière dès
                        aujourd'hui.
                    </p>

                    <Link to="/explore" className="mt-5 inline-block px-5 py-3 bg-primary text-text-light rounded-md hover:bg-primary-dark">Rejoignez-nous maintenant</Link>
                </div>
            </div>
        </div>
    );
}
