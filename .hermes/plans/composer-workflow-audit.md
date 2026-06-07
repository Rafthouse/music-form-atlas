# Composer Workflow Audit

## Питання аудиту

Чи може Atlas провести користувача від аналізу музики до написання власного твору?

## Метод

Для двох family (Dub Techno, Detroit Techno) побудовано повний шлях:

```
Family → Canonical Works → Production Tradition → DAW Translation
→ Composition Recipe → Track Blueprint
```

Перші чотири рівні — існуючі дані. Останні два — нові, створені для аудиту.

## Перевірка Dub Techno

### Що є (існуючий контент)

| Рівень | Статус | Деталі |
|--------|--------|--------|
| Family Description | ✅ | structuralProfile + energyProfile + distinguishingFeatures |
| Canonical Works | ✅ | 12 tracks з analysis, timeline, productionNotes, historicalContext |
| Production Tradition | ⚠️ | 5 coreTechniques, listeningPathway — **немає philosophy** |
| DAW Translation | ✅ | Ableton/FL Studio/Logic для кожної техніки |
| Composition Recipe | ❌ | Відсутній |
| Track Blueprint | ❌ | Відсутній |

### Проміжний висновок

Студент має:
- 12 прикладів (що зроблено)
- 5 технік з DAW-інструкціями (як зроблено)
- listeningPathway (як почути)

**Але не має:**
- Як прийняти перше композиційне рішення
- Як вибрати, що робити першим
- Як поєднати техніки в послідовність
- Скільки часу приділити кожному етапу

### Відсутній Composition Recipe (створено для тесту)

```yaml
compositionRecipe:
  name: "Даб-техно: простір як матеріал"
  steps:
    - step: 1
      name: "Підготовка простору"
      decision: "Обираю один send-канал з ревербом (Lexicon IR, decay 10-15s)"
      duration: "5 хв"
      dawAction: "Створити return-трек 1 (Reverb) та return-трек 2 (Delay 1/4T dotted)"
    - step: 2
      name: "Імпульс (Kick)"
      decision: "Обираю тембр кіка — сухий, з довгим хвостом через send"
      duration: "10 хв"
      dawAction: "Програмувати 4/4 kick. Send на Reverb ~50%. Один луп 8 тактів"
    - step: 3
      name: "Суббас — одна нота (або дві)"
      decision: "Яка частота резонує з тональністю? 40-60 Hz"
      duration: "15 хв"
      dawAction: "Синусоїда, low-pass 80Hz. Граю одну ноту. Send на Delay 1/4T dotted"
    - step: 4
      name: "Затримка створює ритм"
      decision: "Delay feedback: 60-80% — скільки повторень потрібно?"
      duration: "10 хв"
      dawAction: "Налаштувати feedback так, щоб повторення зникали за 4 такти"
    - step: 5
      name: "Текстура (шум / пад)"
      decision: "Обираю один текстурний шар — польовий запис або синтезований шум"
      duration: "15 хв"
      dawAction: "Додати шумовий трек. Send на Reverb 70%. Low-pass 2kHz"
    - step: 6
      name: "Фільтр як форма"
      decision: "Коли відкривається фільтр? (на 30% треку)"
      duration: "10 хв"
      dawAction: "Одна лінія автоматизації Cutoff: 200Hz → 5kHz → 200Hz"
    - step: 7
      name: "Архітектура без дропу"
      decision: "Нічого не знімати. Додавати повільно"
      duration: "5 хв"
      dawAction: "Розставити час входу елементів: kick(0:00) → sub(1:30) → texture(3:00) → filter open(5:00)"
    - step: 8
      name: "Розчинення"
      decision: "Як завершити? Залишити тільки реверб"
      duration: "5 хв"
      dawAction: "Автоматизувати send-рівні вниз. Залишити reverb tail на 10-15s"
```

### Track Blueprint для Dub Techno (створено для тесту)

```yaml
trackBlueprint:
  title: "Структура даб-техно треку (8:00)"
  bpm: 124
  key: C (без акордів — тільки субчастота)
  totalDuration: "8:00"
  sections:
    - section: "Intro — простір"
      time: "0:00–1:30"
      elements: [reverb_only, field_recording]
      action: "Ревéрб без джерела. Шум дощу або кімнати"
    - section: "Pulse — кік входить"
      time: "1:30–3:00"
      elements: [kick, reverb_tail]
      action: "4/4 кік. Кожен удар з довгим хвостом"
    - section: "Weight — суббас"
      time: "3:00–4:30"
      elements: [kick, sub, delay]
      action: "Одна нота C (40Hz). Delay створює ритм"
    - section: "Space — текстура"
      time: "4:30–6:00"
      elements: [kick, sub, delay, noise_pad]
      action: "Шумовий пад через реверб. Фільтр повільно відкривається"
    - section: "Depth — максимальна глибина"
      time: "6:00–7:00"
      elements: [kick, sub, delay, noise, filter_open]
      action: "Фільтр на максимумі. Найширший простір"
    - section: "Dissolve — розчинення"
      time: "7:00–8:00"
      elements: [reverb_tail]
      action: "Зняти kick. Залишити тільки реверб і delay trails"
  mixChecklist:
    - "Моно-сумісність: суббас у mono, kick у mono, ефекти stereo"
    - "Рівні: kick -6dB, sub -10dB, texture -14dB, reverb return -12dB"
    - "Кросовер: kick + sub не конфліктують (kick 100Hz, sub 40Hz)"
```

---

## Перевірка Detroit Techno

### Що є (існуючий контент)

| Рівень | Статус | Деталі |
|--------|--------|--------|
| Family Description | ✅ | structuralProfile + energyProfile + distinguishingFeatures |
| Canonical Works | ✅ | 11 tracks з analysis, timeline, historicalContext, productionNotes |
| Production Tradition | ✅ | philosophy + 4 coreTechniques + listeningPathway — **найповніший** |
| DAW Translation | ✅ | Ableton/FL Studio/Logic для кожної техніки |
| Composition Recipe | ❌ | Відсутній |
| Track Blueprint | ❌ | Відсутній |

### Проміжний висновок

Detroit Techno має philosophy — це вже допомагає студенту зрозуміти «чому», а не тільки «як». Але все ще немає Composition Recipe і Track Blueprint.

### Composition Recipe для Detroit Techno (створено для тесту)

```yaml
compositionRecipe:
  name: "Детройтське техно: машинна душа"
  steps:
    - step: 1
      name: "Вибір драм-машини"
      decision: "TR-808 чи TR-909? 808 — тепліше, 909 — агресивніше"
      duration: "10 хв"
      dawAction: "Обрати семпли 808 або 909. Kick: сухий, без ревербу"
    - step: 2
      name: "Лінійне нашарування (basis)"
      decision: "Починаю тільки з kick + секвенція"
      duration: "15 хв"
      dawAction: "Kick на 1/4 + одна синтезаторна секвенція на 8 тактів. Нічого більше"
    - step: 3
      name: "Додавання ритмічних шарів (3 шари)"
      decision: "Hi-hat → Snare → Clap: по одному кожні 16 тактів"
      duration: "15 хв"
      dawAction: "Scene 1: kick. Scene 2: + hi-hat. Scene 3: + snare + clap"
    - step: 4
      name: "Мінімальна автоматизація"
      decision: "Один параметр, повільна зміна"
      duration: "10 хв"
      dawAction: "Одна лінія: Cutoff 30% → 45% за 64 такти. Smooth 100%"
    - step: 5
      name: "Акорди (струнні / пад)"
      decision: "Juno-60 стиль: довгі maj7/min7 акорди"
      duration: "15 хв"
      dawAction: "Saw + Pulse, Chorus, Low-pass. Акорди цілими нотами"
    - step: 6
      name: "Брейк (структурний контраст)"
      decision: "Що зняти на брейку? Snare + hi-hat. Залишити kick + акорди"
      duration: "10 хв"
      dawAction: "Зняти snare/clap на 8 тактів. Повернути з посиленням"
    - step: 7
      name: "Аутро — не затухання, а зупинка"
      decision: "Техно не «затухає» — воно зупиняється або продовжує до кінця треку"
      duration: "5 хв"
      dawAction: "Зняти елементи по одному: секвенція → акорди → hi-hat → snare → kick"
```

### Track Blueprint для Detroit Techno (створено для тесту)

```yaml
trackBlueprint:
  title: "Структура детройтського техно-треку (6:30)"
  bpm: 132
  key: D min (акорди: Dm7, Gmaj7, Am7)
  totalDuration: "6:30"
  sections:
    - section: "Intro — секвенція"
      time: "0:00–1:00"
      elements: [synth_sequence, kick]
      action: "Секвенція (8th notes) + kick 4/4. Жодного ревербу"
    - section: "Build — додавання ритму"
      time: "1:00–2:00"
      elements: [+hi-hat, +snare]
      action: "Hi-hat на 8th, snare на 2 & 4. Velocity варіації"
    - section: "Harmony — акорди входять"
      time: "2:00–3:00"
      elements: [+juno_pad]
      action: "Juno-60 акорди Dm7-Gmaj7-Am7, довгі, через хорус"
    - section: "Depth — повільна модуляція"
      time: "3:00–4:00"
      elements: [всі, filter_cutoff_30%]
      action: "Cutoff автоматизація непомітно змінює тембр"
    - section: "Break — контраст"
      time: "4:00–4:45"
      elements: [kick, synth_sequence, juno_pad]
      action: "Зняти snare та hi-hat. Залишити kick + акорди + секвенцію"
    - section: "Return — посилення"
      time: "4:45–5:45"
      elements: [всі + hi-hat_16th]
      action: "Повернути snare + додати hi-hat 16th для руху"
    - section: "Outro — розбирання"
      time: "5:45–6:30"
      elements: [зняття по одному]
      action: "Snare → hi-hat → акорди → секвенція → kick"
  mixChecklist:
    - "Сухий мікс: мінімум ревербу на ударних"
    - "Kick + Sub: без кросовера (kick 100-200Hz, sub 40-80Hz)"
    - "Velocity: основні удари 110, акцентні 127, слабкі 90"
    - "Стерео: тільки акорди та реверб. Kick + бас — mono"
```

---

## Результати аудиту

### Що працює

1. **Canonical Works** — найсильніший рівень. 10+ треків з аналізом дають студенту глибоке розуміння «що було зроблено».
2. **Production Tradition + DAW Translation** — сильний зв'язок між технікою та інструментом. Студент може одразу спробувати в DAW.
3. **ListeningPathway** — вчить чути важливе (простір, delay, відсутність дропу).

### Що не працює (Gap Analysis)

| Проблема | Деталі |
|----------|--------|
| **Немає «першого кроку»** | Студент має 11-12 прикладів, але не знає, з чого почати свій трек |
| **Техніки ізольовані** | 5 технік дані окремо; немає інструкції, як їх поєднати в послідовність |
| **Часова шкала відсутня** | Студент не знає, скільки часу приділити кожному етапу |
| **Відсутній композиційний вибір** | Дані показують «як зроблено», але не «як вирішити, що робити» |
| **Немає bridge між аналізом та синтезом** | Аналіз відповідає «що» і «як», але не «що робити мені зараз» |

### Що потрібно додати

1. **CompositionRecipe** (структурований рецепт 7-8 кроків)
   - Синтезує canonical patterns + production techniques
   - Дає порядок дій
   - Кожен крок: рішення → дія → тривалість
   - Вирішує: «як почати?» і «що робити далі?»

2. **TrackBlueprint** (конкретний план треку)
   - Фіксований BPM, тональність, тривалість
   - Секційна структура з часами
   - Перелік елементів у кожній секції
   - Мікшерний чеклист
   - Дає: «ось готовий план — роби»

3. **Key Decision Points** (факультативно)
   - Найважливіші моменти вибору в кожній family
   - Наприклад: «обираю між 808 та 909» або «обираю одну ноту vs дві ноти басу»

### Висновок

**Atlas може провести від аналізу до написання, АЛЕ з додаванням двох рівнів:**

- Composition Recipe — перетворює «як зроблено» на «що робити»
- Track Blueprint — дає конкретний план дій

Без них студент отримує чудовий аналітичний інструмент, який відповідає «що таке Dub Techno» — але не «як написати Dub Techno трек».

### Рекомендація

Додати CompositionRecipe та TrackBlueprint як обов'язкові рівні для кожної family.

Це змінює структуру family:

```
Family
├── metadata (period, region, scene, keyLabels)
├── structuralProfile + energyProfile
├── canonicalTracks[] (10+)
├── productionTradition
│   ├── philosophy
│   ├── coreTechniques[] (з DAW Translation)
│   └── listeningPathway[]
├── compositionRecipe          ← НОВИЙ
│   └── steps[] (7-8 кроків)
├── trackBlueprint             ← НОВИЙ
│   ├── sections[]
│   ├── mixChecklist[]
│   └── metadata (bpm, key, duration)
├── commonMistakes[]
└── distinguishingFeatures[]
```

### Dub Techno — специфічна проблема

На відміну від Detroit Techno, Dub Techno family **не має philosophy** в productionTradition. Для повноти потрібно додати:

> **Philosophy:** «Даб-техно — це музика простору, а не подій. Кожен трек — це звукове приміщення, де слухач знаходиться, а не подорож, якою він рухається. Форма не лінійна — вона циклічна. Матеріал мінімальний, але обробка (reverb, delay) створює ілюзію складності. Реверберація — не ефект, а головний інструмент.»

Це додає відсутнє «чому» до наявного «як».