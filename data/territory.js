/* Atlas V3 — Phase 1 Territory (breadth stubs).
   Civilization -> Family -> Form. Forms are stubs unless `arch` links to an
   existing formArchetypes entry (full content). Flags: deep, star, improv.
   macro = frozen macro-archetype id (I,II,III,IV,V,VI,VII,VIII,IX,XII).
   This file carries NO descriptions — it makes the territory VISIBLE. */
window.TERRITORY = [
  { id:"medieval", name:"Medieval", nameUk:"Середньовіччя", era:"500–1400", families:[
    { id:"med-chant", name:"Plainchant & Monophony", forms:[
      {id:"med-gregorian", name:"Gregorian chant", macro:"VIII"},
      {id:"med-ambrosian", name:"Ambrosian chant", macro:"VIII"},
      {id:"med-byzantine", name:"Byzantine chant", macro:"VIII"},
      {id:"med-sequence", name:"Sequence", macro:"I"},
      {id:"med-trope", name:"Trope", macro:"I"},
      {id:"med-goliard", name:"Goliard song", macro:"I"} ]},
    { id:"med-polyphony", name:"Early Polyphony", forms:[
      {id:"med-organum-par", name:"Organum (parallel)", macro:"V"},
      {id:"med-organum-mel", name:"Organum (melismatic)", macro:"V"},
      {id:"med-conductus", name:"Conductus", macro:"I"},
      {id:"med-clausula", name:"Clausula", macro:"V"} ]},
    { id:"med-motet", name:"Medieval Motet", forms:[
      {id:"med-isorhythm", name:"Isorhythmic motet", macro:"III"},
      {id:"med-arsnova", name:"Ars Nova motet", macro:"III"},
      {id:"med-notredame", name:"Notre-Dame motet", macro:"V"},
      {id:"med-hocket", name:"Hocket", macro:"V"} ]},
    { id:"med-fixes", name:"Formes Fixes", forms:[
      {id:"med-rondeau", name:"Rondeau", macro:"II"},
      {id:"med-virelai", name:"Virelai", macro:"I"},
      {id:"med-ballade", name:"Ballade (medieval)", macro:"I"},
      {id:"med-lai", name:"Lai", macro:"I"} ]},
    { id:"med-secular", name:"Secular & Dance", forms:[
      {id:"med-estampie", name:"Estampie", macro:"II"},
      {id:"med-ductia", name:"Ductia", macro:"II"},
      {id:"med-cantiga", name:"Cantiga", macro:"II"},
      {id:"med-canso", name:"Troubadour canso", macro:"I"} ]} ]},

  { id:"renaissance", name:"Renaissance", nameUk:"Ренесанс", era:"1400–1600", families:[
    { id:"ren-sacred", name:"Sacred Polyphony", forms:[
      {id:"ren-cyclicmass", name:"Cyclic Mass", macro:"V"},
      {id:"ren-cfmass", name:"Cantus-firmus Mass", macro:"V"},
      {id:"ren-parodymass", name:"Parody Mass", macro:"V"},
      {id:"ren-motet", name:"Imitative motet", macro:"V"},
      {id:"ren-lauda", name:"Lauda", macro:"I"} ]},
    { id:"ren-secular", name:"Madrigal & Secular Song", forms:[
      {id:"ren-madrigal-it", name:"Italian madrigal", macro:"IX"},
      {id:"ren-madrigal-en", name:"English madrigal", macro:"IX"},
      {id:"ren-chanson", name:"Chanson", macro:"I"},
      {id:"ren-frottola", name:"Frottola", macro:"I"},
      {id:"ren-villancico", name:"Villancico", macro:"II"} ]},
    { id:"ren-instrumental", name:"Instrumental", forms:[
      {id:"ren-ricercar", name:"Ricercar", macro:"V"},
      {id:"ren-canzona", name:"Canzona", macro:"V"},
      {id:"ren-fantasia", name:"Fantasia", macro:"V"},
      {id:"ren-tiento", name:"Tiento", macro:"V"},
      {id:"ren-innomine", name:"In Nomine", macro:"V"} ]},
    { id:"ren-dance", name:"Renaissance Dance", forms:[
      {id:"ren-pavane", name:"Pavane", macro:"I"},
      {id:"ren-galliard", name:"Galliard", macro:"I"},
      {id:"ren-bassedanse", name:"Basse danse", macro:"I"},
      {id:"ren-allemande", name:"Allemande (early)", macro:"I"} ]},
    { id:"ren-variation", name:"Variation & Ground", forms:[
      {id:"ren-divisions", name:"Divisions on a ground", macro:"VI", macro2:"III"},
      {id:"ren-romanesca", name:"Romanesca", macro:"VI", macro2:"III"},
      {id:"ren-passamezzo", name:"Passamezzo", macro:"VI", macro2:"III"},
      {id:"ren-varsuite", name:"Variation suite", macro:"III"} ]} ]},

  { id:"baroque", name:"Baroque", nameUk:"Бароко", era:"1600–1750", families:[
    { id:"bar-counterpoint", name:"Counterpoint", forms:[
      {id:"bar-fugue", name:"Fugue", macro:"V", star:true},
      {id:"bar-canon", name:"Canon", macro:"V"},
      {id:"bar-invention", name:"Invention", macro:"V"},
      {id:"bar-ricercar", name:"Ricercar (late)", macro:"V"},
      {id:"bar-choraleprelude", name:"Chorale prelude", macro:"V"},
      {id:"bar-sinfonia", name:"Sinfonia (3-voice)", macro:"V"} ]},
    { id:"bar-groundbass", name:"Ground-Bass Variation", forms:[
      {id:"bar-passacaglia", name:"Passacaglia", macro:"VI", macro2:"III", star:true},
      {id:"bar-chaconne", name:"Chaconne", macro:"VI", macro2:"III"},
      {id:"bar-groundbass", name:"Ground bass", macro:"VI", macro2:"III"} ]},
    { id:"bar-concerto", name:"Concerto & Ritornello", forms:[
      {id:"bar-soloconcerto", name:"Solo concerto", macro:"II"},
      {id:"bar-concertogrosso", name:"Concerto grosso", macro:"II"},
      {id:"bar-ritornelloaria", name:"Ritornello aria", macro:"II"} ]},
    { id:"bar-suite", name:"Suite & Dance", forms:[
      {id:"bar-allemande", name:"Allemande", macro:"I"},
      {id:"bar-courante", name:"Courante", macro:"I"},
      {id:"bar-sarabande", name:"Sarabande", macro:"I"},
      {id:"bar-gigue", name:"Gigue", macro:"I"},
      {id:"bar-minuet", name:"Minuet", macro:"I"},
      {id:"bar-bourree", name:"Bourrée", macro:"I"},
      {id:"bar-gavotte", name:"Gavotte", macro:"I"},
      {id:"bar-suite", name:"Suite (compiled)", macro:"I"} ]},
    { id:"bar-vocal", name:"Aria & Vocal Drama", forms:[
      {id:"bar-dacapo", name:"Da capo aria", macro:"II"},
      {id:"bar-recitative", name:"Recitative", macro:"IX"},
      {id:"bar-frenchov", name:"French overture", macro:"IX"},
      {id:"bar-cantatamov", name:"Cantata movement", macro:"II"},
      {id:"bar-passionchorale", name:"Passion chorale", macro:"V"} ]},
    { id:"bar-keyboard", name:"Keyboard Free Forms", forms:[
      {id:"bar-prelude", name:"Prelude", macro:"IX"},
      {id:"bar-toccata", name:"Toccata", macro:"IX"},
      {id:"bar-fantasia", name:"Fantasia (Baroque)", macro:"IX"} ]} ]},

  { id:"classical", name:"Classical", nameUk:"Класицизм", era:"1750–1820", families:[
    { id:"cla-sonata", name:"Sonata Forms", forms:[
      {id:"cla-sonataallegro", name:"Sonata-allegro", macro:"IV", arch:"sonata-allegro"},
      {id:"cla-sonatina", name:"Sonatina", macro:"IV"},
      {id:"cla-slowsonata", name:"Slow-movement sonata", macro:"IV"},
      {id:"cla-sonatarondo", name:"Sonata-rondo", macro:"IV", macro2:"II"},
      {id:"cla-concerto", name:"Concerto (double-exposition)", macro:"IV"} ]},
    { id:"cla-rondo", name:"Classical Rondo", forms:[
      {id:"cla-rondo", name:"Rondo", macro:"II", arch:"rondo"},
      {id:"cla-fivepartrondo", name:"Five-part rondo", macro:"II"} ]},
    { id:"cla-variation", name:"Classical Variation", forms:[
      {id:"cla-themevar", name:"Theme & Variations", macro:"III", arch:"theme-variations"},
      {id:"cla-doublevar", name:"Double variations", macro:"III"} ]},
    { id:"cla-dance", name:"Dance Movements", forms:[
      {id:"cla-minuettrio", name:"Minuet & Trio", macro:"I"},
      {id:"cla-scherzo", name:"Scherzo", macro:"I"},
      {id:"cla-divertimento", name:"Divertimento", macro:"I"} ]} ]},

  { id:"romantic", name:"Romantic", nameUk:"Романтизм", era:"1820–1900", families:[
    { id:"rom-lied", name:"Art Song (Lied)", forms:[
      {id:"rom-strophiclied", name:"Strophic Lied", macro:"I"},
      {id:"rom-modstrophic", name:"Modified-strophic Lied", macro:"I"},
      {id:"rom-tclied", name:"Through-composed Lied", macro:"IX"},
      {id:"rom-songcycle", name:"Song cycle", macro:"I"} ]},
    { id:"rom-character", name:"Character Piece", forms:[
      {id:"rom-nocturne", name:"Nocturne", macro:"I"},
      {id:"rom-prelude", name:"Prelude (Romantic)", macro:"IX"},
      {id:"rom-etude", name:"Étude", macro:"I"},
      {id:"rom-ballade", name:"Ballade", macro:"IX"},
      {id:"rom-intermezzo", name:"Intermezzo", macro:"I"},
      {id:"rom-mazurka", name:"Mazurka", macro:"I"},
      {id:"rom-waltz", name:"Waltz", macro:"I"},
      {id:"rom-impromptu", name:"Impromptu", macro:"IX"} ]},
    { id:"rom-programme", name:"Programme Music", forms:[
      {id:"rom-tonepoem", name:"Symphonic / tone poem", macro:"IX"},
      {id:"rom-progsymph", name:"Programme symphony", macro:"IX"},
      {id:"rom-concertoverture", name:"Concert overture", macro:"IV"} ]},
    { id:"rom-cyclic", name:"Large Cyclic Form", forms:[
      {id:"rom-ideefixe", name:"Idée fixe / Cyclic transformation", macro:"III"},
      {id:"rom-rhapsody", name:"Rhapsody", macro:"IX"} ]} ]},

  { id:"modernist", name:"Modernist", nameUk:"Модернізм", era:"1900–now", families:[
    { id:"mod-serial", name:"Serial & Atonal", forms:[
      {id:"mod-twelvetone", name:"Twelve-tone form", macro:"IV"},
      {id:"mod-totalserial", name:"Total serialism", macro:"IV"},
      {id:"mod-freeatonal", name:"Free atonal form", macro:"IX"} ]},
    { id:"mod-moment", name:"Moment & Open Form", forms:[
      {id:"mod-momentform", name:"Moment form", macro:"XII", star:true},
      {id:"mod-openform", name:"Open / mobile form", macro:"XII"},
      {id:"mod-aleatoric", name:"Aleatoric form", macro:"XII"},
      {id:"mod-indeterminacy", name:"Indeterminacy", macro:"XII"} ]},
    { id:"mod-minimal", name:"Minimalism & Process", forms:[
      {id:"mod-phase", name:"Phase music", macro:"VII", arch:"process-minimal"},
      {id:"mod-additive", name:"Additive minimalism", macro:"VII", arch:"process-minimal"},
      {id:"mod-pulse", name:"Pulse minimalism", macro:"VII", arch:"process-minimal"},
      {id:"mod-generative", name:"Generative", macro:"VII"},
      {id:"mod-tapeprocess", name:"Tape-process piece", macro:"VII"} ]},
    { id:"mod-texture", name:"Texture & Spectral", forms:[
      {id:"mod-micropoly", name:"Micropolyphony", macro:"VIII"},
      {id:"mod-soundmass", name:"Sound mass", macro:"VIII"},
      {id:"mod-spectral", name:"Spectral form", macro:"VIII"},
      {id:"mod-klangfarben", name:"Klangfarben form", macro:"VIII"} ]},
    { id:"mod-collage", name:"Collage & Quotation", forms:[
      {id:"mod-collage", name:"Collage", macro:"XII"},
      {id:"mod-quotation", name:"Quotation montage", macro:"XII"} ]} ]},

  { id:"opera", name:"Opera / Vocal", nameUk:"Опера / Вокал", era:"1600–now", families:[
    { id:"op-number", name:"Number Opera", forms:[
      {id:"op-number", name:"Recit–aria–ensemble number", macro:"II"},
      {id:"op-ensemblefinale", name:"Ensemble finale", macro:"I"},
      {id:"op-singspiel", name:"Singspiel number", macro:"I"} ]},
    { id:"op-musicdrama", name:"Music Drama", forms:[
      {id:"op-leitmotif", name:"Leitmotif through-composition", macro:"IX"},
      {id:"op-endlessmelody", name:"Endless melody", macro:"IX"},
      {id:"op-verismo", name:"Verismo scene", macro:"IX"} ]},
    { id:"op-aria", name:"Aria Forms", forms:[
      {id:"op-cavatina", name:"Cavatina–cabaletta", macro:"II"},
      {id:"op-scena", name:"Scena & mad scene", macro:"IX"},
      {id:"op-belcantoduet", name:"Bel canto duet", macro:"II"} ]},
    { id:"op-choral", name:"Choral-Operatic", forms:[
      {id:"op-chorus", name:"Operatic chorus", macro:"I"},
      {id:"op-overture", name:"Overture (operatic)", macro:"IV"} ]} ]},

  { id:"sacred", name:"Sacred", nameUk:"Сакральна", era:"ancient–now", families:[
    { id:"sac-chant", name:"Liturgical Chant", forms:[
      {id:"sac-gregorian", name:"Gregorian chant", macro:"VIII"},
      {id:"sac-byzantine", name:"Byzantine chant", macro:"VIII"},
      {id:"sac-vedic", name:"Vedic chant", macro:"VIII"} ]},
    { id:"sac-mass", name:"Mass & Office", forms:[
      {id:"sac-mass", name:"Mass setting", macro:"V"},
      {id:"sac-requiem", name:"Requiem", macro:"V"},
      {id:"sac-motet", name:"Sacred motet", macro:"V"},
      {id:"sac-magnificat", name:"Magnificat", macro:"V"},
      {id:"sac-cantata", name:"Chorale cantata", macro:"V"} ]},
    { id:"sac-hymnody", name:"Protestant Hymnody", forms:[
      {id:"sac-chorale", name:"Chorale / Hymn", macro:"I"},
      {id:"sac-fuging", name:"Shape-note fuging tune", macro:"V"},
      {id:"sac-anthem", name:"Anthem", macro:"I"},
      {id:"sac-psalm", name:"Psalm setting", macro:"I"} ]},
    { id:"sac-gospel", name:"Gospel & Spiritual", forms:[
      {id:"sac-spiritual", name:"Spiritual", macro:"I"},
      {id:"sac-gospelvamp", name:"Gospel vamp", macro:"VI", improv:true},
      {id:"sac-shout", name:"Call-and-response shout", macro:"VI", improv:true} ]},
    { id:"sac-world", name:"World Sacred", forms:[
      {id:"sac-qawwali", name:"Qawwali", macro:"VI", improv:true},
      {id:"sac-kirtan", name:"Kirtan / Bhajan", macro:"VI"},
      {id:"sac-taize", name:"Taizé ostinato", macro:"VI"},
      {id:"sac-throat", name:"Throat-singing chant", macro:"VIII"} ]} ]},

  { id:"jazz", name:"Jazz", nameUk:"Джаз", era:"1900–now", families:[
    { id:"jaz-blues", name:"Blues", forms:[
      {id:"jaz-12bar", name:"12-bar blues", macro:"VI", arch:"12-bar-blues", star:true},
      {id:"jaz-8bar", name:"8-bar blues", macro:"VI"},
      {id:"jaz-16bar", name:"16-bar blues", macro:"VI"},
      {id:"jaz-birdblues", name:"Jazz / Bird blues", macro:"VI"},
      {id:"jaz-minorblues", name:"Minor blues", macro:"VI"} ]},
    { id:"jaz-changes", name:"Standards & Changes", forms:[
      {id:"jaz-aaba", name:"AABA standard", macro:"I"},
      {id:"jaz-rhythmchanges", name:"Rhythm changes", macro:"VI"},
      {id:"jaz-contrafact", name:"Contrafact", macro:"VI"},
      {id:"jaz-ballad", name:"Ballad", macro:"II"} ]},
    { id:"jaz-modal", name:"Modal & Vamp", forms:[
      {id:"jaz-modal", name:"Modal jazz", macro:"VI", improv:true},
      {id:"jaz-vamp", name:"Vamp / pedal-point", macro:"VI", improv:true} ]},
    { id:"jaz-head", name:"Head-Solo-Head", forms:[
      {id:"jaz-bebop", name:"Bebop head", macro:"II", arch:"head-solo-head", improv:true},
      {id:"jaz-hardbop", name:"Hard-bop head", macro:"II", improv:true},
      {id:"jaz-coolhead", name:"Cool head", macro:"II", improv:true} ]},
    { id:"jaz-bigband", name:"Big Band", forms:[
      {id:"jaz-chart", name:"Big-band chart", macro:"II"},
      {id:"jaz-shout", name:"Shout-chorus arc", macro:"II"},
      {id:"jaz-swing", name:"Swing chart", macro:"II"} ]},
    { id:"jaz-freelatin", name:"Free & Latin", forms:[
      {id:"jaz-free", name:"Free / energy form", macro:"XII", improv:true},
      {id:"jaz-latin", name:"Latin / clave jazz", macro:"VI"},
      {id:"jaz-stride", name:"Stride form", macro:"I"} ]} ]},

  { id:"folk", name:"Folk / World", nameUk:"Фолк / Світ", era:"trad.–now", families:[
    { id:"folk-strophic", name:"Strophic Folk Song", forms:[
      {id:"folk-ballad", name:"Strophic ballad", macro:"I"},
      {id:"folk-murder", name:"Murder ballad", macro:"I"},
      {id:"folk-lullaby", name:"Lullaby", macro:"I"} ]},
    { id:"folk-dance", name:"Dance Tune", forms:[
      {id:"folk-reel", name:"Reel", macro:"I"},
      {id:"folk-jig", name:"Jig", macro:"I"},
      {id:"folk-slipjig", name:"Slip jig", macro:"I"},
      {id:"folk-hornpipe", name:"Hornpipe", macro:"I"},
      {id:"folk-polka", name:"Polka", macro:"I"},
      {id:"folk-air", name:"Air / slow air", macro:"I"},
      {id:"folk-strathspey", name:"Strathspey", macro:"I"} ]},
    { id:"folk-drone", name:"Drone-Based Folk", forms:[
      {id:"folk-pibroch", name:"Bagpipe pibroch", macro:"VIII", improv:true},
      {id:"folk-hurdygurdy", name:"Hurdy-gurdy tune", macro:"VIII"},
      {id:"folk-dronetune", name:"Tanpura drone song", macro:"VIII"} ]},
    { id:"folk-raga", name:"Modal Improvisation", forms:[
      {id:"folk-hindustani", name:"Hindustani raga", macro:"VI", improv:true, star:true},
      {id:"folk-carnatic", name:"Carnatic kriti", macro:"VI", improv:true},
      {id:"folk-maqam", name:"Maqam taqsim", macro:"VI", improv:true} ]},
    { id:"folk-cyclic", name:"Cyclic World", forms:[
      {id:"folk-gamelan", name:"Gamelan gongan", macro:"VI"},
      {id:"folk-son", name:"Son montuno", macro:"VI"},
      {id:"folk-rumba", name:"Rumba clave", macro:"VI"},
      {id:"folk-flamenco", name:"Flamenco bulería", macro:"VI", improv:true},
      {id:"folk-highlife", name:"Highlife groove", macro:"VI"},
      {id:"folk-mbira", name:"Mbira cycle", macro:"VI"} ]},
    { id:"folk-polyphony", name:"Folk Polyphony", forms:[
      {id:"folk-round", name:"Round / catch", macro:"V"},
      {id:"folk-georgian", name:"Georgian polyphony", macro:"V"},
      {id:"folk-sacredharp", name:"Sacred Harp", macro:"V"} ]} ]},

  { id:"poprock", name:"Pop / Rock", nameUk:"Поп / Рок", era:"1955–now", families:[
    { id:"pop-song", name:"Pop/Rock Song", forms:[
      {id:"pop-versechorus", name:"Verse-Chorus", macro:"I", arch:"verse-chorus", star:true},
      {id:"pop-vcb", name:"Verse-Chorus-Bridge", macro:"I"},
      {id:"pop-aaba", name:"AABA (pop)", macro:"I"},
      {id:"pop-strophic", name:"Strophic rock", macro:"I"},
      {id:"pop-anthem", name:"Anthem", macro:"I"},
      {id:"pop-doowop", name:"Doo-wop", macro:"VI"} ]},
    { id:"pop-riff", name:"Riff-Based Rock / Metal", forms:[
      {id:"pop-riff", name:"Riff form", macro:"VI"},
      {id:"pop-powerballad", name:"Power-ballad arc", macro:"I"},
      {id:"pop-breakdown", name:"Breakdown form (metal)", macro:"VI"} ]},
    { id:"pop-prog", name:"Progressive & Art Rock", forms:[
      {id:"pop-progsuite", name:"Prog suite", macro:"IX", arch:"through-composed"},
      {id:"pop-tcepic", name:"Through-composed epic", macro:"IX"},
      {id:"pop-postrock", name:"Post-rock crescendo", macro:"IX"},
      {id:"pop-mathrock", name:"Math-rock cells", macro:"VII"} ]},
    { id:"pop-rnb", name:"R&B / Soul / Funk", forms:[
      {id:"pop-rnbvamp", name:"R&B vamp song", macro:"VI"},
      {id:"pop-funk", name:"Funk one-chord vamp", macro:"VI"},
      {id:"pop-soulballad", name:"Soul ballad", macro:"I"} ]},
    { id:"pop-synth", name:"Electronic-adjacent Pop", forms:[
      {id:"pop-synthpop", name:"Synth-pop song", macro:"I"},
      {id:"pop-hyperpop", name:"Hyperpop", macro:"I"},
      {id:"pop-shoegaze", name:"Shoegaze wall", macro:"VIII"} ]} ]},

  { id:"electronic", name:"Electronic / Club", nameUk:"Електроніка / Клуб", era:"1978–now", families:[
    { id:"el-house", name:"House", forms:[
      {id:"el-chicago", name:"Chicago House", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-deephouse", name:"Deep House", macro:"VI", arch:"club-arc"},
      {id:"el-acidhouse", name:"Acid House", macro:"VI"},
      {id:"el-techhouse", name:"Tech House", macro:"VI", arch:"club-arc"},
      {id:"el-garagehouse", name:"Garage House", macro:"VI"},
      {id:"el-proghouse", name:"Progressive House", macro:"VI", arch:"club-arc"} ]},
    { id:"el-techno", name:"Techno", forms:[
      {id:"el-detroit", name:"Detroit Techno", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-dub", name:"Dub Techno", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-minimal", name:"Minimal Techno", macro:"VI", arch:"club-arc"},
      {id:"el-berlin", name:"Berlin Techno", macro:"VI"},
      {id:"el-hard", name:"Hard Techno", macro:"VI"},
      {id:"el-industrial", name:"Industrial Techno", macro:"VI"} ]},
    { id:"el-trance", name:"Trance", forms:[
      {id:"el-uplifting", name:"Uplifting Trance", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-psy", name:"Psytrance", macro:"VI", arch:"club-arc"},
      {id:"el-progtrance", name:"Progressive Trance", macro:"VI"} ]},
    { id:"el-bass", name:"Bass Music", forms:[
      {id:"el-deepdubstep", name:"Deep Dubstep", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-brostep", name:"Brostep", macro:"VI", arch:"club-arc"},
      {id:"el-grime", name:"Grime", macro:"VI"},
      {id:"el-footwork", name:"Footwork", macro:"VI"},
      {id:"el-ukgarage", name:"UK Garage", macro:"VI"},
      {id:"el-2step", name:"2-step", macro:"VI"} ]},
    { id:"el-dnb", name:"Drum & Bass / Jungle", forms:[
      {id:"el-neurofunk", name:"Neurofunk", macro:"VI", arch:"club-arc", deep:true},
      {id:"el-liquid", name:"Liquid DnB", macro:"VI", arch:"club-arc"},
      {id:"el-jungle", name:"Jungle", macro:"VI"},
      {id:"el-jumpup", name:"Jump-up", macro:"VI"} ]},
    { id:"el-ambient", name:"Ambient / Drone", forms:[
      {id:"el-ambient", name:"Ambient", macro:"VIII", arch:"drone"},
      {id:"el-darkambient", name:"Dark Ambient", macro:"VIII", arch:"drone"},
      {id:"el-droneambient", name:"Drone Ambient", macro:"VIII", arch:"drone"},
      {id:"el-isolationist", name:"Isolationist", macro:"VIII", arch:"drone"} ]},
    { id:"el-idm", name:"IDM / Glitch", forms:[
      {id:"el-idm", name:"IDM", macro:"IX", arch:"through-composed"},
      {id:"el-glitch", name:"Glitch", macro:"IX"} ]},
    { id:"el-beat", name:"Beat / Hip-Hop", forms:[
      {id:"el-boombap", name:"Boom bap", macro:"VI"},
      {id:"el-trap", name:"Trap", macro:"VI"},
      {id:"el-lofi", name:"Lo-fi beat", macro:"VI"},
      {id:"el-gfunk", name:"G-funk", macro:"VI"} ]},
    { id:"el-experimental", name:"Experimental Electronic", forms:[
      {id:"el-plunderphonics", name:"Plunderphonics", macro:"XII"},
      {id:"el-breakcore", name:"Breakcore", macro:"XII"},
      {id:"el-musiqueconcrete", name:"Musique concrète", macro:"XII"},
      {id:"el-downtempo", name:"Downtempo / Trip-hop", macro:"VI"},
      {id:"el-electro", name:"Electro", macro:"VI"},
      {id:"el-hardstyle", name:"Hardstyle", macro:"VI"},
      {id:"el-synthwave", name:"Synthwave", macro:"I"},
      {id:"el-vaporwave", name:"Vaporwave", macro:"XII"} ]} ]}
];
