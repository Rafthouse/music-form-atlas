# ATLAS_V3_FROZEN.md

**Project:** Music Form Atlas
**Status:** ✅ **FROZEN** — 2026-06-07. Architecture of record.
**Authority:** This document is the canonical ontology. For the middle layer it **supersedes** the
flat "10 archetypes" of `ARCHITECTURE_FREEZE.md`.
**Provenance:** `ATLAS_TERRITORY_MAP.md` → `ATLAS_EXPANSION_MASTERPLAN.md` → `ATLAS_ONTOLOGY_V3.md`
→ `ONTOLOGY_STRESS_TEST.md` → user rulings → `12_BAR_BLUES_DEFENSE.md` → this freeze.
**Scope of freeze:** the *structure* below is frozen. Family/Form/Work **lists are NOT frozen** —
a map is never "complete."

---

## 1. Frozen Foundation (unchanged from V1)

- **Two Root Problems:** Balance of Predictability/Novelty · Organisation of Musical Time.
- **Four Core Concepts:** Segmentation · Repetition · Contrast · Directionality.
  *(Now carried as emphasis-score facets on every Form, and a "By Core Concept" filter.)*
- **No Form Dimensions / sliders / templates / recipes.** V3 is discrete, named, concrete forms.

## 2. Frozen Hierarchy (4 levels, one storage tree)

```
MACRO-ARCHETYPE  →  FAMILY  →  FORM  →  CANONICAL WORK
(~10)              (~60–90)   (~250–400)  (~1,500–4,000)
```
One home per node. Multiple browsing routes are **facet indexes**, not extra parents (§5).

## 3. Frozen Spine — 10 Macro-Archetypes

| ID | Macro-Archetype | Status |
|---|---|---|
| I | Strophic / Sectional Song | frozen |
| II | Refrain-Return (Rondo / Ritornello) | frozen — *watch* (closest to being a Family of I) |
| III | Variation | frozen — dual-tags with VI at the ground-bass boundary |
| IV | Developmental / Dialectical (Sonata) | frozen — *watch* (tonal-leaning, narrow) |
| V | Imitative / Contrapuntal (Fugue / Canon) | frozen — strongest new principle |
| VI | Cyclic / Groove / Ostinato | frozen — absorbs Club Arc as a Family |
| VII | Process / Gradual | frozen |
| VIII | Stasis / Drone | frozen — admission rule applies |
| IX | Through-Composed / Narrative | frozen — admission rule applies |
| XII | Moment / Mosaic / Collage | frozen — second-strongest new principle |

> The number is **10 again, but a different, defended ten**: altitude-consistent, test-passing,
> and including the two real gaps (V Fugue, XII Moment). The problem was never the count — it was
> consistency. (IDs keep the V/VI/XII numbering from the design history for traceability; "XI" and
> "X" are intentionally retired — see §4.)

## 4. Frozen Rulings (the three decisions + the blues call)

| # | Ruling | Result |
|---|---|---|
| 1 | **Energy-Arc (former XI) → FACET** | `energyArc` / tension-profile on every Form. **Club Arc → Family under VI Cyclic** with a maximal energy-arc facet. Not a macro. |
| 2 | **Improvisation-Frame (former X) → FACET** | `improvised: none / framed / free` on every Form. **Raga, Maqam/Taqsim rescued as Forms** (homed under VIII + VI). Not a macro. |
| 3 | **Ground-Bass / Passacaglia / Chaconne → DUAL-TAG** | Primary macro VI, secondary III. First-class bridge cluster, not buried under III. |
| 4 | **12-Bar Blues → FORM** | Child of Family *Blues*, macro VI. Flagged `flagship` ("canonical teaching Form for VI"). Siblings: 8-bar, 16-bar, jazz/Bird, minor blues. (See `12_BAR_BLUES_DEFENSE.md`.) |

## 5. Frozen Facet Set (powers navigation; carried by every Form)

`macroArchetypeId` (primary) · `secondaryMacroIds[]` (e.g. ground-bass) ·
`coreConceptScores {seg,rep,con,dir}` · `energyArc` · `improvised` ·
`era` · `region[]` · `genre[]` · `productionTraditionId?` · `lineageIds[]` · `flagship?`

**Five frozen browsing views** over the one tree: **By Structure · By History · By Region ·
By Genre · By Production Tradition** — plus curated lineage "roads" and global search.

## 6. Frozen Admission Rules (anti-catch-all)

- **IX** rejects anything with a recurring anchor → send to I/II/VI.
- **VIII** rejects anything whose interest comes from *designed change* → send to VI/VII.
- **XII** rejects anything whose blocks carry directional momentum → send to IX (or `energyArc` facet).

## 7. Migration of Current Atlas Entities (final, non-destructive)

| Current | → Frozen placement |
|---|---|
| Verse-Chorus | **Form** · Family Pop/Rock Song · I |
| Rondo | **Form** · Family Classical Rondo · II |
| Theme & Variations | **Form** · Family Classical Variation Sets · III |
| Sonata-Allegro | **Form** · Family Viennese Classical Sonata · IV |
| 12-Bar Blues | **Form** · Family Blues · VI (flagship) |
| Process-Based Minimal | **Macro VII** |
| Through-Composed | **Macro IX** |
| Drone | **Macro VIII** |
| Club Arc | **Family** · VI · `energyArc` max (was a macro in draft V3 — overturned by stress test) |
| Head-Solo-Head | **Family** · X-retired → forms homed via II + `improvised: framed` |
| All 13 Club Arc sub-families (Chicago House … Liquid DnB) | **Forms** under genre Families (House/Techno/Trance/Bass Music/DnB) · VI |
| Process/Through-Composed/Drone sub-families | **Families/Forms** re-homed under VII / IX / VIII |
| 4 Core Concepts | **Facets** (emphasis scores) + "By Core Concept" filter |

*Nothing is deleted. Every existing content object is re-parented.*

## 8. NOT Frozen (deliberately open)

- All **Family / Form / Canonical Work lists** — they grow indefinitely.
- The two **"watch" macros** (II, IV) — may later fold (II→Family of I) if teaching argues for a
  leaner spine. Revisit only with evidence.
- The deferred **Multi-Movement Cycle** meta-archetype — modelled as a Work/Form cross-link, not a
  tier, until the 10 are populated.

## 9. Frozen Build Order (no code yet)

1. **Breadth** — stub every Family/Form (name, 1-line, 1 work, macro + facets).
2. **Families** — descriptions, region/genre/lineage tags, all 5 views live.
3. **Canonical Works** — curated, object format.
4. **Deep analysis** — production tradition / DAW / decisions on selected exemplars, ≥1 per
   civilization incl. non-electronic.
5. **Localization** — `LOCALIZATION_REBUILD_PLAN.md` (uk-first; the cheap mixed-language bugs may
   be fixed anytime, ungated).

Each phase has an exit gate (see `ATLAS_ONTOLOGY_V3.md §7`). Breadth precedes depth — the inverse
of all prior work.

---

**Atlas V3 is frozen.** The next action is **Phase 1 (breadth)**, on this structure, when the user
authorises implementation. Until then: no code, no content, no deployment.
