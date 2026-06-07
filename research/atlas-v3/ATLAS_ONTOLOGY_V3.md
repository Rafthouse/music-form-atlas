# ATLAS_ONTOLOGY_V3.md

**Project:** Music Form Atlas
**Document type:** Replacement ontology (architecture only)
**Status:** PROPOSAL. No code, no content, no deployment. This document decides *what Atlas is*
before another thousand objects are added.
**Supersedes (for the middle layer):** the flat "10 archetypes" model in `ARCHITECTURE_FREEZE.md`.
**Preserves (unchanged):** the Two Root Problems and the 4 Core Concepts.
**Companions:** `ATLAS_TERRITORY_MAP.md`, `ATLAS_EXPANSION_MASTERPLAN.md`, `LOCALIZATION_REBUILD_PLAN.md`
**Date:** 2026-06-07

---

## 0. What Stays Frozen, What Changes

| Layer | Decision |
|---|---|
| **Two Root Problems** (Predictability/Novelty; Organisation of Time) | **FROZEN.** Vindicated — every macro-archetype maps onto them (§2). |
| **4 Core Concepts** (Segmentation, Repetition, Contrast, Directionality) | **FROZEN.** They become *facet tags* on every form, not a navigation tier. |
| **Flat 10 archetypes** | **REPLACED** by a 4-level hierarchy with consistent altitude. |
| **No Form Dimensions / sliders / templates** | **STILL FORBIDDEN.** V3 is discrete, concrete, nameable forms — not continuous space. |

V3 is an **extension** of the frozen foundation, not a return to the rejected Form-Dimensions
idea. Nothing here introduces sliders or recipes.

---

## 1. The Complete Hierarchy

```
MACRO-ARCHETYPE   — a universal principle for organising musical time/material   (~12)
   ↓ contains
FAMILY            — a cultural tradition that implements it (genre + era + region) (~60–90)
   ↓ contains
FORM              — a specific, named structural blueprint                         (~250–400)
   ↓ contains
CANONICAL WORK    — a real piece/track that demonstrates the form               (~1,500–4,000)
```

This is the **storage tree**: every entity has **exactly one home** (one parent). Multiple ways
of *browsing* (by history, region, genre, production tradition) are **facet indexes** over this
same tree — they do not duplicate nodes (see §6). One home, many roads.

### 1.1 Definitions and the level test

| Level | Means | One-line test | Governed by | Example |
|---|---|---|---|---|
| **Macro-Archetype** | A genre- and era-transcendent *strategy* of form. The deepest "how is time organised?" answer. | "Could composers in three unrelated eras/genres use this same organising idea?" | maps to a Root Problem | **Cyclic / Groove / Ostinato** |
| **Family** | A *cultural cluster* — a tradition a community recognises as "a kind of music." Defined by **genre + period + region/scene**. | "Is this a recognisable musical tradition with its own community?" | one parent Macro-Archetype | **House** |
| **Form** | A specific, reusable *structural blueprint* within a family. | "Is this a named template a composer could choose to build?" | one parent Family (+ structural-facet tags) | **Chicago House**, **12-bar blues**, **Passacaglia** |
| **Canonical Work** | A real, attributed piece demonstrating a form. | "Is this an actual recording/score by named people?" | one parent Form | *"Move Your Body" — Marshall Jefferson (1986)* |

### 1.2 Why this resolves the altitude problem
The flat model put **Sonata-Allegro** (a universal principle), **Club Arc** (an EDM dramaturgy),
and **12-Bar Blues** (one chord loop) at the same tier. In V3 they land at **three different,
correct levels**: Sonata-Allegro is a *Form* under a Developmental macro; Club Arc becomes the
*Macro-Archetype* "Energy-Arc"; 12-bar blues is a *Form* inside Family "Blues." Consistent zoom.

### 1.3 The one allowed cross-link (not a second parent)
A Form lives in **one** Family (its cultural home) but is **tagged** with:
- its **structural facets** (a primary Macro-Archetype via its Family, plus optional secondary
  macro-archetypes — e.g. House is *Cyclic* primary, *Energy-Arc* secondary),
- its **4 Core-Concept emphasis** (seg/rep/con/dir scores),
- its **era, region, genre, production-tradition** facets.

Tags power navigation (§6). They are **not** extra tree parents — the tree stays a clean tree.

---

## 2. Every Macro-Archetype (12)

For each: definition · the composer decision it answers · historical scope · examples. (Roman
numerals are stable IDs.)

### I — Strophic / Sectional Song
- **Definition:** Build form by stating and re-stating a small set of self-contained sections
  (A; AB; AABA; verse–chorus). Repetition of whole blocks is the engine.
- **Composer decision:** "Which blocks repeat, in what order, and when does a new block earn its
  place?"
- **Scope:** Folk ballad → hymn → Tin Pan Alley → pop/rock → most vocal music, all eras, global.
- **Examples:** Strophic ballad, AABA standard, Verse-Chorus, hymn/chorale.
- **Root problem:** Predictability/Novelty.

### II — Refrain-Return (Rondo / Ritornello)
- **Definition:** A "home" idea periodically **returns** between contrasting episodes
  (ABACA…; tutti–solo–tutti).
- **Composer decision:** "How often does home return, and how far do the episodes wander?"
- **Scope:** Medieval rondeau → Baroque ritornello/concerto → Classical rondo → pop "double
  chorus."
- **Examples:** Rondo, Sonata-rondo, Ritornello, Da capo aria.
- **Root problem:** Organisation of Time + Predictability.

### III — Variation
- **Definition:** State one idea, then **transform it repeatedly** — variation on a *melody*
  (theme & variations) or on a *bass/harmonic cycle* (passacaglia, chaconne, ground bass).
- **Composer decision:** "What stays fixed as the anchor, and what is free to change each pass?"
- **Scope:** Renaissance divisions → Baroque ground bass → Classical variation sets → jazz
  (variations over changes) → electronic loop transformation.
- **Examples:** Theme & Variations, Passacaglia, Chaconne, Ground bass, Thematic transformation.
- **Root problem:** Predictability/Novelty.

### IV — Developmental / Dialectical (Sonata)
- **Definition:** Material is **exposed, fragmented, transformed, recombined**, with tonal/tension
  conflict and resolution (exposition–development–recapitulation).
- **Composer decision:** "What is my conflict, how do I develop it, and how is it resolved?"
- **Scope:** Classical/Romantic instrumental music; film and game scoring; progressive rock.
- **Examples:** Sonata-allegro, Sonatina, Concert overture, Sonata-rondo (hybrid).
- **Root problem:** Organisation of Time (directionality).

### V — Imitative / Contrapuntal (Fugue / Canon)
- **Definition:** Form **generated by voices imitating a single subject** (entries, episodes,
  stretto) or by strict canon.
- **Composer decision:** "What is my subject, and how do voices enter, answer, and combine?"
- **Scope:** Renaissance points of imitation → Baroque fugue (Bach) → 20th-c. (Bartók,
  Shostakovich) → fugal jazz (Mingus) → contrapuntal electronics.
- **Examples:** Fugue, Canon/Round, Invention, Ricercar, Fuging tune.
- **Root problem:** Organisation of Time + Contrast (textural).
- **STATUS: entirely missing from current Atlas — the single largest gap.**

### VI — Cyclic / Groove / Ostinato
- **Definition:** A **repeating harmonic or rhythmic cycle is itself the form**; change happens
  *over* the loop, not by leaving it.
- **Composer decision:** "What is my cycle, and how do I sustain interest without abandoning it?"
- **Scope:** Baroque ground bass → blues/rhythm-changes → funk → house/techno → hip-hop →
  gamelan, clave, raga-tala. The deepest classical↔electronic↔world bridge.
- **Examples:** 12-bar blues, Rhythm changes, Modal vamp, Ground bass, House loop, Clave montuno,
  Gamelan gongan.
- **Root problem:** Predictability/Novelty.

### VII — Process / Gradual
- **Definition:** Form **emerges from a gradual, often pre-set process** applied to minimal
  material (phasing, additive, generative).
- **Composer decision:** "What process do I set in motion, and do I let it run or intervene?"
- **Scope:** Minimalism (Reich, Glass, Riley) → generative/algorithmic → ambient process.
- **Examples:** Phase music, Additive process, Generative, Tape-loop process.
- **Root problem:** Organisation of Time (directionality).

### VIII — Stasis / Drone
- **Definition:** Form from **near-stillness** — a sustained field with subtle internal change.
- **Composer decision:** "If almost nothing changes, what tiny changes carry the whole form?"
- **Scope:** Chant & folk drone (bagpipe, tanpura) → La Monte Young → Eno → ambient → dub-adjacent
  → noise (its extreme).
- **Examples:** Classical drone, Ambient, Dark ambient, Isolationist, Harsh-noise wall.
- **Root problem:** Predictability/Novelty (predictability maximised).

### IX — Through-Composed / Narrative
- **Definition:** **Continuous unfolding** with little or no block repetition; the piece is a
  single narrative thread.
- **Composer decision:** "How do I create coherence and momentum *without* returning to material?"
- **Scope:** Madrigal → symphonic poem → Wagnerian music drama → film underscore → IDM →
  post-rock.
- **Examples:** Madrigal, Symphonic/tone poem, Music drama (leitmotif), Film cue, IDM track.
- **Root problem:** Organisation of Time.

### X — Improvisation-Frame
- **Definition:** A **fixed frame hosts improvisation** — a head/changes, a raga, a maqam, a modal
  vamp — alternating or layering composed and improvised material.
- **Composer decision:** "What is fixed (the frame) and what is free (the solo)?"
- **Scope:** Jazz (head-solo-head) → Hindustani/Carnatic raga → Arabic/Turkish maqam → gospel
  drive → modal vamp.
- **Examples:** Bebop head, Modal head, Raga (alap–jor–jhala–gat), Taqsim, Gospel vamp.
- **Root problem:** Predictability/Novelty.

### XI — Energy-Arc / Build–Release
- **Definition:** Form as a **dramaturgy of tension accumulation and discharge** — build, peak,
  release, rebuild.
- **Composer decision:** "Where is the peak, how long is the build, and how do I release?"
- **Scope:** Bolero crescendo → bel canto cabaletta → big-band shout chorus → post-rock → all EDM
  (the build/drop).
- **Examples:** EDM build–drop ("Club Arc"), Post-rock crescendo, Shout chorus, Hardstyle arc.
- **Root problem:** Organisation of Time (directionality).
- **NOTE: this macro absorbs the current "Club Arc" archetype, generalised beyond EDM.**

### XII — Moment / Mosaic / Collage
- **Definition:** **Non-teleological** succession of self-contained "moments"; juxtaposition and
  cut, not development. Order may even be mobile.
- **Composer decision:** "If sections don't lead to each other, how do I make their juxtaposition
  meaningful?"
- **Scope:** Ives → Stockhausen moment form → Cage open form → Berio collage → plunderphonics →
  mashup → DJ set → breakcore.
- **Examples:** Moment form, Open/mobile form, Collage/quotation, Plunderphonics, DJ mix.
- **Root problem:** Organisation of Time (deliberately subverted).
- **STATUS: missing from current Atlas — second-largest gap.**

> **Mapping to Root Problems:** I, III, VI, VIII, X → primarily *Predictability/Novelty*;
> II, IV, VII, IX, XI, XII → primarily *Organisation of Time*. The frozen foundation holds.

---

## 3. Families (the cultural layer)

A representative, **not exhaustive**, family set grouped under each macro-archetype. Each family =
*parent macro · period · region · representative forms*. The mature target is ~60–90 families;
this lists ~70 to prove the model. (This is taxonomy, not content — no descriptions of *how* to
make the music.)

### Under I — Strophic / Sectional Song
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Folk Ballad | ancient–now | global | strophic ballad, modified-strophic |
| Hymn / Chorale | 1500s–now | Europe/America | chorale, gospel hymn, shape-note fuging tune |
| Tin Pan Alley / Standard | 1900–1955 | USA | AABA 32-bar, verse+refrain |
| Pop/Rock Song | 1955–now | global | verse-chorus, VCB, strophic rock, anthem |
| Synth/Electro Song | 1978–now | global | synthwave, hyperpop, future-bass song |

### Under II — Refrain-Return
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Formes Fixes | 1300–1450 | France | rondeau, virelai |
| Baroque Ritornello | 1680–1750 | Italy/Germany | concerto ritornello, da capo aria, concerto grosso |
| Classical Rondo | 1750–1820 | Vienna | rondo, sonata-rondo |

### Under III — Variation
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Renaissance Divisions | 1550–1620 | England/Italy | divisions on a ground |
| Baroque Ground-Bass | 1650–1750 | Europe | passacaglia, chaconne, ground bass |
| Classical Variation Sets | 1750–1900 | Europe | theme & variations, double variations |
| Romantic Thematic Transformation | 1830–1900 | Europe | idée fixe, cyclic transformation |
| Jazz Changes-Variation | 1940–now | USA | contrafact, solo over changes |

### Under IV — Developmental / Dialectical
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Viennese Classical Sonata | 1750–1827 | Vienna | sonata-allegro, sonatina, concerto (double exposition) |
| Romantic Large Form | 1820–1910 | Europe | symphonic sonata, concert overture |
| Screen/Game Developmental | 1930–now | global | leitmotif development, adaptive cue |

### Under V — Imitative / Contrapuntal
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Renaissance Polyphony | 1450–1600 | Europe | imitative motet, mass, ricercar, canzona |
| Baroque Counterpoint | 1680–1750 | Germany | fugue, canon, invention, chorale prelude |
| Modern Counterpoint | 1900–now | global | 20th-c. fugue, fugal jazz, contrapuntal electronics |
| Folk Polyphony | trad. | global | round/catch, fuging tune, Georgian polyphony |

### Under VI — Cyclic / Groove / Ostinato
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Blues | 1900–now | USA South | 12-bar, 8-bar, 16-bar, jazz/bird blues, minor blues |
| Jazz Cyclic | 1930–now | USA | rhythm changes, modal vamp |
| Funk / Soul Groove | 1965–now | USA | one-chord vamp, JB groove |
| Hip-Hop Beat | 1979–now | USA | boom bap, trap, lo-fi, G-funk |
| House | 1983–now | Chicago/Detroit/NY/UK | Chicago, deep, acid, tech, garage, progressive, French touch |
| Techno | 1985–now | Detroit/Berlin | Detroit, dub, minimal, Berlin, hard, industrial |
| Trance | 1992–now | NL/DE | uplifting, progressive, psy/Goa |
| Bass Music | 1998–now | UK | UK garage, 2-step, dubstep (deep/brostep/riddim), grime, footwork |
| Drum & Bass / Jungle | 1992–now | UK | jungle, neurofunk, liquid, jump-up, techstep |
| Gamelan | trad. | Indonesia | gongan/colotomic cycles |
| Afro-Latin Clave | trad.–now | Cuba/W. Africa | son montuno, rumba, Afrobeat groove |

### Under VII — Process / Gradual
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Minimalism | 1960–now | USA | phase music, additive process, pulse minimalism |
| Generative / Algorithmic | 1960–now | global | rule-based, live-coding, generative ambient |
| Tape Process | 1948–1980 | Europe/USA | tape-loop process, musique concrète process |

### Under VIII — Stasis / Drone
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Sacred/Folk Drone | ancient–now | global | chant-over-drone, bagpipe, tanpura raga drone |
| Classical Drone | 1960–now | USA/Europe | La Monte Young sustained, Radigue |
| Ambient | 1978–now | global | ambient, dark ambient, drone-ambient, isolationist |
| Noise | 1980–now | Japan/global | harsh-noise wall, power electronics |

### Under IX — Through-Composed / Narrative
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Madrigal / Word-Painting | 1530–1620 | Italy/England | through-composed madrigal |
| Programmatic Orchestral | 1840–1920 | Europe | symphonic/tone poem, programme symphony |
| Music Drama | 1850–1920 | Germany | leitmotif through-composition |
| Art Song (through-composed) | 1820–now | Europe | through-composed Lied |
| Progressive Rock | 1969–now | UK/global | suite, through-composed epic |
| Film/Game Score | 1930–now | global | underscore, cue-based narrative |
| IDM / Electronica | 1992–now | UK/global | IDM, glitch, ambient-techno narrative |
| Post-Rock | 1991–now | global | dynamic-arc instrumental (overlaps XI) |

### Under X — Improvisation-Frame
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Head-Solo-Head (Jazz) | 1940–now | USA | bebop head, hard-bop head, modal head, contrafact, ballad |
| Big Band | 1930–now | USA | head–shout-chorus chart |
| Free Jazz | 1959–now | USA | open/energy form (overlaps XII) |
| Hindustani Raga | trad. | North India | alap–jor–jhala–gat/bandish |
| Carnatic | trad. | South India | raga + tala (kriti, alapana) |
| Arabic/Turkish Maqam | trad. | MENA | taqsim, suite (waslah) |
| Gospel / Soul Drive | 1930–now | USA | vamp + improvised ascent |

### Under XI — Energy-Arc / Build–Release
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Orchestral Crescendo | 1800–now | Europe | bolero crescendo, single-arc tone poem |
| Bel Canto Scena | 1820–1870 | Italy | cavatina–cabaletta two-tempo arc |
| Big-Band Arc | 1935–now | USA | arrangement build to shout chorus |
| EDM Build–Drop | 1995–now | global | "club arc" (house/techno/trance/dubstep arcs), festival main-stage |
| Post-Rock Crescendo | 1991–now | global | quiet→loud dynamic arc |
| Hardstyle/Hardcore Arc | 2000–now | NL | kick-driven build–drop |

### Under XII — Moment / Mosaic / Collage
| Family | Period | Region | Representative forms |
|---|---|---|---|
| Modernist Moment Form | 1950–now | Europe | Stockhausen moment form |
| Open / Mobile Form | 1955–now | USA/Europe | aleatoric, performer-ordered |
| Collage / Quotation | 1910–now | global | Ives layering, Berio collage |
| Plunderphonics / Mashup | 1985–now | global | sample-collage, mashup |
| DJ Set / Mix | 1970–now | global | continuous mix as macro-form |
| Breakcore / Plunder-electronica | 1995–now | global | cut-up break collage |

> Families intentionally omitted here for brevity but expected at maturity: Estampie/medieval
> dance, Suite/Multi-movement (see §4 note on the meta-archetype), Spectral, Sound-mass,
> Downtempo/Trip-hop, Synth-pop, Flamenco, Griot, Qawwali, Shape-note (placed above). The set is
> **open and extensible** — that is a feature of a map.

---

## 4. Migration Table — Where Every Current Atlas Entity Moves

### 4.1 Current top-level archetypes (10)
| Current entity | Current level | **New level** | New home / identity | Note |
|---|---|---|---|---|
| Verse-Chorus | Archetype | **Form** | Family *Pop/Rock Song* · macro **I** | one of several song forms |
| Club Arc | Archetype | **Macro-Archetype** | becomes **XI Energy-Arc / Build–Release** (generalised beyond EDM) | its EDM content re-homes as forms under House/Techno/Trance/etc. |
| Rondo | Archetype | **Form** | Family *Classical Rondo* · macro **II** | |
| 12-Bar Blues | Archetype | **Family** *Blues* (macro **VI**) | 12-bar becomes the flagship **Form** inside it; siblings: 8-bar, 16-bar, jazz blues, minor blues | matches the user's instinct; the *coarse* node is a Family, the *exact* template is a Form |
| Process-Based Minimal | Archetype | **Macro-Archetype** | becomes **VII Process / Gradual** | current sub-families (minimalism, generative) re-home under it |
| Theme & Variations | Archetype | **Form** | Family *Classical Variation Sets* · macro **III** | macro III also gains passacaglia/chaconne/ground-bass |
| Through-Composed | Archetype | **Macro-Archetype** | becomes **IX Through-Composed / Narrative** | current sub-families (prog-rock, IDM, film) re-home under it |
| Head-Solo-Head | Archetype | **Family** *Head-Solo-Head (Jazz)* (macro **X**) | forms: bebop/hard-bop/modal head, contrafact | matches the user's instinct |
| Sonata-Allegro | Archetype | **Form** | Family *Viennese Classical Sonata* · macro **IV** | |
| Drone | Archetype | **Macro-Archetype** | becomes **VIII Stasis / Drone** | current sub-families (ambient, dark-ambient, etc.) re-home under it |

> Net: of the flat 10, **4 are promoted to Macro-Archetype** (Club Arc, Process-Minimal,
> Through-Composed, Drone), **4 demoted to Form** (Verse-Chorus, Rondo, Theme & Variations,
> Sonata-Allegro), **2 reclassified to Family** (12-Bar Blues→Blues, Head-Solo-Head). None are
> deleted; all existing content is re-parented.

### 4.2 Current Club Arc families (13) → Forms
| Current family | **New level** | New home Family · macro |
|---|---|---|
| Chicago House (`classic-house`) | Form | *House* · VI (Energy-Arc XI as secondary) |
| Deep House | Form | *House* · VI |
| Tech House | Form | *House* · VI |
| Progressive House | Form | *House* · VI/XI |
| Detroit Techno | Form | *Techno* · VI |
| Dub Techno | Form | *Techno* · VI/VIII |
| Minimal Techno | Form | *Techno* · VI/VII |
| Uplifting Trance | Form | *Trance* · XI/VI |
| Psytrance | Form | *Trance* · VI/XI |
| Deep Dubstep | Form | *Bass Music* · VI |
| Brostep | Form | *Bass Music* · XI/VI |
| Neurofunk | Form | *Drum & Bass* · VI |
| Liquid DnB | Form | *Drum & Bass* · VI |

### 4.3 Current Process-Minimal / Through-Composed / Drone families → re-homed
| Current family | **New level** | New home Family · macro |
|---|---|---|
| minimalism | Family | *Minimalism* · VII |
| loop-production | (technique) | a **Production Tradition** tag, not a form |
| generative | Family | *Generative / Algorithmic* · VII |
| progressive-rock | Family | *Progressive Rock* · IX |
| idm | Family | *IDM / Electronica* · IX (XII secondary) |
| film-scoring | Family | *Film/Game Score* · IX |
| ambient | Family | *Ambient* · VIII |
| dark-ambient | Form | *Ambient* · VIII |
| drone-ambient | Form | *Ambient* · VIII |
| isolationist | Form | *Ambient* · VIII |

### 4.4 The 4 Core Concepts
| Current | New role |
|---|---|
| Segmentation, Repetition, Contrast, Directionality | **Facet tags** (emphasis scores) on every Form, plus a "By Core Concept" filter. No longer a separate browsing tier; they are the *analytical lens*, present everywhere. |

---

## 5. Territory Estimate At Maturity

Realistic ranges for a "mature" Atlas (a navigable map, not an infinite encyclopedia):

| Level | Conservative | Target | Stretch | Notes |
|---|---|---|---|---|
| **Macro-Archetypes** | 10 | **12** | 14 | Stable spine; a 13th (Multi-Movement Cycle) is deferred — model as cross-link, not a tier (see note) |
| **Families** | 50 | **60–90** | 120 | Cultural traditions; grows as world/era coverage fills |
| **Forms** | 200 | **250–400** | 500 | Specific blueprints; the "things you can build" |
| **Canonical Works** | 1,200 | **1,500–4,000** | 6,000+ | At ~5–15 works/form; *Phase 1 needs only 1/form* |

**Reading:** Atlas today has ~6 valid macros (mis-cast), 23 families, ~10 forms with depth, a few
hundred works. The map asks for roughly **×3 families, ×25 forms, ×5–10 works**. The leap is
real but bounded — this is a finite, knowable territory, not endless.

> **Deferred meta-archetype:** Suite / Symphony / Song-cycle / Concept-album / DJ-set are a "form
> of forms" (a different altitude *again*). Recommendation: **do not** make a 13th tier now; model
> them as a **collection cross-link** between Works/Forms. Revisit once the 12 are populated.

---

## 6. Navigation — Exploration, Not A Course

**Core principle:** the 4-level tree is **storage**; the user **never** has to walk it linearly.
Five facet **views** (indexes) open onto the same forms, and every Form page is a hub with exits
in all directions. Museum, not syllabus.

### 6.1 The five views (entry points)
| View | What the user sees | Underlying data |
|---|---|---|
| **By Structure** | The 12 macro-archetypes → families → forms tree, with **live counts** at every node ("Cyclic · 11 families · 47 forms"). The home of the taxonomy. | the storage tree |
| **By History** | A **timeline** (Medieval → today); scrubbing reveals forms active in each era. | `era` facet |
| **By Region** | A **world map**; clicking a region surfaces its families/forms (Detroit, Vienna, North India, Bristol…). | `region` facet |
| **By Genre** | A **genre folksonomy** (the words people actually use: "techno", "baroque", "raga") → the families/forms tagged with them. | `genre` facet |
| **By Production Tradition** | Clusters by *how it's made* (spring-reverb dub craft, continuo realisation, tape splicing, sound-system culture). | `productionTradition` facet |

### 6.2 How the user moves
1. **Enter anywhere.** Land via timeline, map, genre word, structure tree, or search.
2. **Arrive at a Form page** = the atom. It shows the form's **coordinates on every axis**
   (macro-archetype, family, era, region, genres, production tradition) as clickable chips.
3. **Travel along any axis** from that page:
   - *structural neighbours* (other forms of the same macro-archetype),
   - *cultural neighbours* (other forms in the same family),
   - *temporal neighbours* (what came just before/after in time),
   - *geographic neighbours* (same scene/region),
   - **lineage "roads"** — the curated cross-era spines (e.g. *ground bass → blues cycle → house
     loop*), which are the threads that make it feel like one connected world (see
     `EXPANSION_MASTERPLAN §D`).
4. **Zoom out** anytime to the macro view and *see the scale* (the "overwhelming territory" the
   project wants).
5. **Search** spans names, eras, regions, genres, works — one box, all axes.

### 6.3 The "you-are-here" + density rules
- Every page shows a breadcrumb in the structural tree **and** a position on the timeline/map.
- Default to **density** (show neighbours and the territory) over progressive disclosure; deep
  content (production tradition, DAW, analysis) is the opt-in layer *inside* a Form page.

> Navigation requires the data model to carry, per Form: `macroArchetypeId`, `familyId`,
> `era`, `region[]`, `genre[]`, `productionTraditionId?`, `coreConceptScores`, `lineageIds[]`.
> (Architecture note only — no schema is being written here.)

---

## 7. Phased Roadmap (after this ontology is accepted)

No code, no content, no deployment now. This is the agreed *order* for a later build.
Each phase has an **exit gate** so breadth cannot silently regress into premature depth.

### Phase 1 — BREADTH ONLY
- **Do:** create the 12 macro-archetypes and **stub every family and form** in the territory:
  `{name, oneLineDefinition, macroArchetypeId, familyId, era, region, genre, ONE canonical work}`.
- **Don't:** no production traditions, no DAW, no analysis, no multi-work lists.
- **Exit gate:** the structure view shows the full taxonomy with non-zero counts in **all 12
  macros and all 12 civilizations**; opening Atlas *feels* like a map.

### Phase 2 — FAMILIES
- **Do:** write family-level descriptions (what unites the tradition, period, region, why it
  matters) and finalise each family's form list. Add region/genre/lineage tags for navigation.
- **Exit gate:** every family has a real description and ≥3 forms; all five navigation views
  function over real tags.

### Phase 3 — CANONICAL WORKS
- **Do:** populate forms with curated works in the object format (artist, year, region, timeline,
  analysis scores). Target ~5–10 works for flagship forms, ≥1 elsewhere.
- **Exit gate:** every form has ≥1 attributed work; flagship forms have a real canon.

### Phase 4 — DEEP ANALYSIS
- **Do:** apply the *existing* deep-deploy format (production tradition, DAW translation,
  composition decisions, design constraints) to **selected** forms — at least one exemplar per
  civilization, **including non-electronic** (per brief). This is where today's Club Arc depth
  becomes one example among many.
- **Exit gate:** ≥12 deep exemplars spread across civilizations, not concentrated in electronic.

### Phase 5 — FULL LOCALIZATION
- **Do:** execute `LOCALIZATION_REBUILD_PLAN.md` — `{uk,en}` content fields + `tx()`, uk-first
  authoring, UI-label parity, Classic Atlas decision, `<html lang>` binding.
- **Exit gate:** no mixed-language screen exists in either language; uk/en key parity enforced by
  a guard.

> **Cheap exception:** the *embarrassing* localisation bugs (hardcoded `Listening Pathway`,
> `vsLabel` parity) from `LOCALIZATION_REBUILD_PLAN §2` may be fixed at any time — they are not
> gated behind Phase 5.

---

## 8. The Decision This Document Asks For

Before Phase 1 begins, the user confirms (Yes / No / Modified):

1. **Hierarchy:** Macro-Archetype → Family → Form → Canonical Work, as a single storage tree.
2. **Spine:** the **12 macro-archetypes** of §2.
3. **Migration:** the re-parenting in §4 (non-destructive; nothing deleted).
4. **Navigation:** one tree + five facet views + lineage roads (§6).
5. **Order:** breadth → families → works → depth → localization (§7).

Once these five are agreed, Atlas has a definition: **a dual-axis, hierarchical, navigable map of
compositional structures across all of music history** — and only then should the next thousand
objects be added.
