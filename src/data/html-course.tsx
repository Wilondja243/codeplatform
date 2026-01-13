import HtmlCourse1 from '../features/web/course1';
import HtmlCourse2 from '../features/web/course2';

export const htmlCourses = [
    {
        id: 1,
        title: 'Introduction au HTML',
        component: HtmlCourse1,
        description:
            'Ce cours présente le HTML depuis zéro, la structure des pages et les bonnes pratiques SEO.',
        sections: [
            {
                id: 'html-s1',
                title: 'Introduction au HTML',
                lessons: [],
            },
            {
                id: 'html-s2',
                title: 'Où écrire son code HTML',
                lessons: [],
            },
            {
                id: 'html-s3',
                title: "Structure de base d'une page HTML",
                lessons: [
                    'Le DOCTYPE et la racine <html>',
                    'La section <head> pour SEO et informations',
                    'La section <body> pour le contenu visible',
                ],
            },
            {
                id: 'html-s5',
                title: 'SEO et bonnes pratiques',
                lessons: [],
            },
            {
                id: 'html-s6',
                title: 'Exercices pratiques',
                lessons: [
                    'Créer votre première page HTML',
                    'Modifier le titre et le contenu',
                    'Ajouter des listes, liens et images',
                    'Vérifier le résultat dans le navigateur',
                ],
            },
        ],
    },
    {
        id: 'html-2',
        title: 'HTML : Attributs, texte et liens',
        component: HtmlCourse2,
        sections: [
            {
                id: 'c2-s1',
                title: "Qu'est-ce qu'un attribut",
                lessons: ['Attribut avec valeur', 'Attribut sans valeur'],
            },
            {
                id: 'c2-s2',
                title: 'Balises de texte importantes',
                lessons: [
                    'Titres : h1 à h6',
                    'Texte mis en évidence : strong, b, i, mark',
                ],
            },
            {
                id: 'c2-s3',
                title: 'Liens hypertexte',
                lessons: [
                    'Attribut href',
                    'Attribut target',
                    'Liens internes et ancres',
                ],
            },
            {
                id: 'c2-s4',
                title: 'Exercices pratiques',
                lessons: [
                    'Créer des titres et sous-titres',
                    'Ajouter du texte formaté',
                    'Insérer un lien externe avec target="_blank"',
                    'Créer un lien interne avec ancre',
                    'Vérifier l’affichage',
                ],
            },
        ],
    },
];
