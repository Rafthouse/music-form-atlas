# ATLAS_PEDAGOGICAL_AUDIT.md

**Project:** Music Form Atlas
**Audit type:** Pedagogical (not musicological). The question is **"does this help someone
understand the form?"** — not "is this true?" (truth was settled in `ATLAS_CONTENT_STANDARD.md`).
**Scope:** the first 10 MVEP forms, as they read after the quality-gate fixes (commit 57f948e).
**Status:** evaluation only. No code/content changed in this pass.
**Date:** 2026-06-07

---

## Method

Each form is judged on six dimensions, from a learner's seat:

1. **First-contact clarity** — essence graspable in ~30 seconds?
2. **Cognitive load** — what could overwhelm a beginner?
3. **Teaching sequence** — is the information in the right order? (current page order: identity →
   decision → structure → section logic → recognition → history → works → neighbors → concept map)
4. **Recognition value** — could the reader actually *recognise* the form afterward?
5. **Transfer value** — could the reader *use* the idea in their own composing?
6. **Decision-centric quality** — does it teach a compositional decision, or just describe history?

Score band: **9–10** exemplary · **7–8** solid · **5–6** teaches but flawed · **<5** poor.

> **Headline finding (read first):** the quality-gate that *raised musicological accuracy* often
> *lowered first-contact clarity*. The five accuracy fixes (Gregorian, Ricercar, Raga, Maqam, and
> partly Chaconne) front-loaded **caveats, taxonomies and disambiguations into the identity line**,
> so the 30-second essence now competes with precision. **Accuracy and clarity traded off.** The
> remedy is structural, not factual: keep an **essence layer** (jargon-light identity + decision)
> and push **precision** (type lists, "what it's not", tradition splits) *down* the page. See
> Recommendations.

---

## Per-form evaluation

### 1. Fugue — **9/10**
- **First contact:** "one theme imitated by every voice" — instant. Decision ("how can one short
  idea generate a whole piece through imitation?") is a model decision-question.
- **Cognitive load:** moderate; subject/answer/episode are standard and explained; "optional"
  caveats add nuance without clutter.
- **Sequence:** strong. **Recognition:** high — signals are concrete and observable. **Transfer:**
  conceptual (fugues are hard to write, but the principle is graspable). **Decision-centric:** yes.
- *Teaches well:* the decision; recognition signals. *Teaches poorly:* countersubject caveat is
  slightly technical. *Move higher:* — . *Move lower:* — . *Rewrite:* none needed.

### 2. Gregorian Chant — **7/10**
- **First contact:** weakened by the fix — the identity now opens with a five-type taxonomy
  (psalmody/antiphon/hymn/sequence/melismatic). True, but the essence ("unaccompanied modal melody
  serving the text") is buried.
- **Cognitive load:** high for first contact (a typology before a concept).
- **Sequence:** decision is great but arrives after a dense identity. **Recognition:** good (no
  harmony, free rhythm, Latin, modal). **Transfer:** moderate. **Decision-centric:** the decision
  is excellent; the page now leans descriptive (catalogue).
- *Teaches well:* decision; recognition. *Teaches poorly:* identity front-loads the type catalogue;
  "section logic" is a typology, not how one chant unfolds. *Move higher:* the plain essence.
  *Move lower:* the five-type list → section logic only. *Rewrite:* identity to lead with essence,
  then "(it is actually a family of types — see below)".

### 3. Virelai — **6/10**
- **First contact:** "a refrain frames each stanza" is clear, but "A bba A" notation and the
  "Italian ballata is the same form" aside are abstract trivia at first contact.
- **Cognitive load:** the letter-scheme without a worked example helps theorists, confuses
  beginners.
- **Sequence:** ballata trivia sits in the identity. **Recognition:** moderate. **Transfer:** low
  (archaic form; refrain-framing is the transferable nugget). **Decision-centric:** decent.
- *Teaches well:* the refrain idea. *Teaches poorly:* "A bba A" unexplained; ballata aside early.
  *Move higher:* plain-language refrain logic. *Move lower:* ballata → neighbors/history.
  *Rewrite:* gloss the scheme in words, or show it as blocks rather than letters.

### 4. Passacaglia — **9/10**
- **First contact:** "continuous variations over a short repeating bass" — crystal clear. Decision
  ("how much can change while the bass stays fixed?") is vivid and memorable.
- **Cognitive load:** low.
- **Sequence:** strong. **Recognition:** high. **Transfer:** **highest of the ten** — "loop a bass,
  vary everything above" is directly composable and the page links it to the modern loop.
  **Decision-centric:** exemplary.
- *Teaches well:* decision + transfer-to-loop. *Teaches poorly:* nothing material. *Rewrite:* none.

### 5. Chaconne — **7/10**
- **First contact:** now opens defensively — "a variation SET, not merely any piece that uses a
  ground bass." Accurate, but a beginner meets the chaconne via what it *isn't*.
- **Cognitive load:** the chaconne/passacaglia/ground-bass triangle is genuinely confusing, and the
  page carries all three boundaries.
- **Sequence:** identity leads with a negation. **Recognition:** good. **Transfer:** high (same as
  passacaglia). **Decision-centric:** yes.
- *Teaches well:* decision; transfer. *Teaches poorly:* too much "what it's not" early; near-
  duplicate of passacaglia. *Move higher:* the positive essence. *Move lower:* the Dido/ground-bass
  contrast → recognition note (where part of it already is). *Rewrite:* identity to lead positive,
  then disambiguate.

### 6. Canon — **9/10 (best teaching page)**
- **First contact:** "one voice exactly copies another after a delay" + decision "can a melody
  accompany itself if started again late?" — intuitive, almost playful, grasped in seconds.
- **Cognitive load:** low; dux/comes immediately glossed.
- **Sequence:** excellent. **Recognition:** high. **Transfer:** **high and rare** — a round is
  something a beginner can actually write today; familiar anchors ("Row, Row, Row Your Boat",
  Pachelbel) lower the barrier. **Decision-centric:** yes.
- *Teaches well:* everything — the most beginner-friendly decision in the set. *Teaches poorly:*
  the "two-voice pes" precision (accuracy fix) is technical, but it's safely tucked in a work-why.
  *Rewrite:* none.

### 7. Ricercar — **5/10 (worst teaching page)**
- **First contact:** the accuracy fix made it a **dual definition** — "took two distinct historical
  forms: an early FREE improvisatory… and a later IMITATIVE…". Leading with "this word means two
  things" is the opposite of a clean first contact.
- **Cognitive load:** high — two types to hold, plus heavy overlap with Fugue/Canzona/Motet; a
  learner reasonably asks "why do I need this if it's just an early fugue?"
- **Sequence:** the dual-type framing crowds out a single essence. **Recognition:** split across two
  patterns. **Transfer:** **lowest of the ten** — mostly historical; the live idea (imitative
  exploration) is taught better by Fugue. **Decision-centric:** diffuse (spans both types).
- *Teaches well:* the lineage to the fugue. *Teaches poorly:* dual definition overwhelms; low
  transfer; redundant. *Move higher:* a one-line essence ("the instrumental ancestor of the
  fugue"). *Move lower:* condense the two-type taxonomy. *Rewrite:* lead with the essence + "why it
  matters (it became the fugue)"; mention the early improvisatory type as a single clause.

### 8. Motet — **7/10**
- **First contact:** "points of imitation, one per phrase of text" is a strong idea, but "points of
  imitation" is jargon and the era caveat (medieval ≠ Renaissance) is parenthetical trivia up top.
- **Cognitive load:** moderate; the jargon needs the section logic to land.
- **Sequence:** decent. **Recognition:** good ("new tune for each line; overlapping entries").
  **Transfer:** moderate ("a fresh motif per text phrase"). **Decision-centric:** yes.
- *Teaches well:* the points-of-imitation concept; recognition. *Teaches poorly:* jargon-first; era
  caveat early; part of a 3-page imitation cluster (Fugue/Ricercar/Motet) that repeats ideas.
  *Move lower:* era caveat → history. *Rewrite:* plain-language "a new little tune for each line of
  text, sung overlapping."

### 9. Raga (Hindustani) — **6/10**
- **First contact:** the accuracy fix turned the identity into a **terminology dump** — alap, jor,
  jhala, gat, vilambit, drut, khayal, dhrupad, tala in two sentences. The essence ("a mode becomes
  a slow-to-fast improvised journey over a drone") is lost in the vocabulary.
- **Cognitive load:** **highest of the ten.**
- **Sequence:** recognition (plain) is clearer than identity (jargon) — they are in the wrong order
  of accessibility. **Recognition:** good and concrete. **Transfer:** moderate-conceptual.
  **Decision-centric:** the decision is excellent and plain — but smothered by surrounding jargon.
- *Teaches well:* the decision; recognition. *Teaches poorly:* identity is a glossary; genre nuance
  (correct) crushes first contact. *Move higher:* the plain decision + recognition. *Move lower:*
  the genre/term split → section logic (where it also lives). *Rewrite:* identity = one plain
  sentence first ("a raga unfolds a mode from free, slow exploration to a fast climax over a drone
  and drum cycle"), terms second.

### 10. Maqam — **6/10**
- **First contact:** opens with a **three-way disambiguation** (Arabic maqam / Turkish makam /
  Persian dastgah) before the learner knows what a maqam *is*. Scrupulously accurate, pedagogically
  backwards.
- **Cognitive load:** very high (maqam/makam/dastgah/taqsim/taksim/sayr/seyir/qafla + two tuning
  systems).
- **Sequence:** disambiguation precedes essence. **Recognition:** good and plain. **Transfer:**
  moderate-conceptual. **Decision-centric:** decision is excellent and plain.
- *Teaches well:* the decision; recognition. *Teaches poorly:* identity is a scope lecture; tuning
  detail is technical for first contact. *Move higher:* plain essence + decision. *Move lower:* the
  tradition split → a "scope" line beneath the essence. *Rewrite:* "A maqam is a melodic mode;
  the taqsim improvises freely within it" first; the Arabic/Turkish/Persian scope second.

---

## Pedagogical Scoreboard

| # | Form | First-contact | Load | Sequence | Recognition | Transfer | Decision | **Score** |
|---|---|---|---|---|---|---|---|---|
| 6 | Canon | ●●● | low | ●●● | ●●● | ●●● | ●●● | **9** |
| 1 | Fugue | ●●● | med | ●●● | ●●● | ●● | ●●● | **9** |
| 4 | Passacaglia | ●●● | low | ●●● | ●●● | ●●● | ●●● | **9** |
| 5 | Chaconne | ●● | med | ●● | ●●● | ●●● | ●●● | **7** |
| 2 | Gregorian Chant | ●● | high | ●● | ●●● | ●● | ●●● | **7** |
| 8 | Motet | ●● | med | ●● | ●●● | ●● | ●●● | **7** |
| 3 | Virelai | ●● | med | ●● | ●● | ● | ●● | **6** |
| 9 | Raga | ● | high | ●● | ●●● | ●● | ●●● | **6** |
| 10 | Maqam | ● | high | ●● | ●●● | ●● | ●●● | **6** |
| 7 | Ricercar | ● | high | ● | ●● | ● | ●● | **5** |

Mean: **7.1/10** — solid, with a clear split between intuitive forms and accuracy-heavy ones.

---

## The Four Identifications

- **Best teaching page:** **Canon** — the most intuitive decision in the set ("can a melody
  accompany itself?"), familiar anchors, and the rare property that a beginner can *write one today*.
- **Worst teaching page:** **Ricercar** — a dual historical definition overwhelms first contact,
  transfer is the lowest, and it largely duplicates Fugue for the learner.
- **Most musicologically accurate page:** **Maqam** — after the fix it scrupulously separates
  Arabic/Turkish/Persian systems and their distinct tunings (Gregorian Chant is a close second).
- **Most pedagogically effective page:** **Passacaglia** — clearest decision, strongest *transfer*
  (loop-a-bass-vary-above, explicitly linked to modern production), zero clutter. (Canon ties for
  intuitiveness; Passacaglia wins on transfer.)

> **The irony, stated plainly:** the **most accurate** page (Maqam) is among the **least
> pedagogically clear**, and the most pedagogically effective pages (Canon, Passacaglia) are
> musicologically simple. Accuracy did not cause clarity — in several cases it *cost* clarity.

---

## Recommendations (structural, for the whole corpus — apply before scaling)

1. **Split essence from precision.** Treat the **identity (`what`) + decision** as a protected
   "30-second essence" layer: one jargon-light sentence of essence, decision as a plain question.
   Push taxonomies, "what it's not", tradition-splits and tuning detail **down** into section
   logic / history / a new optional "scope & caveats" slot. This fixes Gregorian, Ricercar, Raga,
   Maqam, Chaconne **without removing any accuracy**.
2. **Glossary-on-first-use.** For cross-cultural forms, the first foreign term should be glossed in
   three words inline; defer the rest. (Raga, Maqam.)
3. **Consider raising "Recognition" in the render order** (it is currently 5th). For many forms it
   is the most accessible section and a strong motivator; testing it directly after the decision may
   help beginners.
4. **De-duplicate the imitation cluster.** Fugue / Ricercar / Motet / Canon repeat the imitation
   idea four times; cross-link them as a learning path and let Fugue carry the depth, so Ricercar
   and Motet can be lighter.
5. **A pedagogical pass should follow every accuracy pass.** The two-gate sequence
   (musicological → pedagogical) caught a real regression here; make it standard for each wave.

**Net:** the first 10 are *trustworthy* (gate 1) and mostly *teachable* (gate 2, mean 7.1), but the
four accuracy-heavy pages need an essence-layer rewrite before they become templates — otherwise
the corpus will scale precision at the expense of learning, the opposite of Atlas's purpose.
