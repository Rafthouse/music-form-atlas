# ONTOLOGY_STRESS_TEST.md

**Project:** Music Form Atlas
**Document type:** Adversarial self-critique of `ATLAS_ONTOLOGY_V3.md` (architecture only)
**Status:** PROPOSAL / red-team. No code, no content, no deployment.
**Mandate:** Make the strongest possible argument *against* my own ontology before it is frozen.
**Date:** 2026-06-07

---

## 0. The Test (and why it is harsh on purpose)

The only criterion is **composer-decision logic**, never historical classification.

> **Promotion test (deserves to be a Macro-Archetype):** the entity forces a *generative
> compositional decision* that is **(1) unique** — unanswerable by any other macro's decision —
> **(2) broad** — recurs across unrelated genres/eras — and **(3) irreducible** — cannot be
> rebuilt from a parent macro plus one parameter choice.
>
> **Demotion test (it's a Family/Form/Facet):** the entity's defining decision is a *specialisation
> or combination* of another macro's decision. Remove it, and a composer can reconstruct it from
> the parent + a setting. It is **derived**, not primitive.

The sharp instrument is **the elimination/derivability test**: *"If I delete this entity, does a
composer lose a decision they cannot get anywhere else?"* If no — demote.

I score each entity on three axes (0–2): **Unique · Broad · Irreducible**. A macro must score
**6/6**. Anything ≤4 is a demotion candidate. 5/6 is "keep but watch."

---

## PART A — Could each Macro-Archetype actually be a Family?

| Macro | Decision it forces | U | B | I | Score | Verdict |
|---|---|---|---|---|---|---|
| I Strophic/Sectional Song | "Which whole blocks repeat, in what order?" | 2 | 2 | 2 | 6 | **KEEP** |
| II Refrain-Return | "How far may episodes stray before home must return?" | 1 | 2 | 1 | 4 | **CHALLENGED** (sub-case of I?) |
| III Variation | "What is the fixed anchor vs what changes each pass?" | 2 | 2 | 2 | 6 | **KEEP** |
| IV Developmental (Sonata) | "What is my conflict; how do I fragment, transform, resolve it?" | 2 | 1 | 1 | 4 | **CHALLENGED** (tonal-era specialisation?) |
| V Imitative/Contrapuntal | "What subject; how do voices enter, answer, combine?" | 2 | 2 | 2 | 6 | **KEEP (strongest new)** |
| VI Cyclic/Groove/Ostinato | "What is my cycle; how do I hold interest without leaving it?" | 2 | 2 | 2 | 6 | **KEEP** |
| VII Process/Gradual | "What process do I start, and do I let it run?" | 2 | 1 | 2 | 5 | **KEEP (watch)** |
| VIII Stasis/Drone | "If almost nothing changes, what micro-change carries form?" | 2 | 2 | 1 | 5 | **KEEP (watch)** |
| IX Through-Composed/Narrative | "How do I cohere *without* repetition?" | 1 | 2 | 1 | 4 | **CHALLENGED** (catch-all / defined by negation) |
| X Improvisation-Frame | "What is fixed vs free?" | 1 | 2 | 0 | 3 | **DEMOTE candidate** (a facet, not a form principle) |
| XI Energy-Arc/Build–Release | "Where is the peak; how long the build; how to release?" | 0 | 2 | 0 | 2 | **DEMOTE** (this is the Core Concept *Directionality*) |
| XII Moment/Mosaic/Collage | "If sections don't lead anywhere, how is juxtaposition meaningful?" | 2 | 2 | 2 | 6 | **KEEP (strong)** |

The four low scorers are dissected below.

### A.1 XI Energy-Arc — the weakest link (attack on my own promotion)
I promoted "Club Arc" to a macro. **I now argue that was wrong.**

- **Not unique:** "build tension → peak → release" is *literally the Core Concept Directionality*
  ("where am I in the form, and what does that mean for the next step?"). Atlas already froze
  Directionality as a concept. Re-introducing it as a macro **double-counts a frozen primitive.**
- **Not irreducible:** every Club Arc track is a **Cyclic (VI) groove** *shaped by* a directionality
  profile. Delete XI and nothing is lost: the form is "a house/techno **Form** under VI, with a
  strong energy-arc *facet*." A post-rock crescendo is a Through-Composed (IX) piece with the same
  facet. Bolero is Variation (III) + the facet.
- **The tell:** XI's "examples" (bolero, cabaletta, shout chorus, EDM drop, post-rock) belong to
  *five different other macros*. An entity whose members are scattered across other macros is not a
  macro — it is a **cross-cutting property** of forms.
- **Verdict:** **Demote XI to a facet** (`energyArc`/`tensionProfile`) carried by every Form, and
  make **Club Arc a Family under VI Cyclic** (its EDM substrate) with a maximal energy-arc facet.
  *This is a concrete change to V3 before freeze.*

> Counter-argument (steelman, for honesty): in festival EDM the loop is trivial and the *arc is the
> entire compositional act* — arguably the arc, not the groove, is the form-bearer. If the user's
> teaching treats "the drop architecture" as the thing students must learn, a case exists to keep
> XI as a *narrow* macro covering only musics where the arc is the sole organiser. But that set is
> small, and Directionality already teaches the decision. **I still recommend demotion.**

### A.2 X Improvisation-Frame — probably a facet, not a macro
- **Not irreducible:** the "frame" is *always already* another macro. A jazz head is Refrain-Return
  (II) or Strophic-AABA (I); blues blowing is Cyclic (VI); a modal vamp is VI; a raga's *gat* is VI
  over a drone (VIII). The frame contributes **no new form decision** — it borrows one.
- **The real variable** X isolates is *who generates the notes in real time* — composed vs improvised.
  That is a **mode of production**, not a principle of time-organisation. It belongs as a **facet**
  (`improvised: none|framed|free`) alongside production-tradition.
- **Survivor:** **Raga** is the genuine exception — its *alap → jor → jhala → gat* is a **designed
  architecture for improvisation** (an arc the composer-tradition fixes). That architecture is a
  real form decision. So: keep raga-type "designed improvisation arcs" as **Forms** (homed under
  VIII Drone-frame + VI Cyclic), and demote the rest of X to the `improvised` facet.
- **Verdict:** **Demote X to a facet**, rescue raga/maqam as Forms under existing macros. *Concrete
  change to V3.*

### A.3 II Refrain-Return — survives, but barely
- **Challenge:** Rondo is "a sectional song (I) where one block is privileged and recurs." Isn't II
  just I + a constraint? By the derivability test that smells like demotion.
- **Defence (it holds):** the *decision* in II is genuinely absent from I. Strophic/AABA asks "what
  is my block inventory and order"; II asks **"how far can I depart and still make the return feel
  earned rather than tiresome"** — a tension-of-return calculation that AABA never makes (AABA's B
  is a contrast you pass *through*, not a home you *come back to*). That is a distinct, teachable
  decision. **Keep II**, but acknowledge it is the closest macro-to-macro call in the set and could
  defensibly be a *Family of I* if the user prefers a leaner spine.

### A.4 IV Developmental (Sonata) — keep, but it is narrow
- **Challenge 1 (reducibility to III):** sonata development *is* motivic variation/fragmentation —
  is IV just "Variation (III) + a key plan"? **Partly true.** Strip tonality (atonal, electronic)
  and "sonata thinking" collapses toward thematic transformation (III/IX).
- **Challenge 2 (breadth):** as a *whole-form organiser*, IV is essentially the sonata family
  (sonata-allegro, sonatina, concerto-sonata, sonata-rondo). "Developmental technique" is broad,
  but "developmental *form*" is one tradition. That dents the Broad axis.
- **Defence:** the **decision** "pose a thematic/tonal *conflict* and resolve it through
  transformation" is not made by III (which has no conflict, only embellishment) nor by IX (which
  has no return/resolution). The dialectic is unique. **Keep IV**, flag it as tonal-era-leaning and
  narrower than the others.

### A.5 IX Through-Composed — keep, but it is a catch-all risk
- **Challenge:** IX is **defined by negation** ("no block repetition"). Madrigal, Wagner, film
  underscore, and IDM share *only the absence of a chorus*. An entity defined by what it lacks, and
  whose members have nothing positive in common, is a **dumping ground**, not a principle.
- **Defence:** there *is* a positive decision — "achieve coherence and momentum **without** the
  crutch of repetition" (via motivic web, continuous transformation, narrative/leitmotif). That is
  a real, hard, unique decision. **Keep IX**, but guard it: anything that actually uses a recurring
  anchor must be filed elsewhere, or IX swells into a junk node.

### A.6 VII Process & VIII Stasis — keep (watch the III/VI overlap)
- **VII vs III:** phasing is "automatic variation." Is Process just "Variation by rule"? The
  rescuing decision is *meta*: in VII the composer **relinquishes moment-to-moment control to a
  pre-set process** — a decision about *authorship* that III never makes. Unique enough. Keep.
- **VIII vs VI/VII:** a drone is arguably a degenerate cycle (period → ∞) or a process at rate ≈ 0.
  But the decision inverts: VI/VII design *change*; VIII designs the **compelling absence of
  change**. Different skill, different decision. Keep — while admitting VIII is "the limit case" of
  its neighbours.

---

## PART B — Could each Family/Form actually be a Macro-Archetype?

The six the user named, by the promotion test.

### B.1 12-Bar Blues — **stays demoted (Form)**
- **Unique decision?** "Build a whole form from a fixed *harmonic* cycle (I–IV–V) with AAB
  call-response phrasing." The *harmonic-cycle-as-form* idea is real — but it is **exactly the VI
  Cyclic decision**. 12-bar = VI + {harmonic substrate, 12-bar length, AAB lyric}. Fully derivable.
- **Score:** Unique 0 (it's VI), Broad 1, Irreducible 0 → **demote confirmed.**
- **Honest caveat for the user:** its *pedagogical* power ("form can be pure harmony, no theme") is
  the clearest teaching instance of VI. Keep its prominence as **the canonical teaching Form of
  VI**, not as a macro. Pedagogical clarity ≠ ontological primitivity.

### B.2 Head-Solo-Head — **stays demoted (Form/Family)**
- **Unique decision?** "State a theme, improvise over its changes, restate." Structurally that is
  **Refrain-Return (II)** (the head returns) with improvised episodes (the `improvised` facet from
  A.2). Both halves are borrowed. Nothing new at the form level.
- **Score:** 0/2/0 → **demote confirmed.** Doubly so: it also demonstrates why X collapses to a
  facet.

### B.3 Club Arc — **demote *further* than V3 said (Family, not Macro)**
- V3 promoted it to macro XI. Part A.1 retracts that. Club Arc's only "extra" over a plain groove is
  the **energy arc = Directionality (a frozen Core Concept)**.
- **Score:** 0/1/0 → **demote to a Family under VI Cyclic** with a maximal `energyArc` facet.
- This is the test doing its job: it overturned a promotion I made yesterday.

### B.4 Verse-Chorus — **stays demoted (Form)**
- **Unique decision?** Tempting: V-C has a **dual recurring anchor** (verse *and* chorus both
  recur), unlike Rondo's single home — a subtly different predictability pattern. But that is a
  *parameter* of Strophic/Sectional (I): "number of privileged recurring blocks = 2." Derivable
  from I.
- **Score:** Unique 1 (the dual-anchor is a real wrinkle), Broad 1, Irreducible 0 → **demote
  confirmed**, but note the dual-anchor as its genuine Form-level contribution worth teaching.

### B.5 Theme & Variations — **stays demoted (Form) — and this *validates* the spine**
- **Unique decision?** "Vary a *melody* while keeping it recognisable." That is the **III Variation**
  decision in its melody-flavour. The macro III correctly generalises it (passacaglia = bass-flavour,
  thematic transformation = developmental-flavour).
- **Score:** 0/1/0 as a macro → **demote confirmed.** Its demotion is *evidence the ontology is
  right*: promoting the *principle* (Variation) while keeping the *named form* as a Form is exactly
  the altitude discipline V3 is for.

### B.6 Sonata-Allegro — **stays demoted (Form)**
- **Unique decision?** It is the canonical instance of **IV Developmental**. Same logic as T&V:
  promote the principle (IV), keep the form (sonata-allegro) as a Form.
- **Score:** 0/1/0 as a macro → **demote confirmed.** (The interesting fight here was whether IV
  *itself* deserves macro status — see A.4 — not whether sonata-allegro does.)

### B.7 Bonus — a Family that DESERVES promotion the user didn't name
Apply the test in reverse to find a false-demotion:
- **Ground-Bass / Passacaglia / Chaconne** (V3: Family under III). **Unique decision?** "Fix the
  *background* (a repeating bass) and vary the *foreground* over it." That is **neither pure III**
  (which varies the *foreground* theme, background free) **nor pure VI** (which keeps foreground
  *and* background looping). It is a genuine hybrid that forces its own decision: *which layer is the
  invariant?* Score 2/2/1 = 5. **Recommendation:** do not bury it as a mere Family of III — give the
  III↔VI boundary an explicit shared home (see C.1). It is the strongest classical↔electronic bridge
  and deserves first-class visibility.

---

## PART C — Structural collisions (where the ontology leaks)

### C.1 III Variation ↔ VI Cyclic (the ground-bass leak)
A passacaglia is variation (III) over a cycle (VI). The boundary is **porous**. Options:
- (a) **Dual-tag** ground-bass forms (primary VI, secondary III) — *recommended*; keeps a clean tree
  and surfaces the bridge.
- (b) Merge III+VI into one "Repetition-with-change" macro — *rejected*: it would erase the real
  distinction between *foreground-varied* (T&V) and *substrate-looped* (house).
**Action:** keep both macros; mandate dual-tagging at the boundary.

### C.2 The "Predictability cluster" (I, II, III, VI) vs the "Time cluster" (IV, VII, IX, XII)
Four macros answer Predictability/Novelty, four answer Organisation-of-Time; VIII and (former) XI/X
straddle. This is *healthy* — it mirrors the two frozen Root Problems. But it means the boundaries
*within* each cluster (I/II, III/VI) are where all the demotion pressure concentrates. The spine is
strong *between* clusters, soft *within* them. Worth stating openly to the user.

### C.3 Negation-defined nodes (IX) and limit-case nodes (VIII)
IX (no repetition) and VIII (no change) are defined against their neighbours. They survive the test
but are the structurally weakest *kind* of macro. Guard them with strict admission rules (C.4).

### C.4 Admission rules to stop catch-alls (needed if V3 is frozen)
- Nothing enters **IX** if it has a recurring anchor (→ I/II/VI).
- Nothing enters **VIII** if its interest comes from *designed change* (→ VI/VII).
- Nothing is filed under **XII** if its blocks have directional momentum (→ IX/XI-facet).

---

## PART D — The single strongest argument against the whole ontology

> **"You have built a taxonomy of *techniques*, then called the broad ones 'macro-archetypes' and
> the narrow ones 'forms.' But the line between macro and form is just *altitude of abstraction*,
> which is continuous, not discrete. So your 12 are an arbitrary slice — exactly the sin you accused
> the old flat-10 of. Worse, several of your macros (XI=Directionality, X=production-mode,
> IX=negation, VIII=limit-case) are not form-principles at all but *facets* of forms. The honest
> model is: ONE level of Forms, each described by a vector of facets (repetition-type, change-type,
> texture, energy-arc, improvised, directionality). Your 'macro-archetypes' are just the dominant
> facet value. You re-invented Form Dimensions — the very thing the project rejected — and disguised
> it as a tree."**

This is the real threat and it must be answered, not dodged.

**Answer (why the tree still wins, with concessions):**
1. **The facet critique is correct for 2–3 nodes, not the system.** XI and X *are* facets — the test
   proved it, and V3 should adopt that (Part E). Removing them *strengthens* the tree; it does not
   refute it.
2. **Discreteness is pedagogical, not metaphysical.** The user's own rejection of Form Dimensions
   established that composers think in **named, concrete decisions**, not continuous vectors. A tree
   of named macros is *learnable*; a facet-vector is an analysis output, not a place you can stand.
   The tree is the **map**; facets are the **filters** over it. We keep both — that is exactly the
   "one tree + five facet views" design (Ontology §6). So the answer to "you reinvented dimensions"
   is: *yes, as a secondary index, deliberately — not as the primary ontology.*
3. **The macro/form line is not arbitrary once the test is applied.** A macro must pass 6/6
   (unique-broad-irreducible). That is a discrete bar, and it *cut real entities* (it demoted XI, X,
   Club Arc; it kept V, VI, XII). An arbitrary slice would not have the courage to delete one of its
   own macros. The test gives the line objectivity.
4. **Concession:** the boundary *within* the predictability cluster (I/II, III/VI) is genuinely soft
   (Part C). If the user wants a leaner spine, II→Family-of-I and a merged III/VI are defensible.
   The strong core is **I, V, VI, VII, XII + IV** (with III as the variation principle). The rest is
   negotiable.

---

## PART E — Revised verdict: what changes BEFORE we freeze

The stress test moved real verdicts. Recommended edits to `ATLAS_ONTOLOGY_V3.md`:

| # | Change | Reason |
|---|---|---|
| **E1** | **Remove XI Energy-Arc as a macro.** Re-add as a **facet** `energyArc` on every Form. Make **Club Arc a Family under VI**. | XI = the frozen Core Concept *Directionality*; its members scatter across 5 macros (A.1, B.3, D). |
| **E2** | **Remove X Improvisation-Frame as a macro.** Re-add as a **facet** `improvised: none/framed/free`. **Rescue raga/maqam as Forms** (homed under VIII+VI). | The "frame" is always another macro; X isolates a *production mode*, not a form decision (A.2, B.2). |
| **E3** | **Give the III↔VI boundary an explicit dual-tag rule**; surface **Ground-Bass/Passacaglia/Chaconne** as a first-class bridge Form-cluster, not buried under III. | Real structural leak + highest-value bridge (B.7, C.1). |
| **E4** | **Add admission rules** to IX, VIII, XII to prevent catch-alls. | Negation/limit nodes rot into junk drawers without them (C.3, C.4). |
| **E5** | **Flag IV and II as "watch" macros** in the doc (narrow / closest-to-demotion) so future editors know they are the soft joints. | Honesty about where the spine is weakest (A.3, A.4). |
| — | **Keep demoted:** 12-Bar Blues, Head-Solo-Head, Verse-Chorus, Theme & Variations, Sonata-Allegro. | All derivable; demotions confirmed (B.1–B.6). |

**Resulting spine after the stress test: 10 macro-archetypes** (the original number — but a
*different, defended* ten):

```
I    Strophic / Sectional Song      (keep)
II   Refrain-Return                 (keep — watch; could be Family of I)
III  Variation                      (keep; dual-tags with VI at ground-bass)
IV   Developmental / Dialectical    (keep — watch; tonal-leaning, narrow)
V    Imitative / Contrapuntal       (keep — strongest new)
VI   Cyclic / Groove / Ostinato     (keep; absorbs Club Arc as a Family)
VII  Process / Gradual              (keep)
VIII Stasis / Drone                 (keep; admission rule)
IX   Through-Composed / Narrative   (keep; admission rule)
XII  Moment / Mosaic / Collage      (keep — strong)

DEMOTED TO FACETS (carried by every Form, power the "By …" views):
  energyArc        (was XI)         — = Directionality, applied
  improvised       (was X)          — none / framed / free
  + the 4 Core Concepts (seg/rep/con/dir) as emphasis scores
```

> Note the irony, stated plainly: the rigorous test lands back on **10** — but it is *not* the old
> 10. The old 10 mixed altitudes and missed Fugue and Moment-form. This 10 is altitude-consistent,
> test-passing, and includes the two real gaps. The number was never the problem; the *consistency*
> was.

---

## PART F — Freeze recommendation

- **Freeze the foundation now:** Two Root Problems; 4 Core Concepts; the **4-level hierarchy**
  (Macro → Family → Form → Work); the **one-tree-plus-facets** model.
- **Freeze the spine as the post-test 10** (Part E), **after** the user rules on three open calls:
  1. **XI and X → facets?** (recommended: yes) — *this is the one decision that changes the spine.*
  2. **II → keep as macro or fold into I?** (recommended: keep, flagged).
  3. **III/VI ground-bass → dual-tag?** (recommended: yes).
- **Do not freeze** family/form lists — those stay open and growing (a map is never "complete").

Once those three calls are made, Atlas V3 is internally defensible against its own strongest
objection, and breadth (Phase 1) can begin on solid ground.
