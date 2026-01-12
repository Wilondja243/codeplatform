import Footer from '../../features/shared/footer';
import NavBar from '../../features/shared/nav-bar';
import WebDevelopmentIntro from '../../lib/section/web-dev';
import { Start } from '../../components/start';

import { useUserMeQuery } from '../../lib/query/user.query';
import { StartSkeleton } from '../../components/start-skeletton';

export default function WebDev() {
    const { data: me, isLoading } = useUserMeQuery();

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="lesson-content wrapper">
                    <WebDevelopmentIntro />
                </div>

                {isLoading ? (
                    <StartSkeleton isLoading />
                ) : me ? (
                    <Start
                        title="Commencer la formation"
                        description="Cliquez pour débuter le cours et suivre votre progression pas à pas."
                        start_course="Commencer le cours"
                        path='/formation-web/developpement-web'
                    />
                ) : (
                    <Start
                        title="Tarifs, programmes, inscription"
                        description="Créez votre compte pour continuer votre formation."
                        register="Créer un compte"
                        connexion="Se connecter"
                    />
                )}

                <Footer />
            </main>
        </div>
    );
}
