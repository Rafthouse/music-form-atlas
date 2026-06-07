# Atlas v2 — Information Architecture Audit

> Дата: 2026-06-07
> Мета: Визначити остаточну інформаційну архітектуру Atlas як дослідницької бази для композитора і DAW-орієнтованої системи знань.
> Контекст: Atlas має вести не лише до творів, а й до композиторських рішень.

---

## 1. Огляд запропонованих рівнів

Потрібно перевірити 9 рівнів інформації:

1. **Archetype** (існує)
2. **Family** (існує, потребує розширення)
3. **Canonical Work** (існує як flat tracks)
4. **Historical Movement** (новий)
5. **Scene** (новий)
6. **Production Tradition** (новий)
7. **Technique** (новий)
8. **Equipment / Workflow** (новий)
9. **DAW Translation** (новий)

Для кожного: унікальна цінність, виводимість, потреба в UI, допомога композитору.

---

## 2. Поатомний аудит рівнів

### Level 1: Archetype

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | Що це за тип форми? Яку композиційну проблему вирішує? |
| **Чи виводиться з інших** | Ні. Це фундамент. Жодна кількість canonical works не виведе абстрактний архетип. |
| **Окремий UI-рівень?** | Так. Головна навігація. |
| **Допомога композитору** | «Яку форму вибрати для мого матеріалу?» |

**Вердикт:** ✅ Залишити як є. Фундамент.

---

### Level 2: Family

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | Конкретна історична / жанрова реалізація архетипу. BPM, структурний профіль, енергетичний профіль. |
| **Чи виводиться з інших** | Ні. Family — це «що таке Chicago House на відміну від Tech House». Це знання про жанр, не про окремий твір. |
| **Окремий UI-рівень?** | Так. Другий рівень навігації після архетипу. |
| **Допомога композитору** | «Я правильно розумію структуру цього жанру? Як він відрізняється від сусіднього?» |

**Вердикт:** ✅ Є, потребує розширення.

---

### Level 3: Canonical Work

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | Конкретний твір з структурним аналізом. Timestamps, formNotes, archetypeScores. |
| **Чи виводиться з інших** | Ні. Кожен твір унікальний. Але **колекція** творів визначає family. |
| **Окремий UI-рівень?** | Так. Але не окрема навігація — як глибока картка всередині family. |
| **Допомога композитору** | «Як саме це зроблено? Де секції? Яка арка?» |

**Вердикт:** ✅ Є в базовій формі. Потребує: (1) більше творів на family, (2) глибший структурний аналіз, (3) archetypeScores.

---

### Level 4: Historical Movement

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | Коли і де це виникло. Чому саме тоді. Як еволюціонувало. |
| **Чи виводиться з інших** | **Так.** Кожен canonical work має рік. Якщо взяти works + family + context → movement виводиться. |
| **Окремий UI-рівень?** | **Ні.** Рух — це **атрибут** family або твору, не окремий навігаційний вимір. |
| **Допомога композитору** | «Як це пов'язано з тим, що було до / після?» |

**Вердикт:** ❌ Не робити окремим рівнем. Додати `period: "1990s"`, `region: "Berlin"` як поля family. В UI — фільтр або badge.

---

### Level 5: Scene

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | «Berlin 90s», «Detroit 80s», «Bristol 2000s». Соціальний контекст. Лейбли, клуби, колективи. |
| **Чи виводиться з інших** | **Так.** Works + лейбли = scene. Але потребує додаткового поля `label` / `scene`. |
| **Окремий UI-рівень?** | **Ні.** Атрибут family або твору. |
| **Допомога композитору** | «Яка спільнота створила цей звук?» |

**Вердикт:** ❌ Не робити окремим рівнем. Додати `scene: ["Berlin 90s"]` як поле.

---

### Level 6: Production Tradition

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | **«Як це зроблено?»** Типовий продакшн-підхід: ланцюг обробки, філософія звуку, характерні прийоми. |
| **Чи виводиться з інших** | **Ні.** Це знання, яке не виводиться з творів. Dub Techno = delay + reverb philosophy. Цього немає в нотному записі. |
| **Окремий UI-рівень?** | **Так.** Це **найцінніший новий рівень**. Композитор приходить сюди: «як зробити такий звук». |
| **Допомога композитору** | **«Як відтворити цю естетику?»** |

**Вердикт:** ✅ **Ключовий новий рівень.** Ядро DAW-орієнтованої системи.

---

### Level 7: Technique

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | Конкретна техніка: sidechain compression, spring reverb send, filter automation. |
| **Чи виводиться з інших** | **Частково.** Production Tradition → набір технік. Але техніка як concept (наприклад «sidechain» ) існує незалежно від традиції. |
| **Окремий UI-рівень?** | **Ні.** Техніки — це **вміст** Production Tradition. Вони живуть у картці традиції. |
| **Допомога композитору** | «Який конкретно прийом використати?» |

**Вердикт:** ⚠️ Вкласти всередину Production Tradition. Не окремий рівень навігації, але окремий візуальний блок.

---

### Level 8: Equipment / Workflow

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | Конкретний пристрій: 808 kick, 303 bass, Lexicon 224, Revox tape. |
| **Чи виводиться з інших** | **Так.** Technique + era = equipment. Але прямий запис цінніший за виведення. |
| **Окремий UI-рівень?** | **Ні.** Equipment — атрибут всередині Production Tradition. |
| **Допомога композитору** | «Яке обладнання дає характерний звук?» |

**Вердикт:** ⚠️ Не окремий рівень. Але важливий блок всередині Tradition: «Signal Chain».

---

### Level 9: DAW Translation

| Питання | Відповідь |
|---|---|
| **Унікальна інформація** | **Практичне застосування:** «Route kick to bus → add compressor → sidechain from bass». Конкретні кроки в Ableton / FL / Logic. |
| **Чи виводиться з інших** | **Ні.** Ніяка кількість теорії не дасть покрокової інструкції «зроби це зараз у своїй DAW». |
| **Окремий UI-рівень?** | **Так.** Але не як навігація — як глибокий розділ всередині Tradition. |
| **Допомога композитору** | **«Зроби це прямо зараз.»** Найцінніший шар для action. |

**Вердикт:** ✅ **Ключовий новий шар.** Фінальна ланка: теорія → практика.

---

## 3. Схема виводимості рівнів

```
Archetype ────────────────────────────────────────── Не виводиться
    │
Family ──────────────────────────────────────────── Не виводиться
    │
    ├── Canonical Work ──────────────────────────── Не виводиться
    │       │
    │       ├── Historical Movement ─────────────── ВИВОДИТЬСЯ (з works + context)
    │       ├── Scene ───────────────────────────── ВИВОДИТЬСЯ (з works + labels)
    │       └── Archetype Scores ────────────────── Ручний аналіз
    │
    └── Production Tradition ────────────────────── Не виводиться (нове знання)
            │
            ├── Technique ───────────────────────── Частково виводиться (tradition → techniques)
            ├── Equipment ───────────────────────── Частково виводиться (technique → gear)
            └── DAW Translation ─────────────────── НЕ ВИВОДИТЬСЯ (платформне знання)
```

### Ключовий висновок

Рівні діляться на дві групи:

**ПЕРВИННІ** (не виводяться, потребують окремого зберігання):
1. Archetype
2. Family
3. Canonical Work
4. Production Tradition
5. DAW Translation

**ВТОРИННІ** (виводяться або є атрибутами):
1. Historical Movement → атрибут Family (+ фільтр)
2. Scene → атрибут Family (+ tag)
3. Technique → вкладений у Production Tradition
4. Equipment → вкладений у Production Tradition

---

## 4. Пропозиція: нова структура даних

### Family (оновлена)

```js
{
  id: "dub-techno",
  name: "Dub Techno",
  
  // Існуючі поля
  bpm: "130–138",
  structuralProfile: "...",
  energyProfile: "...",
  commonMistakes: ["...", "..."],
  distinguishingFeatures: ["...", "..."],
  
  // НОВІ ПОЛЯ
  
  // Historical/Scene context (виводиться з works, але дублюється для зручності)
  period: "1994–2005",
  region: "Berlin / Detroit",
  scene: ["Berlin 90s", "Basic Chain Reaction"],
  keyLabels: ["Basic Channel", "Chain Reaction", "Echospace"],
  
  // Канонічні твори — РОЗШИРЕНІ
  canonicalTracks: [
    {
      title: "Radiance",
      artist: "Basic Channel",
      year: 1994,
      label: "Basic Channel",
      analysis: "Структура: sub-bass pulse → kick enters → delay wash → dissolve. Немає дропу. Форма = ревербераційний хвіст.",
      archetypeScores: { segmentation: 35, repetition: 85, contrast: 25, directionality: 45 },
      timeline: [
        { name: "Sub-bass pulse", time: "0:00" },
        { name: "Kick enters", time: "0:31" },
        { name: "Delay wash", time: "1:01" },
        { name: "Chord fragment", time: "2:01" },
        { name: "Dub delay decay", time: "3:01" },
        { name: "Dissolve", time: "4:31" }
      ]
    }
    // 9+ more
  ],
  
  // НОВЕ: Production Tradition
  productionTradition: {
    name: "Dub Techno Production (90s Berlin)",
    philosophy: "Мінімальний матеріал → максимальний простір. Sub-bass як фундамент. Обробка як формотворчий елемент.",
    
    coreTechniques: [
      {
        name: "Dub mixing (spring reverb, tape echo)",
        description: "Відправлення сигналу на ревербераційний сенд. Автоматизація повернення для створення простору.",
        dawTranslation: "Ableton: Return track → ValhallaVintageVerb → automate wet. FL: Fruity Reeverb 2 → automate mix."
      },
      {
        name: "Kick + sub-bass interplay",
        description: "Kick на кожну чверть з довгим хвостом (808 стиль). Sub-bass як окремий шар з довгими нотами.",
        dawTranslation: "Ableton: Operator sine wave → EQ (remove highs) → sidechain from kick."
      },
      {
        name: "Filter delay feedback",
        description: "Зациклений delay з фільтром високих частот. Повернення delay автоматизується для створення градацій простору.",
        dawTranslation: "FL: Patcher → Fruity Delay Bank → automate feedback → low-cut EQ."
      }
    ],
    
    listeningPathway: [
      "Basic Channel — Radiance (початок: delay як форма)",
      "Maurizio — M4 (розвиток: мінімальніший, більше sub)",
      "Deepchord — Vantage Isle (DC mix) (сучасний: мелодійніший)",
      "Fluxion — Static (текстурний: більше шуму, менше ритму)"
    ]
  },
  
  // Зв'язки
  relatedFamilies: ["detroit-techno", "deep-house", "ambient"],
  archetypeBridges: ["club-arc", "drone"]
}
```

### Структура UI: Два режими

```
┌─────────────────────────────────────────────────────┐
│ ◈ Classic Atlas    [By Archetype ●] [By History ○]   │
└─────────────────────────────────────────────────────┘
```

**Режим 1: By Archetype** (педагогічний — існуючий, з розширенням)

```
Archetype
  → Family (expandable)
      → Canonical Works (with analysis, timeline)
      → Production Tradition (expandable)
          → Core Techniques (with DAW translation)
```

**Режим 2: By History** (енциклопедичний — новий)

```
Period
  → Region / Scene
      → Families active in this period
          → Canonical Works
          → Production Tradition
```

---

## 5. Оцінка складності впровадження

| Компонент | Зміна даних | Зміна UI | Час |
|---|---|---|---|
| **Розширення Family** (period, scene, region) | Додати поля в JS-об'єкти | Badge / фільтр | 30 хв |
| **Canonical Work deep analysis** (timeline, archetypeScores) | Розширити `track()` helper | Картка твору з timeline | 1 год |
| **Production Tradition** | Новий об'єкт в family | Новий depth block | 1 год |
| **DAW Translation** | Вкладені в Tradition | Булочки з кодом | 30 хв |
| **By History mode** | period/region поля | Новий renderHistoryBrowse | 2 год |
| **Зв'язки (relatedFamilies, archetypeBridges)** | Нові поля | Chip/tag UI | 30 хв |
| **Listening Pathway** | Новий масив | Timeline-подібний UI | 30 хв |

**Всього нових блоків:** 5 (ProductionTradition, DAWTranslation, RelatedFamilies, ListeningPathway, ByHistory)

**Всього змін в існуючі об'єкти:** 3 (period, region, scene → added to existing families)

---

## 6. Що не ввійшло

- **Equipment / Workflow як окремий рівень** — занадто вузько. Інформація про обладнання вкладається в `productionTradition.coreTechniques` як контекст.
- **Historical Movement / Scene як окремі рівні** — виводяться з творів. Але поля `period`, `region`, `scene` в family зберігають цю інформацію.
- **Генерація сигнальних ланцюгів** — DAW chain diagrams (SVG). Можна додати пізніше.

---

## 7. Висновок

### Нова інформаційна архітектура Atlas v2

```
ПЕРВИННІ РІВНІ (зберігаються як дані):

1. Archetype          (існує) — абстрактна композиційна проблема
2. Family             (існує) — історична реалізація + period/region/scene
3. Canonical Work     (існує) — структурний аналіз твору з timeline
4. Production Trad.   (НОВИЙ) — філософія + техніки + DAW translation
5. DAW Translation    (НОВИЙ) — покрокові інструкції в Ableton/FL/Logic

ВТОРИННІ (виводяться або вкладені):

- Historical Movement → атрибут family (period + region)
- Scene → атрибут family (scene: [])
- Technique → вкладений у Production Tradition
- Equipment → вкладений у DAW Translation
```

### Що робити далі

1. **Негайно:** Оновити структуру даних (period, region, scene у families)
2. **Phase 1:** Deep-deploy одного архетипу (Drone або Club Arc) з повним набором:
   - Розширені canonical works (10-15, з глибоким аналізом)
   - Production Tradition (5+ технік з DAW translation)
   - Listening Pathway
   - Зв'язки до сусідніх families
3. **Phase 2:** Екстраполювати структуру на всі 10 архетипів
4. **Phase 3:** By History режим

---

*Цей аудит не змінює код, UI або дані. Це архітектурне рішення перед імплементацією.*