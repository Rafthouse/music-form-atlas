# PROJECT_STATE.md — Music Form Atlas

> Snapshot станом на 2026-06-07 (v2.0a+). Для повного контексту та філософії див.
> `ARCHITECTS_BRIEF_FOR_CLAUDE.md` (найдетальніший) і `CONTEXT_TRANSFER_TO_CLAUDE.md`.

## Deployment

| URL | Що | Status |
|---|---|---|
| https://rafthouse.github.io/music-form-atlas/ | Core Atlas | ✅ Live |
| https://rafthouse.github.io/music-form-atlas/classic/ | Classic Atlas | ✅ Live |
| Repo | https://github.com/Rafthouse/music-form-atlas | ✅ |

GitHub Pages автодеплоїться при push у `main` (`.github/workflows/pages.yml`).

## Working Directory

`C:\Users\User\music-form-atlas\` (branch: main)

---

## File Status

| File | Розмір | Рядки | Призначення |
|---|---|---|---|
| `app.js` | ~584 KB | ~6370 | Core Atlas — увесь контент, логіка, рендери (inline) |
| `styles.css` | ~24 KB | ~650 | Темна тема, layout, компоненти |
| `index.html` | ~350 B | 13 | Shell HTML |
| `classic/app.js` | ~120 KB | 1449 | Classic Atlas (33+ форм, EDM-корпус) |
| `classic/styles.css` | — | — | Стилі Classic |
| `classic/index.html` | — | — | Shell Classic |

Core і Classic — **незалежні** застосунки (свої index.html / app.js / styles.css). Лише відносні шляхи.

---

## Core Atlas — Form Archetypes (10)

| # | ID | Назва | Складність | Families |
|---|---|---|---|---|
| 1 | verse-chorus | Verse-Chorus (Pop) | easy | 0 |
| 2 | club-arc | Club Arc (Electronic) | easy | 13 (6 deep) |
| 3 | rondo | Rondo (Classical) | medium | 0 |
| 4 | 12-bar-blues | 12-Bar Blues | easy | 0 |
| 5 | process-minimal | Process-Based Minimal | hard | 3 (shallow) |
| 6 | theme-variations | Theme & Variations | medium | 0 |
| 7 | through-composed | Through-Composed | medium | 3 (shallow) |
| 8 | head-solo-head | Head-Solo-Head (Jazz) | medium | 0 |
| 9 | sonata-allegro | Sonata-Allegro | hard | 0 |
| 10 | drone | Drone (Static/Hypnotic) | medium | 4 (shallow) |

Усі 10 архетипів мають повний набір content depth layers (sectionKnowledge, failureAnalysis,
variants, canonicalTracks, diagnosis, genreTransfer, dawExercise, listeningExercise,
comparisons, glossary, teacherNotes, deviations).

**Families разом: 23. Deep-deploy: 6 (усі в Club Arc).**

---

## Club Arc Families (13)

**Deep-deploy (6)** — повний `productionTradition` (philosophy + coreTechniques з DAW-перекладами
Ableton/FL Studio/Logic + listeningPathway) + `compositionDecisions` + `designConstraints`:

| Family | ID | BPM | Період |
|---|---|---|---|
| Chicago House | classic-house | 118–130 | 1985–1993 |
| Detroit Techno | detroit-techno | 125–140 | 1987–1995 |
| Dub Techno | dub-techno | 120–128 | 1994–2005 |
| Uplifting Trance | uplifting-trance | 134–140 | 1998–2010 |
| Deep Dubstep | deep-dubstep | 138–142 (hf 69–71) | 2005–2012 |
| Neurofunk | neurofunk | 172–180 | 2002–2015 |

**Shallow (7):** deep-house, tech-house, progressive-house, minimal-techno, psytrance, brostep, liquid-dnb.

---

## Render / State (Core Atlas)

- `buildDOM()` → `render()` (повний ре-рендер) → `renderLeftPanel` / `renderMainContent` / `renderFormDetail`.
- Глобальні тоглі контент-шарів: `showSecKnowledge`, `showFailure`, … `showFamilies`.
- **Per-family тоглі** (production tradition / composition decisions / design constraints):
  `state.famOpen[key]`, `key = '<section>_<famId>'` (`pt_`, `cd_`, `dc_`), функція `toggleFam(key)`.
  Скидаються в `selectForm()`.
- **DAW-перемикач:** `state.activeDaw` (`"ableton" | "flStudio" | "logic"`), функція `setDaw(daw)`;
  вкладки під кожною технікою перемикають видимий переклад, активна має клас `.daw-tab.active`.
- i18n: `state.lang` (`"uk" | "en"`) — контент український, англійська лише UI-лейбли.

---

## Останні зміни (2026-06-07)

- Загорнуто `coreTechniques` + `listeningPathway` для Dub Techno, Uplifting Trance, Deep Dubstep,
  Neurofunk у `productionTradition` + написано `philosophy` (раніше ці дані не рендерилися).
- Render `listeningPathway` зроблено сумісним з 3 форматами (`{track,insight}`, `{title,instruction}`, рядки).
- DAW-вкладки (FL Studio + Logic) зроблено робочими через `activeDaw` / `setDaw`.
- Виправлено shared toggle bug: тоглі стали per-family (`famOpen` / `toggleFam`).

---

## Pending / Backlog (з ARCHITECTS_BRIEF, у порядку ROI)

### Medium
- Deep-deploy Drone (інтерес автора): ambient → Radigue → Eno → modern ambient.
- Deep-deploy однієї НЕ-електронної родини (jazz head-solo-head або classical theme & variations) як доказ універсальності.
- Мігрувати 7 shallow Club Arc families у object-формат + productionTradition.
- Search/filter по архетипах і родинах.

### Low / Postpone
- Повна англійська локалізація контенту (зараз лише UI).
- Прибрати fallback-to-Ukrainian патерни `t('x') || 'укр'` (додати ключі в обидва блоки i18n).
- Розбиття `app.js` на окремі файли (коли стане некерованим).
- Mobile/responsive, contemporary canonical tracks (post-2020).

### Never Do
Form Dimensions/слайдери; третій Root Problem; шаблони/рецепти; змішування Core/Classic коду;
зміна деплою; писати контент спершу англійською.
