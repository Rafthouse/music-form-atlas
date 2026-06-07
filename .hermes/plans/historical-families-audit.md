# Atlas v2.0 — Historical Families Expansion Audit

> Дата: 2026-06-07
> Статус: Дослідження (без змін коду)
> Архітектура: заморожена (10 archetypes, 3 layers: Core Concepts → Form Archetypes → Families)

---

## 0. Поточний стан Atlas

### Що вже є

| Рівень | Кількість | Деталі |
|---|---|---|
| **Core Concepts** | 4 | Segmentation, Repetition, Contrast, Directionality |
| **Form Archetypes** | 10 | VC, Club Arc, Rondo, 12-Bar, Process, T&V, TC, HSH, Sonata, Drone |
| **Families (впроваджені)** | 23 | Club Arc: 13, Process: 3, TC: 3, Drone: 4 |
| **genreTransfer зв'язки** | 29 унікальних | Всі архетипи мають 5-9 зв'язків |
| **Canonical tracks** | ~110 | 10 на архетип (крім Club Arc — 17) |

### Архетипи без families

- **Verse-Chorus** — 0 families (найбільша прогалина для Pop/Rock розділу)
- **Rondo** — 0 families (Rondo, Sonata-Rondo, French Rondo, Ritornello)
- **12-Bar Blues** — 0 families (Standard, Quick Change, Minor, Jazz Blues)
- **Theme & Variations** — 0 families (Strict, Free, Character, Double, Passacaglia, Chaconne)
- **Head-Solo-Head** — 0 families (Bebop, Modal, Trading, Big Band)
- **Sonata-Allegro** — 0 families (Classical, Monothematic, Slow Intro, Concerto)

---

## 1. Повна карта сімейств (100+ структур)

### Розділ 1: Classical Family (19 сімейств)

| # | Сімейство | Архетип | Період | Складність |
|---|---|---|---|---|
| 1 | Binary Form | Sonata-Allegro | Baroque | easy |
| 2 | Ternary Form (ABA) | Rondo | Baroque/Classical | easy |
| 3 | Rounded Binary | Sonata-Allegro | Classical | medium |
| 4 | Minuet & Trio | Rondo | Classical | medium |
| 5 | Scherzo | Rondo | Romantic | medium |
| 6 | Sonata-Allegro | ✅ Sonata-Allegro (self) | Classical | hard |
| 7 | Sonata-Rondo | Rondo / Sonata | Classical | hard |
| 8 | Rondo | ✅ Rondo | Classical | medium |
| 9 | Theme & Variations | ✅ T&V | Classical | medium |
| 10 | Passacaglia | Theme & Variations | Baroque | hard |
| 11 | Chaconne | Theme & Variations | Baroque | hard |
| 12 | Fugue | Process-Based | Baroque | hard |
| 13 | Canon | Process-Based | Renaissance/Baroque | medium |
| 14 | Ricercar | Process-Based | Renaissance | hard |
| 15 | Ritornello | Rondo / Club Arc | Baroque | medium |
| 16 | Concerto Form | Sonata + HSH | Classical | hard |
| 17 | Symphony Form | Sonata + Rondo | Classical | hard |
| 18 | Through-Composed Art Song | ✅ Through-Composed | Romantic | hard |
| 19 | Opera Scene | Through-Composed | Romantic | hard |

**Що вже покрито:** 4 з 19 (Theme & Variations, Rondo, Sonata, Through-Composed)

**Що потребує нових families:**
- Sonata-Allegro: Binary, Rounded Binary, Monothematic, Slow Introduction, Concerto-Sonata, Symphony
- Rondo: Minuet/Trio, Scherzo, Sonata-Rondo, Ritornello, French Rondo
- Theme & Variations: Passacaglia, Chaconne, Ground Bass, Double Variations
- Process-Based: Fugue (subject/answer/counter-exposition/episode/stretto), Canon, Ricercar

---

### Розділ 2: Jazz Family (12 сімейств)

| # | Сімейство | Архетип | Період | Складність |
|---|---|---|---|---|
| 1 | 12-Bar Blues | ✅ 12-Bar Blues | Early Jazz | easy |
| 2 | Jazz Blues | 12-Bar Blues | Bebop | medium |
| 3 | Rhythm Changes | Head-Solo-Head | Swing | medium |
| 4 | AABA Standard | Verse-Chorus / HSH | Swing | medium |
| 5 | Head-Solo-Head | ✅ HSH (self) | Bebop | hard |
| 6 | Modal Jazz | Head-Solo-Head | Cool/Modal | medium |
| 7 | Bebop Structure | Head-Solo-Head | Bebop | hard |
| 8 | Hard Bop Structure | Head-Solo-Head | Hard Bop | medium |
| 9 | Trading Fours | Head-Solo-Head | Bebop | hard |
| 10 | Big Band Arrangement | Verse-Chorus / Rondo | Swing | hard |
| 11 | Jazz Suite | Through-Composed | Modern Jazz | hard |
| 12 | Third Stream Forms | Sonata / Process | Avant-Garde | hard |

**Що вже покрито:** 3 з 12

**Що потребує families:**
- Head-Solo-Head: Bebop, Modal Jazz, Trading Fours, Big Band, Hard Bop
- 12-Bar Blues: Jazz Blues (Bird changes)
- Verse-Chorus: AABA Standard (32-bar song form)

---

### Розділ 3: Blues / Folk / Roots (7 сімейств)

| # | Сімейство | Архетип | Період | Складність |
|---|---|---|---|---|
| 1 | Strophic Form | Verse-Chorus | Folk/Blues | easy |
| 2 | Ballad Form | Through-Composed / VC | Folk | medium |
| 3 | Call and Response | 12-Bar Blues / HSH | African diaspora | easy |
| 4 | Work Song Structure | 12-Bar Blues | Folk | easy |
| 5 | Gospel Structure | Verse-Chorus | Gospel | medium |
| 6 | Country Song Form | Verse-Chorus | Country | easy |
| 7 | Appalachian Song Form | Verse-Chorus | Folk | easy |
| 8 | Celtic Dance Form | Rondo | Folk | medium |
| 9 | Traditional Dance Cycles | Rondo | Folk | medium |

**Що вже покрито:** 0 з 9 (повністю відсутні families у VC, 12-Bar, TC)

**Пропозиція:** Створити families для Verse-Chorus (Strophic, Country, Gospel) та 12-Bar (Folk, Delta, Chicago, Jump)

---

### Розділ 4: Pop / Rock (9 сімейств)

| # | Сімейство | Архетип | Період | Складність |
|---|---|---|---|---|
| 1 | Verse-Chorus | ✅ VC (self) | 1960s+ | easy |
| 2 | Verse-Pre-Chorus-Chorus | ✅ VC (variant) | 1980s+ | medium |
| 3 | AABA Pop | Verse-Chorus | 1950s-60s | medium |
| 4 | Power Ballad | Verse-Chorus | 1980s | medium |
| 5 | Arena Rock Structure | Verse-Chorus | 1970s-80s | easy |
| 6 | Progressive Rock Suites | Through-Composed | 1970s | hard |
| 7 | Art Rock Forms | Through-Composed | 1970s | hard |
| 8 | Singer-Songwriter Forms | Verse-Chorus | 1960s+ | easy |
| 9 | Punk Song Structure | Verse-Chorus | 1970s | easy |
| 10 | Indie Rock Structure | Verse-Chorus | 1990s+ | medium |

**Що вже покрито:** 1 з 10 (Progressive Rock як family у Through-Composed)

**Ключова прогалина:** Verse-Chorus не має жодної family! Найпопулярніший архетип без реалізацій.

**Пропозиція:** Додати 6+ families до Verse-Chorus (Power Pop, Arena Rock, Singer-Songwriter, Punk, Indie, AABA)

---

### Розділ 5: House Family (10 сімейств)

| # | Сімейство | Архетип | Енергія | BPM |
|---|---|---|---|---|
| 1 | Chicago House | Club Arc | 4/4 groove | 120-130 |
| 2 | Deep House | Club Arc | laid-back, deep | 118-125 |
| 3 | Soulful House | Club Arc | vocal-driven | 120-128 |
| 4 | Garage House | Club Arc | swing + vocal | 125-132 |
| 5 | Tech House | Club Arc | minimal + bass | 126-134 |
| 6 | Progressive House | Club Arc | long build arc | 126-132 |
| 7 | Melodic House | Club Arc / T&V | melodic | 120-128 |
| 8 | Afro House | Club Arc | polyrhythm | 114-124 |
| 9 | Organic House | Club Arc / Drone | organic | 110-122 |
| 10 | Microhouse | Club Arc / Process | minimal | 120-128 |

**Що вже покрито:** 5 з 10 (Classic House, Deep House, Tech House, Progressive House — ✅ в families Club Arc. Але Melodic, Afro, Organic, Microhouse — відсутні)

---

### Розділ 6: Techno Family (10 сімейств)

| # | Сімейство | Архетип | Характер | BPM |
|---|---|---|---|---|
| 1 | Detroit Techno | Club Arc | machine soul | 130-150 |
| 2 | Minimal Techno | Club Arc / Process | reduction | 130-140 |
| 3 | Dub Techno | Club Arc / Drone | space | 130-138 |
| 4 | Hypnotic Techno | Club Arc / Drone | trance-like | 130-140 |
| 5 | Peak Time Techno | Club Arc | driving | 138-150 |
| 6 | Hardgroove | Club Arc | rhythmic | 135-145 |
| 7 | Industrial Techno | Club Arc | abrasive | 135-150 |
| 8 | Schranz | Club Arc | aggressive | 150-180 |
| 9 | Raw Techno | Club Arc | stripped | 130-140 |
| 10 | Modern Warehouse | Club Arc | dark | 135-145 |

**Що вже покрито:** 4 з 10 (Detroit, Minimal, Dub ✅ в families Club Arc. Hypnotic частково через Drone cross-reference)

---

### Розділ 7: Trance Family (7 сімейств)

| # | Сімейство | Архетип | Енергія | BPM |
|---|---|---|---|---|
| 1 | Classic Trance | Club Arc | melodic build-drop | 135-145 |
| 2 | Uplifting Trance | Club Arc | euphoric | 136-145 |
| 3 | Progressive Trance | Club Arc | long arc | 130-140 |
| 4 | Psytrance | Club Arc | fast + layers | 140-150 |
| 5 | Goa Trance | Club Arc | psychedelic | 140-148 |
| 6 | Tech Trance | Club Arc | driving | 140-150 |
| 7 | Vocal Trance | Club Arc | pop cross | 135-142 |

**Що вже покрито:** 2 з 7 (Trance Uplifting, Psytrance ✅ в families Club Arc)

---

### Розділ 8: Bass Music Family (10 сімейств)

| # | Сімейство | Архетип | Характер | BPM |
|---|---|---|---|---|
| 1 | UK Garage | Club Arc / VC | shuffle, vocal | 130-140 |
| 2 | 2-Step | Club Arc | broken beat | 130-140 |
| 3 | Dubstep | Club Arc | half-time weight | 138-142 |
| 4 | Deep Dubstep | Club Arc / Drone | space + sub | 138-142 |
| 5 | Brostep | Club Arc | aggressive | 140-150 |
| 6 | Drum & Bass | Club Arc | fast break | 170-180 |
| 7 | Liquid DnB | Club Arc | melodic | 170-178 |
| 8 | Neurofunk | Club Arc | complex bass | 172-180 |
| 9 | Jump Up | Club Arc | dancefloor | 172-180 |
| 10 | Breakbeat Hardcore | Club Arc | rave | 150-170 |

**Що вже покрито:** 4 з 10 (Deep Dubstep, Brostep, Liquid DnB, Neurofunk ✅ в families Club Arc)

---

### Розділ 9: Ambient Family (10 сімейств)

| # | Сімейство | Архетип | Характер | Тривалість |
|---|---|---|---|---|
| 1 | Ambient | Drone | atmospheric | indefinite |
| 2 | Drone Ambient | Drone | static | long |
| 3 | Dark Ambient | Drone | ominous | long |
| 4 | Isolationist | Drone / Process | alienating | long |
| 5 | Space Ambient | Drone | cosmic | long |
| 6 | Berlin School | Process / Drone | sequencing | 10-30 min |
| 7 | Environmental Ambient | Drone | field record | indefinite |
| 8 | New Age Ambient | Drone | spiritual | medium |
| 9 | Microsound | Process | granular | variable |
| 10 | Lowercase | Process / Drone | extreme reduction | variable |

**Що вже покрито:** 4 з 10 (Ambient, Dark Ambient, Drone Ambient, Isolationist ✅ в families Drone)

---

### Розділ 10: Experimental Family (10 сімейств)

| # | Сімейство | Архетип | Характер | Складність |
|---|---|---|---|---|
| 1 | Minimalism | ✅ Process-Based | repetition | medium |
| 2 | Process Music | ✅ Process-Based | rule-based | hard |
| 3 | Generative Music | ✅ Process-Based | algorithmic | hard |
| 4 | Algorithmic Music | Process-Based | code-based | hard |
| 5 | Musique Concrète | Through-Composed | sampled | hard |
| 6 | Electroacoustic | Through-Composed | hybrid | hard |
| 7 | Acousmatic | Through-Composed | spatial | hard |
| 8 | IDM | ✅ Through-Composed | intricate | hard |
| 9 | Glitch | Through-Composed / Process | error-aesthetic | medium |
| 10 | Breakcore | Club Arc / TC | chaotic | hard |

**Що вже покрито:** 5 з 10 (Minimalism, Process, Generative ✅ в families Process-Based. IDM ✅ в families Through-Composed)

---

## 2. Таблиця покриття

### Поточне покриття families

| Архетип | Є families | Можливо | Покриття |
|---|---|---|---|
| **Club Arc** | 13 | 37 (House 10 + Techno 10 + Trance 7 + Bass 10) | **35%** |
| **Drone** | 4 | 10 | **40%** |
| **Process-Based** | 3 | 10 (Classical polyphony + Experimental) | **30%** |
| **Through-Composed** | 3 | 9 (Classical opera + Experimental + Rock) | **33%** |
| **Verse-Chorus** | 0 | 6+ (Pop/Rock variants) | **0%** |
| **Rondo** | 0 | 5+ (Minuet, Scherzo, Sonata-Rondo, Ritornello) | **0%** |
| **12-Bar Blues** | 0 | 4+ (Standard, Jazz, Minor, Quick Change) | **0%** |
| **Theme & Variations** | 0 | 6+ (Passacaglia, Chaconne, Strict, Free, Double) | **0%** |
| **Head-Solo-Head** | 0 | 6+ (Bebop, Modal, Trading, Big Band, Hard Bop) | **0%** |
| **Sonata-Allegro** | 0 | 5+ (Binary, Rounded Binary, Monothematic, Concerto) | **0%** |
| **Всього** | **23** | **~98** | **~23%** |

### Пропозиція розподілу: 100 families

| Архетип | Families | Нові | Розділи |
|---|---|---|---|
| **Verse-Chorus** | 6 | 6 | Pop/Rock (Power Pop, Arena, Singer-Songwriter, AABA, Punk, Indie), Folk/Country (Strophic, Country, Gospel) |
| **Club Arc** | 13+5 | 5 | House (+Melodic, Afro, Organic, Microhouse), Techno (+Hypnotic, Industrial, Hardgroove, Warehouse), Trance (+Classic, Progressive, Tech, Vocal), Bass (+UKG, 2-Step, Breakbeat Hardcore, Jump Up) |
| **Rondo** | 5 | 5 | Minuet & Trio, Scherzo, Sonata-Rondo, Ritornello, French Rondo |
| **12-Bar Blues** | 4 | 4 | Standard, Quick Change, Minor Blues, Jazz Blues |
| **Process-Based** | 3+5 | 5 | Fugue, Canon, Ricercar, Algorithmic, Microsound |
| **Theme & Variations** | 6 | 6 | Passacaglia, Chaconne, Double Variations, Ground Bass, Strict, Free |
| **Through-Composed** | 3+2 | 2 | Art Song (Durchkomponiert), Opera Scene, Musique Concrète, Electroacoustic |
| **Head-Solo-Head** | 6 | 6 | Bebop, Modal Jazz, Trading Fours, Big Band, Hard Bop, Rhythm Changes |
| **Sonata-Allegro** | 5 | 5 | Binary, Rounded Binary, Monothematic, Slow Introduction, Concerto Form |
| **Drone** | 4+3 | 3 | Space Ambient, Berlin School, New Age, Lowercase |
| **Всього** | **55+** | **+77** | **100 families** |

---

## 3. Що можна додати без зміни архітектури

### ✅ Можна додати негайно

1. **Families до 6 архетипів без families** — чисто контентна робота (VC, Rondo, 12-Bar, T&V, HSH, Sonata)
2. **Розширення families Club Arc** — додати 5 пропущених (Melodic, Afro, Organic, Microhouse, UKG, Jump Up)
3. **Розширення families Process** — додати Fugue, Canon, Ricercar як алгоритмічні процеси
4. **Розширення families Drone** — Space Ambient, Berlin School, New Age
5. **Розширення families Through-Composed** — Art Song (Durchkomponiert), Opera Scene, Musique Concrète
6. **New genreTransfer** — зв'язки між архетипами та новими families

### ✅ Можна з мінімальними змінами UI

1. **Сортування families** — додати поле period/region для фільтрації
2. **Badge для кількості families** — відображати `(13 families)` в списку архетипів
3. **Пошук/фільтр families** — без зміни архітектури даних

### ⚠️ Потребує архітектурного рішення

1. **Навігація "історичною картою"** — новий режим browse: Period × Region × Archetype
2. **Cross-archetype families** — деякі сімейства належать до 2+ архетипів (Sonata-Rondo → Rondo + Sonata)
3. **Ієрархічне групування** — Classical → Baroque → Binary Form

---

## 4. Пропозиція нової навігації

### Ідея: три режими перегляду

```
┌─────────────────────────────────────────────────┐
│  ◈ Classic Atlas    [By Archetype] │ [By History]
└─────────────────────────────────────────────────┘
```

**Режим 1: By Archetype** (поточний)
- 4 Core Concepts → 10 Form Archetypes → Families
- Педагогічний підхід: "Як побудувати форму"

**Режим 2: By History** (новий)
- Period → Region → Form → Canonical Works
- Енциклопедичний підхід: "Як реальна музика організована"

```
[Baroque] [Classical] [Romantic] [20th C] [Electronic]

Baroque > Germany > Fugue
┌─────────────────────────────────────────────┐
│  Fugue                                      │
│  Archetype: Process-Based                   │
│  Period: 1600-1750                          │
│  Region: Germany / Italy                    │
│                                              │
│  Structure: Subject → Answer →              │
│  Counter-Exposition → Episode(s) → Stretto  │
│                                              │
│  Canonical:                                 │
│  • Bach — Art of Fugue                      │
│  • Bach — WTC I, Fugue in C minor           │
│  • Handel — Messiah, "Amen" chorus          │
│                                              │
│  Compare with: Canon, Ricercar              │
└─────────────────────────────────────────────┘
```

### Впровадження без зміни архітектури

Додати новий render mode `mode: "history"` в state.

Дані families вже є. Додати поле `period` та `region` до кожного family object.

Новий render маршрут (renderHistoryBrowse) читає ті самі families, групує за period.

Не змінювати coreConcepts, formArchetypes, helper functions.

---

## 5. Пріоритети імплементації

### Phase 1 (контент — ~2 години роботи)

1. Families для **Verse-Chorus** (6): Power Pop, Arena Rock, Singer-Songwriter, AABA, Punk, Indie
2. Families для **12-Bar Blues** (4): Standard, Quick Change, Minor, Jazz
3. Families для **Rondo** (5): Minuet/Trio, Scherzo, Sonata-Rondo, Ritornello, French Rondo

### Phase 2 (контент — ~2 години)

4. Families для **Head-Solo-Head** (6): Bebop, Modal, Trading, Big Band, Hard Bop, Rhythm Changes
5. Families для **Sonata-Allegro** (5): Binary, Rounded Binary, Monothematic, Slow Intro, Concerto
6. Families для **Theme & Variations** (6): Passacaglia, Chaconne, Strict, Free, Double, Ground Bass

### Phase 3 (контент — ~1 година)

7. Розширення **Club Arc** (+5): Melodic House, Afro House, Organic House, Microhouse, UK Garage, Jump Up
8. Розширення **Process-Based** (+3): Fugue, Canon, Algorithmic
9. Розширення **Through-Composed** (+2): Art Song, Musique Concrète
10. Розширення **Drone** (+2): Space Ambient, Berlin School

### Phase 4 (UI — ~2 години)

11. Додати `period` + `region` полів до всіх families
12. Режим "By History" (renderHistoryBrowse)
13. Періодна навігація
14. Регіональна фільтрація

---

## 6. Висновок

**Поточний стан:** 23 families, 4 з 10 архетипів мають families.

**Ціль:** ~100 families, всі 10 архетипів.

**Що блокус:** Нічого. Вся робота — контентна. Архітектура не змінюється.

**Ризики:**
- Розмір файлу: +100 families × ~500 байт = ~50 КБ. app.js зараз ~346 КБ. Після ~400 КБ. Це прийнятно.
- Час рендеру: families рендеряться тільки при розгортанні (toggle). Немає ризику.

**Пропозиція:** Почати з Phase 1 (VC, 12-Bar, Rondo — найбільші прогалини) та Phase 2 (HSH, Sonata, T&V — середні прогалини).

---

*Документ створено для Atlas v2.0 Historical Families Expansion.*
*Жодних змін коду, UI або даних не внесено.*
*Наступний крок: отримати approval на Phase 1.*