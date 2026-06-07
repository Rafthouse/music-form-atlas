# CONTEXT_TRANSFER_TO_CLAUDE.md — Music Form Atlas

**Author:** Mykyta Shchur (Микита)  
**Repo:** `https://github.com/Rafthouse/music-form-atlas`  
**Live:** `https://rafthouse.github.io/music-form-atlas/`  
**Working directory:** `/c/Users/User/music-form-atlas/` (Windows → MSYS/bash)

**Agent note:** This document was written by the previous agent (DeepSeek V4 / Hermes) to transfer full project context to Claude Code. Read carefully — every section contains decisions, pitfalls, and preferences that took multiple sessions to establish.

---

## 1. Project Vision

Music Form Atlas is a **pedagogical tool** that teaches musical form through **compositional decisions** — NOT a musicology classification system, NOT a philosophical ontology, and NOT a template library.

### Two Root Problems (immutable)

1. **Balance of Predictability and Novelty** → emotional flow (Repetition, Variation, Contrast)
2. **Organization of Musical Time** → structure (Segmentation, Directionality, Transition)

### Core Architecture (FROZEN)

```
Atlas = Core Concepts + Form Archetypes
```

| Layer | Content | Status |
|---|---|---|
| **Core Concepts** (4) | Segmentation, Repetition, Contrast, Directionality | FROZEN — no additions |
| **Form Archetypes** (10) | See §3 | Content can deepen but architecture cannot change |
| **Implementation Families** | Genre-specific sub-forms within archetypes | Active expansion — current focus |

### What Atlas IS NOT

- ❌ Not a template/recipe repository (Recipe/Blueprint banned)
- ❌ Not a multi-dimensional slider tool
- ❌ Not an encyclopedia of music history
- ❌ Not a curriculum (separate deliverable)

Every concept, family, and feature must pass the **Elimination Test:** *"If removed, does the student become noticeably worse at building form?"*

### Key Phrase (user preference)

> *"Не рахуй families. Будуй карту музичної історії."*
> (Don't count families. Build a map of music history.)

Every family should be a **rabbit hole** — leading to production tradition, canonical works with structural analysis, DAW translation, listening pathway, and links to related families/archetypes.

---

## 2. Current Architecture

### Two Independent Applications

| App | URL | File | Purpose |
|---|---|---|---|
| **Core Atlas** | `/` (root) | `app.js` (6343 lines, 592 KB) | Concept-first learning — 10 archetypes, 23 families, i18n UK/EN |
| **Classic Atlas** | `/classic/` | `classic/app.js` (1449 lines, 120 KB) | Form-library — 33+ forms with energy curves, tension layers |

They are **independent** — each has its own `index.html`, `app.js`, `styles.css`. No iframes, no shared JS. Use **relative paths only** (`classic/`, `../`) because of GitHub Pages subpath deployment.

### Data Model — Core Atlas (`app.js`)

```javascript
const formArchetypes = [ /* 10 archetype objects */ ];
```

Each archetype has ~15 content depth layers (sectionKnowledge, failureAnalysis, variants, canonicalTracks, diagnosis, genreTransfer, dawExercise, listeningExercise, comparisons, glossary, teacherNotes, deviations, families, generatedBy).

### Families — Two Formats

**Shallow (inline, v1.8+):** Simple string arrays for canonical tracks, common mistakes, distinguishing features. Used for auxiliary families (deep-house, tech-house, progressive-house, minimal-techno, psytrance, brostep, liquid-dnb, etc.).

**Deep-Deploy (v2.0+):** Full object structure with productionTradition, coreTechniques with DAW translations, listening pathway, compositionDecisions, designConstraints. Currently 6 deep-deploy families in Club Arc.

### Helper Functions (defined at ~lines 133–151 of `app.js`)

```javascript
function secKnowledge(name, purpose, whyItWorks, commonMistake, whenToSkip, composerDecision, realExamples)
function failureEntry(section, removed, effects)
function variant(name, used, why, tradeoffs)
function track(title, artist, year, formNotes, sections, genre, analysis)
function genreTransfer(genre, description, adaptation)
```

### Render System

- `buildDOM()` — shell bootstrap
- `render()` — full re-render on state change
- `renderLeftPanel()`, `renderMainContent()`, `renderConceptDetail()`, `renderFormDetail()`
- State keys: `showSecKnowledge`, `showFailure`, `showVariants`, `showTracks`, `showDiagnosis`, `showGenreTransfer`, `showDawExercise`, `showListeningExercise`, `showComparisons`, `showGlossary`, `showTeacherNotes`, `showDeviations`, `showFamilies`, `showCompositionDecisions`, `showDesignConstraints`
- Toggle: `onclick="toggle('showX')"` — flips boolean state, re-renders

### CSS Theme

- Dark: `--bg: #0f1214`, `--panel: #181c20`
- Concept colors: seg=#5bbcff, rep=#f6c85f, con=#ed6a73, dir=#63d6a5 / #b78cff
- ⚠️ **Chromium `<button>` bug**: `<button>` with `display: grid/flex` clips children. Fix: use `<div role="button" tabindex="0">` + `height: max-content`
- Family cards use `.family-card` grid layout

### Deployment

- GitHub Pages from `main` branch root
- Workflow: `.github/workflows/pages.yml` — auto-deploy on push to main
- CDN: 1–5 min propagation. Verify with `curl`, not browser cache

---

## 3. Existing Archetypes (10)

| # | ID | Title | Genre | Difficulty | Content Layers |
|---|---|---|---|---|---|
| 1 | `verse-chorus` | Verse-Chorus (Pop) | pop / rock | easy | All 15 |
| 2 | `club-arc` | Club Arc (Electronic) | house / techno | easy | All 15 + 13 families (6 deep) |
| 3 | `rondo` | Rondo (Classical) | classical | medium | All 15 |
| 4 | `12-bar-blues` | 12-Bar Blues | blues / rock / jazz | easy | All 15 |
| 5 | `process-minimal` | Process-Based Minimal | minimal / contemporary | hard | All 15 + 3 families |
| 6 | `theme-variations` | Theme & Variations | classical / jazz | medium | All 15 |
| 7 | `through-composed` | Through-Composed | art music / film | medium | All 15 + 3 families |
| 8 | `head-solo-head` | Head-Solo-Head (Jazz) | jazz | medium | All 15 |
| 9 | `sonata-allegro` | Sonata-Allegro | classical | hard | All 15 |
| 10 | `drone` | Drone (Static/Hypnotic) | ambient / experimental | medium | All 15 + 4 families |

**All 10 archetypes** have all 15 content depth layers implemented.

---

## 4. Existing Families

### Club Arc (13 families — line 880 of `app.js`)

**Deep-deploy (6) — have productionTradition and/or compositionDecisions + designConstraints:**

| Family | ID | Lines | BPM | Period | ProductionTradition | CompDecisions | DesignConstraints |
|---|---|---|---|---|---|---|---|
| **Chicago House** | `classic-house` | 882–1213 | 118–130 | 1985–1993 | ✅ Full | ✅ | ✅ |
| **Detroit Techno** | `detroit-techno` | 1311–1656 | 125–140 | 1987–1995 | ✅ Full | ✅ | ✅ |
| **Dub Techno** | `dub-techno` | 1682–2137 | 120–128 | 1994–2005 | ❌ (needs) | ✅ | ✅ |
| **Uplifting Trance** | `uplifting-trance` | 2138–2598 | 134–140 | 1998–2010 | ❌ (needs) | ✅ | ✅ |
| **Deep Dubstep** | `deep-dubstep` | 2626–3034 | 138–142 (hf 69–71) | 2005–2012 | Has coreTechniques only | ✅ | ✅ |
| **Neurofunk** | `neurofunk` | 3103–3498 | 172–180 | 2002–2015 | Has coreTechniques only | ✅ | ✅ |

**Shallow (7) — simple string-format families:**

| Family | ID |
|---|---|
| Deep House | `deep-house` |
| Tech House | `tech-house` |
| Progressive House | `progressive-house` |
| Minimal Techno | `minimal-techno` |
| Psytrance | `psytrance` |
| Brostep | `brostep` |
| Liquid DnB | `liquid-dnb` |

### Process-Minimal Families (3 — line 4265)

`minimalism`, `loop-production`, `generative` — all shallow.

### Through-Composed Families (3 — line 4700)

`progressive-rock`, `idm`, `film-scoring` — all shallow.

### Drone Families (4 — line 5325)

`ambient`, `dark-ambient`, `drone-ambient`, `isolationist` — all shallow.

---

## 5. ProductionTradition System

Only **2 families** have full `productionTradition`: Chicago House and Detroit Techno.

Structure:
```javascript
productionTradition: {
  philosophy: "String describing the sound philosophy...",
  coreTechniques: [
    {
      name: "Technique name with specific gear",
      description: "How it works, why it matters",
      dawTranslation: {
        ableton: "Step-by-step: named devices, parameters, values",
        flStudio: "Step-by-step: named devices, parameters, values",
        logic: "Step-by-step: named devices, parameters, values"
      }
    },
    // 4-5 techniques
  ],
  listeningPathway: [
    { step: 1, track: "Artist — Title (Year)", insight: "What to listen for..." },
    // 7 steps
  ]
}
```

**⚠️ DAW Translation must be concrete.** Name specific devices: `Ableton: Operator → Auto Filter → Saturator`. `FL Studio: 3x Osc → Fruity Parametric EQ 2 → Fruity WaveShaper`. Never generic "add reverb" — specify plugin, parameters, values.

**Families needing ProductionTradition:** Dub Techno, Uplifting Trance, Deep Dubstep (has coreTechniques but no listening pathway/philosophy), Neurofunk (has coreTechniques but no listening pathway/philosophy).

---

## 6. DAW Translation System

Embedded within `coreTechniques[].dawTranslation`. Three DAWs supported:

| DAW | Key | Pattern |
|---|---|---|
| **Ableton Live** | `ableton` | Named devices: `Simpler`, `Auto Filter`, `Echo`, `Saturator`, `Groove Pool` |
| **FL Studio** | `flStudio` | Named plugins: `Fruity Filter`, `3xOsc`, `Fruity Delay 3`, `Patcher` |
| **Logic Pro** | `logic` | Named instruments: `ES2`, `Alchemy`, `Ultrabeat`, `ChromaVerb`, `Space Designer` |

**Quality standard:** Each DAW translation must be independently playable — a student in any of the three DAWs should be able to reproduce the technique without additional research.

Deep Dubstep and Neurofunk have `dawTranslation` in their `coreTechniques` array (not wrapped in a full `productionTradition` object). This is a partial implementation.

---

## 7. Localization Plans

Current state:
- **Ukrainian (default):** Full — all content, labels, archetypes, families in `app.js`
- **English:** i18n object exists with ~80 translated UI labels, but **content data is Ukrainian-only**
- **Lang switch:** `state.lang` toggles between `"uk"` and `"en"`, all render functions use `${t('key')}`

**What's missing for full English localization:** All archetype/family content (descriptions, decisions, traditions, canonical track analysis etc.) is in Ukrainian. To fully localize, each content string needs an `en` counterpart — either in the i18n object or as bilingual fields in the data model.

**⚠️ Pitfall:** Never use blanket `str.replace()` on code for i18n — it corrupts the i18n values themselves. Target render side explicitly.

**⚠️ Pitfall:** JS plain strings `'string'` cannot evaluate `${...}` — only backtick template literals can. When replacing a plain-string heading with a `t()` call, ensure the enclosing string uses backticks.

---

## 8. Historical Families Plans

The user's long-term vision for deep-deploy expansion:

```
Archetype → Family → Canonical Works (10-15 with structural analysis)
                    → Historical Movements
                    → Production Traditions
                    → DAW Translations
                    → DAW for Composers (generative layer)
```

**Selected archetype for demo depth:** **Drone** — because it naturally leads into rabbit holes (La Monte Young → Radigue → Eno → ambient → isolationism).

**Architecture must not change.** No new archetypes, no new families at the architectural level — only deepen existing data.

**Priority rule (user preference):** Implement core content first, then expand periphery. When given a multi-part task, the first part (core implementation) is priority — peripheral enrichment comes after committing and verifying.

**Infrastructure for families per archetype:**

| Archetype | Families | Deep-deployed | Needs deep expansion |
|---|---|---|---|
| Club Arc | 13 | 6 | 7 shallow → medium priority |
| Process-Minimal | 3 | 0 | Low priority |
| Through-Composed | 3 | 0 | Low priority |
| Drone | 4 | 0 | Medium priority |
| Others | 0 | — | Consider adding families |

---

## 9. Open Issues

### Content Completeness

1. **Dub Techno** has compositionDecisions + designConstraints but NO `productionTradition`. Needs philosophy, listening pathway, and wrap-around.
2. **Uplifting Trance** has compositionDecisions + designConstraints but NO `productionTradition`. Needs full production tradition + DAW translations.
3. **Deep Dubstep** has `coreTechniques[]` with DAW translations but they're not wrapped in `productionTradition` — no philosophy, no listening pathway.
4. **Neurofunk** same situation as Deep Dubstep — has coreTechniques without the production tradition wrapper.
5. **Shallow families** (7 in Club Arc, 3 in Process-Minimal, 3 in Through-Composed, 4 in Drone) could be deep-deployed but this is lower priority.

### Architecture / Technical

6. **PROJECT_STATE.md** is outdated (describes 5 archetypes, actual has 10)
7. **ARCHITECTURE_FREEZE.md** lists only 5 archetypes — needs update
8. **README.md** describes v1.1-beta, project is now at effectively v2.0a
9. **`compositionDecisions`** rendering uses a single toggle `showCompositionDecisions` shared across ALL families. Opening one opens all. Same for `showDesignConstraints`. This is a UX bug — should be per-family.
10. **Canonical tracks in shallow families** use string format (`"Artist — Title (Year)"`), deep-deploy uses object format. There's no migration path.
11. **Track timestamps** must use en-dash `–` (U+2013), not hyphen `-`. Verified in deep-deploy families.
12. **Family data is in `app.js` inline** — not in separate files. This file is already 6343 lines / 592 KB. Consider splitting when growth becomes unwieldy.
13. **Dub Techno has an extra closing brace/dangling section** at line ~2136 (`},\n        {\n    id: "uplifting-trance"`) — the `},` closes the dub-techno family and the `{` opens the next. This **looks** like a malformed families array but is actually correct JS. Do not "fix" it — verify before touching.

### Decisions Not Yet Made

14. **Theme & Variations** — decided YES (it's archetype #6). ✅ Done.
15. **Sonata-Allegro** — decided YES (it's archetype #9). ✅ Done.
16. **Head-Solo-Head** — decided YES (it's archetype #8). ✅ Done.
17. **Drone** — decided YES (it's archetype #10). ✅ Done.
18. **Historical Movements** — decided: SECONDARY. Derivable from canonical work dates + region context. Do not add as a primary layer.
19. **Scene** (club scene data) — SECONDARY. Derivable from works + labels. Do not add.
20. **Technique as primary layer** — NO. It's a nested child of Production Tradition.
21. **Full English localization** — deferred. All content is Ukrainian. i18n labels exist but content needs translation.

### Style / Process

22. **Investigation protocol (user preference):**
    1. First verify `git ls-tree -r origin/main --name-only | grep <pattern>` (files exist)
    2. Then `curl` against live Pages URL (CDN propagated)
    3. Then `gh run list --workflow=pages.yml` (deployment succeeded)
    4. Only THEN check browser
    5. Show evidence for each step

23. **Linter false positive:** `node -c _archetype_*.js` fails with `SyntaxError: Unexpected token ':'` — expected for bare object-expression files. Ignore.

24. **Work style:** Values focused execution over architecture discussions. Mocks over-engineering. Prefers data additions over system changes.

---

## 10. Recommended Roadmap

### Phase 1 — Content Deepening (Current)

| Task | Priority | Status |
|---|---|---|
| ✅ Composition Decisions + Design Constraints → Chicago House, Uplifting Trance, Deep Dubstep, Neurofunk | HIGH | ✅ DONE |
| 🔲 Production Tradition → Dub Techno (philosophy + listening pathway) | HIGH | Open |
| 🔲 Production Tradition → Uplifting Trance (philosophy + DAW translations) | HIGH | Open |
| 🔲 Wrapping: Deep Dubstep coreTechniques → full productionTradition | HIGH | Open |
| 🔲 Wrapping: Neurofunk coreTechniques → full productionTradition | HIGH | Open |
| 🔲 Composition Audit: verify all 6 families pass composer workflow test | HIGH | Audit done, validation open |

### Phase 2 — Club Arc Completion

| Task | Priority |
|---|---|
| Deep-deploy remaining 7 shallow families (deep-house → liquid DnB) | MEDIUM |
| Each: 10 canonical tracks (objects), productionTradition, compositionDecisions, designConstraints | MEDIUM |
| Historical movement context for each family | LOW (derivable) |

### Phase 3 — Archetype Expansion

| Task | Priority |
|---|---|
| Add implementation families to Verse-Chorus (pop sub-genres) | LOW |
| Add implementation families to 12-Bar Blues (delta, Chicago, Texas) | LOW |
| Drone archetype deep-deploy families (ambient, dark-ambient, drone-ambient, isolationist) | MEDIUM |

### Phase 4 — Cross-Cutting

| Task | Priority |
|---|---|
| Full English localization of all Ukrainian content | LOW |
| Fix shared toggle bug (per-family compositionDecisions/designConstraints toggle) | LOW |
| Update PROJECT_STATE.md, ARCHITECTURE_FREEZE.md, README.md | LOW |
| Consider splitting families into separate JS files | LOW (not urgent) |

### Never Do

- ❌ Replace Form Archetypes with Form Dimensions/sliders
- ❌ Add new archetypes beyond the current 10
- ❌ Add new families beyond what already exists in archetypes
- ❌ Change the Two-Root-Problem architecture
- ❌ Modify Core Concepts (4 are frozen)
- ❌ Add Recipe/Blueprint/track templates
- ❌ Redesign UI/navigation — only deepen content
- ❌ Mix code between Core and Classic Atlas
- ❌ Change GitHub Pages deployment or .gitignore
- ❌ Remove content — only add

---

## Index of Key Files

| File | Lines | Purpose |
|---|---|---|
| `app.js` | 6343 | Main application — all content, logic, renderers |
| `styles.css` | ~650 | Dark theme, layout, components |
| `index.html` | 12 | Shell bootstrap |
| `classic/app.js` | 1449 | Classic Atlas — 33+ forms with energy curves |
| `classic/styles.css` | ~500 | Classic Atlas styling |
| `.github/workflows/pages.yml` | 36 | Auto-deploy on push to main |
| `.gitignore` | 3 | .DS_Store, Thumbs.db, *.log |
| `ARCHITECTURE.md` | 97 | Architecture reference (outdated) |
| `ARCHITECTURE_FREEZE.md` | 212 | Frozen architecture rules |
| `PROJECT_STATE.md` | 120 | Project state (outdated) |
| `CONTEXT_TRANSFER_TO_CLAUDE.md` | THIS | Full context transfer |

---

## Things Previous Agent Learned the Hard Way

1. **Don't touch architecture.** The user rejected multiple proposals that changed the information model. Content additions only. Data doesn't need a new home — it lives in the same `families[]` array.

2. **Don't guess commands.** For Hermes Agent CLI/config tasks, always load the `hermes-agent` skill first. It has the actual commands.

3. **Don't ask before doing low-risk edits.** The user prefers execution over deliberation. When in doubt, make the decision and show the result. Only ask if the decision is irreversible or expensive.

4. **Don't use sed/awk for file edits.** Use `patch` tool (find-and-replace with fuzzy matching) — it's safer and preserves indentation.

5. **Debugging process:** If the deployed site doesn't show changes, run through the investigation protocol (curl → gh run → browser → screenshots). CDN caching is the #1 cause of "didn't deploy" scares.

6. **Don't let Dub Techno fool you.** Its closing brace at the end looks suspicious but is correct. Verify JS syntax with `node --check app.js` before assuming a bug.

7. **The user is Ukrainian. All content is Ukrainian.** The English i18n is UI labels only. Do not write content in English unless explicitly asked.

8. **Windows paths in terminal:** Use `/c/Users/User/...` (MSYS style), not `C:\Users\User\...` or Windows-style backslashes. Git-bash shell handles POSIX paths.

9. **Memory is for durable facts.** Don't save task progress, PR numbers, or commit SHAs to memory. Use `session_search` to find past context. Save procedure knowledge as skills.

10. **The user's name is Mykyta/Микита.** Address in Ukrainian. He's in Europe/Kyiv (GMT+3) timezone.