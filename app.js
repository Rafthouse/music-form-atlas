const forms = [
  {
    id: "club-arc",
    title: "Club track arc",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "house / techno",
    form: "intro-drop-breakdown-outro",
    tempo: "120-135 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A functional DJ-friendly form where energy is introduced, established, released, rebuilt, and resolved over time.",
    traits: ["DJ intro/outro", "energy curve", "breakdown and rebuild", "drop as release"],
    sections: [
      section("Intro", 32, 0.25, "Sets beat-grid, mix-in space, and first texture clues.", "The intro is usually functional: it gives a DJ or listener stable pulse before the main identity arrives."),
      section("Groove", 32, 0.48, "Establishes the core rhythmic/harmonic loop.", "This is where repetition becomes legible and the body learns the pattern."),
      section("Build", 16, 0.72, "Adds density, risers, filter motion, or percussion pressure.", "The build makes the next release feel earned by increasing expectation."),
      section("Drop", 32, 0.96, "Releases accumulated tension into the main dance section.", "The drop works because the track has prepared both pulse and expectation."),
      section("Breakdown", 32, 0.38, "Removes drums or bass to reset attention.", "A breakdown is not empty: it re-frames the material and gives the next entrance meaning."),
      section("Rebuild", 16, 0.76, "Reintroduces pulse and tension.", "The rebuild reconnects atmosphere to body movement."),
      section("Second drop", 32, 0.92, "Returns with variation or greater density.", "The second drop proves development rather than simple repetition."),
      section("Outro", 32, 0.2, "Reduces elements for mix-out and closure.", "The outro makes the form usable in a DJ context and gives structural release.")
    ],
    examples: [
      example("Generic peak-time techno arrangement", "Study model", "N/A", "techno", ["0:00 intro", "1:04 groove", "2:08 breakdown", "3:12 drop", "5:20 outro"], "Analytical model; exact source needs track-specific verification."),
      example("Dub techno long-form loop", "Study model", "N/A", "dub techno", ["0:00 texture", "1:30 groove", "3:00 modulation", "5:00 subtraction"], "Shows how form can be slow mutation rather than section contrast.")
    ],
    sources: [
      source("Butler, Unlocking the Groove", "Electronic dance music meter, rhythm, and form; exact chapter/page needs verification.", "needs"),
      source("Hawkins, The British Pop Dandy / EDM form discussions", "Useful for production-form vocabulary; needs exact citation.", "needs")
    ],
    commonMistakes: "Students often call every high-energy entrance a drop; the question is whether tension was structurally prepared.",
    conclusion: "Club form is choreography of expectation: mixability, repetition, break, release, and return."
  },
  {
    id: "verse-chorus",
    title: "Verse-chorus song form",
    category: "pop",
    categoryLabel: "Pop / song",
    genre: "pop / rock",
    form: "verse-chorus",
    tempo: "70-150 BPM",
    tempoGroup: "any",
    difficulty: "easy",
    definition: "A sectional song form where verses develop narrative/detail and choruses deliver the central hook or thesis.",
    traits: ["verse contrast", "chorus return", "hook", "lyric function"],
    sections: [
      section("Intro", 8, 0.25, "Introduces sound world or hook fragment.", "The intro prepares recognition without giving away the whole form."),
      section("Verse 1", 16, 0.42, "Delivers narrative, detail, or setup.", "Verses usually carry information and lower melodic density than the chorus."),
      section("Pre-chorus", 8, 0.68, "Raises harmonic or melodic tension.", "The pre-chorus is a ramp: it makes the chorus feel inevitable."),
      section("Chorus", 16, 0.92, "States the main hook and emotional center.", "The chorus works by returning as a memorable high-function section."),
      section("Verse 2", 16, 0.48, "Continues narrative with variation.", "The second verse confirms the form but should not feel like a reset to zero."),
      section("Bridge", 8, 0.58, "Provides contrast before final returns.", "The bridge refreshes attention by changing viewpoint, harmony, or texture."),
      section("Final chorus", 24, 0.98, "Returns with intensification or extension.", "The final chorus often validates the song's main idea through repetition plus lift.")
    ],
    examples: [
      example("ABABCB pop layout", "Study model", "N/A", "pop", ["A verse", "B chorus", "C bridge"], "Good model for teaching section function before using copyrighted songs."),
      example("Hook-based dance-pop song", "Study model", "N/A", "dance-pop", ["0:00 intro", "0:16 verse", "0:48 chorus", "1:52 bridge"], "Shows pop form with club-derived energy logic.")
    ],
    sources: [
      source("Everett, The Foundations of Rock", "Common source for rock/pop form terminology; exact section needs verification.", "needs"),
      source("Covach, Form in Rock Music", "Useful for AABA, verse-chorus, and compound forms; exact page needs verification.", "needs")
    ],
    commonMistakes: "Students often identify sections only by lyrics; arrangement, harmony, and energy are equally important.",
    conclusion: "Verse-chorus form turns contrast and return into memory."
  },
  {
    id: "rondo",
    title: "Rondo",
    category: "classical",
    categoryLabel: "Classical",
    genre: "classical",
    form: "rondo",
    tempo: "varies",
    tempoGroup: "any",
    difficulty: "medium",
    definition: "A recurrent refrain form, often represented as ABACA or ABACABA, where a main idea returns between contrasting episodes.",
    traits: ["refrain", "episodes", "return", "contrast"],
    sections: [
      section("A refrain", 16, 0.72, "Presents the recognizable main idea.", "The refrain anchors memory; every return lets the listener reorient."),
      section("B episode", 16, 0.48, "Contrasts key, material, texture, or character.", "Episode B creates distance from the refrain."),
      section("A return", 16, 0.74, "Restates the main idea.", "The return confirms that contrast was temporary."),
      section("C episode", 24, 0.58, "Offers deeper or stronger contrast.", "A later episode often expands the form's range."),
      section("A final return", 16, 0.86, "Closes by restoring the primary identity.", "The final return feels conclusive because the form has traveled away and back.")
    ],
    examples: [
      example("Classical rondo finale", "Study model", "18th c.", "classical", ["A", "B", "A", "C", "A"], "Use as schematic model before attaching a verified score/audio example."),
      example("Rondo-like theme return", "Study model", "N/A", "hybrid", ["theme", "episode", "theme"], "Useful for showing the concept outside strict classical labels.")
    ],
    sources: [
      source("Caplin, Classical Form", "Important source for classical formal functions; exact chapter/page needs verification.", "needs"),
      source("Oxford Music Online / Grove entry on rondo", "Reference entry should be cited with access details when available.", "needs")
    ],
    commonMistakes: "A repeated theme alone is not enough; rondo depends on return after contrasting episodes.",
    conclusion: "Rondo teaches form as recurring identity interrupted by contrasting journeys."
  },
  {
    id: "process-minimal",
    title: "Process-based minimal form",
    category: "contemporary",
    categoryLabel: "Contemporary / neoclassical",
    genre: "minimal / contemporary",
    form: "process-based",
    tempo: "60-140 BPM",
    tempoGroup: "any",
    difficulty: "hard",
    definition: "A form driven by gradual transformation, phase, layering, or cellular change rather than conventional section contrast.",
    traits: ["process", "cellular development", "layering", "slow transformation"],
    sections: [
      section("Cell", 16, 0.28, "Introduces a small repeated unit.", "The cell is the seed; the listener learns it before transformation begins."),
      section("Layering", 32, 0.52, "Adds or offsets layers.", "Layering changes perception without requiring a new theme."),
      section("Process shift", 32, 0.74, "Applies phase, subtraction, augmentation, or textural change.", "The drama is in hearing a rule unfold over time."),
      section("Accumulation", 32, 0.88, "Increases density or registral span.", "Accumulation makes gradual change feel directional."),
      section("Dissolution", 24, 0.34, "Removes layers or exposes the original cell.", "The ending reveals what changed and what remained stable.")
    ],
    examples: [
      example("Layered cycle study", "Study model", "N/A", "minimal", ["cell", "layer", "shift", "dissolve"], "Safe placeholder for teaching process before verified repertoire entries."),
      example("Ambient club form", "Study model", "N/A", "ambient club", ["texture", "pulse", "density", "release"], "Connects minimal process with modern dance-music listening.")
    ],
    sources: [
      source("Potter, Four Musical Minimalists", "Useful background for minimalist processes; exact page needs verification.", "needs"),
      source("Nyman, Experimental Music", "Relevant for process and experimental traditions; exact section needs verification.", "needs")
    ],
    commonMistakes: "Students may think 'nothing happens'; the task is to track rule-based transformation.",
    conclusion: "Process form makes time audible by letting a rule become music."
  }
];

function section(name, bars, energy, functionText, why) {
  return { name, bars, energy, functionText, why };
}

function example(title, artist, year, style, timecodes, note) {
  return { title, artist, year, style, timecodes, note };
}

function source(title, note, status) {
  return { title, note, status };
}

const state = {
  selectedId: "club-arc",
  selectedSection: 0,
  explanationMode: "simple",
  revealStep: Infinity,
  compare: false
};

const els = {
  genre: document.getElementById("genreFilter"),
  form: document.getElementById("formFilter"),
  tempo: document.getElementById("tempoFilter"),
  difficulty: document.getElementById("difficultyFilter"),
  search: document.getElementById("searchInput"),
  formList: document.getElementById("formList"),
  resultCount: document.getElementById("resultCount"),
  category: document.getElementById("selectedCategory"),
  title: document.getElementById("selectedTitle"),
  definition: document.getElementById("selectedDefinition"),
  meta: document.getElementById("metaGrid"),
  timeline: document.getElementById("timeline"),
  energy: document.getElementById("energyCurve"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionExplanation: document.getElementById("sectionExplanation"),
  examples: document.getElementById("examplesList"),
  sources: document.getElementById("sourcesList"),
  comparison: document.getElementById("comparisonView"),
  reveal: document.getElementById("revealButton"),
  simple: document.getElementById("simpleButton"),
  pro: document.getElementById("proButton"),
  compare: document.getElementById("compareButton")
};

function unique(values) {
  return ["All", ...Array.from(new Set(values)).sort()];
}

function optionHtml(values) {
  return values.map(value => `<option value="${value}">${value}</option>`).join("");
}

function initFilters() {
  els.genre.innerHTML = optionHtml(unique(forms.map(item => item.categoryLabel)));
  els.form.innerHTML = optionHtml(unique(forms.map(item => item.form)));
  els.tempo.innerHTML = optionHtml(["All", "slow", "medium", "fast", "any"]);
  els.difficulty.innerHTML = optionHtml(unique(forms.map(item => item.difficulty)));
}

function currentForm() {
  return forms.find(item => item.id === state.selectedId) || forms[0];
}

function filteredForms() {
  const query = els.search.value.trim().toLowerCase();
  return forms.filter(item => {
    const matchesGenre = els.genre.value === "All" || item.categoryLabel === els.genre.value;
    const matchesForm = els.form.value === "All" || item.form === els.form.value;
    const matchesTempo = els.tempo.value === "All" || item.tempoGroup === els.tempo.value;
    const matchesDifficulty = els.difficulty.value === "All" || item.difficulty === els.difficulty.value;
    const haystack = `${item.title} ${item.genre} ${item.form} ${item.definition} ${item.traits.join(" ")} ${item.sections.map(s => s.name).join(" ")}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesGenre && matchesForm && matchesTempo && matchesDifficulty && matchesQuery;
  });
}

function renderLibrary() {
  const list = filteredForms();
  els.resultCount.textContent = `${list.length} forms`;
  els.formList.innerHTML = list.map(item => `
    <button class="form-card ${item.id === state.selectedId ? "selected" : ""}" type="button" data-id="${item.id}">
      <strong>${item.title}</strong>
      <p>${item.definition}</p>
      <div class="tag-row">${item.traits.slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}</div>
    </button>
  `).join("");
}

function renderOverview(form) {
  els.category.textContent = form.categoryLabel;
  els.title.textContent = form.title;
  els.definition.textContent = form.definition;
  const meta = [
    ["Genre", form.genre],
    ["Form", form.form],
    ["Tempo", form.tempo],
    ["Difficulty", form.difficulty]
  ];
  els.meta.innerHTML = meta.map(([label, value]) => `<div class="meta-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function renderTimeline(form) {
  const totalBars = form.sections.reduce((sum, item) => sum + item.bars, 0);
  els.timeline.innerHTML = form.sections.map((item, index) => {
    const width = Math.max(9, item.bars / totalBars * 100);
    const hidden = index > state.revealStep ? "hidden-step" : "";
    const selected = index === state.selectedSection ? "selected" : "";
    return `<button class="section-block category-${form.category} ${hidden} ${selected}" style="flex: ${width} 1 0" type="button" data-index="${index}">
      <strong>${item.name}</strong>
      <small>${item.bars} bars</small>
    </button>`;
  }).join("");

  els.energy.innerHTML = form.sections.map(item => `<div class="energy-bar" style="height: ${Math.round(8 + item.energy * 44)}px"></div>`).join("");
}

function renderSection(form) {
  const item = form.sections[state.selectedSection] || form.sections[0];
  els.sectionTitle.textContent = item.name;
  const modeText = state.explanationMode === "simple"
    ? item.why
    : `${item.functionText} In formal terms, this section controls expectation, contrast, and listener orientation inside the larger ${form.form} design.`;

  els.sectionExplanation.innerHTML = `
    <div class="explain-card"><strong>Function</strong><p>${item.functionText}</p></div>
    <div class="explain-card"><strong>Why it works</strong><p>${modeText}</p></div>
    <div class="explain-card"><strong>Student check</strong><p>Ask: what changed here: energy, texture, harmony, density, rhythm, or listener expectation?</p></div>
  `;
}

function renderExamples(form) {
  els.examples.innerHTML = form.examples.map(item => `
    <div class="example-card">
      <strong>${item.title}</strong>
      <p>${item.artist} / ${item.year} / ${item.style}</p>
      <div class="timecode-list">${item.timecodes.map(code => `<span>${code}</span>`).join("")}</div>
      <p>${item.note}</p>
    </div>
  `).join("");
}

function renderSources(form) {
  els.sources.innerHTML = form.sources.map(item => `
    <div class="source-card">
      <strong>${item.title}</strong>
      <p>${item.note}</p>
      <p class="verify ${item.status === "needs" ? "needs" : ""}">${item.status === "needs" ? "потрібна перевірка" : "verified"}</p>
    </div>
  `).join("") + `<div class="source-card"><strong>Typical student mistake</strong><p>${form.commonMistakes}</p></div>`;
}

function renderComparison(form) {
  if (!state.compare) {
    els.comparison.innerHTML = `<div class="compare-card"><strong>Comparison mode is off</strong><p>Use Compare to place this form beside a nearby model and discuss what changes.</p></div>`;
    return;
  }

  const other = forms.find(item => item.category !== form.category) || forms.find(item => item.id !== form.id);
  els.comparison.innerHTML = `
    <div class="compare-card"><strong>${form.title}</strong><p>${form.conclusion}</p></div>
    <div class="compare-card"><strong>${other.title}</strong><p>${other.conclusion}</p></div>
    <div class="compare-card"><strong>Teaching prompt</strong><p>Compare section function first, names second. Similar labels can do different dramatic work.</p></div>
  `;
}

function render() {
  const form = currentForm();
  renderLibrary();
  renderOverview(form);
  renderTimeline(form);
  renderSection(form);
  renderExamples(form);
  renderSources(form);
  renderComparison(form);
  els.simple.classList.toggle("active", state.explanationMode === "simple");
  els.pro.classList.toggle("active", state.explanationMode === "pro");
  els.compare.classList.toggle("active", state.compare);
}

function installHandlers() {
  [els.genre, els.form, els.tempo, els.difficulty, els.search].forEach(input => input.addEventListener("input", render));

  els.formList.addEventListener("click", event => {
    const button = event.target.closest("[data-id]");
    if (!button) return;
    state.selectedId = button.dataset.id;
    state.selectedSection = 0;
    state.revealStep = Infinity;
    render();
  });

  els.timeline.addEventListener("click", event => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    state.selectedSection = Number(button.dataset.index);
    render();
  });

  els.reveal.addEventListener("click", () => {
    const form = currentForm();
    if (state.revealStep === Infinity) state.revealStep = 0;
    else state.revealStep = state.revealStep + 1 >= form.sections.length ? Infinity : state.revealStep + 1;
    state.selectedSection = state.revealStep === Infinity ? 0 : state.revealStep;
    render();
  });

  els.simple.addEventListener("click", () => { state.explanationMode = "simple"; render(); });
  els.pro.addEventListener("click", () => { state.explanationMode = "pro"; render(); });
  els.compare.addEventListener("click", () => { state.compare = !state.compare; render(); });
}

initFilters();
installHandlers();
render();
