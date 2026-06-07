# ATLAS_CONTENT_STANDARD.md

**Project:** Music Form Atlas
**Purpose:** Define the quality bar for every Form's educational payload (MVEP), then prove the
first 10 authored forms meet it. **Quality before scale.**
**Status:** Standard (Part I) + red-team audit of forms 1–10 (Part II). No code changes.
**Date:** 2026-06-07

---

# PART I — THE CONTENT STANDARD

## 1. Source Hierarchy

Every factual claim (structure, date, attribution, canonical work) must be traceable to a source
at or above the required tier. **A form may not be authored from memory alone.**

| Tier | Sources | Use |
|---|---|---|
| **T1 — Authoritative** | *Grove Music Online* / *New Grove*, *MGG*, critical/urtext editions (Bärenreiter, Henle, Eulenburg), peer-reviewed musicology & ethnomusicology | Required to back any structural claim, date, or attribution |
| **T2 — Academic** | Standard histories (Burkholder–Grout *A History of Western Music*; Taruskin *Oxford History*), conservatory theory texts, tradition-specific scholarly monographs | Equal weight to T1 for general claims; primary for pedagogy |
| **T3 — Encyclopedic** | Wikipedia, Britannica | **Orientation and cross-checking only — never the sole source for a claim** |
| **Recordings** | Named performer + work + label/year | Evidence that a work exists and is hearable; **not** authority for structure |
| **Scores** | Urtext / critical editions | Authority for structural and section-name claims |

**Admission rule:** a form enters Atlas only when its structure, dates, and works are confirmed by
**≥3 independent sources**, at least **one T1 or T2**. Cross-cultural forms additionally require
**one source from within or specialised in that tradition** (see §4).

**Prohibitions:** never invent a structure, never infer a date from "genre feel," never assert a
single inventor unless documented, never present a disputed fact as settled.

---

## 2. Canonical Work Selection Rules

**A work is included when it meets ALL of:**
1. **Exemplary** — it clearly demonstrates the form's *core compositional decision*.
2. **Verifiable** — real, attributed, datable (use `c.` when approximate).
3. **Hearable** — a recording or score is reasonably accessible.
4. **Defensible** — its status is supported by T1/T2, not fame alone.

**A work is excluded when:**
- its authorship is disputed *and the dispute is not noted*;
- it is **atypical but presented as typical**;
- it was chosen only because it is famous, without structural fit;
- it is so obscure no learner can hear it.

**Each Form carries 3–5 works in three roles (label edge cases):**
| Role | Count | Definition |
|---|---|---|
| **Flagship** | 1 | The single clearest teaching example of the form. |
| **Representative** | 2–4 | Show the form's normal range and main variants. |
| **Edge-case** | 0–1, **must be marked** | A famous boundary case or exception, flagged as atypical (never used to define the norm). |

Each work entry: **composer/performer — title (year) — one sentence on why it matters.**

---

## 3. Structural Verification Rules

- **Structure** is verified against ≥1 critical edition/score **or** ≥2 concurring scholarly
  descriptions.
- **Section names** use the tradition's own standard terminology (subject/answer/episode;
  alap/jor/jhala; estribillo/copla). **Do not invent labels.**
- **Representativeness:** when a form has major variants, the diagram shows the *most
  representative* path and a note flags the principal variants. **An optional section must never be
  drawn as mandatory** (e.g. a fugue's stretto, a chant's psalm-tone recitation).
- **Timelines:** dates come from T1/T2; use `c.` for uncertainty; attribute emergence to a
  **region + period**, not a lone inventor unless documented.
- **Decision integrity:** the "core compositional decision" must be the genuine design problem the
  form solves, phrased as a question — not a slogan.

---

## 4. Cross-Cultural Verification

**Golden rule: never let one sub-tradition stand for the whole. Western analytical terms must not
be imposed on non-Western forms.** Each below requires an in-tradition or specialist source.

| Tradition | Mandatory distinctions | Tuning / terms | Works must… |
|---|---|---|---|
| **Raga** | Hindustani vs Carnatic; **instrumental (gat) vs vocal (khayal, dhrupad)** | tala cycles; raga ≠ scale | span vocal **and** instrumental, not instrumental only |
| **Maqam** | **Arabic maqam vs Turkish makam vs Persian dastgah** (related but distinct systems) | Arabic quarter-tones ≠ Turkish commas ≠ Persian koron/sori | match the specific sub-tradition named |
| **Gamelan** | Javanese vs Balinese | colotomic / gongan cycle; gong punctuation | avoid bar/measure language |
| **Gregorian chant** | chant is a **family**: psalmody vs free/melismatic; antiphon, gradual, hymn, sequence differ structurally | modal, free rhythm | the diagram must match the *type* of the cited works |
| **Oral traditions** | variation is inherent; no fixed "score" | tradition-internal terms | be field recordings or tradition-internal references |

---

## 5. Neighbor-Form Rules

A neighbor link must be justifiable by **at least one** of three types (and ideally labelled):

| Type | Definition | Example |
|---|---|---|
| **Historical** | ancestor/descendant, or same scene/era | Ricercar → Fugue |
| **Structural** | same macro-archetype / shares the core decision | Passacaglia ↔ Chaconne ↔ Ground bass |
| **Pedagogical** | illuminating to compare for learning, even if not historically/structurally adjacent | Fugue ↔ Canon |

**Rules:** 2–4 neighbors per form; never link by surface genre alone; a neighbor that is none of
the three types is removed.

---

## 6. Concept-Mapping Rules

Map the form to the four Core Concepts. **Assign the dominant to the concept tied to the form's
core decision; give every concept a short, honest note; do not inflate all four to "high."**

| Concept | Dominates when… | Examples |
|---|---|---|
| **Segmentation** | the form is defined by clear sectional boundaries/division | Rondo, Verse-Chorus, Suite, Sonata exposition |
| **Repetition** | the form is built on literal return of material | Ostinato, Passacaglia, Canon, Strophic, club loop |
| **Contrast** | the form is driven by opposition/juxtaposition | Sonata (thematic conflict), Moment form, Collage, Concerto tutti/solo |
| **Directionality** | the form is defined by a tension-arc or goal-motion | Build–release, Raga ascent, Sonata resolution, through-composed narrative |

A form usually has **one dominant + one or two strong secondaries**; the remaining concept(s) may
be "low" and should say so.

---
---

# PART II — RED-TEAM AUDIT OF THE FIRST 10 FORMS

Method: each form tested against Parts I §1–6. Severity: **🔴 must-fix** (factual error or
misleading), **🟡 should-fix** (oversimplification / imbalance), **🟢 note** (acceptable, flag for
awareness). Verdict and concrete fixes per form.

## Systemic finding (affects several forms)
> **🔴 "One sub-tradition presented as the whole."** The diverse-repertoire and cross-cultural
> forms (Gregorian Chant, Raga, Maqam) each describe a *single* sub-type as if it were the entire
> form, and their cited works reinforce that bias. This is the most important pattern to fix and is
> exactly what §3 (representativeness) and §4 (cross-cultural) now forbid.

---

### 1. Fugue 🟡
- **🟡 Optional sections drawn as standard.** The section-logic lists **Countersubject** and the
  diagram includes **Stretto**; both are *common but optional*. A fugue need not have a regular
  countersubject or any stretto. *Fix:* mark both as "frequent, not obligatory."
- **🟡 Edge-case unflagged.** *Toccata and Fugue in D minor, BWV 565* has **disputed Bach
  authorship** and an atypical, quasi-improvisatory fugue — currently listed as a plain flagship-tier
  Bach example. *Fix:* keep it (it is famous and hearable) but label it edge-case with the
  authorship caveat; promote WTC as the flagship.
- **🟢** Decision, history (motet/ricercar lineage), Grosse Fuge (1825) and Shostakovich Op.87
  (1951) all check out.
- **Verdict:** trustworthy after two labelling fixes.

### 2. Gregorian Chant 🔴
- **🔴 Structure/works mismatch.** The diagram (Intonation → Recitation on tenor → Mediant →
  Termination) is a **psalm tone**, i.e. one chant type. But the cited flagship *«Viderunt omnes»*
  is a **melismatic gradual** with a completely different shape, and *«Dies irae»* is a sequence.
  The single diagram misrepresents a diverse repertoire. *Fix:* relabel the diagram "psalm-tone
  (one chant type)" and add a note that graduals/alleluias/hymns/sequences differ; or pick a
  psalmodic work to match.
- **🟡 Recognition leans psalmodic** ("reciting tone") — true for office psalmody, less so for
  Mass propers. *Fix:* soften to "often centred on a reciting tone."
- **🟢** Attribution myth (Gregory I, d.604), solfège origin (Ut queant laxis), modality, free
  rhythm — all correct.
- **Verdict:** must-fix the structure↔works mismatch before it is a model for other chant forms.

### 3. Virelai 🟡
- **🟡 Form-letter clarity.** The scheme is the standard **A bba A**; my row "Verse → refrain music
  (a)" is correct but cramped and risks confusion with the rondeau/ballata. *Fix:* state the
  canonical scheme "A bba A" explicitly and note the Italian *ballata* is the same form.
- **🟢 Cantiga as "virelai-type"** is a legitimate *structural analogy* (refrain-framed), already
  worded as analogy, not identity. Machaut works correct.
- **Verdict:** trustworthy; one clarity fix.

### 4. Passacaglia 🟡
- **🟡 Passacaglia/chaconne distinction overstated.** I define passacaglia firmly as "repeating
  *bass*" vs chaconne as "repeating *harmony*." This is the common **textbook** distinction but is
  **historically inconsistent** (Baroque composers used the terms interchangeably). The chaconne
  entry flags this; the passacaglia entry should too. *Fix:* add "the bass-vs-harmony split is a
  later pedagogical convention; historical usage overlaps."
- **🟢** "passacalle" origin, Bach BWV 582 (8-bar ground, ~20 variations), Buxtehude BuxWV 161,
  Biber (1676), Shostakovich Sym. 8 (1943) — all correct and well-chosen.
- **Verdict:** trustworthy; one nuance fix.

### 5. Chaconne 🔴
- **🔴 Questionable canonical work / label.** *«Dido's Lament»* is presented as "a descending
  ground-bass **chaconne**." It is standardly described as a **ground-bass aria** on a chromatic
  *lament bass*, **not** typically classified as a chaconne. Using it to exemplify "chaconne"
  blurs the very passacaglia/chaconne/ground-bass boundary the form is trying to teach. *Fix:* move
  Dido's Lament to the **Ground bass** form, and replace here with a true ciaccona (e.g. **Bach,
  Cantata BWV 150 final ciaccona**, or keep **Monteverdi «Zefiro torna», 1632**, which is correct).
- **🟢** Bach Chaconne BWV 1004 (flagship) and Monteverdi «Zefiro torna» are correct; overlap note
  present.
- **Verdict:** must-fix the Dido's Lament classification.

### 6. Canon 🟡
- **🟡 "Sumer is icumen in — six-voice rota."** Commonly stated, but technically a **4-voice canon
  over a 2-voice pes** (6 parts total). Dating *c.1250* is the traditional date; some scholarship
  places it later (c.1260s–1300s). *Fix:* word as "a four-in-one rota over a two-voice ground
  (six parts), c.1250" and soften the date.
- **🟢** Pachelbel Canon (c.1680, approximate — acceptable), Goldberg canons (1741), Musical
  Offering (1747) correct.
- **Verdict:** trustworthy; one precision fix.

### 7. Ricercar 🔴
- **🔴 Missing a whole sub-type.** I describe only the **imitative (fugal) ricercar**. The earliest
  ricercars (early-16th-c., esp. for lute/keyboard) were **free, improvisatory, toccata-like, and
  *non-imitative***. Presenting the imitative type as "the" ricercar is a real omission. *Fix:* add
  a note distinguishing the early improvisatory ricercar from the later imitative one (the latter
  being the fugue ancestor).
- **🟢** Gabrieli, Frescobaldi (Fiori musicali 1635), Bach «Ricercar a 6» (1747) — correct for the
  imitative type.
- **Verdict:** must-fix (add the second type) — otherwise misleading by omission.

### 8. Motet 🟢
- **🟢 Well-scoped.** Correctly limited to "**In the Renaissance**, a motet is…"; the radically
  different **medieval motet** (polytextual, isorhythmic) lives in a separate node (`med-motet`).
  Josquin, Palestrina, Tallis «Spem in alium» (40 voices, c.1570) all Renaissance and correct.
- **🟡 minor:** add one clause noting the term's strong era-dependence so a learner isn't surprised
  by the medieval motet elsewhere.
- **Verdict:** trustworthy.

### 9. Raga (Hindustani) 🔴
- **🔴 Instrumental format presented as universal.** The sequence **Alap → Jor → Jhala → Gat** is
  the **instrumental** (sitar/sarod) / dhrupad-derived format. The dominant **vocal** genre
  **khayal** does **not** use jor/jhala (it uses vilambit + drut bandish). "Bandish" (vocal) and
  "gat" (instrumental) are conflated. *Fix:* state that this is the instrumental/dhrupad architecture
  and note khayal's different shape.
- **🔴 Works all instrumental** (Shankar, Ali Akbar Khan, Banerjee) — reinforcing the bias and
  violating §4. *Fix:* add a vocal example (e.g. **Bhimsen Joshi**, khayal) and/or a **dhrupad**
  example (**Dagar brothers**). Also make "Nikhil Banerjee — raga recordings" a specific raga.
- **🟢** Tanpura drone, tala, Hindustani≠Carnatic, slow-to-fast arc — correct.
- **Verdict:** must-fix the universality claim and the all-instrumental canon.

### 10. Maqam / Taqsim 🔴
- **🔴 Three distinct systems conflated.** "Maqam … Arabic, Turkish and Persian." Persian art music
  is the **dastgah/radif** system — related but **not** called maqam; Turkish is **makam**. *Fix:*
  scope the entry to Arabic maqam (+ Turkish makam), and cross-reference Persian dastgah as a
  *related but distinct* system rather than the same thing.
- **🔴 Tuning over-generalised.** "microtonal intervals (quarter-tones)" is **Arabic-specific**;
  Turkish makam uses Pythagorean commas (Holdrian/53-comma), not quarter-tones. *Fix:* attribute
  quarter-tones to Arabic maqam specifically.
- **🟡 Works/claim mismatch:** Munir Bashir (Iraqi/Arabic), Tanburi Cemil Bey (Turkish), Umm
  Kulthum (Egyptian/Arabic) — **no Persian example** despite naming Persian. *Fix:* either drop the
  Persian claim or add a Persian (dastgah) reference and label it as such.
- **🟢** Taqsim = free/unmetred, oud/qanun/ney, qafla cadence — correct.
- **Verdict:** must-fix the system conflation and tuning claim.

---

## Audit Scorecard

| # | Form | Worst severity | Trustworthy as-is? |
|---|---|---|---|
| 1 | Fugue | 🟡 | Yes, after labelling stretto/countersubject + BWV 565 caveat |
| 2 | Gregorian Chant | 🔴 | **No** — structure↔works mismatch |
| 3 | Virelai | 🟡 | Yes, minor clarity |
| 4 | Passacaglia | 🟡 | Yes, add overlap nuance |
| 5 | Chaconne | 🔴 | **No** — Dido's Lament misclassified |
| 6 | Canon | 🟡 | Yes, precision fix |
| 7 | Ricercar | 🔴 | **No** — missing improvisatory type |
| 8 | Motet | 🟢 | Yes |
| 9 | Raga | 🔴 | **No** — instrumental bias presented as universal |
| 10 | Maqam | 🔴 | **No** — Arabic/Turkish/Persian conflated |

**5 of 10 need must-fixes before they can be templates for the other 219.** The errors are
**systematic, not random**: they cluster on (a) optional-as-mandatory structure and (b) one
sub-tradition standing for the whole — both now explicitly governed by §3 and §4.

## Recommendation
1. Apply the 5 must-fixes (forms 2, 5, 7, 9, 10) and the 5 minor fixes — small, targeted edits to
   `data/territory-content.js`.
2. Only then resume MVEP expansion, with every new form passing the Part I checklist.

**The standard works: it caught real problems in my own content. Quality before scale.**
