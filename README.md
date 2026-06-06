# Music Form Atlas

**Version:** v1.1-beta  
**Status:** Architecture frozen — Curriculum in development  
**Pedagogical validation:** 20 tracks across 8 genres (90%+ coverage for architectural forms)

---

## What is this?

Music Form Atlas — not a musicology classification, not a philosophical ontology.

A **decision tool** for composers.

Every concept in Atlas answers one question: *"What do I do next?"*

---

## Atlas Core (v1.1)

The minimum set of knowledge that makes a composer stronger:

| Concept | Function |
|---|---|
| **Segmentation** | Where does one idea end and another begin? |
| **Repetition** | When to return to material that already sounded? |
| **Contrast** | When is material changed enough for the listener to feel it? |
| **Directionality** | Where am I in the form, and what does that mean for the next step? |

These four concepts are sufficient for a beginner to build a clear, direction-driven, and engaging form.

---

## Atlas Extended

Additional tools for meso- and micro-level work:

Transition, Form Archetypes, Tension, Release, Climax, Variation, Density Control

---

## ⚠️ Architecture Notice

This repository contains **two layers**:

1. **Pedagogical architecture** (documented in `ARCHITECTURE.md`, `ATLAS_CORE.md`) — describes Atlas Core v1.1: Segmentation, Repetition, Contrast, Directionality as the minimum set of concepts for teaching form.

2. **Interactive prototype** (`index.html` + `app.js`) — implements the **previous** form-archetype model (Club arc, Verse-chorus, Rondo, Process-based minimal). The prototype has not yet been refactored to Core-concept-first browsing. This is planned for v1.2.

The documentation is architecturally authoritative. The UI is transitional.

---

## Interactive Atlas (this repo)

A static HTML/JS prototype that visualizes form archetypes through an interactive timeline.

Built for teachers and students to explore form architecture by ear.

### Run

Open `index.html` in a browser.

### Features

- Form library with club/electronic, pop/song, classical, and contemporary examples
- Horizontal timeline with clickable sections
- Section explanations in simple/professional teacher modes
- Filters by genre, form, tempo, and difficulty
- Compare mode for nearby forms

---

## Validation

Atlas Core v1.1 was validated against 20 tracks across 8 genres:

- Pop (3/3 fully covered)
- Rock (3/3 — 2 fully, 1 mostly)
- Hip-Hop (3/3 fully covered)
- Techno (1/3 fully, 2 process-based — outside scope)
- Ambient (0/3 — generative/drone forms outside scope)
- Classical (2/2 fully covered)
- Jazz (2/2 mostly covered)
- Film Music (1/1 fully covered)

**Critical blind spots: 0**  
Process-based forms (minimal techno, generative ambient, drone) operate in a different compositional paradigm — they belong to an advanced layer, not the Core.

---

## License

Educational use. Attribution appreciated.