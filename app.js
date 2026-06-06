// ================================================================
// Music Form Atlas v1.2 — Atlas Core + Form Archetypes (Hybrid)
// ================================================================

// ===== CORE CONCEPTS =====
// Each concept: problem → decision → mistake → exercise → DAW prompt → track → buildsForms

const coreConcepts = [
  {
    id: "segmentation",
    title: "Segmentation",
    tagline: "Де закінчується одна ідея і починається інша?",
    rootProblem: "Організація музичного часу",
    problem: "Матеріал без меж не сприймається як форма. Segmentation перетворює потік на архітектуру.",
    decision: "«Де закінчується поточна ідея і де починається наступна?»",
    mistake: "Нескінченний луп без меж. Матеріал є — форми немає. Студент плутає «зробити звук» із «побудувати структуру».",
    exercise: [
      "Візьми один луп (16 тактів).",
      "Не змінюй матеріал.",
      "Тільки розстав межі: intro / core / outro.",
      "Мінімум 3 секції."
    ],
    assessment: "Чи може незнайомий слухач почути початок і кінець кожної секції без підказок?",
    dawPrompt: "Відкрий свою DAW. Прослухай перші 16 тактів. Чи змінюється щось на 8-му такті? Якщо ні — спробуй поставити межу на 8-му такті і послухай, як це змінює сприйняття форми.",
    canonicalTrack: {
      title: "Around the World",
      artist: "Daft Punk",
      year: 1997,
      sections: [
        { name: "Intro", bars: 16, note: "Межа: від тиші до ритму" },
        { name: "Core groove", bars: 32, note: "Межа: основний матеріал починається" },
        { name: "Filter sweep", bars: 16, note: "Межа: зміна текстури" },
        { name: "Core groove", bars: 32, note: "Межа: повернення" },
        { name: "Outro", bars: 16, note: "Межа: завершення" }
      ]
    },
    buildsForms: ["verse-chorus", "club-arc", "rondo"],
    color: "#5bbcff"
  },
  {
    id: "repetition",
    title: "Repetition",
    tagline: "Коли повернутися до матеріалу, який вже звучав?",
    rootProblem: "Баланс передбачуваності та новизни",
    problem: "Без повторення матеріал не засвоюється. Слухач не має точки опори — форма не «сідає».",
    decision: "«Яку секцію повернути, коли і скільки разів?»",
    mistake: "Два крайні варіанти: або матеріал не повторюється зовсім (форма не засвоюється слухачем), або повторюється занадто довго (форма не рухається).",
    exercise: [
      "Візьми дві секції (A та B).",
      "Побудуй A–A–B–A.",
      "Виміряй: скільки тактів виправдано для кожного A?",
      "При якій довжині третє A ще цікаве? При якій — вже нудне?"
    ],
    assessment: "Чи впізнає слухач повернення матеріалу? Чи не втрачає інтерес до третього повторення?",
    dawPrompt: "Відкрий свою DAW. Візьми секцію A і секцію B. Побудуй A–B–A–B–A. Скільки повторень витримує слухач без втрати інтересу? Де межа між «запам'яталось» і «набридло»?",
    canonicalTrack: {
      title: "Around the World",
      artist: "Daft Punk",
      year: 1997,
      sections: [
        { name: "Bass loop", bars: 16, note: "Повторення: басова лінія — основа" },
        { name: "Bass + beat", bars: 16, note: "Повторення: біт додається, бас триває" },
        { name: "Bass + beat + vox", bars: 16, note: "Повторення: вокал на тому ж loop" },
        { name: "Bass + beat + vox + hats", bars: 16, note: "Повторення: нашарування на повторювану основу" },
        { name: "Return to core", bars: 16, note: "Повторення: скидання до базового матеріалу" }
      ]
    },
    buildsForms: ["verse-chorus", "rondo", "process-minimal"],
    color: "#f6c85f"
  },
  {
    id: "contrast",
    title: "Contrast",
    tagline: "Коли матеріал потрібно змінити достатньо, щоб слухач це відчув?",
    rootProblem: "Баланс передбачуваності та новизни",
    problem: "Без контрасту форма монотонна. Увага слухача падає. Передбачуваність без новизни — нудьга.",
    decision: "«Де і наскільки змінити матеріал, щоб слухач відчув зміну, не втративши цілісності?»",
    mistake: "Або надто малий контраст (слухач не помічає зміни), або надто великий (трек розпадається на два несхожі твори).",
    exercise: [
      "Візьми секцію A.",
      "Напиши секцію B, яка контрастує рівно за одним параметром: щільність, регістр, ритм або тембр.",
      "Перевір: чи трек залишається єдиним цілим?",
      "Повтори для іншого параметра."
    ],
    assessment: "Слухач чує зміну — і не втрачає відчуття цілісного треку.",
    dawPrompt: "Відкрий свою DAW. Візьми свою улюблену секцію. Створи другу секцію, яка змінює ЛИШЕ щільність (більше/менше елементів). Решта — те саме. Чи працює? Тепер зміни лише тембр. Що відчувається інакше?",
    canonicalTrack: {
      title: "Teardrop",
      artist: "Massive Attack",
      year: 1998,
      sections: [
        { name: "Verse", bars: 16, note: "Контраст: тиха щільність, спокійний вокал" },
        { name: "Chorus", bars: 16, note: "Контраст: повна щільність, емоційний пік" },
        { name: "Verse", bars: 16, note: "Контраст: скидання до тихої версії" },
        { name: "Chorus", bars: 16, note: "Контраст: повернення до повної щільності" }
      ]
    },
    buildsForms: ["verse-chorus", "club-arc", "rondo"],
    color: "#ed6a73"
  },
  {
    id: "directionality",
    title: "Directionality",
    tagline: "Де я зараз у формі — і що це означає для наступного кроку?",
    rootProblem: "Організація музичного часу",
    problem: "Без arc форма не починається і не закінчується — вона просто зупиняється. Directionality дає студенту карту форми в часі.",
    decision: "«Де я зараз у формі — на початку, в середині чи в кінці? Що це означає для наступного кроку?»",
    mistake: "Форма без arc: кожна секція рівнозначна, трек закінчується випадково, немає відчуття «приходу».",
    exercise: [
      "Візьми 4 готові секції (різні за характером).",
      "Розстав їх у різному порядку.",
      "Для кожного варіанту запитай: «Де відчувається кульмінація? Де — завершення?»",
      "Зафіксуй найкращий порядок і поясни, чому."
    ],
    assessment: "Слухач відчуває, що трек рухається до певної точки — і приходить. Не зупиняється — приходить.",
    dawPrompt: "Відкрий свою DAW. Візьми 4 секції, які вже маєш. Розстав їх у порядку: найменш щільна → середня → найщільніша → спад. Чи відчувається рух? Тепер перестав їх. Де зникло відчуття напрямку?",
    canonicalTrack: {
      title: "Strobe",
      artist: "deadmau5",
      year: 2009,
      sections: [
        { name: "Intro (ambient)", bars: 32, note: "Напрямок: зародження" },
        { name: "Pulse enters", bars: 16, note: "Напрямок: початок руху" },
        { name: "Build-up", bars: 16, note: "Напрямок: наростання" },
        { name: "Peak", bars: 32, note: "Напрямок: кульмінація" },
        { name: "Release", bars: 32, note: "Напрямок: спад і завершення" }
      ]
    },
    buildsForms: ["club-arc", "process-minimal"],
    color: "#63d6a5"
  }
];

// ===== FORM ARCHETYPES =====
// Each form: generatedBy links to Core Concepts

const formArchetypes = [
  {
    id: "verse-chorus",
    title: "Verse-Chorus (Pop)",
    description: "Чергування оповідних куплетів і повторюваних приспівів. Класична поп-структура.",
    generatedBy: ["segmentation", "repetition", "contrast"],
    genre: "pop / rock",
    tempo: "70-150 BPM",
    difficulty: "easy",
    sections: [
      { name: "Intro", bars: 8, concept: "segmentation", function: "Знайомить зі звуковим світом" },
      { name: "Verse 1", bars: 16, concept: "contrast", function: "Оповідь, низька щільність" },
      { name: "Pre-chorus", bars: 8, concept: "contrast", function: "Наростання перед приспівом" },
      { name: "Chorus", bars: 16, concept: "repetition", function: "Центральний хук, повторюється" },
      { name: "Verse 2", bars: 16, concept: "contrast", function: "Продовження оповіді" },
      { name: "Bridge", bars: 8, concept: "contrast", function: "Зміна перспективи" },
      { name: "Final chorus", bars: 24, concept: "repetition", function: "Повернення з посиленням" }
    ],
    conclusion: "Verse-chorus — це навчання пам'яті через повторення і контраст."
  },
  {
    id: "club-arc",
    title: "Club Arc (Electronic)",
    description: "Функціональна DJ-форма: енергія вводиться, встановлюється, вивільняється і повертається.",
    generatedBy: ["segmentation", "contrast", "directionality"],
    genre: "house / techno",
    tempo: "120-135 BPM",
    difficulty: "easy",
    sections: [
      { name: "Intro", bars: 32, concept: "segmentation", function: "Біт-грід, простір для міксу" },
      { name: "Groove", bars: 32, concept: "repetition", function: "Основний ритм/гармонія" },
      { name: "Build", bars: 16, concept: "directionality", function: "Наростання щільності" },
      { name: "Drop", bars: 32, concept: "contrast", function: "Вивільнення енергії" },
      { name: "Breakdown", bars: 32, concept: "contrast", function: "Скидання до мінімуму" },
      { name: "Rebuild", bars: 16, concept: "directionality", function: "Повторне наростання" },
      { name: "Outro", bars: 32, concept: "segmentation", function: "Завершення" }
    ],
    conclusion: "Club-arc — це хореографія очікування: повторення, розрив, вивільнення, повернення."
  },
  {
    id: "rondo",
    title: "Rondo (Classical)",
    description: "Форма з рефреном, що повертається: ABACA або ABACABA.",
    generatedBy: ["segmentation", "repetition", "contrast"],
    genre: "classical",
    tempo: "varies",
    difficulty: "medium",
    sections: [
      { name: "A (refrain)", bars: 16, concept: "segmentation", function: "Головна тема" },
      { name: "B episode", bars: 16, concept: "contrast", function: "Контрастна тема" },
      { name: "A return", bars: 16, concept: "repetition", function: "Повернення рефрену" },
      { name: "C episode", bars: 24, concept: "contrast", function: "Глибший контраст" },
      { name: "A final", bars: 16, concept: "repetition", function: "Фінальне ствердження" }
    ],
    conclusion: "Рондо навчає формі як ідентичності, що повертається після контрастних подорожей."
  },
  {
    id: "process-minimal",
    title: "Process-Based Minimal (Contemporary)",
    description: "Форма, керована поступовою трансформацією, фазуванням або клітинною зміною.",
    generatedBy: ["segmentation", "repetition", "directionality"],
    genre: "minimal / contemporary",
    tempo: "60-140 BPM",
    difficulty: "hard",
    sections: [
      { name: "Cell", bars: 16, concept: "segmentation", function: "Маленька повторювана одиниця" },
      { name: "Layering", bars: 32, concept: "repetition", function: "Додавання шарів" },
      { name: "Process shift", bars: 32, concept: "directionality", function: "Застосування правила трансформації" },
      { name: "Accumulation", bars: 32, concept: "directionality", function: "Збільшення щільності" },
      { name: "Dissolution", bars: 24, concept: "segmentation", function: "Видалення шарів до початкової клітини" }
    ],
    conclusion: "Процесуальна форма робить час чутним, дозволяючи правилу стати музикою."
  }
];

// ===== STATE =====
const state = {
  mode: "concept",                // "concept" | "form"
  selectedConcept: "segmentation",
  selectedForm: null,
  visitedConcepts: { segmentation: true },
  showDecision: false,
  showExercise: false,
  selectedSection: 0
};

// ===== DOM REFS =====
const els = {};
function cacheEls() {
  els.app = document.getElementById("app");
  els.progress = document.getElementById("progressIndicator");
  els.hasOwnProperty;
}

// Build DOM on first render
function buildDOM() {
  const app = document.getElementById("app") || document.body;
  app.innerHTML = `
    <div class="atlas-shell" id="atlasShell">
      <header class="topbar">
        <div class="brand-block">
          <span class="brand-mark" aria-hidden="true"></span>
          <div>
            <h1>Music Form Atlas</h1>
            <p>Навчання форми через композиційні рішення</p>
          </div>
        </div>
        <div class="topbar-right">
          <a href="classic/" class="version-switch">◈ Classic Atlas</a>
          <span class="progress-badge" id="progressBadge">★ <span id="progressCount">1</span>/4</span>
        </div>
      </header>
      <div class="layout">
        <aside class="left-panel" id="leftPanel"></aside>
        <main class="main-area" id="mainArea"></main>
      </div>
    </div>
  `;
  els.leftPanel = document.getElementById("leftPanel");
  els.mainArea = document.getElementById("mainArea");
  els.progressBadge = document.getElementById("progressBadge");
  els.progressCount = document.getElementById("progressCount");
}

// ===== HELPERS =====
function conceptById(id) { return coreConcepts.find(c => c.id === id); }
function formById(id) { return formArchetypes.find(f => f.id === id); }
function visitedCount() { return Object.keys(state.visitedConcepts).length; }

// ===== RENDER =====
function render() {
  renderLeftPanel();
  renderMainContent();
  renderProgress();
}

function renderLeftPanel() {
  let html = '<div class="panel-section"><h3 class="panel-heading">Core Concepts</h3><div class="concept-list">';
  coreConcepts.forEach(c => {
    const isSelected = state.mode === "concept" && state.selectedConcept === c.id;
    const isVisited = state.visitedConcepts[c.id];
    const checkMark = isVisited ? "✓" : "○";
    html += `<button class="concept-card ${isSelected ? "selected" : ""} ${isVisited ? "visited" : "unvisited"}" data-concept="${c.id}" style="${isSelected ? `border-color:${c.color};box-shadow:inset 0 0 0 1px ${c.color}40` : ''}">
      <span class="concept-check">${checkMark}</span>
      <span class="concept-color" style="background:${c.color}"></span>
      <div class="concept-text">
        <strong>${c.title}</strong>
        <small>${c.tagline}</small>
      </div>
    </button>`;
  });
  html += '</div></div>';

  const hasVisitedAny = Object.keys(state.visitedConcepts).length > 0;
  const formDimmed = !hasVisitedAny ? ' style="opacity:0.5"' : '';

  html += `<div class="panel-section form-section"${formDimmed}>
    <h3 class="panel-heading">Form Archetypes <span class="form-hint">— як концепти поєднуються</span></h3>
    <div class="form-list">`;
  formArchetypes.forEach(f => {
    const isSelected = state.mode === "form" && state.selectedForm === f.id;
    const tags = f.generatedBy.map(id => conceptById(id)).filter(Boolean);
    const tagHtml = tags.map(t => `<span class="mini-tag" style="color:${t.color}">${t.title}</span>`).join(" + ");
    html += `<button class="form-card ${isSelected ? "selected" : ""}" data-form="${f.id}">
      <div class="form-text">
        <strong>${f.title}</strong>
        <small class="formula">${tagHtml}</small>
      </div>
    </button>`;
  });
  html += '</div></div>';
  html += '</div>'; // close form-section

  els.leftPanel.innerHTML = html;

  // Attach click handlers
  els.leftPanel.querySelectorAll("[data-concept]").forEach(btn => {
    btn.addEventListener("click", () => selectConcept(btn.dataset.concept));
  });
  els.leftPanel.querySelectorAll("[data-form]").forEach(btn => {
    btn.addEventListener("click", () => selectForm(btn.dataset.form));
  });
}

function renderMainContent() {
  if (state.mode === "concept") renderConceptDetail();
  else if (state.mode === "form") renderFormDetail();
}

function renderProgress() {
  const count = visitedCount();
  els.progressCount.textContent = count;
}

function renderConceptDetail() {
  const c = conceptById(state.selectedConcept);
  if (!c) return;

  const totalBars = c.canonicalTrack.sections.reduce((s, sec) => s + sec.bars, 0);

  // Build timeline with optional arc
  let timelineHtml = c.canonicalTrack.sections.map((sec, i) => {
    const width = Math.max(10, sec.bars / totalBars * 100);
    const selected = i === state.selectedSection ? " selected" : "";
    return `<button class="tl-block${selected}" data-sec="${i}" style="flex:${width} 1 0; background:${c.color}55">
      <strong>${sec.name}</strong>
      <small>${sec.note}</small>
    </button>`;
  }).join("");

  // Directionality: add energy arc (bars sloping up → peak → down)
  let arcHtml = "";
  if (c.id === "directionality") {
    const arcValues = [15, 30, 60, 85, 40]; // energy values for each section
    arcHtml = `<div class="energy-arc">${arcValues.map(v =>
      `<div class="arc-bar" style="height:${v}px; background:${c.color}"></div>`
    ).join("")}</div>`;
  }

  // Exercise + DAW prompt
  const exerciseHtml = state.showExercise
    ? `<div class="info-block">
        <h4>✍ Вправа</h4>
        <ol>${c.exercise.map(e => `<li>${e}</li>`).join("")}</ol>
        <div class="assessment">
          <strong>Перевірка:</strong> ${c.assessment}
        </div>
        <div class="daw-prompt">
          <strong>▶ Спробуй зараз у своїй DAW:</strong><br>
          ${c.dawPrompt}
        </div>
        <button class="btn-toggle" id="hideExerciseBtn">▲ Згорнути</button>
      </div>`
    : `<button class="btn-toggle" id="showExerciseBtn">▼ Показати вправу</button>`;

  // Decision + Mistake (progressive disclosure)
  const decisionHtml = state.showDecision
    ? `<div class="info-block">
        <h4>Рішення композитора</h4>
        <p class="decision-quote">${c.decision}</p>
        <h4 class="mistake-heading">Типова помилка початківця</h4>
        <p>${c.mistake}</p>
        <button class="btn-toggle" id="hideDecisionBtn">▲ Згорнути</button>
      </div>`
    : `<button class="btn-toggle" id="showDecisionBtn">▼ Показати рішення</button>`;

  // Builds forms links
  const buildsHtml = c.buildsForms.length > 0
    ? `<div class="builds-forms">
        <h4>Як це будує форми</h4>
        <div class="form-links">${c.buildsForms.map(fid => {
          const f = formById(fid);
          return f ? `<button class="form-link" data-form="${f.id}">${f.title}</button>` : "";
        }).join("")}</div>
      </div>`
    : "";

  const html = `
    <div class="breadcrumb">Core Concepts <span class="sep">›</span> <span style="color:${c.color}">${c.title}</span></div>

    <div class="concept-header">
      <span class="concept-icon" style="background:${c.color}">★</span>
      <div>
        <h2>${c.title}</h2>
        <p class="tagline">${c.tagline}</p>
        <span class="root-badge">${c.rootProblem}</span>
      </div>
    </div>

    <div class="info-block">
      <h4>Проблема, яку це вирішує</h4>
      <p>${c.problem}</p>
    </div>

    ${decisionHtml}

    ${exerciseHtml}

    <div class="canonical-track">
      <h4>🎵 Канонічний трек</h4>
      <p class="track-title">${c.canonicalTrack.title} — ${c.canonicalTrack.artist} (${c.canonicalTrack.year})</p>
      <div class="mini-timeline">${timelineHtml}</div>
      ${arcHtml}
    </div>

    ${buildsHtml}
  `;

  els.mainArea.innerHTML = html;

  // Attach handlers
  els.mainArea.querySelectorAll("[data-sec]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedSection = parseInt(btn.dataset.sec);
      renderMainContent();
    });
  });
  els.mainArea.querySelectorAll("[data-form]").forEach(btn => {
    btn.addEventListener("click", () => selectForm(btn.dataset.form));
  });

  const showDec = document.getElementById("showDecisionBtn");
  const hideDec = document.getElementById("hideDecisionBtn");
  if (showDec) showDec.addEventListener("click", () => { state.showDecision = true; render(); });
  if (hideDec) hideDec.addEventListener("click", () => { state.showDecision = false; render(); });

  const showEx = document.getElementById("showExerciseBtn");
  const hideEx = document.getElementById("hideExerciseBtn");
  if (showEx) showEx.addEventListener("click", () => { state.showExercise = true; render(); });
  if (hideEx) hideEx.addEventListener("click", () => { state.showExercise = false; render(); });
}

function renderFormDetail() {
  const f = formById(state.selectedForm);
  if (!f) return;

  const totalBars = f.sections.reduce((s, sec) => s + sec.bars, 0);
  const tags = f.generatedBy.map(id => conceptById(id)).filter(Boolean);

  const timelineHtml = f.sections.map((sec, i) => {
    const width = Math.max(10, sec.bars / totalBars * 100);
    const c = conceptById(sec.concept);
    const color = c ? c.color : "#b78cff";
    const selected = i === state.selectedSection ? " selected" : "";
    return `<button class="tl-block${selected}" data-sec="${i}" style="flex:${width} 1 0;background:${color}55">
      <strong>${sec.name}</strong>
      <small>${sec.function}</small>
    </button>`;
  }).join("");

  // Selected section detail
  const currentSec = f.sections[state.selectedSection] || f.sections[0];
  const secConcept = conceptById(currentSec.concept);
  const secDetailHtml = `<div class="info-block section-detail">
    <h4>${currentSec.name}</h4>
    <p>${currentSec.function}</p>
    <p class="concept-ref">Використовує <strong style="color:${secConcept?.color}">${secConcept?.title}</strong>
      ${secConcept ? `— ${secConcept.tagline.toLowerCase()}` : ""}</p>
  </div>`;

  // Generated by tags
  const tagHtml = tags.map(t =>
    `<button class="concept-tag" data-concept="${t.id}" style="border-color:${t.color};color:${t.color}">${t.title}</button>`
  ).join("");

  const html = `
    <div class="breadcrumb">Form Archetypes <span class="sep">›</span> ${f.title}</div>

    <div class="concept-header">
      <span class="concept-icon" style="background:#b78cff">◆</span>
      <div>
        <h2>${f.title}</h2>
        <p class="tagline">${f.description}</p>
        <div class="generated-by">⚡ Створено з: ${tagHtml}</div>
      </div>
    </div>

    <div class="canonical-track">
      <h4>Timeline</h4>
      <div class="mini-timeline">${timelineHtml}</div>
      <div class="meta-row">
        <span>${f.genre}</span>
        <span>${f.tempo}</span>
        <span>Складність: ${f.difficulty}</span>
      </div>
    </div>

    ${secDetailHtml}

    <div class="builds-forms">
      <h4>Які концепти створюють цю форму</h4>
      <div class="form-links">${tags.map(t =>
        `<button class="form-link" data-concept="${t.id}" style="border-color:${t.color}">${t.title}</button>`
      ).join("")}</div>
    </div>
  `;

  els.mainArea.innerHTML = html;

  // Handlers
  els.mainArea.querySelectorAll("[data-sec]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedSection = parseInt(btn.dataset.sec);
      renderFormDetail();
    });
  });
  els.mainArea.querySelectorAll("[data-concept]").forEach(btn => {
    btn.addEventListener("click", () => selectConcept(btn.dataset.concept));
  });
}

// ===== NAVIGATION =====
function selectConcept(id) {
  state.mode = "concept";
  state.selectedConcept = id;
  state.selectedForm = null;
  state.visitedConcepts[id] = true;
  state.showDecision = false;
  state.showExercise = false;
  state.selectedSection = 0;
  render();
}

function selectForm(id) {
  state.mode = "form";
  state.selectedForm = id;
  state.selectedConcept = null;
  state.selectedSection = 0;
  render();
}

// ===== INIT =====
function init() {
  buildDOM();
  render();
  // Force forms to full opacity after first concept interaction
  setTimeout(() => {
    const formSection = document.querySelector(".form-section");
    if (formSection && Object.keys(state.visitedConcepts).length > 0) {
      formSection.style.opacity = "1";
      formSection.style.transition = "opacity 0.5s";
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", init);