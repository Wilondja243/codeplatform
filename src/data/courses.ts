import { title } from 'process';
import Course1 from '../features/tempo/phase1';
import Course2 from '../features/tempo/phase2';
import Course3 from '../features/tempo/phase3';
import Course4 from '../features/tempo/phase4';
import Course5 from '../features/tempo/phase5';
import Course6 from '../features/tempo/phase6';
import Course7 from '../features/tempo/phase7';
import Course8 from '../features/tempo/phase8';

export type CourseSection = {
    id: string;
    title: string;
    lessons: string[];
};

export type Course = {
    id: number;
    title: string;
    component?: React.ComponentType;
    description?: string;
    sections: CourseSection[];
};

export const courses = [
    {
        id: 1,
        title: "Configuration de l'environnement Python",
        component: Course1,
        sections: [
            {
                id: 'c1-s1',
                title: 'Installation et préparation',
                lessons: [
                    'Installation de Python',
                    'Installation de VS Code',
                    'Extensions Python',
                    'Première bibliothèque',
                    'Premier test',
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'Les bases de Python : variables, calculs et conditions',
        component: Course2,
        sections: [
            {
                id: 'c2-s1',
                title: 'Bases de la programmation',
                lessons: [
                    'Afficher un message avec print()',
                    'Qu’est-ce qu’une variable ?',
                    'Différents types de variables',
                    'Modifier la valeur d’une variable',
                    'Les opérations arithmétiques',
                    'Les opérations d’affectation',
                    'Récupérer des informations avec input()',
                ],
            },
            {
                id: 'c2-s2',
                title: 'Conditions',
                lessons: [
                    'Les conditions : prendre une décision',
                    'Utiliser if et else',
                    'Exemple complet',
                    'Conclusion',
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Conditions avancées : comparaisons et logique',
        component: Course3,
        sections: [
            {
                id: 'c3-s1',
                title: 'Conditions avancées',
                lessons: [
                    'Rappel : les conditions simples',
                    'Opérations de comparaison',
                    'Opérations logiques : combiner plusieurs conditions',
                    'Utiliser elif pour plusieurs choix',
                    'Exemples pratiques combinant tout',
                    'Mini-exercices pour pratiquer',
                    'Conclusion',
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'Les boucles en Python : répéter intelligemment',
        component: Course4,
        sections: [
            {
                id: '1',
                title: 'Comprendre le principe d’une boucle',
                lessons: [
                    'Qu’est-ce qu’une boucle',
                    'Pourquoi utiliser une boucle',
                    'Répéter une action sans dupliquer le code',
                ],
            },
            {
                id: '2',
                title: 'La boucle for',
                lessons: [
                    'Comprendre la fonction Range()',
                    'Compter avec une boucle for',
                    'Parcourir une chaine de caractères',
                ],
            },
            {
                id: '3',
                title: 'La boucle while',
                lessons: [
                    'Fonctionnement de la boucle while',
                    'La condition de répétition',
                    'Éviter les boucles infinies',
                ],
            },
            {
                id: '4',
                title: 'Attention aux boucles infinies',
                lessons: [
                    // 'Utiliser if dans une boucle',
                    // 'Prendre des décisions pendant une répétition',
                ],
            },
            {
                id: '5',
                title: 'Les instructions break et continue',
                lessons: [
                    'Arrêter une boucle avec break',
                    'Sauter une itération avec continue',
                ],
            },
            {
                id: '6',
                title: 'Exercices pratiques guidés',
                lessons: [
                    'Afficher des nombres avec une boucle',
                    'Conditions dans une boucle',
                    'Correction pas à pas',
                ],
            },
            {
                id: '7',
                title: 'Conclusion',
                lessons: [
                    'Quand utiliser for',
                    'Quand utiliser while',
                    'Erreurs courantes à éviter',
                    'Conseils pour écrire un code propre',
                ],
            },
        ],
    },
    {
        id: 5,
        title: 'Les fonctions en Python : organiser et réutiliser son code',
        component: Course5,
        sections: [
            'Qu’est-ce qu’une fonction en programmation',
            'Les fonctions prédéfinies de Python',
            'Créer sa première fonction avec def',
            'Les paramètres : transmettre des informations à une fonction',
            'Fonctions avec plusieurs paramètres',
            'Différence entre print() et return',
            'Stocker le résultat d’une fonction dans une variable',
            'Exemples pratiques complets',
            'Résumé et points clés à retenir',
        ],
    },
    {
        id: 6,
        title: 'Structures de données',
        component: Course6,
        sections: [
            {
                id: 'd4-s1',
                title: 'Introduction aux structures de données',
                lessons: [
                    'Qu’est-ce qu’une structure de données ?',
                    'Pourquoi utiliser plusieurs types de structures ?',
                ],
            },
            {
                id: 'd4-s2',
                title: 'Les listes (list)',
                lessons: [
                    'Définition et caractéristiques',
                    'Créer une liste : vide ou avec valeurs',
                    'Accéder et modifier les éléments par index',
                    'Méthodes des listes : append, remove, pop, extend, insert',
                ],
            },
            {
                id: 'd4-s3',
                title: 'Les dictionnaires (dict)',
                lessons: [
                    'Définition et structure clé / valeur',
                    'Créer et accéder aux données d’un dictionnaire',
                    'Méthodes : get, keys, values, items, update, pop',
                ],
            },
            {
                id: 'd4-s4',
                title: 'Les tuples (tuple)',
                lessons: [
                    'Définition et caractéristiques (ordonné et immuable)',
                    'Créer et lire un tuple',
                    'Méthodes : count, index',
                ],
            },
            {
                id: 'd4-s5',
                title: 'Les ensembles (set)',
                lessons: [
                    'Définition et caractéristiques (non ordonné, valeurs uniques)',
                    'Créer un set et conversion depuis une liste',
                    'Méthodes : add, remove, discard, union, intersection, difference',
                ],
            },
            {
                id: 'd4-s8',
                title: 'Conclusion pédagogique',
                lessons: [],
            },
        ],
    },
    {
        id: 7,
        title: 'Gestion des Exceptions en Python',
        component: Course7,
        sections: [
            {
                id: 'c7-s1',
                title: 'Introduction aux exceptions',
                lessons: [
                    'Qu’est-ce qu’une exception et à quoi ça sert',
                    'Différence entre erreur syntaxique et exception',
                    'Pourquoi gérer les exceptions est important',
                ],
            },
            {
                id: 'c7-s2',
                title: 'Bloc try / except',
                lessons: [
                    'Syntaxe de base du try / except',
                    'Attraper des exceptions spécifiques vs générales',
                ],
            },
            {
                id: 'c7-s3',
                title: 'Bloc else et finally',
                lessons: [
                    'Utilité du bloc else après try / except',
                    "Bloc finally : toujours exécuté, même en cas derreur",
                ],
            },
            {
                id: 'c7-s4',
                title: 'Lever ses propres exceptions',
                lessons: [
                    'Utiliser raise pour créer une exception personnalisée',
                    'Bonnes pratiques pour lever et documenter les exceptions',
                ],
            },
            {
                id: 'c7-s5',
                title: 'Résumé et bonnes pratiques',
                lessons: [
                    'Quand utiliser try / except',
                    'Quand lever une exception',
                    'Résumé des erreurs courantes et comment les éviter',
                    'Mini-exercice pratique combinant toutes les notions',
                ],
            },
        ],
    },
    {
        id: 7,
        title: 'Introduction à la Programmation Orientée Objet (POO)',
        component: Course8,
        sections: [
            {
                id: 'poo-s1',
                title: 'Pourquoi la Programmation Orientée Objet ?',
                lessons: [],
            },
            {
                id: 'poo-s2',
                title: 'Exemple sans POO',
                lessons: [],
            },
            {
                id: 'poo-s3',
                title: "Qu'est-ce qu'un objet ?",
                lessons: [],
            },
            {
                id: 'poo-s4',
                title: "Qu'est-ce qu'une classe ?",
                lessons: [
                    'Créer sa première classe',
                    "Créer un objet à partir d'une classe ",
                    "Les attributs (données de l'objet)",
                    'Utiliser les attributs',
                    'Les méthodes (fonctions dans une classe)',
                ],
            },
            {
                id: 'poo-s10',
                title: 'Conclusion',
                lessons: [],
            },
        ],
    },
];
