import Course1 from '../app/tempo/phase1';
import Course2 from '../app/tempo/phase2';
import Course3 from '../app/tempo/phase3';
import Course4 from '../app/tempo/phase4';

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
];
