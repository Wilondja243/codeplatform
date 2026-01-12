import CourseHTMLIntro from "../features/web/course1";

export const htmlCourses = [
  {
    id: 1,
    title: "Introduction au HTML",
    component: CourseHTMLIntro,
    description:
      "Ce cours présente le HTML depuis zéro, la structure des pages et les bonnes pratiques SEO.",
    sections: [
      {
        id: "html-s1",
        title: "Introduction au HTML",
        lessons: [],
      },
      {
        id: "html-s2",
        title: "Où écrire son code HTML",
        lessons: [],
      },
      {
        id: "html-s3",
        title: "Structure de base d'une page HTML",
        lessons: [
          "Le DOCTYPE et la racine <html>",
          "La section <head> pour SEO et informations",
          "La section <body> pour le contenu visible",
        ],
      },
      {
        id: "html-s5",
        title: "SEO et bonnes pratiques",
        lessons: [],
      },
      {
        id: "html-s6",
        title: "Exercices pratiques",
        lessons: [
          "Créer votre première page HTML",
          "Modifier le titre et le contenu",
          "Ajouter des listes, liens et images",
          "Vérifier le résultat dans le navigateur",
        ],
      },
    ],
  },
];
