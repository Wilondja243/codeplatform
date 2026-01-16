import React from 'react';

export default function Course6() {
    return (
        <div className="course-container space-y-8 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-800">
                Les structures de données
            </h1>

            <p className="text-gray-700">
                Dans ce cours, nous allons étudier en profondeur les principales
                structures de données en Python :
                <strong> list, dict, tuple et set</strong>. Ces structures
                permettent de stocker, organiser et manipuler des données
                efficacement.
            </p>

            {/* ===================== 1. LIST ===================== */}
            <h2 className="text-2xl font-semibold text-gray-800">
                1. Les listes
            </h2>

            <p className="text-gray-700">
                Une <strong>liste</strong> est une collection ordonnée et
                modifiable. Elle peut contenir plusieurs types de données
                (nombres, chaînes, booléens, etc.). Les listes sont très
                utilisées car elles sont flexibles et faciles à manipuler.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`nombres = [1, 2, 3, 4]
noms = ["Alice", "Bob", "Claire"]
mixte = [10, "Python", True]`}
            </pre>

            {/* Méthode append */}
            <h3 className="text-xl font-semibold text-gray-800">a. append()</h3>
            <p className="text-gray-700">
                La méthode <code>append()</code> permet d’ajouter un élément à
                la fin d’une liste. Elle modifie directement la liste existante.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`liste = []
liste.append(10)
liste.append(20)
liste.append("Python")
print(liste)

Résultat : [10, 20, "Python"]`}
            </pre>

            {/* Méthode remove */}
            <h3 className="text-xl font-semibold text-gray-800">b. remove()</h3>
            <p className="text-gray-700">
                <code>remove()</code> supprime la première occurrence d’un
                élément précis dans la liste. Si l’élément n’existe pas, une
                erreur est levée.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`nombres = [1, 2, 3, 2]
nombres.remove(2)
print(nombres)

Résultat : [1, 3, 2]

# Autre exemple
fruits = ["pomme", "banane", "orange"]
fruits.remove("banane")
print(fruits)

Résultat : ["pomme", "orange"]`}
            </pre>

            {/* Méthode pop */}
            <h3 className="text-xl font-semibold text-gray-800">c. pop()</h3>
            <p className="text-gray-700">
                <code>pop()</code> supprime un élément par son index et le
                retourne. Sans index, il supprime le dernier élément.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`liste = [10, 20, 30]
liste.pop()
print(liste) Résultat : [10, 20]

liste.pop(0)
print(liste) Résultat : [20]

valeur = liste.pop()
print(valeur) Résultat : 20`}
            </pre>

            <h2 className="text-2xl font-semibold text-gray-800">
                2. Les dictionnaires
            </h2>

            <p className="text-gray-700">
                Un <strong>dictionnaire</strong> stocke des données sous forme
                de paires
                <strong> clé : valeur</strong>. Les clés sont uniques et
                permettent d’accéder rapidement aux valeurs.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`personne = {
  "nom": "Jean",
  "age": 25,
  "ville": "Paris"
}`}
            </pre>

            {/* Méthode get */}
            <h3 className="text-xl font-semibold text-gray-800">a. get()</h3>
            <p className="text-gray-700">
                <code>get()</code> permet d’accéder à une valeur sans provoquer
                d’erreur si la clé n’existe pas.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`print(personne.get("nom")) Résultat : Jean
print(personne.get("age")) Résultat : 25
print(personne.get("email", "Non défini")) Résultat : Non défini`}
            </pre>

            <h3 className="text-xl font-semibold text-gray-800">
                b. keys(), values(), items()
            </h3>
            <p className="text-gray-700">
                Ces méthodes permettent de parcourir un dictionnaire. Elles sont
                essentielles pour les boucles.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`print(personne.keys())
print(personne.values())
print(personne.items())`}
            </pre>

            <h2 className="text-2xl font-semibold text-gray-800">
                3. Les tuples (tuple)
            </h2>

            <p className="text-gray-700">
                Un <strong>tuple</strong> est une collection ordonnée mais{' '}
                <strong>non modifiable</strong>. On l’utilise quand les données
                ne doivent pas changer.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`coordonnees = (10, 20)
jours = ("lundi", "mardi", "mercredi")`}
            </pre>

            {/* Méthode count */}
            <h3 className="text-xl font-semibold text-gray-800">a) count()</h3>
            <p className="text-gray-700">
                <code>count()</code> compte combien de fois un élément apparaît
                dans le tuple.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`nums = (1, 2, 2, 3, 2)
print(nums.count(2))
print(nums.count(1))
print(nums.count(5))`}
            </pre>

            {/* Méthode index */}
            <h3 className="text-xl font-semibold text-gray-800">b) index()</h3>
            <p className="text-gray-700">
                <code>index()</code> retourne la position du premier élément
                trouvé.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`jours = ("lundi", "mardi", "mercredi")
print(jours.index("mardi"))
print(jours.index("lundi"))`}
            </pre>

            {/* ===================== 4. SET ===================== */}
            <h2 className="text-2xl font-semibold text-gray-800">
                4. Les ensembles (set)
            </h2>

            <p className="text-gray-700">
                Un <strong>set</strong> est une collection non ordonnée et sans
                doublons. Il est très utile pour éliminer les répétitions.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`nombres = {1, 2, 3, 3, 4}
print(nombres)`}
            </pre>

            {/* Méthode add */}
            <h3 className="text-xl font-semibold text-gray-800">a) add()</h3>
            <p className="text-gray-700">
                <code>add()</code> ajoute un élément au set. Les doublons sont
                ignorés automatiquement.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`s = set()
s.add(1)
s.add(2)
s.add(2)
print(s)`}
            </pre>

            {/* Méthode remove / discard */}
            <h3 className="text-xl font-semibold text-gray-800">
                b) remove() et discard()
            </h3>
            <p className="text-gray-700">
                <code>remove()</code> supprime un élément mais provoque une
                erreur s’il n’existe pas.
                <code>discard()</code> fait la même chose sans erreur.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
                {`s = {1, 2, 3}
s.remove(2)
print(s)

s.discard(5)
print(s)`}
            </pre>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-gray-800">
                5. Conclusion pédagogique
            </h2>

            <p className="text-gray-700">
                Les structures de données sont le cœur de Python. Bien les
                comprendre permet d’écrire des programmes plus clairs, plus
                efficaces et plus professionnels.
            </p>

            <p className="text-gray-700 font-semibold">
                Si vous maîtrisez list, dict, tuple et set, vous avez franchi un
                cap très important en Python.
            </p>
        </div>
    );
}
