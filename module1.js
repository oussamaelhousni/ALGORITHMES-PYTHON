const module1Markup = `
<article class="slide module1-slide module1-cover" data-title="Module 1 · Premiers algorithmes">
  <div class="module1-cover-content">
    <p class="eyebrow">Module 1 · Débutants</p>
    <h1>Penser comme<br /><span>un programmeur</span></h1>
    <p class="lead">Apprendre à transformer une idée en algorithme, puis en programme.</p>
    <div class="module1-cover-route"><span>Problème</span><b>→</b><span>Algorithme</span><b>→</b><span>Pseudocode</span><b>→</b><span>Programme</span></div>
  </div>
</article>
<article class="slide module1-slide module1-section" data-title="Objectifs du module">
  <p class="eyebrow">01 · Le parcours</p>
  <h2>À la fin du module,<br /><span>tu sauras raisonner</span></h2>
  <div class="module1-goals">
    <div><strong>Comprendre</strong><span>Un algorithme, une instruction et une variable.</span></div>
    <div><strong>Écrire</strong><span>Une solution lisible en pseudocode.</span></div>
    <div><strong>Suivre</strong><span>Les valeurs avec une trace RAM.</span></div>
    <div><strong>Construire</strong><span>Un petit projet avec conditions, boucles et tableau.</span></div>
  </div>
</article>
<article class="slide module1-slide module1-content" data-title="Algorithme · Préparer un thé">
  <p class="eyebrow">03 · Premier exemple</p>
  <h2>Un algorithme peut<br /><span>préparer un thé</span></h2>
  <p class="module1-lead">Avant de parler de code, donnons des étapes précises à une personne.</p>
  <div class="tea-recipe">
    <div class="tea-step"><b>01</b><span>Chauffe l’eau.</span></div>
    <div class="tea-step"><b>02</b><span>Mets le thé dans la théière.</span></div>
    <div class="tea-step"><b>03</b><span>Verse l’eau chaude dans la théière.</span></div>
    <div class="tea-step"><b>04</b><span>Laisse reposer quelques minutes.</span></div>
    <div class="tea-step"><b>05</b><span>Ajoute le sucre.</span></div>
    <div class="tea-step"><b>06</b><span>Verse le thé dans les verres et sers-le.</span></div>
  </div>
</article>
<article class="slide module1-slide module1-content" data-title="Algorithme · Définition">
  <p class="eyebrow">04 · Comprendre l’idée</p>
  <h2>Un algorithme est<br /><span>une méthode</span></h2>
  <div class="definition-layout">
    <div class="definition-copy"><p>Un algorithme est une suite d’étapes <strong>ordonnées</strong>, <strong>précises</strong> et <strong>finies</strong> qui transforme des données en résultat.</p><div class="formula-line"><span>Entrées</span><b>→</b><span>Étapes</span><b>→</b><span>Résultat</span></div></div>
    <pre class="module1-code"><code>Problème : calculer 8 + 4

1. Lire 8
2. Lire 4
3. Additionner
4. Afficher 12</code></pre>
  </div>
</article>
<article class="slide module1-slide module1-content" data-title="Algorithme · Qualités">
  <p class="eyebrow">05 · Une bonne méthode</p>
  <h2>Un bon algorithme<br /><span>ne laisse pas deviner</span></h2>
  <div class="quality-layout">
    <div class="quality-list"><div><b>Précis</b><span>Chaque étape indique exactement quoi faire.</span></div><div><b>Ordonné</b><span>Les étapes suivent une logique.</span></div><div><b>Fini</b><span>Il possède une condition de fin.</span></div><div><b>Testable</b><span>On peut vérifier le résultat.</span></div></div>
    <div class="quality-compare"><div class="bad-example"><b>Vague</b><span>Prépare un thé rapidement.</span></div><div class="good-example"><b>Précis</b><span>Verse l’eau chaude dans la théière, puis laisse reposer quelques minutes.</span></div></div>
  </div>
</article>
<article class="slide module1-slide module1-content" data-title="Algorithme · Décomposer un problème">
  <p class="eyebrow">06 · Méthode de résolution</p>
  <h2>Découper un grand problème<br /><span>en petites actions</span></h2>
  <div class="problem-flow"><div><b>Question</b><span>Quelle est la moyenne de trois notes ?</span></div><i>↓</i><div><b>Données</b><span>note1, note2, note3</span></div><i>↓</i><div><b>Calcul</b><span>(note1 + note2 + note3) ÷ 3</span></div><i>↓</i><div><b>Réponse</b><span>La moyenne</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Programme informatique">
  <p class="eyebrow">07 · De l’idée au logiciel</p>
  <h2>Algorithme ou<br /><span>programme informatique ?</span></h2>
  <div class="compare-wide"><div><b>Algorithme</b><p>La solution expliquée avec des étapes compréhensibles par une personne.</p><pre class="module1-code"><code>total ← prix1 + prix2
ÉCRIRE total</code></pre></div><div><b>Programme</b><p>La même solution écrite dans un langage que l’ordinateur peut exécuter.</p><pre class="module1-code"><code>total = prix1 + prix2
print(total)</code></pre></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Pseudocode · Définition">
  <p class="eyebrow">08 · Écrire avant de coder</p>
  <h2>Le pseudocode explique<br /><span>la solution simplement</span></h2>
  <p class="module1-lead">Il ressemble à du code, mais il reste lisible même sans connaître Python, Java ou JavaScript.</p>
  <pre class="module1-code large-code"><code>ALGORITHME CalculMoyenne

VARIABLES
    note1, note2, note3, moyenne : réel

DÉBUT
    LIRE note1
    LIRE note2
    LIRE note3
    moyenne ← (note1 + note2 + note3) / 3
    ÉCRIRE moyenne
FIN</code></pre>
</article>
<article class="slide module1-slide module1-content" data-title="Pseudocode · Mots-clés">
  <p class="eyebrow">09 · Les mots importants</p>
  <h2>Chaque mot indique<br /><span>une action</span></h2>
  <div class="keyword-list"><div><code>LIRE</code><span>Recevoir une donnée.</span></div><div><code>ÉCRIRE</code><span>Afficher un message ou un résultat.</span></div><div><code>←</code><span>Donner une valeur à une variable.</span></div><div><code>SI</code><span>Prendre une décision.</span></div><div><code>POUR</code><span>Répéter un nombre connu de fois.</span></div><div><code>TANT QUE</code><span>Répéter pendant qu’une condition est vraie.</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Instructions · Définition">
  <p class="eyebrow">10 · Une action à la fois</p>
  <h2>Une instruction est<br /><span>une commande précise</span></h2>
  <p class="module1-lead">L’ordinateur exécute les instructions dans l’ordre, sauf lorsqu’une condition ou une boucle change le chemin.</p>
  <div class="instruction-stack"><pre class="module1-code"><code>LIRE age</code></pre><span>Recevoir une valeur</span><pre class="module1-code"><code>age ← 18</code></pre><span>Stocker une valeur</span><pre class="module1-code"><code>ÉCRIRE age</code></pre><span>Afficher une valeur</span></div>
</article>
<article class="slide module1-slide module1-content" data-title="Instructions · Séquence">
  <p class="eyebrow">11 · L’ordre compte</p>
  <h2>Les instructions forment<br /><span>une séquence</span></h2>
  <div class="sequence-layout"><pre class="module1-code"><code>1. LIRE longueur
2. LIRE largeur
3. périmètre ← 2 × (longueur + largeur)
4. ÉCRIRE périmètre</code></pre><div class="sequence-note"><b>Pourquoi cet ordre ?</b><span>On doit connaître la longueur et la largeur avant de calculer le périmètre.</span><strong>Entrée → Traitement → Sortie</strong></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="LIRE · Recevoir une donnée">
  <p class="eyebrow">12 · Entrée</p>
  <h2><code>LIRE</code> reçoit une donnée<br /><span>et la range</span></h2>
  <pre class="module1-code"><code>ÉCRIRE "Entrez votre âge :"
LIRE age</code></pre>
  <div class="read-flow"><span>Utilisateur</span><b>18</b><i>→</i><span>Variable <code>age</code></span><b>18</b></div>
  <p class="module1-note">Après <code>LIRE age</code>, la variable <code>age</code> contient la valeur saisie par l’utilisateur.</p>
</article>
<article class="slide module1-slide module1-content" data-title="ÉCRIRE · Afficher une information">
  <p class="eyebrow">13 · Sortie</p>
  <h2><code>ÉCRIRE</code> montre<br /><span>un message ou un résultat</span></h2>
  <pre class="module1-code"><code>age ← 18
ÉCRIRE "Vous avez", age, "ans"
ÉCRIRE "Dans cinq ans :", age + 5</code></pre>
  <div class="output-screen"><small>ÉCRAN</small><strong>Vous avez 18 ans</strong><span>Dans cinq ans : 23</span></div>
</article>
<article class="slide module1-slide module1-content" data-title="Entrée · Traitement · Sortie">
  <p class="eyebrow">14 · Le modèle général</p>
  <h2>Tout programme suit souvent<br /><span>ce même trajet</span></h2>
  <div class="io-flow"><div><b>Entrée</b><span>Données reçues avec <code>LIRE</code></span><em>8 et 4</em></div><i>→</i><div><b>Traitement</b><span>Calcul ou transformation</span><em>8 + 4 = 12</em></div><i>→</i><div><b>Sortie</b><span>Résultat affiché avec <code>ÉCRIRE</code></span><em>12</em></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Exemple · Calculer une moyenne">
  <p class="eyebrow">15 · Exemple guidé</p>
  <h2>Calculer une moyenne<br /><span>avec trois notes</span></h2>
  <div class="worked-example"><pre class="module1-code"><code>LIRE note1
LIRE note2
LIRE note3

somme ← note1 + note2 + note3
moyenne ← somme / 3

ÉCRIRE "Moyenne :", moyenne</code></pre><div class="worked-values"><b>Exemple</b><span>note1 = 12</span><span>note2 = 15</span><span>note3 = 9</span><strong>moyenne = 12</strong></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Variable · Définition">
  <p class="eyebrow">16 · Stocker une information</p>
  <h2>Une variable est<br /><span>une boîte nommée</span></h2>
  <div class="variable-boxes"><div><small>nom</small><b>age</b><strong>18</strong></div><div><small>nom</small><b>prix</b><strong>12.50</strong></div><div><small>nom</small><b>nomClient</b><strong>"Sara"</strong></div></div>
  <p class="module1-note">Le nom permet de retrouver la valeur et de la réutiliser dans les instructions suivantes.</p>
</article>
<article class="slide module1-slide module1-content" data-title="Variable · Affectation">
  <p class="eyebrow">17 · Donner et modifier une valeur</p>
  <h2>L’affectation met<br /><span>une valeur dans une variable</span></h2>
  <pre class="module1-code"><code>score ← 10
score ← score + 5
ÉCRIRE score</code></pre>
  <div class="assignment-steps"><div><b>1</b><span><code>score</code> contient 10</span></div><i>→</i><div><b>2</b><span>on calcule 10 + 5</span></div><i>→</i><div><b>3</b><span><code>score</code> contient 15</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Types et valeurs">
  <p class="eyebrow">18 · La nature des données</p>
  <h2>Le type indique<br /><span>ce que contient la variable</span></h2>
  <div class="type-table"><div><code>18</code><b>Entier</b><span>Âge, quantité, compteur</span></div><div><code>15.5</code><b>Réel</b><span>Prix, moyenne, température</span></div><div><code>"Sara"</code><b>Texte</b><span>Nom, message, ville</span></div><div><code>VRAI</code><b>Booléen</b><span>Oui/non, vrai/faux</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Mémoire · Stocker les variables">
  <p class="eyebrow">19 · Dans la RAM</p>
  <h2>Les variables sont conservées<br /><span>dans la mémoire de travail</span></h2>
  <div class="memory-layout"><div class="ram-visual"><span>RAM</span><small>Mémoire temporaire</small></div><table class="memory-table"><thead><tr><th>Nom</th><th>Adresse simplifiée</th><th>Valeur</th></tr></thead><tbody><tr><td>age</td><td>1000</td><td>18</td></tr><tr><td>prix</td><td>1004</td><td>12.50</td></tr><tr><td>majeur</td><td>1008</td><td>VRAI</td></tr></tbody></table></div>
  <p class="module1-note">Les adresses sont pédagogiques : l’ordinateur les gère automatiquement.</p>
</article>
<article class="slide module1-slide module1-content" data-title="Condition · Décider">
  <p class="eyebrow">20 · Choisir un chemin</p>
  <h2>Une condition permet<br /><span>de prendre une décision</span></h2>
  <pre class="module1-code"><code>SI age ≥ 18 ALORS
    ÉCRIRE "Majeur"
SINON
    ÉCRIRE "Mineur"
FINSI</code></pre>
  <div class="decision-branches"><div><b>age ≥ 18</b><span>Chemin vrai : majeur</span></div><div><b>age &lt; 18</b><span>Chemin faux : mineur</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Condition · SI ALORS SINON">
  <p class="eyebrow">21 · Exemple de décision</p>
  <h2>Une condition peut<br /><span>produire deux résultats</span></h2>
  <pre class="module1-code"><code>LIRE moyenne

SI moyenne ≥ 10 ALORS
    ÉCRIRE "Admis"
SINON
    ÉCRIRE "Non admis"
FINSI</code></pre>
  <div class="result-pair"><div class="pass"><b>12</b><span>Admis</span></div><div class="fail"><b>8</b><span>Non admis</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Condition · Opérateurs logiques">
  <p class="eyebrow">22 · Combiner des conditions</p>
  <h2>Les opérateurs décrivent<br /><span>des règles plus précises</span></h2>
  <div class="logic-grid"><div><code>ET</code><span>Les deux conditions doivent être vraies.</span><pre class="module1-code"><code>age ≥ 18 ET permis = VRAI</code></pre></div><div><code>OU</code><span>Au moins une condition doit être vraie.</span><pre class="module1-code"><code>jour = "samedi" OU jour = "dimanche"</code></pre></div><div><code>NON</code><span>Inverse une condition.</span><pre class="module1-code"><code>NON connecté</code></pre></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Boucle · Pourquoi répéter">
  <p class="eyebrow">23 · Répéter intelligemment</p>
  <h2>Une boucle évite<br /><span>de recopier la même instruction</span></h2>
  <div class="repeat-compare"><div><b>Sans boucle</b><pre class="module1-code"><code>ÉCRIRE 1
ÉCRIRE 2
ÉCRIRE 3
ÉCRIRE 4
ÉCRIRE 5</code></pre></div><div><b>Avec une boucle</b><pre class="module1-code"><code>POUR i ← 1 À 5 FAIRE
    ÉCRIRE i
FINPOUR</code></pre></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Boucle · POUR">
  <p class="eyebrow">24 · Nombre de répétitions connu</p>
  <h2>La boucle <code>POUR</code> répète<br /><span>un nombre déterminé de fois</span></h2>
  <pre class="module1-code"><code>POUR i ← 1 À 5 FAIRE
    ÉCRIRE "Étape", i
FINPOUR</code></pre>
  <div class="loop-result"><span>Étape 1</span><span>Étape 2</span><span>Étape 3</span><span>Étape 4</span><span>Étape 5</span></div>
</article>
<article class="slide module1-slide module1-content" data-title="Boucle · TANT QUE">
  <p class="eyebrow">25 · Condition vérifiée avant</p>
  <h2><code>TANT QUE</code> répète<br /><span>pendant que la condition est vraie</span></h2>
  <pre class="module1-code"><code>i ← 1

TANT QUE i ≤ 5 FAIRE
    ÉCRIRE i
    i ← i + 1
FINTANTQUE</code></pre>
  <div class="loop-rule"><b>Attention</b><span>Le compteur doit changer. Sinon, la boucle peut devenir infinie.</span></div>
</article>
<article class="slide module1-slide module1-content" data-title="Boucle · FAIRE TANT QUE">
  <p class="eyebrow">26 · Condition vérifiée après</p>
  <h2><code>FAIRE…TANT QUE</code> exécute<br /><span>au moins une fois</span></h2>
  <pre class="module1-code"><code>FAIRE
    ÉCRIRE "Entrez le mot de passe :"
    LIRE motDePasse
TANT QUE motDePasse ≠ "1234"

ÉCRIRE "Accès autorisé"</code></pre>
  <div class="loop-rule"><b>Idéal pour</b><span>Un menu, une saisie ou une validation qui doit être proposée au moins une fois.</span></div>
</article>
<article class="slide module1-slide module1-content" data-title="Boucles · Comparaison">
  <p class="eyebrow">27 · Choisir la bonne boucle</p>
  <h2>Trois boucles,<br /><span>trois situations</span></h2>
  <div class="loop-table"><div><code>POUR</code><b>Compter</b><span>Afficher les nombres de 1 à 10.</span></div><div><code>TANT QUE</code><b>Attendre une condition</b><span>Continuer tant que le stock est disponible.</span></div><div><code>FAIRE…TANT QUE</code><b>Valider une saisie</b><span>Demander au moins une fois un mot de passe.</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Tableau · Définition">
  <p class="eyebrow">28 · Ranger plusieurs valeurs</p>
  <h2>Un tableau regroupe<br /><span>des données du même ensemble</span></h2>
  <pre class="module1-code"><code>notes ← [12, 15, 10, 18]
prix ← [8.50, 12.00, 4.75]</code></pre>
  <div class="array-visual"><div><small>notes</small><b>12</b></div><div><small>notes</small><b>15</b></div><div><small>notes</small><b>10</b></div><div><small>notes</small><b>18</b></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Tableau · Index">
  <p class="eyebrow">29 · Accéder à une valeur</p>
  <h2>L’index indique<br /><span>la position d’un élément</span></h2>
  <div class="indexed-array"><div><small>index 0</small><b>12</b></div><div><small>index 1</small><b>15</b></div><div><small>index 2</small><b>10</b></div><div><small>index 3</small><b>18</b></div></div>
  <pre class="module1-code"><code>ÉCRIRE notes[1]
Résultat : 15</code></pre>
  <p class="module1-note">Dans ce module, le premier index est 0 : le premier élément est donc accessible avec <code>notes[0]</code>.</p>
</article>
<article class="slide module1-slide module1-content" data-title="Tableau · Opérations">
  <p class="eyebrow">30 · Parcourir et calculer</p>
  <h2>Une boucle permet<br /><span>de traiter tout le tableau</span></h2>
  <pre class="module1-code"><code>somme ← 0

POUR i ← 0 À 3 FAIRE
    somme ← somme + notes[i]
FINPOUR

moyenne ← somme / 4
ÉCRIRE moyenne</code></pre>
  <div class="array-results"><span>Somme : 55</span><span>Moyenne : 13.75</span><span>Maximum : 18</span></div>
</article>
<article class="slide module1-slide module1-content" data-title="Trace RAM · Suivre l’exécution">
  <p class="eyebrow">31 · Observer les valeurs</p>
  <h2>Une trace RAM montre<br /><span>ce qui change à chaque étape</span></h2>
  <pre class="module1-code"><code>a ← 5
b ← 3
total ← a + b
total ← total × 2</code></pre>
  <table class="trace-table"><thead><tr><th>Instruction</th><th>a</th><th>b</th><th>total</th></tr></thead><tbody><tr><td>a ← 5</td><td>5</td><td>—</td><td>—</td></tr><tr><td>b ← 3</td><td>5</td><td>3</td><td>—</td></tr><tr><td>total ← a + b</td><td>5</td><td>3</td><td>8</td></tr><tr><td>total ← total × 2</td><td>5</td><td>3</td><td>16</td></tr></tbody></table>
</article>
<article class="slide module1-slide module1-content" data-title="Projet · Résultats d’un étudiant">
  <p class="eyebrow">32 · Projet intégré</p>
  <h2>Construire un algorithme<br /><span>de résultats scolaires</span></h2>
  <div class="project-brief"><div><b>Entrées</b><span>Cinq notes saisies par l’utilisateur.</span></div><div><b>Traitements</b><span>Somme, moyenne et meilleure note.</span></div><div><b>Décision</b><span>Admis si la moyenne est au moins 10.</span></div><div><b>Sorties</b><span>Moyenne, meilleure note et décision.</span></div></div>
  <pre class="module1-code"><code>notes ← [12, 15, 10, 18, 9]
somme ← 0

POUR i ← 0 À 4 FAIRE
    somme ← somme + notes[i]
FINPOUR

moyenne ← somme / 5
ÉCRIRE moyenne</code></pre>
</article>
<article class="slide module1-slide module1-content" data-title="Erreurs fréquentes">
  <p class="eyebrow">33 · Déboguer</p>
  <h2>Une erreur est une piste<br /><span>pour améliorer l’algorithme</span></h2>
  <div class="error-list"><div><code>total ← prix1 + prix2</code><span>Erreur : les prix n’ont pas encore été lus.</span></div><div><code>TANT QUE i ≤ 5</code><span>Erreur possible : <code>i</code> n’est jamais augmenté.</span></div><div><code>notes[4]</code><span>Erreur possible : le tableau ne contient que quatre notes (indices 0 à 3).</span></div><div><code>moyenne ← somme / 0</code><span>Erreur : division impossible par zéro.</span></div></div>
</article>
<article class="slide module1-slide module1-content" data-title="Exercices guidés">
  <p class="eyebrow">34 · À toi de pratiquer</p>
  <h2>Résous ces problèmes<br /><span>en plusieurs étapes</span></h2>
  <div class="exercise-list module1-exercises"><div><b>01</b><p>Lire un âge et afficher l’âge dans cinq ans.</p><em>Variables + LIRE + ÉCRIRE</em></div><div><b>02</b><p>Lire un nombre et afficher s’il est pair ou impair.</p><em>Condition</em></div><div><b>03</b><p>Afficher les nombres de 1 à 20.</p><em>Boucle POUR</em></div><div><b>04</b><p>Calculer la moyenne du tableau [10, 12, 14].</p><em>Tableau + boucle</em></div><div><b>05</b><p>Demander un mot de passe jusqu’à ce qu’il soit correct.</p><em>FAIRE…TANT QUE</em></div></div>
</article>
<article class="slide module1-slide module1-content quiz-slide" data-title="Quiz · Vérification">
  <p class="eyebrow">35 · Vérifier la compréhension</p>
  <h2>Quiz : lis l’algorithme<br /><span>comme un ordinateur</span></h2>
  <div class="quiz standalone-quiz" data-answer="b">
    <div class="quiz-head"><span>QUIZ MODULE 1</span><small>Une seule réponse</small></div>
    <p>Quelle boucle exécute son contenu au moins une fois ?</p>
    <div class="choices"><button data-choice="a">TANT QUE</button><button data-choice="b">FAIRE…TANT QUE</button><button data-choice="c">POUR</button></div><div class="feedback"></div>
  </div>
</article>
<article class="slide module1-slide module1-content" data-title="Récapitulatif du module">
  <p class="eyebrow">36 · Les idées essentielles</p>
  <h2>Tu sais maintenant<br /><span>lire un algorithme</span></h2>
  <div class="recap-list module1-recap"><div><b>01</b><span>Un algorithme décrit une solution étape par étape.</span></div><div><b>02</b><span>Une instruction correspond à une action.</span></div><div><b>03</b><span><code>LIRE</code> reçoit une donnée et <code>ÉCRIRE</code> affiche une information.</span></div><div><b>04</b><span>Une variable possède un nom, une valeur et un type.</span></div><div><b>05</b><span>Les conditions décident et les boucles répètent.</span></div><div><b>06</b><span>Un tableau rassemble des valeurs et la trace RAM suit leur évolution.</span></div></div>
</article>
<article class="slide module1-slide module1-final" data-title="Défi final · Écrire un algorithme">
  <p class="eyebrow">37 · Pour aller plus loin</p>
  <h2>Défi final :<br /><span>écris ta propre solution</span></h2>
  <p class="module1-lead">Crée un algorithme qui lit les prix de trois produits, calcule le total, applique une réduction si le total dépasse 200 DH, puis affiche le prix à payer.</p>
  <div class="final-checklist"><span>☐ Entrées identifiées</span><span>☐ Variables choisies</span><span>☐ Calcul écrit</span><span>☐ Condition ajoutée</span><span>☐ Résultat affiché</span></div>
  <div class="finish-box module1-finish">✓ Module 1 terminé<br /><small>Tu es prêt à traduire tes algorithmes vers un langage de programmation.</small></div>
</article>
`;

const module1Container = document.querySelector("#slides-container");
if (module1Container) {
  // Module 0 continues after the "Programme" slide with its quiz,
  // recap, and exercises. Append Module 1 only after that complete block.
  module1Container.insertAdjacentHTML("beforeend", module1Markup);
}
