import React from 'react';

export default function Course8() {
    return (
        <div className="course-container space-y-8 p-6">
            {/* Titre */}
            <h1 className="text-3xl font-bold text-gray-800">
                Introduction à la Programmation Orientée Objet (POO)
            </h1>

            <p className="text-gray-700">
                Jusqu’à présent, nous avons écrit des programmes avec des
                variables, des conditions, des boucles et des fonctions. La
                programmation orientée objet (POO) est une nouvelle manière
                d’organiser le code pour le rendre plus clair, plus logique et
                plus facile à maintenir quand les projets deviennent grands.
            </p>

            {/* 1. Pourquoi la POO */}
            <h2 className="text-md font-semibold text-gray-800">
                1. Pourquoi la Programmation Orientée Objet ?
            </h2>

            <p className="text-gray-700">
                Quand un programme devient complexe, on se retrouve avec
                beaucoup de variables et de fonctions dispersées un peu partout.
                Il devient difficile de comprendre ce qui appartient à quoi.
            </p>

            <p className="text-gray-700">
                La POO permet de regrouper :
                <strong> les données (variables)</strong> et
                <strong> les actions (fonctions)</strong>
                qui vont ensemble, dans une seule structure logique.
            </p>

            <p className="text-gray-700">
                En POO, on essaie de représenter le monde réel dans le code
                (utilisateur, voiture, compte bancaire, produit, etc.).
            </p>

            {/* 2. Exemple sans POO */}
            <h2 className="text-md font-semibold text-gray-800">
                2. Exemple sans POO
            </h2>

            <p className="text-gray-700">
                Imaginons un utilisateur avec son nom et son âge. Sans POO, on
                pourrait écrire :
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`nom = "Alice"
age = 25

def afficher_infos(nom, age):
    print("Nom :", nom)
    print("Âge :", age)

afficher_infos(nom, age)`}
            </pre>

            <p className="text-gray-700">
                Le problème ici : les données (<code>nom</code>,{' '}
                <code>age</code>) sont séparées de la fonction qui les utilise.
            </p>

            {/* 3. Qu'est-ce qu'un objet */}
            <h2 className="text-xl font-semibold text-gray-800">
                3. Qu’est-ce qu’un objet ?
            </h2>

            <p className="text-gray-700">
                <strong>Définition :</strong>
                <br />
                Un <strong>objet</strong> est une entité créée à partir d’une
                classe. Il représente quelque chose de concret que le programme
                peut manipuler.
            </p>

            <p className="text-gray-700">
                Un objet est composé de deux éléments principaux :
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                    des <strong>données</strong> → appelées{' '}
                    <strong>attributs</strong>
                </li>
                <li>
                    des <strong>actions</strong> → appelées{' '}
                    <strong>méthodes</strong>
                </li>
            </ul>
            <p className="text-gray-700">
                En résumé :
                <br />
                <strong>
                    Un objet = ce qu’il possède + ce qu’il peut faire
                </strong>
            </p>

            <p className="text-gray-700">
                <strong>Exemple dans la vraie vie :</strong>
                <br />
                Une <strong>voiture</strong> est un objet.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                    <strong>Attributs</strong> : couleur, vitesse, marque
                </li>
                <li>
                    <strong>Méthodes</strong> : démarrer(), accélérer(),
                    freiner()
                </li>
            </ul>

            <p className="text-gray-700">
                ➜ En programmation, on applique exactement le même principe.
            </p>

            {/* 4. Qu'est-ce qu'une classe */}
            <h2 className="text-md font-semibold text-gray-800">
                4. Qu’est-ce qu’une classe ?
            </h2>

            <p className="text-gray-700">
                Une <strong>classe</strong> est un modèle (ou un plan) qui sert
                à créer des objets. Elle définit à l’avance :
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                    les <strong>données</strong> que les objets vont contenir
                    (attributs)
                </li>
                <li>
                    les <strong>actions</strong> que les objets pourront
                    effectuer (méthodes)
                </li>
            </ul>

            <p className="text-gray-700">
                ⚠️ Important :
                <br />
                Une classe <strong>n’est pas un objet</strong>. Elle ne fait
                rien toute seule, elle sert uniquement à créer des objets.
            </p>

            <p className="text-gray-700">
                <strong>Exemple dans la vraie vie :</strong>
                <br />
                Une classe est comme un <strong>moule à gâteau</strong>.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                    Le moule décrit la forme du gâteau →{' '}
                    <strong>la classe</strong>
                </li>
                <li>
                    Le gâteau fabriqué à partir du moule →{' '}
                    <strong>l’objet</strong>
                </li>
            </ul>

            <p className="text-gray-700">
                ➜ Avec un seul moule (classe), on peut créer plusieurs gâteaux
                (objets), tous de la même forme mais avec des valeurs
                différentes.
            </p>

            <p className="text-gray-700">
                <strong>En programmation :</strong>
                <br />
                Une classe définit la structure. Chaque objet créé à partir de
                cette classe aura cette structure, mais pourra avoir ses propres
                valeurs.
            </p>

            {/* 5. Première classe simple */}
            <h3 className="text-md font-semibold text-gray-800">
                a. Créer sa première classe
            </h3>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`class Utilisateur:
    pass`}
            </pre>

            <p className="text-gray-700">Explication ligne par ligne :</p>

            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                    <code>class</code> : mot-clé pour créer une classe
                </li>
                <li>
                    <code>Utilisateur</code> : nom de la classe (toujours avec
                    une majuscule)
                </li>
                <li>
                    <code>pass</code> : indique que la classe est vide pour
                    l’instant
                </li>
            </ul>

            {/* 6. Créer un objet */}
            <h3 className="text-md font-semibold text-gray-800">
                b. Créer un objet à partir d’une classe
            </h3>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`u1 = Utilisateur()
u2 = Utilisateur()`}
            </pre>

            <p className="text-gray-700">
                Ici :
                <br />
                <code>Utilisateur</code> est la classe
                <br />
                <code>u1</code> et <code>u2</code> sont des objets différents
                créés à partir de cette classe.
            </p>

            {/* 7. Attributs */}
            <h3 className="text-md font-semibold text-gray-800">
                c. Les attributs (données de l’objet)
            </h3>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`class Utilisateur:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age`}
            </pre>

            <p className="text-gray-700">
                ⚠️ Cette partie est très importante :
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                    <code>__init__</code> est une fonction spéciale appelée
                    automatiquement
                </li>
                <li>
                    <code>self</code> représente l’objet lui-même
                </li>
                <li>
                    <code>self.nom</code> et <code>self.age</code> sont des
                    attributs
                </li>
            </ul>

            {/* 8. Utilisation */}
            <h3 className="text-md font-semibold text-gray-800">
                d. Utiliser les attributs
            </h3>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`u1 = Utilisateur("Alice", 25)
u2 = Utilisateur("Jean", 30)

print(u1.nom)
print(u2.age)`}
            </pre>

            <p className="text-gray-700">
                Chaque objet a ses propres données, même s’ils viennent de la
                même classe.
            </p>

            {/* 9. Méthodes */}
            <h3 className="text-md font-semibold text-gray-800">
                e. Les méthodes (fonctions dans une classe)
            </h3>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`class Utilisateur:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def afficher_infos(self):
        print("Nom :", self.nom)
        print("Âge :", self.age)`}
            </pre>

            <p className="text-gray-700">
                Une <strong>méthode</strong> est une fonction liée à un objet.
                Elle utilise <code>self</code> pour accéder aux données de
                l’objet.
            </p>

            {/* 10. Conclusion */}
            <h2 className="text-2xl font-semibold text-gray-800">
                5. Conclusion pédagogique
            </h2>

            <p className="text-gray-700">
                La POO n’est pas magique. C’est simplement une façon plus
                organisée d’écrire ce que vous faisiez déjà avec des variables
                et des fonctions.
            </p>

            <p className="text-gray-700 font-semibold">
                Si vous comprenez : classe, objet, attribut, méthode, alors vous
                avez compris les bases de la POO.
            </p>
        </div>
    );
}
