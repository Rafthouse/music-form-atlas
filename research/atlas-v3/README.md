# Atlas V3 — Architecture Research Package

**Project:** Music Form Atlas
**Status:** Architecture frozen (2026-06-07). Research only — **no application code, content, or
deployment is produced by this package.**
**Scope:** This folder defines *what Atlas is* before the next thousand objects are added. It
replaces the flat "10 archetypes" middle layer of the root `ARCHITECTURE_FREEZE.md` with a
4-level, dual-axis ontology.

---

## 1. The Canonical Document

> ### 👉 [`ATLAS_V3_FROZEN.md`](ATLAS_V3_FROZEN.md) is the single source of truth.
> If any other document here disagrees with it, `ATLAS_V3_FROZEN.md` wins. The others are the
> *reasoning* that produced it.

---

## 2. What Documents Exist (and reading order)

The package was produced as a chain; read top-to-bottom to follow the argument, or jump straight to
the canonical doc.

| # | Document | Role | Read if you want… |
|---|---|---|---|
| 1 | [`ATLAS_TERRITORY_MAP.md`](ATLAS_TERRITORY_MAP.md) | The full map of musical form (12 civilizations × forms × classification) | the breadth picture & scale of the gap |
| 2 | [`ATLAS_EXPANSION_MASTERPLAN.md`](ATLAS_EXPANSION_MASTERPLAN.md) | Audit (A–E): missing territories, ontology challenge, historical map, phased plan | the argument for *why* expand |
| 3 | [`ATLAS_ONTOLOGY_V3.md`](ATLAS_ONTOLOGY_V3.md) | The proposed replacement ontology (hierarchy, macros, families, migration, navigation, roadmap) | the full design (draft) |
| 4 | [`ONTOLOGY_STRESS_TEST.md`](ONTOLOGY_STRESS_TEST.md) | Adversarial red-team of doc 3 by composer-decision logic | *why* the final shape is defensible |
| 5 | [`12_BAR_BLUES_DEFENSE.md`](12_BAR_BLUES_DEFENSE.md) | Focused defense: 12-Bar Blues = Form (not Family/Macro) | the resolution of the last open call |
| 6 | [`ATLAS_V3_FROZEN.md`](ATLAS_V3_FROZEN.md) | **CANONICAL** — the frozen architecture of record | the decision, not the debate |
| 7 | [`LOCALIZATION_REBUILD_PLAN.md`](LOCALIZATION_REBUILD_PLAN.md) | Localization audit + rebuild plan (uk + en) | the language strategy |
| — | [`IMPLEMENTATION_BACKLOG.md`](IMPLEMENTATION_BACKLOG.md) | Actionable phases with entity counts, affected files, repo-growth estimates | *how* to build it later |

> Note: doc 3 (Ontology V3) is the **draft** — it proposed 12 macro-archetypes including
> "Energy-Arc" and "Improvisation-Frame." Doc 4 (Stress Test) overturned those two. The **final**
> state is in doc 6. Where 3 and 6 differ, 6 is correct.

---

## 3. What Is FROZEN

(Authoritative list in `ATLAS_V3_FROZEN.md`; summarized here.)

- **Foundation:** Two Root Problems; four Core Concepts (now facets); no Form Dimensions/templates.
- **Hierarchy (4 levels, one storage tree):** `Macro-Archetype → Family → Form → Canonical Work`.
- **Spine: 10 macro-archetypes** — I Strophic · II Refrain-Return · III Variation · IV Developmental ·
  V Imitative/Fugue · VI Cyclic · VII Process · VIII Stasis/Drone · IX Through-Composed · XII Moment/Mosaic.
- **Three rulings (user-approved):**
  1. Energy-Arc (former XI) → **facet** (`energyArc`); Club Arc → **Family under VI**.
  2. Improvisation (former X) → **facet** (`improvised`); raga/maqam rescued as **Forms**.
  3. Ground-Bass/Passacaglia/Chaconne → **dual-tag** (VI primary, III secondary).
- **12-Bar Blues → Form** under Family *Blues* (flagship teaching form of VI).
- **Navigation:** one tree + five facet views (By Structure / History / Region / Genre / Production
  Tradition) + curated lineage "roads" + search.
- **Migration:** non-destructive re-parenting of all current entities (table in canonical doc).
- **Build order:** breadth → families → works → deep analysis → localization.

---

## 4. What Is STILL Under Discussion (deliberately not frozen)

| Open item | State | Trigger to resolve |
|---|---|---|
| **Family / Form / Work lists** | Open forever — a map is never "complete." | Ongoing, during build phases. |
| **Macro II (Refrain-Return)** | "Watch" — could fold into a Family of I if a leaner spine is wanted. | Only with teaching evidence. |
| **Macro IV (Developmental)** | "Watch" — tonal-leaning, narrow. Stays for now. | Only with evidence. |
| **Multi-Movement Cycle** (suite/symphony/album/DJ-set) | Deferred — modeled as a Work/Form cross-link, **not** a tier. | Revisit after the 10 are populated. |
| **Localization: missing-EN policy** | Open — show uk with `[UK]` badge (recommended) **vs** hide untranslated entries. | Before Phase 5. |
| **Classic Atlas localization** | Open — localize it **vs** scope it out as uk-only (recommended). | Before Phase 5. |
| **Data file layout** | Proposed (`data/<civilization|macro>.js`); not finalized. | Start of Phase 1 implementation. |

---

## 5. Hard Boundaries (carried from prior decisions)

- No code, content, or deployment is authorized by this package. Implementation is a **separate,
  explicitly-authorized** action.
- Never reintroduce Form Dimensions/sliders/recipes (V3 is discrete named forms; facets are a
  secondary *filter*, not the ontology).
- Author content **Ukrainian-first**; English is a translation pass (see localization plan).
- Breadth precedes depth — the inverse of all pre-V3 work.

---

## 6. Provenance

Produced 2026-06-07 in a research-only session. Chain:
territory map → masterplan → ontology draft → stress test → user rulings (energy-arc & improvisation
→ facets; ground-bass → dual-tag) → 12-bar-blues defense → **freeze**.
The prior root-level handover docs (`ARCHITECTS_BRIEF_FOR_CLAUDE.md`,
`CONTEXT_TRANSFER_TO_CLAUDE.md`) remain valid for project history and the *current* (pre-V3) app
state; this package supersedes their middle-layer ontology only.
