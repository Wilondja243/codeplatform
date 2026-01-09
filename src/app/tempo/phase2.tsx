export default function Course2() {
    return (
        <div className="course-container">
            <h1 className="course-title">
                Les bases de Python : variables, calculs et conditions
            </h1>

            <p className="course-paragraph">
                Dans le cours précédent, nous avons préparé notre environnement
                de travail. Maintenant que tout est prêt, nous allons commencer
                à programmer réellement.
            </p>

            <p className="course-paragraph">
                Dans cette leçon, nous allons apprendre les toutes premières
                bases de la programmation. Ces notions sont indispensables et
                seront utilisées dans presque tous les programmes que nous
                écrirons plus tard.
            </p>

            <p className="course-paragraph">
                Nous allons avancer lentement, avec des exemples simples, afin
                que tout soit clair, même si vous n'avez jamais programmé
                auparavant.
            </p>

            <h2 className="course-section-title">
                1. Afficher un message avec print()
            </h2>

            <p className="course-paragraph">
                La fonction <code>print()</code> permet d'afficher un message à
                l'écran. C'est souvent la première chose que l'on apprend en
                programmation.
            </p>

            <div className="highlight-command">print("Bonjour")</div>

            <p className="course-paragraph">
                Ici, Python affiche le mot <strong>Bonjour</strong> dans le
                terminal. Tout ce qui est écrit entre guillemets est du texte.
            </p>

            <div>
                <h2 className="course-section-title">
                    1. Qu’est-ce qu’une variable ?
                </h2>

                <p className="course-paragraph">
                    Une variable est comme une boîte dans laquelle on peut
                    ranger quelque chose. Cette boîte a un nom, et à l’intérieur
                    on met une valeur.
                </p>

                <p className="course-paragraph">
                    Par exemple, si je veux garder mon âge quelque part, je peux
                    créer une boîte appelée <code>age</code> et y mettre un
                    nombre.
                </p>

                <div className="highlight-command">age = 10</div>

                <p className="course-paragraph">
                    Ici, <code>age</code> est le nom de la variable et{' '}
                    <code>10</code> est la valeur stockée dans cette variable.
                </p>

                <p className="course-paragraph">
                    Pour afficher la valeur contenue dans une variable, on
                    utilise toujours la fonction <code>print()</code>. À
                    l'intérieur des parenthèses, on met la valeur que l'on veut
                    afficher. Dans notre cas, il s'agit de la variable{' '}
                    <code>age</code>, qui contient la valeur <code>10</code>
                </p>

                <div className="highlight-command">print(age)</div>

                <h3 className="course-section-title">
                    a. Différents types de variables
                </h3>

                <p className="course-paragraph">
                    En Python, il existe plusieurs types de variables. Pour
                    commencer, nous allons en voir trois très simples.
                </p>

                <p className="course-paragraph">
                    Le premier type est le nombre entier, utilisé pour les âges,
                    les quantités ou les scores.
                </p>
                <div className="highlight-command">score = 15</div>

                <p className="course-paragraph">
                    Le deuxième type est le texte. En Python, le texte est
                    toujours écrit entre guillemets.
                </p>

                <div className="highlight-command">nom = "Alice"</div>

                <p className="course-paragraph">
                    Le troisième type est vrai ou faux. On l’utilise pour
                    représenter une situation.
                </p>

                <div className="highlight-command">est_inscrit = True</div>

                <h3 className="course-section-title">
                    b. Modifier la valeur d’une variable
                </h3>

                <p className="course-paragraph">
                    Une variable peut changer de valeur. Par exemple, si une
                    personne grandit, son âge augmente.
                </p>

                <div className="highlight-command">
                    age = 10
                    <br />
                    age = 11
                </div>

                <p className="course-paragraph">
                    Python garde toujours la dernière valeur donnée à la
                    variable.
                </p>

                <h3 className="course-section-title">
                    c. Les opérations arithmétiques
                </h3>

                <p className="course-paragraph">
                    Python peut effectuer des calculs comme une calculatrice.
                </p>

                <p className="course-paragraph">
                    Voici les opérations les plus importantes :
                </p>

                <div className="highlight-command">
                    addition = 5 + 3<br />
                    soustraction = 10 - 4<br />
                    multiplication = 6 * 2<br />
                    division = 8 / 2
                </div>

                <p className="course-paragraph">
                    Chaque résultat est stocké dans une variable. On peut
                    ensuite les afficher.
                </p>

                <div className="highlight-command">
                    print(addition)
                    <br />
                    print(soustraction)
                    <br />
                    print(multiplication)
                    <br />
                    print(division)
                </div>

                <h3 className="course-section-title">
                    d. Les opérations d’affectation
                </h3>

                <p className="course-paragraph">
                    Les opérations d’affectation permettent de modifier la
                    valeur d’une variable à partir de sa valeur actuelle.
                </p>

                <div className="highlight-command">
                    nombre = 10
                    <br />
                    nombre = nombre + 1
                </div>

                <p className="course-paragraph">
                    Ici, on ajoute 1 à la valeur de <code>nombre</code>. La
                    nouvelle valeur devient 11.
                </p>

                <p className="course-paragraph">
                    Python propose aussi une écriture plus courte.
                </p>

                <div className="highlight-command">nombre += 1</div>

                <h3 className="course-section-title">
                    e. Récupérer des informations avec input()
                </h3>

                <p className="course-paragraph">
                    La fonction <code>input()</code> permet de demander une
                    information à l’utilisateur.
                </p>

                <div className="highlight-command">
                    nom = input("Quel est ton nom ? ")
                </div>

                <p className="course-paragraph">
                    Le programme attend que l’utilisateur écrive quelque chose
                    au clavier. Cette information est ensuite stockée dans la
                    variable <code>nom</code>.
                </p>

                <div className="highlight-command">print("Bonjour", nom)</div>
            </div>

            <div>
                <h2 className="course-section-title">
                    2. Les conditions : prendre une décision
                </h2>

                <p className="course-paragraph">
                    Une condition permet au programme de choisir quoi faire
                    selon une situation.
                </p>

                <div className="highlight-command">
                    age = 12
                    <br />
                    if age &gt;= 10:
                    <br />
                    &nbsp;&nbsp;print("Tu peux suivre la formation")
                </div>

                <p className="course-paragraph">
                    Python vérifie si la condition est vraie. Si c’est le cas,
                    le message est affiché.
                </p>

                <h2 className="course-section-title">7. Utiliser if et else</h2>

                <p className="course-paragraph">
                    Parfois, la condition que l’on vérifie avec <code>if</code>{' '}
                    peut ne pas être vraie. Dans ce cas, Python ne fera rien si
                    on n’ajoute rien d’autre. C’est là qu’intervient{' '}
                    <code>else</code>.
                </p>

                <p className="course-paragraph">
                    Le mot <code>else</code> signifie « sinon ». Il permet de
                    dire à Python :
                    <em>
                        « si la condition n’est pas vraie, fais ceci à la place
                        »
                    </em>
                    .
                </p>

                <p className="course-paragraph">
                    Cela rend notre programme capable de prendre des décisions
                    et de réagir correctement dans tous les cas.
                </p>

                <div className="highlight-command">
                    age = 8<br />
                    if age &gt;= 10:
                    <br />
                    &nbsp;&nbsp;print("Tu peux suivre la formation")
                    <br />
                    else:
                    <br />
                    &nbsp;&nbsp;print("Tu dois encore attendre")
                </div>

                <h2 className="course-section-title">8. Exemple complet</h2>

                <div className="highlight-command">
                    nom = input("Entre ton nom : ")
                    <br />
                    age = int(input("Entre ton âge : "))
                    <br />
                    <br />
                    if age &gt;= 10:
                    <br />
                    &nbsp;&nbsp;print(nom, "peut commencer la formation Python")
                    <br />
                    else:
                    <br />
                    &nbsp;&nbsp;print(nom, "n’a pas encore l’âge requis")
                </div>
            </div>

            <div>
                <h2 className="course-section-title">Conclusion</h2>

                <p className="course-paragraph">
                    Dans cette leçon, nous avons appris à afficher des messages,
                    utiliser des variables, effectuer des calculs, demander des
                    informations à l’utilisateur et prendre des décisions avec
                    des conditions.
                </p>

                <p className="course-paragraph">
                    Ces bases sont essentielles. Sans elles, il est impossible
                    d’aller plus loin en programmation.
                </p>
            </div>
        </div>
    );
}
