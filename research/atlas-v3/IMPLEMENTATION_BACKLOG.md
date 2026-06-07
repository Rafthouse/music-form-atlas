# Atlas V3 — Implementation Backlog

**Status:** Plan only. **No application code is written or authorized by this document.**
**Source of truth:** [`ATLAS_V3_FROZEN.md`](ATLAS_V3_FROZEN.md).
**Purpose:** Convert the frozen architecture into actionable phases with entity counts, affected
files, and expected repository growth. Numbers are **planning estimates** (ranges), not commitments.

---

## 0. Baseline (today, pre-V3)

| Metric | Value |
|---|---|
| `app.js` | ~6,370 lines · ~584 KB (all data + logic inline) |
| `classic/app.js` | ~1,449 lines · ~120 KB |
| Macro-archetypes | 0 (flat model: 10 "archetypes", mixed altitude) |
| Families | 23 (6 deep) |
| Forms with depth | ~10 |
| Canonical works | ~few hundred (mostly in classic + deep families) |
| Repo size (working tree, excl. .git) | ~0.75 MB |

**Cross-phase prerequisite (Phase 0 — architecture, no content):** agree data-file layout and
introduce a content **data/** directory so `app.js` stops being the single store. Recommended:
`data/macro-archetypes.js`, `data/families.js`, `data/forms/<macro>.js`, `data/works/<macro>.js`,
`data/lineages.js`. This split is a **hard requirement** before Phase 3 (works) or `app.js` becomes
unmaintainable.

---

## Phase 1 — Breadth Stubs

**Goal:** turn "10 examples" into a full, browsable map. Stub **every** family and form.
**Stub shape (per Form):** `{ name, oneLineDef, macroArchetypeId, familyId, era, region[],
genre[], facets{}, oneCanonicalWork }`.

| Estimate | Value |
|---|---|
| **Entities created** | 10 macro-archetypes · **60–90 families** · **250–400 forms** · ~300–400 "1-per-form" canonical work refs |
| **Affected files** | NEW `data/macro-archetypes.js`, `data/families.js`, `data/forms/*.js`; `app.js` (taxonomy-tree render + facet plumbing — new render module, no logic removed); `styles.css` (tree/landing); migrate existing 23 families + 10 archetypes into the model |
| **Repo growth** | data stubs ~**+100–150 KB** (300 forms × ~250–400 B + families/macros). `app.js` may *shrink* as inline content moves to `data/`. Net working tree ≈ **+0.1–0.2 MB** |
| **Exit gate** | All 10 macros and all 12 civilizations show non-zero counts; opening Atlas *feels* like a map |

---

## Phase 2 — Families

**Goal:** every family becomes a real tradition page; navigation facets go live.

| Estimate | Value |
|---|---|
| **Entities enriched** | **60–90 family descriptions** (what unites it, period, region, why it matters, form list); region/genre/lineage tags on all forms; ~20–40 lineage "roads" |
| **Affected files** | `data/families.js` (expand); NEW `data/lineages.js`; `app.js` (the 5 facet views: By History / Region / Genre / Production / Structure + search); `styles.css` (timeline + map + genre views) |
| **Repo growth** | family prose ~1–2 KB each → ~**+100–180 KB**; lineages ~+20 KB. Net ≈ **+0.15 KB→0.2 MB** |
| **Exit gate** | Every family has a real description and ≥3 forms; all five views function over real tags |

---

## Phase 3 — Canonical Works

**Goal:** populate forms with curated, attributed works in the object format
(`title, artist, year, label, region, timeline[], analysisScores{}, productionNotes`).

| Estimate | Value |
|---|---|
| **Entities created** | **~1,000–2,000 works** initially (≥1 per form; 5–10 for flagship forms), scaling toward **1,500–4,000** at maturity |
| **Affected files** | NEW `data/works/<macro>.js` (the bulk of the dataset — **this is why the file split is mandatory**); `app.js` (track-card render already exists; extend for new fields); minor `styles.css` |
| **Repo growth** | ~0.5–1.5 KB per work → **+0.8–3 MB** (dominant growth phase). Working tree moves from <1 MB to **multi-MB** |
| **Exit gate** | Every form has ≥1 attributed work; flagship forms have a real canon |
| **Risk** | Load performance — at multi-MB, consider lazy-loading `data/works/*` per macro/civilization on demand |

---

## Phase 4 — Deep Analysis

**Goal:** apply the *existing* deep-deploy format to selected exemplars — ≥1 per civilization,
**including non-electronic** (proves depth scales beyond EDM).
**Deep shape (per Form):** `productionTradition{philosophy, coreTechniques[]×4–5 w/ 3 DAW
translations, listeningPathway}` + `compositionDecisions{}` + `designConstraints{}`.

| Estimate | Value |
|---|---|
| **Entities deepened** | **≥12 exemplar forms** (one per civilization), then expand opportunistically; current 6 deep Club Arc families become 6 of these exemplars (re-homed) |
| **Affected files** | `data/forms/*` or dedicated `data/deep/*.js` for the exemplars; `app.js` (deep-deploy render already exists from v2.0b — production tradition, DAW tabs, decisions, constraints) |
| **Repo growth** | ~8–15 KB per deep form → **+0.1–0.2 MB** for the first 12; scales linearly thereafter |
| **Exit gate** | ≥12 deep exemplars spread across civilizations, not concentrated in electronic |

---

## Phase 5 — Localization

**Goal:** 100% Ukrainian + 100% English, no mixed-language state. Per
[`LOCALIZATION_REBUILD_PLAN.md`](LOCALIZATION_REBUILD_PLAN.md).

| Estimate | Value |
|---|---|
| **Entities affected** | UI labels (~66 keys × 2, achieve parity) + **every content string** wrapped `{uk, en}`; potentially thousands of strings across all `data/*` |
| **Affected files** | `app.js` (i18n object, NEW `tx()` accessor, `<html lang>` binding, remove hardcoded `Listening Pathway`/`Філософія:`/etc., kill dead `||'fallback'` patterns); **all `data/*` files** (field shape `{uk,en}`); `classic/*` (localize OR formally scope out) |
| **Repo growth** | EN translation roughly **doubles translated content** → if post-P4 content is ~2–4 MB, EN adds **+1.5–3.5 MB** (phased; uk-first means EN can lag per entry) |
| **Exit gate** | No mixed-language screen in either language; uk/en key parity enforced by a guard |
| **Cheap, ungated now** | The embarrassing bugs (hardcoded English `Listening Pathway`; `vsLabel` parity) may be fixed anytime, independent of this phase |

---

## Summary — Cumulative Repository Growth (estimate)

| After phase | Forms | Works | Working-tree size (excl. .git) |
|---|---|---|---|
| Baseline | ~10 deep | ~few hundred | ~0.75 MB |
| **P1 Breadth** | 250–400 (stubs) | ~300–400 (1/form) | ~0.85–0.95 MB |
| **P2 Families** | 250–400 | ~300–400 | ~1.0–1.2 MB |
| **P3 Works** | 250–400 | 1,000–2,000 → 4,000 | **~2–4 MB** (dominant) |
| **P4 Deep** | + ≥12 deep | — | ~2.1–4.2 MB |
| **P5 Localization (EN)** | — | — | **~3.5–8 MB** (≈ ×1.8 of content) |

**Takeaways**
1. Phase 3 (works) is the size driver and the reason the **data-file split (Phase 0)** is
   non-negotiable.
2. Breadth (P1–P2) is *cheap* in bytes (~+0.3 MB) but is the phase that changes how Atlas *feels* —
   highest value-per-byte.
3. Localization (P5) is the largest *content* multiplier; doing it before P3 would waste effort
   (translating an unsettled corpus), hence its position last — except the two cheap bug-fixes.
4. None of this is authorized yet. Implementation begins only on explicit user approval, starting
   with Phase 0 (file layout) + Phase 1 (stubs).

---

## Ordering Invariant

**Breadth → Families → Works → Deep → Localization.** Each phase has an exit gate
(`ATLAS_ONTOLOGY_V3.md §7`). Depth must not run ahead of breadth — that inversion is the mistake
V3 exists to correct.
