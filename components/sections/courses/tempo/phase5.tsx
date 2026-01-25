import { Link } from 'react-router-dom';

export default function Course5() {
    return (
        <>
            <div className="course-container">
                <h1 className="course-title">
                    Les fonctions en Python : comprendre, utiliser et créer ses
                    propres fonctions
                </h1>

                <p className="course-paragraph">
                    Jusqu’à présent, nous avons écrit du code ligne par ligne.
                    Ce code fonctionne, mais il devient rapidement long,
                    répétitif et difficile à comprendre.
                </p>

                <p className="course-paragraph">
                    Les fonctions permettent de regrouper plusieurs instructions
                    sous un même nom. Une fois définie, une fonction peut être
                    utilisée autant de fois que nécessaire, sans réécrire le
                    même code.
                </p>

                <p className="course-paragraph">
                    C’est exactement comme une machine : on lui donne des
                    informations en entrée, elle travaille, puis elle donne un
                    résultat en sortie.
                </p>

                {/* ---------------------------- */}
                <h2 className="course-section-title">
                    1. Qu’est-ce qu’une fonction ?
                </h2>

                <p className="course-paragraph">
                    Une fonction est un bloc de code qui effectue une tâche
                    précise. Elle permet d’éviter la répétition et rend le
                    programme plus clair.
                </p>

                <p className="course-paragraph">
                    Au lieu d’écrire le même code plusieurs fois, on écrit une
                    fonction une seule fois, puis on l’appelle quand on en a
                    besoin.
                </p>

                {/* ---------------------------- */}
                <h2 className="course-section-title">
                    2. Les fonctions prédéfinies (déjà fournies par Python)
                </h2>

                <p className="course-paragraph">
                    Python fournit déjà plusieurs fonctions prêtes à l’emploi.
                    Nous en avons déjà utilisé plusieurs sans forcément le
                    savoir.
                </p>

                <p className="course-paragraph">
                    Voici quelques fonctions prédéfinies que nous avons vues
                    jusqu’à présent.
                </p>

                <div className="highlight-command">
                    print("Bonjour")
                    <br />
                    age = input("Entre ton âge : ")
                    <br />
                    nombre = int("10")
                    <br />
                    longueur = len("Python")
                    <br />
                    type(age)
                </div>

                <p className="course-paragraph">
                    Ces fonctions font un travail précis : afficher un message,
                    demander une information, convertir une valeur, compter des
                    éléments ou vérifier un type.
                </p>

                <h2 className="course-section-title">
                    3. Créer sa propre fonction (fonction définie par
                    l’utilisateur)
                </h2>

                <p className="course-paragraph">
                    En programmation, une fonction est comme une{' '}
                    <strong>petite machine</strong>. Cette machine reçoit un
                    ordre, fait un travail précis, puis s’arrête. Le but d’une
                    fonction est de <strong>regrouper des instructions</strong>
                    pour pouvoir les réutiliser plus tard sans les réécrire.
                </p>

                <p className="course-paragraph">
                    En Python, pour dire à l’ordinateur : « Je veux créer une
                    nouvelle fonction », on utilise un mot spécial appelé{' '}
                    <strong>mot-clé</strong> : <code>def</code>. Ce mot indique
                    à Python que ce qui suit est une fonction.
                </p>

                <p className="course-paragraph">
                    Après <code>def</code>, on écrit le{' '}
                    <strong>nom de la fonction</strong>. Ce nom est choisi par
                    le programmeur et doit expliquer ce que la fonction fait.
                    Ensuite, on met des parenthèses <code>()</code>, même si la
                    fonction ne reçoit aucune information.
                </p>

                <div className="highlight-command">
                    def dire_bonjour():
                    <br />
                </div>

                <p className="course-paragraph">
                    Le symbole <code>:</code> à la fin indique à Python que le
                    contenu de la fonction va commencer juste après. Toutes les
                    lignes écrites <strong>avec une indentation</strong>
                    (un décalage vers la droite) font partie de la fonction.
                </p>

                <div className="highlight-command">
                    def dire_bonjour():
                    <br />
                    &nbsp;&nbsp;print("Bonjour et bienvenue")
                </div>

                <p className="course-paragraph">
                    Ici, la fonction s’appelle <code>dire_bonjour</code>. À
                    l’intérieur, elle contient une seule instruction : afficher
                    un message à l’écran. Tant que la fonction n’est pas
                    appelée, <strong>rien ne s’exécute</strong>.
                </p>

                <p className="course-paragraph">
                    Pour utiliser une fonction, on doit l’
                    <strong>appeler</strong>. Appeler une fonction signifie dire
                    à Python : « Exécute maintenant le code qui se trouve à
                    l’intérieur de cette fonction ».
                </p>

                <div className="highlight-command">dire_bonjour()</div>

                <p className="course-paragraph">
                    Quand Python lit cette ligne, il cherche la fonction appelée
                    <code>dire_bonjour</code>, entre à l’intérieur, exécute le
                    <code>print()</code>, puis revient à la ligne suivante du
                    programme.
                </p>

                <p className="course-paragraph">
                    Une fonction peut être appelée autant de fois que l’on veut.
                    C’est très pratique, car on écrit le code une seule fois et
                    on l’utilise plusieurs fois sans duplication.
                </p>

                <h2 className="course-section-title">
                    4. Les paramètres : donner des informations à une fonction
                </h2>

                <p className="course-paragraph">
                    Jusqu’ici, nous avons créé une fonction qui faisait toujours
                    la même chose. Elle affichait toujours le même message. Mais
                    dans la vraie vie, on a souvent besoin que la fonction
                    <strong> s’adapte selon la situation</strong>.
                </p>

                <p className="course-paragraph">
                    Pour cela, on utilise des <strong>paramètres</strong>. Un
                    paramètre est une information que l’on donne à une fonction
                    au moment où on l’appelle. On peut voir un paramètre comme
                    une <strong>boîte vide </strong>
                    que Python remplira plus tard.
                </p>

                <p className="course-paragraph">
                    Lorsqu’on définit une fonction, on écrit les paramètres
                    entre les parenthèses <code>()</code>. Ces paramètres n’ont
                    pas encore de valeur à ce moment-là.
                </p>

                <div className="highlight-command">
                    def saluer(nom):
                    <br />
                    &nbsp;&nbsp;print("Bonjour", nom)
                </div>

                <p className="course-paragraph">
                    Ici, <code>nom</code> est un paramètre. Cela signifie que{' '}
                    <code>nom</code> est une variable spéciale qui n’existe que{' '}
                    <strong>à l’intérieur de la fonction</strong>. Elle attend
                    de recevoir une valeur.
                </p>

                <p className="course-paragraph">
                    Tant que la fonction n’est pas appelée, Python ne sait pas
                    encore quelle valeur va être utilisée pour <code>nom</code>.
                </p>

                <p className="course-paragraph">
                    Maintenant, regardons ce qui se passe quand on appelle la
                    fonction. Lors de l’appel, on donne une{' '}
                    <strong>valeur</strong> au paramètre.
                </p>

                <div className="highlight-command">saluer("Alice")</div>

                <p className="course-paragraph">
                    Quand Python exécute cette ligne, il fait les étapes
                    suivantes :
                </p>

                <ul className="course-list">
                    <li>
                        Il entre dans la fonction <code>saluer</code>
                    </li>
                    <li>
                        Il met la valeur <code>"Alice"</code> dans le paramètre{' '}
                        <code>nom</code>
                    </li>
                    <li>Il exécute le code à l’intérieur de la fonction</li>
                    <li>
                        Il affiche : <strong>Bonjour Alice</strong>
                    </li>
                    <li>Il sort de la fonction</li>
                </ul>

                <p className="course-paragraph">
                    Si on appelle la même fonction avec une autre valeur, le
                    paramètre reçoit simplement une nouvelle valeur.
                </p>

                <div className="highlight-command">saluer("Jean")</div>

                <p className="course-paragraph">
                    Cette fois-ci, Python met <code>"Jean"</code> dans{' '}
                    <code>nom</code>, puis affiche <strong>Bonjour Jean</strong>
                    . La fonction est la même, seule la valeur change.
                </p>

                <p className="course-paragraph">En résumé :</p>

                <ul className="course-list">
                    <li>
                        <strong>Paramètre</strong> : variable définie dans la
                        fonction (ex : <code>nom</code>)
                    </li>
                    <li>
                        <strong>Valeur donnée</strong> : information envoyée
                        lors de l’appel (ex : <code>"Alice"</code>)
                    </li>
                    <li>
                        La fonction peut être réutilisée avec différentes
                        valeurs
                    </li>
                </ul>

                {/* ---------------------------- */}
                <h2 className="course-section-title">
                    5. Plusieurs paramètres
                </h2>

                <p className="course-paragraph">
                    Une fonction peut recevoir plusieurs paramètres. Ils sont
                    séparés par des virgules.
                </p>

                <div className="highlight-command">
                    def presentation(nom, age):
                    <br />
                    &nbsp;&nbsp;print(nom, "a", age, "ans")
                </div>

                <div className="highlight-command">
                    presentation("Paul", 20)
                </div>

                <h2 className="course-section-title">6. La fonction return</h2>

                <p className="course-paragraph">
                    La plupart des débutants confondent <code>print()</code> et{' '}
                    <code>return</code>. C’est une erreur normale, mais il est
                    très important de comprendre la différence.
                </p>

                <p className="course-paragraph">
                    <strong>print()</strong> sert uniquement à afficher quelque
                    chose à l’écran.
                    <strong>return</strong> sert à renvoyer une valeur à
                    l’extérieur de la fonction.
                </p>

                <p className="course-paragraph">
                    Une fonction avec <code>return</code> produit un résultat
                    que l’on peut stocker dans une variable et réutiliser plus
                    tard.
                </p>

                <div className="highlight-command">
                    def addition(a, b):
                    <br />
                    &nbsp;&nbsp;return a + b
                </div>

                <div className="highlight-command">
                    resultat = addition(3, 4)
                    <br />
                    print(resultat)
                </div>

                <p className="course-paragraph">
                    Ici, la fonction calcule une somme et la renvoie. Sans{' '}
                    <code>return</code>, le résultat serait perdu.
                </p>

                <h3 className="course-section-title">Exemple:</h3>

                <p className="course-paragraph">
                    Imagine une calculatrice. Tu lui donnes deux nombres, elle
                    fait le calcul, puis elle te donne un résultat.
                </p>

                <p className="course-paragraph">
                    Le résultat affiché par la calculatrice, c’est exactement le
                    rôle de <code>return</code> dans une fonction. La fonction
                    travaille à l’intérieur, puis elle{' '}
                    <strong>renvoie une valeur vers l’extérieur</strong>.
                </p>

                <p className="course-paragraph">
                    Tant que la fonction n’utilise pas <code>return</code>, le
                    résultat reste bloqué à l’intérieur de la fonction et tu ne
                    peux pas l’utiliser ailleurs dans ton programme.
                </p>

                <div className="highlight-command">
                    def calcul_moyenne(note1, note2):
                    <br />
                    &nbsp;&nbsp;moyenne = (note1 + note2) / 2<br />
                    &nbsp;&nbsp;return moyenne
                </div>

                <div className="highlight-command">
                    m = calcul_moyenne(12, 16)
                    <br />
                    if m &gt;= 10:
                    <br />
                    &nbsp;&nbsp;print("Admis")
                    <br />
                    else:
                    <br />
                    &nbsp;&nbsp;print("Échoué")
                </div>

                <p className="course-paragraph">
                    Sans <code>return</code>, la moyenne ne pourrait pas être
                    utilisée dans la condition <code>if</code>. C’est pour cela
                    que <code>return</code> est indispensable.
                </p>

                <h2 className="course-section-title">
                    7. Différence claire entre print et return
                </h2>

                <div className="highlight-command">
                    def exemple():
                    <br />
                    &nbsp;&nbsp;print(5)
                    <br />
                    &nbsp;&nbsp;return 10
                </div>

                <div className="highlight-command">
                    x = exemple()
                    <br />
                    print(x)
                </div>

                <p className="course-paragraph">
                    Le <code>print(5)</code> affiche 5 à l’écran. Le{' '}
                    <code>return 10</code> renvoie la valeur 10 à la variable{' '}
                    <code>x</code>.
                </p>

                {/* ---------------------------- */}
                <h2 className="course-section-title">Conclusion</h2>

                <p className="course-paragraph">
                    Les fonctions sont le cœur de la programmation. Elles
                    permettent d’organiser le code, d’éviter les répétitions et
                    de construire des programmes plus complexes.
                </p>

                <p className="course-paragraph">
                    Comprendre les paramètres et surtout <code>return</code>
                    est essentiel pour la suite de la formation.
                </p>
            </div>

            <Link
                to="/formation/apprendre-python-pour-débutant/challenge"
                className="inline-block ml-5 mt-5 p-5 bg-primary font-bold text-text-light rounded-md hover:bg-primary-dark"
            >
                Commencer l'exercices
            </Link>
        </>
    );
}
