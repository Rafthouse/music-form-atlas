# Music Form Atlas

**Version:** v2.0a
**Status:** Architecture frozen — active content expansion (deep-deploy families)
**Live:** https://rafthouse.github.io/music-form-atlas/

---

## What is this?

Music Form Atlas is not a musicology classification, not a philosophical ontology, and not a
template library.

It is a **tool for compositional decision-making** — a system that helps a composer make
conscious, informed choices about musical form.

Every concept in Atlas answers one question: *"I have a loop. What do I do next?"*

The primary audience is **composers, producers, and teachers** (students benefit when guided by
a teacher). All content is in Ukrainian; English is currently UI labels only.

> Full context lives in `ARCHITECTS_BRIEF_FOR_CLAUDE.md` (the most complete handover document)
> and `CONTEXT_TRANSFER_TO_CLAUDE.md`.

---

## The Two Root Problems (frozen)

Every form decision traces to one of two fundamental problems:

1. **Balance of Predictability and Novelty** → Repetition, Variation, Contrast
2. **Organization of Musical Time** → Segmentation, Directionality, Transition

From these derive the four **Core Concepts**: Segmentation, Repetition, Contrast, Directionality.

---

## Ontology

```
Two Root Problems
  └── Core Concepts (4)
        └── Form Archetypes (10) — compositional strategies
              └── Implementation Families — genre-specific instances
                    └── Canonical Works + Production Tradition + DAW Translation
                          └── Composition Decisions + Design Constraints
```

Everything above *Implementation Families* is frozen. Everything below is where expansion happens.

---

## Form Archetypes (10)

Verse-Chorus · Club Arc · Rondo · 12-Bar Blues · Process-Based Minimal · Theme & Variations ·
Through-Composed · Head-Solo-Head · Sonata-Allegro · Drone.

Each archetype carries ~12 content depth layers (section knowledge, failure analysis, variants,
canonical tracks with structural analysis, self-diagnosis, genre transfer, DAW exercise,
listening exercise, comparisons, glossary, teacher notes, deviations).

**23 implementation families total.** Club Arc is the flagship: 13 families, 6 of them
deep-deployed (Chicago House, Detroit Techno, Dub Techno, Uplifting Trance, Deep Dubstep,
Neurofunk) with full production tradition, DAW translation (Ableton / FL Studio / Logic Pro),
composition decisions, and design constraints.

---

## Two Applications

| App | URL | Purpose |
|---|---|---|
| **Core Atlas** | `/` | Concept-first learning — archetypes, families, decision framework |
| **Classic Atlas** | `/classic/` | Form library — 33+ forms with energy curves and tension layers |

They are independent (each has its own `index.html`, `app.js`, `styles.css`). No build step, no
framework, no backend — plain static HTML/JS.

### Run

Open `index.html` in a browser (or serve the folder with any static server).

---

## Deployment

GitHub Pages from `main` branch root. Auto-deploy on push (`.github/workflows/pages.yml`).
No build step. This simplicity is a feature.

---

## License

Educational use. Attribution appreciated.
