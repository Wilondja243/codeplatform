export default function Course4() {
    return (
        <div className="course-container">
            <h1 className="course-title">
                Les boucles en Python : répéter des actions automatiquement
            </h1>

            <p className="course-paragraph">
                Jusqu’à présent, nos programmes exécutaient les instructions une
                seule fois. Mais dans la vraie vie, on a souvent besoin de
                répéter une action plusieurs fois sans réécrire le même code.
            </p>

            <p className="course-paragraph">
                Par exemple, afficher un message 10 fois, compter de 1 à 100,
                parcourir une liste de noms ou répéter une question jusqu’à
                obtenir une bonne réponse. C’est exactement à cela que servent
                les boucles.
            </p>

            <p className="course-paragraph">
                Une boucle est donc un outil qui permet de dire à Python : «
                refais cette action encore et encore, tant qu’une condition est
                respectée ».
            </p>

            <h2 className="course-section-title">
                1. Comprendre le principe d’une boucle
            </h2>

            <p className="course-paragraph">
                Imagine que tu demandes à un enfant de dire bonjour 5 fois. Tu
                ne vas pas lui répéter la consigne 5 fois, tu vas plutôt dire :
                « dis bonjour 5 fois ». Une boucle fonctionne exactement de la
                même manière.
            </p>

            <p className="course-paragraph">
                Au lieu d’écrire plusieurs fois la même instruction, on l’écrit
                une seule fois et on demande à Python de la répéter
                automatiquement.
            </p>

            <h2 className="course-section-title">2. La boucle for</h2>

            <p className="course-paragraph">
                La boucle <code>for</code> est utilisée quand on sait à l’avance
                combien de fois on veut répéter une action. Elle est très
                utilisée et très simple à comprendre.
            </p>

            <p className="course-paragraph">
                La fonction <code>range()</code> est utilisée pour générer une
                suite de nombres que Python peut parcourir un par un. On
                l'utilise souvent dans les boucles pour répéter une action un
                certain nombre de fois.
            </p>

            <p className="course-paragraph">
                Il existe plusieurs manières d'utiliser <code>range()</code> :
            </p>

            <ul className="course-list">
                <li>
                    <strong>range(n)</strong> : crée une suite de nombres de 0
                    jusqu'à <code>n-1</code>. Par exemple :{' '}
                    <code>range(5)</code> génère <code>0, 1, 2, 3, 4</code>.
                </li>
                <li>
                    <strong>range(début, fin)</strong> : crée une suite de
                    nombres de <code>début</code> jusqu'à <code>fin-1</code>.
                    Exemple : <code>range(2, 6)</code> génère{' '}
                    <code>2, 3, 4, 5</code>.
                </li>
                <li>
                    <strong>range(début, fin, pas)</strong> : crée une suite de
                    nombres de <code>début</code> à <code>fin-1</code>, en
                    sautant de <code>pas</code>. Exemple :{' '}
                    <code>range(1, 10, 2)</code> génère{' '}
                    <code>1, 3, 5, 7, 9</code>.
                </li>
            </ul>

            <p className="course-paragraph">
                Quelques points importants à retenir :
            </p>

            <ul className="course-list">
                <li>Le nombre de fin n'est jamais inclus dans la suite.</li>
                <li>
                    Le <code>pas</code> peut être négatif pour générer des
                    nombres décroissants. Exemple : <code>range(5, 0, -1)</code>{' '}
                    génère <code>5, 4, 3, 2, 1</code>.
                </li>
                <li>
                    Vous pouvez transformer le résultat de <code>range()</code>{' '}
                    en liste pour voir tous les nombres :{' '}
                    <code>list(range(5))</code> donne{' '}
                    <code>[0, 1, 2, 3, 4]</code>.
                </li>
            </ul>

            <p className="course-paragraph">
                Ainsi, <code>range()</code> est très pratique pour répéter une
                action un certain nombre de fois dans une boucle{' '}
                <code>for</code>, sans avoir à écrire chaque nombre
                manuellement.
            </p>

            <div className="highlight-command">
                for i in range(5):
                <br />
                &nbsp;&nbsp;print(i)
            </div>

            <p className="course-paragraph">
                Cela affichera : <code>0, 1, 2, 3, 4</code>. Python parcourt
                chaque nombre généré par <code>range()</code> et l'utilise dans
                la boucle.
            </p>

            <h3 className="course-section-title">
                a. Compter avec une boucle for
            </h3>

            <div className="highlight-command">
                for i in range(1, 6):
                <br />
                &nbsp;&nbsp;print(i)
            </div>

            <p className="course-paragraph">
                Dans cet exemple, Python affiche les nombres de 1 à 5 comme l'on
                a montré ci-dessus. La boucle avance pas à pas, comme si elle
                comptait avec ses doigts.
            </p>

            <h3 className="course-section-title">
                b. Parcourir une chaine de caractères
            </h3>

            <p className="course-paragraph">
                Une boucle <code>for</code> peut aussi parcourir une liste,
                c’est-à-dire lire chaque élément un par un, du début jusqu’à la
                fin.
            </p>

            <div className="highlight-command">
                nom = "Agali Mouna"
                <br />
                <br />
                for lettre in nom:
                <br />
                &nbsp;&nbsp;print(lettre)
            </div>

            <p className="course-paragraph">
                Python prend chaque lettre dans le nom <code>Agali Mouna</code>{' '}
                et l’affiche. Il s’arrête automatiquement quand les lettres sont
                terminée.
            </p>

            <h2 className="course-section-title">3. La boucle while</h2>

            <p className="course-paragraph">
                La boucle <code>while</code> permet de répéter une action tant
                qu'une condition reste vraie. Contrairement à <code>for</code>,
                on ne fixe pas à l'avance combien de fois la boucle va
                s’exécuter. On laisse Python vérifier la condition à chaque tour
                et décider s’il continue ou s’arrête.
            </p>

            <p className="course-paragraph">
                Imagine que tu donnes à Python une consigne : « continue à
                compter tant que tu n’as pas atteint 5 ». Python lit cette
                consigne à chaque tour : si c’est vrai, il exécute le bloc de
                code à l’intérieur de la boucle ; si c’est faux, il s’arrête.
            </p>

            <p className="course-paragraph">
                Trois points très importants à retenir pour utiliser{' '}
                <code>while</code> :
            </p>

            <ul className="course-list">
                <li>
                    <strong>La condition :</strong> c’est ce qui décide si la
                    boucle continue ou s’arrête. Elle doit toujours pouvoir
                    devenir fausse à un moment pour éviter une boucle infinie.
                </li>
                <li>
                    <strong>Le compteur ou variable de contrôle :</strong> il
                    change à chaque tour pour que la condition finisse par
                    devenir fausse.
                </li>
                <li>
                    <strong>L’indentation :</strong> tout le code à l’intérieur
                    de la boucle doit être indenté. Sinon, Python ne saura pas
                    quelles instructions répéter.
                </li>
            </ul>

            <div className="highlight-command">
                compteur = 1<br />
                <br />
                while compteur &lt;= 5:
                <br />
                &nbsp;&nbsp;print(compteur)
                <br />
                &nbsp;&nbsp;compteur += 1
            </div>

            <p className="course-paragraph">
                Ici, on commence avec <code>compteur = 1</code>. À chaque tour
                de boucle :<code>print(compteur)</code> affiche le nombre, et{' '}
                <code>compteur += 1</code> augmente le compteur. Quand{' '}
                <code>compteur</code> devient 6, la condition{' '}
                <code>compteur &lt;= 5</code> n’est plus vraie et la boucle
                s’arrête.
            </p>

            <p className="course-paragraph">
                Attention : si on oublie d’augmenter le compteur ou de modifier
                la condition, la boucle ne s’arrêtera jamais et le programme
                sera bloqué.
            </p>

            <p className="course-paragraph">
                Vous pouvez utiliser <code>while</code> pour toutes sortes de
                répétitions : demander à l’utilisateur un mot de passe tant
                qu’il n’est pas correct, compter jusqu’à ce qu’un événement se
                produise, ou répéter une action jusqu’à ce que la liste soit
                vide.
            </p>

            <p className="course-paragraph">
                La clé pour bien utiliser <code>while</code> est de toujours
                savoir : « quelle est la condition qui arrêtera la boucle ? » et
                « comment cette condition va changer à chaque tour ».
            </p>

            <h2 className="course-section-title">
                4. Attention aux boucles infinies
            </h2>

            <p className="course-paragraph">
                Une boucle infinie est une boucle qui ne s’arrête jamais. Cela
                arrive quand la condition reste toujours vraie.
            </p>

            <div className="highlight-command">
                while True:
                <br />
                &nbsp;&nbsp;print("Je ne m'arrête jamais")
            </div>

            <p className="course-paragraph">
                Ce type de boucle est dangereux pour les débutants. Il faut
                toujours s’assurer qu’une condition finira par devenir fausse.
            </p>

            <h2 className="course-section-title">
                4. Les instructions break et continue
            </h2>

            <p className="course-paragraph">
                Une boucle infinie est une boucle qui ne s’arrête jamais. Cela
                arrive quand la condition reste toujours vraie. Par exemple{' '}
                <code>while True:</code> répète le code à l’intérieur sans
                jamais s’arrêter, ce qui peut bloquer le programme.
            </p>

            <div className="highlight-command">
                while True:
                <br />
                &nbsp;&nbsp;print("Je ne m'arrête jamais")
            </div>

            <p className="course-paragraph">
                Pour éviter ce problème, Python propose <code>break</code>,{' '}
                <code>continue</code> et <code>pass</code>. Ces instructions
                permettent de contrôler l’exécution de la boucle sans attendre
                que la condition devienne fausse.
            </p>

            <ul className="course-list">
                <li>
                    <strong>break :</strong> sort immédiatement de la boucle,
                    peu importe si la condition est encore vraie. Exemple :
                    arrêter la boucle dès qu’un nombre est trouvé.
                </li>
                <li>
                    <strong>continue :</strong> saute le reste du code dans la
                    boucle pour passer directement à l’itération suivante.
                    Exemple : ignorer certains nombres tout en continuant la
                    boucle.
                </li>
                <li>
                    <strong>pass :</strong> ne fait rien mais permet de créer un
                    bloc de code vide temporaire. Utile si on veut écrire le
                    squelette d’une boucle avant de la remplir.
                </li>
            </ul>

            <div className="highlight-command">
                compteur = 0<br />
                while True:
                <br />
                &nbsp;&nbsp;compteur += 1<br />
                &nbsp;&nbsp;if compteur == 5:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;break # La boucle s'arrête quand
                compteur vaut 5<br />
                &nbsp;&nbsp;if compteur % 2 == 0:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;continue # Les nombres pairs sont
                ignorés pour le print
                <br />
                &nbsp;&nbsp;print(compteur) # Affiche uniquement les nombres
                impairs avant 5
            </div>

            <p className="course-paragraph">
                Avec ces instructions, vous pouvez contrôler la boucle de
                manière précise. Même si la condition est “toujours vraie”, vous
                pouvez décider quand arrêter ou sauter certaines étapes.
            </p>

            <p className="course-paragraph">
                Astuce : utilisez <code>break</code> pour éviter les boucles
                infinies dangereuses, et <code>continue</code> pour gérer les
                cas particuliers sans interrompre toute la boucle.
            </p>

            <h2 className="course-section-title">
                5. Exercices pratiques : boucles avec contrôle
            </h2>

            <p className="course-paragraph">
                Ces exercices vont vous permettre de manipuler les boucles,
                d’utiliser <code>break</code> et <code>continue</code>, et de
                mieux comprendre le flux d’exécution. Essayez de les résoudre
                avant de regarder les solutions.
            </p>

            <ol className="course-list">
                <li>
                    <strong>Compteur inversé :</strong>
                    Écrivez une boucle <code>while</code> qui compte de 10 à 1
                    et affiche chaque nombre. Dès que le compteur atteint 3,
                    arrêtez la boucle avec <code>break</code>.
                </li>
                <li>
                    <strong>Nombres pairs :</strong>
                    Écrivez une boucle <code>while</code> de 1 à 20 qui affiche
                    uniquement les nombres impairs. Utilisez{' '}
                    <code>continue</code> pour ignorer les nombres pairs.
                </li>
                <li>
                    <strong>Deviner un nombre :</strong>
                    Créez un petit jeu avec <code>while True</code> où
                    l’utilisateur doit deviner un nombre entre 1 et 10. Utilisez{' '}
                    <code>break</code> pour sortir de la boucle quand il trouve
                    le bon nombre.
                </li>
            </ol>

            <p className="course-paragraph">
                Astuce : Essayez chaque exercice plusieurs fois et modifiez
                les conditions pour observer comment <code>break</code>,{' '}
                <code>continue</code> et <code>pass</code> affectent la boucle.
                Cela vous aidera à vraiment comprendre le flux de contrôle.
            </p>

            <h2 className="course-section-title">Conclusion</h2>

            <p className="course-paragraph">
                Les boucles sont indispensables en programmation. Elles
                permettent d’écrire moins de code, d’éviter les répétitions et
                d’automatiser des tâches.
            </p>

            <p className="course-paragraph">
                Si tu comprends bien les boucles, tu es capable de créer des
                programmes beaucoup plus puissants. Dans le prochain cours, nous
                verrons comment combiner boucles et conditions.
            </p>
        </div>
    );
}
