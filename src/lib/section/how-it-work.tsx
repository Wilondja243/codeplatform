
export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="text-center intro">
          <h2>Comment ça marche</h2>
          <p>Commencez votre parcours pour devenir développeur professionnel en 4 étapes simples.</p>
        </div>

        <div className="steps-grid">
          <div className="connector-line"></div>

          <div className="step">
            <div className="step-number active">1</div>
            <div className="step-content">
              <h3>Choisir une voie</h3>
              <p>Sélectionnez une filière qui correspond à vos objectifs et centres d'intérêt.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Apprendre & Pratiquer</h3>
              <p>Regardez des vidéos concises et résolvez des défis interactifs de code.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Construire des projets</h3>
              <p>Appliquez vos compétences en créant des applications prêtes pour la production.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Obtenir une certification</h3>
              <p>Recevez un certificat pour valider vos compétences auprès des employeurs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
