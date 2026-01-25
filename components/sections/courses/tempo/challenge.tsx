import React from 'react';
import Navbar from '../shared/nav-bar';
import Footer from '../shared/footer';

export default function PythonCalculator() {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto space-y-8 p-6 bg-white rounded-xl">
                {/* Titre principal */}
                <h1 className="text-3xl font-bold text-gray-800">
                    Exercice: Calculatrice Complète
                </h1>

                <p className="text-gray-700">
                    Après avoir étudié les variables, les conditions, les
                    boucles et les fonctions, il est essentiel de réaliser un
                    exercice complet. Cette calculatrice permet de comprendre
                    comment tous ces concepts fonctionnent ensemble dans un vrai
                    programme Python.
                </p>

                {/* 1. Objectif */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    1. Objectif de l’exercice
                </h2>

                <p className="text-gray-700">
                    L’objectif de cet exercice est de construire une
                    calculatrice capable d’effectuer plusieurs opérations
                    mathématiques. L’utilisateur interagit avec le programme via
                    le terminal, choisit une opération, saisit des nombres et
                    obtient un résultat.
                </p>

                <p className="text-gray-700">
                    Cet exercice montre l’utilisation réelle de Python dans un
                    cas concret, comme on en trouve dans la vie professionnelle.
                </p>

                {/* 2. Code complet */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    2. Code Python complet
                </h2>

                <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500 overflow-x-auto">
                    <pre className="text-sm">
                        {`
    def operation(n1, n2, signe):
        resultat = None
        if signe == "+":
            resultat = n1 + n2

        elif signe == "-":
            resultat = n1 - n2

        elif signe == "*":
            resultat = n1 * n2

        elif signe == "/":
            if n2 == 0:
                print("Erreur : division par zéro")
                return None
            resultat = n1 / n2

        elif signe == "%":
            if n2 == 0:
                print("Erreur : modulo par zéro")
                return None
            resultat = n1 % n2

        elif signe == "**":
            resultat = n1 ** n2
        
        else:
            print("Signe invalide!")
        
        return resultat

        
    while True:

        print("--- CALCULATRICE ---")

        print("Opérations disponibles : +  -  *  /  %  **")
        print("Tapez 'q' pour quitter")

        signe = input("Entrez une opération : ")

        if operation == "q":
            print("Programme terminé.")
            break

        n1 = float(input("Entrez le premier nombre : "))
        n2 = float(input("Entrez le deuxième nombre : "))

        resultat = operation(n1, n2, signe)

        print("Résultat :", resultat)

`}
                    </pre>
                </div>

                <p className="text-gray-700">
                    <strong>Ligne par ligne :</strong>
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>
                        <code>def operation(n1, n2, signe):</code> → crée une
                        fonction appelée <code>operation</code> avec trois
                        paramètres : n1, n2, signe.
                    </li>
                    <li>
                        <code>resultat = None</code> → initialise la variable
                        qui contiendra le résultat.
                    </li>
                    <li>
                        <code>if signe == "+":</code> → vérifie si l’utilisateur
                        a choisi l’addition.
                    </li>
                    <li>
                        Les lignes suivantes avec <code>elif</code> gèrent les
                        autres opérations : <code>-</code>, <code>*</code>,{' '}
                        <code>/</code>, <code>%</code>, <code>**</code>.
                    </li>
                    <li>
                        Pour la division et le modulo, on vérifie{' '}
                        <code>if n2 == 0</code> pour éviter l’erreur "division
                        par zéro".
                    </li>
                    <li>
                        <code>else: print("Signe invalide!")</code> → affiche un
                        message si le signe n’est pas reconnu.
                    </li>
                    <li>
                        <code>return resultat</code> → renvoie le résultat
                        calculé à l’endroit où la fonction a été appelée.
                    </li>
                </ul>

                {/* 2. Boucle principale */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    2. Boucle principale pour interaction
                </h2>

                <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                    <pre className="text-sm overflow-x-auto">
                        {`while True:
    print("\\n--- CALCULATRICE ---")
    print("Opérations disponibles : +  -  *  /  %  **")
    print("Tapez 'q' pour quitter")

    signe = input("Entrez une opération : ")
    if signe == "q":
        print("Programme terminé.")
        break

    n1 = float(input("Entrez le premier nombre : "))
    n2 = float(input("Entrez le deuxième nombre : "))

    resultat = operation(n1, n2, signe)
    if resultat is not None:
        print("Résultat :", resultat)`}
                    </pre>
                </div>

                <p className="text-gray-700">
                    <strong>Explications détaillées :</strong>
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>
                        <code>while True:</code> → crée une boucle infinie pour
                        que la calculatrice continue de fonctionner.
                    </li>
                    <li>
                        Les <code>print()</code> affichent le menu et les
                        instructions à l’utilisateur.
                    </li>
                    <li>
                        <code>signe = input("Entrez une opération : ")</code> →
                        récupère le signe choisi par l’utilisateur.
                    </li>
                    <li>
                        <code>if signe == "q": break</code> → quitte la boucle
                        si l’utilisateur tape 'q'.
                    </li>
                    <li>
                        <code>n1 = float(input(...))</code> → demande le premier
                        nombre et le convertit en nombre réel.
                    </li>
                    <li>
                        <code>resultat = operation(n1, n2, signe)</code> →
                        appelle la fonction pour calculer le résultat.
                    </li>
                    <li>
                        <code>if resultat is not None:</code> → affiche le
                        résultat uniquement si le calcul a réussi (pas
                        d’erreur).
                    </li>
                </ul>

                {/* 3. Conclusion */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    3. Conclusion pédagogique
                </h2>

                <p className="text-gray-700">
                    Ce programme montre comment utiliser :
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>
                        Les <strong>fonctions</strong> pour organiser le code.
                    </li>
                    <li>
                        Les <strong>conditions</strong>{' '}
                        <code>if/elif/else</code> pour décider quelle opération
                        exécuter.
                    </li>
                    <li>
                        La <strong>boucle while</strong> pour répéter les
                        actions jusqu’à ce que l’utilisateur veuille arrêter.
                    </li>
                    <li>
                        La <strong>gestion d’erreurs simples</strong> (division
                        par zéro, signe invalide).
                    </li>
                    <li>
                        L’interaction avec l’utilisateur grâce à{' '}
                        <code>input()</code>.
                    </li>
                </ul>

                <p className="text-gray-700">
                    Chaque ligne du code est utilisée de manière précise pour
                    créer une calculatrice fonctionnelle et didactique. <br />
                    Si vous comprenez ce programme, vous avez compris les bases
                    essentielles de Python.
                </p>
            </div>
            <Footer />
        </div>
    );
}
