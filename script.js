const historyExtension = `
<article class="slide visual-slide history-slide" data-title="Histoire · Le problème"><div class="visual-copy"><p class="eyebrow">11 · Pourquoi inventer ?</p><h2>Le problème avant<br /><span>la machine</span></h2><p>Les humains savaient calculer, mais les calculs longs demandaient du temps et produisaient des erreurs. Les astronomes, commerçants et administrations avaient besoin de tables fiables, copiées encore et encore à la main.</p><div class="history-facts"><div><b>Le besoin</b><span>Répéter les mêmes opérations sur de très grands nombres.</span></div><div><b>La limite humaine</b><span>Une personne peut comprendre une règle, mais elle se fatigue en l’appliquant des milliers de fois.</span></div><div><b>La question</b><span>Peut-on confier les étapes répétitives à un outil qui suit toujours la même méthode ?</span></div></div></div><div class="art-panel wide-art"><img src="assets/history-abacus.png" alt="Outil ancien utilisé pour aider au calcul" /></div></article>
<article class="slide visual-slide history-slide" data-title="Histoire · La solution mécanique"><div class="visual-copy"><p class="eyebrow">11 · Problème → solution</p><h2>Une machine qui<br /><span>ne se fatigue pas</span></h2><p>Le boulier aide l’humain à représenter les nombres. Plus tard, les engrenages permettent de déplacer automatiquement des chiffres. La machine de Babbage, appelée <strong>Difference Engine</strong>, a été pensée pour produire des tables mathématiques avec moins d’erreurs de copie.</p><div class="note"><b>Ce qu’elle résout</b><span>Elle automatise un calcul répétitif. Mais elle reste spécialisée : elle ne comprend pas encore tous les programmes modernes.</span></div><p class="history-caption">L’idée nouvelle est essentielle : une procédure peut être inscrite dans la structure d’une machine.</p></div><div class="art-panel wide-art"><img src="assets/history-mechanical.png" alt="Machine mécanique à engrenages inspirée des premières machines à calculer" /></div></article>
<article class="slide visual-slide history-slide" data-title="Histoire · La solution électronique"><div class="visual-copy"><p class="eyebrow">11 · Changer d’échelle</p><h2>De l’engrenage<br /><span>à l’électron</span></h2><p>Quand les problèmes deviennent plus grands, les engrenages ne suffisent plus. Les machines électroniques utilisent des composants électriques pour représenter et manipuler rapidement des données.</p><div class="history-facts"><div><b>Plus vite</b><span>Les signaux électriques se déplacent bien plus rapidement que des pièces mécaniques.</span></div><div><b>Plus général</b><span>Une même machine peut exécuter des suites d’instructions différentes.</span></div><div><b>Le nouveau défi</b><span>Il faut alors inventer une mémoire, des langages et des méthodes pour programmer la machine.</span></div></div></div><div class="art-panel wide-art"><img src="assets/history-electronic.png" alt="Ordinateur électronique historique dans une grande salle" /></div></article>
<article class="slide visual-slide history-slide" data-title="Histoire · L’accumulation"><div class="visual-copy"><p class="eyebrow">11 · Jusqu’à aujourd’hui</p><h2>Chaque solution<br /><span>prépare la suivante</span></h2><p>Le boulier représente les nombres. Les engrenages automatisent les opérations. L’électronique accélère le traitement. Les transistors et les circuits intégrés miniaturisent la machine. Le microprocesseur rend l’ordinateur personnel, puis Internet les relie.</p><div class="history-facts"><div><b>Hier</b><span>Une machine spécialisée résout un problème précis.</span></div><div><b>Ensuite</b><span>Une machine programmable peut résoudre de nombreux problèmes.</span></div><div><b>Aujourd’hui</b><span>Nos téléphones, serveurs et systèmes d’IA combinent calcul, mémoire, réseau et logiciels.</span></div></div></div><div class="art-panel wide-art"><img src="assets/history-personal.png" alt="Évolution des ordinateurs personnels vers les appareils connectés" /></div></article>
<article class="slide resources-slide" data-title="Histoire · Démonstrations"><p class="eyebrow">11 · À explorer</p><h2>Voir les machines<br /><span>en action</span></h2><p class="quiz-instruction">Ces ressources externes permettent de manipuler ou d’observer les idées vues dans cette histoire.</p><div class="resource-list"><a href="https://www.genieacademy.com/abacus-simulator" target="_blank" rel="noopener"><span>🧮</span><div><strong>Online Abacus Simulator</strong><small>Déplace les billes et observe comment les positions représentent les nombres.</small></div><b>↗</b></a><a href="https://www.kani-math.com/abacus/how-to-use" target="_blank" rel="noopener"><span>🔢</span><div><strong>Kani Math · How to Use an Abacus</strong><small>Parcours guidé pour comprendre unités, dizaines et report.</small></div><b>↗</b></a><a href="https://www.youtube.com/watch?v=BlbQsKpq3Ak" target="_blank" rel="noopener"><span>⚙️</span><div><strong>Difference Engine · démonstration</strong><small>Une machine de Babbage reconstruite est montrée en fonctionnement.</small></div><b>↗</b></a><a href="https://www.computerhistory.org/timeline/" target="_blank" rel="noopener"><span>🗓️</span><div><strong>Computer History Museum · Timeline</strong><small>Explore les événements par année et par catégorie, des premiers systèmes au Web.</small></div><b>↗</b></a></div><div class="mini-challenge"><strong>Mission d’observation</strong><span>Après une démonstration, note : quelle information entre, quelle opération se produit, et quel résultat sort ?</span></div></article>
`;
const oldHistorySlides = [...document.querySelectorAll('.history-slide')];
const historyAnchor = oldHistorySlides[0];
historyAnchor.insertAdjacentHTML('beforebegin', historyExtension);
oldHistorySlides.forEach((slide) => slide.remove());

const resourceSlide = document.querySelector('.resources-slide');
resourceSlide.innerHTML = `
  <p class="eyebrow">11 · Démonstrations</p>
  <h2>Voir les machines<br /><span>en action</span></h2>
  <p class="quiz-instruction">Regarde une démonstration, puis réponds : quel problème la machine essaie-t-elle de résoudre ?</p>
  <div class="video-grid">
    <article class="video-card"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/wxsS-gmz554?rel=0" title="Démonstration : comment fonctionne un boulier" loading="lazy" allowfullscreen></iframe></div><strong>Le boulier</strong><small>Observer comment les positions des billes représentent les unités, dizaines et centaines.</small></article>
    <article class="video-card"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/MjkcrmQDd0c?rel=0" title="Démonstration de la Difference Engine de Charles Babbage" loading="lazy" allowfullscreen></iframe></div><strong>La Difference Engine</strong><small>Voir les engrenages automatiser un calcul répétitif, sans logiciel moderne.</small></article>
    <article class="video-card"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/k4oGI_dNaPc?rel=0" title="Présentation de l’ENIAC, premier ordinateur électronique" loading="lazy" allowfullscreen></iframe></div><strong>L’ENIAC</strong><small>Comprendre pourquoi les premiers ordinateurs étaient immenses et construits pour traiter des calculs lourds.</small></article>
  </div>
  <a class="timeline-link" href="https://www.computerhistory.org/timeline/" target="_blank" rel="noopener">Explorer la timeline complète du Computer History Museum ↗</a>
`;

const historyLabels = ['Le besoin', 'Les machines', 'L’électronique', 'Aujourd’hui'];
const historyTitles = {
  'Histoire · Le problème': ['Pourquoi inventer une machine ?', 'Avant les ordinateurs, les calculs longs prenaient du temps et provoquaient des erreurs.'],
  'Histoire · La solution mécanique': ['Les machines mécaniques', 'Les engrenages automatisent des opérations répétitives. La machine de Babbage voulait produire des tables fiables.'],
  'Histoire · La solution électronique': ['Les premiers ordinateurs électroniques', 'L’électricité permet de traiter beaucoup plus vite et de suivre des instructions programmées.'],
  'Histoire · L’accumulation': ['Des inventions jusqu’à aujourd’hui', 'Chaque étape ajoute une capacité : représenter, calculer, mémoriser, programmer et communiquer.']
};
document.querySelectorAll('.history-slide').forEach((slide, index) => {
  const title = historyTitles[slide.dataset.title];
  if (title) {
    slide.querySelector('h2').innerHTML = title[0];
    const description = slide.querySelector('.visual-copy > p:not(.eyebrow)');
    if (description) description.textContent = title[1];
  }
  const stepper = document.createElement('div');
  stepper.className = 'history-stepper';
  stepper.innerHTML = historyLabels.map((label, step) => `<span class="${step === index ? 'active' : ''}"><b>${step + 1}</b>${label}</span>`).join('');
  slide.prepend(stepper);
});
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
      feedback.textContent = isCorrect ? '✓ Bravo ! Tu as compris.' : 'Pas encore. Relis l’idée et essaie à nouveau.';
    });
  });
});

showSlide(0);
