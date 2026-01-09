export default function Course3() {
    return (
        <div className="course-container">
            <h1 className="course-title">
                Conditions avancées en Python : Comparaison, Logique et
                Décisions multiples
            </h1>

            <p className="course-paragraph">
                Dans le cours précédent, nous avons appris les bases des
                conditions avec <code>if</code> et <code>else</code>.
                Maintenant, nous allons aller plus loin et apprendre à prendre
                des décisions plus complexes dans nos programmes.
                
                Vous verrez comment combiner plusieurs critères et gérer différentes
                situations avec Python. Ces notions sont essentielles pour
                écrire des programmes intelligents et flexibles.
            </p>

            <h2 className="course-section-title">
                1. Rappel : les conditions simples
            </h2>

            <p className="course-paragraph">
                Une condition permet à Python de décider si une action doit être
                réalisée ou non. Par exemple, nous avons utilisé{' '}
                <code>if age &gt;= 10</code> pour vérifier si une personne peut
                suivre la formation. Si la condition est vraie, Python exécute
                le code à l’intérieur de l’indentation. Sinon, il passe au bloc{' '}
                <code>else</code> s’il est présent.
            </p>

            <div className="highlight-command">
                age = 12
                <br />
                if age &gt;= 10:
                <br />
                &nbsp;&nbsp;print("Tu peux suivre la formation")
                <br />
                else:
                <br />
                &nbsp;&nbsp;print("Tu dois encore attendre")
            </div>

            <h2 className="course-section-title">
                2. Opérations de comparaison
            </h2>

            <p className="course-paragraph">
                Les opérations de comparaison servent à comparer deux valeurs.
                Elles renvoient toujours <code>True</code> (vrai) ou{' '}
                <code>False</code> (faux). Voici les plus importantes :{' '}
                <code>==</code>, <code>!=</code>, <code>&lt;</code>,{' '}
                <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>.

                Chaque opération permet de tester une condition différente, par
                exemple l’égalité, l’inégalité ou la grandeur d’un nombre. Elles
                sont indispensables pour que votre programme prenne des
                décisions correctes.
            </p>

            <div className="highlight-command">
                age = 12
                <br />
                score = 18
                <br />
                <br />
                print(age == 10) # False, car age n'est pas égal à 10
                <br />
                print(age != 10) # True, car age est différent de 10
                <br />
                print(score &gt; 15) # True, car score est plus grand que 15
                <br />
                print(score &lt;= 20) # True, car score est inférieur ou égal à
                20
            </div>

            <p className="course-paragraph">
                Ces comparaisons permettent à Python de savoir si une condition
                est remplie. Vous pouvez ensuite utiliser ces résultats dans vos{' '}
                <code>if</code> pour décider quoi faire.
                
                Par exemple, vérifier si un utilisateur est assez âgé ou si son score est suffisant.
                Cela rend vos programmes interactifs et intelligents.
            </p>

            <h2 className="course-section-title">
                3. Opérations logiques : combiner plusieurs conditions
            </h2>

            <p className="course-paragraph">
                Parfois, vous devez vérifier plusieurs conditions en même temps.
                Pour cela, Python propose les opérateurs logiques{' '}
                <code>and</code>, <code>or</code> et <code>not</code>. -{' '}
                <code>and</code> → toutes les conditions doivent être vraies -{' '}
                <code>or</code> → au moins une condition doit être vraie -{' '}
                <code>not</code> → inverse la condition (vrai devient faux et
                vice versa)
            </p>

            <p className="course-paragraph">
                Avec ces opérateurs, vous pouvez créer des règles complexes pour
                votre programme. Par exemple, vérifier si un utilisateur peut
                suivre un cours en fonction de son âge et du paiement effectué.

                Cela rend votre programme capable de prendre des décisions très
                précises. Sans logique, un programme ne pourrait pas gérer
                plusieurs critères simultanément.
            </p>

            <div className="highlight-command">
                age = 12
                <br />
                paiement_effectue = True
                <br />
                <br />
                if age &gt;= 10 and paiement_effectue:
                <br />
                &nbsp;&nbsp;print("Tu peux suivre le cours")
                <br />
                else:
                <br />
                &nbsp;&nbsp;print("Tu ne peux pas suivre le cours")
            </div>

            <h2 className="course-section-title">
                4. Utiliser elif pour plusieurs choix
            </h2>

            <p className="course-paragraph">
                Quand vous avez plus de deux options, il ne suffit pas
                d’utiliser <code>if</code> et <code>else</code>. Python propose{' '}
                <code>elif</code> (else if) pour vérifier d’autres conditions si
                la première n’est pas vraie.
                
                Cela permet de créer plusieurs
                branches dans votre programme et de gérer tous les cas
                possibles. C’est très pratique pour classer des scores, donner
                des messages différents ou prendre des décisions complexes.

                par exemple:
            </p>

            <div className="highlight-command">
                score = 75
                <br />
                <br />
                if score &gt;= 90:
                <br />
                &nbsp;&nbsp;print("Excellent")
                <br />
                elif score &gt;= 70:
                <br />
                &nbsp;&nbsp;print("Bien")
                <br />
                elif score &gt;= 50:
                <br />
                &nbsp;&nbsp;print("Passable")
                <br />
                else:
                <br />
                &nbsp;&nbsp;print("À revoir")
            </div>

            <p className="course-paragraph">
                Ici, Python vérifie les conditions dans l’ordre : - d’abord{' '}
                <code>if</code>, - ensuite chaque <code>elif</code> dans
                l’ordre, - et enfin <code>else</code> si aucune condition n’est
                remplie. Cela permet de gérer de nombreux cas différents sans
                écrire des dizaines de blocs <code>if</code> séparés. C’est une
                méthode simple et efficace pour prendre des décisions multiples
                dans vos programmes.
            </p>

            <h2 className="course-section-title">
                5. Exemples pratiques combinant tout
            </h2>

            <p className="course-paragraph">
                Voyons maintenant un exemple concret combinant comparaisons,
                logique et elif/else. Nous allons demander à un utilisateur son
                âge et savoir s’il peut participer à un événement. Les règles
                seront : - Il doit avoir au moins 18 ans ou - Il peut participer
                s’il a moins de 18 ans mais avec autorisation parentale.
            </p>

            <div className="highlight-command">
                age = int(input("Quel est ton âge ? "))
                <br />
                autorisation_parentale = input("As-tu l'autorisation parentale ?
                (oui/non) ") == "oui"
                <br />
                <br />
                if age &gt;= 18 or autorisation_parentale:
                <br />
                &nbsp;&nbsp;print("Tu peux participer")
                <br />
                else:
                <br />
                &nbsp;&nbsp;print("Tu ne peux pas participer")
            </div>

            <p className="course-paragraph">
                Ici, Python combine deux conditions avec <code>or</code>. Si au
                moins une des conditions est vraie, l’utilisateur peut
                participer. Sinon, il reçoit un message lui indiquant qu’il ne
                peut pas participer.
                
                Ce type de décision est très courant dans
                la vie réelle et montre comment Python peut simuler des règles
                complexes.
            </p>

            <h2 className="course-section-title">
                6. Mini-exercices pour pratiquer
            </h2>

            <p className="course-paragraph">
                1. Demander un nombre à l’utilisateur et vérifier s’il est pair
                et supérieur à 10.
                <br />
                2. Demander l’âge et déterminer le tarif d’entrée à un
                événement.
                <br />
                3. Écrire un mini quiz qui donne un message selon la réponse de
                l’utilisateur avec plusieurs <code>elif</code>.<br />
                Ces exercices permettent de mettre en pratique les conditions
                avancées et de se familiariser avec <code>and</code>,{' '}
                <code>or</code> et <code>elif</code>.
            </p>

            <h2 className="course-section-title">Conclusion</h2>

            <p className="course-paragraph">
                Dans cette leçon, nous avons appris à combiner plusieurs
                conditions, utiliser les opérateurs logiques <code>and</code>,{' '}
                <code>or</code>, <code>not</code>, et gérer plusieurs choix avec{' '}
                <code>elif</code> et <code>else</code>. Ces notions permettent
                de créer des programmes beaucoup plus puissants et flexibles.

                Grâce à ces outils, vous pouvez écrire des programmes capables
                de prendre des décisions complexes en fonction de plusieurs
                critères.
                
                La prochaine étape sera d’apprendre les boucles pour
                répéter des actions automatiquement.
            </p>
        </div>
    );
}
