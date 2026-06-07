# Left Navigation Panel — Concrete UI Proposal

**Goal:** make the left column *show the whole territory*, not 10 flat items.
**Frozen ontology used:** Macro-Archetype → Family → Form → Work + facets.
**No philosophy. This is the actual tree.**

---

## 0. The core change in one line

> **Today:** left panel = a flat list of 10 "Form Archetypes".
> **Proposed:** left panel = a **3-level collapsible tree** grouped by **Civilization → Family →
> Form**, with live counts, a view switcher, and search. ~12 groups · ~68 families · ~300 forms.

Macro-archetype is shown as a small **badge** on each form (e.g. `·VI`), not as the top grouping —
because users browse by *genre/era* (your examples: CLASSICAL, JAZZ, ELECTRONIC), and reach
structure through the badge/filter.

---

## 1. Panel header (always visible)

```
┌──────────────────────────────────────────┐
│  MUSIC FORM ATLAS                          │
│  View: ⊟ Genre ▾   🔍 Search forms…        │
│         (Genre · Structure · History ·     │
│          Region · Production)              │
└──────────────────────────────────────────┘
```
- **View ▾** switches the *grouping* of the same forms (5 frozen facet views). Default = **Genre**.
- **Search** filters the tree live (matches form/family/region/era; auto-expands hits).

---

## 2. DEFAULT VIEW — "By Genre / Civilization"

Top level = **Civilization** (the words you used). Second = **Family**. Leaf = **Form**.
`(F·N)` = families·forms count. `·ID` = macro-archetype badge. `★` = flagship. `◆` = already in
Atlas today (continuity). `▸` collapsed / `▾` expanded.

```
CORE CONCEPTS                         ← kept, unchanged
  ◆ Segmentation
  ◆ Repetition
  ◆ Contrast
  ◆ Directionality
──────────────────────────────────────
TERRITORY            12 civ · 68 fam · ~300 forms
──────────────────────────────────────
▸ MEDIEVAL                      (6 · 13)
▸ RENAISSANCE                   (6 · 13)
▾ BAROQUE                       (6 · 20)
    ▾ Counterpoint              (5)
        Fugue                   ·V  ★
        Canon                   ·V
        Invention               ·V
        Ricercar                ·V
        Chorale prelude         ·V
    ▾ Ground-Bass Variation     (3)
        Passacaglia             ·VI·III          ← dual-tag shown
        Chaconne                ·VI·III
        Ground bass             ·VI·III
    ▸ Concerto / Ritornello     (3)
    ▸ Baroque Suite / Dance     (6)
    ▸ Aria & Vocal              (3)
    ▸ Keyboard Free Forms       (2)
▸ CLASSICAL                     (5 · 10)
        · Sonata-allegro  ◆ · Rondo ◆ · Theme & Variations ◆ · Minuet · Scherzo …
▸ ROMANTIC                      (5 · 14)
▸ MODERNIST                     (5 · 12)
▸ OPERA / VOCAL                 (4 · 7)
▸ SACRED                        (5 · 12)
▾ JAZZ                          (6 · 14)
    ▾ Blues                     (5)
        12-bar blues            ·VI  ★ ◆
        8-bar blues             ·VI
        16-bar blues            ·VI
        Jazz / Bird blues       ·VI
        Minor blues             ·VI
    ▾ Standards / Changes       (3)
        AABA standard           ·I
        Rhythm changes          ·VI
        Contrafact              ·VI
    ▸ Modal & Vamp              (2)
    ▾ Head-Solo-Head            (3)              ← Family (was archetype) ◆
        Bebop head              ·II  ⟳framed     ← ⟳ = improvised facet
        Hard-bop head           ·II  ⟳framed
        Modal head              ·VI  ⟳framed
    ▸ Big Band                  (1)
    ▸ Free Jazz                 (1)
▸ FOLK / WORLD                  (6 · 19)
▸ POP / ROCK                    (5 · 13)
▾ ELECTRONIC                    (9 · 35)
    ▾ Techno                    (6)
        Detroit Techno          ·VI  ◆ ✦deep
        Dub Techno              ·VI  ◆ ✦deep
        Minimal Techno          ·VI  ◆
        Berlin Techno           ·VI
        Hard Techno             ·VI
        Industrial Techno       ·VI
    ▾ House                     (6)
        Chicago House           ·VI  ◆ ✦deep
        Deep House              ·VI  ◆
        Acid House              ·VI
        Tech House              ·VI  ◆
        Garage House            ·VI
        Progressive House       ·VI  ◆
    ▸ Trance                    (3)   (Uplifting ◆✦deep · Psy ◆ · Progressive)
    ▸ Bass Music                (6)   (Deep Dubstep ◆✦deep · Brostep ◆ · Grime · Footwork · UKG · 2-step)
    ▸ Drum & Bass / Jungle      (4)   (Neurofunk ◆✦deep · Liquid ◆ · Jungle · Jump-up)
    ▸ Ambient / Drone           (4)   (Ambient ◆ · Dark ◆ · Drone ◆ · Isolationist ◆)
    ▸ IDM / Glitch              (2)   (IDM ◆ · Glitch)
    ▸ Beat / Hip-Hop            (3)
    ▸ Experimental Electronic   (3)   (Plunderphonics ·XII · Breakcore ·XII · Musique concrète)
```

This is the whole feel-change: collapsed, the user sees **12 civilizations with counts** (a world
map); expanding any one reveals its families and forms.

---

## 3. ALTERNATIVE VIEW — "By Structure" (macro-archetypes as top tier)

Same forms, regrouped. This is how **Macro-Archetypes appear as the top level**. Badge shows the
civilization/era instead.

```
STRUCTURE            10 principles · 68 fam · ~300 forms
──────────────────────────────────────
▸ I   Strophic / Sectional Song     (6 · 18)
▸ II  Refrain-Return                (4 · 9)
▾ III Variation                     (5 · 12)
    ▾ Classical Variation Sets      (3)
        Theme & Variations   ·Classical ◆
        Double variations    ·Classical
        Chorale variations   ·Baroque
    ▸ Ground-Bass (shared w/ VI)    (3)   Passacaglia · Chaconne · Ground bass
    ▸ Romantic Transformation       (2)
    …
▸ IV  Developmental / Sonata        (3 · 10)
▾ V   Imitative / Fugue   ⚠ EMPTY TODAY (4 · 13)
        Fugue · Canon · Invention · Ricercar · Imitative motet · Fuging tune · …
▸ VI  Cyclic / Groove / Ostinato    (18 · 90)   ← largest
▸ VII Process / Gradual             (3 · 9)
▸ VIII Stasis / Drone               (5 · 12)
▸ IX  Through-Composed / Narrative   (8 · 18)
▸ XII Moment / Mosaic / Collage  ⚠ EMPTY TODAY (5 · 12)
```

The `⚠ EMPTY TODAY` markers are exactly the holes the territory must fill (Fugue, Moment-form).

---

## 4. Anatomy of each level (exact appearance)

### 4.1 Macro-Archetype (Structure view) / Civilization (Genre view) — a GROUP header
```
▾ ELECTRONIC                    (9 · 35)
└ caret  · uppercase label · right-aligned (families · forms) count
```
- Bold/uppercase, slightly larger. Click = expand/collapse. Count always shown.

### 4.2 Family — a SUB-GROUP row
```
    ▾ Techno                    (6)
    └ indent 1 · caret · Title-case label · (forms) count
```
- Click = expand/collapse its forms. Optional dimmed region/era on hover.

### 4.3 Form — the LEAF (clickable; opens the detail page)
```
        Dub Techno              ·VI  ◆ ✦deep
        └ indent 2 · form name · badges:
             ·VI        macro-archetype id (·VI·III if dual-tagged)
             ◆          already in Atlas
             ✦deep      has deep-deploy content (production tradition/DAW)
             ★          flagship teaching form
             ⟳framed    improvised facet (none→hidden / framed / free)
```
- Click = load the Form detail in the main panel (existing render path).
- **Facet mini-icons** appear only when meaningful, e.g. energy-arc as a tiny ▁▃▆█ sparkline, high
  Repetition as `R↑`. Kept subtle so the leaf stays one line.

### 4.4 Selected / current
```
        ▌ Dub Techno            ·VI  ◆ ✦deep   ← left accent bar = selected
```

---

## 5. Behaviors

| Action | Result |
|---|---|
| Click civ/macro header | expand/collapse its families |
| Click family | expand/collapse its forms |
| Click form | open Form detail (main panel) |
| Type in search | live-filter tree; matching forms shown, ancestors auto-expanded, counts update |
| Switch View ▾ | re-group the SAME forms (Genre / Structure / History / Region / Production) |
| Hover form badge `·VI` | tooltip "Cyclic / Groove / Ostinato"; click = jump to Structure view at that macro |
| Empty group | rendered greyed with `⚠ 0` so gaps are visible, not hidden |

State to remember: which groups are expanded, current view, current form, search text. (Same
`state` pattern already in the app — one extra key per concern.)

---

## 6. Data each node needs (minimal, from frozen facets)

| Node | Fields read by the nav |
|---|---|
| Civilization group | derived from each form's `era`/`civilization` facet + counts |
| Macro group | derived from `macroArchetypeId` + counts |
| Family | `{ id, name, civilization, macroArchetypeId }` |
| Form (leaf) | `{ id, name, familyId, macroArchetypeId, secondaryMacroIds[], era, region[], genre[], flags:{deep,flagship}, facets:{improvised,energyArc,coreScores} }` |

No node needs prose to appear in the nav — **a form is visible with just a name + parent + macro
id**. That is why breadth can be cheap: the tree fills as soon as stubs exist, long before any
descriptions are written.

---

## 7. Current → Proposed (what actually changes on screen)

| | Today | Proposed |
|---|---|---|
| Top-level items | 10 flat "archetypes" | 12 civilization groups (or 10 macro groups) |
| Visible depth | 1 level | 3 levels (group → family → form) |
| Forms reachable | ~10 | ~300 |
| Counts shown | none | per group + global header |
| Gaps visible | no | yes (`⚠ EMPTY`) |
| Grouping | fixed | switchable (5 views) |
| Render source | `renderLeftPanel()` flat loop over `formArchetypes` | same function, loop over grouped tree built from `data/` |

The 10 existing archetypes do not disappear — they appear as **forms/families inside the tree**
(marked ◆), so nothing is lost; the tree just makes the other ~290 forms visible too.

---

## 8. To make this real (the two steps, when authorized)

1. **Data:** create the stub records (Phase 1 breadth) so the tree has nodes to show.
2. **Render:** replace the flat `formArchetypes` loop in `renderLeftPanel()` with a grouped-tree
   render (this mockup) + the view switcher + collapse state.

Neither is done in this document. This is the visual spec only.
```
```
