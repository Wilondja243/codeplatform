import Course1 from '../app/tempo/phase1';
import Course2 from '../app/tempo/phase2';

export const courses = [
    {
        id: 1,
        title: "Configuration de l'environnement Python",
        component: Course1,
        sections: [
            'Installation de Python',
            'Installation de VS Code',
            'Extensions Python',
            'Première bibliothèque',
            'Premier test',
        ],
    },
    {
        id: 2,
        title: 'Les bases de Python : variables, calculs et conditions',
        component: Course2,
        sections: [
            'Afficher un message avec print()',
            'Qu’est-ce qu’une variable ?',
            'Différents types de variables',
            'Modifier la valeur d’une variable',
            'Les opérations arithmétiques',
            'Les opérations d’affectation',
            'Récupérer des informations avec input()',
            'Les conditions : prendre une décision',
            'Utiliser if et else',
            'Exemple complet',
            'Conclusion',
        ],
    },
];
