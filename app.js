// ================================================================
// Music Form Atlas v1.3 — Content Depth Expansion
// ================================================================

// ===== CORE CONCEPTS =====
const coreConcepts = [
  {
    id: "segmentation",
    title: "Segmentation",
    titleUk: "Сегментація",
    tagline: { en: "Where does one idea end and the next begin?", uk: "Де закінчується одна ідея і починається інша?" },
    rootProblem: { en: "Organisation of musical time", uk: "Організація музичного часу" },
    problem: { en: "Material without boundaries isn't perceived as form. Segmentation turns a stream into architecture.", uk: "Матеріал без меж не сприймається як форма. Сегментація перетворює потік на архітектуру." },
    decision: { en: "“Where does the current idea end and the next one begin?”", uk: "«Де закінчується поточна ідея і де починається наступна?»" },
    mistake: { en: "An endless loop with no boundaries. There's material but no form. The student confuses “making a sound” with “building a structure”.", uk: "Нескінченний луп без меж. Матеріал є — форми немає. Студент плутає «зробити звук» із «побудувати структуру»." },
    exercise: [
      { en: "Take one loop (16 bars).", uk: "Візьми один луп (16 тактів)." },
      { en: "Don't change the material.", uk: "Не змінюй матеріал." },
      { en: "Only place boundaries: intro / core / outro.", uk: "Тільки розстав межі: intro / core / outro." },
      { en: "At least 3 sections.", uk: "Мінімум 3 секції." }
    ],
    assessment: { en: "Can a first-time listener hear the start and end of each section without prompting?", uk: "Чи може незнайомий слухач почути початок і кінець кожної секції без підказок?" },
    dawPrompt: { en: "Open your DAW. Play the first 16 bars. Does anything change at bar 8? If not — try placing a boundary at bar 8 and hear how it changes the sense of form.", uk: "Відкрий свою DAW. Прослухай перші 16 тактів. Чи змінюється щось на 8-му такті? Якщо ні — спробуй поставити межу на 8-му такті і послухай, як це змінює сприйняття форми." },
    canonicalTrack: {
      title: "Around the World",
      artist: "Daft Punk",
      year: 1997,
      sections: [
        { name: { en: "Intro", uk: "Вступ" }, bars: 16, note: { en: "Boundary: from silence to rhythm", uk: "Межа: від тиші до ритму" } },
        { name: { en: "Core groove", uk: "Основний грув" }, bars: 32, note: { en: "Boundary: the main material begins", uk: "Межа: основний матеріал починається" } },
        { name: { en: "Filter sweep", uk: "Фільтр-світ" }, bars: 16, note: { en: "Boundary: texture change", uk: "Межа: зміна текстури" } },
        { name: { en: "Core groove", uk: "Основний грув" }, bars: 32, note: { en: "Boundary: return", uk: "Межа: повернення" } },
        { name: { en: "Outro", uk: "Завершення" }, bars: 16, note: { en: "Boundary: ending", uk: "Межа: завершення" } }
      ]
    },
    buildsForms: ["verse-chorus", "club-arc", "rondo"],
    color: "#5bbcff"
  },
  {
    id: "repetition",
    title: "Repetition",
    titleUk: "Повторення",
    tagline: { en: "When to return to material that has already sounded?", uk: "Коли повернутися до матеріалу, який вже звучав?" },
    rootProblem: { en: "Balance of predictability and novelty", uk: "Баланс передбачуваності та новизни" },
    problem: { en: "Without repetition the material doesn't sink in. The listener has no anchor — the form never settles.", uk: "Без повторення матеріал не засвоюється. Слухач не має точки опори — форма не «сідає»." },
    decision: { en: "“Which section to bring back, when, and how many times?”", uk: "«Яку секцію повернути, коли і скільки разів?»" },
    mistake: { en: "Two extremes: either the material never repeats (the listener can't grasp the form), or it repeats too long (the form stops moving).", uk: "Два крайні варіанти: або матеріал не повторюється зовсім (форма не засвоюється слухачем), або повторюється занадто довго (форма не рухається)." },
    exercise: [
      { en: "Take two sections (A and B).", uk: "Візьми дві секції (A та B)." },
      { en: "Build A–A–B–A.", uk: "Побудуй A–A–B–A." },
      { en: "Measure: how many bars are justified for each A?", uk: "Виміряй: скільки тактів виправдано для кожного A?" },
      { en: "At what length is the third A still interesting? At what length is it already boring?", uk: "При якій довжині третє A ще цікаве? При якій — вже нудне?" }
    ],
    assessment: { en: "Does the listener recognise the material's return? Do they keep interest through the third repetition?", uk: "Чи впізнає слухач повернення матеріалу? Чи не втрачає інтерес до третього повторення?" },
    dawPrompt: { en: "Open your DAW. Take section A and section B. Build A–B–A–B–A. How many repetitions does a listener tolerate without losing interest? Where is the line between “it stuck” and “it got old”?", uk: "Відкрий свою DAW. Візьми секцію A і секцію B. Побудуй A–B–A–B–A. Скільки повторень витримує слухач без втрати інтересу? Де межа між «запам'яталось» і «набридло»?" },
    canonicalTrack: {
      title: "Around the World",
      artist: "Daft Punk",
      year: 1997,
      sections: [
        { name: { en: "Bass loop", uk: "Басовий луп" }, bars: 16, note: { en: "Repetition: the bass line is the foundation", uk: "Повторення: басова лінія — основа" } },
        { name: { en: "Bass + beat", uk: "Бас + біт" }, bars: 16, note: { en: "Repetition: the beat is added, the bass continues", uk: "Повторення: біт додається, бас триває" } },
        { name: { en: "Bass + beat + vox", uk: "Бас + біт + вокал" }, bars: 16, note: { en: "Repetition: vocals over the same loop", uk: "Повторення: вокал на тому ж loop" } },
        { name: { en: "Bass + beat + vox + hats", uk: "Бас + біт + вокал + хети" }, bars: 16, note: { en: "Repetition: layering over the repeating foundation", uk: "Повторення: нашарування на повторювану основу" } },
        { name: { en: "Return to core", uk: "Повернення до основи" }, bars: 16, note: { en: "Repetition: reset to the base material", uk: "Повторення: скидання до базового матеріалу" } }
      ]
    },
    buildsForms: ["verse-chorus", "rondo", "process-minimal"],
    color: "#f6c85f"
  },
  {
    id: "contrast",
    title: "Contrast",
    titleUk: "Контраст",
    tagline: { en: "When must material change enough for the listener to feel it?", uk: "Коли матеріал потрібно змінити достатньо, щоб слухач це відчув?" },
    rootProblem: { en: "Balance of predictability and novelty", uk: "Баланс передбачуваності та новизни" },
    problem: { en: "Without contrast the form is monotonous. The listener's attention drops. Predictability with no novelty is boredom.", uk: "Без контрасту форма монотонна. Увага слухача падає. Передбачуваність без новизни — нудьга." },
    decision: { en: "“Where and how much to change the material so the listener feels the change without losing coherence?”", uk: "«Де і наскільки змінити матеріал, щоб слухач відчув зміну, не втративши цілісності?»" },
    mistake: { en: "Either too little contrast (the listener doesn't notice the change) or too much (the track splits into two unrelated pieces).", uk: "Або надто малий контраст (слухач не помічає зміни), або надто великий (трек розпадається на два несхожі твори)." },
    exercise: [
      { en: "Take section A.", uk: "Візьми секцію A." },
      { en: "Write a section B that contrasts in exactly one parameter: density, register, rhythm or timbre.", uk: "Напиши секцію B, яка контрастує рівно за одним параметром: щільність, регістр, ритм або тембр." },
      { en: "Check: does the track stay a single whole?", uk: "Перевір: чи трек залишається єдиним цілим?" },
      { en: "Repeat for a different parameter.", uk: "Повтори для іншого параметра." }
    ],
    assessment: { en: "The listener hears the change — and keeps the sense of a single, coherent track.", uk: "Слухач чує зміну — і не втрачає відчуття цілісного треку." },
    dawPrompt: { en: "Open your DAW. Take your favourite section. Make a second section that changes ONLY density (more/fewer elements). Everything else stays the same. Does it work? Now change only the timbre. What feels different?", uk: "Відкрий свою DAW. Візьми свою улюблену секцію. Створи другу секцію, яка змінює ЛИШЕ щільність (більше/менше елементів). Решта — те саме. Чи працює? Тепер зміни лише тембр. Що відчувається інакше?" },
    canonicalTrack: {
      title: "Teardrop",
      artist: "Massive Attack",
      year: 1998,
      sections: [
        { name: { en: "Verse", uk: "Куплет" }, bars: 16, note: { en: "Contrast: low density, calm vocal", uk: "Контраст: тиха щільність, спокійний вокал" } },
        { name: { en: "Chorus", uk: "Приспів" }, bars: 16, note: { en: "Contrast: full density, emotional peak", uk: "Контраст: повна щільність, емоційний пік" } },
        { name: { en: "Verse", uk: "Куплет" }, bars: 16, note: { en: "Contrast: reset to the quiet version", uk: "Контраст: скидання до тихої версії" } },
        { name: { en: "Chorus", uk: "Приспів" }, bars: 16, note: { en: "Contrast: return to full density", uk: "Контраст: повернення до повної щільності" } }
      ]
    },
    buildsForms: ["verse-chorus", "club-arc", "rondo"],
    color: "#ed6a73"
  },
  {
    id: "directionality",
    title: "Directionality",
    titleUk: "Напрямок",
    tagline: { en: "Where am I in the form — and what does that mean for the next step?", uk: "Де я зараз у формі — і що це означає для наступного кроку?" },
    rootProblem: { en: "Organisation of musical time", uk: "Організація музичного часу" },
    problem: { en: "Without an arc, a form doesn't begin or end — it just stops. Directionality gives the student a map of the form in time.", uk: "Без дуги форма не починається і не закінчується — вона просто зупиняється. Напрямок дає студенту карту форми в часі." },
    decision: { en: "“Where am I in the form — beginning, middle, or end? What does that mean for the next step?”", uk: "«Де я зараз у формі — на початку, в середині чи в кінці? Що це означає для наступного кроку?»" },
    mistake: { en: "A form with no arc: every section is equal, the track ends arbitrarily, there's no sense of “arrival”.", uk: "Форма без дуги: кожна секція рівнозначна, трек закінчується випадково, немає відчуття «приходу»." },
    exercise: [
      { en: "Take 4 ready-made sections (different in character).", uk: "Візьми 4 готові секції (різні за характером)." },
      { en: "Arrange them in different orders.", uk: "Розстав їх у різному порядку." },
      { en: "For each version ask: “Where is the climax felt? Where is the ending?”", uk: "Для кожного варіанту запитай: «Де відчувається кульмінація? Де — завершення?»" },
      { en: "Lock in the best order and explain why.", uk: "Зафіксуй найкращий порядок і поясни, чому." }
    ],
    assessment: { en: "The listener feels the track moving toward a point — and arriving. Not stopping — arriving.", uk: "Слухач відчуває, що трек рухається до певної точки — і приходить. Не зупиняється — приходить." },
    dawPrompt: { en: "Open your DAW. Take 4 sections you already have. Order them: least dense → medium → densest → release. Is there a sense of motion? Now reshuffle them. Where did the sense of direction disappear?", uk: "Відкрий свою DAW. Візьми 4 секції, які вже маєш. Розстав їх у порядку: найменш щільна → середня → найщільніша → спад. Чи відчувається рух? Тепер перестав їх. Де зникло відчуття напрямку?" },
    canonicalTrack: {
      title: "Strobe",
      artist: "deadmau5",
      year: 2009,
      sections: [
        { name: { en: "Intro (ambient)", uk: "Вступ (ембієнт)" }, bars: 32, note: { en: "Direction: emergence", uk: "Напрямок: зародження" } },
        { name: { en: "Pulse enters", uk: "Вступає пульс" }, bars: 16, note: { en: "Direction: motion begins", uk: "Напрямок: початок руху" } },
        { name: { en: "Build-up", uk: "Наростання" }, bars: 16, note: { en: "Direction: build-up", uk: "Напрямок: наростання" } },
        { name: { en: "Peak", uk: "Пік" }, bars: 32, note: { en: "Direction: climax", uk: "Напрямок: кульмінація" } },
        { name: { en: "Release", uk: "Спад" }, bars: 32, note: { en: "Direction: release and ending", uk: "Напрямок: спад і завершення" } }
      ]
    },
    buildsForms: ["club-arc", "process-minimal"],
    color: "#63d6a5"
  }
];

// ===== SECTION KNOWLEDGE HELPER =====
function secKnowledge(name, purpose, whyItWorks, commonMistake, whenToSkip, composerDecision, realExamples) {
  return { name, purpose, whyItWorks, commonMistake, whenToSkip, composerDecision, realExamples };
}

function failureEntry(section, removed, effects) {
  return { section, removed, effects };
}

function variant(name, used, why, tradeoffs) {
  return { name, used, why, tradeoffs };
}

function track(title, artist, year, formNotes, sections, genre, analysis) {
  return { title, artist, year, genre: genre || "pop", formNotes, sections, analysis: analysis || null };
}

function genreTransfer(genre, description, adaptation) {
  return { genre, description, adaptation };
}

// ===== FORM ARCHETYPES =====

const formArchetypes = [
  // ============================================================
  // Verse-Chorus (Pop)
  // ============================================================
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
    conclusion: "Verse-chorus — це навчання пам'яті через повторення і контраст.",

    sectionKnowledge: [
      secKnowledge("Intro",
        "Підготувати слухача до звукового світу пісні, представити тональність, темп і настрій.",
        "Інтро — це психологічний поріг: воно дає слухачеві час увійти в простір пісні до того, як почнеться основна інформація (вокал).",
        "Інтро занадто довге — слухач втрачає інтерес до того, як почнеться куплет. Інтро занадто коротке — слухач не встигає зорієнтуватися.",
        "У треках, де важливий миттєвий вступ (радіо-хіти, клубні треки), або коли попередній трек уже задав контекст.",
        "«Чи готова аудиторія почути голос / головну тему?»",
        ["Michael Jackson — Billie Jean (1982)", "The Beatles — A Hard Day's Night (1964)"]
      ),
      secKnowledge("Verse 1",
        "Представити історію, деталі, настрій — те, про що пісня розповідає.",
        "Куплет — це когнітивне завантаження: слухач отримує інформацію, яка зробить приспів осмисленим.",
        "Занадто багато деталей — слухач втрачає фокус. Занадто мало — приспів не має контексту.",
        "В інструментальній музиці, де «оповідь» відбувається через тембр і текстуру, а не текст.",
        "«Яку інформацію має отримати слухач, щоб приспів мав сенс?»",
        ["Michael Jackson — Billie Jean (1982)", "Taylor Swift — Blank Space (2014)"]
      ),
      secKnowledge("Pre-chorus",
        "Підвищити напругу і створити очікування перед приспівом.",
        "Пре-хорус — це психологічна рампа: він сигналізує, що щось важливе наближається, активуючи передчуття.",
        "Пре-хорус занадто довгий — слухач втомлюється чекати. Пре-хорус, який не відрізняється від куплету — приспів не відчувається як подія.",
        "Коли контраст між куплетом і приспівом уже достатньо сильний без додаткової рампи.",
        "«Чи відчуває слухач, що приспів наближається?»",
        ["Katy Perry — Teenage Dream (2010)", "Bon Jovi — Livin' on a Prayer (1986)"]
      ),
      secKnowledge("Chorus",
        "Доставити центральний хук і емоційний центр пісні.",
        "Приспів — це винагорода за увагу слухача. Він працює як мнемонічний якір: найбільш пам'ятна частина пісні.",
        "Приспів, який не відрізняється від куплету за енергією. Приспів з новою інформацією замість повторення хука.",
        "У формах, де немає повторюваного хука (процесуальна музика, джаз).",
        "«Чи запам'ятає слухач цей приспів після одного прослуховування?»",
        ["Michael Jackson — Billie Jean (1982)", "ABBA — Dancing Queen (1976)"]
      ),
      secKnowledge("Verse 2",
        "Продовжити оповідь з новими деталями або розвитком після першого приспіву.",
        "Другий куплет підтверджує, що форма не випадкова: слухач уже знає, що після куплету прийде приспів, і це створює відчуття структури.",
        "Другий куплет, який просто повторює перший — форма перестає розвиватися. Або другий куплет, який змінює занадто багато — слухач втрачає опору.",
        "У піснях, де перший куплет уже сказав усе необхідне (деякі поп-хіти з одним куплетом).",
        "«Чи додає цей куплет нову інформацію або перспективу?»",
        ["Taylor Swift — Shake It Off (2014)", "The Beatles — Yesterday (1965)"]
      ),
      secKnowledge("Bridge",
        "Запропонувати контраст перед фінальними приспівами — зміну гармонії, нову перспективу.",
        "Брідж — це когнітивне оновлення: після двох повторів куплет-приспів слухач звикає до форми. Брідж ламає шаблон і повертає увагу.",
        "Брідж, який не відрізняється від решти пісні — втрачає функцію контрасту. Брідж занадто довгий — слухач чекає повернення приспіву.",
        "У піснях короткого формату (2:30 і менше), де брідж займає місце, яке краще використати для приспіву.",
        "«Чи додає брідж нову емоційну фарбу, якої не було в куплеті чи приспіві?»",
        ["The Beatles — In My Life (1965)", "Lady Gaga — Bad Romance (2009)"]
      ),
      secKnowledge("Final chorus",
        "Завершити пісню найсильнішою версією приспіву — з посиленням, розширенням або ключовою зміною.",
        "Фінальний приспів — це катарсис. Повторення плюс посилення створює відчуття «приходу» — ніби подорож завершена.",
        "Фінальний приспів, який звучить так само, як перший — втрачена можливість для завершення. Занадто багато змін — слухач не впізнає знайомий хук.",
        "У треках, де завершення має бути мінімалістичним або раптовим (деякі інді-рок треки).",
        "«Чи відчуває слухач, що це останній раз, коли він чує цей приспів?»",
        ["Michael Jackson — Billie Jean (1982)", "Queen — Bohemian Rhapsody (1975)"]
      )
    ],

    failureAnalysis: [
      failureEntry("Intro", "Пісня починається одразу з куплету", [
        "Слухач не встигає зорієнтуватися в темпі та тональності",
        "Енергія стартує занадто високо — немає місця для зростання",
        "Куплет втрачає контраст, бо немає «тихішого» початку"
      ]),
      failureEntry("Verse 1", "Куплет видалено", [
        "Приспів звучить без контексту — слухач не знає про що пісня",
        "Відсутній контраст із приспівом — форма стає одноманітною",
        "Хук втрачає сенс — він має щось «закріплювати»"
      ]),
      failureEntry("Pre-chorus", "Пре-хорус видалено", [
        "Перехід від куплету до приспіву різкий — слухач не встигає підготуватися",
        "Приспів відчувається менш потужним, бо немає рампи",
        "Рівень енергії стрибає замість плавного підйому"
      ]),
      failureEntry("Chorus", "Приспів видалено", [
        "Пісня не має центрального хука — нічого не запам'ятовується",
        "Повторення не має сенсу — немає точки, до якої форма повертається",
        "Куплети стають безцільними — вони ні до чого не ведуть"
      ]),
      failureEntry("Verse 2", "Другий куплет видалено", [
        "Після першого приспіву відразу брідж — форма стиснена, розвиток втрачено",
        "Менше часу для оповіді — історія залишається неповною",
        "Повторення форми куплет-приспів не відбувається — слухач не встигає засвоїти структуру"
      ]),
      failureEntry("Bridge", "Брідж видалено", [
        "Менше контрасту — форма стає лінійною",
        "Фінальний приспів слабший, бо немає зміни перспективи",
        "Відсутній момент «оновлення» уваги слухача"
      ]),
      failureEntry("Final chorus", "Фінальний приспів не посилено", [
        "Пісня закінчується без катарсису",
        "Повторення попереднього приспіву без змін — відчуття «сходу на місці»",
        "Втрачена можливість для емоційного завершення"
      ])
    ],

    variants: [
      variant("ABAB",
        "Поп, рок, кантрі",
        "Класична форма. Чередування куплет-приспів без бріджа.",
        "Плюс: проста, передбачувана. Мінус: може бути монотонною після 3+ повторів."
      ),
      variant("ABABCB",
        "Поп, рок (найпоширеніша)",
        "Стандартна форма з бріджем перед фінальним приспівом.",
        "Плюс: брідж додає контраст. Мінус: потребує більше часу (3:30+)."
      ),
      variant("AABA",
        "Джазові стандарти, бродвейські пісні",
        "Два куплети, брідж, повернення до куплету. Немає окремого приспіву.",
        "Плюс: оповідна безперервність. Мінус: менш пам'ятна для масової аудиторії."
      )
    ],

    canonicalTracks: [
      track("Billie Jean", "Michael Jackson", 1982,
        "Класичний ABABCB. Інтро → куплет → пре-хорус → приспів → куплет 2 → брідж → приспів → аутро. Чітке розділення секцій.",
        [
          { name: "Intro", time: "0:00–0:19" },
          { name: "Verse 1", time: "0:20–0:49" },
          { name: "Pre-chorus", time: "0:50–0:58" },
          { name: "Chorus", time: "0:59–1:22" },
          { name: "Verse 2", time: "1:23–1:52" },
          { name: "Bridge", time: "1:53–2:28" },
          { name: "Final chorus", time: "2:29–3:10" },
          { name: "Outro", time: "3:11–4:55" }
        ], "pop", { segmentation: 85, repetition: 70, contrast: 75, directionality: 80 }
      ),
      track("Blank Space", "Taylor Swift", 2014,
        "Сучасний поп-ABABCB з пре-хорусом. Контраст куплет (оповідь) → приспів (вибух).",
        [
          { name: "Intro", time: "0:00–0:15" },
          { name: "Verse 1", time: "0:16–0:44" },
          { name: "Pre-chorus", time: "0:45–0:60" },
          { name: "Chorus", time: "1:01–1:29" },
          { name: "Verse 2", time: "1:30–1:57" },
          { name: "Bridge", time: "1:58–2:30" },
          { name: "Final chorus", time: "2:31–3:15" }
        ], "pop", { segmentation: 90, repetition: 75, contrast: 80, directionality: 75 }
      ),
      track("Bohemian Rhapsody", "Queen", 1975,
        "Унікальна форма: балада → опера → рок. Контраст максимальний, повторення мінімальне.",
        [
          { name: "Intro (ballad)", time: "0:00–0:50" },
          { name: "Ballad verse", time: "0:51–1:50" },
          { name: "Opera bridge", time: "1:51–3:05" },
          { name: "Rock section", time: "3:06–3:40" },
          { name: "Outro", time: "3:41–5:55" }
        ], "rock", { segmentation: 60, repetition: 30, contrast: 95, directionality: 85 }
      ),
      track("Rolling in the Deep", "Adele", 2010,
        "Потужний контраст куплет (низька щільність) і приспів (повна енергія). Пре-хорус створює передчуття.",
        [
          { name: "Intro", time: "0:00–0:10" },
          { name: "Verse 1", time: "0:11–0:44" },
          { name: "Pre-chorus", time: "0:45–1:00" },
          { name: "Chorus", time: "1:01–1:32" },
          { name: "Verse 2", time: "1:33–2:06" },
          { name: "Bridge", time: "2:07–2:40" },
          { name: "Final chorus", time: "2:41–3:22" }
        ], "pop", { segmentation: 85, repetition: 70, contrast: 85, directionality: 80 }
      ),
      track("Smells Like Teen Spirit", "Nirvana", 1991,
        "Мінімальний гармонійний контраст (ті ж акорди), але величезний динамічний. Навчає: контраст не обов'язково гармонійний.",
        [
          { name: "Riff intro", time: "0:00–0:20" },
          { name: "Verse 1", time: "0:21–0:54" },
          { name: "Chorus", time: "0:55–1:20" },
          { name: "Verse 2", time: "1:21–1:54" },
          { name: "Chorus", time: "1:55–2:20" },
          { name: "Guitar solo (bridge)", time: "2:21–3:00" },
          { name: "Final chorus", time: "3:01–3:40" },
          { name: "Outro", time: "3:41–5:01" }
        ], "grunge", { segmentation: 80, repetition: 80, contrast: 70, directionality: 85 }
      ),
      track("Livin' on a Prayer", "Bon Jovi", 1986,
        "Пре-хорус піднімає енергію, приспів вивільняє. Приклад катарсису через накопичення.",
        [
          { name: "Intro", time: "0:00–0:20" },
          { name: "Verse 1", time: "0:21–0:52" },
          { name: "Pre-chorus", time: "0:53–1:07" },
          { name: "Chorus", time: "1:08–1:35" },
          { name: "Verse 2", time: "1:36–2:04" },
          { name: "Guitar solo (bridge)", time: "2:05–2:30" },
          { name: "Final chorus", time: "2:31–3:40" },
          { name: "Outro", time: "3:41–4:08" }
        ], "rock", { segmentation: 85, repetition: 75, contrast: 80, directionality: 80 }
      ),
      track("Hey Jude", "The Beatles", 1968,
        "«Na-na-na» кода триває 4 хв. Повторення як форма — оркестр поступово посилюється.",
        [
          { name: "Verse 1", time: "0:00–0:48" },
          { name: "Verse 2", time: "0:49–1:35" },
          { name: "Bridge", time: "1:36–2:10" },
          { name: "Verse 3", time: "2:11–2:55" },
          { name: "Refrain (na-na-na)", time: "2:56–7:00" }
        ], "rock", { segmentation: 70, repetition: 85, contrast: 60, directionality: 70 }
      ),
      track("bad guy", "Billie Eilish", 2019,
        "Куплет — шепіт, приспів — бас + ритм. Контраст у продакшені, а не в інструментуванні.",
        [
          { name: "Verse 1", time: "0:00–0:37" },
          { name: "Chorus", time: "0:38–1:00" },
          { name: "Verse 2", time: "1:01–1:33" },
          { name: "Chorus", time: "1:34–1:55" },
          { name: "Bridge", time: "1:56–2:20" },
          { name: "Final chorus", time: "2:21–2:40" }
        ], "alt-pop", { segmentation: 85, repetition: 70, contrast: 75, directionality: 70 }
      ),
      track("Umbrella", "Rihanna", 2007,
        "ABABCB. Приспів «Ella, ella» — один з найвпізнаваніших хоків. Пре-хорус створює напругу.",
        [
          { name: "Intro", time: "0:00–0:15" },
          { name: "Verse 1", time: "0:16–0:46" },
          { name: "Pre-chorus", time: "0:47–0:58" },
          { name: "Chorus", time: "0:59–1:25" },
          { name: "Verse 2", time: "1:26–1:55" },
          { name: "Bridge", time: "1:56–2:30" },
          { name: "Final chorus", time: "2:31–3:35" }
        ], "r&b", { segmentation: 85, repetition: 75, contrast: 75, directionality: 75 }
      ),
      track("Get Lucky", "Daft Punk", 2013,
        "Чотириакордова послідовність без змін. Форма тримається на вокалі та текстурі. Навчає: форма можлива на одній гармонії.",
        [
          { name: "Intro", time: "0:00–0:20" },
          { name: "Verse 1", time: "0:21–1:00" },
          { name: "Chorus", time: "1:01–1:30" },
          { name: "Verse 2", time: "1:31–2:10" },
          { name: "Guitar solo", time: "2:11–2:40" },
          { name: "Final chorus", time: "2:41–3:30" },
          { name: "Outro", time: "3:31–5:50" }
        ], "funk", { segmentation: 80, repetition: 75, contrast: 70, directionality: 80 }
      )
    ],

    diagnosis: [
      "Чи відчувається приспів більшим, ніж куплет?",
      "Чи вносить брідж нову перспективу (гармонійну, ліричну, текстурну)?",
      "Чи може слухач передбачити приспів після одного прослуховування куплету?",
      "Чи контрастують куплет і приспів щонайменше за двома параметрами (щільність, регістр, гармонія)?",
      "Чи має фінальний приспів посилення (енергія, нові елементи, ключова зміна)?",
      "Чи не здається пре-хорус занадто довгим або непотрібним?",
      "Чи пам'ятає слухач хук після одного прослуховування?"
    ],

    genreTransfer: [
      genreTransfer("Pop", "Найчастіше ABABCB. Хук — головна подія.", "Хук має бути мелодійно простим і повторюваним; приспів — найяскравіша частина."),
      genreTransfer("Rock", "ABAB з гітарним соло як бріджем.", "Контраст часто створюється через динаміку (тихий куплет / гучний приспів)."),
      genreTransfer("EDM", "Verse-drop замість verse-chorus; вокал є куплетом, дроп — приспівом.", "Приспів замінюється на дроп; важливіше енергетичне вивільнення, ніж мелодійний хук."),
      genreTransfer("Hip-Hop", "AABA або AAA — куплети з хуком (hook) що повторюється.", "Хук часто є семплом або вокальним фразом, а не мелодійним приспівом."),
      genreTransfer("Film Music", "Тема та варіації — куплет як тема, приспів як варіація.", "Хук є темою, але її повторення відбувається через оркестровку, а не текст.")
    ],
    dawExercise: [
      "Створи 16 тактів: 8 тактів куплет (тільки фортепіано + вокал) → 8 тактів приспів (повний бенд).",
      "Переконайся, що приспів звучить більше за куплет хоча б за двома параметрами: щільність, гучність, регістр.",
      "Тепер додай пре-хорус (4 такти) між куплетом і приспівом.",
      "Додай брідж (8 тактів) після другого приспіву. Брідж має змінити гармонію або текстуру.",
      "Зроби фінальний приспів довшим або більш насиченим за перший."
    ],
    listeningExercise: [
      "Послухай Billie Jean (Michael Jackson). Як інтро (бас + хай-хет) готує появу вокалу?",
      "Порівняй куплет і приспів у Rolling in the Deep (Adele) — які елементи додаються в приспіві?",
      "Послухай Blank Space (Taylor Swift). Порахуй: скільки разів повторюється приспів? Чи змінюється він?",
      "Послухай Livin' on a Prayer (Bon Jovi). Зверни увагу, як пре-хорус створює передчуття."
    ],
    comparisons: [
      { with: "Club Arc", difference: "Verse-Chorus базується на ПОВЕРНЕННІ хука; Club Arc — на ЕНЕРГЕТИЧНІЙ дузі. В VC головне — щоб слухач запам'ятав мелодію; в Club Arc — щоб відчув вивільнення." },
      { with: "Rondo", difference: "Обидва мають повторювану тему. В VC хук може змінювати текст і енергію; в Rondo рефрен повертається майже ідентичним." },
      { with: "Through-Composed", difference: "VC повертається до приспіву — TC не повторює нічого. VC дає слухачеві опору; TC веде вперед без якоря." },
      { with: "Head-Solo-Head", difference: "Обидва мають тему, яка повертається. В VC тема (chorus) фіксована; в HSH тема служить гармонічною рамкою для імпровізації." },
      { with: "12-Bar Blues", difference: "12-Bar — гармонічний цикл (форма = акорди). VC — тематичний цикл (форма = мелодія і приспів). Обидва повторюються, але різними засобами." }
    ],
    glossary: [
      { term: "Hook", definition: "Короткий мелодийний фрагмент, який запам'ятовується. Центр уваги в приспіві." },
      { term: "Pre-chorus", definition: "Перехідна секція (4-8 тактів) між куплетом і приспівом. Створює очікування." },
      { term: "Bridge", definition: "Секція контрасту (8 тактів) після другого приспіву. Нова гармонія, ламає шаблон." },
      { term: "ABABCB", definition: "Стандартна поп-структура: A=verse (куплет), B=chorus (приспів), C=bridge." },
      { term: "Dynamic Contrast", definition: "Різниця в енергії між куплетом (тихо) і приспівом (гучно). Мінімум 2 параметри." }
    ],
    teacherNotes: [
      "Найчастіша помилка: студент робить куплет і приспів з однаковою енергією. Приспів має бути відповіддю на питання куплету.",
      "Аналогія: куплет — розмова, приспів — крик. Різниця має відчуватися фізично.",
      "Студенти плутають pre-chorus і bridge. Pre-chorus готує приспів; bridge замінює приспів.",
      "Покажіть Billie Jean без приспіву — студент відчує, що чогось не вистачає."
    ],
    deviations: [
      { track: "Bohemian Rhapsody (Queen, 1975)", explanation: "Немає приспіву. Форма: балада → опера → рок. Контраст замінює повторення." },
      { track: "Hey Jude (The Beatles, 1968)", explanation: "Кода 4 хв — довше за пісню. Повторення як форма через нашарування оркестру." },
      { track: "bad guy (Billie Eilish, 2019)", explanation: "Мінімальний динамічний контраст. Текстурний контраст замість гучності." },
      { track: "Get Lucky (Daft Punk, 2013)", explanation: "Одна гармонія на всю пісню. Форма тримається на текстурі та вокалі." }
    ]
  },

  // ============================================================
  // Club Arc (Electronic)
  // ============================================================
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
    conclusion: "Club-arc — це хореографія очікування: повторення, розрив, вивільнення, повернення.",

    sectionKnowledge: [
      secKnowledge("Intro",
        "Створити простір для DJ-міксу, встановити темп і перші текстурні підказки.",
        "Інтро — це соціальна функція: воно дає DJ-ю час для міксу і готує тіло слухача до ритму.",
        "Інтро занадто коротке — неможливо зміксувати. Інтро без текстурних підказок — слухач не знає, чого чекати.",
        "У треках-інтро (перший трек сету), де мікс не потрібен.",
        "«Чи дає це інтро DJ-ю достатньо часу для міксу (32-64 такти)?»",
        ["Daft Punk — Around the World (1997)", "Deadmau5 — Strobe (2009)"]
      ),
      secKnowledge("Groove",
        "Встановити основний ритмічний/гармонійний луп, який слухач запам'ятає.",
        "Грув — це те, що змушує тіло рухатися. Повторення тут не нудне, а необхідне — воно створює передбачуваність, у якій можна танцювати.",
        "Грув надто складний — слухач не може в нього «ввійти». Грув, який не повторюється достатньо довго — тіло не встигає навчитися.",
        "У треках, де вся енергія залежить від текстурного розвитку, а не від ритмічного хука.",
        "«Чи хочеться слухачеві рухатися в такт цьому груву?»",
        ["Daft Punk — Around the World (1997)", "Moby — Go (1991)"]
      ),
      secKnowledge("Build",
        "Створити напругу, яка зробить дроп виправданим.",
        "Білд — це психологічне очікування: слухач знає, що щось наближається, і передчуття приємніше за саму подію.",
        "Білд без прискорення або фільтрації — не створює напруги. Білд занадто довгий — слухач втрачає очікування.",
        "У треках, де контраст між секціями вже достатній без додаткової рампи.",
        "«Чи відчуває слухач, що дроп наближається?»",
        ["Deadmau5 — Strobe (2009)", "Eric Prydz — Opus (2015)"]
      ),
      secKnowledge("Drop",
        "Вивільнити накопичену напругу у вигляді повної енергії.",
        "Дроп — це винагорода за очікування. Без білду дроп — просто голосний звук. З білдом — катарсис.",
        "Дроп, який не виправдовує очікування білду. Дроп, який повторює те саме, що було до білду.",
        "У мінімалістичних треках, де напруга створюється через відсутність, а не через наявність.",
        "«Чи відчувається дроп як вивільнення, а не просто як гучна секція?»",
        ["Deadmau5 — Strobe (2009)", "Eric Prydz — Call On Me (2004)"]
      ),
      secKnowledge("Breakdown",
        "Скинути енергію, щоб наступний білд і дроп відчувалися свіжими.",
        "Брейкдаун — це дихання. У клубній музиці він необхідний, щоб слухач міг відпочити перед наступним сплеском.",
        "Брейкдаун занадто довгий — слухач втрачає танцювальний імпульс. Брейкдаун без текстури — нудьга.",
        "У треках, де вся енергія має залишатися високою (peak time техно).",
        "«Чи достатньо брейкдаун контрастує з дропом, щоб наступний дроп відчувався новим?»",
        ["Deadmau5 — Strobe (2009)", "Swedish House Mafia — Don't You Worry Child (2012)"]
      ),
      secKnowledge("Rebuild",
        "Повторно наростити напругу для другого дропу.",
        "Ребілд — це підтвердження форми: слухач уже знає, що після нього прийде дроп, і це знання посилює очікування.",
        "Ребілд, який копіює перший білд — передбачувано. Ребілд, який змінює забагато — слухач не впізнає форму.",
        "У треках з одним дропом (короткі клубні ремікси).",
        "«Чи додає ребілд нову енергію, чи просто повторює перший білд?»",
        ["Deadmau5 — Strobe (2009)", "Moby — Porcelain (1999)"]
      ),
      secKnowledge("Outro",
        "Зменшити елементи для виходу міксу і закриття форми.",
        "Аутро — це DJ-функція: воно дозволяє плавно перейти до наступного треку. Для слухача — повернення до початку.",
        "Аутро без редукції елементів — неможливо зміксувати. Аутро надто коротке — DJ не встигає.",
        "У треках, які є завершенням сету (аутро-треки).",
        "«Чи залишає аутро простір для наступного треку?»",
        ["Daft Punk — Around the World (1997)", "Deadmau5 — Strobe (2009)"]
      )
    ],

    failureAnalysis: [
      failureEntry("Intro", "Інтро видалено", [
        "Неможливо зміксувати — DJ не має простору для входу",
        "Слухач не встигає зорієнтуватися в темпі",
        "Енергія стартує надто високо — немає місця для росту"
      ]),
      failureEntry("Groove", "Грув видалено", [
        "Трек втрачає ритмічний центр — немає до чого прив'язатися",
        "Білд не має сенсу — немає «нормального» стану, від якого відштовхуватися",
        "Дроп не відчувається як зміна, бо не було встановлено базову енергію"
      ]),
      failureEntry("Build", "Білд видалено", [
        "Дроп не має напруги — він просто голосний, але не катарсичний",
        "Перехід від груву до дропу різкий — слухач не встигає підготуватися",
        "Очікування не створене — вивільнення не виправдане"
      ]),
      failureEntry("Drop", "Дроп видалено", [
        "Трек не має кульмінації — енергія нікуди не вивільняється",
        "Білд веде в нікуди — слухач відчуває обман",
        "Клубна функція втрачена — танцювальний майданчик не отримує піку"
      ]),
      failureEntry("Breakdown", "Брейкдаун видалено", [
        "Другий дроп не має контрасту — повторює перший без змін",
        "Слухач втомлюється — без перепочинку енергія стає монотонною",
        "Форма втрачає дихання — стає лінійною"
      ]),
      failureEntry("Outro", "Аутро видалено", [
        "DJ не може зміксувати наступний трек",
        "Трек закінчується різко — слухач не розуміє, що форма завершена",
        "Втрачена можливість плавного виходу"
      ])
    ],

    variants: [
      variant("Intro → Groove → Drop → Breakdown → Drop → Outro",
        "Техно, мінімал (peak time)",
        "Білд і ребілд об'єднані або скорочені. Менше драматичної рампи.",
        "Плюс: вища щільність енергії. Мінус: менше контрасту між секціями."
      ),
      variant("Intro → Groove → Breakdown → Build → Drop → Outro",
        "Драм-енд-бейс, дабстеп",
        "Брейкдаун перед білдом — несподіване скидання енергії перед фінальним вибухом.",
        "Плюс: драматичний контраст. Мінус: ризик втратити танцювальний імпульс."
      ),
      variant("Intro → Groove → Drop → Drop (варіація) → Outro",
        "Хаус, поп-EDM",
        "Мінімальна форма без брейкдауну. Два дропи з невеликими змінами.",
        "Плюс: енергія залишається високою. Мінус: може бути монотонною."
      )
    ],

    canonicalTracks: [
      track("Strobe", "Deadmau5", 2009,
        "Еталонний club-arc. 10-хвилинна подорож: інтро → грув → білд → дроп → брейкдаун → ребілд → дроп → аутро.",
        [
          { name: "Intro (ambient)", time: "0:00–1:30" },
          { name: "Groove", time: "1:31–3:30" },
          { name: "Build", time: "3:31–4:30" },
          { name: "Drop", time: "4:31–5:45" },
          { name: "Breakdown", time: "5:46–6:45" },
          { name: "Rebuild", time: "6:46–8:00" },
          { name: "Final drop", time: "8:01–9:00" },
          { name: "Outro", time: "9:01–10:37" }
        ], "progressive house", { segmentation: 85, repetition: 50, contrast: 80, directionality: 90 }
      ),
      track("Around the World", "Daft Punk", 1997,
        "Лінійний club-arc з акцентом на текстуру. Секції: інтро → бас → грув → фільтр → грув → аутро.",
        [
          { name: "Intro", time: "0:00–0:30" },
          { name: "Bass enters", time: "0:31–1:00" },
          { name: "Full groove", time: "1:01–2:30" },
          { name: "Filter sweep", time: "2:31–3:00" },
          { name: "Groove returns", time: "3:01–5:00" },
          { name: "Outro", time: "5:01–7:28" }
        ], "house", { segmentation: 70, repetition: 85, contrast: 40, directionality: 60 }
      ),
      track("Opus", "Eric Prydz", 2015,
        "Прогресив-хаус arc. Довга форма (9 хв) з поступовим наростанням і тривалим клімаксом.",
        [
          { name: "Ambient intro", time: "0:00–1:30" },
          { name: "Pulse", time: "1:31–3:00" },
          { name: "Groove develops", time: "3:01–5:00" },
          { name: "Build-up", time: "5:01–6:30" },
          { name: "Climax", time: "6:31–8:00" },
          { name: "Outro", time: "8:01–9:05" }
        ], "progressive house", { segmentation: 75, repetition: 55, contrast: 65, directionality: 90 }
      ),
      track("Don't You Worry Child", "Swedish House Mafia", 2012,
        "Поп-EDM club-arc з вокальним куплетом і мелодійним дропом.",
        [
          { name: "Piano intro", time: "0:00–0:30" },
          { name: "Verse", time: "0:31–1:15" },
          { name: "Build", time: "1:16–1:45" },
          { name: "Drop", time: "1:46–2:30" },
          { name: "Breakdown", time: "2:31–3:15" },
          { name: "Final drop", time: "3:16–4:20" },
          { name: "Outro", time: "4:21–5:20" }
        ], "progressive house", { segmentation: 80, repetition: 65, contrast: 75, directionality: 85 }
      ),
      track("Call On Me", "Eric Prydz", 2004,
        "Мінімалістичний club-arc. Короткий білд, швидкий дроп. Ефективність через стислість.",
        [
          { name: "Intro (piano)", time: "0:00–0:15" },
          { name: "Groove", time: "0:16–0:45" },
          { name: "Build", time: "0:46–1:00" },
          { name: "Drop", time: "1:01–1:30" },
          { name: "Breakdown", time: "1:31–2:00" },
          { name: "Drop 2", time: "2:01–2:30" },
          { name: "Outro", time: "2:31–2:50" }
        ], "house", { segmentation: 80, repetition: 70, contrast: 70, directionality: 80 }
      ),
      track("Go", "Moby", 1991,
        "Ранній club-arc. Семпл з Twin Peaks як хук. Проста форма, ефективна через мінімалізм.",
        [
          { name: "Intro (sample)", time: "0:00–0:30" },
          { name: "Beat enters", time: "0:31–1:30" },
          { name: "Full groove", time: "1:31–2:30" },
          { name: "Breakdown", time: "2:31–3:00" },
          { name: "Re-entry", time: "3:01–3:45" },
          { name: "Outro", time: "3:46–4:30" }
        ], "electronica", { segmentation: 75, repetition: 65, contrast: 60, directionality: 70 }
      ),
      track("Sandstorm", "Darude", 1999,
        "Класичний трансовий arc. Білд — один з найвпізнаваніших в історії EDM. Форма: інтро → білд → дроп → брейкдаун → фінальний дроп.",
        [
          { name: "Intro (kick)", time: "0:00–0:30" },
          { name: "Build", time: "0:31–0:55" },
          { name: "Drop (melody)", time: "0:56–1:30" },
          { name: "Breakdown", time: "1:31–2:20" },
          { name: "Build 2", time: "2:21–2:40" },
          { name: "Final drop", time: "2:41–3:20" },
          { name: "Outro", time: "3:21–3:45" }
        ], "trance", { segmentation: 80, repetition: 60, contrast: 70, directionality: 85 }
      ),
      track("Levels", "Avicii", 2011,
        "Еталонний поп-EDM arc. Вокальний семпл як хук. Форма: піаніно → білд → дроп → брейкдаун → фінальний дроп.",
        [
          { name: "Piano intro", time: "0:00–0:20" },
          { name: "Build 1", time: "0:21–0:45" },
          { name: "Drop 1", time: "0:46–1:15" },
          { name: "Breakdown", time: "1:16–1:45" },
          { name: "Build 2", time: "1:46–2:10" },
          { name: "Final drop", time: "2:11–3:00" },
          { name: "Outro", time: "3:01–3:20" }
        ], "edm", { segmentation: 85, repetition: 65, contrast: 75, directionality: 85 }
      ),
      track("One More Time", "Daft Punk", 2000,
        "Французький хаус arc. Одна гармонія, мінімум секцій. Форма тримається на текстурних змінах та вокалі.",
        [
          { name: "Intro (vocal)", time: "0:00–0:30" },
          { name: "Beat enters", time: "0:31–1:00" },
          { name: "Full groove", time: "1:01–2:00" },
          { name: "Filter breakdown", time: "2:01–2:30" },
          { name: "Groove returns", time: "2:31–3:45" },
          { name: "Outro", time: "3:46–5:20" }
        ], "house", { segmentation: 75, repetition: 80, contrast: 50, directionality: 70 }
      ),
      track("Adagio for Strings", "Tiësto", 2005,
        "Трансова версія класичної теми. Драматичний arc: повільне наростання → кульмінація → спад.",
        [
          { name: "Ambient intro", time: "0:00–1:00" },
          { name: "Theme (strings)", time: "1:01–2:30" },
          { name: "Beat enters", time: "2:31–3:30" },
          { name: "Build-up", time: "3:31–4:30" },
          { name: "Climax", time: "4:31–6:00" },
          { name: "Dissolution", time: "6:01–7:30" },
          { name: "Outro", time: "7:31–8:05" }
        ], "trance", { segmentation: 80, repetition: 55, contrast: 85, directionality: 90 }
      ),

      // ===== Techno Family =====
      track("The Bells", "Jeff Mills", 1992,
        "Детройт-техно. 4-хвилинна гіпнотична форма. Жодної мелодії — форма тримається на ритмі, перкусії та текстурі.",
        [
          { name: "Kick intro", time: "0:00–0:30" },
          { name: "Hi-hat enters", time: "0:31–0:45" },
          { name: "Percussion layer", time: "0:46–1:15" },
          { name: "Build (noise)", time: "1:16–2:00" },
          { name: "Peak", time: "2:01–2:30" },
          { name: "Filter retreat", time: "2:31–3:15" },
          { name: "Outro (kick only)", time: "3:16–4:00" }
        ], "techno", { segmentation: 70, repetition: 80, contrast: 55, directionality: 85 }
      ),
      track("The Pace", "Robert Hood", 1994,
        "Мінімал-техно. 6-хвилинна форма з майже непомітними змінами. Мікрозміни створюють форму: кожен новий перкусійний елемент = секція.",
        [
          { name: "Kick only", time: "0:00–1:00" },
          { name: "Closed hat", time: "1:01–2:00" },
          { name: "Snare enters", time: "2:01–3:00" },
          { name: "Full rhythm", time: "3:01–4:00" },
          { name: "Filter sweep", time: "4:01–4:30" },
          { name: "Unravel", time: "4:31–5:30" },
          { name: "Kick fades", time: "5:31–6:00" }
        ], "minimal techno", { segmentation: 65, repetition: 90, contrast: 40, directionality: 75 }
      ),

      // ===== Dub Techno (bridge to Drone) =====
      track("Radiance", "Basic Channel", 1994,
        "Dub-техно. Немає дропу, немає білду. Форма = delay trails + reverb washes. Події — це відлуння, не нові елементи.",
        [
          { name: "Sub-bass pulse", time: "0:00–0:30" },
          { name: "Kick enters", time: "0:31–1:00" },
          { name: "Delay wash", time: "1:01–2:00" },
          { name: "Chord fragment", time: "2:01–3:00" },
          { name: "Dub delay decay", time: "3:01–4:30" },
          { name: "Ghost pulse", time: "4:31–5:30" },
          { name: "Dissolve", time: "5:31–6:45" }
        ], "dub techno", { segmentation: 35, repetition: 85, contrast: 25, directionality: 45 }
      ),

      // ===== Bass Music Family =====
      track("Scary Monsters and Nice Sprites", "Skrillex", 2010,
        "Бростеп. Максимальний контраст: тихий breakdown → масивний half-time drop. Snare roll = build, wobble bass = drop.",
        [
          { name: "Intro (synth)", time: "0:00–0:30" },
          { name: "Beat + vocal", time: "0:31–1:00" },
          { name: "Build (snare roll)", time: "1:01–1:15" },
          { name: "Drop (half-time)", time: "1:16–1:45" },
          { name: "Breakdown", time: "1:46–2:15" },
          { name: "Build 2", time: "2:16–2:30" },
          { name: "Drop 2", time: "2:31–3:00" },
          { name: "Outro", time: "3:01–3:30" }
        ], "dubstep", { segmentation: 85, repetition: 60, contrast: 95, directionality: 80 }
      ),
      track("Changes", "Mala", 2006,
        "Діп-дабстеп. Форма через простір і бас. Sub-bass визначає секції: вхід → глибина → повернення.",
        [
          { name: "Sub-bass intro", time: "0:00–0:30" },
          { name: "Beat + sub", time: "0:31–1:30" },
          { name: "Drop (weight)", time: "1:31–2:00" },
          { name: "Space (break)", time: "2:01–2:30" },
          { name: "Sub returns", time: "2:31–3:00" },
          { name: "Dissolve", time: "3:01–3:30" }
        ], "deep dubstep", { segmentation: 60, repetition: 75, contrast: 55, directionality: 65 }
      ),

      // ===== D&B Family =====
      track("Stigma", "Noisia", 2008,
        "Ньюрофанк. Double-time drums + complex Reese bass. Форма через звуковий дизайн — кожна секція має нову bass texture.",
        [
          { name: "Atmosphere", time: "0:00–0:30" },
          { name: "Drums enter (D&B)", time: "0:31–1:00" },
          { name: "Build (Reese filter)", time: "1:01–1:15" },
          { name: "Drop (neuro bass)", time: "1:16–2:00" },
          { name: "Breakdown", time: "2:01–2:30" },
          { name: "Drop 2 (variation)", time: "2:31–3:15" },
          { name: "Outro", time: "3:16–3:45" }
        ], "neurofunk", { segmentation: 85, repetition: 60, contrast: 85, directionality: 80 }
      ),

      // ===== House Family =====
      track("Baby Wants to Ride", "Frankie Knuckles", 1987,
        "Класичний чиказький хаус. Форма через фільтрацію: kick → bass → clap → filter sweep = секції. Groove стає щільнішим, дропу немає.",
        [
          { name: "Kick only", time: "0:00–0:30" },
          { name: "Bassline enters", time: "0:31–1:00" },
          { name: "Clap + hi-hat", time: "1:01–1:30" },
          { name: "Vocal sample", time: "1:31–2:00" },
          { name: "Filter sweep", time: "2:01–2:30" },
          { name: "Full groove", time: "2:31–3:30" },
          { name: "Filter out", time: "3:31–4:00" },
          { name: "Kick fade", time: "4:01–4:30" }
        ], "house", { segmentation: 70, repetition: 85, contrast: 50, directionality: 65 }
      )
    ],

    diagnosis: [
      "Чи відчувається дроп як винагорода за очікування білду?",
      "Чи достатньо грув повторюється, щоб слухач міг у нього «ввійти»?",
      "Чи достатньо брейкдаун контрастує з дропом?",
      "Чи може DJ зміксувати другий трек у це аутро?",
      "Чи відчувається форма як подорож, а не набір секцій?",
      "Чи відрізняється другий дроп від першого достатньо, щоб бути цікавим, але не настільки, щоб бути невпізнанним?"
    ],

    genreTransfer: [
      genreTransfer("Techno (Detroit / Minimal)", "Мінімальний arc — менше контрасту, більше текстури. Форма через ритм, не через мелодію.", "Дроп ледь помітний — зміна відбувається через додавання/видалення перкусії, не через гучність."),
      genreTransfer("Dub Techno", "Arc без дропу — форма через delay + reverb. Події = відлуння, не нові елементи.", "Kick є, але вивільнення відбувається в просторі, не в енергії. Патерн: pulse → delay → dissolve."),
      genreTransfer("Dubstep (Brostep)", "Half-time drop після double-time build. Максимальний контраст: тиша vs вибух.", "Snare roll = build. Wobble bass = drop. Breakdown обов'язковий для контрасту другого дропу."),
      genreTransfer("Deep Dubstep", "Мінімальний arc. Sub-bass несе форму. Менше контрасту, більше простору.", "Drop — це не вибух, а вага. Форма: sub → beat → weight → space → sub."),
      genreTransfer("Drum & Bass", "Double-time drums. Build коротший (8 bars), drop = rolling bass.", "Енергія від ритму, не від гучності. Drop = breaks + bass together."),
      genreTransfer("House (Classic)", "Filter-based arc. Жодного дропу — groove стає щільнішим.", "Секції = додавання елементів (kick → bass → clap). Форма через фільтр."),
      genreTransfer("Trance (Uplifting)", "Мелодійний arc — білд через гармонію, дроп через емоцію.", "Білд = orchestral swells + white noise. Дроп = euphoric melody. Контраст: piano breakdown → full drop."),
      genreTransfer("Film", "Мікшування як аналог клубного arc: тихіше → наростання → кульмінація.", "Білди і дропи в екшн-сценах працюють за тою ж логікою очікування."),
      genreTransfer("Classical", "Розробка як білд, реприза як дроп.", "Сонатна форма має той самий arc: експозиція (інтро) → розробка (білд) → реприза (дроп).")
    ],
    dawExercise: [
      "Створи 32 такти: 8 інтро → 8 грув → 4 білд → 8 дроп → 4 аутро.",
      "У білді додавай елементи кожні 2 такти: хай-хет → клеп → перкусія → райзер.",
      "Зроби дроп: прибери всі елементи крім кіка і баса, потім додай основний луп.",
      "Додай брейкдаун (8 тактів): прибери кік, залиши текстуру.",
      "Додай ребілд: поверни кік, додавай елементи поступово до другого дропу."
    ],
    listeningExercise: [
      "Послухай Strobe (deadmau5). Коли починається білд? Коли дроп? Скільки триває брейкдаун?",
      "Порівняй перший і другий дроп у Strobe. Чим вони відрізняються?",
      "Послухай Levels (Avicii). Які елементи додаються в білді і в якому порядку?",
      "Послухай Around the World (Daft Punk). Це club arc без брейкдауну — як форма тримається?"
    ],
    comparisons: [
      { with: "Verse-Chorus", difference: "Club Arc керується ЕНЕРГІЄЮ, не хуком. Дроп — це вивільнення напруги, а не мелодійний хук." },
      { with: "Process-Based Minimal", difference: "Club Arc має чіткі секції. Process-Based — безшовну трансформацію. Club Arc = архітектура секцій; Process-Based = архітектура зміни." },
      { with: "Drone", difference: "Club Arc будує і вивільняє напругу. Drone утримує стан. CA — подорож з кульмінацією; Drone — занурення без вибуху." },
      { with: "Sonata-Allegro", difference: "Обидва мають build → climax → resolution. В Club Arc це build→drop→breakdown. В Sonata це Exposition→Development→Recapitulation. Одна й та сама арка — різні контексти." }
    ],
    glossary: [
      { term: "Drop", definition: "Момент вивільнення накопиченої напруги. Зазвичай повернення повного ритму після білду. Головна подія в клубному треку." },
      { term: "Build", definition: "Секція наростання (16-32 такти). Додає елементи, підвищує щільність, використовує райзери. Створює очікування дропу." },
      { term: "Breakdown", definition: "Секція скидання енергії (16-32 такти). Забирає барабани, залишає текстуру. Перезавантажує увагу слухача." },
      { term: "Riser", definition: "Звук, що підвищується по висоті або гучності. Сигнал: «дроп наближається». Ключовий елемент білду." },
      { term: "Energy Arc", definition: "Форма як дуга енергії: низька (інтро) → середня (грув) → висока (білд) → пік (дроп) → низька (брейкдаун) → повтор." },
      { term: "DJ Intro/Outro", definition: "Функціональні секції для мікшування. Інтро: тільки ритм, без мелодії. Аутро: поступове видалення елементів." },
      { term: "Second Drop", definition: "Повторення дропу після брейкдауну. Зазвичай з варіацією (більше елементів, інша текстура, зміна басу)." }
    ],
    teacherNotes: [
      "Найчастіша помилка: студент будує дроп, але не будує білд. Дроп без білду — це просто чергова секція. Білд робить дроп подією.",
      "Аналогія: білд — це розбіг перед стрибком. Без розбігу стрибок слабкий. Студент має відчути фізичне очікування.",
      "Часте питання: «Чому мій дроп звучить слабко?» Відповідь: або білд занадто короткий, або райзер відсутній, або бас зникає в дропі.",
      "Порада: покажіть Strobe (deadmau5). На 3:30 зверніть увагу на білд. Студент має порахувати, скільки елементів додається.",
      "Студенти плутають breakdown і outro. Breakdown повертається до дропу; outro — ні. Breakdown має напругу; outro — ні."
    ],
    deviations: [
      { track: "Around the World (Daft Punk, 1997)", explanation: "Club arc без брейкдауну. Форма тримається на текстурних змінах (filter sweep) замість скидання енергії. Працює тому, що текстура змінюється достатньо, щоб оновити увагу." },
      { track: "Opus (Eric Prydz, 2015)", explanation: "Дуже довга форма (9 хв) з одним довгим білдом замість циклу build-drop-build. Кульмінація настає тільки раз. Працює як класична арка: повільне наростання → єдиний пік." },
      { track: "Call On Me (Eric Prydz, 2004)", explanation: "Мінімалістичний club arc. Білд триває 15 секунд — набагато коротше за стандарт. Працює тому, що семпл уже має вбудовану енергію." },
      { track: "One More Time (Daft Punk, 2000)", explanation: "Одна гармонія, одна текстура. Club arc без драматичних змін. Форма тримається тільки на вокальному семплі та фільтрації." }
    ],
    families: [
      {
          id: "classic-house",
        name: "Чиказький хаус",
        bpm: "118–130",
        period: "1985–1993",
        region: "Чикаго, США",
        scene: ["клубний підвал", "рейв-сквот", "радіо-піратство"],
        keyLabels: ["Trax Records", "DJ International", "Casa Records", "Westside Records", "Damage Records"],
        relatedFamilies: ["garage-house", "acid-house", "deep-house"],
        archetypeBridges: ["club-arc", "process-minimal"],

        structuralProfile: "Заснований на повторюваному 4/4 ритмі (kick drum на кожну долю) з поступовим нашаруванням елементів. Форма — довга лінійна дуга: інтро → грув → наростання → брейкдаун → повторне наростання → аутро.",
        energyProfile: "Енергія наростає поступово — через додавання текстур, а не через різкі зміни. Пік досягається синкопацією та відкриттям фільтрів, спад — через зняття перкусії та закриття hi-hat.",

        canonicalTracks: [
          {
            title: "Can You Feel It",
            artist: "Larry Heard (Mr. Fingers)",
            year: 1986,
            label: "Trax Records",
            analysis: "Колискова діп-хаусу: мінімальна структура з одним басовим рифом і синтезаторним акордом. Форма тримається на тонких змінах тембру та затримок.",
            archetypeScores: { segmentation: 60, repetition: 90, contrast: 40, directionality: 70 },
            timeline: [
              { name: "Інтро — синтезаторний акорд", time: "0:00" },
              { name: "Вхід біту (kick + clap)", time: "1:15" },
              { name: "Басова лінія приєднується", time: "2:00" },
              { name: "Додавання перкусії (шари)", time: "2:45" },
              { name: "Брейкдаун — акорд без ритму", time: "3:50" },
              { name: "Повернення біту та басу", time: "4:30" },
              { name: "Аутро — затухання", time: "5:30" }
            ],
            historicalContext: "Перший трек Larry Heard, випущений на Trax Records, що визначив звучання deep-house на десятиліття вперед.",
            productionNotes: "Записано на TR-909, Juno-60, Space Echo. Мінімальна кількість доріжок — уся магія у просторі."
          },
          {
            title: "Move Your Body",
            artist: "Marshall Jefferson",
            year: 1986,
            label: "Trax Records",
            analysis: "Фортепіанний хаус-гімн. Структура: інтро з фортепіано → вхід біту → вокал — класична хаус-побудова без дропа.",
            archetypeScores: { segmentation: 75, repetition: 85, contrast: 55, directionality: 80 },
            timeline: [
              { name: "Фортепіанне інтро", time: "0:00" },
              { name: "Kick drum + clap", time: "0:45" },
              { name: "Бас приєднується", time: "1:20" },
              { name: "Вокал — «Move your body»", time: "2:00" },
              { name: "Фортепіанне соло", time: "2:50" },
              { name: "Брейк — вокал а капела", time: "3:50" },
              { name: "Повернення повного міксу", time: "4:30" }
            ],
            historicalContext: "Вважається першим треком, де фортепіано стало центральним елементом хаус-музики.",
            productionNotes: "Записано на 4-доріжковий магнітофон. Фортепіано — Roland Juno-60, бас — TB-303."
          },
          {
            title: "Your Love",
            artist: "Frankie Knuckles & Jamie Principle",
            year: 1987,
            label: "Trax Records",
            analysis: "Вокальний хаус із секвенцією RB-303 на задньому плані. Розкішний ревербератор створює простір між вокальними фразами.",
            archetypeScores: { segmentation: 80, repetition: 70, contrast: 65, directionality: 75 },
            timeline: [
              { name: "Інтро — секвенція 303 + ревер", time: "0:00" },
              { name: "Вхід kick + hi-hat", time: "0:50" },
              { name: "Вокал — куплет", time: "1:30" },
              { name: "Хук — «Your love»", time: "2:20" },
              { name: "Брейкдаун — тільки 303 та вокал", time: "3:30" },
              { name: "Повернення біту та фільтр", time: "4:15" },
              { name: "Завершення — ревер згасає", time: "5:40" }
            ],
            historicalContext: "Співпраця Frankie Knuckles (батька хаусу) та Jamie Principle — один із перших вокальних хаус-треків.",
            productionNotes: "TB-303 із затримкою Roland RE-201 Space Echo. Вокал записано одним дублем."
          },
          {
            title: "Acid Tracks",
            artist: "Phuture",
            year: 1987,
            label: "Trax Records",
            analysis: "Перший acid house трек. Форма — майже чиста варіація тембру 303: фільтр відкривається, закривається, знову відкривається.",
            archetypeScores: { segmentation: 40, repetition: 95, contrast: 30, directionality: 60 },
            timeline: [
              { name: "Зародження 303 — закритий фільтр", time: "0:00" },
              { name: "Kick drum входить", time: "1:00" },
              { name: "303 починає модуляцію", time: "2:00" },
              { name: "Фільтр відкривається", time: "3:10" },
              { name: "Соло 303 — максимальний резонанс", time: "4:20" },
              { name: "Фільтр закривається", time: "7:00" },
              { name: "Затухання", time: "9:00" }
            ],
            historicalContext: "Демо-касета Phuture потрапила в руки Ron Hardy — він програв її в Music Box, і публіка збожеволіла. Trax Records випустили її без змін.",
            productionNotes: "TB-303 — єдиний мелодичний інструмент. Весь трек — імпровізація з резонансом і частотою фільтру."
          },
          {
            title: "Baby Wants to Ride / I Can't Stand It",
            artist: "Ten City",
            year: 1987,
            label: "Atlantic / DJ International",
            analysis: "Дуальна сторона — енергійний вокальний хаус з R&B впливом. Барабани 909, бас 303, просторі акорди Juno.",
            archetypeScores: { segmentation: 80, repetition: 75, contrast: 65, directionality: 80 },
            timeline: [
              { name: "Інтро — перкусія та акорди", time: "0:00" },
              { name: "Вхід повного біту", time: "0:40" },
              { name: "Вокал — куплет", time: "1:10" },
              { name: "Хук — «I Can't Stand It»", time: "2:00" },
              { name: "Брейкдаун — акорди + ревер", time: "3:00" },
              { name: "Фінальний хук із посиленням", time: "4:00" },
              { name: "Аутро — драмс + затухання", time: "5:30" }
            ],
            historicalContext: "Ten City (Byron Stingily) — одні з перших, хто приніс R&B вокал у хаус-контекст.",
            productionNotes: "TR-909 для барабанів, Juno-60 для акордів, Space Echo на вокал."
          },
          {
            title: "Cold World",
            artist: "Larry Heard (Mr. Fingers)",
            year: 1986,
            label: "Trax Records",
            analysis: "Темна сторона чиказького хаусу: мінорні акорди, глибокий бас, мінімальна перкусія. Форма нагадує повільний рух у тумані.",
            archetypeScores: { segmentation: 65, repetition: 80, contrast: 50, directionality: 70 },
            timeline: [
              { name: "Акордова текстура + ревер", time: "0:00" },
              { name: "Kick drum + хай-хет", time: "0:30" },
              { name: "Басова лінія", time: "1:15" },
              { name: "Додавання синтезаторної струни", time: "2:00" },
              { name: "Брейкдаун — барабани зникають", time: "3:30" },
              { name: "Повернення — посилення", time: "4:20" },
              { name: "Аутро — акорди тануть", time: "6:10" }
            ],
            historicalContext: "Приклад того, як Larry Heard перетворив обмеження на естетику — мінімум інструментів, максимум настрою.",
            productionNotes: "Juno-60 через Space Echo. Мінусовка записана на плівку одним треком."
          },
          {
            title: "Promised Land",
            artist: "Joe Smooth",
            year: 1987,
            label: "DJ International",
            analysis: "Хаус-гімн із соціальним текстом. Структура: піаніно + вокал об'єднуються в епічний приспів. Форма — ABAB (без бріджа).",
            archetypeScores: { segmentation: 85, repetition: 75, contrast: 70, directionality: 85 },
            timeline: [
              { name: "Інтро — фортепіано соло", time: "0:00" },
              { name: "Вхід біту та басу", time: "0:25" },
              { name: "Куплет 1", time: "1:00" },
              { name: "Приспів — «Promised Land»", time: "1:50" },
              { name: "Куплет 2", time: "2:30" },
              { name: "Приспів із посиленням", time: "3:20" },
              { name: "Аутро — фортепіано + аплодисменти", time: "5:25" }
            ],
            historicalContext: "Один із перших хаус-треків, який вийшов за межі танцполу — звучав на радіо та в клубах одночасно.",
            productionNotes: "Roland D-50 для фортепіано, TR-909, реверберація на вокал — EMT 140."
          },
          {
            title: "Love's Gonna Get You",
            artist: "Kym Mazelle",
            year: 1989,
            label: "DJ International / EMI",
            analysis: "Вокальний хаус із поп-структурою. Куплети-приспів чергуються, соло на фортепіано в середній секції.",
            archetypeScores: { segmentation: 85, repetition: 70, contrast: 75, directionality: 80 },
            timeline: [
              { name: "Інтро — фортепіано + ритм", time: "0:00" },
              { name: "Куплет 1", time: "0:35" },
              { name: "Приспів — «Love's Gonna Get You»", time: "1:15" },
              { name: "Куплет 2", time: "1:55" },
              { name: "Фортепіанне соло", time: "2:35" },
              { name: "Фінальний приспів", time: "3:30" },
              { name: "Аутро", time: "4:40" }
            ],
            historicalContext: "Kym Mazelle — одна з перших жінок-вокалісток, які зробили хаус мейнстримним у Великій Британії.",
            productionNotes: "Драм-машина — TR-909, клавіші — Korg M1, вокал через Lexicon reverb."
          },
          {
            title: "Risque — In Your Mind",
            artist: "Risque III",
            year: 1989,
            label: "DJ International",
            analysis: "Чиказький хаус із джазовим акцентом. Форма — довге наростання до вокального хука, який повторюється з варіаціями.",
            archetypeScores: { segmentation: 75, repetition: 80, contrast: 60, directionality: 75 },
            timeline: [
              { name: "Інтро — бас + клавіші", time: "0:00" },
              { name: "Вхід драмс", time: "0:40" },
              { name: "Куплет", time: "1:20" },
              { name: "Хук — «In Your Mind»", time: "2:10" },
              { name: "Соло/брейк", time: "3:00" },
              { name: "Повернення хука", time: "4:00" },
              { name: "Аутро — поступове зняття", time: "5:15" }
            ],
            historicalContext: "Risque III представляли більш фанкове крило чиказької сцени — вплив Parliament/Funkadelic.",
            productionNotes: "TR-707 для перкусії, Minimoog для басу, запис на 8-доріжковий магнітофон Tascam."
          },
          {
            title: "Mystery of Love",
            artist: "Mr. Fingers",
            year: 1986,
            label: "Trax Records",
            analysis: "Мінімалістичний інструментал: один лупа Juno-60, мінімальна перкусія. Форма — зміна через фільтрацію, а не через секції.",
            archetypeScores: { segmentation: 50, repetition: 90, contrast: 35, directionality: 60 },
            timeline: [
              { name: "Акордовий лупа Juno", time: "0:00" },
              { name: "Вхід kick + хай-хет", time: "0:50" },
              { name: "Додавання реверу на лупу", time: "1:40" },
              { name: "Зміна фільтрації", time: "2:30" },
              { name: "Зняття перкусії", time: "3:30" },
              { name: "Повернення лупи + ритм", time: "4:20" },
              { name: "Затухання", time: "5:00" }
            ],
            historicalContext: "Трек, який показав, що хаус може бути медитативним, а не лише енергійним.",
            productionNotes: "Juno-60, TR-909. Весь трек — один запис на 4-доріжковий магнітофон."
          },
          {
            title: "Wait",
            artist: "Jamie Principle",
            year: 1988,
            label: "Trax Records",
            analysis: "Темний, глибокий хаус із сексуальним вокалом Jamie Principle. 303 створює гіпнотичний басовий малюнок під вокальні фрази.",
            archetypeScores: { segmentation: 70, repetition: 80, contrast: 60, directionality: 75 },
            timeline: [
              { name: "Секвенція 303 + ревер", time: "0:00" },
              { name: "Вхід kick + clap", time: "0:40" },
              { name: "Вокал — куплет", time: "1:30" },
              { name: "Приспів — «Wait»", time: "2:15" },
              { name: "Брейкдаун", time: "3:30" },
              { name: "Фінальний вокал", time: "4:20" },
              { name: "Аутро — 303 + закриття фільтру", time: "5:30" }
            ],
            historicalContext: "Jamie Principle — автор деяких найраніших вокальних хаус-треків, співпрацював із Frankie Knuckles.",
            productionNotes: "TB-303, TR-909, RE-201 Space Echo. Вокал через плату затримки."
          }
        ],

        commonMistakes: [
          "Перевантаження міксу — чиказький хаус будується на просторі та мінімалізмі, а не на кількості звуків.",
          "Занадто швидкий розвиток — хаус потребує часу для нашарування; поспішне введення всіх елементів руйнує дугу.",
          "Відсутність простору/реверу — сухий мікс вбиває танцювальність; реверберація та затримка є частиною ритму.",
          "Гучний вокал без обробки — вокал має бути зануреним у простір, а не стояти зверху міксу.",
          "Складні зміни замість поступових — слухач на танцполі не аналізує; форма має працювати на рівні відчуттів."
        ],

        distinguishingFeatures: [
          "Kick drum на кожну долю (four-on-the-floor) — незмінний ритмічний каркас.",
          "Експресивний ревербератор та затримка (Roland RE-201 Space Echo) — простір як музичний елемент.",
          "Тепле аналогове обладнання — Juno-60, TB-303, TR-909 — надає характерного лампового звучання.",
          "Вокал як текстура, а не як оповідь — навіть коли є слова, вони підпорядковані ритму та настрою.",
          "Поступове нашарування замість дропів — енергія наростає через додавання, а не через різкі переходи.",
          "Фортепіано/акорди як центральний мелодичний елемент — успадковано від диско та госпелу."
                  ],

                  compositionDecisions: {
                    formBearer: "Повторюваний 4/4 ритм (four-on-the-floor) та простір реверберації. Не мелодія, не гармонія — ритмічний каркас і акустичний простір є носієм форми.",
                    development: "Поступове нашарування елементів (add-only). Кожен новий шар (перкусія, бас, акорди, вокал) додається і залишається. Розвиток — через зміну щільності, а не через гармонійну зміну.",
                    contrast: "Зняття елементів (break). Не дроп, не нова гармонія — контраст досягається тим, що зникає (зазвичай ритмічна секція), а не тим, що з'являється.",
                    styleBreakers: [
                      "Різкий дроп — чиказький хаус не має дропів, енергія наростає поступово",
                      "Гармонійна складність — хаус тримається на простоті; 2–3 акорди на весь трек",
                      "Сухий мікс — реверберація є частиною ритму, а не прикрасою",
                      "Швидкі зміни — хаус потребує часу для нашарування; зміни кожні 16–32 такти"
                    ]
                  },

                  designConstraints: {
                    bpm: "118–130",
                    sectionDuration: "16–32 такти (30–60 с)",
                    contrastLevel: "Низький–Середній (25–40%)",
                    density: "Низька–Середня (3–6 елементів одночасно)",
                    harmonicComplexity: "Низька (1–3 акорди, часто статичні)",
                    energyDynamics: "Поступове наростання — енергія зростає через додавання шарів, без різких піків"
                  },

                  productionTradition: {
          philosophy: "Чиказький хаус народився з обмежень — дешеве обладнання, малобюджетні студії, піратські радіостанції. Філософія: «зроби так, ніби ти граєш у клубі, а не будуєш студійний запис». Результат — звучання, де недосконалість стала естетикою, а простір — головним інструментом. Мінімум доріжок, максимум повітря, жива імпровізація на драм-машині.",

          coreTechniques: [
            {
              name: "Програмування TR-909: four-on-the-floor",
              description: "Основа чиказького хаусу — kick на кожну долю, clap на 2 та 4, відкритий hi-hat на оф-біт. Шари перкусії додаються поступово — спочатку kick та clap, потім hi-hat, потім шейкер або клевес. Драм-машина програмується в реальному часі, а не крок за кроком — це дає живий, дещо нерівномірний грув.",
              dawTranslation: {
                ableton: "Створи MIDI-кліп на 4 такти. Kick на C1 кожну чверть. Clap на D1 на 2 та 4 (velocity 100). Hi-hat на F#1 на кожну вісімку (velocity 85). Зроби шар перкусії на 8-му такті — додай шейкер на 16-х нотах (velocity 45). Використай Groove Pool (Swing 16) для невеликої нерівномірності.",
                flStudio: "Відкрий Channel Rack. Kick — 4/4 на C5 (Step Sequencer). Clap — на 2, 4, 6, 8, 10, 12, 14, 16. Hi-hat — 1/8 на закритому. Додай шейкер (FPC або Shaker sample) на 1/16 через 8 тактів. Активуй Swing (50–65%) у Pattern Settings.",
                logic: "Відкрий Piano Roll. Намалюй kick (C1) кожні 4 шістнадцяті. Clap (C#1) на 2 та 4. Hi-hat (F#1) на кожну вісімку. Додай шейкер на 8 такті. Використай квантування зі Swing (16-й нот) для груву. Застосуй Humanize (Randomize Velocity ±5)."
              }
            },
            {
              name: "303-ацид: фільтрація та резонанс",
              description: "TB-303 — головний тембральний інструмент хаусу. Характерний «кислотний» звук досягається агресивною модуляцією частоти фільтру (Cutoff) і резонансу (Resonance) у реальному часі. Секвенція 303 програмується проста (3–5 нот), а вся драма — у відкритті/закритті фільтру.",
              dawTranslation: {
                ableton: "Завантаж Operator або Analog. Постав фільтр Auto Filter. Намалюй автоматизацію Cutoff — від 200 Hz до 3 kHz протягом 8 тактів. Резонанс тримай на 60–80%. Додай Saturator для аналогового насичення. Зв'яжи Cutoff із макросом для ручного контролю.",
                flStudio: "Використай 3xOsc або Sytrus. Додай Fruity Filter (Low-pass, резонанс 70%). Автоматизуй Cutoff — від низького до високого за 8 тактів. Додай Fruity Waveshaper для насичення. Зв'яжи Cutoff із Mod Wheel для MIDI-контролеру.",
                logic: "Використай ES2 або Retro Synth. Застосуй AutoFilter. Автоматизуй Cutoff Frequency — від 150 Hz до 3 kHz. Резонанс — 75%. Додай Overdrive (Pedalboard) для насичення. Створи MIDI-контролер для ручного відкриття фільтру."
              }
            },
            {
              name: "Dub-міксинг: простір через затримку",
              description: "Roland RE-201 Space Echo — культова стрічкова затримка. Її характер: теплий, деградований повтор із «плаванням» висоти. Техніка: відправляти окремі елементи (clap, вокал, акорди) на затримку з різними часами — створюється ритмічний канон.",
              dawTranslation: {
                ableton: "Встав Echo або Delay. Time синхронізований із темпом: 1/4 для clap, 1/8D для вокалу. Feedback — 20–40%, Dry/Wet — 30%. Додай Saturator після Delay для деградації (La Petite Excite). Додай інший Delay на акорди з 1/2 часом.",
                flStudio: "Використай Fruity Delay 3. Time: 1/4 для clap, dotted 1/8 для вокалу. Feedback — 25%. Додай Fruity Waveshaper після затримки для аналогової деградації. Для акордів — Fruity Delay (1/2, Dry/Wet 20%).",
                logic: "Використай Tape Delay (Pedalboard). Time: 1/4, Feedback — 30%. Додай Saturator після затримки. Для вокалу — Delay Designer з dotted 1/8 та затуханням за частотами (Low Cut 500 Hz)."
              }
            },
            {
              name: "Фільтрові свіпи (Filter Sweep)",
              description: "Поступове відкриття або закриття filter на майстер-каналі або групах. Техніка дає ілюзію руху без зміни матеріалу. Класичний хід: звузити смугу до мінімуму (тільки низькі частоти), потім поступово відкрити до повного спектру.",
              dawTranslation: {
                ableton: "Встав Auto Filter на master або груповий канал. Low-pass, Cutoff автоматизований: від 150 Hz до 10 kHz за 16 тактів. Резонанс — 30% (не давати свист). Зв'яжи з макросом «Sweep». Додай Utility для загальної гучності.",
                flStudio: "Встав Fruity Filter на Master. Low-pass, Cutoff автоматизуй від 20% до 100% за 16 тактів. Резонанс — 25%. Використай Patcher для паралельної обробки: чистий сигнал + фільтр. Додай Fruity Balance для автоматизації панорами.",
                logic: "Використай Channel EQ. Відкрий низькочастотний фільтр, автоматизуй Frequency від 200 Hz до 12 kHz. Застосуй резонанс (Q=0.7). Додай Linear Phase EQ для додаткової точності."
              }
            },
            {
              name: "Мікшерний підхід: жива інженерія",
              description: "Чиказькі продюсери міксували треки в реальному часі, як DJ — регулювали гучність, панораму, фільтр на ходу. Це не «записати і звести пізніше» — це «зіграти трек на мікшері». Результат — динамічний, живий мікс, який дихає.",
              dawTranslation: {
                ableton: "Увімкни Arrangement View. Відкрий усі треки. Автоматизуй Volume та Filter Cutoff у реальному часі (Overdub). Не використовуй статичні гучності — кожен елемент має дихати. Використай Push або MIDI-контролер для живих рухів.",
                flStudio: "Відкрий Mixer. Автоматизуй Volume та Filter на кожному каналі. Налаштуй MIDI-контролер (Mod Wheel або CC) на Channel Volume. Режим Latch у Edison для запису автоматизації. Записуй панораму в реальному часі.",
                logic: "Відкрий Mixer та Automation Quick Access. Зв'яжи Volume та Filter Cutoff із фізичними MIDI-контролерами. Увімкни MIDI Overdub. Грай рухи в реальному часі, як живий мікшер."
              }
            }
          ],

          listeningPathway: [
            {
              step: 1,
              track: "«Move Your Body» — Marshall Jefferson (1986)",
              insight: "Слухай фортепіанний риф — він не змінюється весь трек. Уся драматургія — у додаванні/знятті інших елементів. Зверни увагу: коли з'являється вокал, фортепіано створює простір для нього."
            },
            {
              step: 2,
              track: "«Can You Feel It» — Mr. Fingers (1986)",
              insight: "Зверни увагу на те, як один акорд Juno-60 займає всю увагу. Немає соло, немає змін — лише простір і тиша між фразами. Це вчить: форма може бути майже нерухомою."
            },
            {
              step: 3,
              track: "«Acid Tracks» — Phuture (1987)",
              insight: "Слухай модуляцію фільтру 303. Жодних секцій у класичному сенсі — форма створюється зміною тембру. Порахуй скільки різних станів проходить фільтр за 12 хвилин."
            },
            {
              step: 4,
              track: "«Your Love» — Frankie Knuckles & Jamie Principle (1987)",
              insight: "Зверни увагу на затримку: кожна фраза вокалу відлунює у просторі. Слухай, як Space Echo перетворює сухий вокал на ритмічний елемент."
            },
            {
              step: 5,
              track: "«Cold World» — Mr. Fingers (1986)",
              insight: "Порівняй із «Can You Feel It». Та ж мова, інший настрій. Зверни увагу на те, як мінор змінює сприйняття тієї самої формальної структури."
            },
            {
              step: 6,
              track: "«Promised Land» — Joe Smooth (1987)",
              insight: "Контрастна до всього попереднього — епічний вокал, фортепіанні арпеджіо. Слухай, як хаус може бути гімном, не втрачаючи ритмічної основи."
            },
            {
              step: 7,
              track: "«Baby Wants to Ride» — Ten City (1987)",
              insight: "Зверни увагу на вокальну продюкшн — R&B фразування на хаус-пульсі. Слухай, як Byron Stingily балансує між ритмом і мелодією."
            }
          ]
        }
      },
  {
    id: "deep-house",
    name: "Deep House",
    bpm: "118–125",
    structuralProfile: "Повільніший і атмосферніший варіант клубної дуги; структура будується навколо суббасу, джазових акордів і просторового реверберу. Розвиток відбувається поступово — через нюансовані зміни тембру й гармоній.",
    energyProfile: "Інтроспективна енергія: не пікова, а занурювальна. Слухач йде всередину, а не вгору — медитативний стан замість ейфорії.",
    canonicalTracks: [
      "Larry Heard — Washing Machine (1986)",
      "Larry Heard — Missing You (1988)",
      "Chez Damier — I Never Knew Love (1994)",
      "Kerri Chandler — Bar A Thym (1996)",
      "Ron Trent — Altered States (1993)"
    ],
    commonMistakes: [
      "Плутати «deep» з просто «повільним» — глибина досягається гармонічною складністю, а не темпом.",
      "Забувати про суббасову лінію як мелодичний голос, а не лише ритмічний елемент.",
      "Перевантажувати реверб, від чого трек втрачає чіткість і гіпнотизм."
    ],
    distinguishingFeatures: [
      "Джазові та соул-акорди в основі гармонії — септові, нонові.",
      "Суббас, що «розмовляє» з мелодією, а не лише тримає ритм.",
      "Атмосферні паади і просторова глибина замість клубного напору.",
      "Темп нижче 125 BPM — дає відчуття плавності й трансу."
    ]
  },
  {
    id: "tech-house",
    name: "Tech House",
    bpm: "126–134",
    structuralProfile: "Злиття функціональності техно і грувовості хаусу; трек будується на мінімальних, але чітких петлях із сильним акцентом на перкусії та підземному басі. Форма часто циклічна з короткими, прицільними ефектами та брейками.",
    energyProfile: "Інтенсивна і безперервна; пікові моменти — це не мелодичні кульмінації, а ритмічні «вибухи» перкусії та фільтрів. Тримає танцпол у постійному руслі.",
    canonicalTracks: [
      "Green Velvet — La La Land (2000)",
      "Hot Since 82 — Cause & Effect (2013)",
      "Fisher — Losing It (2018)",
      "Chris Liebing — Doppelgaenger (2003)",
      "Nicole Moudaber — In the MOOD (2014)"
    ],
    commonMistakes: [
      "Зловживати «гучністю» замість грувовості — tech house має бути цікавим, а не лише голосним.",
      "Робити бас надто тонким: підземний мідбас — головна фішка жанру.",
      "Копіювати естетику мінімал без хаусового почуття — трек звучить сухо й порожньо."
    ],
    distinguishingFeatures: [
      "Щільний, перкусивний кік із сильним підземним басом.",
      "Мінімальна гармонія — акцент на ритмічному грейзингу й текстурі.",
      "Короткі вокальні семпли або фрази як ритмічні елементи, а не мелодія.",
      "Суміш органічних перкусійних звуків із синтетичними — техно-душа у хаусовому тілі."
    ]
  },
  {
    id: "progressive-house",
    name: "Progressive House",
    bpm: "126–132",
    structuralProfile: "Тривала дуга наростання та кульмінації; будова трека — це повільний, майже кінематографічний розвиток від інтро до головного дропу. Форма містить чіткі секції: інтро, будова, кульмінація, аутро.",
    energyProfile: "Максимально емоційна серед клубних стилів; пікова кульмінація викликає ейфорію. Підйом може тривати хвилини, що робить дроп максимально катарсичним.",
    canonicalTracks: [
      "Eric Prydz — Call On Me (2004)",
      "deadmau5 — Strobe (2009)",
      "Sasha — Xpander (1999)",
      "John Digweed — Heaven Scent (2000)",
      "Underworld — Born Slippy (1995)"
    ],
    commonMistakes: [
      "Занадто короткий підйом — прогресивність потребує часу; поспішний дроп не дає ефекту.",
      "Слабкий мелодійний матеріал: жанр живе гарною темою, не лише ефектами.",
      "Перевантажувати будову — занадто багато елементів одночасно розмивають кульмінацію."
    ],
    distinguishingFeatures: [
      "Довгий, поступовий підйом — структурна напруга як головний інструмент.",
      "Мелодичний лід-синтезатор або пад як емоційний центр.",
      "Чіткий і потужний дроп після пікового моменту — катарсис.",
      "Тривалість треку 8–12 хвилин для повного розкриття дуги."
    ]
  },
  {
    id: "detroit-techno",
    name: "Детройтський техно",
    bpm: "125–140",
    period: "1985–1995",
    region: "Детройт, США",
    scene: ["підвальні студії", "андеграундні рейви", "Midwest-радіо"],
    keyLabels: ["Metroplex", "Transmat", "Underground Resistance", "Plus 8", "Planet E", "KMS"],
    relatedFamilies: ["berlin-techno", "minimal-techno", "electro"],
    archetypeBridges: ["club-arc", "process-minimal"],

    structuralProfile: "Лінійне нашарування з мінімальними змінами — «машинна душа». Кожен новий елемент додається без попередження і залишається назавжди. Форма — безперервна трансформація одного стану в інший, без дропів або різких контрастів.",
    energyProfile: "Енергія не «наростає і падає» — вона повільно мутує. Гучність і щільність майже статичні; зміни відбуваються в тембрі, ритмічних зсувах і тонких текстурних нашаруваннях."

,
    canonicalTracks: [
      {
        title: "No UFO's",
        artist: "Model 500 (Juan Atkins)",
        year: 1985,
        label: "Metroplex",
        analysis: "Перший детройтський техно-трек. Форма — електро-фанк із мінімумом змін: секвенція, вокал, зміщення фільтру. Уся енергія — у ритмі та тембрі 808.",
        archetypeScores: { segmentation: 50, repetition: 85, contrast: 45, directionality: 65 },
        timeline: [
          { name: "Інтро — секвенція 808 + синтезатор", time: "0:00" },
          { name: "Вхід kick + snare", time: "0:45" },
          { name: "Вокал — «No UFO's»", time: "1:30" },
          { name: "Зміна секвенції", time: "2:30" },
          { name: "Брейк — вокал а капела", time: "3:30" },
          { name: "Повернення повного міксу", time: "4:15" },
          { name: "Аутро — затухання останньої ноти", time: "6:00" }
        ],
        historicalContext: "Перший реліз Metroplex Records і трек, що визначив звучання детройтського техно: електро, фанк, футуризм і мінімалізм.",
        productionNotes: "TR-808, Jupiter-6, вокал через ревербератор. Записано на 4-доріжковий магнітофон у підвалі."
      },
      {
        title: "Strings of Life",
        artist: "Rhythim Is Rhythim (Derrick May)",
        year: 1987,
        label: "Transmat",
        analysis: "Шедевр детройтського техно. Фортепіанна лінія створює відчуття польоту. Форма — безперервний рух без зупинок: ритм не припиняється весь трек.",
        archetypeScores: { segmentation: 70, repetition: 85, contrast: 60, directionality: 85 },
        timeline: [
          { name: "Фортепіанний риф соло", time: "0:00" },
          { name: "Вхід kick + clap (4/4)", time: "0:30" },
          { name: "Бас приєднується", time: "1:15" },
          { name: "Друга фортепіанна лінія", time: "2:00" },
          { name: "Струнні вступають", time: "3:00" },
          { name: "Брейк — фортепіано + струнні", time: "4:00" },
          { name: "Повернення повного міксу до завершення", time: "5:00" }
        ],
        historicalContext: "Вважається одним із найвпливовіших техно-треків усіх часів. Derrick May описав його як «Джордж Клінтон зустрічає Карла Орфа».",
        productionNotes: "TR-909, Korg M1 (фортепіано), Roland JX-8P (струнні), Akai S900 для семплів. Жодної автоматизації — усе зіграно вручну."
      },
      {
        title: "Big Fun",
        artist: "Inner City (Kevin Saunderson)",
        year: 1988,
        label: "KMS / Virgin",
        analysis: "Техно-поп-гімн. Структура ABABCB — класична пісенна форма, але з техно-продакшеном: TR-909, синтезаторні акорди, вокальний хук.",
        archetypeScores: { segmentation: 85, repetition: 75, contrast: 70, directionality: 80 },
        timeline: [
          { name: "Інтро — акорди + ритм", time: "0:00" },
          { name: "Куплет 1", time: "0:30" },
          { name: "Приспів — «Big Fun»", time: "1:15" },
          { name: "Куплет 2", time: "1:55" },
          { name: "Інструментальна перерва", time: "2:35" },
          { name: "Фінальний приспів", time: "3:30" },
          { name: "Аутро — затухання", time: "4:35" }
        ],
        historicalContext: "Перший техно-трек, що потрапив у британський Top 10. Kevin Saunderson приніс техно на радіо.",
        productionNotes: "TR-909, S1000 семплер, Korg M1. Вокал записаний в одній кімнаті з драм-машиною."
      },
      {
        title: "The Bells",
        artist: "Jeff Mills",
        year: 1997,
        label: "Purpose Maker",
        analysis: "Мінімальний техно-моноліт: одна секвенція дзвіночків на 8 тактів повторюється 6 хвилин. Форма — чиста варіація ритму та міксу.",
        archetypeScores: { segmentation: 30, repetition: 95, contrast: 25, directionality: 60 },
        timeline: [
          { name: "Дзвіночки + kick", time: "0:00" },
          { name: "Вхід hi-hat", time: "0:30" },
          { name: "Вхід clap", time: "1:00" },
          { name: "Зняття clap", time: "2:30" },
          { name: "Повернення clap + шейкер", time: "3:30" },
          { name: "Зміщення ритму (snare)", time: "4:30" },
          { name: "Аутро — зняття елементів", time: "5:30" }
        ],
        historicalContext: "Гімн мінімальному техно. The Bells довів, що техно не потребує мелодії — лише ритм і текстура.",
        productionNotes: "TR-909, один семпл дзвіночка (з Roland TR-808). Мінімальна обробка — сухий мікс із легким ревером."
      },
      {
        title: "Minimal Nation",
        artist: "Robert Hood",
        year: 1994,
        label: "Axis / M-Plant",
        analysis: "Маніфест мінімального техно. Кожен трек на альбомі — дослідження одного ритмічного елемента. Форма — зміна через відсутність змін.",
        archetypeScores: { segmentation: 35, repetition: 90, contrast: 30, directionality: 55 },
        timeline: [
          { name: "Kick + секвенція", time: "0:00" },
          { name: "Хай-хет на 16-х", time: "0:40" },
          { name: "Клевес", time: "1:20" },
          { name: "Зняття хай-хету", time: "2:30" },
          { name: "Повернення хай-хету + зміщений снап", time: "3:20" },
          { name: "Басова лінія змінюється", time: "4:30" },
          { name: "Затухання", time: "5:15" }
        ],
        historicalContext: "Robert Hood заснував «мінімал» як реакцію на перевантаженість хаусу — «повернення до суті».",
        productionNotes: "TR-909, невеликий мікшер, без жодного зовнішнього ефекту. Уся текстура — з ритм-машини та секвенсора."
      },
      {
        title: "Altered States",
        artist: "Carl Craig (Paperclip People)",
        year: 1991,
        label: "Planet E",
        analysis: "Інструментальне багатошарове техно з джазовою гармонією. Довгий білд-ап до басового дропа — але сам дроп ледь помітний.",
        archetypeScores: { segmentation: 70, repetition: 75, contrast: 65, directionality: 80 },
        timeline: [
          { name: "Інтро — текстура + шум", time: "0:00" },
          { name: "Kick + perc", time: "0:50" },
          { name: "Басова лінія", time: "1:40" },
          { name: "Акорди Juno", time: "2:30" },
          { name: "Брейк — барабани зникають", time: "3:45" },
          { name: "Повернення — посилений бас", time: "4:30" },
          { name: "Аутро — затухання з ревером", time: "6:00" }
        ],
        historicalContext: "Carl Craig — третє покоління детройтського техно, об'єднав джаз, хаус та техно в одне ціле.",
        productionNotes: "TR-909, Juno-106, запис на ADAT (8-доріжковий), мікс на Mackie CR-1604."
      },
      {
        title: "Track Ten (Galaxy 2 Galaxy)",
        artist: "Underground Resistance (Mike Banks)",
        year: 1992,
        label: "Underground Resistance",
        analysis: "Індустріальний, воєнізований техно-трек. Агресивний kick, синтезаторні акорди, вокал-команда. Форма — наступальний марш.",
        archetypeScores: { segmentation: 75, repetition: 80, contrast: 55, directionality: 75 },
        timeline: [
          { name: "Інтро — індустріальний шум", time: "0:00" },
          { name: "Kick + snare — військовий ритм", time: "0:30" },
          { name: "Синтезаторна лінія", time: "1:15" },
          { name: "Вокальна команда", time: "2:00" },
          { name: "Брейкдаун — шум + ревер", time: "3:00" },
          { name: "Повернення — максимальна агресія", time: "3:45" },
          { name: "Аутро — kick + затухання", time: "5:00" }
        ],
        historicalContext: "Underground Resistance — політизоване крило техно. Mike Banks бачив техно як зброю проти системи.",
        productionNotes: "TR-909, SH-101, біт-машина. Перевантажений мікшер для індустріального кліпу."
      },
      {
        title: "Let Me Show You Love",
        artist: "Blake Baxter",
        year: 1990,
        label: "Plus 8 / KMS",
        analysis: "Вокальний техно-поп. Структура: секвенція 909 + вокал. Форма нагадує хаус, але холодніший тембр і менше реверу — технічна естетика.",
        archetypeScores: { segmentation: 80, repetition: 70, contrast: 65, directionality: 75 },
        timeline: [
          { name: "Інтро — секвенція + ревер", time: "0:00" },
          { name: "Kick + clap", time: "0:30" },
          { name: "Куплет 1", time: "1:10" },
          { name: "Приспів — «Let Me Show You Love»", time: "1:55" },
          { name: "Куплет 2", time: "2:35" },
          { name: "Інструментальна секція", time: "3:20" },
          { name: "Аутро", time: "4:40" }
        ],
        historicalContext: "Blake Baxter — «принц детройтського техно», поєднував чуттєвий вокал із машиною естетикою.",
        productionNotes: "TR-909, Juno-60, SP-1200 для семплів. Вокал через плату затримки."
      },
      {
        title: "Let's Get Together",
        artist: "Mystic Institute",
        year: 1992,
        label: "Transmat / Fragile",
        analysis: "Глибокий, ейфорійний техно з струнними секціями та вокалом. Форма повільно розгортається — майже як сюїта, а не танцювальний трек.",
        archetypeScores: { segmentation: 75, repetition: 70, contrast: 70, directionality: 80 },
        timeline: [
          { name: "Інтро — струнні + ревер", time: "0:00" },
          { name: "Біт входить", time: "0:45" },
          { name: "Куплет — вокал", time: "1:30" },
          { name: "Ейфорійний приспів", time: "2:20" },
          { name: "Брейк — струнні соло", time: "3:30" },
          { name: "Повернення біту + приспів", time: "4:15" },
          { name: "Аутро — затухання", time: "5:45" }
        ],
        historicalContext: "Mystic Institute — один із соул-орієнтованих проєктів на Transmat, що показував широту детройтського звучання.",
        productionNotes: "TR-909, Korg M1 (струнні), SP-1200. Струнні записані з MIDI-контролера в реальному часі."
      },
      {
        title: "Octave One — Blackwater",
        artist: "Octave One",
        year: 1991,
        label: "430 West / Plus 8",
        analysis: "Сімейний проєкт Octave One створив канонічний техно-трек із глибокими акордами та живими барабанами. Форма — повільне відкриття фільтру над акордною послідовністю.",
        archetypeScores: { segmentation: 70, repetition: 80, contrast: 55, directionality: 75 },
        timeline: [
          { name: "Акордова послідовність", time: "0:00" },
          { name: "Вхід kick drum", time: "0:45" },
          { name: "Перкусія нашаровується", time: "1:30" },
          { name: "Брейк — акорди без ритму", time: "3:00" },
          { name: "Повернення — посилений біт", time: "3:45" },
          { name: "Зняття акордів", time: "4:30" },
          { name: "Фінал — kick + ревер", time: "5:30" }
        ],
        historicalContext: "Octave One (брати Burdenburg) — одні з небагатьох, хто використовував живі барабани в техно-контексті.",
        productionNotes: "Живі барабани (Mackie мікшер), TR-808, Jupiter-8. Запис у домашній студії."
      },
      {
        title: "Grand Bend",
        artist: "Model 500 (Juan Atkins)",
        year: 1990,
        label: "Metroplex",
        analysis: "Електро-техно з футуристичним звучанням. Басовий синтезатор і швидкі арпеджіо створюють безперервний рух без секційних меж.",
        archetypeScores: { segmentation: 55, repetition: 85, contrast: 45, directionality: 70 },
        timeline: [
          { name: "Арпеджіо + секвенція", time: "0:00" },
          { name: "Вхід біту 808", time: "0:45" },
          { name: "Басова лінія приєднується", time: "1:30" },
          { name: "Додавання перкусії", time: "2:30" },
          { name: "Зміна арпеджіо", time: "3:15" },
          { name: "Зняття елементів", time: "4:30" },
          { name: "Аутро — арпеджіо + біт", time: "5:30" }
        ],
        historicalContext: "Juan Atkins — батько детройтського техно (засновник Metroplex). Grand Bend — вершина його електро-періоду.",
        productionNotes: "TR-808, Jupiter-8 (арпеджіо), Minimoog (бас). Мінімальна обробка — сухий аналог."
      }
    ],

    commonMistakes: [
      "Надмірний ревербератор — техно потребує сухого, щільного міксу; занадто багато простору руйнує машину естетику.",
      "Різкі дропи та білди — техно не «падає», воно трансформується; контраст досягається зміною текстури, а не зняттям басу.",
      "Занадто багато змін у ранній фазі — техно працює на витримці; перші 2-3 хвилини мають встановлювати стан, а не еволюціонувати.",
      "Гармонійна складність замість ритмічної — техно — це про ритм, тембр і простір; надто багато акордів заважає машині.",
      "М'який, «теплий» звук — детройтське техно має бути чітким, різким, майже хірургічним; аналогова теплота не означає м'якість."
    ],

    distinguishingFeatures: [
          "Синкопація та ритмічні зсуви — замість «кач» хаусу — асиметричні, зміщені ритми, що нагадують фанк та електро.",
          "Машинна естетика — звуки не мають звучати «натурально»; перкусія навмисно механічна, вокал сухий або оброблений.",
          "Відсутність вокального хука як центру — якщо вокал присутній, він є одним із шарів текстури, а не центром уваги.",
          "Лінійне нашарування — елементи додаються і ніколи не знімаються (або знімаються рідко). Форма — зростання, а не цикл.",
          "Мінімальна автоматизація — фільтр змінюється повільно, майже непомітно. Макро-зміна досягається через мікро-зсуви.",
          "Тривалість — середня довжина треку 6-10 хвилин; форма потребує часу для повільної трансформації."
        ],

        compositionDecisions: {
          formBearer: "Ритмічна текстура + тембр машини. Мелодія не є носієм форми — форма будується через нашарування ритмічних шарів і зміну тембру.",
          development: "Лінійне нашарування (add-only): кожен новий елемент додається і залишається. Мікрозсуви velocity, зміщення ритмічних акцентів, повільна модуляція фільтру.",
          contrast: "Зняття елементів (break). Не дроп, не зміна гармонії — контраст створюється тим, що зникає, а не тим, що з'являється.",
          styleBreakers: [
            "Надмірний ревербератор — техно потребує сухого міксу",
            "Різкі дропи та білди — техно трансформується, а не «падає»",
            "Гармонійна складність — техно це про ритм і тембр",
            "Забагато змін у перші 2 хвилини — техно працює на витримці"
          ]
        },

        designConstraints: {
          bpm: "125–140",
          sectionDuration: "32–64 такти (1–2 хв на шар)",
          contrastLevel: "Низький–Середній (30–50%)",
          density: "Середня (4–7 елементів одночасно)",
          harmonicComplexity: "Низька (2–4 акорди, статичні)",
          energyDynamics: "Лінійно вгору — енергія зростає через додавання шарів, без спадів"
        },

        productionTradition: {
          philosophy: "Детройтське техно — це відповідь на постапокаліптичне місто: автомобільна столиця, що занепадає, породила звук майбутнього. Філософія — «машина як душа» (machine soul). Не імітація людини машиною, а спільна мова — синтезатори не замінюють інструменти, а стають інструментами з власним голосом. Мінімальна обробка, максимальна повага до тембру, ніяких зайвих прикрас.",

      coreTechniques: [
        {
          name: "TR-808/909: робота з акцентами",
          description: "У детройтському техно драм-машина не просто задає ритм — вона є головним сольним інструментом. Акценти на певних ударах (особливо snare та clap) створюють поліритмію всередині 4/4. Техніка: налаштувати луд-дром так, щоб кожен другий удар мав інший тембр або гучність.",
          dawTranslation: {
            ableton: "Програмуй kick на C1 (кожну чверть), snare на D1 (2 та 4). У Piano Roll додай варіації velocity — 127 на перший, 90 на другий. Зроби луп на 8 тактів, на 8-му — зміни velocity патерну (всі 100). Додай один Rack із 2 варіантами snare для чергування.",
            flStudio: "У Channel Rack — kick на 1/4 (C5 velocity 100), snare на 2/4 (D5 velocity 100). Через 4 такти змісти один snare на 1/16 (swing). Використай Layer: 2 семпли snare, чергуй через Pattern №1 і №2. Додай Fruity Love Philter на snare для зміни тембру кожні 8 тактів.",
            logic: "Використай Ultrabeat. Kick — C1, snare — D1. Velocity: основні удари 110, зміщені — 90. У Piano Roll зміни velocity кожні 8 тактів. Додай окремий регіон snare для акцентів. Використай Articulation ID для зміни семпла snare."
          }
        },
        {
          name: "Мінімальна автоматизація: повільні зміни",
          description: "Замість різких переходів — ледь помітна автоматизація фільтру протягом 32–64 тактів. Техніка «відсутності змін»: слухач не помічає зміни в моменті, але через хвилину розуміє, що трек трансформувався. Використовується одна автоматизаційна лінія на весь трек — наприклад, Cutoff filter відкривається на 5% протягом 4 хвилин.",
          dawTranslation: {
            ableton: "Вибери Auto Filter на master або групі Bass. Намалюй одну лінію автоматизації Cutoff: від 30% до 35% за 64 такти (3 хв). Больше нічого не автоматизуй. Резонанс — 0%. Використай Smoothing (100%) щоб лінія була ідеально плавною.",
            flStudio: "Встав Fruity Filter на канал. Намалюй автоматизацію Cutoff у Playlist: від 25% до 30% за 64 такти. Тільки один параметр. Увімкни Smooth (за замовчуванням). Резонанс — мінімальний (≈5%). Додай Fruity Balance на 1% автоматизації панорами для руху.",
            logic: "Додай AutoFilter на Stereo Out Channel. Намалюй автоматизацію Cutoff: повільне підвищення від 200 Hz до 250 Hz за 2 хв. Smooth — Knots (без різких кутів). Ніяких інших автоматизацій. Використай Automation Quick Access."
          }
        },
        {
          name: "Лінійне нашарування (Linear Layering)",
          description: "Кожен новий елемент додається і ЗАЛИШАЄТЬСЯ. У класичному club-arc елементи знімаються перед дропом; у техно — вони накопичуються. Техніка: почати з kick, через 16 тактів додати hi-hat, через 16 — snare, через 16 — бас, через 16 — перкусію. До кінця треку всі елементи грають одночасно.",
          dawTranslation: {
            ableton: "Створи 4 сцени (Scenes) по 16 тактів. Scene 1: тільки kick. Scene 2: kick + hi-hat. Scene 3: + snare. Scene 4: + бас. Записуй Arrangement у реальному часі, перемикаючи сцени в кінці кожних 16 тактів. Жодного зняття — тільки додавання.",
            flStudio: "У Playlist: Pattern 1 — kick (16 тактів). Pattern 2 — kick + hi-hat (16 тактів). Pattern 3 — + snare + clap. Pattern 4 — + бас. НЕ знімай kick у наступних патернах. Розташуй Patterns лінійно один за одним. Кожен новий — це попередній + новий елемент.",
            logic: "Створи 4 треки: Kick, Hi-Hat, Snare, Bass. Використай Region-автоматизацію Mute: kick — unmuted весь трек. Hi-hat unmuted з такту 17. Snare unmuted з такту 33. Bass unmuted з такту 49. Жодного unmute елементів."
          }
        },
        {
          name: "Juno-60 струнні акорди",
          description: "Roland Juno-60 — головний синтезатор для акордів у детройтському техно. Характерний звук: м'які, «плаваючі» струнні з хорус-ефектом, що додає руху без автоматизації. Акорди — довгі, майже нерухомі, на 4–8 тактів.",
          dawTranslation: {
            ableton: "Завантаж Analog або TAL-U-NO-LX (синтезатор Juno). Налаштуй: два осцилятори (Saw + Pulse), хорус (Chorus II), низькочастотний фільтр (Cutoff 40%, Envelope 30%). Грай акорди (maj7, min7) цілими нотами. Додай компресор (Softube) для легкого зведення.",
            flStudio: "Використай 3xOsc (Saw + Pulse + Sub). Додай Fruity Chorus (Rate: 0.5 Hz, Depth: 60%). Fruity Filter (Low-pass, Cutoff 45%). Грай довгі акорди. Компресор — Fruity Limiter (Ratio 2:1). Додай ревер (Fruity Reverb 2, Room 30%).",
            logic: "Використай Retro Synth (Saw + Square, Chorus On). Cutoff — 50%, Resonance — 10%. Додай компресор (Platinum Digital) для згладжування. Грай акорди на 4 такти. Додай Space Designer (Small Hall) для простору."
          }
        }
      ],

      listeningPathway: [
        {
          step: 1,
          track: "«No UFO's» — Model 500 (1985)",
          insight: "Слухай, як починається трек — це не вступ для DJ, це заява. 808 біт без реверу, сухий, різкий. Зверни увагу: вся «мелодія» — в секвенції синтезатора, яка не змінюється весь трек."
        },
        {
          step: 2,
          track: "«Strings of Life» — Rhythim Is Rhythim (1987)",
          insight: "Контраст до Model 500 — фортепіано замість синтезатора. Слухай, як Derrick May змушує фортепіано звучати машиною. Зверни увагу на ритм — він ніколи не зупиняється."
        },
        {
          step: 3,
          track: "«The Bells» — Jeff Mills (1997)",
          insight: "Екстремальний мінімалізм: один звук, шість хвилин. Слухай, як Jeff Mills змінює сприйняття через зміщення ритмічних акцентів. Порахуй, скільки разів ти відчуваєш, що трек «змінився»."
        },
        {
          step: 4,
          track: "«Big Fun» — Inner City (1988)",
          insight: "Техно, який став поп-хітом. Слухай: та ж 909, ті ж акорди, але з вокальним хуком. Зверни увагу, як техно-естетика зберігається навіть у пісенній формі."
        },
        {
          step: 5,
          track: "«Minimal Nation» — Robert Hood (1994)",
          insight: "Після «Big Fun» — повернення до суті. Слухай, як мінімальна зміна (зняття хай-хету) стає головною подією. Це вчить: контраст — це справа контексту."
        },
        {
          step: 6,
          track: "«Altered States» — Carl Craig / Paperclip People (1991)",
          insight: "Джазове техно. Слухай акорди — вони змінюються рідко, але кожна зміна важить більше. Зверни увагу на простір: Craig залишає більше повітря між елементами."
        },
        {
          step: 7,
          track: "«Blackwater» — Octave One (1991)",
          insight: "Заключний крок — техно з живими барабанами. Слухай, як індустріальність поєднується з людським ритмом. Це точка переходу: техно не імітує людину — воно зустрічається з нею."
        }
      ]
    }
  },
  {
    id: "minimal-techno",
    name: "Minimal Techno",
    bpm: "130–140",
    structuralProfile: "Редукція до мінімуму: менше елементів, більше простору. Форма будується на мікровідмінностях у петлях — ледь помітні зсуви в ритмі та тембрі стають головними подіями.",
    energyProfile: "Підземна, медитативна, довготривала; не пікова, а трансова. Слухач занурюється в мікродеталі — кожен клацання, кожен фільтр стає подією.",
    canonicalTracks: [
      "Robert Hood — Moveable Parts (1994)",
      "Richie Hawtin — Pacou (2001)",
      "Basic Soul Unit — Every Thought (2010)",
      "Ricardo Villalobos — Dexter (2003)",
      "Plastikman — Spastik (1993)"
    ],
    commonMistakes: [
      "Сплутувати мінімалізм з нудьгою — кожен елемент має бути навмисним.",
      "Замало уваги до мікрозмін: без тонкої еволюції трек стає монотонним.",
      "Занадто голосний мікс — мінімал повинен дихати й мати динамічну глибину."
    ],
    distinguishingFeatures: [
      "Мінімальна кількість елементів — кожен звук несе навантаження.",
      "Мікрозміни як головний структурний засіб.",
      "Довга тривалість: треки 10–15 хвилин для повного гіпнотичного ефекту.",
      "Порожній простір — тиша є таким самим інструментом, як і звук."
    ]
  },
  {
    id: "dub-techno",
    name: "Даб-техно",
    nameEn: "Dub Techno",
    period: "1994–2005",
    geography: "Берлін / Детройт",
    bpm: "120–128",
    structuralProfile: "Мінімальний матеріал — максимальний простір. Обробка (reverb, delay) є формотворчим елементом, не прикрасою. Кожен трек — це звуковий простір, де delay trails створюють структуру. Форма розгортається через повільне додавання та видалення елементів, без різких дропів.",
    energyProfile: "Рівна, глибока, гіпнотична. Енергія не піднімається і не падає — вона розширюється всередину. Слухач занурюється в текстуру, а не рухається до кульмінації.",
    keyLabels: [
      "Basic Channel",
      "Chain Reaction",
      "Echospace",
      "Modern Love"
    ],

    // ------------------------------------------------------------
    // Канонічні треки (10+ з повним аналізом)
    // ------------------------------------------------------------
    canonicalTracks: [
      {
        title: "Basic Channel — Radiance",
        artist: "Basic Channel",
        year: 1995,
        label: "Basic Channel",
        timeline: [
          { time: "0:00", event: "Текстура шуму, відкритий реверб, відсутній ритм" },
          { time: "1:30", event: "Кік входить — поодинокий, з довгим хвостом реверберації" },
          { time: "3:00", event: "Басова лінія — мінімальна пульсація на субчастоті" },
          { time: "4:30", event: "Відкривається фільтр — з'являються гармонійні обертони" },
          { time: "6:00", event: "Входить delay-повторення — створює ритмічний малюнок із хвостів" },
          { time: "7:30", event: "Фільтр закривається — матеріал повертається до початкової текстури" },
          { time: "9:00", event: "Завершення — розчинення в реверберації" }
        ],
        analysis: "Квінтесенція даб-техно. Трек не має дропу, мелодії чи центральної теми. Його форма — це слухання реверберації: що довше слухач перебуває в просторі, то більше деталей відкривається. Структура не лінійна — вона циклічна, але кожен цикл збагачений попередніми хвостами.",
        archetypeScores: { segmentation: 40, repetition: 80, contrast: 30, directionality: 50 },
        productionNotes: {
          arrangement: "Починається тільки з reverb send. Жодного звуку без простору.",
          soundDesign: "Бас — згладжений синус через low-pass filter. Кік — 909 з довгим reverb tail.",
          effects: "Lexicon 224 на send-каналі. Затримка — RE-201 Space Echo зі зворотним зв'язком 70%.",
          mix: "Мінімум компресії. Глибина досягається просторовими ефектами, не стисненням."
        },
        historicalContext: "Записано на студії Hard Wax у Берліні. Mark Ernestus і Moritz von Oswald створювали звук, який неможливо було відтворити наживо — це студійна музика, де мікшерний пульт є інструментом."
      },
      {
        title: "Maurizio — M4 (Part 1)",
        artist: "Maurizio",
        year: 1995,
        label: "Maurizio",
        timeline: [
          { time: "0:00", event: "Затемнення — тиша з відкритим ревербом" },
          { time: "1:00", event: "Кік — гучний, сухий, без ревербу в першому ударі" },
          { time: "2:30", event: "Бас — довга нота з субчастотною вібрацією" },
          { time: "4:00", event: "Delay-повернення — ритм створюється затримкою басу" },
          { time: "5:30", event: "Open hi-hat — єдиний перкусійний елемент" },
          { time: "7:00", event: "Фільтрована текстура — високі частоти відкриваються" },
          { time: "8:30", event: "Повернення до кіка — завершення циклу" },
          { time: "10:00", event: "Розчинення — реверб залишається після зупинки кіка" }
        ],
        analysis: "Трек, де delay створює форму. Басова лінія грає один раз, але її відлуння формує ритмічну структуру на 10 хвилин. Це не «повторення» в традиційному розумінні — це простір, який продовжує звучати після того, як джерело зупинилося.",
        archetypeScores: { segmentation: 30, repetition: 85, contrast: 20, directionality: 45 },
        productionNotes: {
          arrangement: "Один take — жива робота з мікшерним пультом. Запис автоматизації send/return.",
          soundDesign: "Бас — синусоїда з субгармонікою через spring reverb.",
          effects: "RE-201 Space Echo — feedback майже на максимумі. Spring reverb для текстури.",
          mix: "Стереополе: кік у центрі, delay розведений по краях. Глибина — через різний час затримки L/R."
        },
        historicalContext: "Maurizio — це псевдонім Basic Channel для публікації більш експериментального матеріалу. Мінімалізм доведений до межі: три елементи на весь трек."
      },
      {
        title: "Rhythm & Sound — Mango Drive",
        artist: "Rhythm & Sound",
        year: 1996,
        label: "Rhythm & Sound",
        timeline: [
          { time: "0:00", event: "Атмосфера — польові записи, вітер, відкритий повітряний простір" },
          { time: "1:30", event: "Кік входить — м'який, глибокий" },
          { time: "3:00", event: "Бас — особлива увага до субчастот, майже інфразвук" },
          { time: "4:30", event: "Фільтрований шум — створює відчуття руху" },
          { time: "6:00", event: "Реверберація посилюється — простір розширюється" },
          { time: "8:00", event: "Повернення до мінімального набору — кік + реверб" },
          { time: "10:00", event: "Завершення — останній удар тоне в реверберації" }
        ],
        analysis: "Rhythm & Sound — це даб у чистому вигляді, без техно-індустріальності. Тут форма = акустика приміщення. Слухач не слідкує за музичними подіями — він знаходиться в приміщенні, де звук розсіюється.",
        archetypeScores: { segmentation: 25, repetition: 70, contrast: 35, directionality: 40 },
        productionNotes: {
          arrangement: "Дубовий мікшерний пульт — кожен рух фейдера є композиційним рішенням.",
          soundDesign: "Бас — знятий з вінілового семплу, пройдений через spring reverb.",
          effects: "Spring reverb. RE-201. Фільтр — резонансний low-pass для створення відчуття простору.",
          mix: "Увага до субчастот. Гучність басу на рівні, де він відчувається тілом."
        },
        historicalContext: "Ритм-енд-Саунд — третій псевдонім Basic Channel. Стиль наближений до корінського дабу: акцент на просторі та суббасі, мінімум синтетики."
      },
      {
        title: "Deepchord — Vantage Isle (DC Mix)",
        artist: "Deepchord",
        year: 2007,
        label: "Echospace",
        timeline: [
          { time: "0:00", event: "Польовий запис — дощ, місто, віддалений шум транспорт" },
          { time: "1:30", event: "Кік входить — глибокий, з довгим хвостом" },
          { time: "3:00", event: "Бас — модульований, з повільною зміною фільтра" },
          { time: "4:30", event: "Пад — атмосферний шар, створює гармонійне тло" },
          { time: "6:00", event: "Delay текстура — ритмічне повернення басового малюнка" },
          { time: "8:00", event: "Фільтр закривається — бас стає субчастотним пульсом" },
          { time: "10:00", event: "Повернення до польового запису — завершення" }
        ],
        analysis: "Deepchord (Rod Modell) розвиває естетику Basic Channel у бік ембієнту. Польові записи є структурними елементами — вони не прикраса, а частина форми. Трек починається і закінчується тим самим звуком дощу, створюючи цикл.",
        archetypeScores: { segmentation: 35, repetition: 75, contrast: 25, directionality: 45 },
        productionNotes: {
          arrangement: "Інтро та аутро — польові записи. Музичний матеріал — мінімум, вся увага на текстурі.",
          soundDesign: "Кік — 909 через spring reverb. Бас — аналоговий синтезатор з LFO на фільтрі.",
          effects: "Lexicon 224. Valhalla Shimmer для атмосфери. RE-201 для delay.",
          mix: "Польові записи на рівні -12dB, кік — -6dB. Бас — субчастотний моніторинг."
        },
        historicalContext: "Echospace — лейбл Рода Моделла, який продовжив традицію Basic Channel у XXI столітті. Альбом 'Vantage Isle' вважається одним з найкращих зразків даб-техно 2000-х."
      },
      {
        title: "Fluxion — Binary Basis",
        artist: "Fluxion",
        year: 1999,
        label: "Chain Reaction",
        timeline: [
          { time: "0:00", event: "Глухий кік — з низьким частотним діапазоном" },
          { time: "1:30", event: "Бас — складний, з мікроритмічними змінами" },
          { time: "3:00", event: "Текстура — шипіння, шум, що наростає" },
          { time: "4:30", event: "Мелодичний патерн — повторюваний з мікроваріаціями" },
          { time: "6:00", event: "Delay створює другий ритмічний шар" },
          { time: "7:30", event: "Текстура — максимальна щільність, розчинення" },
          { time: "9:00", event: "Повернення до глухого кіка — цикл завершено" }
        ],
        analysis: "Fluxion — один з найбільш мелодійних представників Chain Reaction. Його треки містять повторювані патерни з ледь помітними змінами. Форма — це слухання того, як змінюється повторення.",
        archetypeScores: { segmentation: 45, repetition: 80, contrast: 30, directionality: 55 },
        productionNotes: {
          arrangement: "Повторюваний патерн з мікрозмінами кожні 8 тактів.",
          soundDesign: "Синтезовані пади+басові лінії через аналогові фільтри.",
          effects: "Луна-касета (tape echo). Пружинний ревербератор.",
          mix: "Теплий, аналоговий — мінімум цифрової обробки."
        },
        historicalContext: "Chain Reaction — лейбл, заснований за зразком Basic Channel. Fluxion (грецький продюсер) приніс у даб-техно середземноморську мелодійність."
      },
      {
        title: "Cv313 — Lost In Translation",
        artist: "Cv313",
        year: 2008,
        label: "Echospace",
        timeline: [
          { time: "0:00", event: "Відкритий реверб — простір до того, як з'явиться звук" },
          { time: "1:00", event: "Кік — глибокий, майже інфразвук" },
          { time: "2:30", event: "Бас — довгий, повільний луп" },
          { time: "4:00", event: "Шумова текстура — статичний шум, що дихає" },
          { time: "6:00", event: "Високочастотний пульс — додає ритмічний вимір" },
          { time: "8:00", event: "Максимальна щільність — всі шари одночасно" },
          { time: "10:00", event: "Розчинення — шум залишається останнім" },
          { time: "12:00", event: "Тиша — завершення" }
        ],
        analysis: "Cv313 — сайд-проєкт Deepchord для більш даб-орієнтованого матеріалу. Тут даб-техно наближається до ембієнту: ритм є, але він не є центром уваги. Форма розгортається на рівні текстур.",
        archetypeScores: { segmentation: 30, repetition: 75, contrast: 25, directionality: 40 },
        productionNotes: {
          arrangement: "Мінімальна кількість треків у сесії — 4-5 доріжок.",
          soundDesign: "Шумові генератори + суббасові осцилятори.",
          effects: "Lexicon 224. Spring reverb. Valhalla для атмосфери.",
          mix: "Аналогове зведення з мінімальною цифровою постобробкою."
        },
        historicalContext: "Cv313 виник як експеримент з довгими формами. Треки тривають 12-15 хвилин, що є стандартом для лейблу Echospace."
      },
      {
        title: "Monolake — Alaska",
        artist: "Monolake",
        year: 1999,
        label: "Chain Reaction",
        timeline: [
          { time: "0:00", event: "Металевий кік — холодний, індустріальний" },
          { time: "1:00", event: "Бас — глітчевий, з цифровими артефактами" },
          { time: "2:30", event: "Текстура — скляні, крижані звуки" },
          { time: "4:00", event: "Ритм ускладнюється — додається перкусія" },
          { time: "5:30", event: "Фільтр — повільне відкриття, поява високих частот" },
          { time: "7:00", event: "Максимум — холодна стіна звуку" },
          { time: "8:30", event: "Закриття — повернення до металевого кіка" }
        ],
        analysis: "Monolake (Robert Henke) — перехідна фігура між даб-техно та глітчем. 'Alaska' зберігає просторовість дабу, але додає цифрову холодність. Форма — це текстура, що проходить крізь фільтри, як лід, що тане.",
        archetypeScores: { segmentation: 50, repetition: 70, contrast: 35, directionality: 55 },
        productionNotes: {
          arrangement: "Абелтон-сесія з автоматизацією фільтрів та ефектів.",
          soundDesign: "Гранулярний синтез + аналогові джерела. Металеві тембри.",
          effects: "Цифровий delay + ревербератор. Глітч-ефекти.",
          mix: "Стереополе з широкою панорамою. Холодний, чистий мікс."
        },
        historicalContext: "Роберт Генке (Monolake) — співзасновник Ableton. Його творчість безпосередньо вплинула на розвиток DAW-інструментів для електронної музики."
      },
      {
        title: "Phon.o — Dummkopf Des Monats",
        artist: "Phon.o",
        year: 2003,
        label: "Shitkatapult",
        timeline: [
          { time: "0:00", event: "Шум + кік — брудний, спотворений" },
          { time: "1:00", event: "Бас — нестабільний, з дрейфом висоти" },
          { time: "2:30", event: "Голос — семпльована фраза, оброблена delay" },
          { time: "4:00", event: "Текстура — металева, індустріальна" },
          { time: "5:30", event: "Ритм ламається — синкопи, паузи" },
          { time: "7:00", event: "Максимум — какофонія текстур" },
          { time: "8:30", event: "Розпад — повернення до шуму" }
        ],
        analysis: "Phon.o приносить у даб-техно німецький індустріальний звук. Форма — це не простір, а тиск. Текстури агресивні, але оброблені через ті ж даб-ефекти. Слухач знаходиться в закритому приміщенні, де звук б'ється об стіни.",
        archetypeScores: { segmentation: 45, repetition: 65, contrast: 45, directionality: 55 },
        productionNotes: {
          arrangement: "Аналогові синтезатори + мікшерний пульт. Жива автоматизація.",
          soundDesign: "Спотворені, перевантажені тембри. Мінімум чистих звуків.",
          effects: "Spring reverb. Tape delay. Спотворення (overdrive/distortion).",
          mix: "Брудний, щільний. Компресія агресивніша, ніж у Basic Channel."
        },
        historicalContext: "Phon.o — частина берлінської сцени, пов'язаної з лейблом Shitkatapult. Стиль більш агресивний, ніж класичний даб-техно."
      },
      {
        title: "Substance & Vainqueur — Libration",
        artist: "Substance & Vainqueur",
        year: 2002,
        label: "Chain Reaction",
        timeline: [
          { time: "0:00", event: "Глибокий гул — текстура без ритму" },
          { time: "1:30", event: "Кік — м'який, майже непомітний" },
          { time: "3:00", event: "Бас — довга субчастотна нота" },
          { time: "4:30", event: "Delay — створює ритмічний малюнок" },
          { time: "6:00", event: "Фільтр — повільне відкриття" },
          { time: "8:00", event: "Максимальна просторовість" },
          { time: "10:00", event: "Розчинення — текстура повертається до гулу" }
        ],
        analysis: "Спільна робота Substance (переважно техно) та Vainqueur (ембієнт). Тут даб-техно досягає найбільшої просторовості. Форма — це майже нерухома текстура, яка ледь дихає.",
        archetypeScores: { segmentation: 25, repetition: 70, contrast: 20, directionality: 35 },
        productionNotes: {
          arrangement: "Дубовий мікшер — мінімальна кількість рухів.",
          soundDesign: "Суббасові генератори + ревербератори.",
          effects: "Lexicon 224. RE-201. Spring reverb.",
          mix: "Максимум простору між елементами. Суббас контролюється на рівні відчуття."
        },
        historicalContext: "Substance — псевдонім одного з учасників Chain Reaction. Vainqueur — псевдонім Рене Льове (Basic Channel). Спільний реліз на Chain Reaction."
      },
      {
        title: "Deepchord — Electromagnetic (DC Mix)",
        artist: "Deepchord",
        year: 2009,
        label: "Echospace",
        timeline: [
          { time: "0:00", event: "Електромагнітний шум — польовий запис трансформатора" },
          { time: "1:00", event: "Кік — важкий, індустріальний" },
          { time: "2:30", event: "Бас — синтезований, з LFO-модуляцією" },
          { time: "4:00", event: "Пад — густий, атмосферний" },
          { time: "6:00", event: "Перкусія — мінімальні удари з довгим ревербом" },
          { time: "8:00", event: "Шум — максимальна щільність" },
          { time: "10:00", event: "Завершення — повернення до електромагнітного шуму" }
        ],
        analysis: "Deepchord використовує польові записи електромагнітних полів як структурний елемент. Форма — це перехід від природного звуку до музичного і назад. Слухач не може визначити, де закінчується запис і починається музика.",
        archetypeScores: { segmentation: 40, repetition: 70, contrast: 30, directionality: 50 },
        productionNotes: {
          arrangement: "Польові записи як основа. Музичні елементи додаються повільно.",
          soundDesign: "Польові записи + аналогові синтезатори.",
          effects: "Lexicon 224. Згорткова реверберація (convolution reverb).",
          mix: "Польові записи на рівні з музикою. Жодного 'фону' — все є переднім планом."
        },
        historicalContext: "Род Моделл відомий використанням польових записів. Його альбом 'Hash-Bar Loops' та 'Electromagnetic' серія — приклади злиття даб-техно з конкретною музикою."
      },
      {
        title: "Maurizio — M5",
        artist: "Maurizio",
        year: 1997,
        label: "Maurizio",
        timeline: [
          { time: "0:00", event: "Низький гул — текстура приміщення" },
          { time: "1:30", event: "Кік — сухий, без ревербу" },
          { time: "3:00", event: "Бас — пульсуюча субчастота" },
          { time: "4:30", event: "Хай-хет — єдиний перкусійний елемент" },
          { time: "6:00", event: "Delay — ритм з відлунь" },
          { time: "7:30", event: "Фільтр — повільне закриття" },
          { time: "9:00", event: "Тиша — останній реверб" }
        ],
        analysis: "M5 — найбільш мінімалістичний трек Maurizio. Чотири елементи на 9 хвилин. Форма існує тільки в просторі між ними. Слухач чує тишу і реверберацію не як відсутність, а як матеріал.",
        archetypeScores: { segmentation: 20, repetition: 85, contrast: 15, directionality: 40 },
        productionNotes: {
          arrangement: "Одна доріжка з автоматизацією send/return. Мінімум редагування.",
          soundDesign: "909 кік, оброблений через spring reverb. Синусоїда для басу.",
          effects: "RE-201 Space Echo. Spring reverb.",
          mix: "Мінімальний мікс. Кожен елемент чути окремо."
        },
        historicalContext: "M5 — останній реліз серії Maurizio. Після нього Basic Channel зосередилися на Rhythm & Sound. Вважається вершиною мінімалізму в даб-техно."
      },
      {
        title: "Basic Channel — Octagon",
        artist: "Basic Channel",
        year: 1996,
        label: "Basic Channel",
        timeline: [
          { time: "0:00", event: "Затемнення — реверб без джерела" },
          { time: "1:00", event: "Кік + хай-хет — основа ритму" },
          { time: "2:30", event: "Бас — синкопований малюнок" },
          { time: "4:00", event: "Вокальний семпл — оброблений, невпізнаваний" },
          { time: "5:30", event: "Delay — семпл повторюється в різних ритмічних позиціях" },
          { time: "7:00", event: "Фільтр — повільне відкриття" },
          { time: "9:00", event: "Повернення до кіка" },
          { time: "11:00", event: "Розчинення" }
        ],
        analysis: "Octagon — рідкісний приклад даб-техно з вокальним семплом. Однак семпл не є мелодією — він є текстурою. Delay розбиває його на фрагменти, які стають ритмічними елементами.",
        archetypeScores: { segmentation: 45, repetition: 80, contrast: 25, directionality: 50 },
        productionNotes: {
          arrangement: "Семпл + ритм. Обробка семплу через send-канали.",
          soundDesign: "Семпл пропущений через spring reverb та tape delay.",
          effects: "RE-201. Lexicon 224. Spring reverb.",
          mix: "Семпл — на задньому плані, кік — на передньому. Простір між ними."
        },
        historicalContext: "Octagon — один з небагатьох треків Basic Channel з вокальним матеріалом. Використовувався як зразок для багатьох даб-техно продюсерів."
      }
    ],

    // ------------------------------------------------------------
    // Ключові техніки з DAW-перекладами (4-5 технік)
    // ------------------------------------------------------------
    productionTradition: {
      philosophy: "Даб-техно народилося в Берліні початку 1990-х, коли Basic Channel (Мориц фон Освальд і Марк Ернестус) поєднали детройтський мінімалізм із ямайською дабовою культурою. Філософія: простір — це інструмент. Реверберація і затримка не прикрашають звук — вони і є музикою. Замість того щоб додавати ноти, продюсер віднімає все зайве, поки не залишиться ритмічний пульс, суббас і нескінченний простір між ударами. Недосконалість аналогового обладнання (стрічкове ехо, пружинний ревербератор, шум вінілу) стає естетикою глибини. Це музика терпіння — форма розгортається повільно, гіпнотично, без дропів і кульмінацій.",

      coreTechniques: [
      {
        name: "Даб-мікшинг (Send/Return автоматизація)",
        description: "Основа даб-техно. Кожен елемент треку має send на ревербератор та/або затримку. Автоматизація send-рівнів створює форму: елементи «входять» у простір і «виходять» з нього.",
        dawTranslation: {
          ableton: "Створи return-трек з Reverb (Lexicon IR) або Delay (Ping Pong). Налаштуй send на кожному треку. Автоматизуй Send A/Send B у кліпах або на аранжуванні. Використовуй Auto Pan на return-треку для стерео-обертання.",
          flStudio: "Створи insert-канал з Fruity Reverb 2 або Convolver. Використовуй Send-канали мікшера (Routing). Автоматизуй гучність send-каналу за допомогою Automation Clip. Додай Delay 3 або Delay 2 для ритмічних хвостів.",
          logic: "Створи Aux-канал з Space Designer (IRCAM IR) або Delay Designer. Признач Bus-вихід на треках. Автоматизуй Bus Send рівень. Для даб-затримки — Tape Delay з feedback 60-80%."
        },
        canonicalExample: "Maurizio — M4 (кожен send — окремий інструмент композиції)"
      },
      {
        name: "Reverb як формотворчий елемент",
        description: "Реверберація у даб-техно — не ефект, а структурний матеріал. Хвости ревербу створюють ритм, текстуру та простір. Замість того щоб додавати нові елементи, продюсер змінює реверберацію.",
        dawTranslation: {
          ableton: "Використовуй Reverb (на return-каналі) з великим розміром кімнати (70-100%) та довгим decay (10-20s). Спробуй Auto Filter після ревербу для руху. Додай Erosion для текстуризації хвоста.",
          flStudio: "Fruity Reverb 2 з великим Decay (80-100%). Додай Fruity Filter після ревербу на insert-каналі. Автоматизуй Cutoff для створення руху. Спробуй Convolver з імпульсною відповіддю великого приміщення.",
          logic: "Space Designer з довгою імпульсною відповіддю (Cathedral, Large Hall). Chromaverb для кольорового ревербу. Налаштуй Decay на 10-15 секунд. Додай LowPass/HighPass на Aux-каналі ревербу."
        },
        canonicalExample: "Basic Channel — Radiance (реверб є головним голосом)"
      },
      {
        name: "Tape Echo / Delay-as-Rhythm",
        description: "Затримка створює ритмічну структуру з одного звуку. Замість того щоб грати багато нот, басова лінія грає одну ноту, а delay створює ритм. Зворотний зв'язок (feedback) контролює тривалість структури.",
        dawTranslation: {
          ableton: "Використовуй Ping Pong Delay на return-каналі. Time — 1/4T або 1/8T з dotted. Feedback — 60-80%. Додай Auto Filter після delay для фільтрації повторень. Автоматизуй Feedback для створення напруги.",
          flStudio: "Delay 3 з dotted-note налаштуванням. Feedback — до 70%. Додай Fruity Parametric EQ 2 на каналі delay для фільтрації високих частот. Автоматизуй Feedback з Automation Clip.",
          logic: "Tape Delay з 1/4 або 1/8 dotted. Feedback — 60-75%. Додай Low Pass Filter на Aux-каналі delay. Автоматизуй Feedback для створення «затухання» наприкінці секції."
        },
        canonicalExample: "Maurizio — M4 (delay створює всю ритмічну структуру)"
      },
      {
        name: "Суббас як основа (Minimal Sub-Bass)",
        description: "Басова лінія у даб-техно — це одна-дві ноти, які повторюються з мінімальними змінами. Увага на субчастотному діапазоні (30-60 Hz). Бас не конкурує з кіком — вони займають різні частотні діапазони.",
        dawTranslation: {
          ableton: "Використовуй Operator або Analog з синусоїдою на -2 октави. Відключи всі гармоніки — тільки fundamental. Low-pass фільтр на 80-100 Hz. Додай Utility для моно-басу. Компресія — мінімальна.",
          flStudio: "3x Osc — тільки синусоїда. Cutoff — 80-100 Hz. 7Band EQ — видали все вище 100 Hz. Використовуй Fruity Compressor легкий (2:1) для контролю субчастот.",
          logic: "ES2 або Retro Synth — синусоїда. AutoFilter з Low Pass 12dB/oct на 80 Hz. Додай SubBass або синусоїдальний генератор. Спробуй компресію з slow attack для пропускання атаки кіка."
        },
        canonicalExample: "Rhythm & Sound — Mango Drive (суббас як єдина гармонійна інформація)"
      },
      {
        name: "No-Drop Architecture (Фільтр як подія)",
        description: "У даб-техно немає дропу. Натомість повільна модуляція фільтра створює відчуття руху. Відкриття фільтра є кульмінацією — замість енергетичного вибуху слухач отримує звукову «ширину».",
        dawTranslation: {
          ableton: "Auto Filter на master-каналі або на групі. Low-pass 24dB/oct. Налаштуй LFO на 1/4, 50% глибини. Автоматизуй Cutoff: закрито (200 Hz) → відкрито (8 kHz) → закрито (200 Hz). Додай Auto Pan для стерео-пульсації.",
          flStudio: "Fruity Filter або Parametric EQ 2 на master. Low-pass з автоматизацією Cutoff. LFO Shape — повільний треугольник. Автоматизуй Resonnance (Q) для акценту на певних частотах.",
          logic: "Autofilter на Stereo Output. Low Pass 24dB. Module Cutoff automation — 100-500 Hz до 5-10 kHz. Додай Tremolo для стерео-пульсації. Використовуй Slow LFO (1/8) для повільної модуляції."
        },
        canonicalExample: "Fluxion — Binary Basis (фільтр — єдина зміна в треку)"
      }
    ],

    // ------------------------------------------------------------
    // Шлях слухання (5-7 кроків)
    // ------------------------------------------------------------
    listeningPathway: [
      {
        step: 1,
        title: "Почути простір",
        instruction: "Сядь в тиші. Увімкни Basic Channel — Radiance. Не слідкуй за ритмом. Закрий очі. Слухай реверберацію — простір між ударами. Де «стіни» цього приміщення? Як звук розсіюється? Відповідь — після першого прослуховування чи ти почув кімнату?",
        focus: "Простір"
      },
      {
        step: 2,
        title: "Слухати delay як ритм",
        instruction: "Увімкни Maurizio — M4 (Part 1). Зосередься на басовій лінії. Вона грає ОДНУ ноту. Слухай, як delay створює ритм: затримка повертається через кожні 1/4 з dotted. Порахуй: скільки повторень ти чуєш, перш ніж вони зникають? Це і є форма.",
        focus: "Затримка"
      },
      {
        step: 3,
        title: "Відчути фільтр як форму",
        instruction: "Увімкни Fluxion — Binary Basis. Слухай повне прослуховування (9 хвилин). Зверни увагу: жодного разу не з'являється новий матеріал. Вся зміна — у фільтрі. Де він відкривається? Де закривається? Зафіксуй моменти на папері.",
        focus: "Фільтрація"
      },
      {
        step: 4,
        title: "Порівняти даб-техно з хаусом",
        instruction: "Спочатку увімкни Larry Heard — Can You Feel It (house). Потім Deepchord — Vantage Isle (dub techno). Питання: де в хayci є «події» (мелодія, вокал, зміна акордів)? А в даб-техно — що є подією? Чи є сама поява кіка подією?",
        focus: "Контраст із хаусом"
      },
      {
        step: 5,
        title: "Почути суббас",
        instruction: "Увімкни Rhythm & Sound — Mango Drive. Використовуй навушники. Зосередься на найнижчих частотах. Бас — це не мелодія, це відчуття. Чи відчуваєш ти вібрацію в грудях? Де закінчується бас і починається шум?.",
        focus: "Суббас"
      },
      {
        step: 6,
        title: "Слухати відсутність дропу",
        instruction: "Увімкни будь-який даб-техно трек зі списку. Знайди момент, який міг би бути дропом в іншому жанрі. Чи є він? Чи відчуваєш ти, що трек «нікуди не йде»? Якщо так — переформулюй: не «нікуди не йде», а «залишається в просторі». Чи змінюється твоє сприйняття?",
        focus: "Архітектура без дропу"
      },
      {
        step: 7,
        title: "Повне занурення",
        instruction: "Створи мікс із трьох треків: Radiance → M4 → Mango Drive. Слухай 30 хвилин без перерви. Не роби нічого. Просто слухай. Де ти знаходишся? У якому просторі? Як змінюється твій внутрішній стан? Це і є форма даб-техно — не музика, а архітектура простору.",
        focus: "Імерсивне прослуховування"
      }
      ]
    },

    commonMistakes: [
      "Зловживання ревербом — простір стає «каламутним», а не глибоким. Контролюй decay та high-cut на reverb.",
      "Додавання занадто багато елементів — даб-техно вимагає мінімуму. Якщо можна видалити — видали.",
      "Використання дропу — даб-техно не має дропів. Кульмінація — це відкриття фільтра, а не енергетичний вибух.",
      "Ігнорування моно-сумісності — суббас має бути моно. Стерео-ефекти — тільки на високих частотах та ефектах.",
      "Надто швидкі зміни — даб-техно вимагає терпіння. Зміни мають відбуватися кожні 16-32 такти, не частіше."
    ],

    distinguishingFeatures: [
      "Реверберація і затримка — не ефекти, а структурні елементи форми",
      "Відсутність дропу: кульмінація — це звукова глибина, не енергетичний пік",
      "Суббас як єдина гармонійна інформація (одна-дві ноти на весь трек)",
      "Мінімум перкусії: часто тільки кік + один перкусійний елемент",
      "Тривалість 8-12 хвилин: форма потребує часу для розгортання",
      "Аналогова обробка: spring reverb, tape echo, аналоговий мікшерний пульт"
          ],

          compositionDecisions: {
            formBearer: "Простір (reverb/delay). Не мелодія, не ритм, не гармонія — реверберація та затримка є головним матеріалом. Кік і суббас — лише привід для простору.",
            development: "Повільна модуляція фільтру, send-автоматизація (зміна рівня ревербу/delay). Розвиток — це зміна простору, а не додавання матеріалу.",
            contrast: "Зміна просторової глибини. Не додавання/зняття елементів, а зміна їхнього положення в стереополі та ревербераційному просторі.",
            styleBreakers: [
              "Дроп — даб-техно не має дропів, кульмінація — відкриття фільтра",
              "Забагато елементів — 3-5 елементів максимум, все інше — зайве",
              "Мелодична лінія — ноти не потрібні, простір створює музику",
              "Швидкі зміни — зміни кожні 16-32 такти, не частіше",
              "Чистий сухий звук — без простору даб-техно не існує"
            ]
          },

          designConstraints: {
            bpm: "120–128",
            sectionDuration: "16–32 такти (1–2 хв)",
            contrastLevel: "Низький (15–30%)",
            density: "Низька (3–5 елементів одночасно)",
            harmonicComplexity: "Мінімальна (1–2 ноти, без акордів)",
            energyDynamics: "Рівна — без піків і спадів. Енергія — у глибині простору, не в гучності"
          }
        },
        {
    id: "uplifting-trance",
    name: "Апліфтінг-транс",
    nameEn: "Uplifting Trance",
    period: "1998–2010",
    geography: "Нідерланди / Німеччина / Велика Британія",
    bpm: "134–140",
    structuralProfile: "Емоційна подорож. Білд створює очікування, дроп вивільняє ейфорію. Кожна секція має драматургічну функцію. Форма — це накопичення енергії через довгі білди (32-64 такти), кульмінація на дропі з мелодійним хуком, і скидання через брейкдаун для повторення циклу.",
    energyProfile: "Драматична: низька (інтро) → поступове наростання → ейфорійний пік (дроп) → спад (брейкдаун) → повтор. Ключова ознака: довге наростання (до 2 хвилин) перед вивільненням. Ейфорія на дропі — результат накопиченого очікування.",
    keyLabels: [
      "Armada",
      "Anjunabeats",
      "Vandit",
      "Euphonic"
    ],

    // ------------------------------------------------------------
    // Канонічні треки (10+ з повним аналізом)
    // ------------------------------------------------------------
    canonicalTracks: [
      {
        title: "Tiësto — Adagio for Strings",
        artist: "Tiësto",
        year: 2004,
        label: "Magik Muzik",
        timeline: [
          { time: "0:00", event: "Струнний оркестр — оригінальна тема Barbera, повільна, емоційна" },
          { time: "1:30", event: "Кік входить — 4/4, 138 BPM" },
          { time: "2:30", event: "Бас — пульсуючий, sidechain-компресія створює дихання" },
          { time: "3:30", event: "Білд — райзер, шум наростає, перкусія прискорюється" },
          { time: "4:15", event: "Дроп — струнна тема повертається з повною енергією" },
          { time: "5:30", event: "Брейкдаун — тільки струнні, кік зникає" },
          { time: "6:30", event: "Фінальний білд — найдовший, максимальна напруга" },
          { time: "7:30", event: "Фінальний дроп — катарсис, повна оркестрація" }
        ],
        analysis: "Квінтесенція апліфтінг-трансу. Tiësto трансформував класичну п'єсу Samuel Barber'a у клубний гімн. Форма — це боротьба між струнною темою (емоція) та ритмом (фізичність). Кожен білд наближає слухача до моменту, коли ці два світи зливаються в дропі. Adagio навчає: найпотужніший дроп — це той, який повертає тему, яку слухач вже полюбив.",
        archetypeScores: { segmentation: 85, repetition: 65, contrast: 75, directionality: 90 },
        productionNotes: {
          arrangement: "Оркестровий семпл (Barber) + клубний ритм. Струнні є головним голосом.",
          soundDesign: "Кік — 909 з sidechain. Струнні — оркестровий семпл, оброблений ревербом.",
          effects: "Reverb на струнних. Sidechain компресія на басу та падах. White noise райзер.",
          mix: "Оркестр — широке стерео. Кік — центр. Бас — моно."
        },
        historicalContext: "Tiësto виконав Adagio на церемонії відкриття Олімпійських ігор 2004 в Афінах — це був перший виступ діджея на Олімпіаді. Трек став одним з найвпізнаваніших трансових гімнів."
      },
      {
        title: "Armin van Buuren — Communication (Part 3)",
        artist: "Armin van Buuren",
        year: 2005,
        label: "Armind",
        timeline: [
          { time: "0:00", event: "Атмосферний пад — мінорний настрій" },
          { time: "1:00", event: "Кік — 135 BPM, чіткий, твердий" },
          { time: "2:00", event: "Бас — швидкий, з синкопами" },
          { time: "3:00", event: "Мелодія — арпеджіо, що повторюється" },
          { time: "4:00", event: "Білд — райзер + snare roll + filtering" },
          { time: "4:45", event: "Дроп — supersaw акорди, повний мікс" },
          { time: "5:30", event: "Брейкдаун — тільки пад + мелодія" },
          { time: "6:30", event: "Фінальний білд і дроп" }
        ],
        analysis: "Communication — це майстер-клас з білду. Армін будує напругу протягом 4 хвилин, перш ніж дати дроп. Кожен елемент додається поступово: спочатку пад, потім кік, бас, мелодія, і нарешті — вивільнення. Саме накопичення, а не дроп, є головною подією.",
        archetypeScores: { segmentation: 80, repetition: 70, contrast: 70, directionality: 85 },
        productionNotes: {
          arrangement: "Класичний build-drop-arc. Довгий інтро, поступове нашарування.",
          soundDesign: "Supersaw акорди (JP-8000). Кік — 909 з sidechain.",
          effects: "White noise райзер. Snare roll для акценту білду. Reverb на падах.",
          mix: "Чистий, прозорий мікс. Кожен елемент чути окремо."
        },
        historicalContext: "Communication Part 3 — найвідоміша частина серії. Армін вважає цей трек поворотним моментом у своїй кар'єрі."
      },
      {
        title: "Above & Beyond — Satellite (Original Mix)",
        artist: "Above & Beyond",
        year: 2004,
        label: "Anjunabeats",
        timeline: [
          { time: "0:00", event: "Фортепіанний арпеджіо — емоційне інтро" },
          { time: "1:00", event: "Кік + бас — 136 BPM" },
          { time: "2:00", event: "Вокал (перший куплет) — тендітний, жіночий" },
          { time: "3:00", event: "Білд — наростання, додається струнний пад" },
          { time: "3:30", event: "Дроп — supersax, повна енергія, вокал 'Satellite' повторюється" },
          { time: "4:30", event: "Брейкдаун — фортепіано + вокал, без кіка" },
          { time: "5:30", event: "Фінальний білд і дроп — з додатковими шарами" },
          { time: "7:00", event: "Аутро — затухання" }
        ],
        analysis: "Satellite — приклад трансу з вокалом. Форма поєднує поп-структуру (verse-chorus) з клубною енергетикою (build-drop). Вокал є не тільки мелодією, але й структурним елементом: повернення вокалу в дропі створює емоційний катарсис.",
        archetypeScores: { segmentation: 85, repetition: 70, contrast: 75, directionality: 85 },
        productionNotes: {
          arrangement: "Verse-chorus + build-drop. Вокал як центральний елемент.",
          soundDesign: "Supersaw акорди. Фортепіанне арпеджіо. Вокал оброблений ревербом.",
          effects: "Sidechain на падах. Delay на вокалі. White noise райзер.",
          mix: "Вокал — центр уваги. Інструменти — навколо нього."
        },
        historicalContext: "Above & Beyond — тріо, яке визначило звук Anjunabeats. Satellite — один з найпопулярніших треків лейблу. Вокал — Justine Suissa."
      },
      {
        title: "Ferry Corsten — Punk",
        artist: "Ferry Corsten",
        year: 2002,
        label: "Tsunami",
        timeline: [
          { time: "0:00", event: "Шум + індустріальний звук — несподіване інтро" },
          { time: "0:30", event: "Кік — 138 BPM, агресивний" },
          { time: "1:00", event: "Бас — жорсткий, синкопований" },
          { time: "2:00", event: "Мелодія — supersaw арпеджіо, впізнавана" },
          { time: "3:00", event: "Білд — довгий, з snare rolls" },
          { time: "3:45", event: "Дроп — максимальна енергія, всі елементи" },
          { time: "4:30", event: "Міні-брейк — короткий спад" },
          { time: "5:00", event: "Фінальний дроп — підсилений" }
        ],
        analysis: "Punk — більш агресивний, ніж типовий апліфтінг-транс. Феррі Корстен додає рок-енергію в трансову форму. Інтро з шумом ламає очікування — слухач не знає, чи це техно, чи хардстайл. Коли мелодія входить на 2:00, контекст змінюється. Форма використовує несподіванку як структурний інструмент.",
        archetypeScores: { segmentation: 80, repetition: 65, contrast: 80, directionality: 85 },
        productionNotes: {
          arrangement: "Агресивне інтро → мелодичний розвиток → потужний дроп.",
          soundDesign: "Supersaw ліди. Спотворені баси. JP-8000 звуки.",
          effects: "Reverb для простору. Distortion для агресивності. Snare rolls.",
          mix: "Щільний, потужний. Компресор на master-каналі для гучності."
        },
        historicalContext: "Punk — один з найвідоміших треків Ferry Corsten. Отримав широке визнання за нестандартне інтро, що виділяло його серед типових трансових треків того часу."
      },
      {
        title: "Paul van Dyk — For an Angel (E-Werk Club Mix)",
        artist: "Paul van Dyk",
        year: 1998,
        label: "Vandit",
        timeline: [
          { time: "0:00", event: "Фортепіано — мінорна тема, меланхолійна" },
          { time: "1:00", event: "Кік — 136 BPM, м'який" },
          { time: "2:00", event: "Бас — плавний, мелодичний" },
          { time: "3:00", event: "Вокал — 'You are my angel' — повторюється" },
          { time: "4:00", event: "Білд — поступове наростання" },
          { time: "4:45", event: "Дроп — фортепіано + supersaw, ейфорія" },
          { time: "6:00", event: "Брейкдаун — фортепіано соло" },
          { time: "7:00", event: "Фінальний дроп" }
        ],
        analysis: "For an Angel — один з найвідоміших трансових треків всіх часів. Форма проста, але ефективна: фортепіанна тема, яка повертається в кожному дропі. Емоційний центр — меланхолія, яка трансформується в ейфорію через ритм. Трек навчає: найпотужніший інструмент трансу — це повторення простої, але гарної мелодії.",
        archetypeScores: { segmentation: 80, repetition: 80, contrast: 60, directionality: 85 },
        productionNotes: {
          arrangement: "Просте інтро → build → drop → repeat. Фортепіано — головний голос.",
          soundDesign: "Фортепіанний семпл. Supersaw пади. 909 кік.",
          effects: "Reverb на фортепіано. Sidechain на падах. Мінімум райзерів.",
          mix: "Теплий, емоційний. Фортепіано — в центрі стереополя."
        },
        historicalContext: "E-Werk Club Mix — ремікс, створений спеціально для клубу E-Werk у Кельні. Став одним з найбільш впізнаваних трансових треків 90-х."
      },
      {
        title: "Gareth Emery — The Saint (Intro Mix)",
        artist: "Gareth Emery",
        year: 2005,
        label: "Five AM",
        timeline: [
          { time: "0:00", event: "Струнне інтро — епічне, кінематографічне" },
          { time: "1:30", event: "Кік — 138 BPM, потужний" },
          { time: "2:30", event: "Бас — швидкий, енергійний" },
          { time: "3:30", event: "Supersaw акорди — емоційний пік" },
          { time: "4:30", event: "Білд — snare roll + райзер" },
          { time: "5:00", event: "Дроп — максимальна щільність" },
          { time: "6:00", event: "Брейкдаун — струнні повертаються" },
          { time: "7:00", event: "Фінальний дроп — з ключовою зміною" }
        ],
        analysis: "The Saint — зразок того, як створити епічну атмосферу за допомогою струнних у трансі. Інтро нагадує кіносаундтрек, а перехід у клубний ритм створює потужний контраст. Ключова зміна наприкінці підсилює ейфорію.",
        archetypeScores: { segmentation: 85, repetition: 65, contrast: 80, directionality: 90 },
        productionNotes: {
          arrangement: "Кінематографічне інтро → клубна частина. Струнні як структурний міст.",
          soundDesign: "Оркестрові семпли. Supersaw синтезатори. 909 кік.",
          effects: "Reverb на струнних. Delay на акордах. White noise райзер.",
          mix: "Епічний, широкий. Струнні — широке стерео, ритм — центр."
        },
        historicalContext: "Gareth Emery — британський продюсер, який визначив звук апліфтінг-трансу 2000-х. The Saint — один з його найвідоміших треків."
      },
      {
        title: "Markus Schulz & Departure — Without You Near",
        artist: "Markus Schulz feat. Departure",
        year: 2005,
        label: "Coldharbour",
        timeline: [
          { time: "0:00", event: "Атмосфера — ембієнт, віддалені звуки" },
          { time: "1:00", event: "Кік — 136 BPM, глибокий" },
          { time: "2:00", event: "Вокал — жіночий, меланхолійний" },
          { time: "3:00", event: "Білд — наростання, райзер" },
          { time: "3:30", event: "Дроп — supersaw, вокал повторюється" },
          { time: "4:30", event: "Брейкдаун — фортепіано + вокал" },
          { time: "5:30", event: "Фінальний дроп — з додатковими шарами" }
        ],
        analysis: "Without You Near — приклад «темного» апліфтінг-трансу. Мінорна тональність, меланхолійний вокал, але класична build-drop форма. Контраст між емоційним текстом та ейфорійним дропом створює катарсис — смуток стає святковим.",
        archetypeScores: { segmentation: 80, repetition: 70, contrast: 75, directionality: 85 },
        productionNotes: {
          arrangement: "Vocal house + trance. Вокал — структурний центр.",
          soundDesign: "Supersaw акорди. Фортепіано. Атмосферні пади.",
          effects: "Reverb на вокалі. Sidechain. White noise райзер.",
          mix: "Темний, глибокий. Вокал — у центрі, з мінімальним ревербом."
        },
        historicalContext: "Markus Schulz — американський продюсер німецького походження. Coldharbour — його лейбл. Стиль — темніший, ніж у Armin або Tiësto."
      },
      {
        title: "Aly & Fila — We Control the Sunlight",
        artist: "Aly & Fila",
        year: 2010,
        label: "Future Sound of Egypt",
        timeline: [
          { time: "0:00", event: "Атмосферний пад — східний мотив" },
          { time: "1:00", event: "Кік — 140 BPM, швидкий" },
          { time: "2:00", event: "Бас — енергійний, з синкопами" },
          { time: "3:00", event: "Supersaw акорди — мажорна гармонія" },
          { time: "4:00", event: "Білд — довгий, snare roll" },
          { time: "4:45", event: "Дроп — повна енергія, мелодійний хук" },
          { time: "5:30", event: "Брейкдаун — пад + перкусія" },
          { time: "6:30", event: "Фінальний дроп — з додаванням нових шарів" }
        ],
        analysis: "Aly & Fila представляють єгипетську гілку трансу. We Control the Sunlight — це мажорний, сонячний трек, який демонструє, як східні мотиви вписуються в західну build-drop форму. Форма — класична, але тональність та мелодика додають унікальність.",
        archetypeScores: { segmentation: 85, repetition: 70, contrast: 70, directionality: 85 },
        productionNotes: {
          arrangement: "Класичний апліфтінг build-drop. Мажорна тональність.",
          soundDesign: "Supersaw. Східні пади. 909 кік з підвищеним тілом.",
          effects: "Reverb. Delay для ритмічних хвостів. White noise райзер.",
          mix: "Сонячний, чистий. Висока гучність через компресію master-каналу."
        },
        historicalContext: "Aly & Fila — єгипетське дуо, засновники лейблу Future Sound of Egypt. Їхній стиль — на межі апліфтінг-трансу та psy-trance."
      },
      {
        title: "Push — Universal Nation",
        artist: "Push (M.I.K.E.)",
        year: 1998,
        label: "Bonzai",
        timeline: [
          { time: "0:00", event: "Інтро — сигнал, як тривога" },
          { time: "0:30", event: "Кік — 138 BPM, потужний" },
          { time: "1:30", event: "Бас — синкопований, агресивний" },
          { time: "2:30", event: "Тема — впізнаваний hook, синтезаторний" },
          { time: "3:30", event: "Білд — snare roll на 4/4" },
          { time: "4:00", event: "Дроп — тема повертається з повною силою" },
          { time: "5:30", event: "Брейкдаун — тема у спотвореному вигляді" },
          { time: "6:30", event: "Фінальний дроп — ключова зміна" }
        ],
        analysis: "Universal Nation — один з найвідоміших трансових треків 90-х. Push (M.I.K.E.) створив трек, який визначив звук бельгійського трансу. Тема — надзвичайно впізнавана, з простим, але потужним інтервалом. Форма — ідеальний build-drop arc.",
        archetypeScores: { segmentation: 90, repetition: 75, contrast: 70, directionality: 90 },
        productionNotes: {
          arrangement: "Чіткий build-drop. Два дропи з брейкдауном між ними.",
          soundDesign: "Синтезаторний hook. 909 кік. Агресивний бас.",
          effects: "Reverb на hook. Distortion для агресивності. Snare rolls.",
          mix: "Потужний, бельгійський «кислотний» звук."
        },
        historicalContext: "Push — один з псевдонімів M.I.K.E. (бельгійський продюсер). Universal Nation — класика, яка регулярно потрапляє в топ-100 трансових треків всіх часів."
      },
      {
        title: "Robert Miles — Children",
        artist: "Robert Miles",
        year: 1995,
        label: "DBX",
        timeline: [
          { time: "0:00", event: "Фортепіанне інтро — проста, дитяча тема" },
          { time: "0:30", event: "Кік — 136 BPM, м'який" },
          { time: "1:30", event: "Бас — пульсуючий, sidechain" },
          { time: "2:30", event: "Струнні — додають емоційну глибину" },
          { time: "3:30", event: "Фортепіанна тема з варіацією" },
          { time: "4:30", event: "Брейкдаун — тільки фортепіано" },
          { time: "5:30", event: "Фінальне проведення теми — розчинення" }
        ],
        analysis: "Children — прото-транс. Форма ще не має типового build-drop arc — це більше progressive house структура. Але емоційний вплив, фортепіанна тема та ейфорійний настрій зробили Children прабатьком апліфтінг-трансу. Форма — це тема та її варіації, обрамлені ритмом.",
        archetypeScores: { segmentation: 70, repetition: 80, contrast: 50, directionality: 75 },
        productionNotes: {
          arrangement: "Фортепіанна тема + ритм. Тема повторюється з мінімальними змінами.",
          soundDesign: "Фортепіанний семпл (Roland JV-1080). 909 кік. Струнні.",
          effects: "Reverb на фортепіано. Мінімум райзерів — акцент на мелодії.",
          mix: "Теплий, ембієнтний. Фортепіано — ясно, чітко."
        },
        historicalContext: "Children — випадковий хіт. Robert Miles створив трек як експеримент, не очікуючи комерційного успіху. Трек став гімном цілого покоління та визначив звук кінця 90-х."
      },
      {
        title: "Above & Beyond pres. OceanLab — Satellite (Above & Beyond Club Mix)",
        artist: "Above & Beyond pres. OceanLab",
        year: 2004,
        label: "Anjunabeats",
        timeline: [
          { time: "0:00", event: "Фортепіанне арпеджіо — настрій, очікування" },
          { time: "1:00", event: "Кік — 136 BPM" },
          { time: "2:00", event: "Бас — sidechain пульсація" },
          { time: "2:30", event: "Вокал — 'Now that you're gone, I'm not the same'" },
          { time: "3:00", event: "Білд — райзер, snare roll, зростання" },
          { time: "3:30", event: "Дроп — supersaw + вокал 'Satellite', повна енергія" },
          { time: "5:00", event: "Брейкдаун — фортепіано + вокал, а капела" },
          { time: "6:00", event: "Фінальний дроп — додаткові шари, ключова зміна" }
        ],
        analysis: "OceanLab — вокальний проект Above & Beyond. Satellite Club Mix — ідеальний зразок того, як вокал і клубна структура працюють разом. Вокал не просто мелодія — він є частиною build-drop: білд накопичується на фразі, дроп вивільняється з ключовим словом 'Satellite'.",
        archetypeScores: { segmentation: 85, repetition: 70, contrast: 75, directionality: 90 },
        productionNotes: {
          arrangement: "Вокал як структурний елемент. Білд синхронізований з вокальними фразами.",
          soundDesign: "Supersaw. Фортепіанне арпеджіо. Вокал — Justine Suissa.",
          effects: "Sidechain на падах. Reverb на вокалі. White noise райзер.",
          mix: "Чистий, емоційний. Вокал — в центрі, інструменти — підтримка."
        },
        historicalContext: "OceanLab — вокальне тріо Above & Beyond з вокалісткою Justine Suissa. Альбом 'Sirens of the Sea' — один з найкращих вокальних трансових альбомів."
      },
      {
        title: "Ferry Corsten — Rock Your Body Rock",
        artist: "Ferry Corsten",
        year: 2003,
        label: "Tsunami",
        timeline: [
          { time: "0:00", event: "Синтезаторний риф — впізнаваний з першої секунди" },
          { time: "0:30", event: "Кік — 137 BPM" },
          { time: "1:00", event: "Бас — жорсткий, синкопований" },
          { time: "1:30", event: "Білд — фільтр закривається, напруга" },
          { time: "2:00", event: "Дроп — повна енергія, риф повертається" },
          { time: "3:00", event: "Міні-брейк — коротке скидання" },
          { time: "3:30", event: "Фінальний дроп — посилений" }
        ],
        analysis: "Rock Your Body Rock — більш комерційний, але технічно досконалий трек. Форма стиснена: білди коротші (16 тактів замість 32-64), дропи частіші. Це робить трек більш радіо-дружнім, але зберігає ейфорійний вплив.",
        archetypeScores: { segmentation: 85, repetition: 75, contrast: 70, directionality: 80 },
        productionNotes: {
          arrangement: "Стиснена форма. Швидкі переходи між секціями.",
          soundDesign: "Supersaw. Кислотні звуки (303-like). 909 кік.",
          effects: "Filter sweep. Sidechain. Мінімальний реверб.",
          mix: "Радіо-формат. Гучний, щільний. Мінімум динамічного діапазону."
        },
        historicalContext: "Rock Your Body Rock — комерційно успішний трек Ferry Corsten. Показав, що апліфтінг-транс може бути радіо-форматним."
      }
    ],

    // ------------------------------------------------------------
    // Ключові техніки з DAW-перекладами (5 технік)
    // ------------------------------------------------------------
    productionTradition: {
      philosophy: "Апліфтінг-транс — це інженерія ейфорії. Сформований у Нідерландах і Німеччині наприкінці 1990-х (Tiësto, Armin van Buuren, Ferry Corsten, ATB), він підпорядкував усе одній меті — емоційному підйому. Філософія: форма існує, щоб керувати почуттями слухача. Довгий брейкдаун скидає напругу, білд накопичує очікування через нашарування, а дроп вивільняє його разом із мелодійним хуком у мажорі. Кожен елемент — райзер, snare roll, supersaw, sidechain-пульсація — служить драматургії build–drop. Це не музика для аналізу, а музика для переживання: момент, коли руки злітають угору на головному дропі, і є справжньою формою.",

      coreTechniques: [
      {
        name: "Нашарування Supersaw (Supersaw Layering)",
        description: "Базовий звук апліфтінг-трансу — supersaw, створений синтезатором Roland JP-8000. Кілька шарів supersaw з різною детюном (розстроєм) створюють потужний, «жирний» тембр. Важливість: акорди supersaw є емоційним центром дропу.",
        dawTranslation: {
          ableton: "Використовуй 3-5 доріжок Operator або Wavetable з Saw хвилями. Detune кожного шару на 3-7 cents. Додай Auto Filter (Low Pass) на кожен шар, автоматизуй Cutoff. Зведи всі шари в групу. Додай Utility для стерео-розширення (+150%). Додай glue compressor на групу.",
          flStudio: "3x Osc з Saw хвилями. Fine-tune кожного осцилятора: 0, +5, -5 cents. Використовуй Fruity Filter (Low Pass) з автоматизацією Cutoff. Додай Fruity Stereo Enhancer на групу. Дай групі легку компресію (Fruity Compressor 2:1).",
          logic: "ES2 або Retro Synth з Saw. Detune кожного Voice: +2, -3, +7 cents. AutoFilter Low Pass з автоматизацією. Stereo Spread +150%. Glue компресор на Aux-каналі. Додай Chromaverb для простору."
        },
        canonicalExample: "Tiësto — Adagio for Strings (дроп побудований на потужному supersaw)"
      },
      {
        name: "Sidechain Компресія (Sidechain Pumping)",
        description: "Sidechain — серце трансового звуку. Компресор на басу, падах та інших елементах реагує на кік, створюючи пульсацію. Ця пульсація синхронізує всі елементи з ритмом і створює характерне «дихання» трансу.",
        dawTranslation: {
          ableton: "Компресор (Ableton Compressor) на групу басу та падів. Sidechain input — кік. Ratio 4:1-10:1, Attack 1-3ms, Release 100-200ms. Додай Auto Pan на Return-канал з Rate 1/4 для додаткової пульсації.",
          flStudio: "Fruity Limiter (Compression mode) на канали басу та падів. Sidechain — кік. Threshold -12 до -20dB. Ratio 5:1. Release — 150ms. Додай Fruity Love Philter з LFO 1/4 для додаткового pumping.",
          logic: "Compressor на групу басу/падів. Sidechain — Kick bus. Ratio 6:1-10:1. Attack 2ms, Release 120-180ms. Додай Tremolo або LFO Tool для додаткової пульсації."
        },
        canonicalExample: "Armin van Buuren — Communication (classic trance sidechain)"
      },
      {
        name: "Побудова райзера (Riser Construction)",
        description: "Райзер — ключовий елемент білду. Це звук, що підвищується по висоті та/або гучності, створюючи очікування дропу. Складається з white noise, tonal riser, snare roll та перкусійного прискорення.",
        dawTranslation: {
          ableton: "White Noise: Operator або Wavetable з noise, автоматизуй Pitch +12 полутонів. Snares: 32-й ноти з прискоренням (1/8 → 1/32). Додай Reverb з великим decay на райзер. Використовуй Auto Filter (HP → LP sweep). Фінальний crash cymbal на останньому ударі.",
          flStudio: "3x Osc з noise, автоматизація Pitch. Fruity Slicer для snare acceleration. Fruity Reverb 2 на райзер. Fruity Filter з HP → LP sweep. Додай Fruity Delay 3 для ритмічних повторень.",
          logic: "ES2 Noise generator з Pitch Bend. Ultrabeat для snare acceleration. Space Designer з довгою IR для райзера. Autofilter HP → LP sweep. Додай Tape Delay для додаткової текстури."
        },
        canonicalExample: "Above & Beyond — Satellite (довгий райзер перед кожним дропом)"
      },
      {
        name: "Build-Up → Breakdown → Drop Arc (Драматургія секцій)",
        description: "Апліфтінг-транс будується на триактній структурі: breakdown (скидання, тільки мелодія/вокал) → build-up (наростання, райзери, snare rolls) → drop (вивільнення, повний мікс, хукова тема). Тривалість кожної секції має бути достатньою для створення очікування.",
        dawTranslation: {
          ableton: "Breakdown: видали кік та бас, залиши пад + вокал/мелодію. Build-up: додай кік на 16-й такт, додавай райзери кожні 4 такти. Drop: всі елементи входять на перший удар. Автоматизуй гучність Master: -3dB на breakdown, -1dB на build-up, 0dB на drop.",
          flStudio: "Breakdown: mut-канали кіка та басу. Build-up: вводи кік через fade-in (8 тактів), додавай райзер з 32-го такту. Drop: unmute всі канали на 1-му ударі. Automation Clip на гучність райзера.",
          logic: "Маркери аранжування (Arrangement markers) для кожної секції. Break: mute kick/bass. Build: повільне повернення kick (8 тактів fade-in), автоматизація райзера. Drop: demute всіх треків на count-in."
        },
        canonicalExample: "Paul van Dyk — For an Angel (класичний breakdown-build-drop arc)"
      },
      {
        name: "Ключова зміна (Key Change for Euphoria)",
        description: "Підйом тональності на півтону або тон перед фінальним дропом — характерна техніка апліфтінг-трансу. Зміна ключу створює додатковий емоційний підйом. Зазвичай використовується тільки в фінальному дропі, щоб зробити його найпотужнішим.",
        dawTranslation: {
          ableton: "Наприкінці брейкдауну: виділи всі MIDI-кліпи з мелодійним матеріалом, транспонуй вгору на +1 або +2 полутони. Або використовуй Pitch Bend на всіх синтезаторах (+0 → +2). Для семплів — Complex Pro з аранжуванням Formant.",
          flStudio: "Select all melodic patterns. Piano roll — Select all notes, transpose +2 semitones. Для семплів — New Time + Pitch. Або Automation Clip на Pitch осцилятора кожного синтезатора.",
          logic: "Pitch Shifter на групу мелодійних елементів. Automation: cents +200. Або транспонуй MIDI регіони вгору. Для вокалу — Flex Pitch з поправкою."
        },
        canonicalExample: "Gareth Emery — The Saint (ключова зміна на фінальному дропі)"
      }
    ],

    // ------------------------------------------------------------
    // Шлях слухання (7 кроків)
    // ------------------------------------------------------------
    listeningPathway: [
      {
        step: 1,
        title: "Почути білд",
        instruction: "Увімкни Armin van Buuren — Communication (Part 3). Знайди момент, де починається білд (приблизно 4:00). Зверни увагу: що додається? Райзер? Snare roll? Перкусія? Порахуй: скільки секунд триває білд? Чи відчуваєш ти фізичне очікування?",
        focus: "Білд"
      },
      {
        step: 2,
        title: "Відчути дроп",
        instruction: "Та ж сама Communication. Момент дропу (4:45). Що змінюється? Гучність? Щільність? Емоція? Якщо закрити очі — чи відчувається фізичне вивільнення? Порівняй дроп трансу з дропом даб-техно — в чому різниця?",
        focus: "Дроп"
      },
      {
        step: 3,
        title: "Слухати supersaw",
        instruction: "Увімкни Tiësto — Adagio for Strings. Зосередься на синтезаторних акордах у дропі (починаючи з 4:15). Це supersaw. Чуєш, як багато голосів звучить одночасно? Як детюн створює «жирний» звук? Спробуй почути окремі голоси — чи можливо це?",
        focus: "Supersaw"
      },
      {
        step: 4,
        title: "Почути sidechain",
        instruction: "Above & Beyond — Satellite. Слухай пульсацію — як пади та бас «дихають» разом з кіком. На кожному ударі кіка елементи стишуються, потім відновлюються. Це sidechain. Порахуй: скільки елементів мають sidechain-пульсацію?",
        focus: "Sidechain"
      },
      {
        step: 5,
        title: "Порівняти мелодію та ритм",
        instruction: "Robert Miles — Children (proto-trance) vs Tiësto — Adagio (full trance). В Children немає типового build-drop arc. Чи відчуваєш ти різницю? Яка форма створює більше очікування? Яка — більше ейфорії? Чи потрібен білд для емоційного впливу?",
        focus: "Еволюція форми"
      },
      {
        step: 6,
        title: "Слухати драматургію",
        instruction: "Push — Universal Nation. Розбий трек на секції: інтро, білд, дроп, брейкдаун. Яка секція виконує яку драматургічну функцію? Чи можеш ти передбачити, коли настане дроп? Якщо так — що тобі сигналізує? Райзер? Зміна гармонії? Snare roll?",
        focus: "Драматургія"
      },
      {
        step: 7,
        title: "Повне занурення",
        instruction: "Створи мікс з трьох треків: Children → For an Angel → Adagio. Слухай 20 хвилин. Записуй свій емоційний стан кожні 2 хвилини. Де ти відчуваєш підйом? Де спад? Як форма трансу керує твоєю емоцією? Чи відчуваєш ти маніпуляцію — і чи це погано?",
        focus: "Імерсивне прослуховування"
      }
      ]
    },

    commonMistakes: [
      "Занадто короткий білд — ейфорія не встигає накопичитися. Мінімум 32 такти.",
      "Дроп без мелодійного хука — дроп має повертати емоційний центр, а не просто бути гучним.",
      "Ігнорування брейкдауну — брейкдаун потрібен, щоб дроп відчувався другий раз.",
      "Відсутність ключової зміни — останній дроп має бути сильнішим, або через нові шари, або через транспозицію.",
      "Перевантаження дропу — занадто багато елементів одночасно створює шум, а не ейфорію. Тримай ієрархію: supersax (головний), бас (підтримка), перкусія (функція)."
    ],

    distinguishingFeatures: [
      "Довгі білди (32-64 такти), що створюють накопичувальне очікування",
      "Supersaw акорди (JP-8000) як основний тембральний елемент",
      "Sidechain компресія, що створює характерне «дихання»",
      "Мажорна тональність та мелодійний хук як емоційний центр",
      "Ключова зміна на фінальному дропі для посилення ейфорії",
      "Формула breakdown → build-up → drop як стандартна драматургічна одиниця",
      "Барабани: 4/4 кік, перкусія з snare rolls на білді",
      "Темп 134-140 BPM — швидший за хаус, що додає енергійність"
          ],

          compositionDecisions: {
            formBearer: "Мелодійний хук (supersaw акорди або синтезаторна тема) та енергетична дуга build–drop. Не ритм, не тембр — мелодійна тема, яка повертається в кожному дропі, є носієм форми.",
            development: "Довгі білди (32–64 такти) з нашаруванням: райзер, snare roll, звуження фільтру, розширення стерео. Розвиток — це накопичення очікування, а не зміна матеріалу.",
            contrast: "Дроп (вивільнення) VS брейкдаун (скидання). Контраст максимальний — від повної щільності до мінімальної (тільки пад або мелодія). Ключова зміна на фінальному дропі підсилює контраст.",
            styleBreakers: [
              "Занадто короткий білд — ейфорія не накопичується; мінімум 32 такти на білд",
              "Дроп без мелодійного повернення — дроп має повертати тему, яку слухач вже знає",
              "Відсутність ключової зміни — останній дроп має бути сильнішим за перший",
              "Брейкдаун без простору — скидання має бути радикальним, щоб дроп відчувався свіжим"
            ]
          },

          designConstraints: {
            bpm: "134–140",
            sectionDuration: "32–64 такти для білду; 16–32 такти для дропу та брейкдауну",
            contrastLevel: "Високий (60–80%) — максимальний контраст між білдом і дропом",
            density: "Висока (6–10 елементів одночасно на дропі); низька (2–4) на брейкдауні",
            harmonicComplexity: "Середня (4–8 акордів, мажорна тональність, можлива ключова зміна)",
            energyDynamics: "Драматична: плато → довге наростання → пік (дроп) → спад (брейкдаун) → повтор"
          }
        },
        {
    id: "psytrance",
    name: "Психоделічний Транс",
    bpm: "140–150",
    structuralProfile: "Інтенсивна й гіпнотична структура; постійно рухливий, багатошаровий кік залишається незмінним, поки тисячі мікроелементів еволюціонують навколо нього. Форма циклічна, без традиційного дропу — замість нього безперервна трансформація.",
    energyProfile: "Безперервна, гіпнотична, іноді психоделічна; не клімактична у традиційному розумінні — це нескінченний підйом без спуску. Слухач занурюється і розчиняється.",
    canonicalTracks: [
      "Infected Mushroom — Converting Vegetarians (2003)",
      "Astrix — Artcore (2005)",
      "Shpongle — Divine Moments of Truth (1998)",
      "Hallucinogen — LSD (1994)",
      "Talamasca — It's Time (1999)"
    ],
    commonMistakes: [
      "Перевантажувати трек звуками — psytrance багатошаровий, але кожен шар повинен мати свою роль.",
      "Ігнорувати психоделічну функцію — форма має служити трансовому досвіду.",
      "Робити кік занадто лінійним — характерний «thumping» рух кіка є ідентичним маркером."
    ],
    distinguishingFeatures: [
      "Темп 145–148 BPM як канонічна зона жанру.",
      "«Rolling» кік-бас-лінія з характерним пульсуючим рухом.",
      "Психоделічний звуковий дизайн: глітчі, органічні шуми, мікротони.",
      "Відсутність традиційного структурного дропу — гіпнотичне плато замість кульмінації."
    ]
  },
  {
    id: "deep-dubstep",
    name: "Deep Dubstep",
    bpm: "138–142 (half-time відчуття 69–71 BPM)",
    period: "2005–2012",
    geography: "Лондон / Брістоль, Велика Британія",
    keyLabels: ["Hyperdub", "Tectonic", "Tempa", "DMZ", "Deep Medi Musik"],

    structuralProfile: "Форма базується на half-time ритмічній структурі: кік на першому біті, снайп на третьому (в стилі dub/hip-hop), що створює відчуття повільного, важкого руху. Простір між ударами — така ж частина структури, як і самі удари. Аранжування мінімальне: суббас, розріджена перкусія (часто тільки кік, снайп і хай-хет), одна текстурна петля. Форма — це еволюція простору й ваги, а не ритмічних змін. Дроп — це не вибух, а занурення: суббас «опускається» разом зі слухачем у глибину.",

    energyProfile: "Важка, задушлива, інтроспективна. Не агресивна, а атмосферна — як музика темряви й міської ночі. Слухач відчуває тиск і простір одночасно. Гучність важлива, але не менш важливий суб-тиск — вібрація, яку відчуває тіло. Енергія наростає через щільність текстури, а не через гучність.",

    historicalContext: "Deep dubstep виник як реакція на комерціалізацію дабстепу (brostep) наприкінці 2000-х. Проріс із лондонської клубної сцени, де грали даб-музику та грайм. Ключовим середовищем стали клуби FWD>> (Плондертон) і DMZ (Лондон/Брістоль). Жанр увібрав елементи дабу (реверб, простір), грайму (частоти, тембр), реггі (басова традиція) та ембієнту (атмосфера). Накладання вінілових шумів, польових записів та фрагментів вокалу створило естетику «музики дощу на бетоні».",

    productionNotes: "Sub-bass з синусоїдальних хвиль — головний елемент. Суббас часто не має гармонійних обертонів (чисті синуси), що дозволяє йому проходити крізь сабвуфери без спотворень. Перкусія з 808 та 909 драм-машин, записана з емуляції вінілу. Реверб (hall, plate, convolution) і дилей — основні просторові ефекти. Аранжування: 32-64 такти на секцію. Мінімум автотейсування — спотворення як ефект. Сатурація на майстер-шині для тепла. Мастеринг: мінімальна компресія, багато динамічного простору.",

    canonicalTracks: [
      {
        title: "Archangel",
        artist: "Burial",
        year: 2007,
        label: "Hyperdub",
        album: "Untrue",
        formNotes: "Еталон структури deep dubstep. Вокальний фрагмент як хук, half-time грув, простір між ударами як основний елемент форми. Немає дропу в традиційному сенсі — замість цього повільне наростання щільності.",
        timestamps: [
          { name: "Intro (атмосфера)", time: "0:00–0:30" },
          { name: "Біт + вокал", time: "0:31–1:00" },
          { name: "Суббас входить", time: "1:01–1:30" },
          { name: "Повна щільність", time: "1:31–2:30" },
          { name: "Розпад", time: "2:31–3:15" },
          { name: "Фінальний простір", time: "3:16–4:15" }
        ],
        analysis: { segmentation: 55, repetition: 85, contrast: 30, directionality: 60 },
        archetypeScores: { clubArcCore: 65, deepDubWeight: 95, spaceDesign: 90 },
        timeline: {
          release: 2007,
          context: "Кульмінація першої хвилі пост-дабстепу. Визначив естетику deep dubstep для наступного десятиліття."
        },
        historicalContext: "Burial випустив Untrue в розпал brostep-буму в США. Альбом став маніфестом deep dubstep: мінімалізм, простір, емоційна глибина замість агресії.",
        productionNotes: "Burial використовував SoundForge для нарізки семплів та простого гранулярного синтезу. Вокальні семпли з радіо, вініловий шум як текстура. Суббас у Archangel — чистий синус, м'яко сатурований. Грув тримається на трьох елементах: кік (808), снайп (з вінілу), вокальна фраза. Жодного компресора — уся динаміка зберігається."
      },
      {
        title: "Left Leg Out",
        artist: "Mala",
        year: 2006,
        label: "DMZ",
        album: "Left Leg Out / Bury Da Bwoy",
        formNotes: "Класичний deep dubstep від піонера жанру. Half-time ритм, глибокий суббас, мінімальна перкусія. Форма тримається на просторі: кожна пауза — структурний елемент.",
        timestamps: [
          { name: "Суббас сольно", time: "0:00–0:30" },
          { name: "Кік входить", time: "0:31–1:00" },
          { name: "Повний грув", time: "1:01–2:00" },
          { name: "Простір (break)", time: "2:01–2:30" },
          { name: "Бас повертається", time: "2:31–3:30" },
          { name: "Аутро", time: "3:31–4:45" }
        ],
        analysis: { segmentation: 65, repetition: 75, contrast: 45, directionality: 65 },
        archetypeScores: { clubArcCore: 60, deepDubWeight: 90, spaceDesign: 85 },
        timeline: {
          release: 2006,
          context: "Період формування жанру. Mala та Digital Mystikz визначили звук лондонського deep dubstep."
        },
        historicalContext: "Mala (половина Digital Mystikz) є ключовою фігурою DMZ-сцени. Left Leg Out демонструє його підхід: басова лінія як мелодія, мінімум елементів, максимум простору.",
        productionNotes: "Типовий Mala-підхід: суббас як синусоїдальна хвиля з легким фільтром низьких частот, 808-кік з довгим сустейном, снайп з ревербом hall. Жодних зайвих елементів. Аранжування дихає — паузи до 4 тактів між фразами."
      },
      {
        title: "Anti-War Dub",
        artist: "Digital Mystikz",
        year: 2005,
        label: "DMZ",
        album: "Anti-War Dub / Give Jah Glory",
        formNotes: "Гімн DMZ. Дабовий вплив: пульсуючий суббас, ехо-затримки, вокальний семпл як текстура. Немає дропу — форма через еволюцію текстури.",
        timestamps: [
          { name: "Інтро (даб-ехо)", time: "0:00–0:45" },
          { name: "Суббас + кік", time: "0:46–1:30" },
          { name: "Вокальна фраза", time: "1:31–2:15" },
          { name: "Щільність наростає", time: "2:16–3:00" },
          { name: "Розпад в ехо", time: "3:01–4:00" },
          { name: "Аутро", time: "4:01–5:15" }
        ],
        analysis: { segmentation: 60, repetition: 80, contrast: 40, directionality: 55 },
        archetypeScores: { clubArcCore: 55, deepDubWeight: 95, spaceDesign: 90 },
        timeline: {
          release: 2005,
          context: "Рання класика DMZ. Визначив зв'язок між дабом і deep dubstep."
        },
        historicalContext: "Digital Mystikz (Mala & Coki) створили Anti-War Dub для клубів DMZ у Брістолі та Лондоні. Трек став відповіддю на війну в Іраку — політичний підтекст через атмосферу та семпл.",
        productionNotes: "Типовий даб-підхід: суббас із ехо-затримкою (ping-pong delay), реверб на всю перкусію, вокальний семпл з фільтром band-pass. Компресія тільки на майстер-шині. Без sidechain — грув тримається на просторі."
      },
      {
        title: "Goat Stare",
        artist: "Loefah",
        year: 2006,
        label: "DMZ",
        album: "Goat Stare / Just A Wish",
        formNotes: "Мінімалізм у чистому вигляді. Майже нічого не відбувається — і це працює. Суббас + клапи + паузи. Форма = ритм у тиші.",
        timestamps: [
          { name: "Суббас пульс", time: "0:00–0:30" },
          { name: "Клап входить", time: "0:31–1:00" },
          { name: "Суббас зміна", time: "1:01–1:45" },
          { name: "Тиша + бас", time: "1:46–2:30" },
          { name: "Повернення", time: "2:31–3:15" },
          { name: "Розчинення", time: "3:16–4:00" }
        ],
        analysis: { segmentation: 50, repetition: 85, contrast: 30, directionality: 55 },
        archetypeScores: { clubArcCore: 45, deepDubWeight: 95, spaceDesign: 95 },
        timeline: {
          release: 2006,
          context: "Пік DMZ-естетики. Loefah довів мінімалізм до межі."
        },
        historicalContext: "Loefah — ключовий учасник DMZ, відомий своїм мінімалістичним підходом. Goat Stare демонструє екстремальний мінімалізм deep dubstep: тільки два елементи одночасно.",
        productionNotes: "Суббас — синусоїда з LFO, що повільно коливає гучність. Клап — 808 з гігантським ревербом (4+ секунди). Уся енергія — у просторі між звуками. Немає бас-барабана в традиційному сенсі — суббас виконує обидві ролі."
      },
      {
        title: "Please",
        artist: "Skream",
        year: 2005,
        label: "Tempa",
        album: "Skream!",
        formNotes: "Ранній Skream до його комерційних реміксів. Дабова атмосфера, суббас-мелодія, мінімальний біт. Форма тримається на басовій лінії.",
        timestamps: [
          { name: "Інтро (ембієнт)", time: "0:00–0:30" },
          { name: "Біт входить", time: "0:31–1:15" },
          { name: "Басова фраза", time: "1:16–2:00" },
          { name: "Вокальний семпл", time: "2:01–2:45" },
          { name: "Брейкдаун", time: "2:46–3:30" },
          { name: "Аутро", time: "3:31–4:30" }
        ],
        analysis: { segmentation: 60, repetition: 75, contrast: 45, directionality: 65 },
        archetypeScores: { clubArcCore: 65, deepDubWeight: 85, spaceDesign: 80 },
        timeline: {
          release: 2005,
          context: "Скрім — один із «Original Three» (Burial, Kode9, Skream). Його дебютний альбом визначив звук раннього deep dubstep."
        },
        historicalContext: "Skream — один із найвпливовіших продюсерів раннього дабстепу. Please з його дебютного альбому показує deep dubstep у перехідній фазі: від дабу до клубної форми.",
        productionNotes: "Суббас — FM-синтез (легка частотна модуляція для додавання багатства тембру). Перкусія — петлі з SP-303. Вокальний семпл пропущений через band-reject фільтр. Реверб — поєднання early reflections та hall."
      },
      {
        title: "Midnight Request Line",
        artist: "Skream",
        year: 2005,
        label: "Tempa",
        album: "Midnight Request Line / I",
        formNotes: "Канонічний deep dubstep хук. Головна басова лінія — один з найвпізнаваніших рифів жанру. Half-time грув із сильним дабовим простором.",
        timestamps: [
          { name: "Басова лінія", time: "0:00–0:30" },
          { name: "Кік входить", time: "0:31–0:45" },
          { name: "Повний грув", time: "0:46–1:30" },
          { name: "Брейк (тиша)", time: "1:31–2:00" },
          { name: "Бас повертається", time: "2:01–2:45" },
          { name: "Розпад", time: "2:46–3:30" },
          { name: "Аутро", time: "3:31–4:00" }
        ],
        analysis: { segmentation: 70, repetition: 80, contrast: 55, directionality: 70 },
        archetypeScores: { clubArcCore: 70, deepDubWeight: 90, spaceDesign: 80 },
        timeline: {
          release: 2005,
          context: "Один із найважливіших треків дабстепу. Популяризував жанр за межами андеграунду."
        },
        historicalContext: "Midnight Request Line став першим дабстеп-треком, який отримав широку радіо-ротацію (BBC Radio 1, Mary Anne Hobbs). Довів, що deep dubstep може бути доступним без втрати глибини.",
        productionNotes: "Басова лінія — синтезована з кількох синусоїдальних шарів (суб + середній регістр). Бочка — 808 з компресією для атаки. Снайп — записаний з вінілу з ревербом. Структура: 16 тактів на секцію."
      },
      {
        title: "Switches",
        artist: "Kode9",
        year: 2006,
        label: "Hyperdub",
        album: "Memories of the Future",
        formNotes: "Kode9 привніс теоретичний та культурологічний підхід. Експериментальна структура з елементами грайму.",
        timestamps: [
          { name: "Інтро (шум)", time: "0:00–0:25" },
          { name: "Біт входить", time: "0:26–1:00" },
          { name: "Басова фраза", time: "1:01–2:00" },
          { name: "Вокальний фрагмент", time: "2:01–2:30" },
          { name: "Брейк (текстура)", time: "2:31–3:00" },
          { name: "Грув повертається", time: "3:01–3:45" },
          { name: "Аутро", time: "3:46–4:45" }
        ],
        analysis: { segmentation: 65, repetition: 65, contrast: 60, directionality: 60 },
        archetypeScores: { clubArcCore: 60, deepDubWeight: 85, spaceDesign: 85 },
        timeline: {
          release: 2006,
          context: "Перша хвиля Hyperdub. Kode9 (Стівен Ґудмен) поєднав академічну теорію з клубним звуком."
        },
        historicalContext: "Kode9 — засновник Hyperdub Records, автор книги Sonic Warfare. Його музика поєднує звуковий дизайн із культурною критикою. Switches демонструє його експериментальний підхід до deep dubstep.",
        productionNotes: "Агресивніше експериментування зі звуком: гранулярний синтез, частотна модуляція, нелінійний реверб. Бас — поєднання синуса та FM. Структура менш передбачувана, ніж у традиційного deep dubstep."
      },
      {
        title: "Night Dub",
        artist: "Pinch",
        year: 2006,
        label: "Tectonic",
        album: "Night Dub / Qawwali",
        formNotes: "Pinch — засновник Tectonic Records. Дабова естетика з сильним клубним відчуттям. Форма через простір та ехо-затримки.",
        timestamps: [
          { name: "Інтро (ехо)", time: "0:00–0:30" },
          { name: "Суббас + кік", time: "0:31–1:15" },
          { name: "Снайп + хай-хет", time: "1:16–2:00" },
          { name: "Фільтрація", time: "2:01–2:30" },
          { name: "Даб-ефект", time: "2:31–3:15" },
          { name: "Розпад", time: "3:16–4:30" }
        ],
        analysis: { segmentation: 65, repetition: 70, contrast: 55, directionality: 65 },
        archetypeScores: { clubArcCore: 70, deepDubWeight: 90, spaceDesign: 85 },
        timeline: {
          release: 2006,
          context: "Розширення deep dubstep за межі DMZ/Hyperdub. Tectonic став другим важливим лейблом."
        },
        historicalContext: "Pinch — ключова фігура брістольської дабстеп-сцени. Його лейбл Tectonic випускав суміш deep dubstep, дабу та грайму.",
        productionNotes: "Дабовий підхід: суббас з автопаном (autopan на LFO), ехо-затримка з фільтром, реверб spring. Кік 909 з довгим сустейном. Перкусія мінімальна — тільки необхідне."
      },
      {
        title: "Tribal DUB (2021 Remaster)",
        artist: "Coki",
        year: 2006,
        label: "DMZ",
        album: "Marduk / Tribal DUB",
        formNotes: "Кокі (Digital Mystikz) привніс більш агресивний суббас. Трек демонструє спектр deep dubstep: від мінімального до імпульсивного.",
        timestamps: [
          { name: "Інтро", time: "0:00–0:30" },
          { name: "Суббас вхід", time: "0:31–1:00" },
          { name: "Біт + бас", time: "1:01–1:45" },
          { name: "Брейк (суб)", time: "1:46–2:15" },
          { name: "Повернення", time: "2:16–3:00" },
          { name: "Фінал", time: "3:01–3:45" }
        ],
        analysis: { segmentation: 55, repetition: 75, contrast: 50, directionality: 60 },
        archetypeScores: { clubArcCore: 65, deepDubWeight: 90, spaceDesign: 80 },
        timeline: {
          release: 2006,
          context: "DMZ-реліз, що показує жорсткішу сторону deep dubstep."
        },
        historicalContext: "Coki — друга половина Digital Mystikz, відоміший за агресивніший саб-бас, ніж Mala. Tribal DUB показує, що deep dubstep може бути як медитативним, так і імпульсивним.",
        productionNotes: "Суббас із формою хвилі, ближчою до квадратної (більше гармонійних обертонів). Кік — 808 із коротшим сустейном. Даб-ефекти — spring reverb та tape delay. Атака баса різкіша, ніж у Mala."
      },
      {
        title: "Skeng",
        artist: "The Bug (feat. Killa P & Flowdan)",
        year: 2008,
        label: "Hyperdub",
        album: "London Zoo",
        formNotes: "Deep dubstep на перетині з граймом. Щільніший, агресивніший, але зберігає простір і басовий тиск. Вокал MC як текстурний елемент.",
        timestamps: [
          { name: "Інтро (грайм)", time: "0:00–0:15" },
          { name: "Біт + вокал", time: "0:16–1:00" },
          { name: "Суббас + грув", time: "1:01–1:45" },
          { name: "Брейк (вокал)", time: "1:46–2:15" },
          { name: "Дроп (вага)", time: "2:16–2:45" },
          { name: "Аутро", time: "2:46–3:30" }
        ],
        analysis: { segmentation: 75, repetition: 65, contrast: 75, directionality: 70 },
        archetypeScores: { clubArcCore: 75, deepDubWeight: 85, spaceDesign: 75 },
        timeline: {
          release: 2008,
          context: "Злиття deep dubstep з грайм-вокалом. Hyperdub на піку впливу."
        },
        historicalContext: "The Bug (Кевін Мартін) — продюсер, що працює на перетині дабу, дабстепу та грайму. London Zoo — альбом, що об'єднав deep dubstep з денсхоллом і граймом.",
        productionNotes: "Суббас — аналоговий синтез (Moog-стиль). Кік — 808 з сатурацією ремблера. Вокал/семпл пропущений через band-pass фільтр. Компресія агресивніша, ніж у чистого deep dubstep."
      },
      {
        title: "Hyperdub",
        artist: "Burial & Four Tet",
        year: 2008,
        label: "Domino",
        album: "Moth / Wolf Cub",
        formNotes: "Співпраця Burial та Four Tet. Розширення палітри deep dubstep: живі інструменти зустрічають цифровий мінімалізм.",
        timestamps: [
          { name: "Атмосфера", time: "0:00–0:30" },
          { name: "Біт + текстура", time: "0:31–1:30" },
          { name: "Суббас + мелодія", time: "1:31–2:30" },
          { name: "Брейк (простір)", time: "2:31–3:00" },
          { name: "Повернення", time: "3:01–4:00" },
          { name: "Аутро", time: "4:01–5:15" }
        ],
        analysis: { segmentation: 70, repetition: 70, contrast: 55, directionality: 65 },
        archetypeScores: { clubArcCore: 65, deepDubWeight: 85, spaceDesign: 90 },
        timeline: {
          release: 2008,
          context: "Deep dubstep виходить за межі сцени: співпраця з інді-продюсерами."
        },
        historicalContext: "Four Tet (Кіран Гебден) привніс живу перкусію та семпли акустичних інструментів. Співпраця показала, що deep dubstep може інтегруватися в ширший музичний контекст.",
        productionNotes: "Burial — SoundForge, вінілові семпли, гранулярна нарізка. Four Tet — живі записи, мікрофони, терен. Реверб — convolution (кафедральний собор). Суббас — синус із нашаруванням гармонійних обертонів."
      },
      {
        title: "The Knowledge",
        artist: "Vex'd",
        year: 2005,
        label: "Planet Mu",
        album: "Degenerate",
        formNotes: "Vex'd — темніша, індустріальніша сторона deep dubstep. Форма через шумову текстуру та індустріальну атмосферу.",
        timestamps: [
          { name: "Інтро (індустрія)", time: "0:00–0:30" },
          { name: "Біт + шум", time: "0:31–1:15" },
          { name: "Суббас входить", time: "1:16–2:00" },
          { name: "Брейк (текстура)", time: "2:01–2:30" },
          { name: "Повернення", time: "2:31–3:30" },
          { name: "Розпад", time: "3:31–4:30" }
        ],
        analysis: { segmentation: 65, repetition: 70, contrast: 60, directionality: 60 },
        archetypeScores: { clubArcCore: 60, deepDubWeight: 85, spaceDesign: 80 },
        timeline: {
          release: 2005,
          context: "Ранній deep dubstep на Planet Mu — більш експериментальне крило жанру."
        },
        historicalContext: "Vex'd — дует із Лондона (Roly Porter та Jamie Teasdale), що поєднував deep dubstep з індустріальною та індастріал-техно естетикою.",
        productionNotes: "Шумові текстури замість традиційних семплів. Суббас — поєднання синуса з шумовим шаром. Кік оброблений distortion. Реверб — metal hall. Мікс темніший, густіший, ніж у DMZ-стилю."
      }
    ],

    productionTradition: {
      philosophy: "Глибокий дабстеп виріс із південного Лондона середини 2000-х (DMZ, Tempa, Mala, Loefah, Skream) на фундаменті ямайської саундсистемної культури. Філософія: вага важливіша за гучність. Суббас, який відчувається тілом, простір, який можна почути, і тиша, яка має сенс. Half-time ритм (140 BPM, що звучить як 70) дає простір диханню — між ударами кіка й снайпа лишається порожнеча, у якій живе реверб. Це медитація на басі: замість того щоб атакувати слухача енергією, deep dubstep занурює його в глибину. Кульмінація — не вибух, а повернення суббасу після паузи.",

      coreTechniques: [
      {
        name: "Суббас як мелодія",
        description: "Суббас у deep dubstep виконує не тільки ритмічну, але й мелодичну функцію. Чистий синусоїдальний тон (суб) рухається по висоті, створюючи басову лінію, яка є головною темою треку.",
        whyItWorks: "Суб-частоти (30–60 Гц) сприймаються тілесно, а не тільки слухово. Коли суббас рухається мелодично, слухач відчуває мелодію фізично, як вібрацію в грудях.",
        dawTranslation: {
          ableton: "Оператор (Operator): синусоїдальний генератор, частота 40–80 Гц. Налаштуй ADSR: атака 0ms, сустейн тривалий (3–8 сек). Auto-Filter: low-pass ~120 Гц, резонанс 15–30%. Суббас як окремий трек: без ревербу, без дилею, тільки синус.",
          flStudio: "3x Osc: звук #1 синус, відключи звуки #2 та #3. Piano Roll для басової лінії. Fruity WaveShaper: легка сатурація (10–20%). Fruity Parametric EQ2: low-pass ~100 Гц. Виведи суббас на окремий канал — без ефектів.",
          logic: "ES2: синусоїдальна хвиля (waveform = sine). Cutoff ~80–100 Гц. Channel EQ: low-pass. Атака 0ms, реліз 4+ секунд. Виведи на окремий Aux без ревербу/дилею. Додай SubBass — Logic Pro X має вбудований SubBass трек."
        }
      },
      {
        name: "Half-time драм-програмування",
        description: "Кік на першому біті, снайп на третьому (або на третій долі), хай-хет — звичайний або half-time. Відчуття 70 BPM при темпі 140 BPM.",
        whyItWorks: "Half-time створює «важке» відчуття простору між ударами. Тіло рухається повільніше, кожен удар відчувається як подія.",
        dawTranslation: {
          ableton: "Сітка (grid): 16-та нота. Кік на 1.1.1, снайп на 1.3.1. Хай-хет: закритий на кожну 8-ту (1.1.1, 1.1.3, 1.2.1, ...). Відкритий хай-хет: 1.4.1. Темп 140 BPM — відчуття 70 BPM. Драм-машина: Impulse або Drum Rack зі звуками 808/909.",
              flStudio: "Step Sequencer: кік на 1 та 5 (з 12). Снайп на 3 та 7 (можна тільки на 3). Хай-хет на всіх 8-х. Channel Rack → кік (808), снайп (вініл), хай-хет (909). Swing: 35–55% для «гойдалки». Темп 140.",
          logic: "Drummer → стиль Dubstep/DnB, ручне редагування. Кік (Ultrabeat: 808 kick) на 1 та 3 снайп на 2 та 4 (або тільки 3). Хай-хет — 8-мі ноги (16-ті для руху). Грув у Piano Roll з гуманізацією 5–10% (velocity та timing)."
        }
      },
      {
        name: "Реверб-простір та даб-ефекти",
        description: "Великі зали (hall reverb), spring reverb, delay (ping-pong, tape), ехо з фільтрацією. Простір — такий самий інструмент, як і бас.",
        whyItWorks: "Deep dubstep звучить у клубах із системою, яка відтворює глибокий бас. Реверб і дилей заповнюють високі частоти, яких мало в чистому суббасі, створюючи ілюзію повної частотної картини.",
        dawTranslation: {
          ableton: "Ableton Reverb: Hall, Decay 5–10s, Diffusion 80%, Size 100%. Ping Pong Delay: 1/4D, Feedback 30–50%, Filter (low-cut 300Hz). Auto Pan — повільно панорамує семпли. Return траки: Reverb (send 30–50%), Delay (send 20–40%).",
              flStudio: "Fruity Reverb 2: Hall, Size 80%, Decay 8–10s, Damp 50%. Fruity Delay 3: Ping-pong, Time 1/4D, Feedback 30%, Filter (LP 5kHz). Send траки: Reverb (dry/wet 100% return, send 30–50%), Delay (dry/wet 100% return).",
          logic: "ChromaVerb: Hall, Size 90%, Decay 10s, Diffusion 80%. Tape Delay: 1/4D, Feedback 35%, Low Cut 200Hz. Space Designer (convolution): Cathedral IR, Decay 6–12s. Aux траки: Reverb (send 20–60%), Delay (send 20–50%)."
        }
      },
      {
        name: "Розріджене аранжування з паузами",
        description: "Мінімум елементів одночасно. Паузи 2–8 тактів, де тільки реверб/дилей несуть звук. Форма будується на додаванні/видаленні шарів.",
        whyItWorks: "Людський слух втомлюється від постійної стимуляції. Deep dubstep використовує паузи як «скидання» уваги — кожне повернення елемента відчувається свіжим.",
        dawTranslation: {
          ableton: "Маскування міді-кліпів (clip mute automation). Тільки 2–3 активні треки одночасно. Структура: 16 тактів суббас → 8 тактів тиша (тільки реверб) → 16 тактів бас + кік. Використовуй Session View для тестування активної/неактивної комбінації.",
              flStudio: "Playlist: маскування каналів (mute/unmute) для візуального планування пауз. Патерни завдовжки 8–16 тактів, зміна кожні 16 тактів. Автоматизація гучності: довгі fade in (4 такти) при поверненні елементів.",
          logic: "Track Automation: Volume/Mute. Layout у Tracks Area: плануй 8–16-тактові секції. Структура: A (тільки суб) 16т → B (пауза) 8т → A' (суб + кік) 16т → C (тільки реверб) 8т → A'' (повна текстура) 16т."
        }
      },
      {
        name: "Атмосферні семпли та фактура темряви",
        description: "Польові записи, вінілові шуми, фрагменти радіопередач, вокальні шепоти — все пропущене через фільтри та реверб для створення темної, міської атмосфери.",
        whyItWorks: "Людський мозок шукає знайоме в шумах. Коли слухач чує дощ, вітер, голос або клацання вінілу, він створює візуальну/емоційну картину. Це робить deep dubstep кінематографічним.",
        dawTranslation: {
          ableton: "Семпли польових записів (Freesound/BBC Sound Effects). Текстурний трек: Simpler, Grain Delay (співвідношення 50–70%), Auto Filter (low-pass 500Hz–2kHz). Вініловий шум: vinyl crackle семпл, Reverb (hall), низька гучність (-15dB до -20dB від міксу).",
              flStudio: "Fruity Granulizer: польовий запис, Grain size 50–200ms, Density 30–50%. Пад-трек: 3xOsc або Sytrus зі складними хвилями, реверб, дилей. Вініл: відкрий семпл vinyl crackle в Channel Rack, низька гучність, LP фільтр.",
          logic: "Alchemy: import audio семпл, Grain mode. Space Designer: будь-який семпл через довгий Hall IR. Quick Sampler: польові записи, transpose -12/-24 октави як пад. Вініл: семпл crackle на окремому треку, Channel EQ (high cut 8kHz), низька гучність."
        }
      }
    ],

    listeningPathway: [
      "1️⃣ «Archangel» (Burial, 2007) — Послухай уважно перші 30 секунд. Чи чуєш вокальний фрагмент? Як багато простору між звуками? Зверни увагу: кік і снайп розділені чотирма бітами тиші.",
      "2️⃣ «Left Leg Out» (Mala, 2006) — Порівняй із Burial. Скільки елементів звучить одночасно? Спробуй порахувати: кік, снайп, суббас, чи є щось ще? Як саб-бас «співає» мелодію?",
      "3️⃣ «Goat Stare» (Loefah, 2006) — Цей трек є екстремальним прикладом мінімалізму. Скільки секунд проходить між першим і другим ударом клапа? Як реверб заповнює простір? Чи відчуваєш незручність від пустоти?",
      "4️⃣ «Midnight Request Line» (Skream, 2005) — Тепер послухай трек, де бас є очевидним хуком. Як Skream використовує повторення басової лінії? На якому повторенні вона стає звичною? На якому — бажаною?",
      "5️⃣ «Anti-War Dub» (Digital Mystikz, 2005) — Послухай як даб-ефекти (реверб, дилей) стають частиною аранжування. Як ехо «живе» після того, як звук закінчився? Чи можна почути звук, який існує тільки в ревербі?",
      "6️⃣ «Night Dub» (Pinch, 2006) — Зверни увагу на переходи між секціями. Як Pinch сигналізує про зміну? Через фільтрацію? Тишу? Новий елемент? Як довго триває кожна секція?",
      "7️⃣ Підсумок — Повернися до «Archangel». Чи чуєш тепер структуру інакше? Спробуй намалювати форму треку: лінія часу з позначками подій (вхід біту, зміна басу, пауза, повернення). Який профіль має deep dubstep порівняно з club-arc?"
      ]
    },

    commonMistakes: [
      "Забувати про простір: deep dubstep «дихає» паузами, а не заповнює їх. Новачки часто намагаються заповнити кожну чверть звуком.",
      "Робити суббас занадто «чистим» — характерний «брудний» суббас з легкою сатурацією є ідентичним маркером жанру.",
      "Плутати з бростепом: deep dubstep — це атмосфера, а не агресія. Якщо в дропі більше енергії, ніж у білді — це не deep dubstep.",
      "Ігнорувати роль вінілових шумів і текстур — саме вони створюють «кінематографічність» deep dubstep.",
      "Перевантажувати мід-частоти: deep dubstep — це суб і простір. Мід-частоти мають бути мінімальними (тільки реверб/дилей)."
    ],

    distinguishingFeatures: [
      "Half-time ритмічна структура — кік на першому біті, снайп на третьому, що дає відчуття 70 BPM при темпі 140 BPM.",
      "Чистий синусоїдальний суббас (30–80 Гц) як головний мелодичний і ритмічний елемент.",
      "Мінімальне аранжування — 2–3 елементи одночасно, довгі паузи (4–8 тактів), простір як інструмент.",
      "Темп 138–142 BPM як half-time еквівалент 69–71 BPM.",
      "Дабові ефекти (long reverb, ping-pong delay, spring reverb) як структурні елементи, а не прикраси.",
      "Атмосферні семпли (дощ, радіо, вініл, голоси) як текстура глибини.",
      "Просторове мікшування: суб-бас по центру, реверб і дилей у стерео-полях, перкусія з мінімальною стерео-шириною."
          ],

          compositionDecisions: {
            formBearer: "Суббас (30–80 Гц) та простір між ударами. Не мелодія, не ритм як такий — басова лінія, яка «співає» на суб-частотах, і тиша між ударами є носіями форми.",
            development: "Повільна мутація басової лінії (LFO модуляція, зміна висоти) та еволюція простору (збільшення/зменшення реверберації). Розвиток — це зміна «ваги» звуку, а не додавання матеріалу.",
            contrast: "Зміна щільності текстури: від 2–3 елементів до повної тиші (тільки реверб/дилей). Контраст — це не поява нового, а зникнення майже всього. Повернення басу після паузи — головна подія.",
            styleBreakers: [
              "Дроп у стилі brostep — deep dubstep не має вибухових дропів; кульмінація — глибина, не гучність",
              "Заповнення кожної паузи — простір є інструментом; слухач має чути тишу",
              "Мелодійний хук у мід-регістрі — бас і текстура замінюють мелодію",
              "Швидкі зміни — глибокі зміни кожні 16–32 такти; форма дихає повільно"
            ]
          },

          designConstraints: {
            bpm: "138–142 (half-time відчуття 69–71 BPM)",
            sectionDuration: "16–32 такти (30–60 с); паузи 4–8 тактів",
            contrastLevel: "Низький–Середній (20–40%). Контраст — через простір і зникнення, не через появу",
            density: "Низька (2–4 елементи одночасно; часто тільки суб + один перкусійний елемент)",
            harmonicComplexity: "Мінімальна (1–3 ноти, без акордів; басова лінія як мелодія)",
            energyDynamics: "Рівна, гіпнотична — енергія не піднімається і не падає; вона розширюється всередину, у глибину простору"
          },

          glossary: [
      { term: "Half-time", definition: "Ритмічна структура, де кік і снайп розташовані на вдвічі меншій кількості бітів, ніж очікується при цьому темпі. 140 BPM звучить як 70 BPM." },
      { term: "Суббас (Sub-bass)", definition: "Чистий синусоїдальний звук у діапазоні 30–80 Гц, який відчувається тілом, а не вухом. Головний елемент deep dubstep." },
      { term: "Даб (Dub)", definition: "Ямайська техніка обробки звуку — реверб, дилей, ехо, фільтрація. Ключовий вплив на deep dubstep." },
      { term: "DMZ", definition: "Культовий клуб (Лондон/Брістоль) та лейбл, що визначив звук deep dubstep. Mala, Loefah, Coki — резиденти." },
      { term: "Вага (Weight)", definition: "Deep dubstep термін для опису суб-тиску — фізичного відчуття басу в тілі. Коли трек «важкий», він тисне, але не обов'язково гучний." }
    ],

    teacherNotes: [
      "Deep dubstep — чудовий інструмент для навчання студентів важливості простору та пауз. 90% студентів спочатку намагаються заповнити звуком кожен біт. Покажіть Goat Stare (Loefah).",
      "Аналогія: deep dubstep — це архітектура. Не кожен елемент матеріал — порожній простір (повітря, скло, бетонні проміжки) є таким самим елементом дизайну.",
      "Покажіть спектрограмму Archangel або Goat Stare. Суббас + простір — це графік, де є тільки низ і тиша.",
      "Deep dubstep також навчає важливості правильного моніторингу — без сабвуфера студент не почує, що відбувається в треку.",
      "Найважливіший урок: енергія не дорівнює гучності. Deep dubstep доводить, що тиша може бути напруженішою за звук."
    ]
  },
  {
    id: "brostep",
    name: "Бростеп",
    bpm: "140–150",
    structuralProfile: "Максимально агресивна й передбачувана форма; будова коротка і потужна — типовий трек: інтро, вокальна фраза, половинний такт (half-bar Build), масивний дроп. Структура орієнтована на максимальний удар.",
    energyProfile: "Вибухова й фізична; дроп розрахований на негайну реакцію тіла. Жанр не будує емоційну дугу — він б'є в обличчя з першої секунди.",
    canonicalTracks: [
      "Skrillex — Scary Monsters And Nice Sprites (2010)",
      "Excision — X Rated (2011)",
      "Datsik — Nuke Em (2011)",
      "Flux Pavilion — I Can't Stop (2011)",
      "Knife Party — Internet Friends (2012)"
    ],
    commonMistakes: [
      "Занадто слабкий вустур (wobble) — саме він є серцем drop'у в бростепі.",
      "Надмірна схожість дропів між собою — жанр живе варіативністю всередині агресії.",
      "Ігнорувати якість мікса — гучність не замінює глибину."
    ],
    distinguishingFeatures: [
      "Масивний wobble-бас як головний елемент дропу.",
      "Half-time ритмічна структура з агресивно синкопованим кіком.",
      "Коротка, але потужна будова — від 0 до дропу за 64 такти.",
      "Дизайн звуку орієнтований на шок і фізичну реакцію."
    ]
  },
  {
    id: "liquid-dnb",
    name: "Liquid Drum and Bass",
    bpm: "170–180",
    structuralProfile: "Хвиляста, плавна форма; незважаючи на екстремальний темп, треки мають мелодичну і майже поп-пісенну структуру з хором і куплетами. Барабанний малюнок складний, але «лунає» — не агресивний.",
    energyProfile: "Піднімаюча, але не агресивна; поєднує швидкість D&B з емоційністю соул і джазу. Слухач рухається й при цьому відчуває тепло.",
    canonicalTracks: [
      "LTJ Bukem — Horizons (1995)",
      "Goldie — Inner City Life (1995)",
      "High Contrast — Return of Forever (2002)",
      "Calibre — Shelflife (2008)",
      "Nu:Tone — Don't Give Up (2007)"
    ],
    commonMistakes: [
      "Занадто складний барабанний малюнок, що перекриває мелодію — у liquid D&B маршрут і мелодія рівні.",
      "Слабкий суббас: навіть у «м'якому» варіанті D&B суббас є фундаментом.",
      "Відсутність емоційного розвитку — трек має розповідати історію, а не просто рухатися."
    ],
    distinguishingFeatures: [
      "«Рухомий» Амена або amen-деривативний барабанний малюнок на 170+ BPM.",
      "Мелодичний subbass, що «співає» разом із лід-інструментом.",
      "Соул, джаз і фанк-впливи у гармонії та вокалі.",
      "Теплий, органічний мікс попри екстремальний темп."
    ]
  },
  {
    id: "neurofunk",
    name: "Нейрофанк",
    bpm: "172–180",
    period: "2002–2015",
    geography: "Велика Британія / Нідерланди",
    keyLabels: ["Vision Recordings", "Subtitles Music", "RAM Records", "Hospital Records", "Renegade Hardware"],

    structuralProfile: "Нейрофанк — найбільш технічно складна підгрупа Drum and Bass. Форма базується на трьох стовпах: (1) Reese-бас, який постійно мутує через LFO та багатосмугову обробку; (2) double-time барабанні петлі (170–180 BPM) зі складними синкопами; (3) агресивний міксдаун із максимальною компресією. Клубна дуга зберігається: інтро → білд → дроп → брейкдаун → другий дроп, але кожна секція має нову басову текстуру. Дроп — це момент, коли Reese-бас «відкривається» на повну. Форма лінійна: мутація басу визначає прогресію треку.",

    energyProfile: "Інтелектуально насичена й атмосферно темна. Не ейфорична (як uplifting trance), а кінетична — слухач відчуває технологічну складність як форму краси. Енергія імпульсивна: кожен новий ритмічний патерн або басова мутація — мікро-подія. Слухачі часто описують нейрофанк як «інтелектуальний Drum and Bass» — це музика, яка потребує уваги до деталей.",

    historicalContext: "Нейрофанк виник на початку 2000-х як реакція на мелодійніший (liquid) та мінімалістичніший D&B. Ключові продюсери: Ed Rush & Optical (альбом «Wormhole», 1998 — заклав основи Reese-басу), Noisia (Нідерланди, 2003+ — довели звуковий дизайн до досконалості), Black Sun Empire (Голландія, темний, кінематографічний D&B). Жанр розвивався паралельно в Нідерландах (Noisia, Black Sun Empire, Phace, Misanthrop) та Великій Британії (Teebee, Calyx, Ed Rush & Optical, Bad Company). Лейбли: Vision (Noisia), Subtitles (Teebee), RAM, Hospital. 2010-ті — пік популярності з мейнстримними релізами на Vision та RAM.",

    productionNotes: "Reese-бас: два детюновані осцилятори (зазвичай пилкоподібна хвиля) з фільтром low-pass, який модулюється LFO. Neuro-бас: багатосмуговий процесинг — низькі частоти (суб) залишаються стабільними, середні мутуть, високі оброблені distortion. Барабани: amen break або аналогічні джунгль-брейки нарізані на мікро-семпли та перепрограмовані. Компресія: heavy sidechain (бас-барабан компресує бас/інші елементи), multiband компресія на міксі. Міксдаун: агресивний, максимальна гучність без кліпування.",

    canonicalTracks: [
      {
        title: "Stigma",
        artist: "Noisia",
        year: 2008,
        label: "Vision",
        album: "Split the Atom",
        formNotes: "Еталон нейрофанку. Double-time драмс (174 BPM), складний Reese-бас, агресивний sidechain. Форма: атмосфера → драмс → білд → дроп з нейро-басом → брейкдаун → другий дроп.",
        timestamps: [
          { name: "Атмосфера", time: "0:00–0:15" },
          { name: "Драмс входять (D&B)", time: "0:16–0:45" },
          { name: "Білд (fade up)", time: "0:46–1:00" },
          { name: "Дроп (нейро-бас)", time: "1:01–1:45" },
          { name: "Брейкдаун (текстура)", time: "1:46–2:15" },
          { name: "Білд 2", time: "2:16–2:30" },
          { name: "Дроп 2 (варіація)", time: "2:31–3:15" },
          { name: "Аутро", time: "3:16–3:45" }
        ],
        analysis: { segmentation: 85, repetition: 60, contrast: 85, directionality: 80 },
        archetypeScores: { clubArcCore: 80, neuroBassComplexity: 95, drumProgramming: 90, mixdownIntensity: 90 },
        timeline: {
          release: 2008,
          context: "Пік першої хвилі Vision Recordings. Stigma — один із найвпізнаваніших нейрофанк-треків."
        },
        historicalContext: "Noisia (Нік, Мартен, Тейс — з Гронінгена, Нідерланди) стали головним голосом нейрофанку в 2000-х. Stigma з альбому Split the Atom демонструє їхній фірмовий звуковий дизайн: складний бас, ідеальна ритміка, агресивний мікс.",
        productionNotes: "Reese-бас: два пилкоподібні осцилятори з детюнінгом ~10 центів, low-pass фільтр ~200-400 Гц, LFO модулює cutoff на 1/8 такту. Середні частоти (400–2k Гц) — distortion (Decapitator або аналог). Високі — гармонійний ексайтер. Барабани: прямий amen-брейк, нарізаний на окремі удари, перепрограмований. Sidechain: kick компресує бас (ratio 8:1, attack 0.5ms, release ~100ms). Мікс: multiband компресія на майстер-шині (Manny's Multiband або Ozone)."
      },
      {
        title: "Machine Gun",
        artist: "Noisia",
        year: 2009,
        label: "Vision",
        album: "Machine Gun (Single)",
        formNotes: "Найкомерційніший трек Noisia. Reese-бас як зброя — агресивний, мутуючий, з різкими змінами тембру.",
        timestamps: [
          { name: "Інтро (шум)", time: "0:00–0:15" },
          { name: "Сухий кік", time: "0:16–0:30" },
          { name: "Бас входить", time: "0:31–0:45" },
          { name: "Повний дроп", time: "0:46–1:30" },
          { name: "Брейк (текстура)", time: "1:31–2:00" },
          { name: "Білд 2", time: "2:01–2:15" },
          { name: "Дроп 2", time: "2:16–3:00" },
          { name: "Аутро", time: "3:01–3:30" }
        ],
        analysis: { segmentation: 80, repetition: 65, contrast: 80, directionality: 80 },
        archetypeScores: { clubArcCore: 85, neuroBassComplexity: 90, drumProgramming: 85, mixdownIntensity: 95 },
        timeline: {
          release: 2009,
          context: "Мейнстримний прорив Noisia. Трек потрапив до реклами, ігор, фільмів."
        },
        historicalContext: "Machine Gun став одним із найвідоміших D&B-треків за межами сцени. Noisia довели, що нейрофанк може бути комерційно успішним без компромісів у звуковому дизайні.",
        productionNotes: "Бас — FM-синтез (частотна модуляція замість детюнінгу). Осцилятори модулюють один одного, створюючи металевий, агресивний тембр. Distortion — CamelPhat або Trash 2. Kick — 808 з гігантською атакою. Master chain: Ozone Multiband + Limiter. Гучність: -6dB до кліпу."
      },
      {
        title: "Bacteria",
        artist: "Ed Rush & Optical",
        year: 1998,
        label: "Virus Recordings",
        album: "Wormhole",
        formNotes: "Прабатько нейрофанку. Reese-бас у формі, яка стала шаблоном для всього жанру. 172 BPM, мінімалістична структура, але революційний бас.",
        timestamps: [
          { name: "Інтро (Reese)", time: "0:00–0:30" },
          { name: "Драмс входять", time: "0:31–1:00" },
          { name: "Повний грув", time: "1:01–1:45" },
          { name: "Брейкдаун", time: "1:46–2:15" },
          { name: "Повернення", time: "2:16–3:00" },
          { name: "Аутро", time: "3:01–4:00" }
        ],
        analysis: { segmentation: 70, repetition: 75, contrast: 65, directionality: 70 },
        archetypeScores: { clubArcCore: 70, neuroBassComplexity: 80, drumProgramming: 75, mixdownIntensity: 75 },
        timeline: {
          release: 1998,
          context: "Wormhole — альбом, що визначив звук нейрофанку на десятиліття."
        },
        historicalContext: "Ed Rush & Optical випустили Wormhole у 1998 році. Альбом став маніфестом «технічного» D&B: складні басові лінії, темна атмосфера, інтелектуальний звуковий дизайн. Bacteria — квінтесенція цього підходу.",
        productionNotes: "Reese-бас: класичний — два аналогові синтезатори (Roland Juno-106 або аналог) з детюнінгом ~7 центів. Low-pass фільтр на cutoff ~300Гц. LFO (1/4 ноти) модулює cutoff + резонанс. Барабани: amen break, оброблений через аналоговий компресор (Empirical Labs Distressor). Без sidechain — компресія групова."
      },
      {
        title: "To Shape The Future",
        artist: "Optical",
        year: 1998,
        label: "Virus Recordings",
        album: "To Shape The Future / The Shining",
        formNotes: "Ранній нейрофанк з експериментальним Reese-басом. Форма мінімальна: бас + драмс + атмосфера. Немає дропу — замість цього бас мутує через фільтрацію.",
        timestamps: [
          { name: "Reese-бас", time: "0:00–0:30" },
          { name: "Барабани входять", time: "0:31–1:00" },
          { name: "Фільтрація басу", time: "1:01–1:45" },
          { name: "Брейк (тільки бас)", time: "1:46–2:15" },
          { name: "Повернення драмс", time: "2:16–3:00" },
          { name: "Аутро", time: "3:01–3:45" }
        ],
        analysis: { segmentation: 60, repetition: 75, contrast: 55, directionality: 60 },
        archetypeScores: { clubArcCore: 65, neuroBassComplexity: 85, drumProgramming: 70, mixdownIntensity: 70 },
        timeline: {
          release: 1998,
          context: "Період формування. Optical визначає звук Virus Recordings."
        },
        historicalContext: "Optical — один із засновників нейрофанку. Його треки з кінця 1990-х заклали базу для звукового дизайну Reese-басу, який розвинули Noisia та інші в 2000-х.",
        productionNotes: "Reese-бас з різкими фільтрованими змінами. Cutoff та Resonance фільтра автоматизовані. Без sidechain — бас і кік працюють у природному співвідношенні. Кік — 909 з доданим суб-шаром."
      },
      {
        title: "The Nine",
        artist: "Bad Company UK",
        year: 1998,
        label: "BC Recordings",
        album: "The Nine / The Code",
        formNotes: "Класика темного D&B, що вплинула на нейрофанк. Reese-бас як центральний елемент, мінімальна структура, агресивний настрій.",
        timestamps: [
          { name: "Інтро (Reese)", time: "0:00–0:30" },
          { name: "Драмс + бас", time: "0:31–1:00" },
          { name: "Брейкдаун", time: "1:01–1:30" },
          { name: "Дроп (повна сила)", time: "1:31–2:30" },
          { name: "Другий брейк", time: "2:31–3:00" },
          { name: "Фінальний дроп", time: "3:01–4:00" },
          { name: "Аутро", time: "4:01–4:30" }
        ],
        analysis: { segmentation: 70, repetition: 70, contrast: 75, directionality: 75 },
        archetypeScores: { clubArcCore: 75, neuroBassComplexity: 75, drumProgramming: 80, mixdownIntensity: 80 },
        timeline: {
          release: 1998,
          context: "Один із найважливіших D&B-треків. Вплинув на розвиток нейрофанку та технічного D&B."
        },
        historicalContext: "Bad Company UK (DJ Fresh, dBridge, Maldini, Vegas) створили The Nine, який став гімном темного D&B. Його Reese-бас і структура вплинули на ціле покоління нейрофанк-продюсерів.",
        productionNotes: "Reese-бас — аналоговий синтез (Access Virus або аналог). Детюнінг 12 центів. LFO (трикутна хвиля) на cutoff 1/4 ноти. Distortion — аналоговий overdrive. Барабани — amen + свої семпли. Sidechain — тільки на суб-частоті."
      },
      {
        title: "Laser",
        author: "Black Sun Empire",
        year: 2004,
        label: "Black Sun Empire",
        album: "Driven Machine",
        formNotes: "Нідерландський нейрофанк. Кінематографічний, темний, технічно складний. Reese-бас із звуковими ефектами, натхненними sci-fi.",
        timestamps: [
          { name: "Кінематографічне інтро", time: "0:00–0:30" },
          { name: "Драмс входять", time: "0:31–1:00" },
          { name: "Бас + ритм", time: "1:01–1:45" },
          { name: "Брейкдаун", time: "1:46–2:15" },
          { name: "Білд", time: "2:16–2:30" },
          { name: "Дроп (нейро)", time: "2:31–3:15" },
          { name: "Аутро", time: "3:16–4:00" }
        ],
        analysis: { segmentation: 80, repetition: 60, contrast: 85, directionality: 80 },
        archetypeScores: { clubArcCore: 80, neuroBassComplexity: 85, drumProgramming: 80, mixdownIntensity: 85 },
        timeline: {
          release: 2004,
          context: "Розквіт нідерландського нейрофанку. Black Sun Empire — ключовий голос."
        },
        historicalContext: "Black Sun Empire (Міхаель, Менно, Бас — з Утрехта, Нідерланди) привнесли в нейрофанк кінематографічність і sci-fi естетику. Їхній альбом Driven Machine став класикою жанру.",
        productionNotes: "Reese-бас — FM-синтез + детюнінг. Високі частоти — гармонійний ексайтер + distortion. Sci-fi звуки — FM synthesis + reverb. Кік — суб-шар + 909 атака. Master — L1 Ultramaximizer."
      },
      {
        title: "Chain Smoker",
        artist: "Phace",
        year: 2010,
        label: "Subtitles",
        album: "Phace & Misanthrop — From Deep Space",
        formNotes: "Сучасний нейрофанк (2010). Чистий, агресивний, ідеально спродюсований. Reese-бас мутує через multiband обробку.",
        timestamps: [
          { name: "Інтро (атмосфера)", time: "0:00–0:15" },
          { name: "Барабани", time: "0:16–0:45" },
          { name: "Білд", time: "0:46–1:00" },
          { name: "Дроп", time: "1:01–1:45" },
          { name: "Брейкдаун", time: "1:46–2:15" },
          { name: "Дроп 2", time: "2:16–3:00" },
          { name: "Аутро", time: "3:01–3:30" }
        ],
        analysis: { segmentation: 85, repetition: 65, contrast: 80, directionality: 80 },
        archetypeScores: { clubArcCore: 85, neuroBassComplexity: 90, drumProgramming: 85, mixdownIntensity: 90 },
        timeline: {
          release: 2010,
          context: "Пік Subtitles/Neosignal. Phace визначає звук сучасного нейрофанку."
        },
        historicalContext: "Phace — німецький продюсер, частина дуету Phace & Misanthrop. Їхній альбом From Deep Space (2010) на Subtitles став еталоном нейрофанку нового покоління.",
        productionNotes: "Multiband обробка басу: (1) суб 30–120 Гц — без модуляції; (2) мід 120–500 Гц — LFO модуляція; (3) верх 500+ Гц — distortion + гармоніки. Барабани: свіжозаписані звуки + amen. Sidechain: kick → бас (ratio 6:1). Master: FabFilter Pro-MB (multiband) + Pro-L (limiter)."
      },
      {
        title: "Graft",
        artist: "Ulterior Motive",
        year: 2012,
        label: "Subtitles",
        album: "The Fourth Wall / Graft",
        formNotes: "Пізній нейрофанк (2012). Складний ритмічний малюнок, басова лінія з кількома одночасними текстурами.",
        timestamps: [
          { name: "Інтро (шум)", time: "0:00–0:15" },
          { name: "Перкусія", time: "0:16–0:45" },
          { name: "Бас входить", time: "0:46–1:00" },
          { name: "Дроп", time: "1:01–1:45" },
          { name: "Брейк (rhythm only)", time: "1:46–2:15" },
          { name: "Білд 2", time: "2:16–2:30" },
          { name: "Дроп 2", time: "2:31–3:15" },
          { name: "Аутро", time: "3:16–3:45" }
        ],
        analysis: { segmentation: 80, repetition: 65, contrast: 80, directionality: 75 },
        archetypeScores: { clubArcCore: 80, neuroBassComplexity: 85, drumProgramming: 90, mixdownIntensity: 85 },
        timeline: {
          release: 2012,
          context: "Зрілий нейрофанк. Subtitles на піку. Ulterior Motive — технічні віруози."
        },
        historicalContext: "Ulterior Motive (Стів та Джеймс) — британські продюсери, які поєднують технічну складність нейрофанку з groove-орієнтованістю. Graft є прикладом нейрофанку з акцентом на ритмічний малюнок.",
        productionNotes: "Бас: три шари — (1) синус (суб); (2) Reese (детюнінг 8 центів); (3) FM-шар (металевий). Барабани: HI-HAT програмування з 16-ми та 32-ми тріолями. Ride на 1/4. Snare з ревербом hall (decay 0.5s). Sidechain: multiband — kick компресує тільки 30–120 Гц діапазон басу."
      },
      {
        title: "Exodus",
        artist: "Noisia",
        year: 2010,
        label: "Vision",
        album: "Exodus / Shut Down",
        formNotes: "Пізній Noisia — найвищий рівень звукового дизайну. Бас — мультитекстурний, барабани — найскладніше програмування.",
        timestamps: [
          { name: "Інтро (glitch)", time: "0:00–0:20" },
          { name: "Кік + ритм", time: "0:21–0:45" },
          { name: "Бас входить", time: "0:46–1:00" },
          { name: "Дроп", time: "1:01–1:45" },
          { name: "Брейк", time: "1:46–2:30" },
          { name: "Дроп 2 (варіація)", time: "2:31–3:15" },
          { name: "Розпад", time: "3:16–4:00" }
        ],
        analysis: { segmentation: 80, repetition: 55, contrast: 90, directionality: 75 },
        archetypeScores: { clubArcCore: 80, neuroBassComplexity: 95, drumProgramming: 95, mixdownIntensity: 95 },
        timeline: {
          release: 2010,
          context: "Пік Vision. Noisia на вершині майстерності."
        },
        historicalContext: "Exodus демонструє найвищий рівень продакшну в нейрофанку. Noisia витрачали місяці на дизайн кожного звуку — трек став еталоном для технічних продюсерів.",
        productionNotes: "Бас: 5+ шарів — чистий суб (синус), Reese (детюнінг 12 центів), FM-шар (метал), текстурний шар (шум через band-pass), гармонійний шар (excitation). Кожен шар оброблений окремо. Барабани: багатошарові — snare з 3 семплів (attack + body + noise). Kick з 2 шарів. Hi-hat — 6 різних варіацій. Master: Slate Digital + Ozone."
      },
      {
        title: "Flashpoint",
        artist: "Misanthrop",
        year: 2011,
        label: "Subtitles",
        album: "Flashpoint / P-Funk",
        formNotes: "Нейрофанк з фанковими елементами. Складний Reese-бас поєднується з агресивним грувом. Дає контраст: технічний + танцювальний.",
        timestamps: [
          { name: "Інтро (glitch бас)", time: "0:00–0:15" },
          { name: "Кік + хай-хет", time: "0:16–0:45" },
          { name: "Бас + грув", time: "0:46–1:15" },
          { name: "Дроп", time: "1:16–1:45" },
          { name: "Брейк (текстура)", time: "1:46–2:15" },
          { name: "Дроп 2", time: "2:16–3:00" },
          { name: "Аутро", time: "3:01–3:30" }
        ],
        analysis: { segmentation: 80, repetition: 65, contrast: 80, directionality: 75 },
        archetypeScores: { clubArcCore: 85, neuroBassComplexity: 85, drumProgramming: 85, mixdownIntensity: 90 },
        timeline: {
          release: 2011,
          context: "Пік Subtitles. Misanthrop — технічний новатор."
        },
        historicalContext: "Misanthrop — німецький продюсер, половина Phace & Misanthrop. Flashpoint демонструє його унікальний стиль: нейрофанк із фанковим грувом. Жанр за межами чистого «механічного» нейрофанку.",
        productionNotes: "Бас — комбінація Reese (детюнінг) + фанковий bass (записаний аналог). Суб — створений окремо з синусоїди. Distortion — Decapitator на мід-частоті. Барабани: live hi-hat + amen. Sidechain: kick → бас повний. Master: Pro-L + PSP VintageWarmer."
      },
      {
        title: "Lunar",
        artist: "Phace & Misanthrop",
        year: 2010,
        label: "Subtitles",
        album: "From Deep Space",
        formNotes: "Співпраця Phace та Misanthrop. Білд і дроп максимально драматичні. Reese-бас з вокальним відчуттям — бас «співає».",
        timestamps: [
          { name: "Інтро (ембієнт)", time: "0:00–0:30" },
          { name: "Білд (підйом)", time: "0:31–0:45" },
          { name: "Дроп (нейро)", time: "0:46–1:30" },
          { name: "Брейк (вокал)", time: "1:31–2:00" },
          { name: "Білд 2", time: "2:01–2:15" },
          { name: "Дроп 2", time: "2:16–3:00" },
          { name: "Аутро", time: "3:01–3:45" }
        ],
        analysis: { segmentation: 85, repetition: 60, contrast: 85, directionality: 85 },
        archetypeScores: { clubArcCore: 85, neuroBassComplexity: 90, drumProgramming: 85, mixdownIntensity: 90 },
        timeline: {
          release: 2010,
          context: "Альбом-бомба From Deep Space. Phace & Misanthrop — нейрофанкова суперзірка."
        },
        historicalContext: "From Deep Space — альбом, який визначив звук нейрофанку 2010-х. Поєднання німецької технічності (Phace) та фанковості (Misanthrop). Lunar — кульмінація цього альбому.",
        productionNotes: "Reese-бас зі складною автоматизацією: cutoff, resonance, wavetable position. Високі частоти — через Ozone Exсiter. Барабани: багатошаровий snare (3 семпли + noise). Sidechain: агресивний (attack 1ms, ratio 10:1). Master: Ozone 5 + Limiter."
      }
    ],

    productionTradition: {
      philosophy: "Нейрофанк — це звуковий дизайн, що став композицією. Він виріс із техстепу наприкінці 1990-х (Ed Rush & Optical, Bad Company), а в 2000-х досяг технічної вершини завдяки Noisia, Phace і Black Sun Empire. Філософія: бас не повторюється — він мутує. Reese-бас, оброблений multiband-технікою, LFO-модуляцією й дисторшном, стає головним носієм форми: кожна секція — нова басова текстура, інженерно сконструйована з нуля. Темна sci-fi естетика, double-time барабани зі складними синкопами й агресивний sidechain створюють відчуття точної, футуристичної машини. Це найтехнічніший різновид драм-енд-басу, де форма тримається на постійній трансформації тембру, а не на повторенні.",

      coreTechniques: [
      {
        name: "Reese-бас: конструкція",
        description: "Класичний Reese-бас: два (або більше) осцилятори з пилкоподібною хвилею, злегка детюновані (5–15 центів), пропущені через low-pass фільтр. Це створює «товстий», хвилюючий звук за рахунок фазової інтерференції між двома майже ідентичними хвилями.",
        whyItWorks: "Фазова інтерференція між двома детюнованими хвилями створює природний «beating» — пульсацію, яка звучить рухомо та органічно. Чим більший детюнінг, тим швидша пульсація.",
        dawTranslation: {
          ableton: "Оператор (Operator): два пилкоподібні генератори. Детюнінг: Generator 2 = Generator 1 + 8–12 центів (транспозер ±0.12 напівтону). Auto Filter: Low-pass 24dB, Cutoff 200–400 Гц, Resonance 20–40%. LFO (1/4 або 1/8 ноти) на Cutoff. Додай Saturator (легка сатурація 10–20%) для гармонік.",
              flStudio: "3x Osc: Sound 1 = пилкоподібна, Pan 50% L; Sound 2 = пилкоподібна, Pan 50% R. Детюнінг: Fine Pitch +6–12 центів. Fruity Free Filter: Low-pass, Cutoff ~300 Гц, Resonance ~30%, LFO на Cutoff. Fruity WaveShaper: presets → Tube или Light Distortion.",
          logic: "ES2: два осцилятори (Saw 1 та Saw 2). Detune 1 = 0, Detune 2 = +8–12 центів. Filter: Low-Pass (24dB), Cutoff ~250 Гц, Resonance ~25%, LFO (Triangle, 1/4 ноти) на Cutoff. Додай Overdrive (Phat FX) на ~15% для сатурації."
        }
      },
      {
        name: "Neuro-бас: багатосмугова обробка",
        description: "Neuro-бас — еволюція Reese. Бас ділиться на три смуги: (1) суб (30–120 Гц) — стабільний, без модуляції; (2) мід-бас (120–500 Гц) — LFO модуляція + distortion; (3) високий бас (500+ Гц) — гармоніки, distortion, ефекти. Кожна смуга обробляється окремо.",
        whyItWorks: "Multiband дозволяє контролювати кожну частотну зону окремо. Суб залишається чистим для максимального тиску в клубі, середні частоти мутуть для руху, високі додають агресивності. Без multiband distortion на всьому басі зробить суб нечистим і клубна система не зможе відтворити його.",
        dawTranslation: {
          ableton: "Multiband Dynamics (або 3 окремі Audio Effect Racks з EQ). Cut: 30–120 Гц, Mid: 120–500 Гц, High: 500+ Гц. Low: тільки Operator (синусоїда). Mid: Operator (Reese з детюнінгом) → Auto Filter (LFO) → Saturator (40%) → Overdrive. High: Operator (Reese) → Corpus (метал) → Redux (bitcrush) → Reverb (small hall).",
              flStudio: "Multiband Compressor (Maximus). Смуги: Low 30–120 Гц, Mid 120–500 Гц, High 500+ Гц. Low: 3x Osc (синус) → стабільний. Mid: 3x Osc (Reese) → Fruity Phaser (LFO) → Fruity Fast Dist. High: 3x Osc (Reese) → Fruity Waveshaper → Fruity Reverb (small). Sidechain: kick → mid+high.",
          logic: "Multipressor (4 смуги). Sub: синус (регулярний). Mid: ES2 (Reese) → Phat FX (Drive 30%, LFO Filter) → AutoFilter. High: ES2 (Reese) → Phat FX (Bitcrush/Distortion) → Channel EQ. Aux: реверб на високі. Sidechain на мід і високі."
        }
      },
      {
        name: "Amen break програмування",
        description: "У нейрофанку amen break (або аналогічний брейкбіт) нарізається на окремі семпли (кік, снайп, хай-хет, райд, креш) та перепрограмовується. Типова структура: кік на 1 та 3 (half-time feel), снайп на 2 та 4 (backbeat), хай-хет на 16-х, додаткові синкопи.",
        whyItWorks: "Амен-брейк — найбільш «людська» драм-петля в історії. Нарізаний і перепрограмований, він зберігає органічне відчуття, але дає повний контроль над кожним ударом. Синкопи створюють ритмічну напругу, яка змушує тіло рухатися.",
        dawTranslation: {
          ableton: "Відкрий amen break у Simpler + Slice to MIDI (Transient slicing mode). Drum Rack: кожен слайс на окремій pad. Ритмічний малюнок: Kick on 1, 3 (другий варіант — 8-ма тріоль зміщення). Snare на 2.4, 4.2. Hi-hat на кожній 16-й. Ghost notes (тихі ударні) на непарних 16-х. Velocity: humanize 10–30%.",
              flStudio: "Завантаж amen break у Slicex → автоматичне нарізання по транзієнтах → Send to piano roll. Kick на C5 (ручне редагування). Snare на D5 (основний + ghost). Hi-hat: open (E5) + closed (F5). Pattern: kick 1.1, 3.1 + ghost на 1.3.4; snare 2.1, 4.1 + ghost. Swing: 40–55%.",
          logic: "Завантаж amen у Quick Sampler → партитура в Piano Roll. Ультрабіт (Ultrabeat) для окремого контролю. Drum Designer для snare/kick. Kick на 1, 3 (canonical). Snare на 2, 4 (з ghost notes на 8-х). Hi-hat: 16-ті + 32-гі, velocity modulation 20%. Humanize: 5–10% timing + velocity."
        }
      },
      {
        name: "Heavy sidechain компресія",
        description: "Агресивний sidechain: кік-барабан компресує бас (і часто інші елементи) з високим ratio (6:1–10:1), швидкою атакою (0.5–1ms) та середнім релізом (50–100ms). Це створює «помповий» ефект — бас «зникає» при ударі кіка та «вибухає» між ударами.",
        whyItWorks: "Клубна система має обмежений басовий діапазон. Коли бас і кік б'ють одночасно, вони конкурують за ті ж частоти. Sidechain дозволяє басу «йти з дороги» кіку, зберігаючи чіткість обох елементів, але між ударами бас звучить на повну.",
        dawTranslation: {
          ableton: "Компресор (Compressor) на бас-треку. Sidechain input: kick (група або трек). Attack: 0.5–1ms, Release: 50–100ms (1/32 або 1/16), Ratio: 8:1–10:1, Threshold: -20dB до -30dB. Make-up gain: 3–6dB. Envelope: вручну налаштуй attack/release — результат: бас «вибухає» після кожного кіка.",
              flStudio: "Fruity Limiter (Compression mode) на бас-треку. Sidechain: kick. Attack: 0.5–1ms, Release: 50–100ms, Ratio: 8:1. Threshold: -18 до -25dB. Make-up: 3–5dB. Peak clipping: вимкни. Kick trigger: одна нота (1.1.1). Результат: pump effect.",
          logic: "Компресор (Compressor) на Aux бас-треку. Sidechain: kick трек. Attack: 0.5–1ms, Release: 50–80ms. Ratio: 8:1–10:1. Threshold: -20dB. Make-up: auto (3–5dB). Або використовуй Tremolo (Logic's Tremolo) з LFO, синхронізованим з ритмом кіка для ідеального sidechain без компресора."
        }
      },
      {
        name: "Складний звуковий дизайн (ATM — Atmosphere/Texture/Movement)",
        description: "Кожен трек нейрофанку має власний звуковий «світ» — унікальні текстури, glitch-звуки, ефекти, що створюють кінематографічну атмосферу. Часто використовуються FM-синтез, гранулярний синтез, ресинтез, польові записи.",
        whyItWorks: "Нейрофанк — це технічна музика, яка потребує постійної уваги. Звуковий дизайн забезпечує мікро-події кожні кілька тактів (новий басовий відтінок, новий ефект, нова текстура), утримуючи увагу навіть при повторюваній структурі.",
        dawTranslation: {
          ableton: "FM-синтез: Operator (Frequency Modulation) — мод + носій. Гранічний синтез: Grain Delay (Spray 50ms, Grain Size 100ms, Density 50%). Ресинтез: відкрий будь-який семпл у Sampler → transpose -12 або -24. Glitch: Beat Repeat (1/16, Variation 50%) + Ping-Pong Delay. Reverb: Convolution Reverb (кафедральний собор IR).",
              flStudio: "Sytrus — FM-синтез (8 осциляторів, матриця модуляції). Fruity Granulizer — будь-який семпл через гранули. Fruity Love Philter — LFO-фільтрація на текстурі. Gross Beat — glitch/beat repeat ефекти. Reeverb 2 — кафедральний зал. Harmor — ресинтез (audio → wavetable).",
          logic: "Alchemy: FM mode (2+ осцилятори). Quick Sampler: будь-який семпл, transpose. Space Designer: convolution IR (кафедральний). Phat FX: Glitch/Distortion/FX загальна обробка. Tremolo: LFO як modulation source для інших параметрів. Delay Designer: складні delay patterns."
        }
      }
    ],

    listeningPathway: [
      "1️⃣ «Bacteria» (Ed Rush & Optical, 1998) — Початок. Послухай Reese-бас. Чи чуєш «beating» — пульсацію між двома детюнованими хвилями? Зверни увагу: у 1998 році не було sidechain — бас і кік просто чергуються в міксі.",
      "2️⃣ «The Nine» (Bad Company, 1998) — Той самий період, інший підхід до Reese. Як швидко мутує бас? Зверни увагу на мінімальну структуру — бас + драмс + бас. Чи є щось зайве?",
      "3️⃣ «Stigma» (Noisia, 2008) — Десять років потому. Як змінився звук порівняно з Bacteria? Чуєш sidechain? Бас «відходить» при кожному ударі кіка. Як це змінює відчуття груву?",
      "4️⃣ «Machine Gun» (Noisia, 2009) — Тепер зверни увагу на барабани. Як many-шаровий снайп звучить? Спробуй почути 2–3 різних звуки в одному ударі снайпа (attack + body + noise).",
      "5️⃣ «Chain Smoker» (Phace, 2010) — Зверни увагу на multiband бас. Чи чуєш, що суб-частота стабільна, а мід-частоти рухаються? Це — multiband обробка. Як змінюється тембр басу від дропу до дропу?",
      "6️⃣ «Laser» (Black Sun Empire, 2004) — Послухай звуковий дизайн. Sci-fi звуки, ефекти, glitch. Як кожен новий звук створює подію? Чи можна уявити цей трек як звукову доріжку до фільму?",
      "7️⃣ Підсумок — Повернися до «Stigma». Чи чуєш тепер три шари: sub (стабільний), Reese (середній, мутує), гармоніки (верх, distortion)? Спробуй намалювати структуру треку: лінія часу з позначками: інтро → білд → дроп (бас відкривається) → брейкдаун → другий дроп. Як довго триває кожна секція?"
      ]
    },

    commonMistakes: [
      "Надмірно складний Reese-бас без структурного контексту — звуковий дизайн має служити формі, а не існувати окремо.",
      "Ігнорувати ритмічну варіативність: нейрофанк — це не лише бас, а й барабани. Монотонний драм-малюнок вбиває енергію.",
      "Плутати темноту з монотонністю — жанр повинен дивувати і нові ідеї всередині структури. Кожна секція має нову басову текстуру.",
      "Недостатньо агресивний sidechain: без sidechain бас і кік конкурують, і мікс втрачає чіткість.",
      "Слабкий міксдаун: нейрофанк потребує максимальної гучності та щільності без кліпування. Потрібні multiband компресія та лімітер.",
      "Занадто складне аранжування: попри технічність, форма має залишатися клубною — listenable та танцювальною."
    ],

    distinguishingFeatures: [
      "Reese-бас як центральний елемент — мутуючий, багатошаровий, з multiband обробкою.",
      "Double-time барабанний малюнок (170–180 BPM) зі складними синкопами та ghost notes.",
      "Агресивний sidechain — кік компресує бас (ratio 6:1–10:1) створюючи pump-ефект.",
      "Мінімальна мелодія — акцент на тембрі та звуковому дизайні, а не на гармонії.",
      "Кінематографічна, sci-fi атмосфера та індустріальне звучання.",
      "Щільний, агресивний мікс із максимальною гучністю (multiband компресія + лімітер).",
      "Лінійна форма: новий басовий тембр у кожній секції замість повторення змін."
          ],

          compositionDecisions: {
            formBearer: "Reese-бас, що мутує через LFO та multiband обробку. Не мелодія, не гармонія — багатошаровий бас, який постійно змінює тембр, є носієм форми. Кожна секція = нова басова текстура.",
            development: "Мутація басового тембру (детюнінг, distortion, фільтрація, LFO modulation) та double-time барабанна нарізка. Розвиток — це звуковий дизайн у реальному часі: бас не повторюється, а трансформується.",
            contrast: "Зміна басової текстури (відкриття/закриття фільтру, додавання/зняття distortion) та скидання до мінімальної щільності (брейкдаун). Контраст — це нова «версія» басу, а не новий матеріал.",
            styleBreakers: [
              "Статичний бас — нейрофанк вимагає постійної мутації тембру; той самий бас протягом треку — вбиває форму",
              "Мелодійний хук замість басової текстури — акцент на тембрі, а не на мелодії",
              "М'який sidechain — без агресивної компресії (ratio 6:1–10:1) немає pump-ефекту",
              "Слабкий звуковий дизайн — кожен басовий тембр має бути результат інженерії, а не пресету"
            ]
          },

          designConstraints: {
            bpm: "172–180",
            sectionDuration: "8–16 тактів (10–30 с); секції коротші через високий темп",
            contrastLevel: "Високий (60–80%) — нова басова текстура в кожній секції",
            density: "Висока (6–10 елементів одночасно); щільний, агресивний мікс",
            harmonicComplexity: "Низька (1–3 ноти; акцент на тембрі, не на гармонії)",
            energyDynamics: "Імпульсивна, лінійна — енергія наростає через ускладнення басової текстури, без спадів до кінця"
          },

          glossary: [
      { term: "Reese-бас", definition: "Бас, створений двома (або більше) детюнованими осциляторами. Фазова інтерференція між ними створює пульсацію. Названий на честь треку Reese — «Just Want Another Chance»." },
      { term: "Neuro-бас", definition: "Еволюція Reese — бас із багатосмуговою обробкою. Суб стабільний, середні частоти мутуть через LFO, високі оброблені distortion. Ключовий елемент нейрофанку." },
      { term: "Sidechain компресія", definition: "Техніка, коли один звук (зазвичай кік) контролює компресію іншого (зазвичай басу). Бас «зникає» при ударі кіка, створюючи pump-ефект." },
      { term: "Amen break", definition: "Драм-петля з треку «Amen, Brother» (The Winstons, 1968). Найчастіше семпльований брейкбіт в історії. В нейрофанку нарізається та перепрограмовується." },
      { term: "Multiband обробка", definition: "Розділення звуку на частотні смуги (low, mid, high) з окремою обробкою кожної. Дозволяє контролювати суб, мід і верх басу незалежно." },
      { term: "Кік (Beat)", definition: "Типовий нейрофанк кік — агресивний, з короткою атакою, з двома шарами: транзієнт (attack, 1–5kHz) та суб-шар (50–100Hz)." }
    ],

    teacherNotes: [
      "Нейрофанк — найкращий інструмент для навчання sound design'у та продюсування. Студент має зрозуміти різницю між «звуком, який створений» та «звуком, який знайдено».",
      "Аналогія: нейрофанк — це інженерія. Як у автомобілі, де кожен гвинт має значення. Студенти, які не звикли до уваги до деталей, спочатку відчувають дискомфорт.",
      "Найважливіший урок: sidechain компресія. 90% студентів не роблять її достатньо агресивною. Покажіть спектрограму до і після — тільки візуально вони розуміють, що відбувається.",
      "Нейрофанк також навчає використання референс-треків. Без референсу студент не почує, як має звучати мікс.",
      "Порада: покажіть студенту «Stigma» та «Bacteria» поруч — 10 років еволюції нейрофанку. Питання: що змінилося в продакшні? Відповідь: усе — але форма та ж сама."
    ]
  }
]
  },

  // ============================================================
  // Rondo (Classical)
  // ============================================================
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
    conclusion: "Рондо навчає формі як ідентичності, що повертається після контрастних подорожей.",

    sectionKnowledge: [
      secKnowledge("A (refrain)",
        "Представити головну тему — музичну ідентичність твору.",
        "Рефрен — це психологічний дім. Слухач повертається до знайомого матеріалу після кожного нового епізоду.",
        "Рефрен надто складний — слухач не може його запам'ятати. Рефрен надто простий — не витримує повторень.",
        "У безперервних формах, де контраст створюється через процес, а не через повернення.",
        "«Чи впізнає слухач цю тему при другому поверненні?»",
        ["Mozart — Rondo alla Turca (1783)", "Beethoven — Rondo a capriccio (1795)"]
      ),
      secKnowledge("B episode",
        "Запропонувати контраст — нову тональність, текстуру, характер.",
        "Епізод B — це відстань. Слухач має «піти» від рефрену, щоб повернення мало сенс.",
        "Епізод B, який занадто схожий на A — не створює контрасту. Епізод B, який занадто далекий — твір розпадається.",
        "У коротких рондо (ABACA), де на контраст менше часу.",
        "«Чи достатньо B відрізняється від A, щоб повернення до A відчувалося як повернення?»",
        ["Beethoven — Piano Sonata Op. 13 (Pathetique), Rondo (1798)", "Mozart — Horn Concerto No. 4, Rondo (1786)"]
      ),
      secKnowledge("A return",
        "Повернути слухача до головної теми, підтвердити форму.",
        "Повернення — це задоволення від впізнавання. Слухач відчуває: «Я тут був, і я знаю це місце».",
        "Повернення без змін — передбачувано. Занадто багато змін — слухач не впізнає тему.",
        "У творах, де епізоди настільки сильні, що рефрен має змінитися, щоб конкурувати.",
        "«Чи впізнає слухач тему після епізоду B? Чи звучить вона по-новому після контрасту?»",
        ["Mozart — Eine kleine Nachtmusik, Rondo (1787)", "Haydn — Piano Sonata Hob. XVI/37, Finale (1780)"]
      ),
      secKnowledge("C episode",
        "Запропонувати глибший контраст — часто в більш віддаленій тональності.",
        "Епізод C — це найдальша точка подорожі. Чим далі від A, тим сильніше відчуття повернення.",
        "Епізод C, який не глибший за B — втрачається відчуття прогресу. Занадто довгий — слухач забуває A.",
        "У формі ABACA (без другого епізоду) — скорочене рондо.",
        "«Чи відчувається C як більш далека подорож, ніж B?»",
        ["Beethoven — Rondo Op. 51 No. 1 (1797)", "Mozart — Piano Concerto No. 23, Rondo (1786)"]
      ),
      secKnowledge("A final",
        "Завершити твір ствердженням головної теми — остаточне повернення.",
        "Фінальне A — це тріумф ідентичності. Форма подорожувала далеко, але повернулася додому. Слухач відчуває завершеність.",
        "Фінальне A, яке звучить так само, як перше — втрачена можливість для підсумку. Але занадто змінене — не відчувається як повернення.",
        "У формі, де C закінчується так, що A більше не потрібне (відкриті форми).",
        "«Чи відчувається фінальне A як підсумок подорожі, а не просто як повторення?»",
        ["Mozart — Rondo alla Turca (1783)", "Beethoven — Violin Sonata No. 5 (Spring), Rondo (1801)"]
      )
    ],

    failureAnalysis: [
      failureEntry("A (refrain)", "Рефрен видалено", [
        "Немає центральної теми — форма не має ідентичності",
        "Епізоди не мають до чого повертатися — рондо перестає бути рондо",
        "Слухач не має точки опори — музика стає набором епізодів"
      ]),
      failureEntry("B episode", "Епізод B видалено", [
        "Немає першого контрасту — повернення до A не відчувається",
        "A–C–A — неповна форма, слухач не отримує очікуваного контрасту",
        "Відсутність відстані між поверненнями A"
      ]),
      failureEntry("A return", "Повернення A видалено", [
        "Форма стає лінійною — A → B → C — це не рондо",
        "Слухач не отримує очікуваного впізнавання",
        "Твір втрачає архітектурну симетрію"
      ]),
      failureEntry("C episode", "Епізод C видалено", [
        "Форма стає A–B–A — це не рондо, а проста тричастинна форма",
        "Немає глибшого контрасту — подорож недостатньо далека",
        "Фінальне A звучить занадто рано"
      ]),
      failureEntry("A final", "Фінальне A видалено", [
        "Твір закінчується на епізоді C — відчуття незавершеності",
        "Слухач очікує повернення, якого не відбувається",
        "Форма не закривається — ідентичність не стверджена"
      ])
    ],

    variants: [
      variant("ABACA",
        "Класичне рондо (Mozart, Haydn)",
        "Три повернення рефрену з двома контрастними епізодами.",
        "Плюс: симетрична, передбачувана. Мінус: епізод C має бути значно контрастнішим за B."
      ),
      variant("ABACABA",
        "Розширене рондо (Beethoven)",
        "П'ять повернень рефрену. B повертається після C, створюючи арку.",
        "Плюс: більша архітектурна глибина. Мінус: ризик надмірного повторення."
      ),
      variant("ABACADA",
        "Рондо з трьома епізодами (рідше)",
        "Кожен епізод у новій тональності/характері.",
        "Плюс: максимальна різноманітність. Мінус: слухач може забути рефрен."
      )
    ],

    canonicalTracks: [
      track("Rondo alla Turca", "W.A. Mozart", 1783,
        "ABACA. Найвідоміше рондо. Яскравий «турецький» епізод B, віртуозний C.",
        [
          { name: "A (refrain)", time: "0:00–0:25" },
          { name: "B episode", time: "0:26–0:55" },
          { name: "A return", time: "0:56–1:20" },
          { name: "C episode", time: "1:21–1:55" },
          { name: "A final", time: "1:56–2:25" },
          { name: "Coda", time: "2:26–3:00" }
        ], "classical", { segmentation: 90, repetition: 80, contrast: 75, directionality: 65 }
      ),
      track("Piano Sonata Op. 13 (Pathetique), Rondo", "L. van Beethoven", 1798,
        "ABACABA. Розширене рондо з драматичним контрастом між епізодами. B повертається після C, створюючи арку.",
        [
          { name: "A (refrain)", time: "0:00–0:30" },
          { name: "B episode", time: "0:31–1:15" },
          { name: "A return", time: "1:16–1:45" },
          { name: "C episode", time: "1:46–2:30" },
          { name: "A return", time: "2:31–3:00" },
          { name: "B return", time: "3:01–3:45" },
          { name: "A final", time: "3:46–4:15" },
          { name: "Coda", time: "4:16–4:45" }
        ], "classical", { segmentation: 85, repetition: 75, contrast: 85, directionality: 75 }
      ),
      track("Eine kleine Nachtmusik, Rondo", "W.A. Mozart", 1787,
        "ABACA. Легке, грайливе рондо з мінімальним контрастом у епізодах.",
        [
          { name: "A (refrain)", time: "0:00–0:30" },
          { name: "B episode", time: "0:31–1:00" },
          { name: "A return", time: "1:01–1:30" },
          { name: "C episode", time: "1:31–2:15" },
          { name: "A final", time: "2:16–2:45" },
          { name: "Coda", time: "2:46–3:10" }
        ], "classical", { segmentation: 85, repetition: 80, contrast: 70, directionality: 60 }
      ),
      track("Horn Concerto No. 4, Rondo", "W.A. Mozart", 1786,
        "ABACA. Віртуозне рондо з сольним валторною.",
        [
          { name: "A (refrain)", time: "0:00–0:30" },
          { name: "B episode", time: "0:31–1:00" },
          { name: "A return", time: "1:01–1:30" },
          { name: "C episode", time: "1:31–2:15" },
          { name: "A final", time: "2:16–3:00" },
          { name: "Coda", time: "3:01–3:30" }
        ], "classical", { segmentation: 85, repetition: 80, contrast: 70, directionality: 65 }
      ),
      track("Violin Sonata No. 5 (Spring), Rondo", "L. van Beethoven", 1801,
        "ABACABA. Ліричне рондо в повільному темпі. Рідкісний приклад.",
        [
          { name: "A (refrain)", time: "0:00–0:40" },
          { name: "B episode", time: "0:41–1:20" },
          { name: "A return", time: "1:21–2:00" },
          { name: "C episode", time: "2:01–2:45" },
          { name: "A return", time: "2:46–3:20" },
          { name: "B return", time: "3:21–4:00" },
          { name: "A final", time: "4:01–4:30" },
          { name: "Coda", time: "4:31–5:00" }
        ], "classical", { segmentation: 80, repetition: 75, contrast: 80, directionality: 70 }
      ),
      track("Piano Concerto No. 23, Rondo", "W.A. Mozart", 1786,
        "ABACA з оркестром. Епізоди використовують різні оркестрові кольори.",
        [
          { name: "A (refrain)", time: "0:00–0:35" },
          { name: "B episode", time: "0:36–1:15" },
          { name: "A return", time: "1:16–1:50" },
          { name: "C episode", time: "1:51–2:40" },
          { name: "A final", time: "2:41–3:15" },
          { name: "Coda", time: "3:16–3:45" }
        ], "classical", { segmentation: 85, repetition: 80, contrast: 75, directionality: 65 }
      ),
      track("Für Elise", "L. van Beethoven", 1810,
        "ABACA. Найвідоміша фортепіанна п'єса в світі. Рефрен повертається 3 рази.",
        [
          { name: "A (refrain)", time: "0:00–0:40" },
          { name: "B episode", time: "0:41–1:10" },
          { name: "A return", time: "1:11–1:50" },
          { name: "C episode", time: "1:51–2:20" },
          { name: "A final", time: "2:21–2:55" }
        ], "classical", { segmentation: 85, repetition: 80, contrast: 75, directionality: 60 }
      ),
      track("Rondo in C, Op. 51 No. 1", "L. van Beethoven", 1797,
        "ABACA. Ліричне рондо з кантиленною темою A і віртуозними епізодами.",
        [
          { name: "A (refrain)", time: "0:00–0:35" },
          { name: "B episode", time: "0:36–1:10" },
          { name: "A return", time: "1:11–1:45" },
          { name: "C episode", time: "1:46–2:30" },
          { name: "A final", time: "2:31–3:00" },
          { name: "Coda", time: "3:01–3:25" }
        ], "classical", { segmentation: 85, repetition: 75, contrast: 70, directionality: 65 }
      ),
      track("Take Five", "Dave Brubeck", 1959,
        "AABA — джазове рондо. Тема повертається після імпровізаційних соло. 5/4 розмір.",
        [
          { name: "A (theme)", time: "0:00–0:40" },
          { name: "A repeat", time: "0:41–1:20" },
          { name: "B (drum solo)", time: "1:21–2:30" },
          { name: "A return (sax solo)", time: "2:31–3:30" },
          { name: "A final", time: "3:31–4:20" },
          { name: "Coda", time: "4:21–5:24" }
        ], "jazz", { segmentation: 80, repetition: 80, contrast: 70, directionality: 60 }
      ),
      track("All Blues", "Miles Davis", 1959,
        "Модальний джаз. Рефрен — 12-тактовий блюз, епізоди — соло. Кожне соло повертається до рефрену.",
        [
          { name: "A (theme)", time: "0:00–1:00" },
          { name: "B (Miles solo)", time: "1:01–3:00" },
          { name: "A (theme return)", time: "3:01–3:30" },
          { name: "C (Coltrane solo)", time: "3:31–5:30" },
          { name: "A (theme return)", time: "5:31–6:00" },
          { name: "D (Adderley solo)", time: "6:01–8:30" },
          { name: "A final", time: "8:31–10:00" },
          { name: "Coda", time: "10:01–11:35" }
        ], "jazz", { segmentation: 75, repetition: 80, contrast: 65, directionality: 60 }
      )
    ],

    diagnosis: [
      "Чи впізнає слухач рефрен при кожному поверненні?",
      "Чи достатньо епізоди контрастують з рефреном?",
      "Чи відчувається C як глибший контраст, ніж B?",
      "Чи не занадто багато повторень рефрену?",
      "Чи має фінальне A відчуття завершення, а не просто повторення?",
      "Чи працює форма, якщо слухач не знає назви «рондо»?"
    ],

    genreTransfer: [
      genreTransfer("Pop", "Приспів як рефрен, куплети як епізоди.", "Форма song: A (приспів) → B (куплет) → A → C (брідж) → A."),
      genreTransfer("Jazz", "Тема + соло (епізоди) + повернення теми.", "Джазові стандарти часто використовують рондо-подібну логіку."),
      genreTransfer("Electronic", "Loop A як рефрен, текстури B/C як епізоди.", "Техно-треки з recurrent loop і текстурними змінами."),
      genreTransfer("Hip-Hop", "Хук як рефрен, куплети як епізоди.", "Багато хіп-хоп пісень мають ABABAC структуру (приспів-куплет-приспів-куплет-брідж-приспів)."),
      genreTransfer("Folk", "Приспів як рефрен, куплети як історія.", "Народні пісні часто є природним рондо з повторюваним приспівом.")
    ],
    dawExercise: [
      "Напиши тему A (4 такти) у до-мажорі.",
      "Напиши контрастну тему B (4 такти) у соль-мажорі.",
      "Побудуй ABACA: A → B → A → C (4 такти, фа-мажор) → A.",
      "Переконайся, що кожне повернення A впізнаване.",
      "Додай коду — коротке завершення після останнього A."
    ],
    listeningExercise: [
      "Послухай Rondo alla Turca (Mozart). Скільки разів повертається A? Чим відрізняються B і C?",
      "Послухай Für Elise (Beethoven). Знайди всі повернення теми A — чи ідентичні вони?",
      "Послухай Take Five (Dave Brubeck). AABA — різновид рондо. Як соло вписуються в форму?"
    ],
    comparisons: [
      { with: "Verse-Chorus", difference: "Rondo повертає тему ІДЕНТИЧНОЮ — чисте повторення. VC може змінювати хук. Rondo навчає: тема як якір." },
      { with: "Club Arc", difference: "Club Arc лінійний (енергія наростає і спадає). Rondo циклічний (тема повертається). Club Arc — подорож; Rondo — повернення додому." },
      { with: "Theme & Variations", difference: "T&V змінює тему з кожним поверненням. Rondo повертає рефрен незмінним. Rondo — впізнаваність через сталість; T&V — через трансформацію." },
      { with: "Head-Solo-Head", difference: "HSH — це джазове рондо: тема → соло → тема. Але в Rondo епізоди — нові теми; в HSH соло — імпровізація на ту ж гармонію." },
      { with: "Sonata-Allegro", difference: "Sonata-Rondo (ABACABA) — на межі обох форм. Чиста Sonata трансформує теми в Розробці; Rondo повертає рефрен без трансформації." }
    ],
    glossary: [
      { term: "Refrain", definition: "Головна тема, яка повертається між епізодами. В рондо — завжди в тоніці (головній тональності)." },
      { term: "Episode", definition: "Контрастна секція між поверненнями рефрену. В класичному рондо — в іншій тональності." },
      { term: "Tonal Plan", definition: "Розподіл тональностей між секціями. В рондо: A (тоніка) → B (домінанта) → A → C (субдомінанта або мінор) → A." },
      { term: "Return Structure", definition: "Стратегія повернення теми. ABACA: рефрен повертається 3 рази. ABACABA: 4 рази з поверненням B." },
      { term: "Coda", definition: "Завершальна секція після останнього рефрену. Підсумовує форму, часто з віртуозним матеріалом." },
      { term: "Symmetry", definition: "Симетричність форми: A (початок) = A (кінець). Слухач відчуває завершеність через повернення до початку." }
    ],
    teacherNotes: [
      "Найчастіша помилка: студент думає, що рондо — це просто «повторення теми». Насправді рондо — це повторення теми в ТОНІЦІ після тонального відходу.",
      "Аналогія: рондо — це прогулянка, де ви завжди повертаєтеся додому. Епізоди — це різні квартали. Рефрен — це ваш будинок.",
      "Часте питання: «Чим рондо відрізняється від verse-chorus?» Відповідь: в рондо рефрен повертається ідентичним; в VC хук може змінювати текст і енергію.",
      "Порада: покажіть Rondo alla Turca. Студент має почути, що A завжди однакове, а B і C — різні. Попросіть підняти руку, коли A повертається.",
      "Для електронних продюсерів: рондо = loop A (refrain) + breakdown (episode B) + loop A + breakdown (episode C) + loop A."
    ],
    deviations: [
      { track: "Für Elise (Beethoven, 1810)", explanation: "Рондо в мініатюрі — 2:55. Всього 5 секцій, кожна коротка. Показує: рондо може бути компактним, не потребує розгорнутої форми." },
      { track: "Take Five (Dave Brubeck, 1959)", explanation: "AABA — джазова версія рондо. Замість ABACA має AABA. «Епізод» — це соло, а не нова тема. Працює тому, що імпровізація виконує функцію епізоду." },
      { track: "All Blues (Miles Davis, 1959)", explanation: "Модальне рондо. Рефрен — 12-тактовий блюз. Епізоди — соло музикантів. Кожне соло повертається до теми. Форма: тема-соло-тема-соло-тема." },
      { track: "Beethoven Symphony No.7, II", explanation: "Рондо-подібна структура, але в повільному темпі. Рефрен — похоронний марш. Епізоди — ліричні відступи. Показує: рондо може бути трагічним, не тільки грайливим." }
    ]
  },

  // ============================================================
  // 12-Bar Blues
  // ============================================================
  {
    id: "12-bar-blues",
    title: "12-Bar Blues",
    description: "Гармонічний цикл з 12 тактів на трьох акордах (I, IV, V). Форма базується на гармонії, а не на темах чи секціях.",
    generatedBy: ["segmentation", "repetition"],
    genre: "blues / rock / jazz",
    tempo: "60-160 BPM",
    difficulty: "easy",
    sections: [
      { name: "I (Tonic)", bars: 4, concept: "repetition", function: "Тоніка — 4 такти, встановлює тональність" },
      { name: "IV (Subdominant)", bars: 2, concept: "contrast", function: "Субдомінанта — 2 такти, легкий відхід" },
      { name: "I (Tonic return)", bars: 2, concept: "repetition", function: "Повернення до тоніки" },
      { name: "V (Dominant)", bars: 2, concept: "directionality", function: "Домінанта — напруга, тяжіння до IV/I" },
      { name: "IV (Cadence)", bars: 1, concept: "contrast", function: "Субдомінанта — підготовка кадансу" },
      { name: "I (Resolution)", bars: 1, concept: "repetition", function: "Тоніка — розв'язання напруги" }
    ],
    conclusion: "12-Bar Blues навчає: форма може бути гармонійною, не тематичною. Три акорди — архітектура.",

    sectionKnowledge: [
      secKnowledge("I (Tonic)", "Встановити тональність, дати гармонійний дім.", "Чотири такти на тоніці — стабільність.", "Недостатньо характерний риф.", "У мінорних/модальних блюзах.", "«Чи впізнає слухач тональність після 4 тактів?»", ["Robert Johnson — Sweet Home Chicago (1936)", "Muddy Waters — Hoochie Coochie Man (1954)"]),
      secKnowledge("IV (Subdominant)", "Змістити гармонію.", "IV — «питання» після тоніки.", "IV занадто довгий.", "Quick change варіант.", "«Чи звучить IV як відхід?»", ["B.B. King — The Thrill Is Gone (1969)", "Stevie Ray Vaughan — Pride and Joy (1983)"]),
      secKnowledge("V (Dominant)", "Створити напругу.", "V — «питання» що вимагає відповіді.", "V без IV слабша напруга.", "У turnaround.", "«Чи відчувається завершення циклу?»", ["Chuck Berry — Johnny B. Goode (1958)", "Jimi Hendrix — Red House (1966)"]),
      secKnowledge("I (Resolution)", "Завершити цикл.", "Один такт — мінімальне завершення.", "Розв'язок занадто довгий.", "Turnaround.", "«Чи звучить останній такт як завершення?»", ["B.B. King — Every Day I Have the Blues (1955)", "Eric Clapton — Before You Accuse Me (1998)"])
    ],

    failureAnalysis: [
      failureEntry("I (Tonic)", "Тоніка не встановлена", ["Слухач не знає домашньої тональності", "IV і V не мають контексту", "Форма втрачає циклічність"]),
      failureEntry("IV (Subdominant)", "IV видалено", ["I→V без контрасту", "V без «розгону»", "Форма I-I-I-V"]),
      failureEntry("V (Dominant)", "V видалено", ["Цикл без напруги", "Повернення до I не відчувається"]),
      failureEntry("I (Resolution)", "Останній такт не повертає до I", ["Цикл не закривається", "Слухач чекає продовження"])
    ],

    variants: [
      variant("Quick Change", "Рок-н-рол (Chuck Berry)", "IV на другому такті: I→IV→I→I / IV→IV→I→I / V→IV→I→I", "Плюс: більше руху. Мінус: менше часу на тоніку."),
      variant("Minor Blues", "Джаз, соул (B.B. King)", "Мінор, II-V замість V-IV.", "Плюс: драматичніше. Мінус: складніше."),
      variant("Jazz Blues", "Бібоп (Parker)", "II-V заміни, тритонові заміни.", "Плюс: багатша гармонія. Мінус: втрачає простоту."),
      variant("8/16-Bar Blues", "Ранній рок-н-рол", "Скорочена/розширена версія.", "Плюс: гнучкість. Мінус: менш канонічна.")
    ],

    canonicalTracks: [
      track("Sweet Home Chicago", "Robert Johnson", 1936,
        "Класичний дельта-блюз. Кожні 12 тактів — один повний цикл I–IV–V. Акустична гітара і слайд.",
        [
          { name: "Intro (slide)", time: "0:00–0:08" },
          { name: "Chorus 1 (verse)", time: "0:09–0:20" },
          { name: "Chorus 2 (verse)", time: "0:21–0:32" },
          { name: "Chorus 3 (vocal peak)", time: "0:33–0:44" },
          { name: "Chorus 4 (guitar fill)", time: "0:45–0:56" }
        ], "blues", { segmentation: 70, repetition: 90, contrast: 50, directionality: 60 }),
      track("Hoochie Coochie Man", "Muddy Waters", 1954,
        "Електричний чиказький блюз. Stop-time intro — пауза підкреслює I. 12 тактів × 5 повторів.",
        [
          { name: "Stop-time intro", time: "0:00–0:10" },
          { name: "Verse 1 (12-bar)", time: "0:11–0:28" },
          { name: "Verse 2", time: "0:29–0:46" },
          { name: "Harmonica solo (12-bar)", time: "1:05–1:22" },
          { name: "Final verse", time: "1:40–1:57" }
        ], "blues", { segmentation: 75, repetition: 90, contrast: 40, directionality: 55 }),
      track("Johnny B. Goode", "Chuck Berry", 1958,
        "Quick change: IV з'являється вже на другому такті. Гітарний риф = тема. Еталон рок-н-ролу.",
        [
          { name: "Guitar intro (riff)", time: "0:00–0:05" },
          { name: "Verse 1 (quick change)", time: "0:06–0:18" },
          { name: "Chorus", time: "0:19–0:31" },
          { name: "Verse 2", time: "0:32–0:44" },
          { name: "Guitar solo (12-bar)", time: "0:45–1:08" },
          { name: "Final chorus", time: "1:44–1:58" }
        ], "rock", { segmentation: 80, repetition: 85, contrast: 60, directionality: 70 }),
      track("The Thrill Is Gone", "B.B. King", 1969,
        "Мінорний 12-bar blues. Bm7–Em7–F#7 замість мажорних акордів. Оркестровий акомпанемент.",
        [
          { name: "Intro (guitar statement)", time: "0:00–0:15" },
          { name: "Verse 1 (12-bar minor)", time: "0:16–0:42" },
          { name: "Verse 2", time: "0:43–1:09" },
          { name: "Guitar solo", time: "1:10–1:36" },
          { name: "Verse 3 (outro)", time: "1:37–2:03" }
        ], "blues", { segmentation: 75, repetition: 80, contrast: 70, directionality: 65 }),
      track("Pride and Joy", "Stevie Ray Vaughan", 1983,
        "Техаський блюз. Щільний ритм, подвійні стопи. Стандартна 12-bar форма з pentatonic solo.",
        [
          { name: "Intro (shuffle riff)", time: "0:00–0:05" },
          { name: "Verse 1 (12-bar)", time: "0:06–0:20" },
          { name: "Verse 2", time: "0:21–0:35" },
          { name: "Chorus", time: "0:36–0:50" },
          { name: "Guitar solo", time: "0:51–1:05" },
          { name: "Verse 3 + outro", time: "1:06–2:50" }
        ], "blues rock", { segmentation: 80, repetition: 80, contrast: 65, directionality: 70 }),
      track("Red House", "Jimi Hendrix", 1966,
        "Повільний 12-bar blues (shuffle feel). Розгорнуті соло між вокальними фразами.",
        [
          { name: "Intro (slow blues)", time: "0:00–0:15" },
          { name: "Verse 1", time: "0:16–0:45" },
          { name: "Verse 2", time: "0:46–1:15" },
          { name: "Guitar solo 1", time: "1:16–2:15" },
          { name: "Verse 3", time: "2:16–2:45" },
          { name: "Guitar solo 2 (extended)", time: "2:46–3:45" }
        ], "blues rock", { segmentation: 70, repetition: 80, contrast: 65, directionality: 65 }),
      track("Blues for Alice", "Charlie Parker", 1951,
        "Jazz blues з ускладненою гармонією. Замість C7–F7–G7 — II–V каданси. Bird changes.",
        [
          { name: "Head (melody)", time: "0:00–0:20" },
          { name: "Parker solo (chorus 1)", time: "0:21–0:41" },
          { name: "Parker solo (chorus 2)", time: "0:42–1:01" },
          { name: "Piano solo", time: "1:02–1:21" },
          { name: "Head out", time: "1:22–1:40" }
        ], "jazz", { segmentation: 80, repetition: 75, contrast: 70, directionality: 75 }),
      track("Cross Road Blues", "Robert Johnson", 1936,
        "Дельта-блюз. Відкрита G-настройка, слайд-гітара. Вокальна мелодія у call-and-response.",
        [
          { name: "Intro (slide phrase)", time: "0:00–0:08" },
          { name: "Verse 1 (call)", time: "0:09–0:20" },
          { name: "Verse 1 (response, guitar)", time: "0:21–0:32" },
          { name: "Verse 2", time: "0:33–0:55" },
          { name: "Verse 3 (peak)", time: "0:56–1:18" }
        ], "blues", { segmentation: 70, repetition: 90, contrast: 50, directionality: 60 }),
      track("Every Day I Have the Blues", "B.B. King", 1955,
        "Класичний 12-bar blues у підвищеному темпі. Фраза + гітарна відповідь = call-and-response.",
        [
          { name: "Intro (horn riff)", time: "0:00–0:08" },
          { name: "Verse 1 (vocal + guitar fill)", time: "0:09–0:25" },
          { name: "Verse 2", time: "0:26–0:42" },
          { name: "Guitar solo", time: "0:43–0:59" },
          { name: "Verse 3 (outro)", time: "1:00–1:16" }
        ], "blues", { segmentation: 75, repetition: 90, contrast: 50, directionality: 60 }),
      track("Before You Accuse Me", "Eric Clapton", 1998,
        "Сучасний 12-bar blues. Clapton + Robert Cray. Переклад Bo Diddley's оригіналу. Нескладна форма, акцент на groove.",
        [
          { name: "Intro (guitar)", time: "0:00–0:10" },
          { name: "Verse 1 (12-bar)", time: "0:11–0:30" },
          { name: "Verse 2", time: "0:31–0:50" },
          { name: "Guitar solo", time: "1:11–1:40" },
          { name: "Verse 3 + fade", time: "1:41–2:30" }
        ], "blues rock", { segmentation: 75, repetition: 80, contrast: 65, directionality: 65 })
    ],

    diagnosis: ["Чи впізнає слухач 12-тактовий цикл?", "Чи відчувається IV як зміна?", "Чи достатньо V створює напругу?", "Чи працює форма без тексту?"],

    genreTransfer: [
      genreTransfer("Rock", "Quick change. Гітарний риф.", "Chuck Berry, Beatles, AC/DC."),
      genreTransfer("Jazz", "Jazz blues: II-V заміна.", "Parker, Davis."),
      genreTransfer("R&B/Soul", "Вокальна мелодія.", "Ray Charles, James Brown."),
      genreTransfer("Country", "Акустична гітара.", "Johnny Cash."),
      genreTransfer("Hip-Hop", "Семпл блюзу.", "Багато продюсерів.")
    ],

    dawExercise: ["Налаштуй C7, F7, G7.", "Створи 12 тактів: 4×C7→2×F7→2×C7→2×G7→1×F7→1×C7.", "Додай ритм-секцію.", "Додай гітарний риф.", "Повтори 12 тактів 3-4 рази.", "Спробуй quick change."],

    listeningExercise: ["Sweet Home Chicago: знайди I, IV, V.", "Johnny B. Goode: quick change.", "Blues for Alice: скільки акордів?"],

    comparisons: [
      { with: "Verse-Chorus", difference: "12-Bar Blues — гармонійна форма. VC — тематична." },
      { with: "Rondo", difference: "Rondo повертає ТЕМУ. Blues повертає ГАРМОНІЮ." },
      { with: "Process-Based", difference: "Process: правило ЗМІНИ. Blues: правило ПОВТОРЕННЯ." },
      { with: "Head-Solo-Head", difference: "12-Bar Blues — гармонічна схема для соло. HSH використовує будь-яку схему, але Blues-form — один з найпоширеніших форматів для HSH." },
      { with: "Through-Composed", difference: "12-Bar повторює цикл нескінченно. TC рухається вперед без повторень. Протилежні підходи до часу в музиці." }
    ],
    glossary: [
      { term: "Tonic (I)", definition: "Головний акорд тональності. В блюзі — домінантсептакорд (C7). Дім, куди повертається гармонія." },
      { term: "Subdominant (IV)", definition: "Акорд на четвертому ступені (F7). Легкий гармонійний відхід від тоніки. Створює контраст без втрати орієнтиру." },
      { term: "Dominant (V)", definition: "Акорд на п'ятому ступені (G7). Найсильніша гармонійна напруга. Потребує розв'язку в тоніку." },
      { term: "Turnaround", definition: "Останні 2 такти 12-тактового циклу. V→IV→I або V→I. Сигнал: «цикл завершується, новий починається»." },
      { term: "Quick Change", definition: "Варіант блюзу, де IV з'являється на другому, а не п'ятому такті. I→IV→I→I замість I→I→I→I." },
      { term: "12-Bar Cycle", definition: "12 тактів, розділених на три фрази по 4 такти. Кожна фраза: 2 такти питання + 2 такти відповіді." }
    ],
    teacherNotes: [
      "Найчастіша помилка: студент грає 12 тактів але не відчуває циклу. Поясніть: кожні 12 тактів — це одне «речення». Кінець речення = turnaround.",
      "Аналогія: 12-bar blues — це дихання. 4 такти вдих (I), 2 такти пауза (IV), 2 такти видих (I), 2 такти напруга (V), 2 такти розслаблення (IV→I).",
      "Часте питання: «Чому саме 12 тактів?» Відповідь: 4+2+2+2+1+1. Симетрія: 4+2+2 = 8 тактів питання, 2+1+1 = 4 такти відповіді.",
      "Порада: покажіть Sweet Home Chicago. Порахуйте 12 тактів разом. Студент має почути, де I, де IV, де V.",
      "Студенти плутають 12-тактовий блюз з 8-тактовим. 8-тактовий: 4+2+2 (без V). 12-тактовий: 4+2+2+2+1+1. Порахуйте разом."
    ],
    deviations: [
      { track: "The Thrill Is Gone (B.B. King, 1969)", explanation: "Мінорний блюз замість мажорного. Та сама 12-тактова форма, але з мінорними акордами. Показує: форма працює в обох ладах." },
      { track: "Blues for Alice (Charlie Parker, 1951)", explanation: "Джазовий блюз з ускладненою гармонією. Замість C7-F7-G7 має II-V каданси. Форма 12 тактів зберігається, але акорди зовсім інші." },
      { track: "Johnny B. Goode (Chuck Berry, 1958)", explanation: "Quick change — IV на другому такті. Класичний 12-bar blues з одним відхиленням. Показує: мала зміна створює великий ефект." },
      { track: "Pride and Joy (Stevie Ray Vaughan, 1983)", explanation: "12-bar blues з гітарними філами між вокальними фразами. Форма та ж, але текстура щільніша. Показує: форма — це каркас, не тюрма." }
    ]
  },

  // ============================================================
  // Process-Based Minimal (Contemporary)
  // ============================================================
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
    conclusion: "Процесуальна форма робить час чутним, дозволяючи правилу стати музикою.",

    sectionKnowledge: [
      secKnowledge("Cell",
        "Представити мінімальний музичний матеріал — клітину, яка буде трансформуватися.",
        "Клітина — це насіння. Слухач має запам'ятати її в найпростішій формі, щоб відчути подальші зміни.",
        "Клітина занадто складна — слухач не може відстежити зміни. Клітина без ідентичності — немає що трансформувати.",
        "У формах, де матеріал представлений одразу в повному обсязі (не мінімальних).",
        "«Чи може слухач запам'ятати цю клітину після 16 тактів?»",
        ["Steve Reich — Music for 18 Musicians, Pulses (1976)", "Philip Glass — Einstein on the Beach, Knee Play 1 (1976)"]
      ),
      secKnowledge("Layering",
        "Додавати нові шари до клітини, збільшуючи щільність без зміни основного матеріалу.",
        "Лейерінг — це накопичення. Слухач відчуває, як музика «росте», хоча основний матеріал не змінюється.",
        "Занадто швидке нашарування — слухач не встигає відчути кожен новий шар. Занадто повільне — втрачається увага.",
        "Коли процес — субтрактивний (видалення, а не додавання).",
        "«Чи відчуває слухач новий шар як подію, чи він губиться в загальній щільності?»",
        ["Steve Reich — Music for 18 Musicians, Section III (1976)", "Brian Eno — Music for Airports 1/1 (1978)"]
      ),
      secKnowledge("Process shift",
        "Застосувати правило трансформації — фазування, канон, аугментацію.",
        "Процес-шифт — це момент, коли слухач усвідомлює, що «тут щось змінюється». Це не контраст, а поступове усвідомлення.",
        "Процес нечіткий — слухач не розуміє, що змінилося. Процес надто швидкий — втрачається відчуття поступовості.",
        "У творах, де єдиний процес триває всю форму (не перемикається).",
        "«Чи помітить слухач зміну, якщо відвернеться на 30 секунд?»",
        ["Steve Reich — Piano Phase (1967)", "Philip Glass — Glassworks, Opening (1982)"]
      ),
      secKnowledge("Accumulation",
        "Досягти максимальної щільності — кульмінація процесу.",
        "Акумуляція — це клімакс. Слухач відчуває «прибуття» після довгого накопичення, хоча жодної нової теми не з'явилося.",
        "Акумуляція без достатнього процесу — просто шум. Занадто довга — слухач втрачає відчуття напрямку.",
        "У процесах, де кульмінація — це не щільність, а мінімальність (після довгого накопичення).",
        "«Чи звучить ця точка як «найбільше», навіть якщо матеріал той самий?»",
        ["Steve Reich — Music for 18 Musicians, Section XI (1976)", "John Adams — Shaker Loops, Hymning Slews (1978)"]
      ),
      secKnowledge("Dissolution",
        "Видалити шари, повертаючись до початкової клітини.",
        "Дисолюція — це завершення подорожі. Слухач чує клітину тепер по-новому, тому що чув її трансформацію.",
        "Дисолюція занадто швидка — слухач не встигає усвідомити пройдений шлях. Занадто повільна — втрачається інтерес.",
        "У творах, які закінчуються на максимальній щільності (без повернення).",
        "«Чи звучить клітина по-новому після того, як ми почули її трансформацію?»",
        ["Steve Reich — Different Trains, Europe During the Rain (1988)", "Philip Glass — Koyaanisqatsi, Prophecies (1982)"]
      )
    ],

    failureAnalysis: [
      failureEntry("Cell", "Клітина не представлена достатньо", [
        "Слухач не має бази для відстеження змін",
        "Подальші трансформації не відчуваються як зміни",
        "Форма втрачає єдність — шари здаються випадковими"
      ]),
      failureEntry("Layering", "Нашарування надто швидке або повільне", [
        "При надто швидкому: слухач не встигає засвоїти кожен шар",
        "При надто повільному: слухач втрачає інтерес до процесу",
        "Без чіткого порядку нашарування: хаос замість системи"
      ]),
      failureEntry("Process shift", "Процес нечіткий або відсутній", [
        "Форма втрачає напрямок — стає набором шарів без розвитку",
        "Слухач не відчуває змін — «нічого не відбувається»",
        "Трансформація не усвідомлюється — процесуальна форма не працює"
      ]),
      failureEntry("Accumulation", "Кульмінація не досягнута", [
        "Найвища точка не відчувається — форма не має піку",
        "Слухач не отримує винагороди за увагу до процесу",
        "Енергетичний арк залишається плоским"
      ]),
      failureEntry("Dissolution", "Повернення не відбувається", [
        "Форма не закривається — слухач не усвідомлює пройдений шлях",
        "Клітина не звучить по-новому — трансформація не осмислюється",
        "Відсутність архітектурного завершення"
      ])
    ],

    variants: [
      variant("Additive (лише додавання)",
        "Райх, ранні мінімалісти",
        "Шари додаються, але ніколи не видаляються. Форма закінчується на максимальній щільності.",
        "Плюс: проста логіка. Мінус: немає архітектурної арки повернення."
      ),
      variant("Subtractive (лише видалення)",
        "Деякі твори Фелдмана",
        "Починається з максимальної щільності, шари видаляються до мінімуму.",
        "Плюс: драматичний початок. Мінус: ризик втрати енергії до кінця."
      ),
      variant("Cyclic (фазування)",
        "Райх — Piano Phase, Clapping Music",
        "Два ідентичні патерни зсуваються відносно один одного, створюючи ілюзію нових патернів.",
        "Плюс: мінімальний матеріал — максимальна варіативність. Мінус: потребує уважного слухання."
      )
    ],

    canonicalTracks: [
      track("Music for 18 Musicians, Pulses", "Steve Reich", 1976,
        "11 секцій, кожна побудована на циклічному процесі. Монументальний твір мінімалізму.",
        [
          { name: "Pulses (cell)", time: "0:00–2:00" },
          { name: "Section I: layering", time: "2:01–6:00" },
          { name: "Section II: process", time: "6:01–10:00" },
          { name: "Section III: accumulation", time: "10:01–14:00" },
          { name: "Section IV–XI: dissolution", time: "14:01–20:00" },
          { name: "Return to pulses", time: "20:01–22:00" }
        ], "minimalist", { segmentation: 75, repetition: 90, contrast: 50, directionality: 85 }
      ),
      track("Piano Phase", "Steve Reich", 1967,
        "Еталон фазування. Два піаністи — той самий патерн, один прискорюється.",
        [
          { name: "Phase 1 (cell)", time: "0:00–1:00" },
          { name: "Phase transition 1", time: "1:01–2:30" },
          { name: "Phase 2 (new pattern)", time: "2:31–4:00" },
          { name: "Phase transition 2", time: "4:01–5:30" },
          { name: "Phase 3 (further shift)", time: "5:31–7:00" },
          { name: "Return to unison", time: "7:01–8:00" }
        ], "minimalist", { segmentation: 60, repetition: 95, contrast: 30, directionality: 75 }
      ),
      track("Einstein on the Beach, Knee Play 1", "Philip Glass", 1976,
        "Адитивний процес Glass: короткі патерни поступово розширюються додаванням нот.",
        [
          { name: "Cell (solo voice)", time: "0:00–1:00" },
          { name: "Organ enters (layer)", time: "1:01–2:00" },
          { name: "Additive process", time: "2:01–4:00" },
          { name: "Accumulation", time: "4:01–6:00" },
          { name: "Dissolution", time: "6:01–8:00" }
        ], "contemporary", { segmentation: 70, repetition: 85, contrast: 40, directionality: 80 }
      ),
      track("Music for Airports 1/1", "Brian Eno", 1978,
        "Повільний амбієнтний процес. Поступове додавання і видалення шарів.",
        [
          { name: "Cell (piano loop)", time: "0:00–0:30" },
          { name: "Layer 1 (voice)", time: "0:31–1:30" },
          { name: "Layer 2 (synth)", time: "1:31–3:00" },
          { name: "Full texture", time: "3:01–5:00" },
          { name: "Layers fade", time: "5:01–7:00" },
          { name: "Return to cell", time: "7:01–8:00" }
        ], "ambient", { segmentation: 70, repetition: 85, contrast: 30, directionality: 60 }
      ),
      track("Different Trains, Europe During the Rain", "Steve Reich", 1988,
        "Процесуальна форма з семплованими голосами. Тема + поступова трансформація.",
        [
          { name: "Theme (cell)", time: "0:00–1:30" },
          { name: "String layering", time: "1:31–3:30" },
          { name: "Process: speed change", time: "3:31–5:30" },
          { name: "Accumulation", time: "5:31–7:30" },
          { name: "Dissolution", time: "7:31–9:00" }
        ], "contemporary", { segmentation: 75, repetition: 80, contrast: 55, directionality: 80 }
      ),
      track("Shaker Loops, Hymning Slews", "John Adams", 1978,
        "Мінімалізм з романтичним звучанням. Смичковий оркестр, поступове прискорення.",
        [
          { name: "Cell (shaking)", time: "0:00–0:30" },
          { name: "Layering (strings)", time: "0:31–2:00" },
          { name: "Process: acceleration", time: "2:01–4:00" },
          { name: "Accumulation", time: "4:01–6:00" },
          { name: "Dissolution", time: "6:01–7:30" },
          { name: "Return", time: "7:31–8:30" }
        ], "contemporary", { segmentation: 70, repetition: 85, contrast: 40, directionality: 75 }
      ),
      track("In C", "Terry Riley", 1964,
        "Основа всього мінімалізму. 53 фрази, кожен музикант грає в довільному темпі. Чистий процес як форма.",
        [
          { name: "Cell (pulse)", time: "0:00–1:00" },
          { name: "Phases 1-10", time: "1:01–5:00" },
          { name: "Phases 11-25", time: "5:01–12:00" },
          { name: "Phases 26-40", time: "12:01–20:00" },
          { name: "Phases 41-53 (climax)", time: "20:01–25:00" },
          { name: "Return to pulse", time: "25:01–27:00" }
        ], "minimalist", { segmentation: 50, repetition: 95, contrast: 40, directionality: 70 }
      ),
      track("Clapping Music", "Steve Reich", 1972,
        "Чистий фазовий процес. Двоє плескають один патерн — один зміщується. Мінімум матеріалу, максимум варіативності.",
        [
          { name: "Phase 0 (unison)", time: "0:00–0:30" },
          { name: "Phase shift 1", time: "0:31–1:00" },
          { name: "Phase pattern 1", time: "1:01–1:30" },
          { name: "Phase shift 2", time: "1:31–2:00" },
          { name: "Phase pattern 2", time: "2:01–2:30" },
          { name: "Phase shifts 3-11", time: "2:31–4:00" },
          { name: "Return to unison", time: "4:01–4:30" }
        ], "minimalist", { segmentation: 50, repetition: 95, contrast: 20, directionality: 65 }
      ),
      track("Glassworks, Opening", "Philip Glass", 1982,
        "Адитивний процес: патерн розширюється додаванням нот. Показує: процес може бути емоційним.",
        [
          { name: "Cell (piano)", time: "0:00–0:30" },
          { name: "Additive process", time: "0:31–1:30" },
          { name: "Full texture", time: "1:31–3:00" },
          { name: "Sustain", time: "3:01–5:00" },
          { name: "Dissolution", time: "5:01–6:15" }
        ], "contemporary", { segmentation: 70, repetition: 85, contrast: 35, directionality: 75 }
      ),
      track("The Hours, The Poet Acts", "Philip Glass", 2002,
        "Кіносаундтрек — мінімалістичний процес у форматі фільму. Повторюваний патерн + нашарування струнних.",
        [
          { name: "Cell (piano)", time: "0:00–0:30" },
          { name: "String layer enters", time: "0:31–1:00" },
          { name: "Full orchestral texture", time: "1:01–2:00" },
          { name: "Climax", time: "2:01–3:00" },
          { name: "Dissolution (return to piano)", time: "3:01–3:45" }
        ], "film", { segmentation: 70, repetition: 85, contrast: 30, directionality: 60 }
      )
    ],

    diagnosis: [
      "Чи може слухач описати правило трансформації після прослуховування?",
      "Чи відстежує слухач зміни, навіть якщо основна тема не змінюється?",
      "Чи відчувається кульмінація як результат процесу, а не як окрема подія?",
      "Чи звучить клітина по-новому після трансформації?",
      "Чи достатньо часу має слухач, щоб засвоїти кожен новий шар?",
      "Чи відчувається форма як єдиний процес, а не набір окремих секцій?"
    ],

    genreTransfer: [
      genreTransfer("Techno", "Loop + поступове нашарування/видалення.", "Техно-треки часто використовують процесуальну логіку: мінімальні зміни з часом."),
      genreTransfer("Ambient", "Повільне нашарування і розчинення.", "Амбієнт — це природне середовище для процесуальної форми."),
      genreTransfer("Electronic / IDM", "Фазування, ґліч-процеси.", "Електронна музика дозволяє створювати процеси, неможливі в акустичній."),
      genreTransfer("Jazz", "Модальний джаз: повторення патерну + поступові зміни.", "Miles Davis — Kind of Blue використовує модальний процес як форму."),
      genreTransfer("Film", "Мінімальний саундтрек: повторення + нашарування.", "Саундтреки використовують процесуальну логіку для створення напруги без тематичних змін.")
    ],
    dawExercise: [
      "Візьми один короткий патерн (2-4 такти) — ритмічну або мелодійну клітину.",
      "Створи правило трансформації: «кожні 4 повтори додавати один новий звук».",
      "Застосуй правило: запиши 32 такти, клітина повторюється, правило змінює.",
      "Після 24 тактів почни видаляти шари у зворотному порядку.",
      "Перевір: чи може слухач описати правило після прослуховування?"
    ],
    listeningExercise: [
      "Послухай Piano Phase (Reich). Що змінюється — ноти чи їх зміщення одна відносно одної?",
      "Послухай Music for 18 Musicians (Reich). Скільки разів повторюється клітина до зміни?",
      "Послухай Glassworks, Opening (Glass). Як додаються ноти — по одній чи групами?",
      "Послухай Music for Airports 1/1 (Eno). Чи відчувається форма без секцій?"
    ],
    comparisons: [
      { with: "Club Arc", difference: "Club Arc використовує секції (білд, дроп). Process-Based — ПРАВИЛО: форма з процесу, не з розташування секцій." },
      { with: "Verse-Chorus", difference: "VC потребує контрасту між секціями. Process-Based працює БЕЗ контрасту — зміна поступова, без стрибків." },
      { with: "Drone", difference: "Drone статичний — тон не змінюється. Process-Based динамічний — матеріал трансформується за правилом. Обидва уникають традиційних секцій." },
      { with: "Through-Composed", difference: "TC кожного разу дає новий матеріал. Process-Based трансформує той самий матеріал. TC = різноманітність; Process = трансформація." }
    ],
    glossary: [
      { term: "Cell", definition: "Найкоротший музичний фрагмент (2-4 ноти або такти). Будівельний блок процесуальної форми. Повторюється з поступовими змінами." },
      { term: "Process Rule", definition: "Правило трансформації: «кожні 4 повтори додавати один звук», «кожні 8 тактів зсувати фазу на одну шістнадцяту»." },
      { term: "Phase/Phasing", definition: "Два ідентичні патерни, що звучать одночасно, але один повільно зсувається відносно іншого. Створює ілюзію нових патернів." },
      { term: "Additive Process", definition: "Поступове додавання елементів до початкової клітини. Кожен цикл додає нову ноту або шар." },
      { term: "Subtractive Process", definition: "Зворотний до адитивного. Форма починається з максимальної щільності, поступово видаляє елементи." },
      { term: "Perceptible Change", definition: "Зміна має бути достатньо повільною, щоб слухач відстежував процес, але достатньо швидкою, щоб не нудьгувати." },
      { term: "Return to Cell", definition: "Повернення до початкової клітини в кінці форми. Слухач чує, наскільки змінився матеріал." }
    ],
    teacherNotes: [
      "Найчастіша помилка: студент думає, що process-based = без змін. Насправді process-based = мінімальні зміни з максимальним ефектом. Клітина майже не змінюється; сприйняття змінюється.",
      "Аналогія: process-based форма — це спостереження за ростом рослини. Кожен кадр майже ідентичний попередньому, але через годину рослина зовсім інша.",
      "Часте питання: «Де тут форма? Я чую тільки повторення.» Відповідь: форма — в ПРОЦЕСІ, не в секціях. Rule = form.",
      "Порада: покажіть Piano Phase. Попросіть студента слухати тільки лівий канал, потім тільки правий. Коли два канали збігаються — це форма.",
      "Студенти плутають process-based з loop-based. Loop-based: той самий луп, ніяких змін. Process-based: той самий луп, поступові зміни."
    ],
    deviations: [
      { track: "In C (Terry Riley, 1964)", explanation: "53 фрази, але немає жорсткого правила. Кожен музикант вирішує, коли переходити до наступної фрази. Процес — колективний, не індивідуальний." },
      { track: "Music for Airports 1/1 (Brian Eno, 1978)", explanation: "Настільки повільний процес, що зміни майже невідчутні. Форма — це текстура, а не події. Працює як ambient: музика може бути фоном." },
      { track: "Shaker Loops (John Adams, 1978)", explanation: "Процес з романтичним звучанням. Зміни швидші, емоційніші, ніж у Reich/Glass. Показує: process-based не обов'язково холодний." },
      { track: "Glassworks, Opening (Philip Glass, 1982)", explanation: "Адитивний процес, але з емоційним наростанням. Форма: клітина → нашарування → повна текстура → розчинення. Показує: процес може бути катарсичним." }
    ],
    families: [
  {
    id: "minimalism",
    name: "Мінімалізм",
    bpm: "60–140",
    structuralProfile: "Клітина (cell) → нашарування (layering) → поступова трансформація за правилом (process rule). Форма визначається правилом, а не секціями.",
    energyProfile: "Рівне, гіпнотичне наростання. Відсутній різкий дроп чи кульмінація — натомість поступовий прихід до піку і зворотне розчинення.",
    canonicalTracks: [
      "Steve Reich — Music for 18 Musicians (1976)",
      "Philip Glass — Einstein on the Beach (1976)",
      "Terry Riley — In C (1964)",
      "Steve Reich — Piano Phase (1967)",
      "John Adams — Shaker Loops (1978)"
    ],
    commonMistakes: [
      "Студент вводить занадто багато нового матеріалу — Process-Based потребує мінімального матеріалу і максимальної трансформації.",
      "Правило трансформації нечітке або непослідовне — слухач не може відчути процес.",
      "Занадто швидке нашарування: слухач не встигає засвоїти кожен шар."
    ],
    distinguishingFeatures: [
      "Форма = правило. Клітина залишається, змінюється тільки відношення між елементами.",
      "Відсутній традиційний мелодичний розвиток — є трансформація фази або ритму.",
      "Тривалість (20–90 хв) є частиною музичного досвіду, не недоліком.",
      "Слухач відстежує процес, а не запам'ятовує мелодію."
    ]
  },
  {
    id: "loop-production",
    name: "Лупова продакшн",
    bpm: "60–180",
    structuralProfile: "Базовий луп (2–8 тактів) → поступове нашарування нових лупів → текстурні зміни через автоматизацію фільтрів, ефектів. Мікрозміни формують макроструктуру.",
    energyProfile: "Поступова щільність, контрольована автоматизацією. Відсутній різкий контраст — натомість тонкі зсуви уваги.",
    canonicalTracks: [
      "Brian Eno — Discreet Music (1975)",
      "William Basinski — Disintegration Loops (2002)",
      "Oval — 94diskont (1995)",
      "Alva Noto — Unitxt (2008)"
    ],
    commonMistakes: [
      "Луп надто складний для першого прослуховування — складність має наростати, а не бути одразу.",
      "Автоматизація надто різка — губиться відчуття безшовного процесу.",
      "Відсутність арки: нашарування без кульмінації і розчинення."
    ],
    distinguishingFeatures: [
      "Технологія є соавтором — DAW або модульний синтезатор формує структуру.",
      "Мікровідхилення лупів (деградація, дрейф) є формотворчим елементом.",
      "Форма може бути генерована, а не скомпонована вручну.",
      "Слухач сприймає форму як текстуру, не як послідовність подій."
    ]
  },
  {
    id: "generative",
    name: "Генеративна музика",
    bpm: "n/a (алгоритм)",
    structuralProfile: "Алгоритм (правила, ймовірності або клітинні автомати) генерує матеріал у реальному часі або офлайн. Форма непередбачувана, але керована параметрами.",
    energyProfile: "Варіативна — енергетичний профіль залежить від налаштувань алгоритму. Може бути статичним (Eno) або динамічним (Autechre).",
    canonicalTracks: [
      "Brian Eno — Ambient 1: Music for Airports (1978)",
      "Autechre — Confield (2001)",
      "Aphex Twin — Drukqs (2001)",
      "Ryoji Ikeda — Test Pattern (2008)"
    ],
    commonMistakes: [
      "Алгоритм надто детермінований — результат звучить як звичайна компонована музика.",
      "Параметри не налаштовані: алгоритм генерує хаос без будь-якої форми.",
      "Студент думає, що генеративна музика = випадкові звуки. Насправді — це контрольована система з непередбачуваним результатом."
    ],
    distinguishingFeatures: [
      "Кожне прослуховування унікальне — алгоритм генерує нову версію.",
      "Композитор визначає правила, а не ноти.",
      "Форма може тривати нескінченно (встановлена система).",
      "Критерій успіху: слухач відчуває порядок і несподіванку одночасно."
    ]
  }
]
  },

        // ============================================================
        // Theme & Variations
        // ============================================================
        {
          id: "theme-variations",
          title: "Theme & Variations",
          description: "Тема викладається потім видозмінюється в серії варіацій. Кожна варіація зберігає впізнаваність теми але змінює один або кілька параметрів.",
          generatedBy: ["segmentation", "repetition", "contrast"],
          genre: "classical",
          tempo: "varies",
          difficulty: "medium",
          sections: [
            { name: "Theme", bars: 16, concept: "segmentation", function: "Представити тему, закласти ідентичність" },
            { name: "Var 1 — Rhythm", bars: 16, concept: "contrast", function: "Змінити ритмічний малюнок" },
            { name: "Var 2 — Melody", bars: 16, concept: "contrast", function: "Орнаментувати мелодію" },
            { name: "Var 3 — Harmony", bars: 16, concept: "contrast", function: "Змінити гармонізацію" },
            { name: "Var 4 — Character", bars: 16, concept: "contrast", function: "Змінити характер/темп" },
            { name: "Coda", bars: 8, concept: "segmentation", function: "Завершити варіаційний цикл" }
          ],
          conclusion: "Theme & Variations навчає: ідентичність зберігається через зміни. Слухач впізнає тему навіть коли змінено ритм, гармонію, тембр і характер.",
          sectionKnowledge: [
            secKnowledge("Theme", "Представити тему — музичну ідентичність, яка буде видозмінюватися.", "Тема — це «обличчя» твору. Слухач має запам'ятати її в найпростішій формі, щоб відчути всі подальші трансформації.", "Тема занадто складна — слухач не може запам'ятати оригінал. Тема занадто проста — варіації нудні.", "У варіаціях на відому тему (народна пісня, хорал), де тема вже знайома слухачеві.", "«Чи впізнає слухач цю тему після двох варіацій?»", ["Mozart — Variations on 'Ah vous dirai-je, Maman' K.265 (1785)", "Beethoven — Diabelli Variations Op.120 (1823)"]),
            secKnowledge("Var 1 — Rhythm", "Змінити ритмічний малюнок, зберігаючи мелодію та гармонію.", "Ритмічна варіація — найлегша для сприйняття. Слухач чує знайому мелодію в новому ритмі — ідентичність збережена.", "Ритм змінений надто кардинально — тема невпізнавана. Ритм майже не змінений — варіація не відчувається.", "Коли варіація починається з гармонійної зміни (пізні варіації).", "«Чи впізнає слухач тему під новим ритмом?»", ["Mozart — Variations K.265, Var 1 (1785)", "Bach — Goldberg Variations, Var 1 (1741)"]),
            secKnowledge("Var 2 — Melody", "Орнаментувати мелодію — додати пасажі, трілі, форшлаги.", "Мелодична варіація показує: основу можна прикрасити, не змінюючи суті. Слухач чує ту саму гармонію в новому «вбранні».", "Орнаментація занадто густа — мелодія втрачає форму. Орнаментація занадто мінімальна — не відчувається як варіація.", "У характерних варіаціях, де зміна жанру важливіша за орнаментацію.", "«Чи просвічує оригінальна мелодія крізь орнаментацію?»", ["Mozart — Variations K.265, Var 4 (1785)", "Beethoven — Diabelli Variations, Var 5 (1823)"]),
            secKnowledge("Var 3 — Harmony", "Змінити гармонізацію — перейти в мінор/мажор, змінити акорди.", "Гармонійна варіація — найсильніша зміна. Перехід у мінор змінює емоційний колір, але структура залишається.", "Гармонія змінена надто радикально — тема втрачає зв'язок з оригіналом. Гармонія без змін — не варіація.", "У варіаціях, де характер важливіший за гармонійну подорож.", "«Чи зберігається тональний центр? Чи впізнається тема попри нові акорди?»", ["Mozart — Variations K.265, Var 8 (minor) (1785)", "Rachmaninoff — Rhapsody on a Theme of Paganini, Var 18 (1934)"]),
            secKnowledge("Var 4 — Character", "Змінити характер — темп, артикуляцію, жанр.", "Характерна варіація — це найсміливіша зміна. Та сама тема може звучати як менует, марш, фуга або вальс.", "Характер нечіткий — слухач не розуміє, що змінилося. Характер занадто екстремальний — варіація звучить як пародія.", "Коли варіацій менше чотирьох — кожна має бути суттєвою.", "«Чи змінює ця варіація сприйняття теми? Чи чує слухач тему по-новому?»", ["Beethoven — Diabelli Variations, Var 20 (1823)", "Elgar — Enigma Variations, Var 9 'Nimrod' (1899)"]),
            secKnowledge("Coda", "Завершити варіаційний цикл — підсумувати, повернутися до теми.", "Кода — це архітектурне завершення. Після серії варіацій слухач потребує повернення до вихідної точки, щоб усвідомити пройдений шлях.", "Кода занадто довга — втрачається імпульс після останньої варіації. Кода без повернення до теми — форма не закривається.", "У варіаційних циклах, де остання варіація сама виконує функцію коди.", "«Чи відчувається кода як завершення подорожі, а не просто як ще одна варіація?»", ["Mozart — Variations K.265, Var 12 (1785)", "Bach — Goldberg Variations, Aria da capo (1741)"])
          ],
          failureAnalysis: [
            failureEntry("Theme", "Тема не представлена достатньо", ["Слухач не має бази для порівняння варіацій", "Варіації не відчуваються як зміни — немає «оригіналу»", "Форма втрачає єдність — кожна варіація звучить як окрема п'єса"]),
            failureEntry("Var 1 — Rhythm", "Ритмічна варіація видалена", ["Менше контрасту між темою і першою варіацією", "Слухач отримує менше «входів» у варіаційну логіку", "Перехід від теми одразу до мелодичної варіації — різкий"]),
            failureEntry("Var 2 — Melody", "Мелодична варіація видалена", ["Втрачено найбільш очевидний тип варіації", "Слухач не отримує прикладу прикрашання теми", "Форма стає менш різноманітною"]),
            failureEntry("Var 3 — Harmony", "Гармонійна варіація видалена", ["Втрачено емоційний контраст (мажор/мінор)", "Варіаційний цикл стає плоским — одна тональність", "Слухач не отримує гармонійної подорожі"]),
            failureEntry("Var 4 — Character", "Характерна варіація видалена", ["Втрачено найсміливіший контраст", "Варіації стають передбачуваними — всі одного типу", "Форма втрачає несподіванку"]),
            failureEntry("Coda", "Кода видалена", ["Форма не закривається — слухач чекає продовження", "Остання варіація звучить як фінал, але не є ним", "Архітектурна арка не завершена"])
          ],
          variants: [
            variant("Character Variations", "Романтизм, Elgar, Rachmaninoff", "Кожна варіація — новий характер, жанр, настрій. Мінімальний зв'язок з темою.", "Плюс: макс. різноманітність. Мінус: ризик втрати єдності циклу."),
            variant("Strict / Ornamental", "Класицизм, Mozart, Haydn", "Тема чітко впізнавана в кожній варіації. Зміни — в орнаментації, ритмі, текстурі.", "Плюс: єдність циклу. Мінус: менше контрасту."),
            variant("Free / Fantasy Variations", "Пізній Beethoven, Romantic", "Варіації далеко відходять від теми — ледь впізнавані. Кожна варіація майже самостійна.", "Плюс: максимальна свобода. Мінус: слухач може не відчути форму як варіаційну.")
          ],
          canonicalTracks: [
            track("Variations on 'Ah vous dirai-je, Maman' K.265", "W. A. Mozart", 1785, "Еталонні варіації. 12 варіацій на тему «Twinkle Twinkle». Кожна варіація — окремий характер.", [
              { name: "Theme", time: "0:00–0:30" },
              { name: "Var 1 (rhythm)", time: "0:31–1:00" },
              { name: "Var 4 (melody)", time: "1:31–2:00" },
              { name: "Var 8 (minor)", time: "3:01–3:30" },
              { name: "Var 12 (coda)", time: "5:01–6:00" }
            ], "classical", { segmentation: 90, repetition: 75, contrast: 80, directionality: 65 }),
            track("Diabelli Variations Op.120", "L. van Beethoven", 1823, "33 варіації на вальсову тему Diabelli. Геніальна трансформація простої теми. Фуга як кульмінація.", [
              { name: "Theme", time: "0:00–0:30" },
              { name: "Var 1-10", time: "0:31–5:00" },
              { name: "Var 11-20", time: "5:01–12:00" },
              { name: "Var 21-30", time: "12:01–20:00" },
              { name: "Var 31-33 (fugue)", time: "20:01–25:00" }
            ], "classical", { segmentation: 85, repetition: 70, contrast: 90, directionality: 80 }),
            track("Rhapsody on a Theme of Paganini Op.43", "S. Rachmaninoff", 1934, "24 варіації. Var 18 — інверсія теми (перевернута мелодія). Віртуозність + лірика.", [
              { name: "Theme", time: "0:00–0:30" },
              { name: "Var 1-6", time: "0:31–3:00" },
              { name: "Var 7-12", time: "3:01–6:00" },
              { name: "Var 13-18", time: "6:01–10:00" },
              { name: "Var 19-24", time: "10:01–15:00" }
            ], "classical", { segmentation: 85, repetition: 65, contrast: 85, directionality: 85 }),
            track("Variations on a Theme of Corelli Op.42", "S. Rachmaninoff", 1931, "20 варіацій на тему Corelli (La Folia). Меланхолійний цикл.", [
              { name: "Theme", time: "0:00–0:30" },
              { name: "Var 1-7", time: "0:31–3:00" },
              { name: "Var 8-14", time: "3:01–6:00" },
              { name: "Var 15-20", time: "6:01–9:00" },
              { name: "Coda", time: "9:01–10:00" }
            ], "classical", { segmentation: 80, repetition: 70, contrast: 75, directionality: 75 }),
            track("The Young Person's Guide to the Orchestra Op.34", "B. Britten", 1946, "Тема Purcell + 13 варіацій по інструментах оркестру. Педагогічна функція + форма.", [
              { name: "Theme (Purcell)", time: "0:00–0:45" },
              { name: "Var 1 (woodwinds)", time: "0:46–2:00" },
              { name: "Var 5 (brass)", time: "2:01–3:30" },
              { name: "Var 9 (strings)", time: "3:31–5:00" },
              { name: "Fugue (finale)", time: "5:01–8:00" }
            ], "classical", { segmentation: 85, repetition: 65, contrast: 80, directionality: 80 }),
            track("Enigma Variations Op.36", "E. Elgar", 1899, "14 варіацій-портретів друзів. Кожна варіація — людина. Var 9 'Nimrod' — найвідоміша.", [
              { name: "Theme", time: "0:00–1:00" },
              { name: "Var 1-4", time: "1:01–4:00" },
              { name: "Var 5-9", time: "4:01–9:00" },
              { name: "Var 10-14", time: "9:01–14:00" },
              { name: "Finale", time: "14:01–16:00" }
            ], "classical", { segmentation: 85, repetition: 60, contrast: 85, directionality: 75 }),
            track("Goldberg Variations BWV 988", "J. S. Bach", 1741, "30 варіацій. Аria + 9 канонів (кожен третій) + жанрові варіації. Абсолютний шедевр.", [
              { name: "Aria", time: "0:00–1:30" },
              { name: "Var 1-10", time: "1:31–8:00" },
              { name: "Var 11-20", time: "8:01–16:00" },
              { name: "Var 21-30", time: "16:01–25:00" },
              { name: "Aria da capo", time: "25:01–26:30" }
            ], "baroque", { segmentation: 90, repetition: 70, contrast: 85, directionality: 80 }),
            track("Piano Sonata No.11 K.331, I", "W. A. Mozart", 1783, "Andante grazioso з варіаціями. Тема + 6 варіацій. Елегантний класицизм.", [
              { name: "Theme", time: "0:00–0:45" },
              { name: "Var 1-2", time: "0:46–2:15" },
              { name: "Var 3-4", time: "2:16–3:45" },
              { name: "Var 5 (minor)", time: "3:46–4:30" },
              { name: "Var 6 (coda)", time: "4:31–5:30" }
            ], "classical", { segmentation: 85, repetition: 75, contrast: 75, directionality: 70 }),
            track("String Quartet Op.76 No.3 'Emperor', II", "J. Haydn", 1797, "Варіації на імператорський гімн ('Gott erhalte'). 4 варіації — кожна в іншому інструменті.", [
              { name: "Theme", time: "0:00–0:45" },
              { name: "Var 1 (violin I)", time: "0:46–1:30" },
              { name: "Var 2 (violin II)", time: "1:31–2:15" },
              { name: "Var 3 (cello)", time: "2:16–3:00" },
              { name: "Var 4 (full quartet)", time: "3:01–4:00" }
            ], "classical", { segmentation: 80, repetition: 80, contrast: 70, directionality: 65 }),
            track("Symphony No.5 Op.67, II", "L. van Beethoven", 1808, "Andante con moto. Подвійні варіації — дві теми чергуються.", [
              { name: "Theme A", time: "0:00–1:00" },
              { name: "Theme B", time: "1:01–2:00" },
              { name: "Var A1", time: "2:01–3:00" },
              { name: "Var B1", time: "3:01–4:00" },
              { name: "Coda", time: "4:01–5:00" }
            ], "classical", { segmentation: 85, repetition: 75, contrast: 80, directionality: 80 })
          ],
          diagnosis: [
            "Чи впізнає слухач тему в кожній варіації?",
            "Чи достатньо кожна варіація відрізняється від попередньої?",
            "Чи є прогресія: від простіших варіацій до складніших?",
            "Чи має цикл арку — початок, розвиток, кульмінацію, завершення?",
            "Чи не занадто багато варіацій? Чи не занадто мало?",
            "Чи працює кожна варіація незалежно?",
            "Чи чує слухач тему по-новому після останньої варіації?"
          ],
          genreTransfer: [
            genreTransfer("Pop / Remix", "Семпл + варіації — ремікс як варіаційна форма.", "Оригінальний трек = тема. Ремікс = варіація. Різні ремікси = різні варіації."),
            genreTransfer("Jazz", "Theme + solos — кожне соло = варіація теми.", "Джазові соло — це варіації на гармонічну схему теми."),
            genreTransfer("Electronic", "Loop + ефекти — обробка як варіація.", "Один loop = тема. Фільтрація, delay, реверберація = варіації."),
            genreTransfer("Film", "Лейтмотив + варіації в різних сценах.", "Тема персонажа змінюється в різних емоційних контекстах."),
            genreTransfer("Rock", "Riff + різні обробки, позиції, тембри.", "Гітарний риф у різних варіаціях — куплет, приспів, соло.")
          ],
          dawExercise: [
            "Напиши просту тему (4 такти, 2-4 акорди).",
            "Створи першу варіацію: зміни ритм, залиш мелодію.",
            "Створи другу варіацію: орнаментуй мелодію пасажами.",
            "Створи третю варіацію: зміни гармонію (мажор → мінор).",
            "Створи четверту варіацію: зміни характер (темп, жанр).",
            "Додай коду — коротке повернення до теми."
          ],
          listeningExercise: [
            "Послухай Mozart K.265. Яка варіація тобі подобається найбільше? Чому?",
            "Послухай Var 18 з Rhapsody on a Theme of Paganini. Чи впізнаєш тему, хоча вона інвертована?",
            "Послухай Elgar — Enigma Variations. Var 9 'Nimrod'. Чи чуєш тему під повільною ліричною мелодією?",
            "Послухай Goldberg Variations. Як кожна третя варіація є каноном? Як Bach будує форму?"
          ],
          comparisons: [
            { with: "Rondo", difference: "Rondo повертає тему ІДЕНТИЧНОЮ (A-B-A-C-A). Theme & Variations ЗМІНЮЄ тему. Rondo = A-A-A. T&V = A-A'-A''-A'''." },
            { with: "Sonata-Allegro", difference: "Sonata — драматична (конфлікт двох тем). T&V — медитативна (одна тема в різних проявах). Sonata — подорож; T&V — розглядання." },
            { with: "Head-Solo-Head", difference: "В HSH тема — незмінна рамка для соло. В T&V тема сама є матеріалом варіацій. HSH — виконавський процес; T&V — композиційний." },
            { with: "12-Bar Blues", difference: "12-Bar Blues — незмінний гармонічний цикл, де варіює лише зміст (мелодія, текст). T&V змінює саму тему структурно." }
          ],
          glossary: [
            { term: "Theme", definition: "Основна музична ідея, яка буде видозмінюватися у варіаціях. Має бути простою і впізнаваною." },
            { term: "Variation", definition: "Видозмінена версія теми. Зберігає впізнаваність, але змінює один або кілька параметрів (ритм, гармонію, тембр, характер)." },
            { term: "Ornamentation", definition: "Прикрашання мелодії додатковими нотами (пасажі, трілі, форшлаги). Один із найпростіших типів варіації." },
            { term: "Character Variation", definition: "Варіація, яка змінює характер/жанр теми. Та сама тема як марш, вальс, фуга." },
            { term: "Double Variation", definition: "Форма з ДВОМА темами, які чергуються. А-В-А'-В'-А''. Beethoven часто використовував." },
            { term: "Ground Bass", definition: "Басова лінія, яка повторюється без змін, поки верхні голоси варіюються. Форма: basso ostinato + варіації." },
            { term: "Cyclic Integration", definition: "Повернення теми наприкінці циклу (da capo) або використання теми в інших частинах твору." }
          ],
          teacherNotes: [
            "Найчастіша помилка: студент думає, що варіація = зміна ВСЬОГО. Насправді варіація = ЗБЕРЕЖЕННЯ основи + зміна одного параметра.",
            "Аналогія: тема — це ваше обличчя. Варіації — різні зачіски, окуляри, вирази. Обличчя те саме, але виглядаєте інакше.",
            "Часте питання: «Скільки має бути варіацій?» Відповідь: стільки, скільки потрібно, щоб слухач відчув подорож. 4 — мінімум. 30 — максимум (Goldberg).",
            "Порада: покажіть Mozart K.265. Студент має почути, що тема та сама, але кожна варіація звучить по-новому.",
            "Студенти плутають варіацію з імпровізацією. Імпровізація — вільна. Варіація — завжди базується на темі."
          ],
          deviations: [
            { track: "Rachmaninoff — Rhapsody on a Theme of Paganini, Var 18 (1934)", explanation: "Інверсія теми. Мелодія перевернута догори ногами (інтервали в зворотному напрямку). Показує: варіація може бути радикальною, поки зв'язок відчутний." },
            { track: "Elgar — Enigma Variations (1899)", explanation: "Кожна варіація — портрет конкретної людини. Унікально: варіації не пов'язані між собою тематично — тільки з темою. Форма: тема → 14 незалежних варіацій." },
            { track: "Beethoven — Diabelli Variations (1823)", explanation: "33 варіації на просту вальсову тему. Деякі ледь впізнавані. Показує: варіація може бути настільки вільною, що майже створює ілюзію нової теми." },
            { track: "Britten — Young Person's Guide (1946)", explanation: "Варіації як екскурсія по оркестру. Кожна варіація представляє новий інструмент. Форма: тема → 13 варіацій → фуга, де всі інструменти збираються." }
          ]
        },

        // ============================================================
        // Through-Composed
        // ============================================================
        {
          id: "through-composed",
          title: "Through-Composed",
          description: "Кожна секція НОВА — жодна не повторюється. Матеріал постійно оновлюється. Форма без повернень.",
          generatedBy: ["segmentation", "contrast", "directionality"],
          genre: "classical / art song / progressive",
          tempo: "varies",
          difficulty: "hard",
          sections: [
            { name: "Section A", bars: 8, concept: "contrast", function: "Представити перший матеріал" },
            { name: "Section B", bars: 8, concept: "contrast", function: "Новий контрастний матеріал" },
            { name: "Section C", bars: 12, concept: "contrast", function: "Третій, ще контрастніший" },
            { name: "Section D", bars: 10, concept: "directionality", function: "Наростання до кульмінації" },
            { name: "Section E", bars: 8, concept: "directionality", function: "Кульмінація" },
            { name: "Coda", bars: 6, concept: "segmentation", function: "Завершення" }
          ],
          conclusion: "Through-Composed навчає: форма може існувати без повторення. Кожна секція — новий крок у подорожі, де немає повернення додому.",
          sectionKnowledge: [
            secKnowledge("Section A", "Представити перший музичний матеріал — відправну точку подорожі.", "У TC кожна секція — нова сторінка. Секція A має бути достатньо характерною, щоб її запам'ятали, навіть якщо вона більше ніколи не повернеться.", "Секція A занадто складна — слухач витрачає увагу на запам'ятовування матеріалу, який не повернеться. Занадто проста — подорож не починається.", "У VC формах, де A є куплетом і повернеться.", "«Чи запам'ятає слухач цю секцію, навіть якщо вона більше ніколи не повториться?»", ["Schubert — Erlkönig D.328 (1815)", "Schubert — Gretchen am Spinnrade D.118 (1814)"]),
            secKnowledge("Section B", "Запропонувати новий матеріал — контрастний до A.", "У TC контраст — не опція, а необхідність. Без контрасту між секціями форма не має сенсу — навіщо нова секція, якщо вона звучить як попередня?", "Секція B занадто схожа на A — втрачається сенс through-composed. Секція B занадто далека — форма розпадається.", "У формі, де A і B частини одного процесу.", "«Чи достатньо B відрізняється від A, щоб виправдати нову секцію?»", ["Schubert — Erlkönig (1815)", "The Beatles — A Day in the Life (1967)"]),
            secKnowledge("Section C", "Третій унікальний блок — продовжити лінійний рух, не повторюючись.", "Секція C — це підтвердження логіки TC. Після двох різних секцій слухач очікує, що третя буде новою. Якщо C повторює A або B — форма ламається.", "Секція C занадто довга — слухач втрачає нитку. Секція C, яка не розвиває історію — форма стоїть на місці.", "У модульних TC формах, де секції можна переставляти.", "«Чи веде ця секція форму вперед, а не вбік?»", ["Queen — Bohemian Rhapsody, Opera section (1975)", "Muse — Knights of Cydonia (2006)"]),
            secKnowledge("Section D", "Підготувати кульмінацію — наростити щільність, напругу, енергію.", "У TC наростання має бути природним — кожна секція готує наступну. D — це передкульмінаційний пік.", "Наростання занадто різке — слухач не встигає. Наростання занадто повільне — кульмінація не виправдана.", "У TC, де кульмінація настає раніше (E слабше за D).", "«Чи відчуває слухач, що наближається кінець подорожі?»", ["Wagner — Tristan und Isolde, Prelude (1865)", "Stravinsky — The Rite of Spring, Part I (1913)"]),
            secKnowledge("Section E", "Кульмінація — найвища точка енергії/емоції.", "У TC кульмінація — це не повернення теми, а нова вершина. Слухач досягає точки, якої не очікував на початку.", "Кульмінація слабша за попередні секції — форма не має піку. Кульмінація занадто довга — втрачається імпульс.", "У TC, де кульмінація відсутня (рівномірна форма).", "«Чи відчувається ця секція як НАЙбільший момент?»", ["Queen — Bohemian Rhapsody, Rock section (1975)", "Yes — Close to the Edge (1972)"]),
            secKnowledge("Coda", "Завершити форму — підсумувати подорож без повторення матеріалу.", "Кода в TC — це не повернення до A (як у репризі), а завершення лінійного руху. Слухач має відчути, що подорож завершена, навіть якщо жодна секція не повторилася.", "Кода занадто довга — слухач уже попрощався. Кода, яка представляє новий матеріал — форма не закривається.", "У TC, де остання секція сама виконує функцію завершення.", "«Чи відчуває слухач, що подорож завершена?»", ["Debussy — Prélude à l'après-midi d'un faune (1894)", "Wagner — Tristan und Isolde, Prelude (1865)"])
          ],
          failureAnalysis: [
            failureEntry("Section A", "Секція A видалена", ["Форма не має початку — слухач не знає, звідки подорож починається", "Подальші секції не мають точки відліку", "Форма втрачає орієнтир"]),
            failureEntry("Section B", "Секція B видалена", ["A→C — два контрасти без проміжного кроку", "Форма втрачає поступовість", "Менше матеріалу — форма бідніша"]),
            failureEntry("Section C", "Секція C видалена", ["Форма скорочена — A→B→D→E, втрачено третій контраст", "Недостатньо різноманітності", "Подорож занадто коротка"]),
            failureEntry("Section D", "Секція D видалена", ["Перехід до кульмінації різкий — C→E без рампи", "Втрачено наростання", "Кульмінація менш виправдана"]),
            failureEntry("Section E", "Секція E видалена", ["Форма не має вершини — подорож без пункту призначення", "Слухач очікує більшого", "Відсутність катарсису"]),
            failureEntry("Coda", "Кода видалена", ["Форма не закривається — слухач чекає продовження", "Остання секція не відчувається як завершення", "Лінійний рух не має фінальної точки"])
          ],
          variants: [
            variant("Durchkomponiert (Art Song)", "Schubert, Wolf, Mahler", "Текст веде форму. Кожна строфа = нова музика. Слово визначає структуру, не мелодія.", "Плюс: максимальний зв'язок тексту і музики. Мінус: без тексту форма може здаватися випадковою."),
            variant("Progressive Rock", "Queen, Yes, Muse", "Лінійна форма в рок-музиці. Епічні треки (6-20 хв) без повторень. Рок-опери.", "Плюс: драматична арка. Мінус: ризик втратити слухача без знайомого хука."),
            variant("Modular / Through-Composed", "Stravinsky, Debussy", "Секції-блоки, які не повторюються. Порядок може змінюватися. Немає «правильного» порядку.", "Плюс: гнучкість, несподіванка. Мінус: може здаватися хаотичною без виконавської інтерпретації.")
          ],
          canonicalTracks: [
            track("Erlkönig D.328", "F. Schubert", 1815, "4 персонажі — 4 різні музичні характери. Оповідач, батько, син, Erlking — кожен зі своєю мелодією, регістром, гармонією. Жодного повтору.", [
              { name: "Overture (piano)", time: "0:00–0:15" },
              { name: "Narrator", time: "0:16–0:45" },
              { name: "Father", time: "0:46–1:15" },
              { name: "Son", time: "1:16–1:45" },
              { name: "Erlking", time: "1:46–2:30" },
              { name: "Dialogue (son/father)", time: "2:31–3:30" },
              { name: "Coda (death)", time: "3:31–4:15" }
            ], "classical", { segmentation: 70, repetition: 20, contrast: 95, directionality: 85 }),
            track("Gretchen am Spinnrade D.118", "F. Schubert", 1814, "Форма слідує тексту Ґете. Спіннінг колеса в фортепіано — остинато, але вокал постійно змінюється.", [
              { name: "Introduction (spinning)", time: "0:00–0:20" },
              { name: "Verse 1 (Gretchen)", time: "0:21–1:00" },
              { name: "Verse 2 (longing)", time: "1:01–1:45" },
              { name: "Verse 3 (memory of kiss)", time: "1:46–2:30" },
              { name: "Verse 4 (despair)", time: "2:31–3:15" },
              { name: "Coda (return to spinning)", time: "3:16–3:45" }
            ], "classical", { segmentation: 75, repetition: 30, contrast: 85, directionality: 80 }),
            track("Bohemian Rhapsody", "Queen", 1975, "6 секцій, жодна не повторюється. Балада → опера → рок → розв'язка. Найвідоміший through-composed хіт.", [
              { name: "Intro (a cappella)", time: "0:00–0:15" },
              { name: "Ballad", time: "0:16–0:55" },
              { name: "Opera (galileo)", time: "0:56–2:35" },
              { name: "Rock section", time: "2:36–3:15" },
              { name: "Outro (mama)", time: "3:16–4:00" },
              { name: "Coda (gong)", time: "4:01–5:55" }
            ], "rock", { segmentation: 90, repetition: 20, contrast: 95, directionality: 85 }),
            track("A Day in the Life", "The Beatles", 1967, "Дві різні пісні (Lennon + McCartney), з'єднані оркестровим бриджем. Безпрецедентна форма.", [
              { name: "Section A (Lennon)", time: "0:00–1:05" },
              { name: "Orchestral bridge 1", time: "1:06–1:40" },
              { name: "Section B (McCartney)", time: "1:41–2:15" },
              { name: "Orchestral bridge 2", time: "2:16–2:50" },
              { name: "Section A return (Lennon)", time: "2:51–3:30" },
              { name: "Final chord", time: "3:31–5:10" }
            ], "rock", { segmentation: 85, repetition: 40, contrast: 90, directionality: 80 }),
            track("Knights of Cydonia", "Muse", 2006, "Через-компонований рок-епос. Прогресія: intro → verse → build → chorus → bridge → solo → finale. Жодного повернення.", [
              { name: "Intro (western)", time: "0:00–0:30" },
              { name: "Verse", time: "0:31–1:00" },
              { name: "Pre-chorus build", time: "1:01–1:15" },
              { name: "Chorus (gallop)", time: "1:16–1:45" },
              { name: "Bridge (synth)", time: "1:46–2:15" },
              { name: "Guitar solo", time: "2:16–2:45" },
              { name: "Finale (double time)", time: "2:46–3:30" },
              { name: "Outro", time: "3:31–4:10" }
            ], "rock", { segmentation: 85, repetition: 30, contrast: 85, directionality: 80 }),
            track("Close to the Edge", "Yes", 1972, "18 хвилин through-composed. 4 частини — жодного буквального повторення. Еталон прог-року.", [
              { name: "The Solid Time of Change", time: "0:00–5:00" },
              { name: "Total Mass Retain", time: "5:01–10:00" },
              { name: "I Get Up I Get Down", time: "10:01–14:00" },
              { name: "Seasons of Man", time: "14:01–18:45" }
            ], "progressive rock", { segmentation: 80, repetition: 25, contrast: 90, directionality: 85 }),
            track("The Rite of Spring, Part I", "I. Stravinsky", 1913, "Безперервний потік ритмічних блоків. Жодна секція не повторюється. Революційна форма.", [
              { name: "Introduction", time: "0:00–1:00" },
              { name: "Augurs of Spring", time: "1:01–3:00" },
              { name: "Ritual of Abduction", time: "3:01–4:30" },
              { name: "Spring Rounds", time: "4:31–7:00" },
              { name: "Ritual of the Rival Tribes", time: "7:01–9:00" },
              { name: "Procession of the Sage", time: "9:01–10:30" },
              { name: "Dance of the Earth", time: "10:31–12:00" }
            ], "contemporary", { segmentation: 75, repetition: 20, contrast: 95, directionality: 80 }),
            track("Prélude à l'après-midi d'un faune", "C. Debussy", 1894, "Вільна through-composed форма. Жодної повторної секції. Музика як імпресіоністський потік.", [
              { name: "Flute solo (theme)", time: "0:00–0:30" },
              { name: "Orchestral response", time: "0:31–1:30" },
              { name: "Development A", time: "1:31–3:00" },
              { name: "Development B", time: "3:01–4:30" },
              { name: "Climax", time: "4:31–6:00" },
              { name: "Dissolution", time: "6:01–8:00" },
              { name: "Final flute", time: "8:01–9:30" }
            ], "impressionist", { segmentation: 70, repetition: 30, contrast: 85, directionality: 75 }),
            track("Tristan und Isolde, Prelude", "R. Wagner", 1865, "Безперервний потік без повторень. 'Tristan chord' — знаменита гармонія, але форма не має повторних секцій.", [
              { name: "Cell (Tristan chord)", time: "0:00–0:30" },
              { name: "Phrase A", time: "0:31–1:30" },
              { name: "Phrase B", time: "1:31–3:00" },
              { name: "Phrase C", time: "3:01–4:30" },
              { name: "Phrase D (climax)", time: "4:31–6:00" },
              { name: "Phrase E (dissolution)", time: "6:01–8:00" },
              { name: "Final cadence", time: "8:01–10:00" }
            ], "romantic", { segmentation: 65, repetition: 20, contrast: 85, directionality: 90 }),
            track("Verborgenheit", "H. Wolf", 1888, "Через-компонована пісня. Форма слідує емоційній арці тексту Mörike.", [
              { name: "Intro (piano)", time: "0:00–0:10" },
              { name: "Stanza 1", time: "0:11–0:35" },
              { name: "Stanza 2 (intensification)", time: "0:36–1:00" },
              { name: "Stanza 3 (climax)", time: "1:01–1:30" },
              { name: "Postlude", time: "1:31–2:00" }
            ], "romantic", { segmentation: 75, repetition: 20, contrast: 80, directionality: 85 })
          ],
          diagnosis: [
            "Чи достатньо кожна секція відрізняється від попередньої?",
            "Чи відчувається форма як єдиний напрямок, а не набір випадкових секцій?",
            "Чи має форма кульмінацію — точку, до якої все вело?",
            "Чи не хоче слухач, щоб якась секція повторилася?",
            "Чи працює форма без жодного повторення матеріалу?",
            "Чи відчуває слухач прогрес — що кожна секція веде далі?",
            "Чи не здається форма хаотичною або випадковою?"
          ],
          genreTransfer: [
            genreTransfer("Pop", "Треки без приспіву — лінійна форма.", "Поп-пісні без хука використовують TC логіку — кожен куплет новий."),
            genreTransfer("Rock (Progressive)", "Прогресивний рок — епічні through-composed треки.", "Pink Floyd, Yes, King Crimson — експерименти з лінійною формою."),
            genreTransfer("Film", "Безперервний саундтрек — музика слідує сюжету.", "Кіномузика природно TC — кожна сцена вимагає нової музики."),
            genreTransfer("Electronic", "Треки без повторення лупу — через-компонована електроніка.", "IDM, experimental — форми, де луп не повторюється, а трансформується."),
            genreTransfer("Jazz (Free)", "Free jazz — без теми, без повторень.", "Ornette Coleman, Coltrane — форма як потік свідомості.")
          ],
          dawExercise: [
            "Створи 5 різних секцій (по 8 тактів), жодна не повторюється.",
            "Переконайся, що кожна секція має НОВИЙ матеріал — нову мелодію, гармонію, ритм.",
            "Розстав секції в порядку наростання енергії: A (тихо) → B → C → D → E (гучно).",
            "Додай коду — коротке завершення (4 такти).",
            "Послухай: чи звучить форма як єдине ціле? Чи не здається вона випадковою?",
            "Спробуй переставити секції. Чи працює новий порядок? Through-composed — це не випадковість."
          ],
          listeningExercise: [
            "Послухай Erlkönig (Schubert). Скільки різних персонажів? Як музика змінюється для кожного?",
            "Послухай Bohemian Rhapsody (Queen). Чи помічаєш, що жодна секція не повторюється? Як форма тримається?",
            "Порівняй A Day in the Life (Beatles) зі звичайною піснею. Що робить її through-composed?",
            "Послухай Rite of Spring (Stravinsky). Чи відчуваєш форму як потік, а не набір секцій?"
          ],
          comparisons: [
            { with: "Verse-Chorus", difference: "VC базується на ПОВЕРНЕННІ (приспів). TC — на ВІДСУТНОСТІ повторення. VC = A-B-A-B. TC = A-B-C-D-E. VC дає слухачеві опору; TC веде в невідоме." },
            { with: "Rondo", difference: "Rondo = A-B-A-C-A (рефрен повертається). TC = A-B-C-D-E (жодного повернення). Rondo — це прогулянка додому; TC — подорож без повернення." },
            { with: "Sonata-Allegro", difference: "Sonata повертає теми в Репризі. TC не повертає нічого. Sonata — драма з розв'язкою; TC — наратив без репризи." },
            { with: "Head-Solo-Head", difference: "HSH завжди повертається до теми. TC ніколи не повертається. HSH = рамка + вміст; TC = чистий рух уперед." },
            { with: "12-Bar Blues", difference: "12-Bar циклічний (та ж схема знову і знову). TC лінійний. Полюси: повне повторення vs повна відсутність повторення." }
          ],
          glossary: [
            { term: "Through-Composed", definition: "Форма, де кожна секція містить НОВИЙ матеріал. Жодна секція не повторюється. Музика постійно рухається вперед." },
            { term: "Durchkomponiert", definition: "Німецький термін для through-composed. Використовується в аналізі пісень (Lieder), де текст визначає форму." },
            { term: "Modular Form", definition: "Форма з блоків (модулів), які не повторюються. Модулі можна переставляти без втрати сенсу." },
            { term: "Linear Trajectory", definition: "Відчуття лінійного руху — музика постійно рухається вперед без повернень. Протилежність циклічній формі." },
            { term: "Strophic vs Through-Composed", definition: "Строфічна: кожна строфа на ту саму музику. Through-composed: кожна строфа на нову музику." },
            { term: "Cyclic vs Through-Composed", definition: "Циклічна: матеріал повертається. Through-composed: матеріал ніколи не повертається." },
            { term: "Stream of Consciousness", definition: "Музична форма, що імітує потік свідомості — безперервний, непередбачуваний, лінійний." }
          ],
          teacherNotes: [
            "Найчастіша помилка: студент думає, що TC = випадковий набір секцій. Насправді TC вимагає ЩЕ більшої уваги до зв'язків між секціями, бо немає повторення як опори.",
            "Аналогія: TC — це подорож без карти. Кожне рішення має бути виправданим, бо ви не можете повернутися назад.",
            "Часте питання: «Як форма тримається без повторення?» Відповідь: через напрямок (directionality). Кожна секція готує наступну — слухач відчуває рух, навіть якщо матеріал не впізнаваний.",
            "Порада: покажіть Erlkönig. Студент має почути 4 різні голоси, які НІКОЛИ не повторюються.",
            "Студенти плутають through-composed з через-компонованим розвитком. Розвиток може бути всередині однієї теми. TC — це завжди НОВІ теми."
          ],
          deviations: [
            { track: "Bohemian Rhapsody (Queen, 1975)", explanation: "Через-компонована форма в рок-музиці. 6 секцій, жодна не повторюється. Несподіване: пісня стала світовим хітом не маючи приспіву. Показує: TC може бути комерційним." },
            { track: "Erlkönig (Schubert, 1815)", explanation: "4 персонажі — кожен зі своєю музикою. Форма слідує тексту Ґете без жодного повтору. Показує: TC — природна форма для драми." },
            { track: "The Rite of Spring (Stravinsky, 1913)", explanation: "Безперервний потік ритмічних блоків. Жодна секція не повторюється. Показує: TC може бути радикально новою мовою." },
            { track: "Close to the Edge (Yes, 1972)", explanation: "18-хвилинна through-composed форма в рок-музиці. 4 частини, жодного буквального повторення. Показує: TC працює в довгій формі." }
          ],
          families: [
  {
    id: "progressive-rock",
    name: "Прогресивний Рок",
    bpm: "різний – від 60 до 200+, часті зміни розміру",
    structuralProfile: "Наскрізна форма з постійно змінюваними секціями: відсутність приспіву або куплетно-приспівної схеми як організуючого принципу. Твір розгортається як «подорож» крізь контрастні епізоди, що не повторюються в традиційний спосіб.",
    energyProfile: "Висока варіативність – від ніжних акустичних пасажів до потужних оркестрових кульмінацій. Енергія управляється через зміни оркестровки, динаміки та темпу, а не через куплетно-приспівні цикли.",
    canonicalTracks: [
      "Yes — Close to the Edge (1972)",
      "King Crimson — Starless and Bible Black (1974)",
      "Genesis — Supper's Ready (1972)",
      "Emerson, Lake & Palmer — Tarkus (1971)",
      "Jethro Tull — Thick as a Brick (1972)"
    ],
    commonMistakes: [
      "Ототожнення «prog» з технічною складністю – суть у наскрізному розвитку та уникненні формульних структур, а не у віртуозності заради віртуозності.",
      "Примусове нав'язування куплетно-приспівної логіки при аналізі – секції prog-творів краще описувати як «епізоди», а не «куплети».",
      "Ігнорування концептуальної єдності альбому – у prog часто весь LP є єдиним наскрізним твором."
    ],
    distinguishingFeatures: [
      "Зміна розміру такту є нормою, а не винятком – 7/8, 5/4, 11/8 чергуються органічно.",
      "Довгі, нескорочувані твори (10–20+ хвилин) без можливості радіоредакції.",
      "Вплив класичної музики (контрапункт, сонатна форма) та джазу (імпровізаційні секції).",
      "Концептуальні тексти та концепт-альбоми як типова форма художнього висловлювання."
    ]
  },
  {
    id: "idm",
    name: "IDM (Інтелектуальна Танцювальна Музика)",
    bpm: "60–200+ (нерегулярно, часто зі збоями)",
    structuralProfile: "Наскрізна або колажна форма з постійно мінливими ритмічними і тембральними текстурами. Традиційна танцювальна структура (intro – drop – breakdown) деконструюється або навмисно порушується; кожен трек розгортається як унікальна власна структура.",
    energyProfile: "Фрагментована й непередбачувана – «збої» (glitch) і несподівані структурні повороти є художнім прийомом. Тіло не може «синхронізуватися» з ритмом у традиційний спосіб; інтелектуальне залучення переважає над фізичним.",
    canonicalTracks: [
      "Aphex Twin — Richard D. James Album (1996)",
      "Autechre — Tri Repetae (1995)",
      "Boards of Canada — Music Has the Right to Children (1998)",
      "Squarepusher — Hard Normal Daddy (1997)",
      "µ-Ziq — Lunatic Harness (1997)"
    ],
    commonMistakes: [
      "Редукція IDM до «складного техно» – хоча технологічна спадщина очевидна, IDM свідомо руйнує танцювальну функцію.",
      "Плутання BoC з «ambient» – Boards of Canada використовують наскрізні структури та мелодійний розвиток, а не статичний дрон.",
      "Ігнорування ролі тембру й синтезу – у IDM звук є першоелементом структури, а не лише «оберткою» для ритму."
    ],
    distinguishingFeatures: [
      "Ритм як матеріал для деконструкції – polyrhythm, glitch, drum-machine поліфонія на межі хаосу.",
      "Наскрізна форма: кожен трек має власну внутрішню логіку, що не підпорядковується жанровим шаблонам.",
      "Синтез і тембр у центрі уваги – аналогові синтезатори, зламані сэмплери, самобутній звуковий дизайн.",
      "Концептуальна авторська позиція – Autechre, Aphex Twin створюють впізнаваний авторський світ, а не анонімний клуберський продукт."
    ]
  },
  {
    id: "film-scoring",
    name: "Кінокомпозиція",
    bpm: "варіюється відповідно до дії на екрані",
    structuralProfile: "Наскрізна форма, жорстко підпорядкована часовій структурі фільму. Музика фізично прив'язана до зображення через «синк-поінти» (sync points) – ключові моменти зображення, де звук і картинка злиті. Форма визначається не внутрішньою музичною логікою, а драматичною дугою наративу.",
    energyProfile: "Повністю підпорядкована емоційній дузі оповіді – від ніжних ліричних епізодів до оркестрових кліматичних вибухів. Темп, динаміка й оркестровка кожного моменту продиктовані потребами сцени.",
    canonicalTracks: [
      "Ennio Morricone — The Good, the Bad and the Ugly (1966)",
      "Bernard Herrmann — Psycho (1960)",
      "Hans Zimmer — Inception (2010)",
      "John Williams — Schindler's List (1993)",
      "Jonny Greenwood — There Will Be Blood (2007)"
    ],
    commonMistakes: [
      "Аналіз кінопартитури поза контекстом зображення – музика написана для конкретного монтажу і повністю розкривається лише з ним.",
      "Ігнорування функції «underscore» – більшість кінематографічної музики призначена для підтримки, а не для домінування над діалогом.",
      "Оцінка кінокомпозиції критеріями «абсолютної музики» – функціональність не є недоліком, а є фундаментальним принципом жанру."
    ],
    distinguishingFeatures: [
      "«Синк-поінти» – музика структурована навколо конкретних візуальних подій у кадрі.",
      "Лейтмотив як наскрізний структурний принцип – теми персонажів або ідей трансформуються протягом усього фільму.",
      "Оркестровий діапазон разом з електронікою – сучасна кінокомпозиція поєднує живий оркестр і синтетичні текстури.",
      "Часовий контроль – кожна нота прив'язана до таймкоду; темп може змінюватись покадрово."
    ]
  }
]
        },

        // ============================================================
        // Head-Solo-Head (Jazz)
        // ============================================================
        {
          id: "head-solo-head",
          title: "Head-Solo-Head (Jazz)",
          description: "Тема (head) → серія імпровізаційних соло → повернення теми. Джазова форма як арка: ідентичність → індивідуальність → повернення.",
          generatedBy: ["segmentation", "repetition", "contrast", "directionality"],
          genre: "jazz",
          tempo: "60-300 BPM",
          difficulty: "hard",
          sections: [
            { name: "Head (theme)", bars: 32, concept: "repetition", function: "Представити тему" },
            { name: "Solo 1 — Building", bars: 32, concept: "contrast", function: "Перше соло, встановлює мову" },
            { name: "Solo 2 — Peak", bars: 32, concept: "contrast", function: "Кульмінація імпровізації" },
            { name: "Solo 3 — Release", bars: 32, concept: "contrast", function: "Спад енергії" },
            { name: "Head Return", bars: 32, concept: "repetition", function: "Повернення теми" },
            { name: "Coda", bars: 8, concept: "segmentation", function: "Завершення" }
          ],
          conclusion: "Head-Solo-Head навчає: форма як соціальний договір. Тема — спільна мова. Соло — індивідуальний голос. Повернення теми — підтвердження спільності.",
          sectionKnowledge: [
            secKnowledge("Head (theme)", "Представити тему — мелодію, гармонічну схему, настрій.", "Head — це соціальний контракт. Музиканти домовляються: «ось наша спільна мова». Слухач чує тему, яка буде точкою відліку для всіх соло.", "Тема занадто складна — музиканти не можуть імпровізувати на ній. Тема занадто проста — імпровізація нудна.", "У free jazz, де тема відсутня — форма починається одразу з соло.", "«Чи може музикант імпровізувати на цю тему? Чи дає вона достатньо матеріалу?»", ["Miles Davis — So What (1959)", "Charlie Parker — Donna Lee (1947)"]),
            secKnowledge("Solo 1 — Building", "Перше соло — встановити імпровізаційну мову, показати напрямок.", "Перше соло — найважливіше. Воно показує, як музиканти інтерпретують тему. Зазвичай грає основний соліст (труба, саксофон).", "Соло 1 занадто довге — інші музиканти не мають часу. Соло 1 занадто коротке — не встигає встановити мову.", "У формі Trading Fours, де соло дуже короткі.", "«Чи встановлює це соло мову для наступних імпровізацій?»", ["Miles Davis — So What, Miles solo (1959)", "John Coltrane — Giant Steps, Coltrane solo (1960)"]),
            secKnowledge("Solo 2 — Peak", "Друге соло — кульмінація, найвища точка енергії.", "Друге соло — це найсміливіша імпровізація. Соліст вже чув перше соло і може відштовхнутися від нього. Зазвичай найвіртуозніше.", "Соло 2 слабше за перше — форма не має зростання. Соло 2 занадто довге — слухач втомлюється.", "У формі з одним соло (head + solo + head).", "«Чи відчувається це соло як вершина форми?»", ["Miles Davis — All Blues, Coltrane solo (1959)", "Sonny Rollins — St. Thomas, Rollins solo (1956)"]),
            secKnowledge("Solo 3 — Release", "Третє соло — спад енергії, підготовка до повернення теми.", "Третє соло — перехідне. Воно знижує інтенсивність, щоб повернення теми не було різким. Зазвичай грає піаніст або басист.", "Соло 3 занадто пасивне — форма втрачає імпульс. Соло 3 занадто активне — повернення теми не відчувається.", "У формі з двома соло (head + 2 solos + head).", "«Чи готує це соло повернення теми?»", ["Herbie Hancock — Cantaloupe Island, Hancock solo (1964)", "Dave Brubeck — Blue Rondo à la Turk, Brubeck solo (1959)"]),
            secKnowledge("Head Return", "Повернути тему — підтвердити форму, завершити цикл.", "Повернення теми — це катарсис. Після імпровізаційної подорожі слухач повертається додому. Тема тепер звучить по-новому — збагачена почутими соло.", "Повернення точь-в-точь — втрачена можливість підсумувати. Повернення надто змінене — не відчувається як тема.", "У формі без повернення (head + solo, без outro head).", "«Чи звучить тема по-новому після соло?»", ["Miles Davis — So What, head return (1959)", "John Coltrane — My Favorite Things, head return (1961)"]),
            secKnowledge("Coda", "Завершити форму — коротке заключення після останньої теми.", "Кода — це останнє слово. Вона може бути ідентичною останнім тактам теми (ride-out) або новим матеріалом.", "Кода занадто довга — слухач вже попрощався. Кода відсутня — форма закінчується різко.", "У формі, де останнє проведення теми саме завершує твір.", "«Чи закриває кода форму?»", ["Duke Ellington — Take the 'A' Train (1941)", "Miles Davis — All Blues (1959)"])
          ],
          failureAnalysis: [
            failureEntry("Head (theme)", "Тему видалено", ["Немає спільної мови — соло не мають бази", "Слухач не знає, що імпровізується", "Форма втрачає ідентичність"]),
            failureEntry("Solo 1", "Перше соло видалено", ["Форма втрачає початок імпровізації", "Друге соло не має контексту", "Менше різноманітності"]),
            failureEntry("Solo 2", "Друге соло видалено", ["Форма не має кульмінації", "Третє соло не має до чого прагнути", "Енергетична арка пласка"]),
            failureEntry("Solo 3", "Третє соло видалено", ["Повернення теми занадто різке після піку", "Втрачено перехід до завершення", "Форма менш збалансована"]),
            failureEntry("Head Return", "Повернення теми видалено", ["Форма не закривається — слухач чекає продовження", "Солоза висять у повітрі без підсумку", "Втрачено катарсис повернення"]),
            failureEntry("Coda", "Коду видалено", ["Форма закінчується різко", "Останнє проведення теми не має завершення", "Втрачена можливість поставити крапку"])
          ],
          variants: [
            variant("Trading Fours", "Bebop, hard bop", "Музиканти обмінюються 4-тактовими соло. Максимальна взаємодія.", "Плюс: діалог, напруга. Мінус: може бути хаотичним."),
            variant("Single Solo (Head-Solo-Head)", "Cool jazz, modal", "Одне довге соло без розділення на кілька. Простіша форма.", "Плюс: фокус на одному солісті. Мінус: менше різноманітності."),
            variant("Solos on Changes", "Bebop, mainstream", "Кожне соло на ту саму гармонічну схему (changes). Традиційна джазова форма.", "Плюс: чиста форма. Мінус: може бути передбачуваною.")
          ],
          canonicalTracks: [
            track("So What", "Miles Davis", 1959, "Модальний джаз. Дві теми (16 тактів each) + соло Miles → Coltrane → Adderley → повернення теми.", [
              { name: "Head (theme A)", time: "0:00–0:30" },
              { name: "Head (theme B)", time: "0:31–1:00" },
              { name: "Miles Davis solo", time: "1:01–3:00" },
              { name: "John Coltrane solo", time: "3:01–5:00" },
              { name: "Cannonball Adderley solo", time: "5:01–7:00" },
              { name: "Head return", time: "7:01–8:00" },
              { name: "Coda", time: "8:01–9:30" }
            ], "jazz", { segmentation: 85, repetition: 60, contrast: 80, directionality: 75 }),
            track("Giant Steps", "John Coltrane", 1960, "Колосальна гармонічна схема (3 тональності). Coltrane changes. Соло: Coltrane → Flanagan → повернення.", [
              { name: "Head", time: "0:00–0:20" },
              { name: "Coltrane solo", time: "0:21–1:30" },
              { name: "Tommy Flanagan solo", time: "1:31–2:30" },
              { name: "Head return", time: "2:31–2:50" },
              { name: "Coda", time: "2:51–3:10" }
            ], "jazz", { segmentation: 80, repetition: 55, contrast: 85, directionality: 75 }),
            track("Donna Lee", "Charlie Parker", 1947, "Бібоп. Швидка тема (32 такти, AABA). Соло Parker + повернення. Еталон бібоп-форми.", [
              { name: "Head (AABA)", time: "0:00–0:20" },
              { name: "Parker solo", time: "0:21–1:00" },
              { name: "Head return", time: "1:01–1:20" },
              { name: "Coda", time: "1:21–1:30" }
            ], "jazz", { segmentation: 85, repetition: 60, contrast: 80, directionality: 65 }),
            track("Take the 'A' Train", "Duke Ellington", 1941, "Swing. Тема + соло + повернення. Класична біг-бендова форма.", [
              { name: "Head (sax)", time: "0:00–0:30" },
              { name: "Solo (trumpet)", time: "0:31–1:00" },
              { name: "Solo (piano)", time: "1:01–1:30" },
              { name: "Head return (big band)", time: "1:31–2:00" },
              { name: "Coda (ride-out)", time: "2:01–2:30" }
            ], "jazz", { segmentation: 85, repetition: 70, contrast: 75, directionality: 70 }),
            track("All Blues", "Miles Davis", 1959, "6/8 модальний блюз. 12 тактів. Тема + 3 соло (Miles, Coltrane, Adderley) + повернення.", [
              { name: "Head (bass riff)", time: "0:00–0:30" },
              { name: "Head (theme)", time: "0:31–1:00" },
              { name: "Miles Davis solo", time: "1:01–3:30" },
              { name: "John Coltrane solo", time: "3:31–6:00" },
              { name: "Cannonball Adderley solo", time: "6:01–8:30" },
              { name: "Head return", time: "8:31–10:00" },
              { name: "Coda", time: "10:01–11:35" }
            ], "jazz", { segmentation: 80, repetition: 65, contrast: 80, directionality: 70 }),
            track("Cantaloupe Island", "Herbie Hancock", 1964, "Funk jazz. 2-акордова тема (16 тактів). Соло: Hancock → Hubbard → повернення.", [
              { name: "Head (piano riff)", time: "0:00–0:15" },
              { name: "Head (full theme)", time: "0:16–0:45" },
              { name: "Herbie Hancock solo", time: "0:46–2:30" },
              { name: "Freddie Hubbard solo", time: "2:31–4:00" },
              { name: "Head return", time: "4:01–4:30" },
              { name: "Coda", time: "4:31–5:00" }
            ], "jazz", { segmentation: 85, repetition: 70, contrast: 75, directionality: 70 }),
            track("St. Thomas", "Sonny Rollins", 1956, "Calypso-джаз. Тема (32 такти, AABA) + тривале соло Rollins + повернення.", [
              { name: "Head (AABA)", time: "0:00–0:30" },
              { name: "Rollins solo", time: "0:31–2:30" },
              { name: "Head return", time: "2:31–3:00" },
              { name: "Coda", time: "3:01–3:30" }
            ], "jazz", { segmentation: 80, repetition: 65, contrast: 75, directionality: 65 }),
            track("Round Midnight", "Thelonious Monk", 1944, "Джазова балада. Складна гармонія. Тема + соло + повернення.", [
              { name: "Head (theme)", time: "0:00–0:45" },
              { name: "Monk solo", time: "0:46–2:00" },
              { name: "Head return", time: "2:01–2:30" },
              { name: "Coda", time: "2:31–3:00" }
            ], "jazz", { segmentation: 85, repetition: 55, contrast: 85, directionality: 70 }),
            track("Blue Rondo à la Turk", "Dave Brubeck", 1959, "9/8 розмір. Тема + соло Brubeck/Desmond + повернення. Джерело натхнення — турецький ритм.", [
              { name: "Head (9/8 theme)", time: "0:00–0:30" },
              { name: "Dave Brubeck solo", time: "0:31–2:00" },
              { name: "Paul Desmond solo", time: "2:01–3:30" },
              { name: "Head return", time: "3:31–4:00" },
              { name: "Coda (4/4 swing)", time: "4:01–5:00" }
            ], "jazz", { segmentation: 85, repetition: 60, contrast: 80, directionality: 75 }),
            track("My Favorite Things", "John Coltrane", 1961, "Сопрано-саксофон. Ostinato-based. Тема + тривалі соло + повернення. Модальна імпровізація.", [
              { name: "Head (theme in E minor)", time: "0:00–1:00" },
              { name: "Coltrane solo (soprano)", time: "1:01–4:00" },
              { name: "McCoy Tyner solo", time: "4:01–6:00" },
              { name: "Head return", time: "6:01–7:00" },
              { name: "Coda", time: "7:01–8:00" }
            ], "jazz", { segmentation: 80, repetition: 70, contrast: 75, directionality: 75 })
          ],
          diagnosis: [
            "Чи достатньо тема цікава, щоб на ній імпровізувати?",
            "Чи відрізняються соло одне від одного?",
            "Чи є прогресія: building → peak → release?",
            "Чи звучить тема по-новому після соло?",
            "Чи достатньо часу має кожен соліст?",
            "Чи не занадто багато соло? Чи не занадто мало?",
            "Чи працює форма, якщо слухач не знає джазових конвенцій?"
          ],
          genreTransfer: [
            genreTransfer("Pop", "Bridge як соло — інструментальний відступ в поп-пісні.", "Поп-брідж виконує ту ж функцію: контраст перед поверненням приспіву."),
            genreTransfer("Electronic", "Build-drop як соло — наростання і вивільнення.", "Білд = імпровізація (новий матеріал). Дроп = повернення теми."),
            genreTransfer("Classical", "Каденція в концерті — соло без оркестру.", "Каденція — це імпровізація (вільна) на теми концерту, з поверненням до оркестру."),
            genreTransfer("Rock", "Гітарне соло як джазове соло — контраст і повернення.", "Гітарне соло в рок-пісні — аналог джазового: тема → соло → тема."),
            genreTransfer("Hip-Hop", "Verse = solo — кожен куплет як імпровізація.", "Хук = head (тема). Куплети = соло (варіації на тему).")
          ],
          dawExercise: [
            "Створи тему (16-32 такти) — просту, запам'ятовувану мелодію.",
            "Запиши перше соло: імпровізуй на гармонії теми (32 такти).",
            "Запиши друге соло: зроби його більш інтенсивним (32 такти).",
            "Запиши третє соло: зроби спад, підготуй повернення (16-32 такти).",
            "Поверни тему — точно або з невеликими змінами.",
            "Додай коду — 4-8 тактів завершення."
          ],
          listeningExercise: [
            "Послухай So What (Miles Davis). Чи чуєш різницю між соло Miles, Coltrane і Adderley?",
            "Послухай Giant Steps (Coltrane). Як форма тримається попри шалену гармонію?",
            "Послухай Round Midnight (Monk). Як тема звучить після соло Monk — чи впізнаєш її?",
            "Послухай My Favorite Things (Coltrane). Чи відчувається форма попри тривалість соло?"
          ],
          comparisons: [
            { with: "Rondo", difference: "Rondo повертає тему ідентично (A-B-A-C-A). HSH повертає тему після імпровізаційних соло. Rondo — архітектура; HSH — соціальна взаємодія." },
            { with: "Theme & Variations", difference: "T&V — одна тема, багато варіацій (змін теми). HSH — тема + соло (нові ідеї) + тема. T&V — композиторська; HSH — виконавська." },
            { with: "12-Bar Blues", difference: "12-Bar — найпоширеніша гармонічна основа для HSH. Але HSH — це архітектурна форма (тема-соло-тема), а 12-Bar — гармонічний цикл. Одне може бути вмістом іншого." },
            { with: "Sonata-Allegro", difference: "Обидва: представлення теми → розвиток → повернення. В Sonata розвиток = трансформація; в HSH розвиток = імпровізація. Класична і джазова версії тієї самої ідеї." },
            { with: "Through-Composed", difference: "TC не повертається ніколи. HSH завжди повертається до теми. HSH = циклічна рамка; TC = лінійний рух." }
          ],
          glossary: [
            { term: "Head", definition: "Головна тема джазового стандарту. Представляється на початку і повертається в кінці форми. Зазвичай 32 такти (AABA)." },
            { term: "Chorus (harmonic scheme)", definition: "Один повний цикл гармонічної схеми теми. Кожне соло = один або кілька chorus." },
            { term: "Trading", definition: "Обмін короткими імпровізаційними фразами між музикантами. Зазвичай по 4 або 8 тактів." },
            { term: "Comping", definition: "Акомпанемент піаніста/гітариста під час соло. Імпровізована гармонічна підтримка." },
            { term: "Changes", definition: "Гармонічна схема теми. Аккордова послідовність, на якій базується імпровізація." },
            { term: "Turnaround", definition: "Гармонічний зворот в кінці chorus, який повертає до початку схеми. Сигнал: «наступний chorus починається»." },
            { term: "Ride-out", definition: "Останній chorus або кода, де вся група грає тему разом до завершення." }
          ],
          teacherNotes: [
            "Найчастіша помилка: студент думає, що head-solo-head — це «тема + щось інше + тема». Насправді соло — це ІМПРОВІЗАЦІЯ на тему, не новий матеріал.",
            "Аналогія: head — це спільна мова. Соло — це розповідь цією мовою. Повернення head — підтвердження, що всі розуміють одне одного.",
            "Часте питання: «Чому соло такі довгі?» Відповідь: джазове соло — це не прикраса, а СУТЬ форми. Тема — тільки обрамлення.",
            "Порада: покажіть So What. Поясніть, що тема — всього 2 акорди (Dm7, Ebm7). Вся магія — в імпровізації.",
            "Студенти плутають head-solo-head з theme-and-variations. В T&V варіації змінюють тему. В HSH соло створюють НОВИЙ матеріал на тій самій гармонії."
          ],
          deviations: [
            { track: "Giant Steps (Coltrane, 1960)", explanation: "Колосальна гармонічна складність — 3 тональності, що змінюються кожні 4 такти. Показує: форма HSH працює на будь-якій гармонії, навіть найскладнішій." },
            { track: "Round Midnight (Monk, 1944)", explanation: "Джазова балада. Складна гармонія з альтераціями. Показує: HSH може бути повільною, меланхолійною — не тільки швидкою." },
            { track: "My Favorite Things (Coltrane, 1961)", explanation: "Нестандартна тема — ostinato замість змін. Форма HSH, але гармонія не змінюється. Показує: HSH можливий на одній гармонії." },
            { track: "Blue Rondo à la Turk (Brubeck, 1959)", explanation: "9/8 розмір, незвичний для джазу. Показує: HSH працює в будь-якому метрі. Кода переходить у 4/4 swing — повне переосмислення теми." }
          ]
        },

        // ============================================================
        // Sonata-Allegro
        // ============================================================
        {
          id: "sonata-allegro",
          title: "Sonata-Allegro",
          description: "Тричастинна драма: Експозиція (теми представлені) → Розробка (теми трансформовані) → Реприза (теми повертаються в тоніці). Форма як подорож і повернення.",
          generatedBy: ["segmentation", "repetition", "contrast", "directionality"],
          genre: "classical",
          tempo: "allegro (120-160 BPM)",
          difficulty: "hard",
          sections: [
            { name: "Theme 1 (Tonic)", bars: 16, concept: "segmentation", function: "Головна тема в тоніці" },
            { name: "Transition", bars: 8, concept: "directionality", function: "Модуляція до домінанти" },
            { name: "Theme 2 (Dominant)", bars: 16, concept: "contrast", function: "Контрастна тема в домінанті" },
            { name: "Closing", bars: 8, concept: "contrast", function: "Закріплення нової тональності" },
            { name: "Development", bars: 32, concept: "directionality", function: "Трансформація тем, модуляції" },
            { name: "Theme 1 (Recap)", bars: 16, concept: "repetition", function: "Повернення теми в тоніці" },
            { name: "Theme 2 (Recap)", bars: 16, concept: "repetition", function: "Тема 2 тепер у тоніці" },
            { name: "Coda", bars: 8, concept: "segmentation", function: "Завершення" }
          ],
          conclusion: "Sonata-Allegro навчає: форма — це подорож з поверненням. Експозиція представляє світ, Розробка його руйнує, Реприза відновлює в новому світлі.",
          sectionKnowledge: [
            secKnowledge("Exposition: Theme 1", "Представити головну тему — сильний характер у тоніці.", "Тема 1 — це «обіцянка» твору. Вона має бути достатньо характерною, щоб слухач запам'ятав її через всю розробку.", "Тема 1 занадто нейтральна — слухач не має опори. Тема 1 занадто складна — контраст з Т2 не працює.", "У монотематичній сонаті (Haydn), де Т1 і Т2 — варіації однієї теми.", "«Чи може слухач наспівати цю тему після першого прослуховування?»", ["Beethoven — Symphony No.5, I (1808)", "Mozart — Symphony No.40, I (1788)"]),
            secKnowledge("Exposition: Transition", "Модулювати від тоніки до домінанти, створити напругу.", "Транзиція — це міст. Вона готує слухача до нової тональності, створюючи очікування контрасту.", "Транзиція занадто коротка — модуляція різка. Транзиція занадто довга — слухач втрачає нитку.", "У сонатах без транзиції (прямий перехід від Т1 до Т2).", "«Чи відчуває слухач, що тональність змінюється?»", ["Mozart — Eine kleine Nachtmusik, I (1787)", "Haydn — String Quartet Op.33 No.2, I (1781)"]),
            secKnowledge("Exposition: Theme 2", "Запропонувати контрастну тему в домінанті — ліричну, легшу.", "Тема 2 — це «відповідь» Темі 1. Якщо Т1 активна, Т2 лірична. Контраст між темами — суть сонатної форми.", "Тема 2 занадто схожа на Т1 — втрачається контраст. Тема 2 занадто контрастна — твір розпадається.", "У монотематичній сонаті (Haydn), де Т2 = варіація Т1.", "«Чи достатньо Т2 відрізняється від Т1, щоб створити драматичну напругу?»", ["Mozart — Symphony No.40, I — T2 (1788)", "Beethoven — Symphony No.7, I — T2 (1812)"]),
            secKnowledge("Exposition: Closing", "Закріпити нову тональність (домінанту) перед розробкою.", "Клозінг — це «крапка» після експозиції. Вона стверджує, що ми в новій тональності, і готує повторення експозиції.", "Клозінг без характерного матеріалу — просто ще одна секція. Занадто довгий — втрачається імпульс до розробки.", "У сонатах без клозінгу (експозиція завершується Т2).", "«Чи відчувається клозінг як завершення експозиції?»", ["Beethoven — Symphony No.5, I (1808)", "Mozart — Piano Sonata K.545, I (1788)"]),
            secKnowledge("Development", "Трансформувати теми — модулювати, фрагментувати, комбінувати.", "Розробка — це серце сонати. Тут теми руйнуються і переосмислюються. Слухач чує знайомий матеріал у новому світлі.", "Розробка без напрямку — хаос. Розробка, яка занадто точно повторює теми — не трансформація.", "У сонатах без розробки (сонатина).", "«Чи чує слухач теми, навіть коли вони трансформовані? Чи є напрямок?»", ["Beethoven — Symphony No.3 'Eroica', I, Development (1803)", "Mozart — Symphony No.41 'Jupiter', I, Development (1788)"]),
            secKnowledge("Recapitulation: Theme 1", "Повернути головну тему в тоніці — підтвердити форму.", "Реприза Т1 — це момент впізнавання. Слухач повернувся додому після подорожі розробкою.", "Реприза Т1 точь-в-точь — втрачена можливість показати зміну. Реприза надто змінена — не відчувається як повернення.", "У репризах з варіацією (Beethoven часто додає розвиток).", "«Чи звучить Т1 по-новому після розробки?»", ["Beethoven — Symphony No.5, I, Recapitulation (1808)", "Mozart — Symphony No.40, I, Recapitulation (1788)"]),
            secKnowledge("Recapitulation: Theme 2", "Повернути Т2 — тепер у тоніці, без модуляції.", "Т2 в репризі — це найважливіший структурний момент. Вона більше не в домінанті — тональний конфлікт вирішено. Слухач підсвідомо відчуває це як розв'язку.", "Т2 в репризі без змін — не враховує, що тональність змінилася. Т2 надто змінена — втрачається впізнаваність.", "У сонатах, де Т2 в репризі майже ідентична експозиційній (Mozart).", "«Чи звучить Т2 як «відповідь» на Т1 тепер, коли обидві в тоніці?»", ["Mozart — Piano Sonata K.545, I (1788)", "Beethoven — Symphony No.5, I (1808)"]),
            secKnowledge("Coda", "Завершити форму — підсумувати подорож.", "Кода — це останнє слово сонати. У класиків (Mozart) — коротка. У Beethoven — може бути другою розробкою.", "Кода занадто довга — слухач вже попрощався. Кода відсутня — форма закінчується різко.", "У сонат без коди (Mozart часто).", "«Чи відчувається кода як завершення подорожі, а не просто додаток?»", ["Beethoven — Symphony No.5, I, Coda (1808)", "Mozart — Symphony No.40, I (1788)"])
          ],
          failureAnalysis: [
            failureEntry("Theme 1 (Expo)", "Тему 1 видалено", ["Немає головної ідентичності — форма не має опори", "Т2 не має контексту — контраст не працює", "Розробка не має що трансформувати"]),
            failureEntry("Transition", "Транзицію видалено", ["Т1→Т2 без модуляції — тональний конфлікт відсутній", "Різкий перехід — слухач не встигає", "Втрачено наростання напруги"]),
            failureEntry("Theme 2 (Expo)", "Тему 2 видалено", ["Немає контрасту — соната стає монотематичною", "Втрачено тональний конфлікт (тоніка vs домінанта)", "Форма втрачає драму"]),
            failureEntry("Closing (Expo)", "Клозінг видалено", ["Експозиція не має завершення", "Нова тональність не закріплена", "Перехід до розробки різкий"]),
            failureEntry("Development", "Розробку видалено", ["Форма стає експозиція + реприза — це не соната", "Втрачено трансформацію — повернення до Т1 не має сенсу", "Драматична арка втрачена"]),
            failureEntry("Theme 1 (Recap)", "Репризу Т1 видалено", ["Повернення не відбувається — слухач чекає", "Розробка не має розв'язки", "Форма не закривається"]),
            failureEntry("Theme 2 (Recap)", "Репризу Т2 видалено", ["Тональний конфлікт не вирішено — Т2 не в тоніці", "Слухач відчуває незавершеність", "Форма втрачає симетрію"]),
            failureEntry("Coda", "Коду видалено", ["Форма закінчується різко", "Остання секція не має завершення", "Втрачена можливість підсумувати подорож"])
          ],
          variants: [
            variant("Monothematic Sonata", "Haydn", "Одна тема замість двох. Т2 = варіація Т1. Контраст — у тональності, не в матеріалі.", "Плюс: єдність матеріалу. Мінус: менше драматичного контрасту."),
            variant("Slow Introduction", "Haydn, Beethoven", "Повільний вступ перед експозицією. Створює очікування Allegro.", "Плюс: більша арка. Мінус: ризик затягнутості."),
            variant("Development + Cadenza", "Концертна соната", "Розробка переривається каденцією соліста. Потім реприза.", "Плюс: віртуозний контраст. Мінус: каденція може порушити форму.")
          ],
          canonicalTracks: [
            track("Symphony No.40 K.550, I", "W. A. Mozart", 1788, "G minor. Еталон сонати. Т1 — драматична, Т2 — лірична. Розробка — фугато.", [
              { name: "Expo: Theme 1", time: "0:00–0:30" },
              { name: "Expo: Transition", time: "0:31–0:45" },
              { name: "Expo: Theme 2", time: "0:46–1:15" },
              { name: "Expo: Closing", time: "1:16–1:30" },
              { name: "Development", time: "1:31–2:30" },
              { name: "Recap: Theme 1", time: "2:31–3:00" },
              { name: "Recap: Theme 2", time: "3:01–3:30" },
              { name: "Coda", time: "3:31–4:00" }
            ], "classical", { segmentation: 90, repetition: 65, contrast: 85, directionality: 85 }),
            track("Symphony No.5 Op.67, I", "L. van Beethoven", 1808, "C minor. Знаменитий «доля стукає в двері» мотив. Уся симфонія з одного мотиву. Гігантська кода.", [
              { name: "Expo: Theme 1", time: "0:00–0:30" },
              { name: "Expo: Transition", time: "0:31–0:45" },
              { name: "Expo: Theme 2", time: "0:46–1:15" },
              { name: "Expo: Closing", time: "1:16–1:45" },
              { name: "Development", time: "1:46–3:00" },
              { name: "Recap: Theme 1", time: "3:01–3:30" },
              { name: "Recap: Theme 2", time: "3:31–4:00" },
              { name: "Coda (massive)", time: "4:01–6:00" }
            ], "classical", { segmentation: 85, repetition: 70, contrast: 80, directionality: 90 }),
            track("Eine kleine Nachtmusik K.525, I", "W. A. Mozart", 1787, "G major. Світла, життєрадісна соната. Ідеальна для навчання — всі елементи на своїх місцях.", [
              { name: "Expo: Theme 1", time: "0:00–0:20" },
              { name: "Expo: Transition", time: "0:21–0:35" },
              { name: "Expo: Theme 2", time: "0:36–1:00" },
              { name: "Expo: Closing", time: "1:01–1:15" },
              { name: "Development", time: "1:16–1:45" },
              { name: "Recap: Theme 1", time: "1:46–2:05" },
              { name: "Recap: Theme 2", time: "2:06–2:30" },
              { name: "Coda", time: "2:31–2:50" }
            ], "classical", { segmentation: 90, repetition: 70, contrast: 80, directionality: 80 }),
            track("Piano Sonata No.8 Op.13 'Pathetique', I", "L. van Beethoven", 1799, "C minor. Повільний вступ (Grave) + Allegro. Драматична соната.", [
              { name: "Slow intro (Grave)", time: "0:00–1:00" },
              { name: "Expo: Theme 1", time: "1:01–1:30" },
              { name: "Expo: Theme 2", time: "1:31–2:15" },
              { name: "Development", time: "2:16–3:30" },
              { name: "Recap: Theme 1", time: "3:31–4:00" },
              { name: "Recap: Theme 2", time: "4:01–4:45" },
              { name: "Coda", time: "4:46–5:30" }
            ], "classical", { segmentation: 85, repetition: 60, contrast: 85, directionality: 85 }),
            track("Piano Sonata No.16 K.545, I", "W. A. Mozart", 1788, "C major. Найпростіша соната — ідеальна для навчання. Прозора фактура.", [
              { name: "Expo: Theme 1", time: "0:00–0:15" },
              { name: "Expo: Transition", time: "0:16–0:25" },
              { name: "Expo: Theme 2", time: "0:26–0:45" },
              { name: "Expo: Closing", time: "0:46–1:00" },
              { name: "Development", time: "1:01–1:30" },
              { name: "Recap: Theme 1", time: "1:31–1:45" },
              { name: "Recap: Theme 2", time: "1:46–2:05" },
              { name: "Coda (minimal)", time: "2:06–2:15" }
            ], "classical", { segmentation: 95, repetition: 70, contrast: 80, directionality: 80 }),
            track("String Quartet Op.33 No.2 'Joke', I", "J. Haydn", 1781, "E-flat major. Монотематична соната. Одна тема — два характери.", [
              { name: "Expo: Theme 1", time: "0:00–0:20" },
              { name: "Expo: Theme 2 (same theme)", time: "0:21–0:50" },
              { name: "Development", time: "0:51–1:30" },
              { name: "Recap: Theme 1", time: "1:31–2:00" },
              { name: "Coda (joke)", time: "2:01–2:30" }
            ], "classical", { segmentation: 85, repetition: 75, contrast: 70, directionality: 75 }),
            track("Symphony No.3 Op.55 'Eroica', I", "L. van Beethoven", 1803, "E-flat major. Гігантська розробка (250 тактів). Розробка включає нову тему — нечувано.", [
              { name: "Expo: Theme 1", time: "0:00–1:00" },
              { name: "Expo: Theme 2", time: "1:01–2:00" },
              { name: "Development (massive)", time: "2:01–6:00" },
              { name: "Recap: Theme 1", time: "6:01–7:00" },
              { name: "Recap: Theme 2", time: "7:01–8:00" },
              { name: "Coda", time: "8:01–10:00" }
            ], "classical", { segmentation: 85, repetition: 55, contrast: 90, directionality: 90 }),
            track("Symphony No.41 K.551 'Jupiter', I", "W. A. Mozart", 1788, "C major. Фугато в розробці. 5 голосів у фіналі.", [
              { name: "Expo: Theme 1", time: "0:00–0:30" },
              { name: "Expo: Theme 2", time: "0:31–1:15" },
              { name: "Development (fugato)", time: "1:16–2:30" },
              { name: "Recap: Theme 1", time: "2:31–3:00" },
              { name: "Recap: Theme 2", time: "3:01–3:30" },
              { name: "Coda", time: "3:31–4:00" }
            ], "classical", { segmentation: 90, repetition: 60, contrast: 85, directionality: 85 }),
            track("Symphony No.7 Op.92, I", "L. van Beethoven", 1812, "A major. Ритмічна соната. Розробка — ритмічний розвиток, не мелодійний.", [
              { name: "Expo: Theme 1", time: "0:00–1:00" },
              { name: "Expo: Theme 2", time: "1:01–2:00" },
              { name: "Development (rhythmic)", time: "2:01–4:00" },
              { name: "Recap: Theme 1", time: "4:01–5:00" },
              { name: "Recap: Theme 2", time: "5:01–6:00" },
              { name: "Coda", time: "6:01–7:00" }
            ], "classical", { segmentation: 85, repetition: 60, contrast: 80, directionality: 85 }),
            track("Symphony No.104 'London', I", "J. Haydn", 1795, "D major. Повільний вступ + гайднівська монотематична соната.", [
              { name: "Slow intro", time: "0:00–1:00" },
              { name: "Expo: Theme 1", time: "1:01–1:30" },
              { name: "Expo: Theme 2", time: "1:31–2:15" },
              { name: "Development", time: "2:16–3:30" },
              { name: "Recap", time: "3:31–4:30" },
              { name: "Coda", time: "4:31–5:00" }
            ], "classical", { segmentation: 85, repetition: 65, contrast: 80, directionality: 80 })
          ],
          diagnosis: [
            "Чи достатньо контрастують Т1 і Т2?",
            "Чи відчувається розробка як трансформація, не новий матеріал?",
            "Чи помічає слухач зміну тональності між Т1 і Т2 в експозиції?",
            "Чи звучить реприза як вирішення тонального конфлікту?",
            "Чи не занадто довга розробка? Чи не занадто коротка?",
            "Чи чує слухач теми в розробці, навіть трансформовані?",
            "Чи відчувається форма як драматична арка, а не набір секцій?",
            "Чи має кода відчуття підсумку?"
          ],
          genreTransfer: [
            genreTransfer("Pop", "Bridge = розробка. Final chorus = реприза.", "Куплет-приспів (експозиція) → брідж (розробка) → фінальний приспів (реприза)."),
            genreTransfer("Electronic", "Build = розробка. Drop = реприза.", "Білд трансформує матеріал, дроп повертає основну тему. Аналогія: білд = розробка, дроп = реприза."),
            genreTransfer("Film", "Hero's journey: представлення → пригоди → повернення.", "Сонатна форма = мономіф. Експозиція = звичайний світ. Розробка = пригоди. Реприза = повернення зі зміною."),
            genreTransfer("Rock", "Guitar solo = розробка. Повернення riff = реприза.", "У рок-музиці соло часто виконує функцію розробки — трансформує тему."),
            genreTransfer("Jazz", "Head = exposition. Solos = development. Head return = recapitulation.", "Джазова форма HSH майже ідентична сонатній за логікою.")
          ],
          dawExercise: [
            "Створи Theme 1 (8 тактів) — сильний мотив у тоніці.",
            "Створи Theme 2 (8 тактів) — контрастний, ліричний, в домінанті.",
            "Додай транзицію (4 такти) — модуляцію від Т1 до Т2.",
            "Створи розробку (16 тактів): візьми фрагмент Т1, трансформуй, модулюй.",
            "Поверни Т1 в тоніці (8 тактів) — реприза.",
            "Поверни Т2 тепер у тоніці (8 тактів) — тональний конфлікт вирішено."
          ],
          listeningExercise: [
            "Послухай Mozart Sym.40, I. Знайди Т1, Т2, розробку. Як Т2 змінюється в репризі?",
            "Послухай Beethoven Sym.5, I. Як один мотив (та-та-та-таа) пронизує всю форму?",
            "Послухай Eroica, I. Розробка вводить НОВУ тему — чи відчувається це як порушення форми?",
            "Послухай 'Joke' Quartet (Haydn). Як монотематична соната працює з однією темою?"
          ],
          comparisons: [
            { with: "Verse-Chorus", difference: "VC = A-B-A-B (циклічна). Sonata = Expo-Dev-Recap (лінійна подорож). VC повертає хук; Sonata повертає тему зміненою досвідом розробки." },
            { with: "Rondo", difference: "Rondo = A-B-A-C-A (рефрен повертається ідентичним). Sonata = A-B-Dev-A'-B' (теми змінюються). Rondo — цикл; Sonata — драма." },
            { with: "Theme & Variations", difference: "T&V — одна тема трансформується. Sonata — дві теми в конфлікті. T&V: тема через різні маски; Sonata: теми як два персонажі." },
            { with: "Through-Composed", difference: "Sonata повертає теми в Репризі. TC не повертає нічого. Однак Розробка за логікою схожа на TC — новий матеріал з фрагментів." },
            { with: "Club Arc", difference: "Обидва: intro → build → climax → resolution. Club Arc = build→drop→breakdown. Sonata = Expo→Dev→Recap. Різні культурні контексти — та сама драматургічна логіка." }
          ],
          glossary: [
            { term: "Exposition", definition: "Перша частина сонати. Представляє дві теми: Т1 (тоніка) і Т2 (домінанта). Завершується клозінгом." },
            { term: "Development", definition: "Друга частина. Теми трансформуються, модулюють, комбінуються. Найвільніша секція сонати." },
            { term: "Recapitulation", definition: "Третя частина. Повернення Т1 і Т2 в тоніці. Тональний конфлікт вирішено." },
            { term: "Tonal Duality", definition: "Конфлікт тональностей: Т1 в тоніці vs Т2 в домінанті. Суть сонатної драми." },
            { term: "Bridge / Transition", definition: "Секція, що з'єднує Т1 і Т2. Модулює від тоніки до домінанти." },
            { term: "Closing Theme", definition: "Завершальна секція експозиції. Закріплює нову тональність." },
            { term: "Coda", definition: "Завершальна секція після репризи. У класиків коротка; у Beethoven — розгорнута." },
            { term: "Monothematic Sonata", definition: "Соната з однією темою. Т2 = варіація Т1 в домінанті. Типово для Haydn." }
          ],
          teacherNotes: [
            "Найчастіша помилка: студент думає, що соната = три частини. Насправді соната — це НАПРУГА між двома темами в різних тональностях. Три частини — лише архітектура.",
            "Аналогія: експозиція = знайомство з двома персонажами. Розробка = пригода. Реприза = повернення. Персонажі ті самі, але змінені досвідом.",
            "Часте питання: «Чим соната відрізняється від рондо?» Відповідь: рондо повертає тему ІДЕНТИЧНОЮ. Соната повертає тему ЗМІНЕНОЮ досвідом розробки.",
            "Порада: покажіть Mozart Sym.40. Студент має почути, що Т1 — драматична (g minor), Т2 — лірична (B-flat major). Контраст = тональність + характер.",
            "Студенти плутають sonata-allegro (одна частина) з sonata (три-чотири частини). Sonata-allegro — це ФОРМА однієї частини (зазвичай I)."
          ],
          deviations: [
            { track: "Moonlight Sonata Op.27 No.2, I (Beethoven, 1801)", explanation: "Не соната! Beethoven назвав її 'Sonata quasi una fantasia'. I частина — через-компонована, без сонатної форми. Показує: назва 'sonata' не гарантує sonata-allegro." },
            { track: "Symphony No.3 'Eroica', I (Beethoven, 1803)", explanation: "Розробка вводить НОВУ тему — нечуване порушення конвенції. Показує: форма може змінюватися генієм." },
            { track: "Symphony No.5, I (Beethoven, 1808)", explanation: "Кода настільки розгорнута, що звучить як друга розробка. Показує: кода може бути не просто завершенням, а новим розвитком." },
            { track: "String Quartet Op.33 No.2 'Joke', I (Haydn, 1781)", explanation: "Монотематична соната — Т2 = та сама тема в домінанті. Показує: соната можлива без тематичного контрасту, тільки тонального." }
          ]
        },

        // ============================================================
        // Drone (Static/Hypnotic)
        // ============================================================
        {
          id: "drone",
          title: "Drone (Static/Hypnotic)",
          description: "Форма на сталому тоні (drone). Зміни — в просторі, текстурі, тембрі, але не в гармонії. Час зупиняється.",
          generatedBy: ["segmentation", "repetition", "directionality"],
          genre: "ambient / experimental / medieval",
          tempo: "slow (40-80 BPM)",
          difficulty: "medium",
          sections: [
            { name: "Drone Establishment", bars: 32, concept: "segmentation", function: "Встановити сталий тон, пульс" },
            { name: "Texture Layer 1", bars: 32, concept: "repetition", function: "Додати перший текстурний шар" },
            { name: "Texture Shift", bars: 32, concept: "directionality", function: "Змінити текстуру (фільтр, тембр)" },
            { name: "Density Peak", bars: 32, concept: "directionality", function: "Максимальна щільність" },
            { name: "Drone Fade", bars: 32, concept: "segmentation", function: "Повернення до мінімуму, розчинення" }
          ],
          conclusion: "Drone навчає: форма може існувати без гармонійного руху. Час зупиняється — змінюється тільки сприйняття. Слухач входить в стан.",
          sectionKnowledge: [
            secKnowledge("Drone Establishment", "Встановити сталий тон — основу для всієї форми.", "Drone — це нерухома точка. Слухач має «ввійти» в тон, відчути його як простір, а не як подію. Час перестає рухатися.", "Drone занадто складний — втрачається статика. Drone без character — немає кольору.", "У творах, де drone є фоном, а не формою.", "«Чи може слухач забути про час, слухаючи цей тон?»", ["La Monte Young — Trio for Strings (1958)", "Brian Eno — Discreet Music (1975)"]),
            secKnowledge("Texture Layer 1", "Додати перший текстурний шар поверх drone — тембр, обертони, підголоски.", "Перший шар — це «колір» дрону. Він не змінює гармонію, але змінює сприйняття. Слухач чує той самий тон, але інакше.", "Шар занадто густий — drone втрачає чистоту. Шар занадто тонкий — не відчувається.", "У мінімалістичному drone, де texture shift — єдиний рух.", "«Чи змінює цей шар сприйняття дрону?»", ["Éliane Radigue — Trilogie de la Mort (1998)", "Stars of the Lid — And Their Refinement of the Decline (2007)"]),
            secKnowledge("Texture Shift", "Змінити текстуру — фільтр, простір, тембр. Без зміни тону.", "Texture shift — це «подія» в drone формі. Вона ледь помітна, але змінює сприйняття. Слухач відчуває: щось змінилося, але не знає що.", "Зміна занадто різка — руйнує гіпноз. Зміна занадто повільна — невідчутна.", "У творах, де texture shift — єдиний тип зміни.", "«Чи помітить слухач зміну, якщо відвернеться?»", ["Terry Riley — A Rainbow in Curved Air (1969)", "Basic Channel — Radiance (1994)"]),
            secKnowledge("Density Peak", "Найвища щільність — кульмінація drone форми.", "Density peak — це «найбільше» в drone. Не голосніше, а щільніше. Слухач відчуває повноту простору.", "Пік занадто щільний — шум. Пік недостатній — не відчувається як кульмінація.", "У творах без піку (рівномірна щільність).", "«Чи відчувається цей момент як НАЙбільший?»", ["Charlemagne Palestine — Strumming Music (1974)", "Kali Malone — The Sacrificial Code (2019)"]),
            secKnowledge("Drone Fade", "Зменшити щільність — повернутися до початкового тону, розчинитися.", "Drone fade — це не завершення, а розчинення. Слухач не чує «кінця» — він чує, як музика йде в простір.", "Fade занадто швидкий — слухач не встигає. Fade занадто повільний — втрачається увага.", "У творах, що закінчуються на піку (без fade).", "«Чи звучить фінальний тон так само, як на початку? Чи змінилося сприйняття?»", ["Brian Eno — Music for Airports 1/1 (1978)", "Pauline Oliveros — Deep Listening (1989)"])
          ],
          failureAnalysis: [
            failureEntry("Drone Est.", "Drone не встановлено", ["Немає статичної основи — форма не має якоря", "Текстурні шари не мають бази", "Слухач не може «ввійти» в стан"]),
            failureEntry("Texture Layer 1", "Перший шар не додано", ["Drone залишається чистим — немає розвитку", "Відсутність кольору — форма плоска", "Слухач не отримує нової інформації"]),
            failureEntry("Texture Shift", "Текстурна зміна відсутня", ["Форма не має руху — абсолютна статика", "Слухач не помічає змін — увага падає", "Drone стає нудним, не гіпнотичним"]),
            failureEntry("Density Peak", "Кульмінація не досягнута", ["Форма не має піку — арка відсутня", "Шари нашаровуються без мети", "Слухач не отримує винагороди за увагу"]),
            failureEntry("Drone Fade", "Fade не відбувається", ["Форма обривається — слухач викинутий зі стану", "Розчинення не завершує подорож", "Відсутність архітектурного закриття"])
          ],
          variants: [
            variant("Timbral Drone", "Radigue, Young", "Зміна через обертони/спектр. Той самий тон — різний тембр.", "Плюс: найчистіша drone форма. Мінус: потребує уважного слухання."),
            variant("Pulse Drone", "Basic Channel, Palestine", "Drone з ритмічним пульсом (kick або повторюваний ритм).", "Плюс: драйв + гіпноз. Мінус: пульс може відволікати від дрону."),
            variant("Modal Drone", "Riley, Eno", "Drone + модальні мелодичні фрагменти. Зміни — в мелодії, не в гармонії.", "Плюс: мелодійний інтерес. Мінус: мелодія може порушити гіпноз.")
          ],
          canonicalTracks: [
            track("The Well-Tuned Piano", "La Monte Young", 1964, "5+ годин, just intonation. Drone як ціла форма — монументальний гіпноз.", [
              { name: "Tuning / Drone Est.", time: "0:00–10:00" },
              { name: "The Opening Chord", time: "10:01–30:00" },
              { name: "Section 1 (static)", time: "30:01–60:00" },
              { name: "Section 2 (density peak)", time: "60:01–90:00" },
              { name: "Dissolution", time: "90:01–120:00" }
            ], "contemporary", { segmentation: 40, repetition: 95, contrast: 20, directionality: 40 }),
            track("Trio for Strings", "La Monte Young", 1958, "Перший мінімалістичний drone твір. Довжелезні тони, мінімальний рух.", [
              { name: "Drone (viola)", time: "0:00–2:00" },
              { name: "Violin enters", time: "2:01–4:00" },
              { name: "Cello enters", time: "4:01–6:00" },
              { name: "Texture shift", time: "6:01–8:00" },
              { name: "Dissolution", time: "8:01–12:00" }
            ], "contemporary", { segmentation: 50, repetition: 95, contrast: 30, directionality: 45 }),
            track("A Rainbow in Curved Air", "Terry Riley", 1969, "Органний drone + нашарування. Пульсуючий гіпноз.", [
              { name: "Drone (organ)", time: "0:00–1:00" },
              { name: "Pulse enters", time: "1:01–3:00" },
              { name: "Melody overlay", time: "3:01–5:00" },
              { name: "Full texture", time: "5:01–8:00" },
              { name: "Gradual fade", time: "8:01–10:00" }
            ], "minimalist", { segmentation: 55, repetition: 85, contrast: 35, directionality: 50 }),
            track("Deep Listening", "Pauline Oliveros", 1989, "Медитативний drone. Форма — це слухання, не компонування.", [
              { name: "Tuning", time: "0:00–1:00" },
              { name: "Drone (accordion)", time: "1:01–5:00" },
              { name: "Voice enters", time: "5:01–8:00" },
              { name: "Full resonance", time: "8:01–12:00" },
              { name: "Fade into space", time: "12:01–15:00" }
            ], "ambient", { segmentation: 45, repetition: 90, contrast: 25, directionality: 40 }),
            track("Trilogie de la Mort", "Éliane Radigue", 1998, "Електронний drone. Майже непомітні зміни. Години медитації.", [
              { name: "Part I: Drone", time: "0:00–20:00" },
              { name: "Part I: Texture shift", time: "20:01–40:00" },
              { name: "Part II: Departure", time: "40:01–60:00" },
              { name: "Part III: Dissolution", time: "60:01–90:00" }
            ], "electronic", { segmentation: 30, repetition: 95, contrast: 15, directionality: 35 }),
            track("Discreet Music", "Brian Eno", 1975, "Генеративний ambient drone. Система + випадковість.", [
              { name: "System A (active)", time: "0:00–5:00" },
              { name: "Phase shift", time: "5:01–10:00" },
              { name: "System B (passive)", time: "10:01–15:00" },
              { name: "Return to origin", time: "15:01–20:00" },
              { name: "Fade", time: "20:01–25:00" }
            ], "ambient", { segmentation: 50, repetition: 90, contrast: 30, directionality: 45 }),
            track("And Their Refinement of the Decline", "Stars of the Lid", 2007, "Сучасний drone. Емоційний, не холодний. Оркестровий дрон.", [
              { name: "Drone (strings)", time: "0:00–2:00" },
              { name: "Layer 1 (piano)", time: "2:01–5:00" },
              { name: "Texture shift (swell)", time: "5:01–8:00" },
              { name: "Density peak", time: "8:01–12:00" },
              { name: "Fade", time: "12:01–15:00" }
            ], "ambient", { segmentation: 55, repetition: 85, contrast: 35, directionality: 50 }),
            track("Strumming Music", "Charlemagne Palestine", 1974, "Фортепіанний drone. Перкусивне повторення. Транс на основі обертонів.", [
              { name: "Single note (G)", time: "0:00–1:00" },
              { name: "Strumming begins", time: "1:01–3:00" },
              { name: "Overtone accumulation", time: "3:01–6:00" },
              { name: "Density peak (cluster)", time: "6:01–8:00" },
              { name: "Release and fade", time: "8:01–10:00" }
            ], "contemporary", { segmentation: 50, repetition: 95, contrast: 25, directionality: 55 }),
            track("Radiance", "Basic Channel", 1994, "Dub techno drone. Bridge між клубною музикою і дроном.", [
              { name: "Sub-bass pulse", time: "0:00–0:30" },
              { name: "Kick enters", time: "0:31–1:00" },
              { name: "Delay wash (texture)", time: "1:01–2:00" },
              { name: "Chord fragment", time: "2:01–3:00" },
              { name: "Dub delay decay", time: "3:01–4:30" },
              { name: "Dissolve", time: "4:31–6:45" }
            ], "dub techno", { segmentation: 35, repetition: 85, contrast: 25, directionality: 45 }),
            track("The Sacrificial Code", "Kali Malone", 2019, "Органний drone. Just intonation. Сучасний ритуал.", [
              { name: "Drone (pipe organ)", time: "0:00–1:00" },
              { name: "Register shift", time: "1:01–3:00" },
              { name: "Harmonic shift", time: "3:01–5:00" },
              { name: "Density peak", time: "5:01–7:00" },
              { name: "Resonance decay", time: "7:01–10:00" }
            ], "contemporary", { segmentation: 55, repetition: 90, contrast: 30, directionality: 45 })
          ],
          diagnosis: [
            "Чи відчувається час зупиненим?",
            "Чи достатньо текстура змінюється, щоб утримувати увагу?",
            "Чи може слухач «ввійти» в стан — забути про час?",
            "Чи не занадто передбачувані зміни?",
            "Чи працює форма без гармонійного руху?",
            "Чи є відчуття напрямку без секцій і тем?",
            "Чи достатньо щільність піку відрізняється від початку?"
          ],
          genreTransfer: [
            genreTransfer("Ambient", "Drone як основа атмосфери.", "Амбієнт — природна територія дрону. Статичні тони, мінімальні зміни."),
            genreTransfer("Dub Techno", "Radiance, DeepChord. Пульс + drone.", "Dub техно додає ритм до дрону, створюючи гіпнотичний клубний трек."),
            genreTransfer("Shoegaze", "Гітарний drone — фуз, реверберація.", "My Bloody Valentine, Slowdive — стіна звуку як drone."),
            genreTransfer("Minimalism", "La Monte Young, Terry Riley.", "Мінімалізм починається з дрону. Ранній Райх, Янг — чисті drones."),
            genreTransfer("Film / Soundtrack", "Саспенс, напруга — drone foundation.", "Фільми жахів, трилери — drone створює тривогу без гармонійного руху."),
            genreTransfer("Meditation", "Функціональна музика для практики.", "Медитативний drone: довгі тони, відсутність подій, простір для дихання.")
          ],
          dawExercise: [
            "Налаштуй drone тон (C або G) — синезатор, орган, стрінги.",
            "Запиши 32 такти: drone без змін. Слухай, чи можеш «ввійти» в стан.",
            "Додай текстурний шар (16 тактів): обертони, гармоніки, шум.",
            "Зміни текстуру (32 такти): фільтр, реверберація, delay. Зміна має бути повільною.",
            "Досягни максимальної щільності (32 такти): додай всі шари.",
            "Розчини: видаляй шари по одному, повернися до чистого дрону, fade out."
          ],
          listeningExercise: [
            "Послухай Discreet Music (Eno). Чи відчуваєш форму без секцій?",
            "Послухай Trio for Strings (Young). Як довго ти можеш слухати один тон?",
            "Послухай Radiance (Basic Channel). Чи чуєш drone під пульсом kick?",
            "Послухай Strumming Music (Palestine). Як одне повторення створює форму?"
          ],
          comparisons: [
            { with: "Process-Based Minimal", difference: "PB керується ПРАВИЛОМ трансформації. Drone — СТАТИКОЮ. PB — подорож з напрямком; Drone — перебування в точці. PB: зміни помітні. Drone: зміни на межі відчуття." },
            { with: "Club Arc", difference: "CA — енергетична дуга (intro → build → drop). Drone — відсутність дуги. CA — рух і вивільнення; Drone — стан. CA для тіла; Drone для свідомості." },
            { with: "Through-Composed", difference: "TC рухається вперед — нова секція за новою. Drone стоїть на місці — той самий тон. TC = подорож; Drone = медитація." },
            { with: "Verse-Chorus", difference: "VC має чіткі секції, теми, хук. Drone не має жодної з цих речей. VC = архітектура змісту; Drone = архітектура відсутності змісту." },
            { with: "12-Bar Blues", difference: "12-Bar циклічно рухається через гармонії. Drone утримує один тон. Blues = час як пульс; Drone = час як простір." }
          ],
          glossary: [
            { term: "Drone", definition: "Сталий тон, що триває протягом усієї форми або її частини. Основа гіпнотичної музики." },
            { term: "Overtone Series", definition: "Набір обертонів (гармонік), які звучать над основним тоном. Зміна обертонів = зміна тембру." },
            { term: "Timbral Form", definition: "Форма, де зміни відбуваються в ТЕМБРІ, а не в гармонії, мелодії чи ритмі." },
            { term: "Static Harmony", definition: "Гармонія, що не змінюється. Один акорд або тон на всю форму. Протилежність тональному руху." },
            { term: "Spectral Shift", definition: "Зміна в спектрі звуку — обертони, фільтрація, резонанс. Основний тип руху в drone." },
            { term: "Immersion", definition: "Стан занурення — слухач «входить» у звук і втрачає відчуття часу. Мета drone форми." },
            { term: "Beat Frequency", definition: "Акустичне биття між двома близькими частотами. Створює пульсацію без ритмічних інструментів." }
          ],
          teacherNotes: [
            "Найчастіша помилка: студент думає, що drone = нічого не відбувається. Поясніть: саме в цьому його сила. Drone — це форма, де головна подія — ВІДСУТНІСТЬ подій.",
            "Аналогія: drone — це дивитися на море. Хвилі майже однакові, але ви не можете відвести погляд. Зміни ледь помітні — але ви відчуваєте час інакше.",
            "Часте питання: «Чи це музика, якщо в ній нічого не змінюється?» Відповідь: змінюється СПРИЙНЯТТЯ. Drone не змінює матеріал — він змінює слухача.",
            "Порада: покажіть Discreet Music. Попросіть студента слухати 5 хвилин мовчки. Після — запитайте: «Ти відчув час інакше? Де ти був?»",
            "Студенти плутають drone з педаллю. Педаль — епізодичний тон. Drone — ФОРМА. Drone не проходить — drone триває всю п'єсу."
          ],
          deviations: [
            { track: "The Well-Tuned Piano (La Monte Young, 1964)", explanation: "5+ годин. Drone не як ефект, а як ВСЯ форма. Just intonation. Показує: drone може бути монументальним — годинним, просторовим, ритуальним." },
            { track: "Trilogie de la Mort (Éliane Radigue, 1998)", explanation: "Електронний drone, майже непомітні зміни. Форма = медитація, не події. Показує: drone може тривати години без втрати інтересу." },
            { track: "And Their Refinement of the Decline (Stars of the Lid, 2007)", explanation: "Drone як ЕМОЦІЙНА музика. Показує: відсутність гармонійного руху не означає відсутність емоції. Drone може бути зворушливим." },
            { track: "Radiance (Basic Channel, 1994)", explanation: "Dub techno — клубний drone. Показує: bridge-форма — drone може мати танцювальний пульс, не втрачаючи гіпнозу." }
          ],
          families: [
  {
    id: "ambient",
    name: "Ambient Drone",
    bpm: "н/а або 40–60",
    structuralProfile: "Статичні або дуже повільно змінювані шари звуку без чіткої метричної сітки. Форма визначається трансформацією тембру й щільності, а не розвитком мелодії чи гармонії.",
    energyProfile: "Рівна, медитативна енергія – майже без динамічних піків. Твір існує як звуковий простір, у якому слухач «перебуває», а не «рухається».",
    canonicalTracks: [
      "Brian Eno — Discreet Music (1975)",
      "Stars of the Lid — The Tired Sounds of Stars of the Lid (2001)",
      "Brian Eno — Ambient 1: Music for Airports (1978)",
      "Stars of the Lid — And Their Refinement of the Decline (2007)",
      "Harold Budd & Brian Eno — The Plateaux of Mirror (1980)"
    ],
    commonMistakes: [
      "Плутання з фоновою музикою – ambient drone має власну естетичну логіку, а не просто «нейтральний фон».",
      "Зайве додавання мелодійних ліній або ритмічних елементів, що руйнують статичну атмосферу.",
      "Ігнорування мікродинаміки – навіть у «нерухомому» звуковому полі присутні тонкі тембральні зміни."
    ],
    distinguishingFeatures: [
      "Відсутність помітного ритму або метра – час виміряється диханням, а не долями.",
      "Зміна тембру як основний драматургічний засіб: реверб, фільтрація, мікроварації гармонік.",
      "Атмосфера «звукового пейзажу» – твір викликає просторові або природні асоціації.",
      "Записи зазвичай тривалі (10–60+ хвилин), призначені для тривалого занурення."
    ]
  },
  {
    id: "dark-ambient",
    name: "Dark Ambient",
    bpm: "н/а або 30–50",
    structuralProfile: "Похмурі, індустріальні або містичні звукові ландшафти, побудовані на дисонуючих дронах, металевих текстурах і обробленому шумі. Форма розгортається повільно, нагнітаючи напругу.",
    energyProfile: "Пригнічена, тривожна або ритуально-медитативна енергія. Динаміка може коливатися між глибокою тишею та щільними звуковими масами, але без «розрядки» у традиційному сенсі.",
    canonicalTracks: [
      "Lustmord — Heresy (1990)",
      "Klaus Schulze — Irrlicht (1972)",
      "Coil — Black Light District (1996)",
      "Raison d'être — Prospectus I (1993)",
      "Atrium Carceri — Cellblock (2003)"
    ],
    commonMistakes: [
      "Зведення жанру до «страшної музики» – dark ambient має власну естетику, що виходить за межі простого нагнітання жаху.",
      "Перенасичення синтетичними ефектами на шкоду просторовій глибині та текстурному балансу.",
      "Ігнорування тиші як структурного елемента – паузи й розрідженість звуку critical для жанру."
    ],
    distinguishingFeatures: [
      "Дисонуючі або мікротональні дрони з вираженою «темною» емоційною конотацією.",
      "Використання індустріальних, металевих або оброблених органічних джерел звуку.",
      "Відчуття простору – глибокий реверб і просторова панорама створюють «архітектуру» звуку.",
      "Зв'язок з окультними, ритуальними або постапокаліптичними образами та концепціями."
    ]
  },
  {
    id: "drone-ambient",
    name: "Drone Ambient",
    bpm: "н/а",
    structuralProfile: "Максимально редуктивний підхід: один або кілька стійких тонів утримуються протягом усього твору, утворюючи нерухомий гармонічний фундамент. Розвиток відбувається через акустичні явища (обертони, биття частот) і мікроварації виконання.",
    energyProfile: "Позачасова, трансова енергія – твір прагне до стану «вічного теперішнього». Слухач поступово починає чути внутрішню рухливість, яка не є очевидною на перший погляд.",
    canonicalTracks: [
      "La Monte Young — The Well-Tuned Piano (1964–1981)",
      "Éliane Radigue — Trilogie de la Mort (1988–1993)",
      "Kali Malone — Does Spring Hide Its Joy (2023)",
      "La Monte Young & Marian Zazeela — Just Stompin' (1993)",
      "Phill Niblock — Touch Food (2002)"
    ],
    commonMistakes: [
      "Сприйняття твору як «нічого не відбувається» – весь сенс у тонких акустичних взаємодіях між стійкими тонами.",
      "Прослуховування в умовах зовнішнього шуму – жанр вимагає акустично контрольованого середовища.",
      "Ігнорування настроювання – мікротональні співвідношення між дронами є змістом, а не деталлю."
    ],
    distinguishingFeatures: [
      "Just intonation або мікротональне настроювання як основа звукового матеріалу.",
      "Биття частот і комбінаційні тони стають помітними музичними подіями.",
      "Тривалість як художній засіб – твори часто тривають годинами або навіть днями.",
      "Коріння у «серйозній» академічній традиції (Флюксус, мінімалізм), а не в поп-культурі."
    ]
  },
  {
    id: "isolationist",
    name: "Isolationist",
    bpm: "н/а або дуже повільно",
    structuralProfile: "Клаустрофобічні або пустельні звукові ландшафти з мінімальним матеріалом, що підкреслює відчуження й самотність. Нерідко поєднує елементи дрону з технонімалістичними rite імпульсами або redukcionist-технологіями.",
    energyProfile: "Відчужена, інтроспективна або клінічно-холодна енергія. Жанр уникає будь-якого «тепла» або комфорту, натомість підкреслює психологічну ізоляцію та дистанцію.",
    canonicalTracks: [
      "Maurizio — M4 (1992)",
      "Basic Channel — Phylyps Trak (1993)",
      "Kevin Drummond — From a Room Below (1994)",
      "Porter Ricks — Biokinetics (1996)",
      "Monolake — Hongkong (1997)"
    ],
    commonMistakes: [
      "Плутання з мінімал-текно – isolationist свідомо уникає танцювальної функції та «тілесності» ритму.",
      "Додавання мелодійних або гармонічних «прикрас», що суперечать концепції мінімального відчуження.",
      "Ігнорування просторової обробки – специфічна «кімнатна» акустика є частиною естетики жанру."
    ],
    distinguishingFeatures: [
      "Свідоме прагнення до відчуження: звукові елементи навмисно позбавлені «людського тепла».",
      "Погранична зона між дроном та мінімал-технологічними структурами (Basic Channel, Chain Reaction).",
      "Акцент на просторі між звуками – тиша та порожнеча є рівноправними елементами.",
      "Концептуальний зв'язок з ідеями ізоляції, індустріального пейзажу або кіберпросторової самотності."
    ]
  }
]
        }
      ];

      // ===== STATE =====
const state = {
  mode: "concept",                // "concept" | "form"
  selectedConcept: "segmentation",
  selectedForm: null,
  visitedConcepts: { segmentation: true },
  lang: "uk",                     // "uk" | "en"
  showDecision: false,
  showExercise: false,
  showSecKnowledge: false,
  showFailure: false,
  showVariants: false,
  showTracks: false,
  showDiagnosis: false,
  showGenreTransfer: false,
  showDawExercise: false,
  showListeningExercise: false,
  showComparisons: false,
  showGlossary: false,
  showTeacherNotes: false,
  showDeviations: false,
  showFamilies: false,
    showProductionTradition: false,
    showDawTranslation: false,
    activeDaw: "ableton",           // "ableton" | "flStudio" | "logic"
    famOpen: {},                    // per-family toggles, keyed by `${section}_${famId}`
    expandCiv: {},                  // territory: expanded civilization ids
    expandFam: {},                  // territory: expanded family ids
    selectedStub: null,             // territory: selected stub form id
        showCompositionDecisions: false,
        showDesignConstraints: false,
        selectedSection: 0
};

// ===== DOM REFS =====
const els = {};
function cacheEls() {
  els.app = document.getElementById("app");
  els.progress = document.getElementById("progressIndicator");
  els.hasOwnProperty;
}

// ===== I18N =====
const i18n = {
  uk: {
    appSubtitle: "Навчання форми через композиційні рішення",
    coreConcepts: "Базові концепти",
    formArchetypes: "Архетипи форми",
    formHint: "— як концепти поєднуються",
    visited: "✓",
    unvisited: "○",
    breadcrumbConcepts: "Базові концепти",
    breadcrumbArchetypes: "Архетипи форми",
    problemHeading: "Проблема, яку це вирішує",
    showDecision: "▼ Показати рішення",
    hideDecision: "▲ Згорнути",
    decisionHeading: "Рішення композитора",
    mistakeHeading: "Типова помилка початківця",
    showExercise: "▼ Показати вправу",
    hideExercise: "▲ Згорнути",
    exerciseHeading: "✍ Вправа",
    verificationHeading: "Перевірка:",
    dawPromptLabel: "▶ Спробуй зараз у своїй DAW:",
    canonicalTrackHeading: "🎵 Канонічний трек",
    buildsFormsHeading: "Як це будує форми",
    timelineHeading: "Хронологія",
    difficultyLabel: "Складність:",
    sectionKnowledgeHeading: "📖 Знати цю секцію",
    purposeLabel: "Навіщо:",
        whyWorksLabel: "Чому працює:",
        mistakeLabel: "Помилка:",
        whenSkipLabel: "Коли пропустити:",
        composerDecisionLabel: "Рішення:",
        examplesLabel: "Приклади:",
        failureHeading: "💥 Аналіз руйнування",
        removedLabel: "Видалено:",
        effectsLabel: "Ефекти:",
        variantsHeading: "🔀 Варіанти форми",
        usedInLabel: "Використовується:",
        tradeoffsLabel: "Плюси / мінуси:",
        tracksHeading: "🎵 Канонічні треки",
        diagnosisHeading: "🔍 Самодіагностика",
        genreTransferHeading: "🌍 У різних жанрах",
        adaptationLabel: "Адаптація:",
        dawExerciseHeading: "⛏ DAW вправа",
        listeningExerciseHeading: "🎵 Слухова вправа",
        comparisonsHeading: "🔍 Порівняння",
        glossaryHeading: "📖 Глосарій",
        teacherNotesHeading: "📝 Для викладача",
        deviationsHeading: "🔄 Реальні відхилення",
        familiesHeading: "🎛 Сімейства реалізацій",
            structureLabel: "Структура:",
            energyLabel: "Енергія:",
            productionTraditionLabel: "Традиція продакшну",
                        canonicalTracksLabel: "Канонічні треки:",
                        compositionDecisionsLabel: "Композиційні рішення",
                        designConstraintsLabel: "Констрейнти дизайну",
                        formBearerLabel: "Носій форми",
                        developmentLabel: "Що створює розвиток",
                        contrastLabel: "Що створює контраст",
                        styleBreakersLabel: "Помилки, що руйнують стиль",
            sectionDurationLabel: "Тривалість секцій",
            contrastLevelLabel: "Контраст",
            densityLabel: "Щільність",
            harmonicLabel: "Гармонія",
            energyDynamicsLabel: "Енергія",
        featuresLabel: "Відмінні ознаки:",
            mistakesLabel: "Типові помилки:",
            conceptsHeading: "Які концепти створюють цю форму",
            generatedByLabel: "⚡ Створено з:",
    vsLabel: "проти",
    territoryLabel: "Територія",
    stubLabel: "Стаб території — форма на карті",
    stubBody: "Ця форма вже є на карті музичної території. Опис, канонічні твори та глибокий аналіз буде додано в наступних фазах.",
    langSwitch: "EN"
  },
  en: {
    appSubtitle: "Learning form through compositional decisions",
    coreConcepts: "Core Concepts",
    formArchetypes: "Form Archetypes",
    formHint: "— how concepts combine",
    visited: "✓",
    unvisited: "○",
    breadcrumbConcepts: "Core Concepts",
    breadcrumbArchetypes: "Form Archetypes",
    problemHeading: "Problem it solves",
    showDecision: "▼ Show decision",
    hideDecision: "▲ Collapse",
    decisionHeading: "Composer's decision",
    mistakeHeading: "Typical beginner mistake",
    showExercise: "▼ Show exercise",
    hideExercise: "▲ Collapse",
    exerciseHeading: "✍ Exercise",
    verificationHeading: "Check:",
    dawPromptLabel: "▶ Try now in your DAW:",
    canonicalTrackHeading: "🎵 Canonical track",
    buildsFormsHeading: "How this builds forms",
    timelineHeading: "Timeline",
    difficultyLabel: "Difficulty:",
    sectionKnowledgeHeading: "📖 Section Knowledge",
    purposeLabel: "Purpose:",
    whyWorksLabel: "Why it works:",
    mistakeLabel: "Mistake:",
    whenSkipLabel: "When to skip:",
        composerDecisionLabel: "Decision:",
        examplesLabel: "Examples:",
        failureHeading: "💥 Failure Analysis",
    removedLabel: "Removed:",
    effectsLabel: "Effects:",
    variantsHeading: "🔀 Form Variants",
    usedInLabel: "Used in:",
    tradeoffsLabel: "Trade-offs:",
    tracksHeading: "🎵 Canonical Tracks",
    diagnosisHeading: "🔍 Self-Diagnosis",
    genreTransferHeading: "🌍 In Different Genres",
    adaptationLabel: "Adaptation:",
    dawExerciseHeading: "⛏ DAW Exercise",
    listeningExerciseHeading: "🎵 Listening Exercise",
    comparisonsHeading: "⚖ Comparisons",
    vsLabel: "vs",
    glossaryHeading: "📖 Glossary",
    teacherNotesHeading: "📝 Teacher Notes",
    deviationsHeading: "🔄 Real-World Deviations",
    familiesHeading: "🎛 Implementation Families",
        structureLabel: "Structure:",
        energyLabel: "Energy:",
        productionTraditionLabel: "Production Tradition",
                canonicalTracksLabel: "Canonical tracks:",
                compositionDecisionsLabel: "Composition Decisions",
                designConstraintsLabel: "Design Constraints",
                formBearerLabel: "Form Bearer",
                developmentLabel: "What Creates Development",
                contrastLabel: "What Creates Contrast",
                styleBreakersLabel: "Style-Breaking Mistakes",
        sectionDurationLabel: "Section Duration",
        contrastLevelLabel: "Contrast",
        densityLabel: "Density",
        harmonicLabel: "Harmony",
        energyDynamicsLabel: "Energy",
    featuresLabel: "Distinguishing features:",
    mistakesLabel: "Common mistakes:",
    conceptsHeading: "Concepts that generate this form",
    generatedByLabel: "⚡ Generated by:",
    territoryLabel: "Territory",
    stubLabel: "Territory stub — form on the map",
    stubBody: "This form is already on the map of the musical territory. Description, canonical works, and deep analysis will be added in later phases.",
    langSwitch: "УК"
  }
};

function t(key) {
  return (i18n[state.lang] || i18n.uk)[key] || key;
}


function buildDOM() {
  const app = document.getElementById("app") || document.body;
  app.innerHTML = `
    <div class="atlas-shell" id="atlasShell">
      <header class="topbar">
        <div class="brand-block">
          <span class="brand-mark" aria-hidden="true"></span>
          <div>
            <h1>Music Form Atlas</h1>
            <p id="appSubtitle">${t('appSubtitle')}</p>
                      </div>
                    <div class="topbar-right">
                      <a href="classic/" class="version-switch">◈ Classic Atlas</a>
                      <span class="progress-badge" id="progressBadge">★ <span id="progressCount">1</span>/4</span>
                      <button class="lang-switch" id="langSwitch" onclick="toggleLang()">${t('langSwitch')}</button>
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
  els.appSubtitle = document.getElementById("appSubtitle");
  els.langSwitch = document.getElementById("langSwitch");
}

// ===== HELPERS =====
function conceptById(id) { return coreConcepts.find(c => c.id === id); }
function formById(id) { return formArchetypes.find(f => f.id === id); }
function visitedCount() { return Object.keys(state.visitedConcepts).length; }

// ===== TOGGLE HELPERS =====
function toggle(stateKey) {
  state[stateKey] = !state[stateKey];
  render();
}

function toggleLang() {
  state.lang = state.lang === "uk" ? "en" : "uk";
  if (typeof document !== "undefined" && document.documentElement) document.documentElement.lang = state.lang;
  render();
}

function setDaw(daw) {
  state.activeDaw = daw;
  render();
}

function toggleFam(key) {
  state.famOpen[key] = !state.famOpen[key];
  render();
}

// ===== RENDER =====
function render() {
  if (els.appSubtitle) els.appSubtitle.textContent = t('appSubtitle');
  if (els.langSwitch) els.langSwitch.textContent = t('langSwitch');
  renderLeftPanel();
  renderMainContent();
  renderProgress();
}

function renderLeftPanel() {
  let html = `<div class="panel-section"><h3 class="panel-heading">${t('coreConcepts')}</h3><div class="concept-list">`;
  coreConcepts.forEach(c => {
    const isSelected = state.mode === "concept" && state.selectedConcept === c.id;
    const isVisited = state.visitedConcepts[c.id];
    const checkMark = isVisited ? t('visited') : t('unvisited');
    html += `<button class="concept-card ${isSelected ? "selected" : ""} ${isVisited ? "visited" : "unvisited"}" data-concept="${c.id}" style="${isSelected ? `border-color:${c.color};box-shadow:inset 0 0 0 1px ${c.color}40` : ''}">
      <span class="concept-check">${checkMark}</span>
      <span class="concept-color" style="background:${c.color}"></span>
      <div class="concept-text">
        <strong>${ctitle(c)}</strong>
        <small>${tx(c.tagline)}</small>
      </div>
    </button>`;
  });
  html += '</div></div>';

  // ===== TERRITORY TREE (Atlas V3 — Civilization → Family → Form) =====
  html += renderTerritoryTree();
  html += '</div>'; // close wrapper

  els.leftPanel.innerHTML = html;

  // Attach click handlers
  els.leftPanel.querySelectorAll("[data-concept]").forEach(btn => {
    btn.addEventListener("click", () => selectConcept(btn.dataset.concept));
  });
  els.leftPanel.querySelectorAll("[data-form]").forEach(btn => {
    btn.addEventListener("click", () => selectForm(btn.dataset.form));
  });
  els.leftPanel.querySelectorAll("[data-civ]").forEach(btn => {
    btn.addEventListener("click", () => toggleCivExpand(btn.dataset.civ));
  });
  els.leftPanel.querySelectorAll("[data-fam]").forEach(btn => {
    btn.addEventListener("click", () => toggleFamExpand(btn.dataset.fam));
  });
  els.leftPanel.querySelectorAll("[data-stub]").forEach(btn => {
    btn.addEventListener("click", () => selectStub(btn.dataset.stub));
  });
}

const MACRO_NAMES = {
  I: "Strophic / Sectional Song", II: "Refrain-Return", III: "Variation",
  IV: "Developmental / Sonata", V: "Imitative / Fugue", VI: "Cyclic / Groove / Ostinato",
  VII: "Process / Gradual", VIII: "Stasis / Drone", IX: "Through-Composed / Narrative",
  XII: "Moment / Mosaic / Collage"
};
const MACRO_NAMES_UK = {
  I: "Строфічна / секційна пісня", II: "Повернення рефрену", III: "Варіація",
  IV: "Розробкова / соната", V: "Імітаційна / фуга", VI: "Циклічна / грув / остинато",
  VII: "Процес / поступовість", VIII: "Статика / дрон", IX: "Наскрізна / наративна",
  XII: "Момент / мозаїка / колаж"
};
// Phase 1 frame localization: resolve names/titles by active language.
function macroName(id) { return ((state.lang === 'uk' ? MACRO_NAMES_UK[id] : MACRO_NAMES[id]) || id); }
function nmL(o) { return (o && state.lang === 'uk' && o.nameUk) ? o.nameUk : (o ? o.name : ''); }
function ctitle(c) { return (c && state.lang === 'uk' && c.titleUk) ? c.titleUk : (c ? c.title : ''); }
// Bilingual content resolver: {en,uk} -> active language; plain string passes through (neutral).
function tx(v) { return (v && typeof v === 'object' && !Array.isArray(v)) ? (v[state.lang] || v.en || v.uk || '') : (v == null ? '' : v); }

function renderTerritoryTree() {
  const T = (typeof window !== "undefined" && window.TERRITORY) || [];
  if (!T.length) return "";
  const totalFam = T.reduce((s, c) => s + c.families.length, 0);
  const totalForm = T.reduce((s, c) => s + c.families.reduce((a, f) => a + f.forms.length, 0), 0);
  let h = `<div class="panel-section terr-section">
    <h3 class="panel-heading">${t('territoryLabel')}
      <span class="form-hint">${T.length} · ${totalFam} · ${totalForm}</span></h3>
    <div class="terr-tree">`;
  T.forEach(civ => {
    const civForms = civ.families.reduce((a, f) => a + f.forms.length, 0);
    const open = !!state.expandCiv[civ.id];
    h += `<div class="terr-civ ${open ? 'open' : ''}" data-civ="${civ.id}">
      <span class="terr-caret">${open ? '▾' : '▸'}</span>
      <span class="terr-civ-name">${nmL(civ)}</span>
      <span class="terr-count">${civ.families.length}·${civForms}</span>
    </div>`;
    if (!open) return;
    civ.families.forEach(fam => {
      const fopen = !!state.expandFam[fam.id];
      h += `<div class="terr-fam ${fopen ? 'open' : ''}" data-fam="${fam.id}">
        <span class="terr-caret">${fopen ? '▾' : '▸'}</span>
        <span class="terr-fam-name">${nmL(fam)}</span>
        <span class="terr-count">${fam.forms.length}</span>
      </div>`;
      if (!fopen) return;
      fam.forms.forEach(fm => {
        const sel = (state.mode === "stub" && state.selectedStub === fm.id)
          || (fm.arch && state.mode === "form" && state.selectedForm === fm.arch);
        const attr = fm.arch ? `data-form="${fm.arch}"` : `data-stub="${fm.id}"`;
        const macroTxt = fm.macro + (fm.macro2 ? '·' + fm.macro2 : '');
        let badges = `<span class="terr-macro" title="${macroName(fm.macro)}">${macroTxt}</span>`;
        if (fm.arch) badges += `<span class="terr-flag" title="In Atlas">◆</span>`;
        if (fm.deep) badges += `<span class="terr-flag terr-deep" title="Deep content">✦</span>`;
        if (fm.star) badges += `<span class="terr-flag terr-star" title="Flagship">★</span>`;
        if (fm.improv) badges += `<span class="terr-flag" title="Improvised">⟳</span>`;
        h += `<div class="terr-form ${sel ? 'selected' : ''}" ${attr}>
          <span class="terr-form-name">${nmL(fm)}</span>
          <span class="terr-badges">${badges}</span>
        </div>`;
      });
    });
  });
  h += `</div></div>`;
  return h;
}

function renderMainContent() {
  if (state.mode === "concept") renderConceptDetail();
  else if (state.mode === "form") renderFormDetail();
  else if (state.mode === "stub") renderStubDetail();
}

function renderProgress() {
  const count = visitedCount();
  els.progressCount.textContent = count;
}

// ===== CONCEPT DETAIL =====
function renderConceptDetail() {
  const c = conceptById(state.selectedConcept);
  if (!c) return;

  const totalBars = c.canonicalTrack.sections.reduce((s, sec) => s + sec.bars, 0);

  let timelineHtml = c.canonicalTrack.sections.map((sec, i) => {
    const width = Math.max(10, sec.bars / totalBars * 100);
    const selected = i === state.selectedSection ? " selected" : "";
    return `<button class="tl-block${selected}" data-sec="${i}" style="flex:${width} 1 0; background:${c.color}55">
      <strong>${tx(sec.name)}</strong>
      <small>${tx(sec.note)}</small>
    </button>`;
  }).join("");

  let arcHtml = "";
  if (c.id === "directionality") {
    const arcValues = [15, 30, 60, 85, 40];
    arcHtml = `<div class="energy-arc">${arcValues.map(v =>
      `<div class="arc-bar" style="height:${v}px; background:${c.color}"></div>`
    ).join("")}</div>`;
  }

  const exerciseHtml = state.showExercise
      ? `<div class="info-block">
          <h4>${t('exerciseHeading')}</h4>
          <ol>${c.exercise.map(e => `<li>${tx(e)}</li>`).join("")}</ol>
          <div class="assessment">
            <strong>${t('verificationHeading')}</strong> ${tx(c.assessment)}
          </div>
          <div class="daw-prompt">
            <strong>${t('dawPromptLabel')}</strong><br>
            ${tx(c.dawPrompt)}
          </div>
          <button class="btn-toggle" id="hideExerciseBtn">${t('hideExercise')}</button>
        </div>`
      : `<button class="btn-toggle" id="showExerciseBtn">${t('showExercise')}</button>`;

    const decisionHtml = state.showDecision
      ? `<div class="info-block">
          <h4>${t('decisionHeading')}</h4>
          <p class="decision-quote">${tx(c.decision)}</p>
          <h4 class="mistake-heading">${t('mistakeHeading')}</h4>
          <p>${tx(c.mistake)}</p>
          <button class="btn-toggle" id="hideDecisionBtn">${t('hideDecision')}</button>
        </div>`
      : `<button class="btn-toggle" id="showDecisionBtn">${t('showDecision')}</button>`;

    const buildsHtml = c.buildsForms.length > 0
      ? `<div class="builds-forms">
          <h4>${t('buildsFormsHeading')}</h4>
          <div class="form-links">${c.buildsForms.map(fid => {
            const f = formById(fid);
            return f ? `<button class="form-link" data-form="${f.id}">${f.title}</button>` : "";
          }).join("")}</div>
        </div>`
      : "";

    const html = `
      <div class="breadcrumb">${t('breadcrumbConcepts')} <span class="sep">›</span> <span style="color:${c.color}">${ctitle(c)}</span></div>

      <div class="concept-header">
        <span class="concept-icon" style="background:${c.color}">★</span>
        <div>
          <h2>${ctitle(c)}</h2>
          <p class="tagline">${tx(c.tagline)}</p>
          <span class="root-badge">${tx(c.rootProblem)}</span>
        </div>
      </div>

      <div class="info-block">
        <h4>${t('problemHeading')}</h4>
        <p>${tx(c.problem)}</p>
      </div>

      ${decisionHtml}

      ${exerciseHtml}

      <div class="canonical-track">
        <h4>${t('canonicalTrackHeading')}</h4>
        <p class="track-title">${c.canonicalTrack.title} — ${c.canonicalTrack.artist} (${c.canonicalTrack.year})</p>
        <div class="mini-timeline">${timelineHtml}</div>
        ${arcHtml}
      </div>

      ${buildsHtml}
    `;

  els.mainArea.innerHTML = html;

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

// ===== FORM DETAIL =====
function renderFormDetail() {
  const f = formById(state.selectedForm);
  if (!f) return;

  const totalBars = f.sections.reduce((s, sec) => s + sec.bars, 0);
  const tags = f.generatedBy.map(id => conceptById(id)).filter(Boolean);

  // Timeline
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
    <p class="concept-ref">${state.lang === 'uk' ? 'Використовує' : 'Uses'} <strong style="color:${secConcept?.color}">${ctitle(secConcept)}</strong>
      ${secConcept ? `— ${tx(secConcept.tagline).toLowerCase()}` : ""}</p>
  </div>`;

  // Generated by tags
  const tagHtml = tags.map(t =>
    `<button class="concept-tag" data-concept="${t.id}" style="border-color:${t.color};color:${t.color}">${ctitle(t)}</button>`
  ).join("");

  // ---- NEW CONTENT SECTIONS ----

  // 1. Section Knowledge Cards
  let secKnowledgeHtml = "";
  if (f.sectionKnowledge && f.sectionKnowledge.length > 0) {
    const sk = f.sectionKnowledge.find(s => s.name === currentSec.name) || f.sectionKnowledge[0];
    secKnowledgeHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showSecKnowledge')">
          ${t('sectionKnowledgeHeading')} ${state.showSecKnowledge ? "▲" : "▼"}
        </h4>
        ${state.showSecKnowledge ? `
        <div class="knowledge-card">
          <div class="k-item"><strong>🎯 Призначення</strong><p>${sk.purpose}</p></div>
          <div class="k-item"><strong>🧠 Чому це працює</strong><p>${sk.whyItWorks}</p></div>
          <div class="k-item"><strong>⚠️ Типова помилка</strong><p>${sk.commonMistake}</p></div>
          <div class="k-item"><strong>⏭ Коли пропустити</strong><p>${sk.whenToSkip}</p></div>
          <div class="k-item"><strong>${t('composerDecisionLabel')}</strong><p>${sk.composerDecision}</p></div>
          <div class="k-item"><strong>🎵 Приклади</strong><ul>${sk.realExamples.map(e => `<li>${e}</li>`).join("")}</ul></div>
        </div>` : ""}
      </div>`;
  }

  // 2. Failure Analysis
  let failureHtml = "";
  if (f.failureAnalysis && f.failureAnalysis.length > 0) {
    const failureEntries = f.failureAnalysis.map((fa, i) => {
      const isCurrent = fa.section === currentSec.name;
      return `<div class="fail-card ${isCurrent ? 'fail-current' : ''}">
        <strong>${fa.section} видалено</strong>
        <p>${fa.removed}</p>
        <ul>${fa.effects.map(e => `<li>${e}</li>`).join("")}</ul>
      </div>`;
    }).join("");
    failureHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showFailure')">
          ${t('failureHeading')} ${state.showFailure ? "▲" : "▼"}
        </h4>
        ${state.showFailure ? `<div class="fail-list">${failureEntries}</div>` : ""}
      </div>`;
  }

  // 3. Variants
  let variantsHtml = "";
  if (f.variants && f.variants.length > 0) {
    variantsHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showVariants')">
          ${t('variantsHeading')} ${state.showVariants ? "▲" : "▼"}
        </h4>
        ${state.showVariants ? `<div class="variant-list">${f.variants.map(v => `
          <div class="variant-card">
            <strong>${v.name}</strong>
            <p><em>${v.used}</em></p>
            <p>${v.why}</p>
            <p><strong>Компроміси:</strong> ${v.tradeoffs}</p>
          </div>
        `).join("")}</div>` : ""}
      </div>`;
  }

  // 4. Canonical Tracks
  let tracksHtml = "";
  if (f.canonicalTracks && f.canonicalTracks.length > 0) {
    tracksHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showTracks')">
          ${t('tracksHeading')} (${f.canonicalTracks.length}) ${state.showTracks ? "▲" : "▼"}
        </h4>
        ${state.showTracks ? `<div class="tracks-list">${f.canonicalTracks.map(t => `
                  <div class="track-card">
                    <h5>${t.title} — ${t.artist} (${t.year}) <span class="track-genre">${t.genre || "pop"}</span></h5>
                    ${t.analysis ? `<div class="track-analysis">
                      <div class="analysis-bars">
                        <span class="analysis-item" style="color:#5bbcff">▨ ${t.analysis.segmentation || 0}%</span>
                        <span class="analysis-item" style="color:#ff7eb3">▨ ${t.analysis.repetition || 0}%</span>
                        <span class="analysis-item" style="color:#fecb6e">▨ ${t.analysis.contrast || 0}%</span>
                        <span class="analysis-item" style="color:#b78cff">▨ ${t.analysis.directionality || 0}%</span>
                      </div>
                    </div>` : ""}
                    <p class="track-why"><strong>Чому це хороший приклад:</strong> ${t.formNotes}</p>
                    <div class="track-sections">${t.sections.map(s => `
                      <span class="track-sec"><strong>${s.name}</strong> ${s.time}</span>
                    `).join("")}</div>
                  </div>
                `).join("")}</div>` : ""}
      </div>`;
  }

  // 5. Diagnosis
  let diagnosisHtml = "";
  if (f.diagnosis && f.diagnosis.length > 0) {
    diagnosisHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showDiagnosis')">
          ${t('diagnosisHeading')} ${state.showDiagnosis ? "▲" : "▼"}
        </h4>
        ${state.showDiagnosis ? `<ul class="diagnosis-list">${f.diagnosis.map(q => `
          <li>${q}</li>
        `).join("")}</ul>` : ""}
      </div>`;
  }

  // 6. Genre Transfer
  let genreHtml = "";
  if (f.genreTransfer && f.genreTransfer.length > 0) {
    genreHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showGenreTransfer')">
          ${t('genreTransferHeading')} ${state.showGenreTransfer ? "▲" : "▼"}
        </h4>
        ${state.showGenreTransfer ? `<div class="genre-list">${f.genreTransfer.map(g => `
          <div class="genre-card">
            <strong>${g.genre}</strong>
            <p>${g.description}</p>
            <p class="genre-adapt"><em>${t('adaptationLabel')}</em> ${g.adaptation}</p>
          </div>
        `).join("")}</div>` : ""}
      </div>`;
  }


  // 7. DAW Exercise
  let dawHtml = '';
  if (f.dawExercise && f.dawExercise.length > 0) {
    dawHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showDawExercise')">
          ${t('dawExerciseHeading')} ${state.showDawExercise ? '▲' : '▼'}
        </h4>
        ${state.showDawExercise ? `<div class="info-block daw-block">
          <ol>${f.dawExercise.map(e => `<li>${e}</li>`).join('')}</ol>
        </div>` : ''}
      </div>`;
  }

  // 8. Listening Exercise
  let listenHtml = '';
  if (f.listeningExercise && f.listeningExercise.length > 0) {
    listenHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showListeningExercise')">
          ${t('listeningExerciseHeading')} ${state.showListeningExercise ? '▲' : '▼'}
        </h4>
        ${state.showListeningExercise ? `<div class="info-block listen-block">
          <ol>${f.listeningExercise.map(e => `<li>${e}</li>`).join('')}</ol>
        </div>` : ''}
      </div>`;
  }

  // 9. Comparisons
  let compareHtml = '';
  if (f.comparisons && f.comparisons.length > 0) {
    compareHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showComparisons')">
          ${t('comparisonsHeading')} ${state.showComparisons ? '▲' : '▼'}
        </h4>
        ${state.showComparisons ? `<div class="compare-list">${f.comparisons.map(cmp => `
          <div class="compare-card">
            <strong>${cmp.with}</strong>
            <p>${cmp.difference}</p>
          </div>
        `).join('')}</div>` : ''}
      </div>`;
  }


  // 10. Glossary
  let glossaryHtml = '';
  if (f.glossary && f.glossary.length > 0) {
    glossaryHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showGlossary')">
          ${t('glossaryHeading')} ${state.showGlossary ? '▲' : '▼'}
        </h4>
        ${state.showGlossary ? `<div class="glossary-list">${f.glossary.map(g => `
          <div class="glossary-card">
            <strong>${g.term}</strong>
            <p>${g.definition}</p>
          </div>
        `).join('')}</div>` : ''}
      </div>`;
  }

  // 11. Teacher's Notes
  let teacherHtml = '';
  if (f.teacherNotes && f.teacherNotes.length > 0) {
    teacherHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showTeacherNotes')">
          ${t('teacherNotesHeading')} ${state.showTeacherNotes ? '▲' : '▼'}
        </h4>
        ${state.showTeacherNotes ? `<div class="teacher-list">${f.teacherNotes.map(n => `
          <div class="teacher-card">
            <p>${n}</p>
          </div>
        `).join('')}</div>` : ''}
      </div>`;
  }

  // 12. Real-World Deviations
  let devHtml = '';
  if (f.deviations && f.deviations.length > 0) {
    devHtml = `
      <div class="depth-block">
        <h4 class="depth-heading" onclick="toggle('showDeviations')">
          ${t('deviationsHeading')} ${state.showDeviations ? '▲' : '▼'}
        </h4>
        ${state.showDeviations ? `<div class="dev-list">${f.deviations.map(d => `
          <div class="dev-card">
            <strong>${d.track}</strong>
            <p>${d.explanation}</p>
          </div>
        `).join('')}</div>` : ''}
      </div>`;
  }

  // 13. Families / Implementations
    let familiesHtml = '';
    if (f.families && f.families.length > 0) {
      familiesHtml = `
        <div class="depth-block">
          <h4 class="depth-heading" onclick="toggle('showFamilies')">
            ${t('familiesHeading')} (${f.families.length}) ${state.showFamilies ? '▲' : '▼'}
          </h4>
          ${state.showFamilies ? `<div class="families-list">${f.families.map(fam => `
            <div class="family-card">
              <div class="family-header">
                <strong>${fam.name}</strong>
                <span class="family-bpm">${fam.bpm} BPM</span>
              </div>

              ${fam.period ? `<div class="family-meta">
                <span class="family-period">${fam.period}</span>
                ${fam.region ? `<span class="family-region">${fam.region}</span>` : ''}
                ${fam.scene ? fam.scene.slice(0,2).map(s => `<span class="family-scene">${s}</span>`).join('') : ''}
              </div>` : ''}

              ${fam.structuralProfile ? `<p class="family-structural"><em>${t('structureLabel')}</em> ${fam.structuralProfile}</p>` : ''}
              ${fam.energyProfile ? `<p class="family-energy"><em>${t('energyLabel')}</em> ${fam.energyProfile}</p>` : ''}

              ${fam.canonicalTracks ? `<div class="family-tracks">
                <strong>${t('canonicalTracksLabel')}</strong>
                <ul>${fam.canonicalTracks.map(t => {
                  if (typeof t === 'string') return `<li>${t}</li>`;
                  return `<li class="track-item">
                    <span class="track-title">${t.artist ? t.artist + ' — ' : ''}${t.title}${t.year ? ' (' + t.year + ')' : ''}</span>
                    ${t.label ? `<span class="track-label">${t.label}</span>` : ''}
                    ${t.analysis ? `<p class="track-analysis">${t.analysis}</p>` : ''}
                    ${t.historicalContext ? `<p class="track-context"><em>Контекст:</em> ${t.historicalContext}</p>` : ''}
                    ${t.productionNotes ? `<p class="track-prod"><em>Продакшн:</em> ${t.productionNotes}</p>` : ''}
                    ${t.archetypeScores ? `<div class="track-scores">${Object.entries(t.archetypeScores).map(([k,v]) => `<span class="score-chip" title="${k}">${k[0].toUpperCase()}: ${v}</span>`).join('')}</div>` : ''}
                    ${t.timeline ? `<div class="track-timeline">${t.timeline.map(tp => `<span class="tl-point"><strong>${tp.time}</strong> ${tp.name}</span>`).join('')}</div>` : ''}
                  </li>`;
                }).join('')}</ul>
              </div>` : ''}

              ${fam.commonMistakes && fam.commonMistakes.length ? `<div class="family-features">
                <strong>${t('featuresLabel')}</strong>
                <ul>${fam.commonMistakes.map(m => `<li>${m}</li>`).join('')}</ul>
              </div>` : ''}

              ${fam.distinguishingFeatures && fam.distinguishingFeatures.length ? `<div class="family-features">
                <strong>Відмінні ознаки</strong>
                <ul>${fam.distinguishingFeatures.map(feat => `<li>${feat}</li>`).join('')}</ul>
              </div>` : ''}

              ${fam.productionTradition ? `
              <div class="family-prod-trad">
                <div class="prod-trad-header" onclick="event.stopPropagation(); toggleFam('pt_${fam.id}')" style="cursor:pointer">
                  <strong>🔧 ${t('productionTraditionLabel') || 'Традиція продакшну'}</strong>
                  <span>${state.famOpen['pt_' + fam.id] ? '▲' : '▼'}</span>
                </div>
                ${state.famOpen['pt_' + fam.id] ? `
                  <div class="prod-trad-body">
                    <p class="prod-philosophy"><em>Філософія:</em> ${fam.productionTradition.philosophy}</p>
                    ${fam.productionTradition.coreTechniques ? fam.productionTradition.coreTechniques.map(tech => `
                      <div class="tech-card">
                        <div class="tech-header">
                          <strong>${tech.name}</strong>
                        </div>
                        <p class="tech-desc">${tech.description}</p>
                        ${tech.dawTranslation ? `
                          <div class="tech-daw">
                            <div class="daw-tabs">
                              ${tech.dawTranslation.ableton ? `<button class="daw-tab${state.activeDaw === 'ableton' ? ' active' : ''}" onclick="event.stopPropagation(); setDaw('ableton')">Ableton</button>` : ''}
                              ${tech.dawTranslation.flStudio ? `<button class="daw-tab${state.activeDaw === 'flStudio' ? ' active' : ''}" onclick="event.stopPropagation(); setDaw('flStudio')">FL Studio</button>` : ''}
                              ${tech.dawTranslation.logic ? `<button class="daw-tab${state.activeDaw === 'logic' ? ' active' : ''}" onclick="event.stopPropagation(); setDaw('logic')">Logic Pro</button>` : ''}
                            </div>
                            <pre class="daw-code">${tech.dawTranslation[state.activeDaw] || tech.dawTranslation.ableton || tech.dawTranslation.flStudio || tech.dawTranslation.logic}</pre>
                          </div>
                        ` : ''}
                      </div>
                    `).join('') : ''}
                    ${fam.productionTradition.listeningPathway ? `
                      <div class="listening-path">
                        <strong>Listening Pathway</strong>
                        <ol>${fam.productionTradition.listeningPathway.map(lp => `
                          <li>${typeof lp === 'string' ? lp : ('<strong>' + (lp.track || lp.title) + '</strong> — ' + (lp.insight || lp.instruction))}</li>
                        `).join('')}</ol>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>` : ''}

                            ${fam.compositionDecisions ? `
                            <div class="family-decisions">
                              <div class="decisions-header" onclick="event.stopPropagation(); toggleFam('cd_${fam.id}')" style="cursor:pointer">
                                <strong>🎯 ${t('compositionDecisionsLabel')}</strong>
                                <span>${state.famOpen['cd_' + fam.id] ? '▲' : '▼'}</span>
                              </div>
                              ${state.famOpen['cd_' + fam.id] ? `
                                <div class="decisions-body">
                                  <div class="decision-item"><strong>${t('formBearerLabel')}:</strong><p>${fam.compositionDecisions.formBearer}</p></div>
                                  <div class="decision-item"><strong>${t('developmentLabel')}:</strong><p>${fam.compositionDecisions.development}</p></div>
                                  <div class="decision-item"><strong>${t('contrastLabel')}:</strong><p>${fam.compositionDecisions.contrast}</p></div>
                                  <div class="decision-item"><strong>${t('styleBreakersLabel')}:</strong>
                                    <ul>${fam.compositionDecisions.styleBreakers.map(s => `<li>${s}</li>`).join('')}</ul>
                                  </div>
                                </div>
                              ` : ''}
                            </div>` : ''}

                            ${fam.designConstraints ? `
                            <div class="family-constraints">
                              <div class="constraints-header" onclick="event.stopPropagation(); toggleFam('dc_${fam.id}')" style="cursor:pointer">
                                <strong>📐 ${t('designConstraintsLabel')}</strong>
                                <span>${state.famOpen['dc_' + fam.id] ? '▲' : '▼'}</span>
                              </div>
                              ${state.famOpen['dc_' + fam.id] ? `
                                <div class="constraints-body">
                                  <div class="constraint-row"><span class="constraint-key">BPM</span><span class="constraint-val">${fam.designConstraints.bpm}</span></div>
                                  <div class="constraint-row"><span class="constraint-key">${t('sectionDurationLabel') || 'Тривалість секцій'}</span><span class="constraint-val">${fam.designConstraints.sectionDuration}</span></div>
                                  <div class="constraint-row"><span class="constraint-key">${t('contrastLevelLabel') || 'Контраст'}</span><span class="constraint-val">${fam.designConstraints.contrastLevel}</span></div>
                                  <div class="constraint-row"><span class="constraint-key">${t('densityLabel') || 'Щільність'}</span><span class="constraint-val">${fam.designConstraints.density}</span></div>
                                  <div class="constraint-row"><span class="constraint-key">${t('harmonicLabel') || 'Гармонія'}</span><span class="constraint-val">${fam.designConstraints.harmonicComplexity}</span></div>
                                  <div class="constraint-row"><span class="constraint-key">${t('energyDynamicsLabel') || 'Енергія'}</span><span class="constraint-val">${fam.designConstraints.energyDynamics}</span></div>
                                </div>
                              ` : ''}
                            </div>` : ''}

                            ${fam.relatedFamilies ? `<div class="family-related">
                <strong>Пов'язані сімейства:</strong>
                ${fam.relatedFamilies.map(rf => `<span class="related-chip">${rf}</span>`).join('')}
              </div>` : ''}
            </div>
          `).join('')}</div>` : ''}
        </div>`;
    }

  // ASSEMBLE
  const html = `
    <div class="breadcrumb">${t('breadcrumbArchetypes')} <span class="sep">›</span> ${f.title}</div>

    <div class="concept-header">
      <span class="concept-icon" style="background:#b78cff">◆</span>
      <div>
        <h2>${f.title}</h2>
        <p class="tagline">${f.description}</p>
        <div class="generated-by">⚡ ${t('generatedByLabel')} ${tagHtml}</div>
      </div>
    </div>

    <div class="canonical-track">
      <h4>${t('timelineHeading')}</h4>
      <div class="mini-timeline">${timelineHtml}</div>
      <div class="meta-row">
        <span>${f.genre}</span>
        <span>${f.tempo}</span>
        <span>${t('difficultyLabel')} ${f.difficulty}</span>
      </div>
    </div>

    ${secDetailHtml}

    ${secKnowledgeHtml}

    ${failureHtml}

    ${variantsHtml}

    ${tracksHtml}

    ${diagnosisHtml}

    ${genreHtml}

    ${dawHtml}

    ${listenHtml}

    ${compareHtml}

    ${glossaryHtml}

    ${teacherHtml}

    ${devHtml}

    ${familiesHtml}

    <div class="builds-forms">
      <h4>${t('conceptsHeading')}</h4>
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
  // Reset all toggle states
  state.showSecKnowledge = false;
  state.showFailure = false;
  state.showVariants = false;
  state.showTracks = false;
  state.showDiagnosis = false;
  state.showGenreTransfer = false;
  state.showDawExercise = false;
  state.showListeningExercise = false;
  state.showComparisons = false;
  state.showGlossary = false;
  state.showTeacherNotes = false;
  state.showDeviations = false;
  state.showFamilies = false;
  state.showProductionTradition = false;
  state.showDawTranslation = false;
  state.famOpen = {};
  render();
}

// ===== TERRITORY (Atlas V3) =====
function toggleCivExpand(id) {
  state.expandCiv[id] = !state.expandCiv[id];
  render();
}

function toggleFamExpand(id) {
  state.expandFam[id] = !state.expandFam[id];
  render();
}

function findTerrForm(id) {
  const T = (typeof window !== "undefined" && window.TERRITORY) || [];
  for (const civ of T) {
    for (const fam of civ.families) {
      for (const fm of fam.forms) {
        if (fm.id === id) return { fm, fam, civ };
      }
    }
  }
  return null;
}

function selectStub(id) {
  state.mode = "stub";
  state.selectedStub = id;
  state.selectedForm = null;
  state.selectedConcept = null;
  render();
}

function openForm(id) {
  const f = findTerrForm(id);
  if (!f) return;
  if (f.fm.arch) selectForm(f.fm.arch);
  else selectStub(id);
}

function renderStubDetail() {
  const found = findTerrForm(state.selectedStub);
  if (!found) { els.mainArea.innerHTML = `<div class="empty-state">—</div>`; return; }
  const { fm, fam, civ } = found;
  const en = state.lang === 'en';
  const macroFull = macroName(fm.macro) + (fm.macro2 ? ' + ' + macroName(fm.macro2) : '');
  const C = (typeof window !== "undefined" && window.TERRITORY_CONTENT && window.TERRITORY_CONTENT[fm.id]) || null;

  let flags = '';
  if (fm.deep) flags += `<span class="stub-chip">✦ ${en ? 'deep content' : 'глибокий контент'}</span>`;
  if (fm.star) flags += `<span class="stub-chip">★ flagship</span>`;
  if (fm.improv) flags += `<span class="stub-chip">⟳ improvised</span>`;

  // Graceful bilingual fallback — content must NEVER be hidden by missing translation.
  // Legacy plain strings are English-canonical; UK mode falls back to English with a small badge.
  const enBadge = '<span class="i18n-en-only">[EN]</span> ';
  const loc = (v) => {
    if (v == null || v === '') return '';
    if (typeof v === 'string') {
      // legacy string = English canonical content
      return en ? v : enBadge + v;
    }
    // bilingual object { en, uk }
    if (en) {
      return v.en || (v.uk ? enBadge + v.uk : '');
    }
    // UK mode: prefer Ukrainian, fallback to English with badge
    if (v.uk) return v.uk;
    if (v.en) return enBadge + v.en;
    return '';
  };
  let body;
  if (C) {
    const block = (title, inner) => inner ? `<div class="form-block"><h3 class="form-h">${title}</h3>${inner}</div>` : '';
    const identity = C.what ? `<p class="form-lead">${loc(C.what)}</p>` : '';
    const decision = C.dec ? block(en ? 'Core compositional decision' : 'Ключове композиційне рішення', `<p class="form-p form-decision">${loc(C.dec)}</p>`) : '';
    const seq = C.seq || [];
    const diagram = seq.length ? block(en ? 'Structure' : 'Структура',
      `<div class="seq-diagram">${seq.map(s => `<span class="seq-block">${loc(s)}</span>`).join('<span class="seq-arrow">→</span>')}</div>`) : '';
    const sections = (C.sections && C.sections.length) ? block(en ? 'Section logic' : 'Логіка секцій',
      `<div class="sec-logic">${C.sections.map(s => {
        if (s.fn || s.listen || s.compose) {
          return `<div class="sec-card"><div class="sec-name">${loc(s.n)}</div><div class="sec-detail">`
            + (s.fn ? `<p><span class="sec-lbl">${en ? 'Function' : 'Функція'}:</span> ${loc(s.fn)}</p>` : '')
            + (s.listen ? `<p><span class="sec-lbl">${en ? 'Listener' : 'Слухач'}:</span> ${loc(s.listen)}</p>` : '')
            + (s.compose ? `<p><span class="sec-lbl">${en ? 'Composer' : 'Композитор'}:</span> ${loc(s.compose)}</p>` : '')
            + `</div></div>`;
        }
        return `<div class="sec-row"><span class="sec-name">${loc(s.n)}</span><span class="sec-purpose">${loc(s.p)}</span></div>`;
      }).join('')}</div>`) : '';
    const recognize = (C.recognize && C.recognize.length) ? block(en ? 'Recognition guide' : 'Як упізнати',
      `<ul class="recog-list">${C.recognize.map(r => `<li>${loc(r)}</li>`).join('')}</ul>`) : '';
    const failure = (C.failure && C.failure.length) ? block(en ? 'Failure analysis — what breaks it' : 'Аналіз руйнування — що ламає форму',
      `<div class="fail-list">${C.failure.map(f => (typeof f === 'string' || f.en || f.uk)
        ? `<div class="fail-row"><span class="fail-x">✕</span><p>${loc(f)}</p></div>`
        : `<div class="fail-row"><span class="fail-x">✕</span><p><strong>${loc(f.m)}</strong>${f.why ? ` — ${loc(f.why)}` : ''}</p></div>`).join('')}</div>`) : '';
    // Canonical works: title (w) is language-neutral (names/years); only the "why" is translated prose.
    const worksHtml = (C.works || []).map(w => typeof w === 'string'
      ? `<li>${w}</li>`
      : `<li><strong>${w.w}</strong>${w.why ? ` — <span class="work-why">${loc(w.why)}</span>` : ''}</li>`).join('');
    const works = worksHtml ? block(en ? 'Canonical works' : 'Канонічні твори', `<ul class="works-list">${worksHtml}</ul>`) : '';
    let evoInner = C.his ? `<p class="form-p">${loc(C.his)}</p>` : '';
    if (C.evo && (C.evo.from || C.evo.became)) {
      evoInner += `<div class="evo-flow">`
        + (C.evo.from ? `<div class="evo-row"><span class="evo-arrow">⟸</span><span class="evo-lbl">${en ? 'grew from' : 'виросла з'}:</span> ${loc(C.evo.from)}</div>` : '')
        + (C.evo.became ? `<div class="evo-row"><span class="evo-arrow">⟹</span><span class="evo-lbl">${en ? 'led to' : 'призвела до'}:</span> ${loc(C.evo.became)}</div>` : '')
        + `</div>`;
    }
    const history = evoInner ? block(en ? 'Historical evolution' : 'Історична еволюція', evoInner) : '';
    let neighborInner = '';
    if (C.neighbors && C.neighbors.length) {
      neighborInner = `<div class="nbr-list">${C.neighbors.map(n => {
        const rf = findTerrForm(n.id);
        const nm = rf ? nmL(rf.fm) : n.id;
        return `<div class="nbr-row"><span class="rel-chip" data-open="${n.id}">${nm}</span><p class="nbr-note">${loc(n.note)}</p></div>`;
      }).join('')}</div>`;
    } else {
      const relHtml = (C.rel || []).map(rid => {
        const rf = findTerrForm(rid);
        return rf ? `<span class="rel-chip" data-open="${rid}">${nmL(rf.fm)}</span>` : '';
      }).join('');
      neighborInner = relHtml ? `<div class="rel-chips">${relHtml}</div>` : '';
    }
    const related = neighborInner ? block(en ? 'Neighbor forms' : 'Сусідні форми', neighborInner) : '';
    const CM = { seg: ['Segmentation', 'Сегментація', '#5bbcff'], rep: ['Repetition', 'Повторення', '#f6c85f'], con: ['Contrast', 'Контраст', '#ed6a73'], dir: ['Directionality', 'Напрямок', '#b78cff'] };
    const cmRows = C.concepts ? Object.keys(CM).filter(k => C.concepts[k]).map(k =>
      `<div class="cmap-row"><span class="cmap-dot" style="background:${CM[k][2]}"></span><span class="cmap-name" style="color:${CM[k][2]}">${en ? CM[k][0] : CM[k][1]}</span><span class="cmap-note">${loc(C.concepts[k])}</span></div>`).join('') : '';
    const concepts = cmRows ? block(en ? 'Concept mapping' : 'Зв’язок із концептами', `<div class="concept-map">${cmRows}</div>`) : '';
    const workflow = (C.workflow && C.workflow.length) ? block(en ? '✎ Composer workflow — how to write one' : '✎ Робочий процес — як написати',
      `<ol class="workflow-list">${C.workflow.map(s => `<li>${loc(s)}</li>`).join('')}</ol>`) : '';

    body = identity + decision + diagram + sections + recognize + failure + works + history + related + concepts + workflow;
  } else {
    body = `<div class="stub-card">
      <p class="stub-badge">${t('stubLabel')}</p>
      <p class="stub-body">${t('stubBody')}</p>
    </div>`;
  }

  els.mainArea.innerHTML = `
    <div class="breadcrumb">${nmL(civ)} <span class="sep">›</span> ${nmL(fam)}</div>
    <div class="concept-header">
      <span class="concept-icon" style="background:#b78cff">◆</span>
      <div>
        <h2>${nmL(fm)}</h2>
        <p class="concept-tagline">${macroFull} · ${civ.era || ''}</p>
      </div>
    </div>
    ${flags ? `<div class="stub-chips">${flags}</div>` : ''}
    ${body}`;

  els.mainArea.querySelectorAll('[data-open]').forEach(el2 => {
    el2.addEventListener('click', () => openForm(el2.dataset.open));
  });
}

// ===== INIT =====
function init() {
  buildDOM();
  render();
  setTimeout(() => {
    const formSection = document.querySelector(".form-section");
    if (formSection && Object.keys(state.visitedConcepts).length > 0) {
      formSection.style.opacity = "1";
      formSection.style.transition = "opacity 0.5s";
    }
  }, 100);
}

init();