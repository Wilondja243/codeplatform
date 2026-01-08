import Footer from '../../lib/header/footer';
import NavBar from '../../lib/header/nav-bar';
import Course from '../../lib/section/course';
import { Start } from '../../lib/section/start';

import { useUserMeQuery } from '../../lib/query/user.query';


export default function FromZero() {
    const {data: me, isLoading } = useUserMeQuery();

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="lesson-content wrapper">
                    <Course />
                </div>

                { !isLoading && me ? (
                    <Start
                        title="Commencer la formation"
                        description="Cliquez pour débuter le cours et suivre votre progression pas à pas."
                        start_course="Commencer le cours"
                    />
                ) : (
                    <Start
                        title="Tarifs, programmes, inscription"
                        description="Créez votre compte pour continuer votre formation."
                        register="Créer un compte"
                        connexion="Se connecter"
                    />
                ) }

                <Footer />
            </main>
        </div>
    );
}
