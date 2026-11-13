/* Python 3 lessons. Examples stay as plain text; no Python is evaluated in the browser. */
(() => {
  const container = document.querySelector("#slides-container");
  if (!container) return;
  const pages = [];
  const examples = [];
  const esc = (text) => String(text).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
  const inline = (text) => `<code>${esc(text)}</code>`;
  const p = (text) => `<p class="python-lead">${text}</p>`;
  const list = (...items) => `<ul class="python-copy">${items.map((s) => `<li>${s}</li>`).join("")}</ul>`;
  const note = (text) => `<aside class="python-note">${text}</aside>`;
  const split = (a, b) => `<div class="python-split"><div>${a}</div><div>${b}</div></div>`;
  const table = (heads, rows) => `<div class="python-table-wrap"><table class="python-table"><thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const demo = (code, output, options = {}) => {
    if (!options.displayOnly) examples.push({ code, output, ...options });
    return `<div class="python-demo"><figure><figcaption>${options.label || "Code Python"}</figcaption><pre class="python-code"><code>${esc(code)}</code></pre></figure>${output === undefined ? "" : `<figure class="python-output-wrap"><figcaption>${options.error ? "Erreur attendue" : "Résultat affiché"}</figcaption><pre class="python-output">${esc(output)}</pre></figure>`}</div>`;
  };
  const slide = (id, section, title, body, className = "") => {
    pages.push(`<article class="slide python-slide ${className}" id="${id}" data-module="2" data-title="Python · ${esc(title.replace(/<[^>]*>/g, ""))}"><p class="eyebrow">Module 2 · ${section}</p><h2>${title}</h2>${body}<div class="python-footer">PYTHON 3 · Oussama Elhousni · ${String(pages.length + 1).padStart(2, "0")}</div></article>`);
  };
  const quiz = (id, title, question, choices, answer, success, error, code = "") => slide(id, "À toi de jouer", title,
    (code ? `<div class="python-quiz-layout">${demo(code, undefined, { displayOnly: true, label: "Lis sans exécuter" })}` : "") +
    `<div class="quiz standalone-quiz" data-answer="${answer}" data-success="${esc(success)}" data-error="${esc(error)}"><p>${question}</p><div class="choices">${choices.map((choice, i) => `<button type="button" data-choice="${String.fromCharCode(97 + i)}">${choice}</button>`).join("")}</div><div class="feedback" role="status"></div></div>${code ? "</div>" : ""}`);

  slide("module-2", "Les bases de Python", "Découvrir Python<br><span>et écrire ses premiers programmes</span>",
    p("Comprendre chaque ligne : des variables aux conditions, avec des explications et des exemples simples.") +
    `<div class="python-cover-mark"><code>variables</code><span>→</span><code>calculs</code><span>→</span><code>print() / input()</code><span>→</span><code>if</code></div>` +
    note("Dans ce module, on travaille avec des nombres, du texte et des booléens. Chaque notion est expliquée avant d’être utilisée."), "python-cover");

  slide("python-plan", "Le parcours", "Apprendre <span>dans cet ordre</span>",
    `<ol class="python-route">${[
      ["python-definition", "1. Comprendre Python"], ["python-variables", "2. Créer et nommer des variables"],
      ["python-utiliser", "3. Utiliser les variables"], ["python-types", "4. Les types de base"],
      ["python-conversions", "5. Convertir une valeur"], ["python-operateurs", "6. Opérations et opérateurs"],
      ["python-expressions", "7. Construire une expression"], ["python-print", "8. Afficher avec print()"],
      ["python-input", "9. Saisir avec input()"], ["python-if", "10. Décider avec if, elif, else"],
    ].map(([id, title]) => `<li><a href="#${id}" data-slide-target="${id}">${title}</a></li>`).join("")}</ol>`);

  slide("python-definition", "Introduction", "Python, <span>c’est quoi ?</span>",
    list("Un <strong>langage de programmation</strong> : il permet d’écrire les instructions que l’ordinateur exécutera.", "Un langage de <strong>haut niveau</strong> : on utilise des mots et des symboles compréhensibles, plutôt que des instructions machine.", "Un programme Python est du texte enregistré généralement dans un fichier qui se termine par <code>.py</code>.") +
    note("Un algorithme décrit la méthode. Python permet de traduire cette méthode en un programme exécutable."));

  slide("python-usages", "Introduction", "À quoi sert <span>Python ?</span>",
    split(list("Automatiser des tâches répétitives.", "Créer des applications et des services web.", "Traiter et analyser des données.", "Développer des outils scientifiques ou d’intelligence artificielle."),
      demo('print("Bonjour !")\nprint(8 + 4)', "Bonjour !\n12")) +
    note("On commence avec de petits programmes : afficher un message, calculer une moyenne ou vérifier une condition."));

  slide("python-execution", "Introduction · exécution", "Compilé ou <span>interprété ?</span>",
    table(["Modèle", "Explication simple", "Exemple habituel"], [
      ["Compilé", "Un compilateur traduit le programme avant de lancer le résultat obtenu.", "C ou C++ avec un compilateur"],
      ["Interprété", "Un logiciel appelé interpréteur prend en charge l’exécution du programme.", "Python avec CPython"],
    ]) + note("Un compilateur peut produire un exécutable. Avec un interpréteur, on lance généralement le code à travers le moteur du langage. Ces modèles peuvent aussi être combinés."));

  slide("python-cpython", "Introduction · Python", "Python est habituellement <span>dit interprété</span>",
    p("On lance un fichier Python avec l’interpréteur Python. Il prend en charge la préparation et l’exécution des instructions.") +
    `<div class="python-pipeline"><span>bonjour.py</span><b>→</b><span>Python</span><b>→</b><span>Bonjour !</span></div>` +
    demo('print("Bonjour !")', "Bonjour !") +
    note("Précision : CPython compile d’abord le code en une forme intermédiaire appelée bytecode, puis l’exécute. Pour commencer, retiens que c’est Python qui lance ton fichier .py."));

  slide("python-lancer", "Introduction · premier fichier", "Écrire <span>et lancer un programme</span>",
    demo('print("Mon premier programme")\nprint(5 + 3)', "Mon premier programme\n8", { label: "Fichier bonjour.py" }) +
    list("Écris ces lignes dans un éditeur de code, puis enregistre le fichier sous <code>bonjour.py</code>.", "Dans un terminal ouvert dans le même dossier, lance <code>py bonjour.py</code> sous Windows, ou <code>python bonjour.py</code> si cette commande est configurée.", "Le programme exécute les instructions dans l’ordre, du haut vers le bas."));

  slide("python-syntaxe", "Introduction · lire le code", "Trois repères <span>pour lire Python</span>",
    split(list("Une instruction simple s’écrit généralement sur une ligne.", "<code>#</code> commence un commentaire : une explication pour la personne qui lit le code.", "Les guillemets délimitent le texte ; un nombre s’écrit sans guillemets."),
      demo('# Un message pour l utilisateur\nprint("Bonjour")\n\n# Un calcul\nprint(10 + 5)', "Bonjour\n15")) +
    note("Dans les exemples, le bloc « Code Python » est ce qu’on écrit. Le bloc « Résultat affiché » montre ce qui apparaît à l’écran."));

  slide("python-variables", "Variables · définition", "Une variable : <span>un nom pour une valeur</span>",
    split(p("Une variable permet de conserver une valeur et de la retrouver en utilisant un nom. En Python, on la crée en lui affectant une première valeur."),
      demo('age = 18\nnom = "Sara"\nprint(age)\nprint(nom)', "18\nSara")) +
    note("Dans <code>age = 18</code>, <code>age</code> est le nom de la variable, <code>=</code> est l’affectation et <code>18</code> est la valeur."));

  slide("python-creer", "Variables · création", "Créer <span>une variable</span>",
    table(["Partie", "Dans prix = 25", "Rôle"], [
      ["Nom", inline("prix"), "Identifie la donnée dans le programme."],
      ["Affectation", inline("="), "Associe la valeur au nom."],
      ["Valeur", inline("25"), "La donnée conservée."],
    ]) + demo('prix = 25\nprint(prix)', "25") +
    note("On n’écrit pas de mot-clé pour déclarer une variable. La forme de base est <code>nom = valeur</code>. Il faut définir le nom avant de l’utiliser."));

  slide("python-noms", "Variables · règles de nommage", "Les règles <span>à respecter</span>",
    table(["Règle", "Valide", "Invalide"], [
      ["Commencer par une lettre ou _", inline("age2"), inline("2age")],
      ["Utiliser lettres, chiffres et _", inline("note_1"), inline("note!")],
      ["Ne pas mettre d’espace", inline("prix_total"), inline("prix total")],
      ["Ne pas mettre de tiret", inline("prix_total"), inline("prix-total")],
      ["Ne pas utiliser un mot réservé", inline("classe"), inline("class / if / else")],
    ]) + note("Les lettres accentuées peuvent être autorisées, mais on utilise ici des noms sans accents pour faciliter la saisie et le partage du code."));

  slide("python-conventions", "Variables · bonnes habitudes", "Choisir <span>un nom clair</span>",
    split(list("Utilise des minuscules et sépare les mots par <code>_</code> : c’est la convention <strong>snake_case</strong>.", "Choisis un nom qui décrit la donnée : <code>prix_unitaire</code>, <code>nombre_eleves</code>, <code>moyenne</code>.", "Évite les noms des fonctions déjà disponibles : <code>print</code>, <code>input</code>, <code>int</code>, <code>str</code>."),
      demo('prix_unitaire = 20\nnombre_articles = 3\nprix_total = prix_unitaire * nombre_articles\nprint(prix_total)', "60")));

  slide("python-casse", "Variables · majuscules et minuscules", "La casse <span>fait la différence</span>",
    demo('age = 18\nAge = 25\nprint(age)\nprint(Age)', "18\n25") +
    note("<code>age</code> et <code>Age</code> sont deux noms différents. Si tu crées <code>age</code> puis écris <code>print(AGE)</code>, Python signale que le nom <code>AGE</code> n’est pas défini. Garde la même orthographe partout."));

  slide("python-modifier", "Variables · modification", "Une valeur <span>peut changer</span>",
    split(demo('score = 10\nprint(score)\nscore = 15\nprint(score)', "10\n15"),
      list("La première affectation donne la valeur 10 à <code>score</code>.", "Le premier affichage montre 10.", "La seconde affectation remplace la valeur utilisée par ce nom : elle devient 15.", "Le second affichage montre la nouvelle valeur.")));

  quiz("python-quiz-noms", "Quel nom <span>choisir ?</span>", "Quel nom respecte les règles et la convention snake_case ?",
    [inline("2notes"), inline("note_moyenne"), inline("note-moyenne")], "b", "Oui : minuscules, underscore, et aucun chiffre au début.", "Un nom ne commence pas par un chiffre. Le tiret est le signe de soustraction.");

  slide("python-utiliser", "Utiliser les variables", "Le nom <span>représente la valeur</span>",
    demo('age = 18\nprint(age)\nprint("age")\nprint("Age :", age)', "18\nage\nAge : 18") +
    note("Sans guillemets, <code>age</code> demande la valeur de la variable. Entre guillemets, <code>\"age\"</code> est simplement un texte : Python affiche les lettres a, g et e."));

  slide("python-calcul-variables", "Utiliser les variables", "Calculer <span>avec des variables</span>",
    demo('longueur = 8\nlargeur = 3\naire = longueur * largeur\nperimetre = 2 * (longueur + largeur)\nprint("Aire :", aire)\nprint("Perimetre :", perimetre)', "Aire : 24\nPerimetre : 22") +
    note("Python remplace chaque nom par sa valeur pour effectuer le calcul. On conserve le résultat dans une autre variable pour le réutiliser ensuite."));

  slide("python-affectation", "Utiliser les variables", "Mettre à jour <span>à partir de l’ancienne valeur</span>",
    split(demo('score = 10\nscore = score + 3\nprint(score)', "13"),
      list("Python calcule d’abord la partie à droite du signe <code>=</code>.", "L’ancienne valeur de score est 10 : <code>score + 3</code> donne 13.", "Il affecte ensuite le résultat 13 à score.", "Ce n’est pas une égalité mathématique : c’est une mise à jour.")));

  slide("python-copier", "Utiliser les variables", "Copier <span>une valeur simple</span>",
    demo('a = 5\nb = a\na = 9\nprint(a)\nprint(b)', "9\n5") +
    note("Avec ces nombres, <code>b = a</code> donne à b la valeur actuelle de a : 5. Modifier a ensuite ne refait pas cette affectation : b conserve 5. Les instructions ne s’exécutent qu’au moment où on les atteint."));

  slide("python-types", "Types de base", "Quatre types <span>essentiels</span>",
    table(["Type", "Signification", "Exemple"], [
      [inline("int"), "Un nombre entier", inline("age = 18")],
      [inline("float"), "Un nombre à virgule flottante", inline("prix = 19.5")],
      [inline("str"), "Du texte : une chaîne de caractères", inline('nom = "Sara"')],
      [inline("bool"), "Une valeur logique : vrai ou faux", inline("admis = True")],
    ]) + note("Le type indique la nature de la valeur et les opérations possibles. Python le détermine à partir de la valeur affectée."));

  slide("python-numeriques", "Types · int et float", "Entier <span>ou nombre décimal ?</span>",
    demo('age = 18\ntemperature = -3\nprix = 12.5\npoids = 70.0\nprint(age, temperature)\nprint(prix, poids)', "18 -3\n12.5 70.0") +
    note("<code>18</code> et <code>-3</code> sont des <code>int</code>. <code>12.5</code> et <code>70.0</code> sont des <code>float</code>. Le séparateur décimal Python est le point, jamais la virgule. <code>70</code> et <code>70.0</code> ont des types différents."));

  slide("python-chaines", "Types · str", "Le texte <span>reste du texte</span>",
    demo('nom = "Sara"\nville = "Rabat"\nnumero = "18"\nprint(nom, ville)\nprint(numero + "1")', "Sara Rabat\n181") +
    note("Une chaîne s’écrit entre guillemets simples ou doubles. <code>\"18\"</code> est du texte, même s’il contient des chiffres. Le <code>+</code> entre deux chaînes les assemble ; il ne fait pas une addition numérique."));

  slide("python-booleens", "Types · bool", "Deux valeurs : <span>True et False</span>",
    demo('est_connecte = True\na_paye = False\nage = 20\nest_majeur = age >= 18\nprint(est_connecte, a_paye)\nprint(est_majeur)', "True False\nTrue") +
    note("<code>True</code> signifie vrai et <code>False</code> signifie faux. La majuscule initiale est obligatoire. Sans guillemets, ce sont des booléens ; <code>\"True\"</code> est une chaîne."));

  slide("python-type", "Reconnaître un type", "Vérifier <span>avec type()</span>",
    demo('print(type(18))\nprint(type(18.0))\nprint(type("18"))\nprint(type(True))', "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>") +
    note("<code>type(valeur)</code> indique le type de la valeur. Tu peux aussi écrire <code>type(age)</code>. Il n’est pas nécessaire d’écrire le type pour créer une variable."));

  slide("python-conversions", "Conversions de base", "Changer <span>le type d’une valeur</span>",
    table(["Fonction", "Exemple", "Résultat"], [
      [inline("int()"), inline('int("18")'), "18, un entier"],
      [inline("float()"), inline('float("12.5")'), "12.5, un réel"],
      [inline("str()"), inline("str(18)"), inline('"18", du texte')],
    ]) + demo('texte = "18"\nage = int(texte)\nprint(age + 1)', "19") +
    note("Convertir permet de passer d’une représentation à une autre. Il faut conserver le résultat si on souhaite le réutiliser : <code>age = int(texte)</code>."));

  slide("python-conversion-erreurs", "Conversions · exemples", "Une conversion <span>doit être possible</span>",
    table(["Expression", "Résultat", "Explication"], [
      [inline('int("25")'), inline("25"), "Le texte représente un entier."],
      [inline('float("12.5")'), inline("12.5"), "Le texte utilise un point décimal."],
      [inline("int(12.9)"), inline("12"), "La partie décimale est supprimée vers zéro."],
      [inline('int("bonjour")'), "Erreur : ValueError", "Ce texte ne représente pas un entier."],
      [inline('float("12,5")'), "Erreur : ValueError", "La virgule n’est pas acceptée ici."],
    ]) + note("<code>int(\"12.5\")</code> provoque aussi une erreur : pour ce texte décimal, utilise <code>float()</code>. Une conversion invalide arrête ces programmes simples et affiche un message d’erreur."));

  quiz("python-quiz-conversions", "Texte ou <span>nombre ?</span>", "Quelle valeur est affichée ?",
    [inline("123"), inline("15"), "Une erreur"], "b", "int(\"12\") donne l’entier 12. L’addition donne 12 + 3 = 15.", "La fonction int() transforme ici le texte en nombre entier avant le calcul.", 'texte = "12"\nprint(int(texte) + 3)');

  slide("python-operateurs", "Opérations et opérateurs", "Un opérateur <span>indique une action</span>",
    split(demo('a = 8\nb = 3\nprint(a + b)\nprint(a - b)\nprint(a * b)', "11\n5\n24"),
      list("<code>a</code> et <code>b</code> contiennent les valeurs utilisées.", "<code>+</code> demande une addition.", "<code>-</code> demande une soustraction.", "<code>*</code> demande une multiplication.")) +
    note("Les valeurs sur lesquelles agit un opérateur s’appellent les opérandes. Dans <code>8 + 3</code>, les opérandes sont 8 et 3."));

  slide("python-arithmetique", "Opérateurs arithmétiques", "Les calculs <span>de base</span>",
    table(["Opérateur", "Action", "Exemple → résultat"], [
      [inline("+"), "Addition", inline("7 + 2 → 9")],
      [inline("-"), "Soustraction", inline("7 - 2 → 5")],
      [inline("*"), "Multiplication", inline("7 * 2 → 14")],
      [inline("/"), "Division", inline("7 / 2 → 3.5")],
      [inline("**"), "Puissance", inline("2 ** 3 → 8")],
    ]) + note("Une division avec <code>/</code> entre ces nombres produit un <code>float</code>, même si elle tombe juste : <code>8 / 2</code> vaut <code>4.0</code>. Le signe unaire <code>-</code> permet aussi d’écrire une valeur négative."));

  slide("python-division", "Division entière et modulo", "Le quotient <span>et le reste</span>",
    demo('print(17 / 5)\nprint(17 // 5)\nprint(17 % 5)\nprint(3 * 5 + 2)', "3.4\n3\n2\n17") +
    note("Pour ces entiers positifs, <code>//</code> donne le quotient entier et <code>%</code> donne le reste. On a 17 = 3 × 5 + 2. Diviser par zéro avec <code>/</code>, <code>//</code> ou <code>%</code> provoque une erreur."));

  slide("python-operations-texte", "Types et opérations", "Additionner <span>ou assembler du texte ?</span>",
    demo('print(2 + 3)\nprint("2" + "3")\nprint("Bonjour " + "Sara")\nprint("ha" * 3)', "5\n23\nBonjour Sara\nhahaha") +
    note("Avec des nombres, <code>+</code> additionne. Avec deux chaînes, il les assemble : c’est la concaténation. Une chaîne multipliée par un entier est répétée. <code>\"Age : \" + 18</code> est invalide ; écris <code>\"Age : \" + str(18)</code>."));

  slide("python-comparaisons", "Opérateurs de comparaison", "Comparer <span>des valeurs</span>",
    table(["Opérateur", "Signification", "Exemple → résultat"], [
      [inline("=="), "Égal à", inline("5 == 5 → True")],
      [inline("!="), "Différent de", inline("5 != 5 → False")],
      [inline("<"), "Strictement inférieur à", inline("3 < 5 → True")],
      [inline("<="), "Inférieur ou égal à", inline("5 <= 5 → True")],
      [inline(">"), "Strictement supérieur à", inline("3 > 5 → False")],
      [inline(">="), "Supérieur ou égal à", inline("5 >= 5 → True")],
    ]) + note("Une comparaison de ces valeurs produit un booléen. Ne confonds pas <code>=</code> (affecter) avec <code>==</code> (comparer)."));

  slide("python-logique", "Opérateurs logiques", "Combiner <span>deux comparaisons</span>",
    table(["Opérateur", "Signification", "Exemple"], [
      [inline("and"), "Les deux conditions doivent être vraies.", inline("age >= 18 and a_paye")],
      [inline("or"), "Au moins une condition doit être vraie.", inline("age < 12 or age >= 65")],
      [inline("not"), "Inverse la valeur de vérité.", inline("not est_connecte")],
    ]) + demo('age = 20\na_paye = True\nprint(age >= 18 and a_paye)\nprint(age < 12 or age >= 65)\nprint(not a_paye)', "True\nFalse\nFalse"));

  slide("python-raccourcis", "Affectation · raccourcis", "Modifier <span>une variable numérique</span>",
    table(["Raccourci", "Pour ces nombres, revient à", "Si score vaut 10 au départ"], [
      [inline("score += 3"), inline("score = score + 3"), inline("13")],
      [inline("score -= 3"), inline("score = score - 3"), inline("7")],
      [inline("score *= 3"), inline("score = score * 3"), inline("30")],
      [inline("score /= 2"), inline("score = score / 2"), inline("5.0")],
    ]) + note("Chaque ligne est un exemple indépendant et repart de 10. Le nom doit déjà avoir une valeur. Tu peux commencer par la forme longue, puis utiliser ces raccourcis."));

  slide("python-expressions", "Expressions · définition", "Une expression <span>produit une valeur</span>",
    table(["Expression", "Avec ces données", "Valeur obtenue"], [
      [inline("5 + 3"), "Deux nombres", inline("8")],
      [inline("prix * quantite"), "prix = 20 et quantite = 3", inline("60")],
      [inline('"Bonjour " + nom'), inline('nom = "Sara"'), inline('"Bonjour Sara"')],
      [inline("age >= 18"), "age = 20", inline("True")],
    ]) + note("Une expression peut être un calcul, un assemblage de texte ou une comparaison. Dans <code>total = prix * quantite</code>, la droite est l’expression ; la ligne complète est une instruction d’affectation."));

  slide("python-priorites", "Expressions · priorités", "Dans quel ordre <span>calculer ?</span>",
    demo('print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(2 ** 3 + 1)\nprint((12 + 16) / 2)', "14\n20\n9\n14.0") +
    note("Pour ces calculs : parenthèses d’abord, puis puissances, puis <code>* / // %</code>, puis <code>+ -</code>. Les opérateurs d’un même niveau se lisent généralement de gauche à droite ; les puissances se regroupent à droite."));

  slide("python-expression-moyenne", "Expressions · exemple expliqué", "Calculer <span>une moyenne</span>",
    split(demo('note1 = 12\nnote2 = 16\nsomme = note1 + note2\nmoyenne = somme / 2\nprint(moyenne)', "14.0"),
      list("On définit les deux notes.", "L’expression <code>note1 + note2</code> donne 28.", "On conserve 28 dans <code>somme</code>.", "L’expression <code>somme / 2</code> donne 14.0, conservé dans <code>moyenne</code>.")) +
    note("On peut aussi écrire directement <code>moyenne = (note1 + note2) / 2</code>. Sans parenthèses, le calcul n’aurait pas le même sens."));

  quiz("python-quiz-operateurs", "Prévoir <span>le résultat</span>", "Que donne ce calcul ?",
    [inline("20"), inline("14"), inline("24")], "b", "La multiplication est prioritaire : 3 × 4 = 12, puis 2 + 12 = 14.", "Commence par la multiplication. Les parenthèses seraient nécessaires pour additionner 2 et 3 d’abord.", "print(2 + 3 * 4)");

  slide("python-print", "Afficher · print()", "Afficher <span>un message</span>",
    split(demo('print("Bonjour")\nprint("Bienvenue au cours de Python")', "Bonjour\nBienvenue au cours de Python"),
      list("<code>print</code> est le nom de la fonction.", "Les parenthèses contiennent ce qu’on lui demande d’afficher.", "Les guillemets indiquent qu’il s’agit de texte.", "Chaque appel passe par défaut à la ligne suivante.")) +
    note("Les guillemets délimitent le texte dans le code : ils ne s’affichent pas. La fonction <code>print()</code> est disponible directement en Python."));

  slide("python-print-valeurs", "print() · valeurs et calculs", "Afficher <span>une variable ou un résultat</span>",
    demo('age = 18\nprint(age)\nprint("age")\nprint(age + 1)\nprint("Age :", age)', "18\nage\n19\nAge : 18") +
    note("Python évalue ce qui se trouve dans les parenthèses avant de l’afficher. Les arguments séparés par des virgules sont affichés les uns après les autres, avec un espace par défaut."));

  slide("python-print-plusieurs", "print() · plusieurs arguments", "Mélanger <span>texte et variables</span>",
    demo('nom = "Sara"\nage = 18\nprint("Bonjour", nom)\nprint(nom, "a", age, "ans.")\nprint("Dans un an :", age + 1)', "Bonjour Sara\nSara a 18 ans.\nDans un an : 19") +
    note("Avec des virgules, <code>print()</code> peut recevoir à la fois du texte et des nombres. On n’a pas besoin de convertir age en texte pour cet affichage."));

  slide("python-print-sep", "print() · sep", "Choisir <span>le séparateur</span>",
    demo('print("A", "B", "C")\nprint("A", "B", "C", sep="-")\nprint(5, 11, 2026, sep="/")\nprint("A", "B", "C", sep="")', "A B C\nA-B-C\n5/11/2026\nABC") +
    note("<code>sep</code> précise le texte à placer entre les arguments. La valeur par défaut est un espace : <code>sep=\" \"</code>. Le séparateur n’est placé ni avant le premier argument ni après le dernier."));

  slide("python-print-end", "print() · end", "Choisir <span>la fin de l’affichage</span>",
    demo('print("Bonjour", end=" ")\nprint("Sara")\nprint("A", end="")\nprint("B")\nprint()\nprint("Fin")', "Bonjour Sara\nAB\n\nFin") +
    note("<code>end</code> précise ce que print ajoute à la fin. Par défaut, c’est <code>\"\\n\"</code>, le retour à la ligne. <code>end=\"\"</code> ne rajoute rien. <code>print()</code> seul produit une ligne vide avec les valeurs par défaut."));

  slide("python-echappements", "print() · caractères spéciaux", "Écrire <span>un saut de ligne</span>",
    demo('print("Bonjour\\nSara")\nprint("Il dit \\\"Salut\\\".")\nprint("C:\\\\cours")', 'Bonjour\nSara\nIl dit "Salut".\nC:\\cours') +
    note("Dans une chaîne : <code>\\n</code> produit un retour à la ligne, <code>\\\"</code> permet d’inclure un guillemet double et <code>\\\\</code> représente un antislash. Le <code>n</code> de <code>\\n</code> n’est pas affiché comme une lettre."));

  slide("python-fstrings", "print() · présentation", "Insérer <span>les valeurs dans le texte</span>",
    demo('nom = "Sara"\nage = 18\nprix = 12.5\nprint(f"Bonjour {nom}, tu as {age} ans.")\nprint(f"Prix : {prix:.2f} DH")', "Bonjour Sara, tu as 18 ans.\nPrix : 12.50 DH") +
    note("Le <code>f</code> avant les guillemets permet de remplacer les expressions entre accolades par leurs valeurs. <code>:.2f</code> demande un affichage avec deux décimales ; cela ne change pas la valeur de prix."));

  quiz("python-quiz-print", "Lire <span>un affichage</span>", "Quelle sortie est affichée sur une seule ligne ?",
    [inline("A B!C"), inline("A-B!C"), inline("A-B C!")], "b", "sep met un tiret entre A et B. end ajoute ! sans retour à la ligne ; le deuxième print affiche ensuite C.", "Distingue sep, placé entre les valeurs, et end, placé à la fin de l’appel.", 'print("A", "B", sep="-", end="!")\nprint("C")');

  slide("python-input", "Saisir · input()", "Demander <span>une information</span>",
    split(demo('nom = input("Ton nom : ")\nprint("Bonjour", nom)', "Ton nom : Sara\nBonjour Sara", { stdin: "Sara\n", terminalEcho: true }),
      list("<code>input()</code> affiche la question écrite entre parenthèses.", "Le programme attend que l’utilisateur saisisse une réponse et appuie sur Entrée.", "La réponse est renvoyée sous forme de texte.", "L’affectation conserve cette réponse dans <code>nom</code>.")) +
    note("Dans le résultat, Sara représente ce que l’utilisateur a tapé. Le message de input n’ajoute pas automatiquement un retour à la ligne avant la saisie."));

  slide("python-input-texte", "input() · résultat", "La réponse <span>est toujours du texte</span>",
    demo('age = input("Age : ")\nprint(type(age))\nprint(age + "1")', "Age : 18\n<class 'str'>\n181", { stdin: "18\n", terminalEcho: true }) +
    note("Même si l’utilisateur saisit 18, input renvoie <code>\"18\"</code>, une chaîne. Ajouter <code>\"1\"</code> assemble les textes. Pour additionner un nombre, on doit d’abord convertir la réponse."));

  slide("python-input-entier", "input() · nombre entier", "Lire <span>puis convertir un entier</span>",
    demo('texte = input("Age : ")\nage = int(texte)\nage_suivant = age + 1\nprint("Dans un an :", age_suivant)', "Age : 18\nDans un an : 19", { stdin: "18\n", terminalEcho: true }) +
    note("Les deux premières lignes peuvent aussi s’écrire <code>age = int(input(\"Age : \"))</code>. L’appel input s’exécute d’abord ; int transforme ensuite la réponse en entier."));

  slide("python-input-nombres", "input() · nombre décimal", "Lire <span>un prix et une quantité</span>",
    demo('prix = float(input("Prix unitaire : "))\nquantite = int(input("Quantite : "))\ntotal = prix * quantite\nprint(f"Total : {total:.2f} DH")', "Prix unitaire : 12.5\nQuantite : 3\nTotal : 37.50 DH", { stdin: "12.5\n3\n", terminalEcho: true }) +
    note("Utilise <code>float()</code> si la réponse peut contenir une décimale. Utilise <code>int()</code> si tu attends un entier. Ici, il faut saisir des nombres valides et utiliser un point pour les décimales."));

  slide("python-input-ordre", "input() · plusieurs questions", "Recevoir, calculer, <span>afficher</span>",
    demo('note1 = float(input("Premiere note : "))\nnote2 = float(input("Deuxieme note : "))\nmoyenne = (note1 + note2) / 2\nprint("Moyenne :", moyenne)', "Premiere note : 12\nDeuxieme note : 16\nMoyenne : 14.0", { stdin: "12\n16\n", terminalEcho: true }) +
    note("Le premier input attend la première réponse. Le second attend ensuite la deuxième. Le calcul se fait une fois les deux valeurs disponibles. Ne tente pas de calculer avec un nom qui n’a pas encore reçu de valeur."));

  slide("python-if", "Conditions · if", "Exécuter <span>seulement si…</span>",
    split(demo('age = 19\nif age >= 18:\n    print("Majeur")\nprint("Fin")', "Majeur\nFin"),
      list("<code>if</code> signifie « si ».", "<code>age >= 18</code> est la condition à vérifier.", "Le <code>:</code> termine l’en-tête du if.", "La ligne indentée s’exécute si la condition est vraie.")) +
    note("Dans cet exemple, 19 est supérieur ou égal à 18 : le programme affiche Majeur. La ligne non indentée affiche Fin dans tous les cas."));

  slide("python-if-faux", "Conditions · condition fausse", "Si le test est faux, <span>on saute le bloc</span>",
    demo('age = 16\nif age >= 18:\n    print("Majeur")\nprint("Fin")', "Fin") +
    note("16 n’est pas supérieur ou égal à 18. Python ignore donc la ligne indentée, puis continue après le bloc. Un if simple n’exige pas de else."));

  slide("python-indentation", "Conditions · indentation", "Les espaces <span>définissent le bloc</span>",
    split(demo('age = 20\nif age >= 18:\n    print("Bienvenue")\n    print("Acces autorise")\nprint("Verification terminee")', "Bienvenue\nAcces autorise\nVerification terminee"),
      list("Les deux lignes indentées appartiennent au if.", "Le dernier print est aligné avec if : il est hors du bloc.", "Utilise 4 espaces pour chaque niveau d’indentation.", "Oublier l’indentation attendue provoque une erreur.")));

  slide("python-if-else", "Conditions · if et else", "Deux possibilités : <span>si… sinon…</span>",
    demo('age = 16\nif age >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")', "Mineur") +
    note("Si le test est vrai, le premier bloc s’exécute. Sinon, le bloc du <code>else</code> s’exécute. <code>else</code> ne porte pas de condition et s’aligne avec <code>if</code>. Un seul des deux blocs est exécuté."));

  slide("python-elif", "Conditions · elif", "Plusieurs cas <span>avec elif</span>",
    demo('nombre = 0\nif nombre > 0:\n    print("Positif")\nelif nombre < 0:\n    print("Negatif")\nelse:\n    print("Nul")', "Nul") +
    note("<code>elif</code> signifie « sinon si ». Son test est évalué seulement si les tests précédents étaient faux. Ici, 0 n’est ni positif ni négatif : le else affiche Nul."));

  slide("python-elif-ordre", "Conditions · ordre des tests", "Le premier test vrai <span>gagne</span>",
    demo('note = 15\nif note >= 16:\n    print("Tres bien")\nelif note >= 14:\n    print("Bien")\nelif note >= 10:\n    print("Admis")\nelse:\n    print("Non admis")', "Bien") +
    note("15 n’atteint pas 16, mais atteint 14 : Python affiche Bien et termine cette chaîne de conditions. Il n’exécute pas le elif suivant, même si 15 est aussi supérieur à 10."));

  slide("python-conditions-composees", "Conditions · and et or", "Écrire <span>une condition complète</span>",
    demo('note = 14\nif note >= 0 and note <= 20:\n    print("Note valide")\nelse:\n    print("Note invalide")', "Note valide") +
    note("Avec <code>and</code>, les deux tests doivent être vrais. Avec <code>or</code>, un seul suffit. Écris les comparaisons en entier : <code>ville == \"Rabat\" or ville == \"Fes\"</code>, pas <code>ville == \"Rabat\" or \"Fes\"</code>."));

  slide("python-erreurs-frequentes", "Conditions · erreurs à éviter", "Vérifier <span>la syntaxe</span>",
    table(["Erreur", "Problème", "Correction"], [
      [inline("if age = 18:"), "= sert à affecter, pas à comparer.", inline("if age == 18:")],
      [inline("if age >= 18"), "Le deux-points manque.", inline("if age >= 18:")],
      ["print non indenté après if", "Python attend un bloc indenté.", "Ajouter 4 espaces devant print."],
      [inline("else age < 18:"), "else ne prend pas de condition.", inline("else:")],
    ]) + note("Vérifie aussi les noms : <code>elif</code> s’écrit en un seul mot. Un <code>else</code> doit appartenir à un <code>if</code> et être correctement aligné."));

  quiz("python-quiz-conditions", "Quelle branche <span>est choisie ?</span>", "Avec note = 14, quel message est affiché ?",
    ["Tres bien", "Admis", "Non admis"], "b", "Le premier test est faux. Le test note >= 10 est vrai : le programme affiche Admis et ignore le else.", "Suis les tests de haut en bas. Une seule branche de cette chaîne est exécutée.", 'note = 14\nif note >= 16:\n    print("Tres bien")\nelif note >= 10:\n    print("Admis")\nelse:\n    print("Non admis")');

  slide("python-exemple-final", "Conditions · exemple complet", "Saisir une note <span>et décider</span>",
    demo('note = float(input("Note sur 20 : "))\nif note < 0 or note > 20:\n    print("Note invalide")\nelif note >= 10:\n    print("Admis")\nelse:\n    print("Non admis")', "Note sur 20 : 14\nAdmis", { stdin: "14\n", terminalEcho: true }) +
    note("input reçoit le texte ; float le convertit ; les conditions choisissent le message ; print l’affiche. Essaie ensuite 8, 10, 20 et 21. Ces exemples supposent une saisie numérique valide."));

  slide("python-bilan", "Bilan", "Les bases <span>à retenir</span>",
    list("Créer une variable avec <code>nom = valeur</code> et choisir un nom clair en snake_case.", "Reconnaître <code>int</code>, <code>float</code>, <code>str</code> et <code>bool</code> ; convertir quand c’est nécessaire.", "Construire une expression avec des variables, des opérateurs et des parenthèses.", "Afficher avec <code>print()</code> et recevoir du texte avec <code>input()</code>.", "Choisir une branche avec <code>if</code>, <code>elif</code> et <code>else</code>.") +
    note("La démarche : saisir → convertir → calculer ou comparer → afficher. Relis chaque ligne et prédis le résultat avant de lancer le programme."));

  slide("python-sources", "Références", "Retrouver <span>la documentation</span>",
    `<ul class="python-sources">${[
      ["https://docs.python.org/3/faq/general.html#what-is-python", "Présentation de Python"],
      ["https://docs.python.org/3/tutorial/introduction.html", "Nombres, texte, calculs et variables"],
      ["https://docs.python.org/3/library/functions.html#print", "La fonction print()"],
      ["https://docs.python.org/3/library/functions.html#input", "La fonction input()"],
      ["https://docs.python.org/3/tutorial/controlflow.html#if-statements", "Les conditions if, elif et else"],
      ["https://peps.python.org/pep-0008/#naming-conventions", "Les conventions de nommage"],
    ].map(([href, title]) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${title}</a></li>`).join("")}</ul>`);

  container.insertAdjacentHTML("beforeend", pages.join("\n"));
  window.module2Examples = examples;
})();
