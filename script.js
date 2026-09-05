const historyExtension = `
<article class="slide visual-slide history-slide history-hero" data-title="Histoire · Pourquoi inventer ?"><div class="visual-copy"><p class="eyebrow">11 · Pourquoi inventer ?</p><h2>Des outils pour<br /><span>penser plus vite</span></h2><p>Les ordinateurs ne sont pas apparus par magie. Pendant des siècles, les humains ont cherché à représenter les nombres, automatiser les calculs et réduire les erreurs.</p><div class="history-facts"><div><b>Le besoin</b><span>Répéter des opérations sur de très grands nombres.</span></div><div><b>La question</b><span>Comment faire suivre une méthode à une machine ?</span></div><div><b>Le fil rouge</b><span>Représenter · calculer · mémoriser · programmer.</span></div></div></div><div class="art-panel wide-art"><img src="assets/history-timeline.png" alt="Frise illustrée de l’histoire des ordinateurs" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid'"><div class="art-fallback">HISTOIRE<br><small>DES MACHINES</small></div></div></article>
<article class="slide visual-slide history-slide" data-title="Histoire · Du boulier au transistor"><div class="visual-copy"><p class="eyebrow">11 · 1 — Représenter</p><h2>Du boulier<br /><span>au transistor</span></h2><p>Le boulier représente une quantité avec la position de ses billes. Les engrenages de Pascal et de Babbage automatisent ensuite certaines opérations. Puis les tubes électroniques et les transistors remplacent le mouvement par des signaux électriques.</p><div class="timeline-strip"><span>🧮 Boulier</span><i>→</i><span>⚙️ Engrenages</span><i>→</i><span>💡 Électronique</span></div><div class="note"><b>Idée clé</b><span>Une information peut être portée par une position, un mouvement ou un signal.</span></div></div><div class="art-panel wide-art"><img src="assets/history-timeline.png" alt="Boulier, engrenages et électronique reliés dans une frise"></div></article>
<article class="slide visual-slide history-slide" data-title="Histoire · Le transistor"><div class="visual-copy"><p class="eyebrow">11 · 2 — Changer d’échelle</p><h2>Le transistor :<br /><span>de 0 ou 1 au registre</span></h2><p>Un transistor contrôle le passage du courant. Il agit comme un interrupteur extrêmement rapide : courant absent, on note <strong>0</strong> ; courant présent, on note <strong>1</strong>.</p><p>Un <strong>registre</strong> rassemble plusieurs cellules capables de conserver ces 0 et 1. Huit cellules peuvent ainsi présenter un nombre binaire, par exemple <code>10110010</code>.</p><div class="bit-pair"><div><b>0</b><span>OFF · pas de signal</span></div><div><b>1</b><span>ON · signal présent</span></div></div><div class="note"><b>Lis l’image de gauche à droite</b><span>Transistor = interrupteur → signal 0/1 → registre = plusieurs bits conservés ensemble.</span></div></div><div class="art-panel wide-art"><img src="assets/transistor-register-v3.png" alt="Un transistor produit un signal 0 ou 1 puis huit transistors du registre présentent le nombre binaire 10110010"></div></article>
<article class="slide visual-slide history-slide" data-title="Histoire · Du transistor au microprocesseur"><div class="visual-copy"><p class="eyebrow">11 · 3 — Accumuler</p><h2>Des milliards de<br /><span>petits interrupteurs</span></h2><p>Un transistor seul ne fait presque rien. Des transistors assemblés forment des portes logiques ; des portes logiques forment des circuits ; les circuits forment un processeur et une mémoire.</p><div class="stack-flow"><span>Transistor</span><b>→</b><span>Porte logique</span><b>→</b><span>Circuit</span><b>→</b><span>CPU</span></div><div class="history-facts"><div><b>1950–60</b><span>Les transistors rendent les ordinateurs plus fiables.</span></div><div><b>1970+</b><span>Le microprocesseur rassemble le calcul sur une puce.</span></div></div></div><div class="art-panel wide-art"><img src="assets/transistor-to-cpu.png" alt="Un transistor devient une porte logique, puis un circuit et enfin un CPU"></div></article>
<article class="slide visual-slide data-slide" data-title="Données · Le bit et le binaire"><div class="visual-copy"><p class="eyebrow">11 · 4 — Représenter un nombre</p><h2>Tout commence<br />avec <span>0 et 1</span></h2><p>Un <strong>bit</strong> est un chiffre binaire : il vaut 0 ou 1. Avec plusieurs bits, on obtient davantage de combinaisons. Les positions correspondent aux puissances de 2.</p><div class="binary-demo"><div class="binary-row"><span>1</span><span>1</span><span>0</span><span>1</span></div><div class="place-row"><small>8</small><small>4</small><small>2</small><small>1</small></div><strong>8 + 4 + 0 + 1 = 13</strong></div></div><div class="art-panel wide-art"><img src="assets/binary-switches.png" alt="Transformation visuelle des interrupteurs en nombre binaire"></div><div class="quiz compact-quiz conversion-quiz" data-answer="b"><div class="quiz-head"><span>EXERCICE 01</span><small>Convertis</small></div><p>Quelle écriture binaire représente le nombre 10 ?</p><div class="choices"><button data-choice="a">1001</button><button data-choice="b">1010</button><button data-choice="c">1100</button></div><div class="feedback"></div></div></article>
<article class="slide visual-slide data-slide" data-title="Données · Convertir les nombres"><div class="visual-copy"><p class="eyebrow">11 · 5 — Atelier binaire</p><h2>Convertir <span>10</span><br />dans les deux sens</h2><p>On utilise les puissances de 2 : <strong>8, 4, 2, 1</strong>. Chaque position reçoit un 1 si on la choisit, ou un 0 sinon.</p><div class="conversion-steps"><div><b>10₁₀ → binaire</b><ol><li>10 contient 8 → reste 2, premier bit = 1.</li><li>2 ne contient pas 4 → bit = 0.</li><li>2 contient 2 → reste 0, bit = 1.</li><li>Il reste 0 → bit des unités = 0.</li></ol><code>10₁₀ = 1010₂</code></div><div><b>1010₂ → décimal</b><ol><li>1 × 8 = 8</li><li>0 × 4 = 0</li><li>1 × 2 = 2</li><li>0 × 1 = 0</li></ol><code>8 + 0 + 2 + 0 = 10</code></div></div></div><div class="art-panel wide-art"><img src="assets/binary-switches.png" alt="Atelier visuel de conversion entre décimal et binaire"></div><div class="quiz compact-quiz" data-answer="c"><div class="quiz-head"><span>EXERCICE 02</span><small>Décode</small></div><p>Combien vaut <code>11100₂</code> en décimal ?</p><div class="choices"><button data-choice="a">24</button><button data-choice="b">26</button><button data-choice="c">28</button></div><div class="feedback"></div></div></article>
<article class="slide visual-slide data-slide" data-title="Données · Le texte"><div class="visual-copy"><p class="eyebrow">11 · 6 — Représenter du texte</p><h2>Une lettre est<br /><span>un nombre codé</span></h2><p>Le clavier envoie un code, pas une lettre dessinée. Un standard associe chaque caractère à un nombre ; ce nombre est ensuite stocké en binaire.</p><div class="encoding-flow"><span>A</span><b>→</b><span>65</span><b>→</b><code>01000001</code></div><div class="note"><b>ASCII et Unicode</b><span>ASCII couvre les caractères courants. Unicode ajoute les accents, les alphabets du monde entier et les emojis.</span></div></div><div class="art-panel wide-art"><img src="assets/binary-switches.png" alt="Illustration de caractères transformés en codes numériques"></div><div class="quiz compact-quiz" data-answer="a"><div class="quiz-head"><span>EXERCICE 03</span><small>Décode</small></div><p>Dans l’exemple, quel nombre représente la lettre A ?</p><div class="choices"><button data-choice="a">65</button><button data-choice="b">10</button><button data-choice="c">101</button></div><div class="feedback"></div></div></article>
<article class="slide visual-slide data-slide" data-title="Données · Les images"><div class="visual-copy"><p class="eyebrow">11 · 7 — Représenter une image</p><h2>Une image devient<br /><span>une grille de pixels</span></h2><p>Une image numérique est une grille de petits carrés. Chaque pixel reçoit une valeur. En noir et blanc, 0 peut signifier blanc et 1 noir. En couleur, RGB donne l’intensité du rouge, du vert et du bleu.</p><div class="rgb-cards"><span>⚫<small>RGB(0, 0, 0)</small></span><span>🔴<small>RGB(255, 0, 0)</small></span><span>⚪<small>RGB(255, 255, 255)</small></span></div></div><div class="art-panel wide-art"><img src="assets/pixels-rgb.png" alt="Grille de pixels et canaux de couleur RGB"></div><div class="quiz compact-quiz" data-answer="b"><div class="quiz-head"><span>EXERCICE 04</span><small>Comprends RGB</small></div><p>Quelle valeur représente le rouge pur ?</p><div class="choices"><button data-choice="a">RGB(0, 255, 0)</button><button data-choice="b">RGB(255, 0, 0)</button><button data-choice="c">RGB(0, 0, 255)</button></div><div class="feedback"></div></div></article>
<article class="slide visual-slide data-slide" data-title="Données · Son et vidéo"><div class="visual-copy"><p class="eyebrow">11 · 8 — Étendre l’idée</p><h2>Le son et la vidéo<br /><span>sont aussi des nombres</span></h2><p>Un micro mesure un son plusieurs milliers de fois par seconde et stocke ces mesures. Une vidéo est une suite d’images accompagnées de son et de temps.</p><div class="media-flow"><span>🎙️ Son</span><b>→</b><span>📊 Mesures</span><b>+</b><span>🖼️ Images</span><b>→</b><span>🎬 Vidéo</span></div><div class="note"><b>À retenir</b><span>Quel que soit le média, la machine manipule des nombres et des bits.</span></div></div><div class="art-panel wide-art"><img src="assets/pixels-rgb.png" alt="Représentation numérique d’images, de son et de vidéo"></div></article>
<article class="slide quiz-slide history-slide" data-title="Données · Défi final"><p class="eyebrow">11 · Vérification</p><h2>Le défi :<br /><span>décode le monde numérique</span></h2><p class="quiz-instruction">Associe chaque information à la manière dont l’ordinateur la représente.</p><div class="quiz standalone-quiz" data-answer="c"><div class="quiz-head"><span>QUIZ MODULE 0</span><small>Une idée commune</small></div><p>Quel énoncé est correct ?</p><div class="choices"><button data-choice="a">Seuls les nombres peuvent être stockés en binaire.</button><button data-choice="b">Une image est stockée comme une photo physique dans l’ordinateur.</button><button data-choice="c">Nombres, lettres, images et sons sont transformés en données numériques.</button></div><div class="feedback"></div></div><div class="mini-challenge"><strong>Défi express</strong><span>Explique le trajet complet de la lettre A : caractère → code → binaire.</span></div></article>
`;

const oldHistorySlides = [...document.querySelectorAll('.history-slide')];
const historyAnchor = oldHistorySlides[0];
const cleanedHistoryExtension = historyExtension
  .replace(/<p>Un <strong>registre[\s\S]*?<\/p>/, '')
  .replace(/de 0 ou 1 au registre/g, 'un interrupteur électronique')
  .replace(/transistor-register-v3\.png/g, 'transistor-only.png')
  .replace(/Un transistor produit un signal 0 ou 1 puis huit transistors du registre présentent le nombre binaire 10110010/g, 'Illustration d’un transistor contrôlant un signal électrique 0 ou 1');
historyAnchor.insertAdjacentHTML('beforebegin', cleanedHistoryExtension);
oldHistorySlides.forEach((slide) => slide.remove());

const module11Titles = [
  '11.1 · Pourquoi inventer ?',
  '11.2 · Du boulier au transistor',
  '11.3 · Le transistor, 0 et 1',
  '11.4 · Du transistor au CPU',
  '11.5 · Le bit et le binaire',
  '11.6 · Convertir le nombre 10',
  '11.7 · Encoder le texte',
  '11.8 · Encoder une image',
  '11.9 · Son et vidéo',
  '11.10 · Défi final'
];
const module11Headings = [
  'Pourquoi créer un ordinateur ?',
  'Du boulier <span>au transistor</span>',
  'Transistor <span>et registre</span>',
  'Du transistor <span>au CPU</span>',
  'Binaire : <span>0 et 1</span>',
  'Convertir <span>10 ↔ 1010</span>',
  'Texte <span>en nombres</span>',
  'Images <span>en pixels</span>',
  'Son et vidéo <span>en bits</span>',
  'Défi : <span>décoder</span>'
];
document.querySelectorAll('.history-slide').forEach((slide, index) => {
  if (module11Titles[index]) slide.dataset.title = module11Titles[index];
  if (module11Headings[index]) slide.querySelector('h2').innerHTML = module11Headings[index];
});

const harderModule11Quizzes = [
  { prompt: 'Quelle valeur décimale représente 11010110₂ ?', choices: ['198', '214', '226'], answer: 'b' },
  { prompt: 'Quelle valeur décimale représente 101101₂ ?', choices: ['41', '43', '45'], answer: 'c' },
  { prompt: 'Que forme la suite ASCII 67 · 79 · 68 · 69 ?', choices: ['DATA', 'CODE', 'CPU'], answer: 'b' },
  { prompt: 'Une image 2 × 2 en RGB utilise 8 bits par canal. Combien de bits faut-il ?', choices: ['12 bits', '48 bits', '96 bits'], answer: 'b' },
  { prompt: 'Pourquoi un registre de 8 bits peut-il représenter 256 valeurs différentes ?', choices: ['Parce que 8 + 8 = 16', 'Parce que 2⁸ = 256', 'Parce qu’un bit vaut toujours 256'], answer: 'b' }
];
document.querySelectorAll('.history-slide .quiz').forEach((quiz, index) => {
  const challenge = harderModule11Quizzes[index];
  if (!challenge) return;
  quiz.dataset.answer = challenge.answer;
  quiz.querySelector('p').textContent = challenge.prompt;
  quiz.querySelectorAll('[data-choice]').forEach((button, choiceIndex) => {
    button.textContent = challenge.choices[choiceIndex];
    button.dataset.choice = String.fromCharCode(97 + choiceIndex);
  });
});

const exercisesSlide = document.querySelector('.exercises-slide');
if (exercisesSlide) {
  exercisesSlide.querySelector('.exercise-intro').textContent = 'Résous ces défis en détaillant ton raisonnement. Les réponses doivent expliquer la représentation des données.';
  exercisesSlide.querySelector('.exercise-list').innerHTML = `
    <div><span>01</span><p>Convertis 45 en binaire en utilisant les positions 32, 16, 8, 4, 2 et 1. Vérifie ton résultat en revenant au décimal.</p><em>Intermédiaire</em></div>
    <div><span>02</span><p>Décode 11010110₂ en décimal, puis indique le nombre maximum représentable avec 8 bits non signés.</p><em>Intermédiaire</em></div>
    <div><span>03</span><p>Avec ASCII, décode la suite 67 · 79 · 68 · 69. Explique les trois étapes : caractère, code numérique, binaire.</p><em>Challenge</em></div>
    <div><span>04</span><p>Une image fait 1920 × 1080 pixels et utilise 24 bits par pixel. Calcule sa taille brute en bits puis en octets.</p><em>Challenge</em></div>
    <div><span>05</span><p>Explique comment des transistors peuvent former une porte logique, un circuit puis un CPU. Utilise un exemple d’opération logique.</p><em>Expert</em></div>`;
}

const programQuiz = document.querySelector('.slide[data-title="Quiz · Programme"] .quiz');
if (programQuiz) {
  programQuiz.dataset.answer = 'b';
  programQuiz.querySelector('p').textContent = 'Tu saisis 10110₂ + 00111₂ dans une calculatrice qui affiche le résultat en décimal. Que se passe-t-il ?';
  const programChoices = [
    'Le clavier additionne les deux nombres et affiche directement une image.',
    'Le CPU traite les bits en mémoire, puis la sortie convertit 11101₂ en 29.',
    'Le stockage calcule seul le résultat, sans programme ni mémoire.'
  ];
  programQuiz.querySelectorAll('[data-choice]').forEach((button, index) => {
    button.textContent = programChoices[index];
    button.dataset.choice = String.fromCharCode(97 + index);
  });
}

const applicationsQuiz = document.querySelector('.slide[data-title="Applications"] .quiz');
if (applicationsQuiz) {
  applicationsQuiz.dataset.answer = 'c';
  applicationsQuiz.querySelector('p').textContent = 'Tu veux écrire, exécuter et corriger un programme Python. Quel outil est le plus adapté ?';
  const applicationChoices = [
    'Un lecteur audio avec un fichier .py en pièce jointe.',
    'Un éditeur de texte sans coloration ni interpréteur Python.',
    'Un éditeur de code ou un IDE configuré avec Python.'
  ];
  applicationsQuiz.querySelectorAll('[data-choice]').forEach((button, index) => {
    button.textContent = applicationChoices[index];
    button.dataset.choice = String.fromCharCode(97 + index);
  });
}

const computerQuiz = document.querySelector('.slide[data-title="Ordinateur"] .quiz');
if (computerQuiz) {
  computerQuiz.dataset.answer = 'b';
  const computerChoices = [
    'Exécuter uniquement des calculs numériques et conserver le résultat.',
    'Transformer des données reçues en résultats grâce à des instructions.',
    'Décider seul du but, des règles et de la signification des données.'
  ];
  computerQuiz.querySelectorAll('[data-choice]').forEach((button, index) => {
    button.textContent = computerChoices[index];
    button.dataset.choice = String.fromCharCode(97 + index);
  });
}

const historyLabels = ['Pourquoi', 'Transistor', 'Binaire', 'Données'];
document.querySelectorAll('.history-slide').forEach((slide, index) => {
  const stepper = document.createElement('div');
  stepper.className = 'history-stepper';
  stepper.innerHTML = historyLabels.map((label, step) => `<span class="${step === Math.min(index, 3) ? 'active' : ''}"><b>${step + 1}</b>${label}</span>`).join('');
  slide.prepend(stepper);
});

// Keep the transistor lesson focused on the transistor itself.
const transistorLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.querySelector('h2')?.textContent.includes('registre'));
if (transistorLesson) {
  transistorLesson.dataset.title = '11.3 · Le transistor : interrupteur électronique';
  transistorLesson.querySelector('h2').innerHTML = 'Le transistor :<br /><span>un interrupteur électronique</span>';
  transistorLesson.querySelectorAll('p').forEach((paragraph) => {
    if (paragraph.textContent.includes('registre')) paragraph.remove();
  });
  const note = transistorLesson.querySelector('.note');
  if (note) note.innerHTML = '<b>À retenir</b><span>Un transistor agit comme un interrupteur rapide qui transforme le courant en signal 0/1.</span>';
  const image = transistorLesson.querySelector('img');
  if (image) {
    image.src = 'assets/transistor-only.png?v=20260904-generated';
    image.alt = 'Illustration d’un transistor contrôlant un signal électrique 0 ou 1';
  }
  const transistorQuiz = transistorLesson.querySelector('.quiz');
  if (transistorQuiz) {
    transistorQuiz.dataset.answer = 'a';
    transistorQuiz.querySelector('p').textContent = 'Que représente un transistor lorsqu’il contrôle le courant ?';
    const choices = ['Un interrupteur rapide', 'Un fichier permanent', 'Une image numérique'];
    transistorQuiz.querySelectorAll('[data-choice]').forEach((button, index) => {
      button.textContent = choices[index];
      button.dataset.choice = String.fromCharCode(97 + index);
    });
  }
}

const textEncodingLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.querySelector('h2')?.textContent.includes('nombre codé'));
if (textEncodingLesson) {
  const image = textEncodingLesson.querySelector('img');
  if (image) {
    image.src = 'assets/text-encoding-simple.png?v=20260904-generated';
    image.alt = 'La lettre A transformée en nombre puis en code binaire';
  }
}

const soundVideoLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.querySelector('h2')?.textContent.includes('son et la vidéo'));
if (soundVideoLesson) {
  const image = soundVideoLesson.querySelector('img');
  if (image) {
    image.src = 'assets/sound-video-simple.png?v=20260904-generated';
    image.alt = 'Une onde sonore et des images vidéo représentées comme des données';
  }
}

const whyInventLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.classList.contains('history-hero'));
if (whyInventLesson) {
  const image = whyInventLesson.querySelector('img');
  if (image) {
    image.src = 'assets/history-timeline.png?v=20260904-generated';
    image.alt = 'Progression simple du comptage vers les outils mécaniques puis l’ordinateur';
  }
}

const transistorSwitchLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.querySelector('h2')?.textContent.includes('interrupteur électronique'));
if (transistorSwitchLesson) {
  const image = transistorSwitchLesson.querySelector('img');
  if (image) {
    image.src = 'assets/transistor-only.png?v=20260904-generated';
    image.alt = 'Un transistor utilisé comme interrupteur électronique';
  }
}

const binaryLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.querySelector('h2')?.textContent.includes('Tout commence'));
if (binaryLesson) {
  const image = binaryLesson.querySelector('img');
  if (image) {
    image.src = 'assets/binary-switches.png?v=20260904-generated';
    image.alt = 'Les deux états binaires 0 et 1';
  }
}

const conversionLesson = [...document.querySelectorAll('.history-slide')].find((slide) => slide.querySelector('h2')?.textContent.includes('Convertir'));
if (conversionLesson) {
  const image = conversionLesson.querySelector('img');
  if (image) {
    image.src = 'assets/binary-switches.png?v=20260904-generated';
    image.alt = 'Conversion entre le nombre décimal 10 et le nombre binaire 1010';
  }
}

const slides = [...document.querySelectorAll('.slide')];
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const counter = document.querySelector('#slide-counter');
const progressBar = document.querySelector('#progress-bar');
const dots = document.querySelector('#dots');
const slideSelect = document.querySelector('#slide-select');
let currentSlide = 0;

slides.forEach((slide, index) => {
  const dot = document.createElement('i');
  dot.className = index === 0 ? 'active' : '';
  dots.append(dot);
  const option = document.createElement('option');
  option.value = index;
  option.textContent = `${String(index + 1).padStart(2, '0')} · ${slide.dataset.title}`;
  slideSelect.append(option);
});

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  [...dots.children].forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  counter.textContent = `Diapositive ${currentSlide + 1} sur ${slides.length}`;
  progressBar.style.transform = `scaleX(${(currentSlide + 1) / slides.length})`;
  dots.style.setProperty('--dots-progress', `${((currentSlide + 1) / slides.length) * 100}%`);
  slideSelect.value = currentSlide;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
  document.querySelector('.slides').focus({ preventScroll: true });
}
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
slideSelect.addEventListener('change', (event) => showSlide(Number(event.target.value)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') showSlide(currentSlide - 1);
  if (event.key === 'ArrowRight') showSlide(currentSlide + 1);
});
document.querySelectorAll('.quiz').forEach((quiz) => {
  const correct = quiz.dataset.answer;
  const feedback = quiz.querySelector('.feedback');
  quiz.querySelectorAll('[data-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      quiz.querySelectorAll('[data-choice]').forEach((choice) => choice.classList.remove('correct', 'wrong'));
      const isCorrect = button.dataset.choice === correct;
      button.classList.add(isCorrect ? 'correct' : 'wrong');
      feedback.className = `feedback ${isCorrect ? 'success' : 'error'}`;
      feedback.textContent = isCorrect ? '✓ Bravo ! Ton raisonnement est correct.' : 'Pas encore. Reprends la conversion étape par étape.';
    });
  });
});
showSlide(0);
