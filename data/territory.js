/* Atlas V3 — Territory (bilingual: name = EN, nameUk = UK). */
window.TERRITORY = [
  { id:"medieval", name:"Medieval", nameUk:"Середньовіччя", era:"500–1400", families:[
    { id:"med-chant", name:"Plainchant & Monophony", nameUk:"Плейнчант і монодія", forms:[
      {id:"med-gregorian", name:"Gregorian chant", nameUk:"Григоріанський хорал", macro:"VIII"},
      {id:"med-ambrosian", name:"Ambrosian chant", nameUk:"Амвросіанський спів", macro:"VIII"},
      {id:"med-byzantine", name:"Byzantine chant", nameUk:"Візантійський спів", macro:"VIII"},
      {id:"med-sequence", name:"Sequence", nameUk:"Секвенція", macro:"I"},
      {id:"med-trope", name:"Trope", nameUk:"Троп", macro:"I"},
      {id:"med-goliard", name:"Goliard song", nameUk:"Пісня вагантів", macro:"I"} ]},
    { id:"med-polyphony", name:"Early Polyphony", nameUk:"Рання поліфонія", forms:[
      {id:"med-organum-par", name:"Organum (parallel)", nameUk:"Органум (паралельний)", macro:"V"},
      {id:"med-organum-mel", name:"Organum (melismatic)", nameUk:"Органум (мелізматичний)", macro:"V"},
      {id:"med-conductus", name:"Conductus", nameUk:"Кондукт", macro:"I"},
      {id:"med-clausula", name:"Clausula", nameUk:"Клаузула", macro:"V"} ]},
    { id:"med-motet", name:"Medieval Motet", nameUk:"Середньовічний мотет", forms:[
      {id:"med-isorhythm", name:"Isorhythmic motet", nameUk:"Ізоритмічний мотет", macro:"III"},
      {id:"med-arsnova", name:"Ars Nova motet", nameUk:"Мотет Ars Nova", macro:"III"},
      {id:"med-notredame", name:"Notre-Dame motet", nameUk:"Мотет школи Нотр-Дам", macro:"V"},
      {id:"med-hocket", name:"Hocket", nameUk:"Гокет", macro:"V"} ]},
    { id:"med-fixes", name:"Formes Fixes", nameUk:"Тверді форми (formes fixes)", forms:[
      {id:"med-rondeau", name:"Rondeau", nameUk:"Рондо (rondeau)", macro:"II"},
      {id:"med-virelai", name:"Virelai", nameUk:"Віреле", macro:"I"},
      {id:"med-ballade", name:"Ballade (medieval)", nameUk:"Балада (середньовічна)", macro:"I"},
      {id:"med-lai", name:"Lai", nameUk:"Ле", macro:"I"} ]},
    { id:"med-secular", name:"Secular & Dance", nameUk:"Світські та танцювальні", forms:[
      {id:"med-estampie", name:"Estampie", nameUk:"Естампі", macro:"II"},
      {id:"med-ductia", name:"Ductia", nameUk:"Дукція", macro:"II"},
      {id:"med-cantiga", name:"Cantiga", nameUk:"Кантига", macro:"II"},
      {id:"med-canso", name:"Troubadour canso", nameUk:"Канцона трубадурів", macro:"I"} ]} ]},
  { id:"renaissance", name:"Renaissance", nameUk:"Ренесанс", era:"1400–1600", families:[
    { id:"ren-sacred", name:"Sacred Polyphony", nameUk:"Сакральна поліфонія", forms:[
      {id:"ren-cyclicmass", name:"Cyclic Mass", nameUk:"Циклічна меса", macro:"V"},
      {id:"ren-cfmass", name:"Cantus-firmus Mass", nameUk:"Меса на cantus firmus", macro:"V"},
      {id:"ren-parodymass", name:"Parody Mass", nameUk:"Пародійна меса", macro:"V"},
      {id:"ren-motet", name:"Imitative motet", nameUk:"Імітаційний мотет", macro:"V"},
      {id:"ren-lauda", name:"Lauda", nameUk:"Лауда", macro:"I"} ]},
    { id:"ren-secular", name:"Madrigal & Secular Song", nameUk:"Мадригал і світська пісня", forms:[
      {id:"ren-madrigal-it", name:"Italian madrigal", nameUk:"Італійський мадригал", macro:"IX"},
      {id:"ren-madrigal-en", name:"English madrigal", nameUk:"Англійський мадригал", macro:"IX"},
      {id:"ren-chanson", name:"Chanson", nameUk:"Шансон", macro:"I"},
      {id:"ren-frottola", name:"Frottola", nameUk:"Фроттола", macro:"I"},
      {id:"ren-villancico", name:"Villancico", nameUk:"Вільянсіко", macro:"II"} ]},
    { id:"ren-instrumental", name:"Instrumental", nameUk:"Інструментальні", forms:[
      {id:"ren-ricercar", name:"Ricercar", nameUk:"Річеркар", macro:"V"},
      {id:"ren-canzona", name:"Canzona", nameUk:"Канцона", macro:"V"},
      {id:"ren-fantasia", name:"Fantasia", nameUk:"Фантазія", macro:"V"},
      {id:"ren-tiento", name:"Tiento", nameUk:"Тьєнто", macro:"V"},
      {id:"ren-innomine", name:"In Nomine", nameUk:"In Nomine", macro:"V"} ]},
    { id:"ren-dance", name:"Renaissance Dance", nameUk:"Ренесансний танець", forms:[
      {id:"ren-pavane", name:"Pavane", nameUk:"Павана", macro:"I"},
      {id:"ren-galliard", name:"Galliard", nameUk:"Гальярда", macro:"I"},
      {id:"ren-bassedanse", name:"Basse danse", nameUk:"Бас-данс", macro:"I"},
      {id:"ren-allemande", name:"Allemande (early)", nameUk:"Алеманда (рання)", macro:"I"} ]},
    { id:"ren-variation", name:"Variation & Ground", nameUk:"Варіація та бас", forms:[
      {id:"ren-divisions", name:"Divisions on a ground", nameUk:"Дивізії на басу", macro:"VI", macro2:"III"},
      {id:"ren-romanesca", name:"Romanesca", nameUk:"Романеска", macro:"VI", macro2:"III"},
      {id:"ren-passamezzo", name:"Passamezzo", nameUk:"Пассамеццо", macro:"VI", macro2:"III"},
      {id:"ren-varsuite", name:"Variation suite", nameUk:"Варіаційна сюїта", macro:"III"} ]} ]},
  { id:"baroque", name:"Baroque", nameUk:"Бароко", era:"1600–1750", families:[
    { id:"bar-counterpoint", name:"Counterpoint", nameUk:"Контрапункт", forms:[
      {id:"bar-fugue", name:"Fugue", nameUk:"Фуга", macro:"V", star:true},
      {id:"bar-canon", name:"Canon", nameUk:"Канон", macro:"V"},
      {id:"bar-invention", name:"Invention", nameUk:"Інвенція", macro:"V"},
      {id:"bar-ricercar", name:"Ricercar (late)", nameUk:"Річеркар (пізній)", macro:"V"},
      {id:"bar-choraleprelude", name:"Chorale prelude", nameUk:"Хоральна прелюдія", macro:"V"},
      {id:"bar-sinfonia", name:"Sinfonia (3-voice)", nameUk:"Сінфонія (3-голосна)", macro:"V"} ]},
    { id:"bar-groundbass", name:"Ground-Bass Variation", nameUk:"Варіація на basso ostinato", forms:[
      {id:"bar-passacaglia", name:"Passacaglia", nameUk:"Пасакалія", macro:"VI", macro2:"III", star:true},
      {id:"bar-chaconne", name:"Chaconne", nameUk:"Чакона", macro:"VI", macro2:"III"},
      {id:"bar-groundbass", name:"Ground bass", nameUk:"Basso ostinato (граунд)", macro:"VI", macro2:"III"} ]},
    { id:"bar-concerto", name:"Concerto & Ritornello", nameUk:"Концерт і риторнель", forms:[
      {id:"bar-soloconcerto", name:"Solo concerto", nameUk:"Сольний концерт", macro:"II"},
      {id:"bar-concertogrosso", name:"Concerto grosso", nameUk:"Concerto grosso", macro:"II"},
      {id:"bar-ritornelloaria", name:"Ritornello aria", nameUk:"Арія з риторнелем", macro:"II"} ]},
    { id:"bar-suite", name:"Suite & Dance", nameUk:"Сюїта й танець", forms:[
      {id:"bar-allemande", name:"Allemande", nameUk:"Алеманда", macro:"I"},
      {id:"bar-courante", name:"Courante", nameUk:"Куранта", macro:"I"},
      {id:"bar-sarabande", name:"Sarabande", nameUk:"Сарабанда", macro:"I"},
      {id:"bar-gigue", name:"Gigue", nameUk:"Жига", macro:"I"},
      {id:"bar-minuet", name:"Minuet", nameUk:"Менует", macro:"I"},
      {id:"bar-bourree", name:"Bourrée", nameUk:"Бурре", macro:"I"},
      {id:"bar-gavotte", name:"Gavotte", nameUk:"Гавот", macro:"I"},
      {id:"bar-suite", name:"Suite (compiled)", nameUk:"Сюїта (зведена)", macro:"I"} ]},
    { id:"bar-vocal", name:"Aria & Vocal Drama", nameUk:"Арія та вокальна драма", forms:[
      {id:"bar-dacapo", name:"Da capo aria", nameUk:"Арія da capo", macro:"II"},
      {id:"bar-recitative", name:"Recitative", nameUk:"Речитатив", macro:"IX"},
      {id:"bar-frenchov", name:"French overture", nameUk:"Французька увертюра", macro:"IX"},
      {id:"bar-cantatamov", name:"Cantata movement", nameUk:"Частина кантати", macro:"II"},
      {id:"bar-passionchorale", name:"Passion chorale", nameUk:"Хорал у Пассіонах", macro:"V"} ]},
    { id:"bar-keyboard", name:"Keyboard Free Forms", nameUk:"Вільні клавірні форми", forms:[
      {id:"bar-prelude", name:"Prelude", nameUk:"Прелюдія", macro:"IX"},
      {id:"bar-toccata", name:"Toccata", nameUk:"Токата", macro:"IX"},
      {id:"bar-fantasia", name:"Fantasia (Baroque)", nameUk:"Фантазія (бароко)", macro:"IX"} ]} ]},
  { id:"classical", name:"Classical", nameUk:"Класицизм", era:"1750–1820", families:[
    { id:"cla-sonata", name:"Sonata Forms", nameUk:"Сонатні форми", forms:[
      {id:"cla-sonataallegro", name:"Sonata-allegro", nameUk:"Сонатне алегро", macro:"IV", arch:"sonata-allegro"},
      {id:"cla-sonatina", name:"Sonatina", nameUk:"Сонатина", macro:"IV"},
      {id:"cla-slowsonata", name:"Slow-movement sonata", nameUk:"Повільна сонатна форма", macro:"IV"},
      {id:"cla-sonatarondo", name:"Sonata-rondo", nameUk:"Сонатне рондо", macro:"IV", macro2:"II"},
      {id:"cla-concerto", name:"Concerto (double-exposition)", nameUk:"Концерт (подвійна експозиція)", macro:"IV"} ]},
    { id:"cla-rondo", name:"Classical Rondo", nameUk:"Класичне рондо", forms:[
      {id:"cla-rondo", name:"Rondo", nameUk:"Рондо", macro:"II", arch:"rondo"},
      {id:"cla-fivepartrondo", name:"Five-part rondo", nameUk:"П'ятичастинне рондо", macro:"II"} ]},
    { id:"cla-variation", name:"Classical Variation", nameUk:"Класична варіація", forms:[
      {id:"cla-themevar", name:"Theme & Variations", nameUk:"Тема з варіаціями", macro:"III", arch:"theme-variations"},
      {id:"cla-doublevar", name:"Double variations", nameUk:"Подвійні варіації", macro:"III"} ]},
    { id:"cla-dance", name:"Dance Movements", nameUk:"Танцювальні частини", forms:[
      {id:"cla-minuettrio", name:"Minuet & Trio", nameUk:"Менует і тріо", macro:"I"},
      {id:"cla-scherzo", name:"Scherzo", nameUk:"Скерцо", macro:"I"},
      {id:"cla-divertimento", name:"Divertimento", nameUk:"Дивертисмент", macro:"I"} ]} ]},
  { id:"romantic", name:"Romantic", nameUk:"Романтизм", era:"1820–1900", families:[
    { id:"rom-lied", name:"Art Song (Lied)", nameUk:"Художня пісня (Lied)", forms:[
      {id:"rom-strophiclied", name:"Strophic Lied", nameUk:"Строфічний Lied", macro:"I"},
      {id:"rom-modstrophic", name:"Modified-strophic Lied", nameUk:"Видозмінено-строфічний Lied", macro:"I"},
      {id:"rom-tclied", name:"Through-composed Lied", nameUk:"Наскрізний Lied", macro:"IX"},
      {id:"rom-songcycle", name:"Song cycle", nameUk:"Вокальний цикл", macro:"I"} ]},
    { id:"rom-character", name:"Character Piece", nameUk:"Характерна п'єса", forms:[
      {id:"rom-nocturne", name:"Nocturne", nameUk:"Ноктюрн", macro:"I"},
      {id:"rom-prelude", name:"Prelude (Romantic)", nameUk:"Прелюдія (романтична)", macro:"IX"},
      {id:"rom-etude", name:"Étude", nameUk:"Етюд", macro:"I"},
      {id:"rom-ballade", name:"Ballade", nameUk:"Балада", macro:"IX"},
      {id:"rom-intermezzo", name:"Intermezzo", nameUk:"Інтермецо", macro:"I"},
      {id:"rom-mazurka", name:"Mazurka", nameUk:"Мазурка", macro:"I"},
      {id:"rom-waltz", name:"Waltz", nameUk:"Вальс", macro:"I"},
      {id:"rom-impromptu", name:"Impromptu", nameUk:"Експромт", macro:"IX"} ]},
    { id:"rom-programme", name:"Programme Music", nameUk:"Програмна музика", forms:[
      {id:"rom-tonepoem", name:"Symphonic / tone poem", nameUk:"Симфонічна поема", macro:"IX"},
      {id:"rom-progsymph", name:"Programme symphony", nameUk:"Програмна симфонія", macro:"IX"},
      {id:"rom-concertoverture", name:"Concert overture", nameUk:"Концертна увертюра", macro:"IV"} ]},
    { id:"rom-cyclic", name:"Large Cyclic Form", nameUk:"Велика циклічна форма", forms:[
      {id:"rom-ideefixe", name:"Idée fixe / Cyclic transformation", nameUk:"Idée fixe / тематична трансформація", macro:"III"},
      {id:"rom-rhapsody", name:"Rhapsody", nameUk:"Рапсодія", macro:"IX"} ]} ]},
  { id:"modernist", name:"Modernist", nameUk:"Модернізм", era:"1900–now", families:[
    { id:"mod-serial", name:"Serial & Atonal", nameUk:"Серіалізм і атональність", forms:[
      {id:"mod-twelvetone", name:"Twelve-tone form", nameUk:"Додекафонія", macro:"IV"},
      {id:"mod-totalserial", name:"Total serialism", nameUk:"Тотальний серіалізм", macro:"IV"},
      {id:"mod-freeatonal", name:"Free atonal form", nameUk:"Вільна атональна форма", macro:"IX"} ]},
    { id:"mod-moment", name:"Moment & Open Form", nameUk:"Момент- і відкрита форма", forms:[
      {id:"mod-momentform", name:"Moment form", nameUk:"Момент-форма", macro:"XII", star:true},
      {id:"mod-openform", name:"Open / mobile form", nameUk:"Відкрита / мобільна форма", macro:"XII"},
      {id:"mod-aleatoric", name:"Aleatoric form", nameUk:"Алеаторика", macro:"XII"},
      {id:"mod-indeterminacy", name:"Indeterminacy", nameUk:"Індетермінізм", macro:"XII"} ]},
    { id:"mod-minimal", name:"Minimalism & Process", nameUk:"Мінімалізм і процес", forms:[
      {id:"mod-phase", name:"Phase music", nameUk:"Фазова музика", macro:"VII", arch:"process-minimal"},
      {id:"mod-additive", name:"Additive minimalism", nameUk:"Адитивний мінімалізм", macro:"VII", arch:"process-minimal"},
      {id:"mod-pulse", name:"Pulse minimalism", nameUk:"Пульсовий мінімалізм", macro:"VII", arch:"process-minimal"},
      {id:"mod-generative", name:"Generative", nameUk:"Генеративна музика", macro:"VII"},
      {id:"mod-tapeprocess", name:"Tape-process piece", nameUk:"Стрічковий процес", macro:"VII"} ]},
    { id:"mod-texture", name:"Texture & Spectral", nameUk:"Фактура та спектралізм", forms:[
      {id:"mod-micropoly", name:"Micropolyphony", nameUk:"Мікрополіфонія", macro:"VIII"},
      {id:"mod-soundmass", name:"Sound mass", nameUk:"Звукова маса", macro:"VIII"},
      {id:"mod-spectral", name:"Spectral form", nameUk:"Спектральна форма", macro:"VIII"},
      {id:"mod-klangfarben", name:"Klangfarben form", nameUk:"Klangfarbenmelodie", macro:"VIII"} ]},
    { id:"mod-collage", name:"Collage & Quotation", nameUk:"Колаж і цитата", forms:[
      {id:"mod-collage", name:"Collage", nameUk:"Колаж", macro:"XII"},
      {id:"mod-quotation", name:"Quotation montage", nameUk:"Цитатний монтаж", macro:"XII"} ]} ]},
  { id:"opera", name:"Opera / Vocal", nameUk:"Опера / Вокал", era:"1600–now", families:[
    { id:"op-number", name:"Number Opera", nameUk:"Номерна опера", forms:[
      {id:"op-number", name:"Recit–aria–ensemble number", nameUk:"Номер (речитатив–арія–ансамбль)", macro:"II"},
      {id:"op-ensemblefinale", name:"Ensemble finale", nameUk:"Ансамблевий фінал", macro:"I"},
      {id:"op-singspiel", name:"Singspiel number", nameUk:"Номер зінгшпілю", macro:"I"} ]},
    { id:"op-musicdrama", name:"Music Drama", nameUk:"Музична драма", forms:[
      {id:"op-leitmotif", name:"Leitmotif through-composition", nameUk:"Лейтмотивна наскрізність", macro:"IX"},
      {id:"op-endlessmelody", name:"Endless melody", nameUk:"Безкінечна мелодія", macro:"IX"},
      {id:"op-verismo", name:"Verismo scene", nameUk:"Сцена веризму", macro:"IX"} ]},
    { id:"op-aria", name:"Aria Forms", nameUk:"Арієві форми", forms:[
      {id:"op-cavatina", name:"Cavatina–cabaletta", nameUk:"Каватина–кабалета", macro:"II"},
      {id:"op-scena", name:"Scena & mad scene", nameUk:"Сцена та сцена божевілля", macro:"IX"},
      {id:"op-belcantoduet", name:"Bel canto duet", nameUk:"Дует бельканто", macro:"II"} ]},
    { id:"op-choral", name:"Choral-Operatic", nameUk:"Хорово-оперні", forms:[
      {id:"op-chorus", name:"Operatic chorus", nameUk:"Оперний хор", macro:"I"},
      {id:"op-overture", name:"Overture (operatic)", nameUk:"Увертюра (оперна)", macro:"IV"} ]} ]},
  { id:"sacred", name:"Sacred", nameUk:"Сакральна", era:"ancient–now", families:[
    { id:"sac-chant", name:"Liturgical Chant", nameUk:"Літургійний спів", forms:[
      {id:"sac-gregorian", name:"Gregorian chant", nameUk:"Григоріанський хорал", macro:"VIII"},
      {id:"sac-byzantine", name:"Byzantine chant", nameUk:"Візантійський спів", macro:"VIII"},
      {id:"sac-vedic", name:"Vedic chant", nameUk:"Ведійський спів", macro:"VIII"} ]},
    { id:"sac-mass", name:"Mass & Office", nameUk:"Меса й офіцій", forms:[
      {id:"sac-mass", name:"Mass setting", nameUk:"Меса", macro:"V"},
      {id:"sac-requiem", name:"Requiem", nameUk:"Реквієм", macro:"V"},
      {id:"sac-motet", name:"Sacred motet", nameUk:"Духовний мотет", macro:"V"},
      {id:"sac-magnificat", name:"Magnificat", nameUk:"Магніфікат", macro:"V"},
      {id:"sac-cantata", name:"Chorale cantata", nameUk:"Хоральна кантата", macro:"V"} ]},
    { id:"sac-hymnody", name:"Protestant Hymnody", nameUk:"Протестантська гимнодія", forms:[
      {id:"sac-chorale", name:"Chorale / Hymn", nameUk:"Хорал / гимн", macro:"I"},
      {id:"sac-fuging", name:"Shape-note fuging tune", nameUk:"Fuging tune (shape-note)", macro:"V"},
      {id:"sac-anthem", name:"Anthem", nameUk:"Антем", macro:"I"},
      {id:"sac-psalm", name:"Psalm setting", nameUk:"Псалмодія", macro:"I"} ]},
    { id:"sac-gospel", name:"Gospel & Spiritual", nameUk:"Госпел і спірічуел", forms:[
      {id:"sac-spiritual", name:"Spiritual", nameUk:"Спірічуел", macro:"I"},
      {id:"sac-gospelvamp", name:"Gospel vamp", nameUk:"Госпел-вамп", macro:"VI", improv:true},
      {id:"sac-shout", name:"Call-and-response shout", nameUk:"Заклик-відповідь (shout)", macro:"VI", improv:true} ]},
    { id:"sac-world", name:"World Sacred", nameUk:"Світова сакральна", forms:[
      {id:"sac-qawwali", name:"Qawwali", nameUk:"Каввалі", macro:"VI", improv:true},
      {id:"sac-kirtan", name:"Kirtan / Bhajan", nameUk:"Кіртан / бхаджан", macro:"VI"},
      {id:"sac-taize", name:"Taizé ostinato", nameUk:"Остинато Тезе", macro:"VI"},
      {id:"sac-throat", name:"Throat-singing chant", nameUk:"Горловий спів", macro:"VIII"} ]} ]},
  { id:"jazz", name:"Jazz", nameUk:"Джаз", era:"1900–now", families:[
    { id:"jaz-blues", name:"Blues", nameUk:"Блюз", forms:[
      {id:"jaz-12bar", name:"12-bar blues", nameUk:"12-тактовий блюз", macro:"VI", arch:"12-bar-blues", star:true},
      {id:"jaz-8bar", name:"8-bar blues", nameUk:"8-тактовий блюз", macro:"VI"},
      {id:"jaz-16bar", name:"16-bar blues", nameUk:"16-тактовий блюз", macro:"VI"},
      {id:"jaz-birdblues", name:"Jazz / Bird blues", nameUk:"Джазовий («бьордовий») блюз", macro:"VI"},
      {id:"jaz-minorblues", name:"Minor blues", nameUk:"Мінорний блюз", macro:"VI"} ]},
    { id:"jaz-changes", name:"Standards & Changes", nameUk:"Стандарти й гармонії", forms:[
      {id:"jaz-aaba", name:"AABA standard", nameUk:"Стандарт AABA", macro:"I"},
      {id:"jaz-rhythmchanges", name:"Rhythm changes", nameUk:"Rhythm changes", macro:"VI"},
      {id:"jaz-contrafact", name:"Contrafact", nameUk:"Контрафакт", macro:"VI"},
      {id:"jaz-ballad", name:"Ballad", nameUk:"Балада", macro:"II"} ]},
    { id:"jaz-modal", name:"Modal & Vamp", nameUk:"Модальний і вамп", forms:[
      {id:"jaz-modal", name:"Modal jazz", nameUk:"Модальний джаз", macro:"VI", improv:true},
      {id:"jaz-vamp", name:"Vamp / pedal-point", nameUk:"Вамп / педальний пункт", macro:"VI", improv:true} ]},
    { id:"jaz-head", name:"Head-Solo-Head", nameUk:"Head-Solo-Head", forms:[
      {id:"jaz-bebop", name:"Bebop head", nameUk:"Бібоп head", macro:"II", arch:"head-solo-head", improv:true},
      {id:"jaz-hardbop", name:"Hard-bop head", nameUk:"Гард-боп head", macro:"II", improv:true},
      {id:"jaz-coolhead", name:"Cool head", nameUk:"Кул head", macro:"II", improv:true} ]},
    { id:"jaz-bigband", name:"Big Band", nameUk:"Біг-бенд", forms:[
      {id:"jaz-chart", name:"Big-band chart", nameUk:"Біг-бенд аранжування", macro:"II"},
      {id:"jaz-shout", name:"Shout-chorus arc", nameUk:"Shout-chorus", macro:"II"},
      {id:"jaz-swing", name:"Swing chart", nameUk:"Свінгове аранжування", macro:"II"} ]},
    { id:"jaz-freelatin", name:"Free & Latin", nameUk:"Фрі та латина", forms:[
      {id:"jaz-free", name:"Free / energy form", nameUk:"Фрі / енергетична форма", macro:"XII", improv:true},
      {id:"jaz-latin", name:"Latin / clave jazz", nameUk:"Латинський / клаве-джаз", macro:"VI"},
      {id:"jaz-stride", name:"Stride form", nameUk:"Страйд", macro:"I"} ]} ]},
  { id:"folk", name:"Folk / World", nameUk:"Фолк / Світ", era:"trad.–now", families:[
    { id:"folk-strophic", name:"Strophic Folk Song", nameUk:"Строфічна народна пісня", forms:[
      {id:"folk-ballad", name:"Strophic ballad", nameUk:"Строфічна балада", macro:"I"},
      {id:"folk-murder", name:"Murder ballad", nameUk:"Балада-вбивство", macro:"I"},
      {id:"folk-lullaby", name:"Lullaby", nameUk:"Колискова", macro:"I"} ]},
    { id:"folk-dance", name:"Dance Tune", nameUk:"Танцювальна мелодія", forms:[
      {id:"folk-reel", name:"Reel", nameUk:"Рил", macro:"I"},
      {id:"folk-jig", name:"Jig", nameUk:"Джига", macro:"I"},
      {id:"folk-slipjig", name:"Slip jig", nameUk:"Сліп-джига", macro:"I"},
      {id:"folk-hornpipe", name:"Hornpipe", nameUk:"Горнпайп", macro:"I"},
      {id:"folk-polka", name:"Polka", nameUk:"Полька", macro:"I"},
      {id:"folk-air", name:"Air / slow air", nameUk:"Ер / повільна мелодія", macro:"I"},
      {id:"folk-strathspey", name:"Strathspey", nameUk:"Стретспей", macro:"I"} ]},
    { id:"folk-drone", name:"Drone-Based Folk", nameUk:"Народна музика на дроні", forms:[
      {id:"folk-pibroch", name:"Bagpipe pibroch", nameUk:"Пиброх (волинка)", macro:"VIII", improv:true},
      {id:"folk-hurdygurdy", name:"Hurdy-gurdy tune", nameUk:"Мелодія для колісної ліри", macro:"VIII"},
      {id:"folk-dronetune", name:"Tanpura drone song", nameUk:"Мелодія на дроні (танпура)", macro:"VIII"} ]},
    { id:"folk-raga", name:"Modal Improvisation", nameUk:"Модальна імпровізація", forms:[
      {id:"folk-hindustani", name:"Hindustani raga", nameUk:"Гіндустанська рага", macro:"VI", star:true, improv:true},
      {id:"folk-carnatic", name:"Carnatic kriti", nameUk:"Карнатична крті", macro:"VI", improv:true},
      {id:"folk-maqam", name:"Maqam taqsim", nameUk:"Макам / таксім", macro:"VI", improv:true} ]},
    { id:"folk-cyclic", name:"Cyclic World", nameUk:"Циклічна світова", forms:[
      {id:"folk-gamelan", name:"Gamelan gongan", nameUk:"Гамелан (ґонґан)", macro:"VI"},
      {id:"folk-son", name:"Son montuno", nameUk:"Сон-монтуно", macro:"VI"},
      {id:"folk-rumba", name:"Rumba clave", nameUk:"Румба-клаве", macro:"VI"},
      {id:"folk-flamenco", name:"Flamenco bulería", nameUk:"Фламенко-булеріас", macro:"VI", improv:true},
      {id:"folk-highlife", name:"Highlife groove", nameUk:"Хайлайф-грув", macro:"VI"},
      {id:"folk-mbira", name:"Mbira cycle", nameUk:"Цикл мбіра", macro:"VI"} ]},
    { id:"folk-polyphony", name:"Folk Polyphony", nameUk:"Народна поліфонія", forms:[
      {id:"folk-round", name:"Round / catch", nameUk:"Раунд / кетч", macro:"V"},
      {id:"folk-georgian", name:"Georgian polyphony", nameUk:"Грузинська поліфонія", macro:"V"},
      {id:"folk-sacredharp", name:"Sacred Harp", nameUk:"Sacred Harp", macro:"V"} ]} ]},
  { id:"poprock", name:"Pop / Rock", nameUk:"Поп / Рок", era:"1955–now", families:[
    { id:"pop-song", name:"Pop/Rock Song", nameUk:"Поп/рок-пісня", forms:[
      {id:"pop-versechorus", name:"Verse-Chorus", nameUk:"Куплет-приспів", macro:"I", arch:"verse-chorus", star:true},
      {id:"pop-vcb", name:"Verse-Chorus-Bridge", nameUk:"Куплет-приспів-брідж", macro:"I"},
      {id:"pop-aaba", name:"AABA (pop)", nameUk:"AABA (поп)", macro:"I"},
      {id:"pop-strophic", name:"Strophic rock", nameUk:"Строфічний рок", macro:"I"},
      {id:"pop-anthem", name:"Anthem", nameUk:"Анхем (гімн)", macro:"I"},
      {id:"pop-doowop", name:"Doo-wop", nameUk:"Ду-воп", macro:"VI"} ]},
    { id:"pop-riff", name:"Riff-Based Rock / Metal", nameUk:"Риф-рок / метал", forms:[
      {id:"pop-riff", name:"Riff form", nameUk:"Риф-форма", macro:"VI"},
      {id:"pop-powerballad", name:"Power-ballad arc", nameUk:"Пауер-балада", macro:"I"},
      {id:"pop-breakdown", name:"Breakdown form (metal)", nameUk:"Брейкдаун (метал)", macro:"VI"} ]},
    { id:"pop-prog", name:"Progressive & Art Rock", nameUk:"Прогресив і арт-рок", forms:[
      {id:"pop-progsuite", name:"Prog suite", nameUk:"Прог-сюїта", macro:"IX", arch:"through-composed"},
      {id:"pop-tcepic", name:"Through-composed epic", nameUk:"Наскрізний епік", macro:"IX"},
      {id:"pop-postrock", name:"Post-rock crescendo", nameUk:"Пост-рок крещендо", macro:"IX"},
      {id:"pop-mathrock", name:"Math-rock cells", nameUk:"Мат-рок (комірки)", macro:"VII"} ]},
    { id:"pop-rnb", name:"R&B / Soul / Funk", nameUk:"R&B / соул / фанк", forms:[
      {id:"pop-rnbvamp", name:"R&B vamp song", nameUk:"R&B-вамп пісня", macro:"VI"},
      {id:"pop-funk", name:"Funk one-chord vamp", nameUk:"Фанк (вамп на одному акорді)", macro:"VI"},
      {id:"pop-soulballad", name:"Soul ballad", nameUk:"Соул-балада", macro:"I"} ]},
    { id:"pop-synth", name:"Electronic-adjacent Pop", nameUk:"Електронно-орієнтований поп", forms:[
      {id:"pop-synthpop", name:"Synth-pop song", nameUk:"Синті-поп пісня", macro:"I"},
      {id:"pop-hyperpop", name:"Hyperpop", nameUk:"Гіперпоп", macro:"I"},
      {id:"pop-shoegaze", name:"Shoegaze wall", nameUk:"Шуґейз-стіна", macro:"VIII"} ]} ]},
  { id:"electronic", name:"Electronic / Club", nameUk:"Електроніка / Клуб", era:"1978–now", families:[
    { id:"el-house", name:"House", nameUk:"Хаус", forms:[
      {id:"el-chicago", name:"Chicago House", nameUk:"Чиказький хаус", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-deephouse", name:"Deep House", nameUk:"Діп-хаус", macro:"VI", arch:"club-arc"},
      {id:"el-acidhouse", name:"Acid House", nameUk:"Ейсид-хаус", macro:"VI"},
      {id:"el-techhouse", name:"Tech House", nameUk:"Тек-хаус", macro:"VI", arch:"club-arc"},
      {id:"el-garagehouse", name:"Garage House", nameUk:"Ґаредж-хаус", macro:"VI"},
      {id:"el-proghouse", name:"Progressive House", nameUk:"Прогресив-хаус", macro:"VI", arch:"club-arc"} ]},
    { id:"el-techno", name:"Techno", nameUk:"Техно", forms:[
      {id:"el-detroit", name:"Detroit Techno", nameUk:"Детройтське техно", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-dub", name:"Dub Techno", nameUk:"Даб-техно", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-minimal", name:"Minimal Techno", nameUk:"Мінімал-техно", macro:"VI", arch:"club-arc"},
      {id:"el-berlin", name:"Berlin Techno", nameUk:"Берлінське техно", macro:"VI"},
      {id:"el-hard", name:"Hard Techno", nameUk:"Гард-техно", macro:"VI"},
      {id:"el-industrial", name:"Industrial Techno", nameUk:"Індастріал-техно", macro:"VI"} ]},
    { id:"el-trance", name:"Trance", nameUk:"Транс", forms:[
      {id:"el-uplifting", name:"Uplifting Trance", nameUk:"Аплифтінг-транс", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-psy", name:"Psytrance", nameUk:"Психоделічний транс", macro:"VI", arch:"club-arc"},
      {id:"el-progtrance", name:"Progressive Trance", nameUk:"Прогресив-транс", macro:"VI"} ]},
    { id:"el-bass", name:"Bass Music", nameUk:"Бас-музика", forms:[
      {id:"el-deepdubstep", name:"Deep Dubstep", nameUk:"Діп-дабстеп", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-brostep", name:"Brostep", nameUk:"Бростеп", macro:"VI", arch:"club-arc"},
      {id:"el-grime", name:"Grime", nameUk:"Ґрайм", macro:"VI"},
      {id:"el-footwork", name:"Footwork", nameUk:"Футворк", macro:"VI"},
      {id:"el-ukgarage", name:"UK Garage", nameUk:"UK ґаредж", macro:"VI"},
      {id:"el-2step", name:"2-step", nameUk:"2-step", macro:"VI"} ]},
    { id:"el-dnb", name:"Drum & Bass / Jungle", nameUk:"Драм-енд-бас / джангл", forms:[
      {id:"el-neurofunk", name:"Neurofunk", nameUk:"Нейрофанк", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-liquid", name:"Liquid DnB", nameUk:"Liquid DnB", macro:"VI", arch:"club-arc"},
      {id:"el-jungle", name:"Jungle", nameUk:"Джангл", macro:"VI"},
      {id:"el-jumpup", name:"Jump-up", nameUk:"Джамп-ап", macro:"VI"} ]},
    { id:"el-ambient", name:"Ambient / Drone", nameUk:"Ембієнт / дрон", forms:[
      {id:"el-ambient", name:"Ambient", nameUk:"Ембієнт", macro:"VIII", arch:"drone"},
      {id:"el-darkambient", name:"Dark Ambient", nameUk:"Дарк-ембієнт", macro:"VIII", arch:"drone"},
      {id:"el-droneambient", name:"Drone Ambient", nameUk:"Дрон-ембієнт", macro:"VIII", arch:"drone"},
      {id:"el-isolationist", name:"Isolationist", nameUk:"Ізоляціонізм", macro:"VIII", arch:"drone"} ]},
    { id:"el-idm", name:"IDM / Glitch", nameUk:"IDM / гліч", forms:[
      {id:"el-idm", name:"IDM", nameUk:"IDM", macro:"IX", arch:"through-composed"},
      {id:"el-glitch", name:"Glitch", nameUk:"Ґліч", macro:"IX"} ]},
    { id:"el-beat", name:"Beat / Hip-Hop", nameUk:"Біт / хіп-хоп", forms:[
      {id:"el-boombap", name:"Boom bap", nameUk:"Бум-бап", macro:"VI"},
      {id:"el-trap", name:"Trap", nameUk:"Треп", macro:"VI"},
      {id:"el-lofi", name:"Lo-fi beat", nameUk:"Lo-fi біт", macro:"VI"},
      {id:"el-gfunk", name:"G-funk", nameUk:"Джі-фанк", macro:"VI"} ]},
    { id:"el-experimental", name:"Experimental Electronic", nameUk:"Експериментальна електроніка", forms:[
      {id:"el-plunderphonics", name:"Plunderphonics", nameUk:"Плендерфонікс", macro:"XII"},
      {id:"el-breakcore", name:"Breakcore", nameUk:"Брейккор", macro:"XII"},
      {id:"el-musiqueconcrete", name:"Musique concrète", nameUk:"Конкретна музика", macro:"XII"},
      {id:"el-downtempo", name:"Downtempo / Trip-hop", nameUk:"Даунтемпо / трип-хоп", macro:"VI"},
      {id:"el-electro", name:"Electro", nameUk:"Електро", macro:"VI"},
      {id:"el-hardstyle", name:"Hardstyle", nameUk:"Гардстайл", macro:"VI"},
      {id:"el-synthwave", name:"Synthwave", nameUk:"Синтвейв", macro:"I"},
      {id:"el-vaporwave", name:"Vaporwave", nameUk:"Вейпорвейв", macro:"XII"} ]} ]}
];
