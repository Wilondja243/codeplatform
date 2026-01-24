import React from 'react';

export default function Course9() {
    return (
        <div className="course-container space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-800">
                POO : Attributs, Méthodes et Objets
            </h1>

            <p className="text-gray-700">
                Dans ce cours, nous allons apprendre la programmation orientée
                objet (POO) en Python. Nous allons détailler les concepts
                essentiels : <strong>attributs</strong>,
                <strong>méthodes</strong>, <strong>objets</strong>, et
                comprendre les mots clés
                <code>__init__</code> et <code>self</code>. Chaque notion sera
                accompagnée d’exemples pratiques.
            </p>

            {/* 1. Les attributs */}
            <h2 className="text-2xl font-semibold text-gray-800">
                1. Les attributs
            </h2>
            <p className="text-gray-700">
                Un <strong>attribut</strong> est une donnée que possède un
                objet. Il représente une caractéristique ou une propriété de
                l’objet. Chaque objet peut avoir des valeurs différentes pour
                ses attributs.
            </p>

            <h3 className="text-md font-semibold text-gray-800">
                a. Exemple simple d’attribut
            </h3>
            <p className="text-gray-700">
                Créons une classe <code>Voiture</code> avec un attribut{' '}
                <code>couleur</code> :
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
{`class Voiture:
    def __init__(self, couleur):
        self.couleur = couleur  # Attribut de l'objet

ma_voiture = Voiture("rouge")

print(ma_voiture.couleur)  # Affiche: rouge`}
                </pre>
            </div>
            <p className="text-gray-700">
                Ici <code>couleur</code> est un attribut.{' '}
                <code>self.couleur</code> signifie que chaque objet de la classe{' '}
                <code>Voiture</code> aura sa propre couleur.
            </p>

            <h3 className="text-md font-semibold text-gray-800">
                b. Différents types d’attributs
            </h3>
            <p className="text-gray-700">
                Les attributs peuvent être de n’importe quel type : nombre,
                texte, liste, dictionnaire, etc. Exemple :
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
{`class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

p = Personne("Alice", 25)

print(p.nom)  # Alice
print(p.age)  # 25`}
                </pre>
            </div>
            <p className="text-gray-700">
                Chaque objet <code>p</code> possède ses propres attributs{' '}
                <code>nom</code> et <code>age</code>.
            </p>

            {/* 2. Les méthodes */}
            <h2 className="text-2xl font-semibold text-gray-800">
                2. Les méthodes
            </h2>
            <p className="text-gray-700">
                Une <strong>méthode</strong> est une fonction définie à
                l’intérieur d’une classe. Elle permet à un objet de réaliser une
                action. Les méthodes peuvent utiliser ou modifier les attributs
                de l’objet.
            </p>

            <h3 className="text-md font-semibold text-gray-800">
                a. Exemple simple de méthode
            </h3>
            <p className="text-gray-700">
                Continuons avec notre classe <code>Voiture</code> :
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
{`class Voiture:
    def __init__(self, vitesse):
        self.vitesse = vitesse

    def rouler(self):
        print("La voiture roule à la vitesse", self.vitesse)

ma_voiture = Voiture(55)
ma_voiture.rouler()  # Affiche: La voiture de vitesse 55`}
                </pre>
                
            </div>
            <p className="text-gray-700">
                Ici <code>rouler</code> est une méthode. Elle utilise
                l'attribut <code>self.vitesse</code> pour afficher un
                message personnalisé.
            </p>

            <h3 className="text-md font-semibold text-gray-800">
                b. Méthodes avec paramètres
            </h3>
            <p className="text-gray-700">
                Une méthode peut recevoir des paramètres pour effectuer des
                actions plus flexibles.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`class CompteBancaire:
    def __init__(self, solde):
        self.solde = solde

    def deposer(self, montant):
        self.solde += montant
        print("Nouveau solde :", self.solde)

mon_compte = CompteBancaire(100)
mon_compte.deposer(50)  # Nouveau solde : 150`}
                </pre>
                
            </div>
            <p className="text-gray-700">
                Ici <code>montant</code> est un paramètre passé à la méthode{' '}
                <code>deposer</code>, qui modifie l’attribut{' '}
                <code>solde</code> de l’objet.
            </p>

            {/* 3. Utilisation des objets */}
            <h2 className="text-2xl font-semibold text-gray-800">
                3. Utilisation des objets (instances)
            </h2>
            <p className="text-gray-700">
                Une fois la classe définie, on peut créer plusieurs objets
                (appelés instances) avec des valeurs différentes.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`class Chien:
    def __init__(self, nom):
        self.nom = nom

    def aboyer(self):
        print(self.nom, "aboie! Woof Woof!")

chien1 = Chien("Rex")
chien2 = Chien("Max")

chien1.aboyer()  # Rex aboie! Woof Woof!
chien2.aboyer()  # Max aboie! Woof Woof!`}
                </pre>
                
            </div>
            <p className="text-gray-700">
                Chaque objet possède ses propres données et peut appeler les
                méthodes de la classe indépendamment des autres objets.
            </p>

            {/* 4. Explication de __init__ et self */}
            <h2 className="text-2xl font-semibold text-gray-800">
                4. Explication de <code>__init__</code> et <code>self</code>
            </h2>
            <p className="text-gray-700">
                <code>__init__</code> est une méthode spéciale appelée
                automatiquement lorsque l’on crée un objet. Elle permet
                d’initialiser les attributs avec des valeurs spécifiques pour
                chaque objet.
            </p>
            <p className="text-gray-700">
                <code>self</code> représente l’objet courant. Chaque fois que
                vous utilisez <code>self.attribut</code>, vous faites référence
                à l’attribut spécifique de cet objet.
            </p>
            <p className="text-gray-700">Exemple :</p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`class Etudiant:
    def __init__(self, nom, age):
        self.nom = nom  # self.nom est unique pour chaque objet
        self.age = age  # self.age est unique pour chaque objet

etudiant1 = Etudiant("Alice", 20)
etudiant2 = Etudiant("Bob", 22)

print(etudiant1.nom, etudiant1.age)  # Alice 20
print(etudiant2.nom, etudiant2.age)  # Bob 22`}
                </pre>
            </div>

            {/* 5. Exemple pratique complet */}
            <h2 className="text-2xl font-semibold text-gray-800">
                5. Exemple pratique complet
            </h2>
            <p className="text-gray-700">
                Créons une classe <code>Produit</code> avec attributs et
                méthodes pour gérer un petit inventaire.
            </p>
            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
                <pre className="text-sm overflow-x-auto">
                    {`class Produit:
    def __init__(self, nom, prix, quantite):
        self.nom = nom
        self.prix = prix
        self.quantite = quantite

    def afficher_info(self):
        print(f"{self.nom} - Prix: {self.prix}€, Quantité: {self.quantite}")

    def vendre(self, qte):
        if qte <= self.quantite:
            self.quantite -= qte
            print(f"Vendu {qte} unités de {self.nom}")
        else:
            print("Quantité insuffisante")

# Création d'objets
p1 = Produit("Stylo", 1.5, 100)
p2 = Produit("Cahier", 3, 50)

# Utilisation des méthodes
p1.afficher_info()  # Stylo - Prix: 1.5€, Quantité: 100

p1.vendre(20)       # Vendu 20 unités de Stylo

p1.afficher_info()  # Stylo - Prix: 1.5€, Quantité: 80

p2.afficher_info()  # Cahier - Prix: 3€, Quantité: 50

p2.vendre(60)       # Quantité insuffisante`}
                </pre>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">
                6. Exercices pratiques
            </h2>
            <p className="text-gray-700">
                1. Créez une classe <code>Animal</code> avec des attributs{' '}
                <code>nom</code> et <code>age</code>. <br />
                2. Ajoutez une méthode{' '}
                <code>parler()</code> qui affiche un message utilisant le nom de
                l’animal. <br />
                3. Créez au moins deux objets et testez leurs
                méthodes. <br />
                4. Modifiez la classe pour ajouter un attribut{' '}
                <code>couleur</code> et utilisez-le dans la méthode. <br />
                5. Testez vos objets pour vérifier que chaque instance conserve ses
                propres valeurs.
            </p>
        </div>
    );
}
