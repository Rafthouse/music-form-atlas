# Changelog

## [v1.1-beta] — 2026-06-06 — Architecture Freeze

### Summary

Migration from Atlas v1.0 (MVP — form archetypes as primary organization) to Atlas v1.1-beta (core concepts + two-layer architecture).

This is a **paradigm shift**: the Atlas no longer organizes knowledge by *what form looks like*, but by *what decision the composer needs to make*.

---

### What Changed

**1. Architecture: Form archetypes → Core concepts**

*Before (v1.0):*
Atlas was organized by form types: "Club track arc," "Verse-chorus song form," "Rondo," "Process-based minimal form." Each form was documented with sections, energy curves, and examples.

*After (v1.1):*
Atlas is organized by four core concepts: Segmentation, Repetition, Contrast, Directionality. Form archetypes are now *derived* — they are combinations of core concepts applied to specific genres.

**2. Two Root Problems introduced**

| Before | After |
|---|---|
| No explicit Root Problems | Balance of Predictability/Novelty + Organization of Musical Time |
| Concepts existed without derivation logic | Every concept traces to a Root Problem |

**3. Two-layer architecture introduced**

- **Atlas Core** (4 concepts): Minimum set for building a working form
- **Atlas Extended** (7 concepts): Refinements for meso- and micro-level work

**4. Validation framework**

- No validation existed in v1.0
- v1.1 validated against 20 tracks across 8 genres
- Elimination Test applied to every concept
- 4 pedagogical metrics applied to every concept

**5. Composer decision replaced description**

Every concept now answers: *"What problem does this solve, what decision does it enable, what mistake does it prevent?"*

---

### What Was Removed

- **"Process-based minimal form"** as a first-class form type. Reality Validation showed Atlas Core does not cover process-based forms (they operate in a different compositional paradigm).
- **Form archetypes as primary organization.** They are now derived concepts in Atlas Extended.
- **"Energy curve" as a pedagogical concept.** Energy is a byproduct of Contrast + Directionality, not a Core concept.

---

### What Was Preserved

- **4 form archetypes in the interactive prototype** (app.js) — kept as reference implementations, conceptually aligned but not architecturally central
- **Interactive timeline** — remains the primary UI for exploring form
- **Section function explanations** — aligned with Segmentation and Repetition concepts
- **Simple/Professional teacher modes** — retained

---

### What Was Created

| Document | Purpose |
|---|---|
| `README.md` | Updated — now describes Atlas Core v1.1 |
| `ARCHITECTURE.md` | New — documents the two-layer, two-Root-Problem architecture |
| `ATLAS_CORE.md` | New — documents all 4 core concepts with decisions, exercises, assessment |
| `CHANGELOG.md` | New — this file |

---

### Pedagogical Implications

| Aspect | Before (v1.0 MVP) | After (v1.1-beta) |
|---|---|---|
| Student learns | What forms exist | How to make form decisions |
| Organization | By genre / form type | By compositional problem |
| Assessment | Section identification | Decision-making ability |
| Minimum viable knowledge | Unclear | 4 concepts, explicitly defined |

---

### Validation Summary

- 20 tracks analyzed across Pop, Rock, Hip-Hop, Techno, Ambient, Classical, Jazz, Film Music
- 10/20 fully covered (90-100%)
- 6/20 mostly covered (60-89%)
- 4/20 process-based forms — outside scope (not critical for beginners)
- **0 critical blind spots identified**
- **Architecture confirmed as sufficient for pedagogy**

---

### Known Issues (Not Bugs)

1. **app.js data model** still organized by form archetypes. Needs refactoring to support core-concept-first browsing. Planned for v1.2.
2. **music-ontology-design skill** references old Triple Separation methodology. Updated separately.
3. **Process-based forms** (Spastik, Music for Airports, drone) not covered. Belongs to Atlas Extended or a separate "advanced forms" module.
4. **Non-linear directionality** (jazz cycles, collage forms) not addressed in Core. Identified as advanced topic.

---

## [v1.0] — 2026-06-06 — Initial MVP

### Initial release

Static HTML prototype for an interactive music-form learning atlas.

- Form library with 4 form types: Club/electronic, Pop/song, Classical, Contemporary
- Interactive timeline with clickable sections
- Section explanations in simple/professional modes
- Filters by genre, form, tempo, difficulty
- Example cards with section timecodes
- Sources block with verification status
- Compare mode for nearby forms
- GitHub Pages deployment workflow