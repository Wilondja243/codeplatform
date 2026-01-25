export default function Course1() {
    return (
        <div className="course-container">
            <h1 className="course-title">
                Configuration de l'environnement de développement Python
            </h1>

            <p className="course-paragraph">
                Avant d'écrire notre premier vrai programme en Python, nous
                devons préparer correctement notre environnement de travail.
                Cette étape est souvent négligée par les débutants, pourtant
                elle est essentielle, surtout dans un contexte d'apprentissage
                en ligne.
            </p>

            <p className="course-paragraph">
                Chaque outil que nous allons installer sera accompagné de sa
                source officielle et d'exemples concrets afin que vous puissiez
                reproduire les mêmes étapes chez vous.
            </p>

            <h2 className="course-section-title">1. Installation de Python</h2>

            <p className="course-paragraph">
                Python est le langage que nous allons utiliser tout au long de
                cette formation. Pour éviter les versions corrompues ou
                modifiées, nous allons toujours utiliser le site officiel.
            </p>

            <div className="highlight-link">
                <strong>Lien officiel de Python :</strong>
                <br />
                https://www.python.org/downloads/
            </div>

            <p className="course-paragraph">
                Une fois sur le site, téléchargez la version correspondant à
                votre système d’exploitation. Pendant l’installation,
                assurez-vous de cocher l’option permettant d’ajouter Python au
                système.
            </p>

            <div className="highlight-demo">
                Image de démonstration :
                <img
                    src="/images/python-path.png"
                    alt="L'image de demonstration d'ajout de python sur le path"
                />
            </div>

            <p className="course-paragraph">
                Après l’installation, nous vérifions que Python est bien reconnu
                par l’ordinateur en utilisant le terminal.
            </p>

            <div className="highlight-command">python --version</div>

            <h2 className="course-section-title">
                2. Installation de Visual Studio Code
            </h2>

            <p className="course-paragraph">
                Nous avons maintenant besoin d’un outil pour écrire notre code.
                Visual Studio Code est un éditeur utilisé aussi bien par les
                débutants que par les professionnels.
            </p>

            <div className="highlight-link">
                <strong>Lien officiel de VS Code :</strong>
                <br />
                https://code.visualstudio.com/
            </div>

            <p className="course-paragraph">
                Après l’installation, ouvrez VS Code. Prenez quelques minutes
                pour observer l’interface : barre latérale, zone d’édition et
                barre inférieure. Nous apprendrons à les utiliser
                progressivement.
            </p>

            <h2 className="course-section-title">
                3. Installation des extensions Python dans VS Code
            </h2>

            <p className="course-paragraph">
                Par défaut, VS Code ne comprend pas le langage Python. Les
                extensions permettent à l'éditeur de reconnaître la syntaxe, de
                signaler les erreurs et d'aider à l'écriture du code.
            </p>

            <p className="course-paragraph">
                Pour installer une extension, cliquez sur l'icône des extensions
                dans la barre latérale gauche, puis recherchez le nom de
                l'extension.
            </p>

            <div className="highlight-demo">
                Image de démonstration :
                <img
                    src="/images/extension.png"
                    alt="Instalation d'extension vs code"
                />
            </div>

            <p className="course-paragraph">
                Extensions essentielles à installer :
            </p>

            <ul className="course-list">
                <li>Python (éditeur : Microsoft)</li>
                <li>Pylance</li>
                <li>Code Runner (optionnel)</li>
            </ul>

            <h2 className="course-section-title">
                4. Installation d'une première bibliothèque Python
            </h2>

            <p className="course-paragraph">
                Les bibliothèques sont des outils déjà écrits par d'autres
                développeurs pour nous faciliter le travail. Pour les installer,
                nous utilisons un gestionnaire appelé <code>pip</code>.
            </p>

            <p className="course-paragraph">
                Comme exemple, nous allons installer une bibliothèque très
                simple pour vérifier que tout fonctionne correctement.
            </p>

            <div className="highlight-command">pip install colorama</div>

            <p className="course-paragraph">
                Cette commande télécharge et installe automatiquement la
                bibliothèque depuis la source officielle de Python.
            </p>

            <h2 className="course-section-title">
                5. Premier test dans VS Code
            </h2>

            <p className="course-paragraph">
                Créons maintenant un fichier nommé <code>main.py</code>. Un
                fichier Python se reconnaît toujours par l'extension{' '}
                <code>.py</code>.
            </p>

            <p className="course-paragraph">
                Dans ce fichier, écrivons une première instruction simple.
            </p>

            <div className="highlight-command">print("Hello, Python!")</div>

            <p className="course-paragraph">
                Exécutez le fichier et observez le résultat dans le terminal. Si
                le message s'affiche correctement, cela signifie que votre
                environnement est prêt.
            </p>

            <h2 className="course-section-title">Conclusion</h2>

            <p className="course-paragraph">
                Dans ce premier cours, nous avons installé et configuré tous les
                outils nécessaires pour apprendre Python dans de bonnes
                conditions.
            </p>

            <p className="course-paragraph">
                Au prochain cours, nous commencerons à écrire de vrais
                programmes en apprenant les bases du langage Python.
            </p>
        </div>
    );
}
