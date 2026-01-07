export function cleanCode(code: string) {
    const lines = code.replace(/^\n/, '').split('\n');

    const nonEmpty = lines.filter((line) => line.trim() !== '');

    const minIndent = Math.min(
        ...nonEmpty.map((line) => line.match(/^ */)?.[0].length ?? 0),
    );

    return lines
        .map((line) => line.slice(minIndent))
        .join('\n')
        .trimEnd();
}


export function highlightPython(code: string) {
    // 1. Échappement HTML (Important pour la sécurité)
    code = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // 2. Commentaires (à faire tôt)
    code = code.replace(/(#.*$)/gm, '<span class="comment">$1</span>');

    // 3. Chaînes de caractères
    // On utilise [^"']* pour ne pas capturer au-delà de la string
    code = code.replace(/("(.*?)"|'(.*?)')/g, '<span class="str">$1</span>');

    // 4. Mots-clés (On vérifie qu'ils ne sont pas déjà dans une balise via (?![^<]*>))
    const keywords =
        /\b(class|def|return|import|from|as|if|else|elif|for|while|in)\b(?![^<]*>)/g;
    code = code.replace(keywords, '<span class="kw">$1</span>');

    // 5. Fonctions intégrées
    code = code.replace(
        /\b(print|len|range)\b(?![^<]*>)/g,
        '<span class="fn">$1</span>',
    );

    // 6. Self
    code = code.replace(
        /\b(self)\b(?![^<]*>)/g,
        '<span class="self">$1</span>',
    );

    // 7. Classes (Noms commençant par une Majuscule)
    // On ignore si c'est suivi de =" ou déjà dans une balise
    code = code.replace(
        /\b([A-Z][a-zA-Z0-9_]*)\b(?![^<]*>)/g,
        '<span class="class">$1</span>',
    );

    return code;
}

