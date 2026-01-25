import React from 'react';

export default function Course7() {
    return (
        <div className="course-container space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-800">
                Gestion des Exceptions
            </h1>

            <p className="text-gray-700">
                Dans ce cours, nous allons apprendre ce que sont les exceptions
                en Python, pourquoi elles sont importantes et comment les gérer
                correctement pour éviter que votre programme plante. Vous
                découvrirez également des techniques avancées pour créer des
                exceptions personnalisées et améliorer la robustesse de votre
                code.
            </p>

            {/* 1. Qu'est-ce qu'une exception */}
            <h2 className="text-2xl font-semibold text-gray-800">
                1. Qu'est-ce qu'une exception ?
            </h2>
            <p className="text-gray-700">
                Une <strong>exception</strong> est une erreur qui se produit
                pendant l'exécution du programme. Contrairement aux erreurs de
                syntaxe, une exception apparaît quand Python rencontre une
                situation qu’il ne sait pas gérer, par exemple : division par
                zéro, accès à une clé inexistante dans un dictionnaire ou
                conversion invalide de type.
            </p>
            <p className="text-gray-700">
                Si une exception n’est pas gérée, le programme s’arrête et
                affiche un message d’erreur. La gestion des exceptions permet de
                capturer ces erreurs et d’agir en conséquence sans interrompre
                le programme.
            </p>

            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <p className="text-gray-700 font-semibold">Exemple :</p>
                <pre className="text-sm overflow-x-auto">
                    {`
x = int(input("Entrez un nombre : "))
print("Vous avez saisi :", x)`}
                </pre>
            </div>

            <p className="text-gray-700 mt-2">
                Ici, <code>int()</code> convertit la saisie en nombre entier. Si
                l’utilisateur entre autre chose qu’un nombre entier, Python
                génère une
                <strong> ValueError</strong> : c’est une exception indiquant que
                la valeur fournie n’est pas du type attendu. Cela interrompt le
                programme si l’erreur n’est pas gérée.
            </p>

            {/* 2. La structure try/except */}
            <h2 className="text-2xl font-semibold text-gray-800">
                2. La structure try / except
            </h2>
            <p className="text-gray-700">
                Le mot-clé <code>try</code> permet de placer le code susceptible
                de générer une erreur. Le bloc <code>except</code> capture
                l’exception et définit comment y répondre.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <p className="text-gray-700 font-semibold">Exemple :</p>
                <pre className="text-sm overflow-x-auto">
                    {`try:
    x = int(input("Entrez un nombre : "))
    print("Vous avez saisi :", x)
except ValueError:
    print("Erreur : vous devez entrer un nombre valide.")`}
                </pre>
            </div>

            <p className="text-gray-700">
                Ici, si l’utilisateur entre autre chose qu’un nombre, Python
                déclenche une <code>ValueError</code>. L’exception est capturée
                et un message d’erreur clair est affiché, évitant que le
                programme plante.
            </p>

            {/* 3. Bloc else et finally */}
            <h2 className="text-2xl font-semibold text-gray-800">
                3. else et finally
            </h2>
            <p className="text-gray-700">
                - <code>else</code> : s’exécute uniquement si aucune exception
                n’est levée. - <code>finally</code> : s’exécute toujours, qu’il
                y ait eu ou non une exception. Cela permet de réaliser des
                actions obligatoires comme fermer un fichier ou une connexion
                réseau.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`try:
    f = open("data.txt")
    contenu = f.read()
except FileNotFoundError:
    print("Fichier non trouvé")
else:
    print("Lecture réussie :", contenu)
finally:
    f.close()
    print("Fichier fermé")`}
                </pre>
            </div>
            <p className="text-gray-700">
                Ici, <code>finally</code> garantit que le fichier est fermé même
                si une erreur est survenue.
            </p>

            {/* 4. Plusieurs exceptions */}
            <h2 className="text-2xl font-semibold text-gray-800">
                4. Gérer plusieurs exceptions
            </h2>
            <p className="text-gray-700">
                Il est possible de capturer différents types d’exceptions pour
                gérer chaque cas spécifiquement. On peut utiliser plusieurs{' '}
                <code>except</code> ou un tuple d’exceptions.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`try:
    n = int(input("Entrez un nombre : "))
    resultat = 10 / n
except ValueError:
    print("Erreur : saisie invalide")
except ZeroDivisionError:
    print("Erreur : division par zéro")`}
                </pre>
            </div>
            <p className="text-gray-700">
                Ici, Python distingue si l’erreur vient d’une saisie incorrecte
                ou d’une division par zéro et affiche le message approprié.
            </p>

            {/* 5. Exceptions personnalisées */}
            <h2 className="text-2xl font-semibold text-gray-800">
                5. Créer ses propres exceptions
            </h2>
            <p className="text-gray-700">
                Vous pouvez créer vos propres exceptions en héritant de la
                classe <code>Exception</code>. Cela permet de signaler des
                erreurs spécifiques à votre application.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`class ErreurAge(Exception):
    pass

age = int(input("Entrez votre âge : "))
if age < 0:
    raise ErreurAge("L'âge ne peut pas être négatif")`}
                </pre>
            </div>

            <p className="text-gray-700">
                Ici, si l’âge est négatif, l’exception personnalisée{' '}
                <code>ErreurAge</code> est levée, ce qui rend le code plus clair
                et précis.
            </p>

            {/* 6. Exercices pratiques */}
            <h2 className="text-2xl font-semibold text-gray-800">
                6. Exercices pratiques
            </h2>
            <p className="text-gray-700">
                1. Demandez à l’utilisateur de saisir un nombre et capturez une
                erreur de saisie avec <code>ValueError</code>.<br />
                3. Créez une exception personnalisée pour vérifier qu’un mot de
                passe contient au moins 8 caractères.
                <br />
                4. Combinez <code>try/except/else/finally</code> dans un
                programme simple.
            </p>
        </div>
    );
}
