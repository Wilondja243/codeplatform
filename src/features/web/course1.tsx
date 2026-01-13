import React from 'react';

export default function HtmlCourse1() {
  return (
    <div className="course-container space-y-6 p-6 bg-white rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800">
        Introduction au HTML
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800">1. Qu’est-ce que le HTML ?</h2>
      <p className="text-gray-700">
        HTML signifie <strong>HyperText Markup Language</strong>. C’est le langage qui permet de créer des pages web.  
        Il utilise des <strong>balises</strong> pour dire au navigateur comment afficher le contenu.  
        Pensez aux balises comme des “boîtes” ou des “étiquettes” autour de votre contenu pour organiser et structurer la page.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">2. Qu’est-ce qu'une Balise ?</h2>

<p className="text-gray-700">
  Une <strong>balise</strong> en HTML est un élément qui sert à indiquer au navigateur comment afficher le contenu.  
  On peut imaginer la balise comme un conteneur ou une étiquette autour du texte ou des images.
</p>

<p className="text-gray-700">
  Il existe deux types de balises :
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-1">
  <li>
    <strong>Balise paire</strong> : elle a une ouverture et une fermeture, et contient du contenu entre les deux.  
    Exemple : <code>&lt;p&gt;Bonjour&lt;/p&gt;</code> → le texte "Bonjour" est à l’intérieur de la balise.
  </li>
  <li>
    <strong>Balise impaire</strong> : elle n’a pas de fermeture, elle est seule et se termine par un <code>/</code>.  
    Exemple : <code>&lt;img src="photo.jpg" alt="Photo"/&gt;</code> → la balise affiche une image et ne contient pas de texte à l’intérieur.
  </li>
</ul>

<p className="text-gray-700">
  La syntaxe générale d’une balise paire :
</p>

<pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
{`<nom-de-balise attributs>Contenu</nom-de-balise>`}
</pre>

<p className="text-gray-700">
  Et pour une balise impaire :
</p>

<pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
{`<nom-de-balise attributs />`}
</pre>

<p className="text-gray-700">
  Chaque balise a un rôle spécifique : certaines structurent la page, d’autres formatent le texte, insèrent des images, ou créent des liens.
</p>

<h3 className="text-xl font-semibold text-gray-800">Exemple concret :</h3>

<pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
{`<h1>Bienvenue sur mon site</h1>
<p>Ceci est un paragraphe avec du texte important.</p>
<img src="logo.png" alt="Logo du site" />`}
</pre>

<p className="text-gray-700">
  Ici :
  <ul className="list-disc ml-6">
    <li><code>&lt;h1&gt;</code> est une balise paire qui contient le texte du titre.</li>
    <li><code>&lt;p&gt;</code> est une balise paire qui contient un paragraphe.</li>
    <li><code>&lt;img /&gt;</code> est une balise impaire qui affiche une image et n’a pas de contenu texte.</li>
  </ul>
</p>

      {/* 2. Où écrire du HTML */}
      <h2 className="text-2xl font-semibold text-gray-800">3. Où écrire du HTML ?</h2>
      <p className="text-gray-700">
        Pour écrire du HTML, vous avez besoin d’un éditeur de texte. Le plus populaire est <strong>VS Code</strong>.  
        Créez un nouveau fichier et donnez-lui l’extension <code>.html</code>, par exemple <code>index.html</code>.  
        Ensuite, vous pourrez écrire vos balises à l’intérieur de ce fichier.
      </p>

      <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
        <p>Exemple de fichier HTML minimal :</p>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
{`index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bonjour le monde !</h1>
    <p>Bienvenue sur ma première page.</p>
  </body>
</html>`}
        </pre>
      </div>

      <p className="text-gray-700">
        Une page HTML a toujours cette structure de base :
      </p>
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li>
          <strong>&lt;!DOCTYPE html&gt;</strong> : indique simplement au navigateur que c’est une page HTML moderne.
        </li>
        <li>
          <strong>&lt;html&gt;</strong> : la racine de la page. Tout le contenu doit être à l’intérieur.
        </li>
        <li>
          <strong>&lt;head&gt;</strong> : contient les informations “invisibles” pour l’utilisateur, comme le titre, la description pour le SEO et les liens vers les fichiers CSS ou JavaScript.
        </li>
        <li>
          <strong>&lt;body&gt;</strong> : contient tout ce que l’utilisateur verra sur la page, comme textes, images, liens, titres.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">5. Bonnes pratiques avec le SEO</h2>

<p className="text-gray-700">
  <strong>SEO</strong> signifie <em>Search Engine Optimization</em> ou optimisation pour les moteurs de recherche.  
  C’est l’ensemble des techniques qui permettent à votre page web d’être mieux comprise par Google, Bing, et les autres moteurs, pour qu’elle apparaisse dans les résultats de recherche.  
</p>

<p className="text-gray-700">
  Même si vous commencez à coder votre première page, il est important de penser au SEO dès le départ.  
  Sans bonnes pratiques, votre page pourrait ne jamais être trouvée par les internautes.  
  Le SEO aide aussi à rendre votre site plus structuré et accessible.
</p>

<p className="text-gray-700">
  Voici les éléments essentiels à ajouter dès le début :
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-1">
  <li>
    <strong>&lt;title&gt;</strong> : le titre de votre page. Il apparaît dans l’onglet du navigateur et dans les résultats de recherche. Il doit être clair et descriptif.
  </li>
  <li>
    <strong>&lt;meta name="description"&gt;</strong> : une courte description de votre page. Elle n’apparaît pas sur la page elle-même, mais les moteurs de recherche l’utilisent pour afficher un résumé.
  </li>
  <li>
    <strong>lang="fr"</strong> : définit la langue de votre page. Les moteurs et les lecteurs d’écran savent ainsi comment interpréter le contenu.
  </li>
</ul>

<p className="text-gray-700">
  Même pour une page très simple, ces bonnes pratiques permettent à votre site d’être mieux compris et indexé par les moteurs de recherche.  
  C’est un réflexe à prendre dès vos premières pages, et cela facilitera votre progression vers des sites plus complexes.
</p>


      <h2 className="text-2xl font-semibold text-gray-800">6. Exercices pratiques</h2>
      <p className="text-gray-700">
        1. Créez un fichier <code>index.html</code> et ajoutez un titre et un paragraphe.<br />
        2. Ajoutez un lien vers un site web et une image avec <code>&lt;img&gt;</code>.<br />
        3. Ajoutez une liste avec 3 éléments.<br />
        4. Ouvrez votre fichier dans le navigateur et vérifiez que tout s’affiche correctement.<br />
        5. Changez le titre et la description pour observer les changements dans l’onglet et le SEO.
      </p>
    </div>
  );
}
