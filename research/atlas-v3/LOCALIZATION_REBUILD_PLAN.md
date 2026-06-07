# LOCALIZATION_REBUILD_PLAN.md

**Project:** Music Form Atlas
**Document type:** Localization audit + rebuild plan (research only)
**Status:** Proposal. NO code, NO deployment. Findings verified directly against `app.js` and
`classic/app.js` on 2026-06-07.
**Goal:** 100% Ukrainian UI **and** 100% English UI. No mixed-language state, ever.

---

## 0. Verdict

Localisation is **not production-acceptable**. The English mode is a façade: ~66 UI labels are
translated, but **all actual content is Ukrainian-only**, several UI strings are **hardcoded**
(bypassing i18n entirely), one is **hardcoded in English inside the Ukrainian UI**, the two
language tables are **out of sync**, and the **Classic Atlas has no i18n at all**. Switching to
EN today produces a screen that is part English, part Ukrainian, part raw code keys.

This is fixable, but not by patching. It needs an **infrastructure rebuild** for content
localisation plus a cleanup pass for UI labels.

---

## 1. Current i18n Infrastructure (what exists)

| Element | Location | State |
|---|---|---|
| `i18n` object | `app.js:5484` | `uk` (66 keys) + `en` (67 keys) — **UI labels only** |
| `t(key)` | `app.js:5624` | `return (i18n[state.lang] \|\| i18n.uk)[key] \|\| key;` |
| `state.lang` | `app.js:5450` | `"uk"` default; `toggleLang()` flips uk/en |
| `langSwitch` label | i18n | uk:`"EN"` / en:`"УК"` |
| Classic Atlas i18n | `classic/app.js` | **NONE** — 0 occurrences of `i18n`, `state.lang`, `t()` |
| `<html lang>` | `index.html`, `classic/index.html` | both hardcoded `lang="uk"` |

---

## 2. Findings (evidence)

### 2.1 Content is 100% Ukrainian-only — the core problem
There is **no bilingual content layer**. Every data field in every archetype and family is a
single Ukrainian string. Examples (all UK-only, no `_en` counterpart):

- Archetype: `description`, `sectionKnowledge[]`, `failureAnalysis[]`, `variants[]`,
  `diagnosis[]`, `genreTransfer[]`, `glossary[]`, `teacherNotes[]`, `deviations[]`
- Canonical tracks: `formNotes`, section labels, analysis prose
- Families: `structuralProfile`, `energyProfile`, `commonMistakes[]`,
  `distinguishingFeatures[]`, `compositionDecisions{}`, `designConstraints{}`
- Production tradition: `philosophy`, `coreTechniques[].description`, all three
  `dawTranslation` strings, `listeningPathway[]`

→ In EN mode the entire body of every page renders in Ukrainian. The language toggle changes only
chrome (headings/labels), not substance.

### 2.2 Hardcoded UI strings that bypass i18n
These render the same regardless of `state.lang`:

| Line | String | Language | Problem |
|---|---|---|---|
| `app.js:6162` | `<strong>Відмінні ознаки</strong>` | UK | Should use `featuresLabel`; never switches |
| `app.js:6174` | `<em>Філософія:</em>` | UK | No i18n key exists at all |
| `app.js:6195` | `<strong>Listening Pathway</strong>` | **EN** | **Mixed-language**: English label hardcoded into the otherwise-UK UI |
| `app.js:6242` | `<strong>Пов'язані сімейства:</strong>` | UK | No i18n key exists |

(DAW tab labels `Ableton` / `FL Studio` / `Logic Pro` are intentionally language-independent —
acceptable.)

### 2.3 Key-parity broken between uk and en
Programmatic diff of the two tables:

```
uk keys: 66   |   en keys: 67
In EN but NOT in UK: ['vsLabel']
In UK but NOT in EN: []
```

→ `t('vsLabel')` in **UK** mode returns the raw string `"vsLabel"` to the user (used in the
comparisons section).

### 2.4 `t()` fails loudly
`t(key)` returns the **key name itself** when a key is missing:
`return (...)[key] || key;`. A missing/typo'd key shows e.g. `"sectionDurationLabel"` on screen
instead of a word. There is no dev-vs-prod distinction and no logging.

### 2.5 Fragile fallback pattern
Six render sites use `t('x') || 'Ukrainian fallback'` (e.g. `app.js:6169, 6232–6236`). Because
`t()` never returns falsy (it returns the key on miss), these Ukrainian fallbacks are **dead code
that can never fire** — yet they *look* like working fallbacks, and if the key were ever removed
they would silently inject Ukrainian into EN mode. Misleading and unsafe.

### 2.6 i18n table formatting is inconsistent
Within both `uk` and `en` blocks, indentation jumps between 4, 8, and deeper spaces
(`app.js:5485–5621`). Cosmetic, but it signals the `en` block was bolted on later (brief confirms
this) and makes diffs noisy.

### 2.7 Classic Atlas: no localisation infrastructure whatsoever
`classic/app.js`: **zero** `i18n` / `state.lang` / `t()`. ~70 forms, ~205 Cyrillic lines mixed
with English identifiers. There is **no possible language switch**. (The architects' brief claims
Classic is "entirely English"; the code shows it is actually a **single-language hardcoded mix**,
mostly Ukrainian content with English form names — the brief is inaccurate here.)

### 2.8 `<html lang>` never reflects the active language
Both apps hardcode `lang="uk"`. In EN mode this is wrong for accessibility (screen readers) and
SEO. `state.lang` should drive `document.documentElement.lang`.

---

## 3. Target State

| Dimension | Target |
|---|---|
| UI labels | 100% in **both** uk and en, key-parity guaranteed, zero hardcoded strings |
| Content | Every user-visible content string available in both uk and en |
| Mixed state | **Impossible** — no screen ever shows two languages |
| Missing key | Fails *safe* and *visible-in-dev* (e.g. dev marker), never raw key in prod |
| Classic Atlas | Either fully localised with the same i18n, or explicitly scoped out with a banner |
| `<html lang>` | Driven by `state.lang` |

---

## 4. The Content-Localization Decision (the crux)

UI labels are easy (close the gaps in `i18n`). The hard, expensive problem is the **content**.
Three architectures (from the brief, evaluated):

| Option | How | Pro | Con | Recommendation |
|---|---|---|---|---|
| **A. Bilingual fields** | Each content field becomes `{uk, en}` (or `field_uk`/`field_en`) | Self-contained; one file; atomic per-entry translation; easy stub-then-translate | Doubles content size; touches every data object; render must unwrap | **Recommended** — best fit for a single-file→data-file model and for incremental translation |
| **B. Separate language files** | `content.uk.js` + `content.en.js` | Clean separation; can lazy-load one language | Duplication; structural drift between files; sync nightmare at ~110 families | Reject |
| **C. Machine translation + review** | Pipeline translates, human reviews | Scalable | Quality risk on domain terms; not an *architecture*, a *process* | Use as a *tool inside* Option A, not as the architecture |

**Proposed model (Option A):** a single accessor, e.g. `tx(field)` returning
`field?.[state.lang] ?? field?.uk ?? field`, so:
- new content can be authored **uk-first** (per brief's non-negotiable "never write English
  first") as a plain object `{uk: "..."}`,
- `en` is added later as `{uk: "...", en: "..."}`,
- a string with no object still renders (back-compat during migration).

This lets **breadth proceed in Ukrainian** (Atlas's primary language) while leaving a clean,
mechanical path to add English per entry — without ever producing a mixed screen (if `en` is
absent the policy decides: either show uk with a `[UK]` marker, or hide EN entries until
translated — see §6).

---

## 5. Rebuild Plan (phased; research-defined, implement later)

| Phase | Action | Output |
|---|---|---|
| **L0. Freeze the contract** | Define `tx()` accessor + content-field shape `{uk, en}`; define missing-key policy; decide Classic Atlas scope. | This document + agreed API |
| **L1. UI-label cleanup** | Remove all hardcoded UI strings (§2.2); add keys `philosophyLabel`, `listeningPathwayLabel`, `relatedFamiliesLabel`, `featuresLabel` (reuse), `vsLabel` (add to uk). Enforce uk/en parity. Normalise indentation. | i18n: 100% parity, 0 hardcoded |
| **L2. Hardening** | Make `t()` fail safe; remove dead `\|\| 'fallback'` patterns; drive `<html lang>` from `state.lang`. | Robust i18n runtime |
| **L3. Content infra** | Introduce `tx()` and the `{uk,en}` field shape; migrate the data model so content fields *can* hold both languages (uk values unchanged). No translation yet. | Bilingual-capable content layer |
| **L4. EN content pass** | Translate content uk→en per entry (human or MT+review), starting with the most-visited (the 6 deep Club Arc families, then archetype overviews). | Growing EN coverage |
| **L5. Classic Atlas** | Either port the i18n+`tx()` system into `classic/app.js`, or wrap it with a clear "Ukrainian only" notice and exclude from the EN claim. | No silent mixed state |
| **L6. Guardrail** | A tiny build/test check that asserts uk/en key parity and flags any hardcoded Cyrillic/Latin string in render templates. | Regression prevention |

**Ordering note:** L1–L2 are cheap and should happen regardless of the breadth decision — they fix
the *embarrassing* mixed-language bugs today. L3–L5 are the expensive content rebuild and should be
sequenced **after** the architecture decision in the masterplan (translating content before the
taxonomy settles wastes effort).

---

## 6. Open Policy Questions (need the user's call)

1. **Missing-EN policy:** when an entry has no English yet, should EN mode (a) show Ukrainian with
   a `[UK]` badge, or (b) hide untranslated entries entirely? *(a) preserves breadth; (b)
   guarantees "no mixed state" literally.* — Recommendation: **(a) with badge**, because hiding
   entries would make the EN map look emptier than it is.
2. **Classic Atlas:** localise it (cost) or formally scope it as Ukrainian-only (honesty)? —
   Recommendation: scope out for now; revisit after Core breadth.
3. **DAW translation language:** keep device/parameter terms in their native DAW language
   (Ableton's English device names) even in UK mode? — Recommendation: **yes** (these are product
   names, not prose), with surrounding instructions translated.
4. **Authoring language:** confirm uk-first authoring as a hard rule for all new breadth content
   (per brief). — Recommendation: **yes**.

---

## 7. Summary

- The English mode is currently **cosmetic**: labels switch, content does not.
- Four hardcoded strings (one in the *wrong* language) and a key-parity break create a literally
  mixed-language screen **today** — cheap to fix (L1–L2), should be done now.
- True bilingualism requires a **content-layer rebuild** (Option A: `{uk,en}` fields + `tx()`),
  best done *after* the breadth/taxonomy architecture is agreed, and authored **uk-first**.
- Classic Atlas has **no i18n** and should be honestly scoped, not silently claimed as bilingual.
