# PROJECT_STATE.md — Music Form Atlas

## Deployment

| URL | Version | Status |
|---|---|---|
| https://rafthouse.github.io/music-form-atlas/ | Core Atlas v1.4 (HEAD: 9984324) | ✅ Live |
| https://rafthouse.github.io/music-form-atlas/classic/ | Classic Atlas v1.0 | ✅ Live |
| Repo | https://github.com/Rafthouse/music-form-atlas | ✅ |

## Working Directory

`C:\Users\User\music-form-atlas\` (branch: main)

---

## File Status

| File | Size | Lines | Purpose |
|---|---|---|---|
| `app.js` | 127 KB | 1886 | Main application (Core Atlas) |
| `styles.css` | 14 KB | 647 | Dark theme, layout, components |
| `index.html` | ~400 B | — | Shell HTML |
| `classic/app.js` | 120 KB | 1449 | Classic Atlas (35 forms, EDM corpus) |
| `classic/styles.css` | — | — | Classic styling |
| `classic/index.html` | — | — | Classic shell |
| `ARCHITECTURE_FREEZE.md` | NEW | — | Architecture reference |
| `PROJECT_STATE.md` | NEW | — | This file |

---

## Core Atlas — Current Form Archetypes (5)

| # | ID | Title | Difficulty | Tracks |
|---|---|---|---|---|
| 1 | verse-chorus | Verse-Chorus (Pop) | easy | 10 |
| 2 | club-arc | Club Arc (Electronic) | easy | 10 |
| 3 | rondo | Rondo (Classical) | medium | 10 |
| 4 | 12-bar-blues | 12-Bar Blues (NEW v1.5) | easy | 10 |
| 5 | process-minimal | Process-Based Minimal (Contemporary) | hard | 10 |

Total canonical tracks: 51 (10 per form + 1 core concept demo track per concept = 4)

---

## Content Layers — Implementation Status

| Layer | VC | Club | Rondo | Blues | Process |
|---|---|---|---|---|---|
| Section Knowledge | ✅ | ✅ | ✅ | ✅ | ✅ |
| Failure Analysis | ✅ | ✅ | ✅ | ✅ | ✅ |
| Variants | ✅ | ✅ | ✅ | ✅ | ✅ |
| Canonical Tracks (10) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Diagnosis | ✅ | ✅ | ✅ | ✅ | ✅ |
| Genre Transfer | ✅ | ✅ | ✅ | ✅ | ✅ |
| DAW Exercise | ✅ | ✅ | ✅ | ✅ | ✅ |
| Listening Exercise | ✅ | ✅ | ✅ | ✅ | ✅ |
| Comparisons | ✅ | ✅ | ✅ | ✅ | ✅ |

All 9 layers implemented on all 5 forms.

---

## Track Analysis Coverage

Tracks with genre tag: 51/51 (100%)
Tracks with Atlas analysis (seg/rep/con/dir): 51/51 (100%)

Genres covered: pop, rock, grunge, alt-pop, r&b, funk, progressive house, house, trance, edm, electronica, classical, jazz, minimalist, contemporary, ambient, film, blues, blues rock

---

## Canonical Track List (by form)

### Verse-Chorus (10)
Billie Jean (MJ), Blank Space (Swift), Bohemian Rhapsody (Queen), Rolling in the Deep (Adele), Smells Like Teen Spirit (Nirvana), Livin' on a Prayer (Bon Jovi), Hey Jude (Beatles), bad guy (Eilish), Umbrella (Rihanna), Get Lucky (Daft Punk)

### Club Arc (10)
Strobe (deadmau5), Around the World (Daft Punk), Opus (Prydz), Don't You Worry Child (SHM), Call On Me (Prydz), Go (Moby), Sandstorm (Darude), Levels (Avicii), One More Time (Daft Punk), Adagio for Strings (Tiësto)

### Rondo (10)
Rondo alla Turca (Mozart), Pathetique Rondo (Beethoven), Eine kleine Rondo (Mozart), Horn Concerto 4 (Mozart), Spring Sonata (Beethoven), Piano Concerto 23 (Mozart), Für Elise (Beethoven), Rondo in C Op.51 (Beethoven), Take Five (Brubeck), All Blues (Davis)

### 12-Bar Blues (10)
Sweet Home Chicago (Johnson), Hoochie Coochie Man (Waters), Johnny B. Goode (Berry), The Thrill Is Gone (King), Pride and Joy (SRV), Red House (Hendrix), Blues for Alice (Parker), Cross Road Blues (Johnson), Every Day I Have the Blues (King), Before You Accuse Me (Clapton)

### Process-Based Minimal (10)
Music for 18 Musicians (Reich), Piano Phase (Reich), Einstein on the Beach (Glass), Music for Airports (Eno), Different Trains (Reich), Shaker Loops (Adams), In C (Riley), Clapping Music (Reich), Glassworks Opening (Glass), The Hours (Glass)

---

## Pending Tasks

### High Priority
1. ✅ Commit v1.5 changes and push
2. ✅ Verify deployment

### Medium Priority
3. 🔲 Theme & Variations audit (should it be 6th archetype?)
4. 🔲 Verify all new sections render correctly in browser

### Low Priority
5. 🔲 Add more canonical tracks to 12-Bar Blues (currently has 3 sections each — could add more)
6. 🔲 Review 12-Bar Blues section knowledge for completeness
7. 🔲 Add DAW/Listening/Comparison content to Blues form (currently minimal — expand)

---

## Uncommitted Changes

Current `git status`: app.js has modifications since commit 9984324.

Changes include:
- track() function extended with genre+analysis params
- 3 new state vars (showDawExercise, showListeningExercise, showComparisons)
- 3 new rendering blocks in renderFormDetail()
- Content data (dawExercise, listeningExercise, comparisons) for all 5 forms
- 12-Bar Blues archetype with all 9 content layers
- Reset handling in selectForm()
- ARCHITECTURE_FREEZE.md (new file)
- PROJECT_STATE.md (new file)