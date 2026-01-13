import React from 'react';

export default function HtmlCourse2() {
  return (
    <div className="course-container space-y-6 p-6 bg-white rounded-xl  ">
      <h1 className="text-3xl font-bold text-gray-800">
        Attributs et balises de texte
      </h1>

      <p className="text-gray-700">
        Dans ce cours, nous allons approfondir votre compréhension du HTML. Vous apprendrez ce qu’est un attribut et comment il influence le comportement des balises. Nous détaillerons également les balises de texte et les liens hypertexte, afin que vous puissiez structurer vos pages correctement et rendre votre contenu accessible et clair.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">1. Qu'est-ce qu'un attribut ?</h2>
      <p className="text-gray-700">
        Un attribut est une information que l’on ajoute dans la balise ouvrante pour préciser une caractéristique ou un comportement de cette balise. Les attributs permettent de rendre vos balises plus puissantes et flexibles. Ils peuvent contenir une valeur, ou simplement être présents pour activer un effet. Comprendre les attributs est essentiel pour bien structurer vos pages et les rendre interactives. Même les balises les plus simples comme <code>&lt;p&gt;</code> ou <code>&lt;img&gt;</code> utilisent des attributs pour fonctionner correctement.
      </p>

      <h3 className="text-md font-semibold text-gray-800">a. Attribut avec valeur</h3>
      <p className="text-gray-700">
        Certains attributs nécessitent toujours une valeur. Cela signifie que vous devez préciser quelque chose pour que la balise fonctionne correctement. Par exemple, une image a besoin de savoir où trouver le fichier à afficher et quelle description utiliser. La valeur de l’attribut est placée entre guillemets et suit le nom de l’attribut.
      </p>
      <p className="text-gray-700">
        Exemple concret : <code>src</code> pour la source de l’image et <code>alt</code> pour la description textuelle qui est importante pour le SEO et l’accessibilité. Sans ces valeurs, votre image pourrait ne pas s’afficher correctement ou ne pas être compréhensible pour les lecteurs d’écran.
      </p>
      <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
        <pre className="text-sm overflow-x-auto">
{`<img src="photo.jpg" alt="Photo de profil">`}
        </pre>
      </div>

      <h3 className="text-md font-semibold text-gray-800">b. Attribut sans valeur</h3>
      <p className="text-gray-700">
        Certains attributs n’ont pas besoin de valeur et leur simple présence suffit pour activer une fonctionnalité. Par exemple, le bouton désactivé utilise l’attribut <code>disabled</code>. Vous n’avez pas besoin de mettre <code>disabled="true"</code>, sa présence dans la balise suffit. Cela simplifie votre code et permet d’activer rapidement certaines options.
      </p>
      <p className="text-gray-700">
        Ces attributs sont très utiles pour les formulaires et les éléments interactifs. Leur compréhension permet de mieux contrôler l’interface utilisateur. Il est important de noter que tous les navigateurs reconnaissent ces attributs et les appliquent automatiquement.
      </p>
      <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
        <pre className="text-sm overflow-x-auto">
{`<button disabled>Envoyer</button>`}
        </pre>
      </div>

      {/* 2. Les balises de texte */}
      <h2 className="text-2xl font-semibold text-gray-800">2. Balises de texte importantes</h2>
      <p className="text-gray-700">
        Les balises de texte permettent de structurer, hiérarchiser et mettre en valeur le contenu. Elles sont essentielles pour rendre la lecture agréable et compréhensible. Elles permettent également aux moteurs de recherche de comprendre l’importance des titres et des informations. Nous allons détailler les titres, le texte mis en valeur et comment utiliser correctement ces balises.
      </p>

      <h3 className="text-md font-semibold text-gray-800">a. Titres : h1 à h6</h3>
      <p className="text-gray-700">
        Les balises <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> sont utilisées pour créer des titres et sous-titres dans votre page web. Le <code>h1</code> est le titre principal et doit être unique pour chaque page, car il indique le sujet principal. Les <code>h2</code> à <code>h6</code> servent à organiser les sections et sous-sections de manière hiérarchique.
      </p>
      <p className="text-gray-700">
        Bien utiliser les titres améliore la lisibilité et le référencement naturel (SEO). Les lecteurs et les moteurs de recherche comprennent mieux votre contenu lorsque la hiérarchie est claire. Chaque niveau de titre doit être utilisé de manière cohérente, sans sauter d’un niveau à un autre.
      </p>
      <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
        <pre className="text-sm overflow-x-auto">
{`<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Sous-section</h3>`}
        </pre>
      </div>

      <h3 className="text-md font-semibold text-gray-800">b. Texte mis en évidence</h3>
      <p className="text-gray-700">
        Pour mettre l’accent sur certaines parties du texte, HTML propose plusieurs balises. <code>&lt;strong&gt;</code> indique un texte important, généralement affiché en gras et interprété comme prioritaire par les moteurs de recherche. <code>&lt;b&gt;</code> affiche du gras visuel mais sans signification sémantique. <code>&lt;i&gt;</code> met le texte en italique pour des termes techniques, titres d’œuvres ou expressions étrangères. Enfin, <code>&lt;mark&gt;</code> surligne le texte pour attirer l’attention.
      </p>
      <p className="text-gray-700">
        Utiliser ces balises correctement permet de rendre votre texte plus lisible et structuré, et améliore l’accessibilité pour tous. Chaque balise a son utilité et doit être choisie selon le contexte et l’importance sémantique.
      </p>
      <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
        <pre className="text-sm overflow-x-auto">
{`<p><strong>Important :</strong> Lis bien ce texte.</p>
<p><b>Gras visuel :</b> Juste pour le style.</p>
<p><i>Italique :</i> Exemple technique.</p>
<p><mark>Surligné</mark> : à retenir.</p>`}
        </pre>
      </div>

      {/* 3. Liens hypertexte */}
<h2 className="text-2xl font-semibold text-gray-800">3. Les liens hypertexte</h2>
<p className="text-gray-700">
  Les liens hypertexte permettent aux utilisateurs de naviguer entre différentes pages web, ou vers des sections spécifiques d’une même page. Ils sont essentiels pour la navigation sur un site et pour le SEO, car ils indiquent aux moteurs de recherche comment les pages sont reliées entre elles. Comprendre le fonctionnement des liens est fondamental pour créer un site structuré et intuitif.
</p>
<p className="text-gray-700">
  Un lien est représenté par la balise <code>&lt;a&gt;</code> en HTML. Cette balise contient au minimum l’attribut <code>href</code>, qui indique où le lien doit mener. Selon la valeur de <code>href</code>, le lien peut pointer vers une page du site, une ressource externe, ou même une section précise de la même page.
</p>

<h3 className="text-md font-semibold text-gray-800">a. Attribut href </h3>
<p className="text-gray-700">
  L’attribut <code>href</code> indique l’adresse de destination du lien. Si l’adresse est relative, le navigateur cherchera le fichier à l’intérieur de votre projet local. Si l’adresse est absolue, le lien mènera vers un site externe. Comprendre la différence est crucial pour éviter les liens cassés.
</p>
<p className="text-gray-700">
  Par exemple, si vous avez deux fichiers HTML dans le même dossier : <code>index.html</code> et <code>about.html</code>, vous pouvez créer un lien relatif pour passer de la page d’accueil à la page « À propos ».
</p>
<div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
  <pre className="text-sm overflow-x-auto">
{`<!-- lien relatif vers un autre fichier de votre projet -->
<a href="about.html">À propos</a>

<!-- lien absolu vers un site externe -->
<a href="https://www.example.com">Visitez Example.com</a>`}
  </pre>
</div>
<p className="text-gray-700">
  Les liens relatifs sont pratiques pour la navigation interne et permettent de déplacer votre site entier sans casser les liens. Les liens absolus sont utilisés pour pointer vers des sites externes ou des ressources spécifiques sur le web.
</p>

<h3 className="text-md font-semibold text-gray-800">b. Attribut target</h3>
<p className="text-gray-700">
  L’attribut <code>target</code> définit où le lien s’ouvrira. Par défaut, les liens s’ouvrent dans le même onglet avec <code>_self</code>. Vous pouvez utiliser <code>_blank</code> pour ouvrir le lien dans un nouvel onglet. Cela est utile lorsque vous ne voulez pas que l’utilisateur quitte votre site en visitant un site externe.
</p>
<div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
  <pre className="text-sm overflow-x-auto">
{`<!-- lien s'ouvrant dans le même onglet -->
<a href="about.html" target="_self">À propos</a>

<!-- lien s'ouvrant dans un nouvel onglet -->
<a href="https://www.example.com" target="_blank">Visitez Example.com</a>`}
  </pre>
</div>
<p className="text-gray-700">
  L’attribut <code>target</code> est particulièrement important pour l’expérience utilisateur. Les liens internes peuvent rester dans le même onglet, tandis que les ressources externes peuvent s’ouvrir dans un nouvel onglet pour ne pas interrompre la navigation sur votre site.
</p>

<h3 className="text-md font-semibold text-gray-800">c. Liens internes et ancres</h3>
<p className="text-gray-700">
  Les ancres permettent de créer des liens vers des sections spécifiques d’une page. Pour cela, chaque élément cible doit avoir un identifiant unique grâce à l’attribut <code>id</code>. Ensuite, vous créez un lien avec <code>href="#id"</code> qui fera défiler la page jusqu’à cette section.
</p>
<p className="text-gray-700">
  Cela est utile pour les longues pages, comme des guides ou des FAQ, afin que l’utilisateur puisse accéder directement à la partie qui l’intéresse sans faire défiler toute la page. Les ancres améliorent aussi la navigation sur mobile et la lisibilité.
</p>
<div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
  <pre className="text-sm overflow-x-auto">
{`<!-- lien vers la section 2 sur la même page -->
<a href="#section2">Aller à la section 2</a>

<!-- élément cible -->
<h2 id="section2">Section 2</h2>`}
  </pre>
</div>
<p className="text-gray-700">
  Vous pouvez combiner les ancres avec les liens relatifs pour créer une navigation complète entre plusieurs fichiers et sections de votre site. Par exemple, un lien relatif vers une page « Contact » peut contenir également une ancre pour diriger l’utilisateur directement à un formulaire spécifique.
</p>



      {/* 4. Exercices pratiques */}
      <h2 className="text-2xl font-semibold text-gray-800">4. Exercices pratiques</h2>
      <p className="text-gray-700">
        1. Créez une page HTML avec un titre principal et plusieurs sous-titres, en respectant la hiérarchie des titres. <br />
        2. Ajoutez du texte en utilisant <code>&lt;p&gt;</code> et appliquez différentes balises pour mettre en évidence certaines parties (<code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;mark&gt;</code>). <br />
        3. Insérez un lien vers un site externe avec les attributs <code>href</code> et <code>target="_blank"</code>. <br />
        4. Créez un lien interne vers une section spécifique de votre page avec une ancre (<code>id</code>). <br />
        5. Vérifiez que tout s’affiche correctement et que les liens fonctionnent comme prévu.
      </p>
    </div>
  );
}
