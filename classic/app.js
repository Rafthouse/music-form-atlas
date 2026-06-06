const forms = [
  // ============================================================
  // 1. HOUSE
  // ============================================================
  {
    id: "club-arc",
    title: "Club track arc",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "house / techno",
    form: "intro-drop-breakdown-outro",
    tempo: "120-135 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A functional DJ-friendly form where energy is introduced, established, released, rebuilt, and resolved over time.",
    traits: ["DJ intro/outro", "energy curve", "breakdown and rebuild", "drop as release"],
    sections: [
      section("Intro", 32, 0.25, 0.08, "Sets beat-grid, mix-in space, and first texture clues.", "The intro is usually functional: it gives a DJ or listener stable pulse before the main identity arrives."),
      section("Groove", 32, 0.48, 0.12, "Establishes the core rhythmic/harmonic loop.", "This is where repetition becomes legible and the body learns the pattern.", "drum fill"),
      section("Build", 16, 0.72, 0.85, "Adds density, risers, filter motion, or percussion pressure.", "The build makes the next release feel earned by increasing expectation.", "riser peak"),
      section("Drop", 32, 0.96, 0.20, "Releases accumulated tension into the main dance section.", "The drop works because the track has prepared both pulse and expectation.", "impact"),
      section("Breakdown", 32, 0.38, 0.78, "Removes drums or bass to reset attention.", "A breakdown is not empty: it re-frames the material and gives the next entrance meaning.", "silence"),
      section("Rebuild", 16, 0.76, 0.82, "Reintroduces pulse and tension.", "The rebuild reconnects atmosphere to body movement.", "drum fill"),
      section("Second drop", 32, 0.92, 0.25, "Returns with variation or greater density.", "The second drop proves development rather than simple repetition.", "impact"),
      section("Outro", 32, 0.20, 0.05, "Reduces elements for mix-out and closure.", "The outro makes the form usable in a DJ context and gives structural release.")
    ],
    examples: [
      example("Generic peak-time techno arrangement", "Study model", "N/A", "techno", ["0:00 intro", "1:04 groove", "2:08 breakdown", "3:12 drop", "5:20 outro"], "Analytical model; exact source needs track-specific verification."),
      example("Dub techno long-form loop", "Study model", "N/A", "dub techno", ["0:00 texture", "1:30 groove", "3:00 modulation", "5:00 subtraction"], "Shows how form can be slow mutation rather than section contrast.")
    ],
    sources: [
      source("Butler, Unlocking the Groove", "Electronic dance music meter, rhythm, and form; exact chapter/page needs verification.", "needs"),
      source("Hawkins, The British Pop Dandy / EDM form discussions", "Useful for production-form vocabulary; needs exact citation.", "needs")
    ],
    commonMistakes: "Students often call every high-energy entrance a drop; the question is whether tension was structurally prepared.",
    conclusion: "Club form is choreography of expectation: mixability, repetition, break, release, and return."
  },
  {
    id: "verse-chorus",
    title: "Verse-chorus song form",
    category: "pop",
    categoryLabel: "Pop / song",
    genre: "pop / rock",
    form: "verse-chorus",
    tempo: "70-150 BPM",
    tempoGroup: "any",
    difficulty: "easy",
    definition: "A sectional song form where verses develop narrative/detail and choruses deliver the central hook or thesis.",
    traits: ["verse contrast", "chorus return", "hook", "lyric function"],
    sections: [
      section("Intro", 8, 0.25, 0.10, "Introduces sound world or hook fragment.", "The intro prepares recognition without giving away the whole form."),
      section("Verse 1", 16, 0.42, 0.18, "Delivers narrative, detail, or setup.", "Verses usually carry information and lower melodic density than the chorus.", "transition fill"),
      section("Pre-chorus", 8, 0.68, 0.82, "Raises harmonic or melodic tension.", "The pre-chorus is a ramp: it makes the chorus feel inevitable.", "riser peak"),
      section("Chorus", 16, 0.92, 0.28, "States the main hook and emotional center.", "The chorus works by returning as a memorable high-function section."),
      section("Verse 2", 16, 0.48, 0.22, "Continues narrative with variation.", "The second verse confirms the form but should not feel like a reset to zero.", "fill"),
      section("Bridge", 8, 0.58, 0.72, "Provides contrast before final returns.", "The bridge refreshes attention by changing viewpoint, harmony, or texture.", "transition fill"),
      section("Final chorus", 24, 0.98, 0.35, "Returns with intensification or extension.", "The final chorus often validates the song's main idea through repetition plus lift.")
    ],
    examples: [
      example("ABABCB pop layout", "Study model", "N/A", "pop", ["A verse", "B chorus", "C bridge"], "Good model for teaching section function before using copyrighted songs."),
      example("Hook-based dance-pop song", "Study model", "N/A", "dance-pop", ["0:00 intro", "0:16 verse", "0:48 chorus", "1:52 bridge"], "Shows pop form with club-derived energy logic.")
    ],
    sources: [
      source("Everett, The Foundations of Rock", "Common source for rock/pop form terminology; exact section needs verification.", "needs"),
      source("Covach, Form in Rock Music", "Useful for AABA, verse-chorus, and compound forms; exact page needs verification.", "needs")
    ],
    commonMistakes: "Students often identify sections only by lyrics; arrangement, harmony, and energy are equally important.",
    conclusion: "Verse-chorus form turns contrast and return into memory."
  },
  {
    id: "rondo",
    title: "Rondo",
    category: "classical",
    categoryLabel: "Classical",
    genre: "classical",
    form: "rondo",
    tempo: "varies",
    tempoGroup: "any",
    difficulty: "medium",
    definition: "A recurrent refrain form, often represented as ABACA or ABACABA, where a main idea returns between contrasting episodes.",
    traits: ["refrain", "episodes", "return", "contrast"],
    sections: [
      section("A refrain", 16, 0.72, 0.15, "Presents the recognizable main idea.", "The refrain anchors memory; every return lets the listener reorient."),
      section("B episode", 16, 0.48, 0.32, "Contrasts key, material, texture, or character.", "Episode B creates distance from the refrain."),
      section("A return", 16, 0.74, 0.18, "Restates the main idea.", "The return confirms that contrast was temporary."),
      section("C episode", 24, 0.58, 0.42, "Offers deeper or stronger contrast.", "A later episode often expands the form's range."),
      section("A final return", 16, 0.86, 0.12, "Closes by restoring the primary identity.", "The final return feels conclusive because the form has traveled away and back.")
    ],
    examples: [
      example("Classical rondo finale", "Study model", "18th c.", "classical", ["A", "B", "A", "C", "A"], "Use as schematic model before attaching a verified score/audio example."),
      example("Rondo-like theme return", "Study model", "N/A", "hybrid", ["theme", "episode", "theme"], "Useful for showing the concept outside strict classical labels.")
    ],
    sources: [
      source("Caplin, Classical Form", "Important source for classical formal functions; exact chapter/page needs verification.", "needs"),
      source("Oxford Music Online / Grove entry on rondo", "Reference entry should be cited with access details when available.", "needs")
    ],
    commonMistakes: "A repeated theme alone is not enough; rondo depends on return after contrasting episodes.",
    conclusion: "Rondo teaches form as recurring identity interrupted by contrasting journeys."
  },
  {
    id: "process-minimal",
    title: "Process-based minimal form",
    category: "contemporary",
    categoryLabel: "Contemporary / neoclassical",
    genre: "minimal / contemporary",
    form: "process-based",
    tempo: "60-140 BPM",
    tempoGroup: "any",
    difficulty: "hard",
    definition: "A form driven by gradual transformation, phase, layering, or cellular change rather than conventional section contrast.",
    traits: ["process", "cellular development", "layering", "slow transformation"],
    sections: [
      section("Cell", 16, 0.28, 0.05, "Introduces a small repeated unit.", "The cell is the seed; the listener learns it before transformation begins."),
      section("Layering", 32, 0.52, 0.35, "Adds or offsets layers.", "Layering changes perception without requiring a new theme.", "transition fill"),
      section("Process shift", 32, 0.74, 0.72, "Applies phase, subtraction, augmentation, or textural change.", "The drama is in hearing a rule unfold over time.", "transition fill"),
      section("Accumulation", 32, 0.88, 0.62, "Increases density or registral span.", "Accumulation makes gradual change feel directional."),
      section("Dissolution", 24, 0.34, 0.08, "Removes layers or exposes the original cell.", "The ending reveals what changed and what remained stable.")
    ],
    examples: [
      example("Layered cycle study", "Study model", "N/A", "minimal", ["cell", "layer", "shift", "dissolve"], "Safe placeholder for teaching process before verified repertoire entries."),
      example("Ambient club form", "Study model", "N/A", "ambient club", ["texture", "pulse", "density", "release"], "Connects minimal process with modern dance-music listening.")
    ],
    sources: [
      source("Potter, Four Musical Minimalists", "Useful background for minimalist processes; exact page needs verification.", "needs"),
      source("Nyman, Experimental Music", "Relevant for process and experimental traditions; exact section needs verification.", "needs")
    ],
    commonMistakes: "Students may think 'nothing happens'; the task is to track rule-based transformation.",
    conclusion: "Process form makes time audible by letting a rule become music."
  },

  // ============================================================
  // 2. HOUSE — 6 new forms
  // ============================================================
  {
    id: "deep-house-flow",
    title: "Deep House Flow",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "deep house",
    form: "groove-evolution",
    tempo: "118-125 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A continuous groove-based form where energy evolves through subtle layering and subtraction rather than dramatic drops or breakdowns.",
    traits: ["groove continuity", "subtle layering", "sustained energy", "minimal contrast"],
    sections: [
      section("Intro", 16, 0.20, 0.05, "Percussion and pad texture establish a warm harmonic bed.", "The intro in deep house prioritizes atmosphere over impact — it invites rather than demands."),
      section("Kick & groove", 32, 0.48, 0.10, "Kick drum enters with a steady four-on-the-floor pulse.", "The kick is the heartbeat; once established, the form feels anchored.", "fill"),
      section("Bass enters", 16, 0.60, 0.14, "Bassline locks in with the kick, defining the harmonic-rhythmic core.", "The bassline transforms pulse into music; before it, the track is texture."),
      section("Chords/keys", 16, 0.70, 0.20, "Warm chord progression or keys add harmonic depth.", "Chords change the emotional temperature without needing a structural break.", "transition fill"),
      section("Vocal/hook", 16, 0.78, 0.18, "Vocal phrase or melodic hook enters as the top layer.", "The hook is not a drop — it is a voice within the texture, not above it."),
      section("Subtraction", 16, 0.68, 0.38, "Layers are stripped to create the illusion of movement.", "Subtraction in deep house is a deliberate reset that makes re-entry feel fresh."),
      section("Re-entry", 16, 0.80, 0.22, "Elements return with slight variation or different combination.", "Re-entry confirms that the groove is still alive, not static."),
      section("Outro", 16, 0.35, 0.06, "Gradual reduction to kick, percussion, and ambience.", "The outro prioritizes mix-out compatibility over narrative closure.")
    ],
    examples: [
      example("Late-night deep house study", "Study model", "N/A", "deep house", ["0:00 pads", "0:32 kick", "1:04 bass", "1:36 chords", "2:08 hook"], "Schematic model for teaching groove-based form without dramatic drops."),
      example("Minimal vocal deep house arc", "Study model", "N/A", "deep house", ["texture", "pulse", "groove", "voice", "reduction"], "Shows how a vocal can float inside a static arrangement.")
    ],
    sources: [
      source("Deep House Production Guide — Attack Magazine", "Standard reference for deep house arrangement conventions; exact issue needs verification.", "needs")
    ],
    commonMistakes: "Students think deep house 'has no structure' because there are no drops; the structure is in layering and subtraction logic.",
    conclusion: "Deep house form is architecture of sustain: the track moves without ever leaving the groove."
  },
  {
    id: "vocal-house",
    title: "Vocal House Arrangement",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "house",
    form: "verse-drop-song",
    tempo: "124-128 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A hybrid form bridging pop verse-chorus logic and club drop energy, built around vocal phrases as structural anchors.",
    traits: ["vocal structure", "club drop", "pop-chorus function", "build-release"],
    sections: [
      section("Intro", 16, 0.18, 0.08, "Minimal percussion and filtered atmosphere prepare the mix-in.", "The intro exists for DJ utility; the vocal cannot start here."),
      section("Verse", 16, 0.40, 0.16, "Vocal phrase A over a reduced arrangement.", "The verse reveals the vocal without competition from full energy.", "transition fill"),
      section("Pre-drop build", 16, 0.70, 0.88, "Filter sweep, riser, snare roll — classic tension accumulation.", "The pre-drop is the most formulaic moment in vocal house — and the most expected.", "riser peak"),
      section("Drop", 16, 0.95, 0.28, "Full arrangement with vocal hook as the central melodic element.", "The drop is the chorus, redesigned for club impact rather than sing-along."),
      section("Breakdown", 16, 0.35, 0.82, "Pads and vocal snippet sustain atmosphere without drums.", "The breakdown lets the listener breathe; the next entrance hits harder because of it.", "silence"),
      section("Verse 2", 16, 0.45, 0.20, "Vocal phrase B with slight arrangement variation.", "The second verse develops the vocal narrative while maintaining club momentum.", "drum fill"),
      section("Final drop", 32, 0.98, 0.32, "Full arrangement with extra elements or arrangement expansion.", "The final drop is where repetition becomes triumphant."),
      section("Outro", 16, 0.22, 0.06, "Filtered reduction for mix-out.", "The outro returns to DJ functionality after the emotional peak.")
    ],
    examples: [
      example("Vocal house arrangement schematic", "Study model", "N/A", "vocal house", ["intro", "verse", "build", "drop", "breakdown", "verse", "drop", "outro"], "Generalized model of vocal house structure; no copyrighted material referenced."),
      example("Club-ready pop-house hybrid", "Study model", "N/A", "house", ["verse", "build", "drop", "break", "drop"], "Shows how pop form adapts to club energy architecture.")
    ],
    sources: [
      source("Point Blank production courses — vocal house arrangement", "Common pedagogical reference for vocal house structure.", "needs")
    ],
    commonMistakes: "Students write the drop first and add verses as an afterthought; the vocal needs room to develop before the peak.",
    conclusion: "Vocal house form is a negotiation between pop memory and club physics: the voice tells a story, the drop delivers the punch."
  },
  {
    id: "progressive-house-journey",
    title: "Progressive House Journey",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "progressive house",
    form: "long-build-arc",
    tempo: "126-130 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A long-form arrangement defined by extended build-ups, layered releases, and gradual harmonic evolution over 6–8 minutes.",
    traits: ["extended build", "layered release", "harmonic evolution", "slow burn"],
    sections: [
      section("Intro", 32, 0.12, 0.05, "Atmospheric texture, distant percussion, no kick until late.", "The progressive house intro is patient — it trusts the listener to wait."),
      section("Pulse establishes", 32, 0.35, 0.08, "Kick and hi-hats create a steady foundation.", "The pulse is the promise of movement; it does not need to be interesting yet.", "drum fill"),
      section("Layer 1 — groove", 16, 0.50, 0.14, "Bassline enters, defining the harmonic centre.", "The bassline is the mediator between pulse and melody."),
      section("Layer 2 — hook", 32, 0.65, 0.32, "Melodic theme or arpeggio enters, held long enough to saturate.", "The hook is not a climax; it is a route towards one.", "transition fill"),
      section("Build-up", 32, 0.78, 0.92, "Extended tension ramp with percussion acceleration and filter opening.", "In progressive house, the build-up is the main event — not the drop.", "riser peak"),
      section("Peak", 32, 0.94, 0.30, "Full release: all layers active, maximum density.", "The peak is earned by the length of the journey, not by volume alone.", "impact"),
      section("Mid-break", 24, 0.45, 0.75, "Partial reduction to reset for the second half.", "The mid-break is shorter than the intro but serves the same reset function.", "silence"),
      section("Final build", 24, 0.82, 0.90, "Second tension ramp with new elements or harmonic shift.", "The final build differentiates itself through a key change or new rhythmic layer."),
      section("Final peak", 32, 0.96, 0.32, "Maximum density with resolution.", "The final peak closes the journey by confirming the harmonic destination."),
      section("Outro", 32, 0.20, 0.05, "Gradual reduction to texture and pulse.", "The outro is the closing breath after a long arc.")
    ],
    examples: [
      example("Schematic progressive house arc", "Study model", "N/A", "progressive house", ["0:00 texture", "1:00 pulse", "2:00 bass", "3:00 hook", "4:00 build", "5:00 peak"], "Generalized model of progressive house journey; no copyrighted tracks referenced."),
      example("8-minute festival progressive house", "Study model", "N/A", "progressive house", ["intro", "groove", "build", "peak", "break", "build", "peak", "outro"], "Shows the long-duration arc typical of progressive house.")
    ],
    sources: [
      source("Progressive house production — EDMProd", "Reference for progressive house arrangement conventions.", "needs"),
      source("Sonic Academy progressive house tutorials", "Practical arrangement guidance for long-form builds.", "needs")
    ],
    commonMistakes: "Students make the build too short or rush to the peak; progressive house requires patience to let energy accumulate.",
    conclusion: "Progressive house form is duration-based trust: the listener surrenders to a journey that takes time to arrive."
  },
  {
    id: "piano-house",
    title: "Classic Piano House Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "house",
    form: "piano-call-response",
    tempo: "120-128 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A house form driven by piano as structural and melodic anchor, using call-and-response patterns and chord-driven arrangement logic.",
    traits: ["piano anchor", "call and response", "chord progression", "classic house feel"],
    sections: [
      section("Intro", 16, 0.18, 0.06, "Filtered piano chord stab or ambient pad with claps.", "The intro teases the piano without giving away the full progression."),
      section("Kick & bass", 16, 0.38, 0.10, "Four-to-the-floor kick and bassline lock in.", "The kick and bass provide the foundation the piano will float above.", "drum fill"),
      section("Piano loop", 32, 0.55, 0.16, "Piano chord progression or riff enters as the harmonic core.", "The piano in this form is not ornament — it is the structural spine."),
      section("Call section", 16, 0.68, 0.24, "Piano phrase A — open, questioning harmonic movement.", "The call establishes a harmonic question the response will answer.", "fill"),
      section("Response section", 16, 0.72, 0.22, "Piano phrase B — resolving, closing, or affirming.", "The response is the structural answer; together they form a complete statement."),
      section("Breakdown", 16, 0.30, 0.80, "Piano solo or reduced arrangement with filtered drums.", "The breakdown strips everything away except the piano — the listener hears the instrument alone.", "silence"),
      section("Re-entry", 16, 0.82, 0.25, "Full arrangement returns with added layers or intensity.", "Re-entry after the breakdown feels like a new arrival, not a repeat.", "impact"),
      section("Outro", 16, 0.25, 0.05, "Piano fades, filtered, kick out, ambience closes.", "The outro lets the piano dissolve into memory rather than stop abruptly.")
    ],
    examples: [
      example("Piano house structural model", "Study model", "N/A", "piano house", ["intro", "bass", "piano", "call", "response", "break", "re-entry", "outro"], "Generalized model of piano house call-and-response structure."),
      example("Classic Chicago/Italian house form", "Study model", "N/A", "house", ["piano riff", "verse", "break", "riff return"], "Shows the piano as both melodic hook and structural device.")
    ],
    sources: [
      source("Chicago house history — common arrangement patterns", "General reference on classic house arrangement.", "needs")
    ],
    commonMistakes: "Students use piano as a background pad instead of a structural anchor; the piano must lead, not fill.",
    conclusion: "Piano house form turns a single instrument into architecture: the piano is both the question and the answer."
  },
  {
    id: "afro-house-percussion",
    title: "Afro House Percussion Arc",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "afro house",
    form: "percussion-driven",
    tempo: "118-124 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A polyrhythmic form where percussion layers and vocal call-and-response drive the arrangement, with minimal harmonic reliance.",
    traits: ["polyrhythmic layers", "percussion-led", "vocal call-response", "minimal harmony"],
    sections: [
      section("Percussion intro", 16, 0.22, 0.06, "Shakers, congas, or djembe establish rhythmic texture without kick.", "The percussion intro teaches the listener the rhythm before the beat arrives."),
      section("Kick & bass", 16, 0.42, 0.10, "Low-end pulse enters, anchoring the polyrhythms.", "The kick is the grounding force; the percussion retains its independence above it.", "drum fill"),
      section("Layer 2", 16, 0.55, 0.14, "Second percussion layer enters — clave, bell, or shaker pattern.", "Each percussion layer adds a new rhythmic voice, increasing density without raising tension."),
      section("Layer 3", 16, 0.65, 0.16, "Third layer — often a syncopated or off-beat element.", "Three layers create the characteristic polyrhythmic depth of afro house.", "fill"),
      section("Vocal entrance", 16, 0.72, 0.22, "Vocal phrase or chant enters as an additional rhythmic layer.", "The vocal in afro house is not a melody — it is a rhythmic instrument with pitch."),
      section("Call-response", 32, 0.82, 0.26, "Call-and-response pattern between vocal and percussion.", "The call-response is the form's engine; it creates forward motion through repetition with variation."),
      section("Subtraction", 16, 0.62, 0.42, "Layers stripped gradually, creating tension through reduction.", "Subtraction in afro house creates anticipation for re-entry.", "silence"),
      section("Final build", 16, 0.88, 0.78, "All layers return with added intensity and vocal energy.", "The final build activates every layer the listener has learned."),
      section("Peak", 16, 0.94, 0.28, "Maximum polyrhythmic density, full vocal energy.", "The peak is rhythmic saturation — the body moves because every layer is speaking."),
      section("Outro", 16, 0.30, 0.06, "Layer removal in reverse order.", "The outro mirrors the intro in reverse, teaching the rhythm as it leaves.")
    ],
    examples: [
      example("Afro house arrangement schematic", "Study model", "N/A", "afro house", ["perc intro", "kick", "layer 2", "layer 3", "vocal", "call-response", "peak", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Polyrhythmic house form study", "Study model", "N/A", "house", ["rhythm setup", "bass", "voices", "full groove"], "Useful for teaching rhythm-led form versus harmony-led form.")
    ],
    sources: [
      source("Afro house production — producer community analysis", "Emerging genre; arrangement practices still being codified.", "needs")
    ],
    commonMistakes: "Students treat afro house as 'house with African instruments'; the polyrhythmic structure is the form, not the texture.",
    conclusion: "Afro house form is rhythmic architecture: the arrangement is a conversation between independent layers, not a harmonic narrative."
  },
  {
    id: "organic-house-expansion",
    title: "Organic House Expansion",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "organic house",
    form: "texture-expansion",
    tempo: "110-122 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A cinematic, texture-led form with acoustic instrumentation, slow harmonic shifts, and expansive arrangement over 6–9 minutes.",
    traits: ["acoustic textures", "slow expansion", "cinematic pads", "organic instrumentation"],
    sections: [
      section("Field intro", 32, 0.08, 0.04, "Field recordings, acoustic instruments, or ambient texture — no beat.", "The field intro establishes a place, not a tempo."),
      section("Pulse", 16, 0.22, 0.06, "Soft percussive element enters — shakers, rim, or light kick.", "The pulse is organic; it breathes rather than locks."),
      section("Instrument enters", 32, 0.38, 0.12, "Acoustic guitar, flute, or string instrument introduces melodic material.", "The instrument is the voice of the track — it carries the organic identity."),
      section("Bass", 16, 0.52, 0.15, "Sub-bass or organic bass instrument enters.", "The bass grounds the texture without overpowering the acoustic feel.", "fill"),
      section("Expansion", 32, 0.68, 0.22, "Multiple instruments layer gradually, creating sonic depth.", "Expansion in organic house is additive — each layer stays and enriches the whole."),
      section("Mid-breath", 24, 0.48, 0.58, "Stripped back to field recordings and one instrument.", "The mid-breath is the track's reflective pause — a reset before deeper expansion.", "silence"),
      section("Deep expansion", 32, 0.82, 0.28, "Full arrangement with added percussion and harmonic variation.", "Deep expansion reaches the maximum sonic palette the track has prepared."),
      section("Resolution", 32, 0.58, 0.10, "Gradual return to texture, instruments fall away one by one.", "Resolution is not loss — it is returning to the place the track began."),
      section("Close", 16, 0.12, 0.04, "Field recordings or ambience fade to silence.", "The close mirrors the field intro, completing the circle.")
    ],
    examples: [
      example("Organic house structural archetype", "Study model", "N/A", "organic house", ["field", "pulse", "instrument", "expansion", "breath", "peak", "close"], "Generalized model; no copyrighted tracks referenced."),
      example("Cinematic downtempo club form", "Study model", "N/A", "downtempo", ["texture", "instrument", "expansion", "reduction", "close"], "Shows the connection between organic house and cinematic composition.")
    ],
    sources: [
      source("All Day I Dream / organic house production analysis", "Communityourced production analysis; needs academic verification.", "needs")
    ],
    commonMistakes: "Students think organic house is 'just ambient with beats'; the arrangement has clear structural expansion arcs that must be intentional.",
    conclusion: "Organic house form is sonic geography: the track builds a landscape the listener moves through, not a narrative they follow."
  },

  // ============================================================
  // 3. TECHNO — 6 new forms
  // ============================================================
  {
    id: "peak-time-techno",
    title: "Peak Time Techno Journey",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "techno",
    form: "relentless-arc",
    tempo: "132-140 BPM",
    tempoGroup: "fast",
    difficulty: "easy",
    definition: "A high-energy, minimal-breakdown techno form where the kick rarely stops and arrangement is driven by textural evolution rather than section contrast.",
    traits: ["relentless kick", "textural evolution", "minimal breakdowns", "functional intensity"],
    sections: [
      section("Intro — kick", 16, 0.30, 0.08, "Kick drum alone or with minimal hi-hats establishes the relentless pulse.", "Peak time does not ask permission — the kick begins and does not stop."),
      section("Percussion layer", 16, 0.48, 0.12, "Closed hi-hats, claps, or ride cymbal join the kick.", "Percussion layers build the groove without breaking the kick's continuity.", "drum fill"),
      section("Bass enters", 16, 0.60, 0.16, "Heavy bassline locks in, defining the tonal centre.", "The bass shares the kick's space — they are not separate in peak time."),
      section("Texture 1", 16, 0.68, 0.22, "Filtered synth stab, vocal snippet, or industrial texture.", "Texture enters as a layer, not as a melody — it colours, not sings."),
      section("Ramp", 32, 0.82, 0.82, "Gradual density increase: open filter, added percussion, rising tension.", "The ramp is a slow pressure increase rather than a traditional build.", "riser peak"),
      section("Peak", 32, 0.96, 0.30, "Maximum density, open hi-hats, full frequency spectrum.", "The peak is sustained, not dropped — the energy plateaus rather than plunges."),
      section("Textural shift", 16, 0.78, 0.52, "Filter sweep, new texture enters, or one element drops out.", "The textural shift provides the illusion of a breakdown while maintaining momentum."),
      section("Re-entry", 16, 0.90, 0.34, "Full density returns with added layers.", "Re-entry feels like reinforcement rather than restart."),
      section("Outro", 16, 0.28, 0.06, "Filters close, elements exit one by one, kick persists.", "The outro respects the DJ: the kick holds while everything else dissolves.")
    ],
    examples: [
      example("Peak time techno arrangement schematic", "Study model", "N/A", "techno", ["kick", "percussion", "bass", "ramp", "peak", "shift", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Berghain-style functional techno form", "Study model", "N/A", "techno", ["kick enters", "groove", "pressure", "release", "re-entry"], "Shows how peak time techno prioritizes momentum over contrast.")
    ],
    sources: [
      source("Techno arrangement — Attack Magazine", "Standard reference for techno production.", "needs"),
      source("Peak time techno production guides", "Communityourced; specific arrangement patterns from producer forums.", "needs")
    ],
    commonMistakes: "Students add breakdowns because 'every track needs one'; peak time techno is one of the few forms where a breakdown weakens the architecture.",
    conclusion: "Peak time techno form is momentum architecture: the kick is the constant, and everything else is texture passing through its gravitational field."
  },
  {
    id: "hypnotic-techno",
    title: "Hypnotic Techno Evolution",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "techno",
    form: "micro-evolution",
    tempo: "124-132 BPM",
    tempoGroup: "medium",
    difficulty: "hard",
    definition: "A trance-informed techno form where subtle micro-changes to a repeating pattern create perceived movement without sectional contrast.",
    traits: ["micro-repetition", "subtle mutation", "hypnotic persistence", "trance-informed"],
    sections: [
      section("Pattern seed", 32, 0.18, 0.04, "A single rhythmic or melodic pattern is presented and repeated.", "The seed is heard, then learned, then forgotten — that is when hypnosis begins."),
      section("Repetition phase", 32, 0.35, 0.06, "The pattern repeats with no visible changes for an extended period.", "Repetition is not a failure of invention; it is the condition for trance."),
      section("Micro-change 1", 16, 0.42, 0.14, "A single parameter shifts — filter position, slightly, almost imperceptibly.", "The first micro-change should be barely noticeable; the listener must earn the awareness."),
      section("Micro-change 2", 16, 0.48, 0.22, "Second parameter shift — volume, timing, or harmonic overtone.", "The second change is only detectable if the listener has been paying attention.", "fill"),
      section("Accumulation", 32, 0.62, 0.38, "Multiple micro-changes compound, creating perceived evolution.", "Accumulation is the result of many small decisions, not one dramatic shift."),
      section("Phase shift", 16, 0.72, 0.62, "A new pattern emerges from the accumulated changes.", "The phase shift feels organic because it has been prepared by every micro-change before it.", "transition fill"),
      section("Saturation", 32, 0.85, 0.48, "Maximum density of pattern and its evolved variations.", "Saturation is the peak of hypnosis — the pattern is both present and transformed."),
      section("Dissolution", 32, 0.55, 0.18, "Micro-changes reverse or dissolve back to the seed pattern.", "Dissolution reveals the journey: the seed and the evolved state are now heard as two points on a continuum."),
      section("Return to seed", 16, 0.28, 0.06, "The original pattern returns, now heard differently.", "The listener hears the seed with new ears because they have witnessed its transformation.")
    ],
    examples: [
      example("Hypnotic techno evolution model", "Study model", "N/A", "techno", ["seed", "repetition", "micro-1", "micro-2", "accumulation", "shift", "saturation", "dissolve"], "Generalized model for teaching micro-repetition form."),
      example("Dub techno long-form evolution", "Study model", "N/A", "dub techno", ["loop", "subtle filter", "delay change", "return"], "Shows connection between hypnotic techno and dub production.")
    ],
    sources: [
      source("Basic Channel / Chain Reaction production analysis", "Influential for understanding hypnotic techno form.", "needs")
    ],
    commonMistakes: "Students confuse 'nothing is happening' with 'I am not listening carefully enough'; hypnotic form requires active attention to micro-changes.",
    conclusion: "Hypnotic techno form is the art of almost-imperceptible evolution: the track changes so slowly that the listener changes with it."
  },
  {
    id: "drumcode-builder",
    title: "Drumcode Builder",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "techno",
    form: "builder-drop",
    tempo: "126-132 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A builder-drop techno form characterized by industrial-tinged sound design, filtered build-ups, and punchy, functional drops.",
    traits: ["builder-drop", "industrial palette", "functional drop", "warehouse energy"],
    sections: [
      section("Intro", 16, 0.22, 0.06, "Industrial texture, distant kick, filtered rumble.", "The intro is a dark room; the listener senses the space before the light turns on."),
      section("Kick lock", 16, 0.42, 0.10, "Kick drum locks into a steady, hard-hitting pattern.", "The kick in Drumcode-style techno is aggressive and immediate.", "drum fill"),
      section("Groove", 16, 0.55, 0.14, "Hi-hats, claps, and percussion join the kick.", "Groove establishes the mechanical rhythm the track will ride."),
      section("Bass enters", 16, 0.65, 0.18, "Low-end rumble or industrial bassline enters.", "The bass adds weight — the track becomes physical."),
      section("Filter build", 32, 0.78, 0.88, "Long filter sweep with rising noise and percussion acceleration.", "The filter build is the signature move — tension accumulates through sonics, not harmony.", "riser peak"),
      section("Drop", 32, 0.94, 0.26, "Full arrangement released — all elements open and driving.", "The drop in this form is about unblocking, not about a new melody."),
      section("Mid reset", 16, 0.62, 0.55, "Brief reduction to kick and bass, filter closes briefly.", "The mid reset is not a breakdown — it is a momentary breath.", "transition fill"),
      section("Second build", 24, 0.82, 0.84, "Second filter sweep with new texture or variation.", "The second build proves the form is repeatable and effective."),
      section("Second drop", 32, 0.96, 0.28, "Full density with added elements.", "The second drop is the form's confirmation dance."),
      section("Outro", 16, 0.28, 0.06, "Filtered reduction, elements exit.", "The outro is a fade-out rather than a landing.")
    ],
    examples: [
      example("Drumcode-style techno schematic", "Study model", "N/A", "techno", ["intro", "kick", "groove", "build", "drop", "reset", "build", "drop", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Warehouse techno builder-drop", "Study model", "N/A", "techno", ["ambient intro", "pulse", "filter rise", "release", "reduction", "filter rise", "release"], "Shows the signature filter-build mechanic.")
    ],
    sources: [
      source("Drumcode label arrangement analysis", "Community analysis of Drumcode-released tracks; needs formal citation.", "needs")
    ],
    commonMistakes: "Students overproduce the drop and underproduce the build; the build is the actual event — the drop is just the result.",
    conclusion: "Drumcode builder form is tension mechanics: the filter build is the spectacle, and the drop is the confirmation that the tension worked."
  },
  {
    id: "industrial-pressure",
    title: "Industrial Pressure Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "techno",
    form: "pressure-release",
    tempo: "130-145 BPM",
    tempoGroup: "fast",
    difficulty: "hard",
    definition: "A harsh, tension-heavy techno form where abrasive textures, metallic percussion, and distorted bass create a sense of relentless pressure.",
    traits: ["abrasive textures", "metallic percussion", "distorted bass", "pressure and release"],
    sections: [
      section("Noise intro", 16, 0.14, 0.12, "Harsh noise, feedback, or industrial ambience — no clear rhythm.", "The noise intro deliberately disorients; the listener enters an uncomfortable space."),
      section("Kick assault", 16, 0.38, 0.18, "Hard, distorted kick enters with full weight.", "The kick in industrial techno is a weapon, not a dance tool."),
      section("Metallic layer", 16, 0.50, 0.28, "Clanging, metallic percussion enters — often panned and chaotic.", "Metal-on-metal percussion creates an industrial soundscape, not a groove.", "drum fill"),
      section("Bass pressure", 16, 0.65, 0.42, "Distorted, overdriven bassline adds low-end aggression.", "The bass is not musical in the conventional sense — it is physical pressure."),
      section("Pressure build", 32, 0.78, 0.92, "Density increases through distortion, feedback, and noise layering.", "The build is not melodic; it is sonic warfare — the pressure rises like volume in a factory.", "riser peak"),
      section("Release", 16, 0.90, 0.48, "Sudden filter opening or rhythmic change, not a clean resolution.", "The release in industrial techno is never comfortable — it is a different kind of pressure."),
      section("Mid decay", 16, 0.60, 0.68, "Elements decay into noise and reverb tails.", "Decay is not peace; it is the sound of machinery winding down.", "silence"),
      section("Re-entry", 16, 0.85, 0.52, "Full force returns with added distortion or tempo variation.", "Re-entry re-establishes the pressure, sometimes higher than before."),
      section("Outro — collapse", 16, 0.25, 0.15, "Arrangement collapses into noise, feedback, or silence.", "The outro of industrial techno does not resolve — it breaks.")
    ],
    examples: [
      example("Industrial techno pressure model", "Study model", "N/A", "industrial techno", ["noise", "kick", "metal", "bass", "build", "release", "decay", "re-entry", "collapse"], "Generalized model; no copyrighted tracks referenced."),
      example("Hardware industrial techno arrangement", "Study model", "N/A", "industrial techno", ["feedback", "kick", "pressure", "release", "noise"], "Shows how hardware jams create form through texture accumulation.")
    ],
    sources: [
      source("Industrial techno production — producer community", "Community-sourced arrangement patterns; needs academic verification.", "needs")
    ],
    commonMistakes: "Students think industrial techno is 'just noise'; the form has clear pressure-release arcs, but the resolution is never clean.",
    conclusion: "Industrial pressure form is brutality as architecture: comfort is removed, tension is sustained, and release is never fully satisfying."
  },
  {
    id: "minimal-techno-reduction",
    title: "Minimal Techno Reduction Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "techno",
    form: "subtractive-arrangement",
    tempo: "124-132 BPM",
    tempoGroup: "medium",
    difficulty: "hard",
    definition: "A subtractive form where arrangement is built by removing elements from a full pattern rather than adding them, creating tension through absence.",
    traits: ["subtractive logic", "function-as-rhythm", "silence as tension", "reduction"],
    sections: [
      section("Full pattern", 32, 0.48, 0.06, "All elements play together: kick, percussion, bass, texture.", "The full pattern is the maximum state; everything from here is removal."),
      section("Subtract 1", 16, 0.42, 0.16, "One element removed — often hats or secondary percussion.", "The first removal is barely noticeable, but the listener senses something changed.", "silence"),
      section("Subtract 2", 16, 0.36, 0.32, "Second element removed — bass drops, leaving kick and one texture.", "The second removal creates audible emptiness; the track feels physically lighter."),
      section("Minimal state", 32, 0.28, 0.62, "Only kick and one element remain — maximum tension through minimum material.", "The minimal state is the hardest to sustain; the fewer elements, the more exposed each one is."),
      section("Add back 1", 16, 0.45, 0.38, "One element returns — bass or percussion.", "The return of an element feels like a reward after the tension of absence."),
      section("Add back 2", 16, 0.58, 0.24, "Second element returns with slight variation.", "Layered return creates the illusion of development from subtraction."),
      section("Full pattern variant", 32, 0.72, 0.12, "All elements return with one parameter changed — filter, order, or velocity.", "The final full pattern proves the journey was not a cycle but an evolution.")
    ],
    examples: [
      example("Minimal techno subtractive arrangement", "Study model", "N/A", "minimal techno", ["full", "subtract 1", "subtract 2", "minimal", "add 1", "add 2", "full variant"], "Generalized model for teaching subtractive form."),
      example("Tension-through-absence study", "Study model", "N/A", "techno", ["all elements", "removal", "silence", "return"], "Useful for demonstrating that removal can be as dramatic as addition.")
    ],
    sources: [
      source("Minimal techno production — Ricardo Villalobos / Richie Hawtin approach", "Influential producers who use subtractive arrangement as a primary structural tool.", "needs")
    ],
    commonMistakes: "Students add elements because 'more is more'; minimal techno form requires the discipline to remove, not just to produce.",
    conclusion: "Minimal techno form is negative space architecture: what is removed creates as much structure as what remains."
  },
  {
    id: "hardgroove-momentum",
    title: "Hardgroove Momentum Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "techno",
    form: "syncopated-rolling",
    tempo: "130-140 BPM",
    tempoGroup: "fast",
    difficulty: "medium",
    definition: "A rolling, syncopated techno form driven by swung hi-hats, off-beat bass stabs, and relentless forward momentum.",
    traits: ["syncopated groove", "rolling hats", "off-beat bass", "momentum-driven"],
    sections: [
      section("Intro", 16, 0.24, 0.06, "Shuffling hi-hat pattern with kick on 1 and 3.", "The intro teaches the groove before the full body arrives."),
      section("Kick lock", 8, 0.42, 0.08, "Full kick pattern locks in with the shuffle.", "The kick anchors the syncopation; the groove is felt in the tension between them.", "drum fill"),
      section("Bass stabs", 16, 0.58, 0.16, "Off-beat or syncopated bass stabs enter.", "Bass stabs on off-beats create the signature hardgroove lurch."),
      section("Open hats", 16, 0.68, 0.20, "Open hi-hat pattern adds propulsion and frequency range.", "Open hats increase energy without changing tempo — a purely textural acceleration."),
      section("Rise", 24, 0.80, 0.78, "Percussion density increases, elements double or speed up.", "The rise is about momentum velocity, not harmonic tension.", "riser peak"),
      section("Momentum peak", 32, 0.92, 0.28, "All layers active — rolling, syncopated, relentless.", "The momentum peak is sustained, not punctuated; it is a plateau of drive."),
      section("Varied drop", 32, 0.88, 0.34, "One element changes — bass pattern shifts, hats close briefly.", "The varied drop creates the illusion of a breakdown while maintaining full energy."),
      section("Outro", 16, 0.32, 0.06, "Hats close, bass exits, kick fades to shuffle alone.", "The outro returns to the opening pattern, completing the momentum arc.")
    ],
    examples: [
      example("Hardgroove techno arrangement model", "Study model", "N/A", "techno", ["shuffle intro", "kick", "bass stabs", "rise", "peak", "variation", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Rolling techno percussion study", "Study model", "N/A", "techno", ["hats", "kick", "syncopation", "full groove", "roll out"], "Shows syncopation as the primary structural engine.")
    ],
    sources: [
      source("Hardgroove techno — producer community analysis", "Communityourced arrangement analysis; needs formal citation.", "needs")
    ],
    commonMistakes: "Students write a groove and call it a track; hardgroove form requires that the groove be placed inside an arc that evolves and resolves.",
    conclusion: "Hardgroove form is syncopation as drive: the groove generates momentum, and the arrangement shapes where that momentum goes."
  },

  // ============================================================
  // 4. MELODIC TECHNO — 3 new forms
  // ============================================================
  {
    id: "narrative-melodic-arc",
    title: "Narrative Melodic Arc",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "melodic techno",
    form: "narrative-journey",
    tempo: "122-128 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A storytelling melodic techno form where harmonic progression and melodic development create a clear emotional narrative arc over 6–8 minutes.",
    traits: ["emotional arc", "harmonic progression", "melodic development", "storytelling"],
    sections: [
      section("Atmosphere intro", 32, 0.10, 0.05, "Reverb-drenched pads, distant texture, no clear pulse.", "The atmosphere is the setting; the listener must feel the space before the story begins."),
      section("Pulse", 16, 0.25, 0.07, "Kick and hi-hats establish a steady but gentle pulse.", "The pulse is the page turning; the story begins once the rhythm becomes predictable."),
      section("Theme A", 32, 0.45, 0.15, "First melodic theme — often melancholic or yearning.", "Theme A is the protagonist; the listener begins to invest emotionally.", "fill"),
      section("Development", 32, 0.62, 0.32, "Theme A develops through harmonic shift or variation.", "Development complicates the protagonist; the story deepens."),
      section("Rise", 24, 0.78, 0.88, "Tension builds through layered strings, percussion acceleration, harmonic tension.", "The rise is the emotional turning point — the story reaches its conflict.", "riser peak"),
      section("Climax", 32, 0.94, 0.30, "Full release — theme B or transformed theme A at maximum density.", "The climax is not just loud; it is the emotional resolution of the harmonic journey."),
      section("Reflection", 32, 0.55, 0.48, "Reduced arrangement returns to theme A with the knowledge of the climax.", "Reflection lets the listener process the journey; the same theme now sounds different."),
      section("Closing", 32, 0.30, 0.08, "Elements fall away, atmosphere returns, pulse stops.", "The closing returns to the atmosphere of the intro — the story is complete.")
    ],
    examples: [
      example("Melodic techno narrative arc schematic", "Study model", "N/A", "melodic techno", ["atmosphere", "pulse", "theme", "development", "rise", "climax", "reflection", "close"], "Generalized model; no copyrighted tracks referenced."),
      example("Festival melodic techno emotional arc", "Study model", "N/A", "melodic techno", ["intro", "groove", "melody", "build", "peak", "break", "resolution"], "Shows how storytelling maps onto club energy architecture.")
    ],
    sources: [
      source("Afterlife / melodic techno production analysis", "Community analysis of the melodic techno label sound.", "needs"),
      source("Melodic techno arrangement — EDMProd", "Reference for section function in melodic techno.", "needs")
    ],
    commonMistakes: "Students write a beautiful melody and loop it for 6 minutes; the narrative arc requires the melody to develop, not merely repeat.",
    conclusion: "Narrative melodic techno form is harmonic storytelling: the melody is the protagonist, the arrangement is the plot, and every section is a chapter."
  },
  {
    id: "atmospheric-rise-structure",
    title: "Atmospheric Rise Structure",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "melodic techno",
    form: "texture-rise",
    tempo: "120-126 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A texture-first melodic techno form where the arrangement is built around long, atmospheric rises and sustained pads rather than melodic hooks.",
    traits: ["texture-first", "sustained pads", "long rises", "atmospheric"],
    sections: [
      section("Deep texture", 32, 0.08, 0.04, "Low-volume, wide-reverb pads and field recordings.", "Deep texture is the canvas; the listener does not know yet what will be painted."),
      section("Sub-bass", 16, 0.20, 0.06, "Low sub-bass enters as a textural element, not a rhythmic one.", "Sub-bass is felt, not heard — it adds weight without adding rhythm."),
      section("Pulse enters", 16, 0.35, 0.10, "Soft kick or percussive element creates heartbeat.", "The pulse transforms texture into time; the listener begins to feel duration."),
      section("Atmospheric rise 1", 32, 0.58, 0.78, "Long, slow filter sweep or volume swell across pads.", "The atmospheric rise is the main event — it takes time and does not rush.", "riser peak"),
      section("Plateau", 32, 0.72, 0.28, "Sustained maximum texture density — the air is full.", "The plateau is the moment of saturation; the air in the track is at capacity."),
      section("Atmospheric rise 2", 32, 0.82, 0.88, "Second, longer rise with additional textural layers.", "The second rise builds on the same material, proving texture can create direction.", "riser peak"),
      section("Release", 24, 0.88, 0.22, "Gentle release — not a drop, but a harmonic settling.", "The release in atmospheric form is not aggressive; it is a deep breath."),
      section("Dissolve", 32, 0.35, 0.06, "Pads fade, sub-bass recedes, atmosphere returns.", "The dissolve is the canvas being cleared; the track returns to the space it began from.")
    ],
    examples: [
      example("Atmospheric melodic techno model", "Study model", "N/A", "melodic techno", ["texture", "sub", "pulse", "rise 1", "plateau", "rise 2", "release", "dissolve"], "Generalized model; no copyrighted tracks referenced."),
      example("Ambient techno structural archetype", "Study model", "N/A", "ambient techno", ["drone", "pulse", "swell", "peak", "return"], "Shows connection between atmospheric techno and ambient composition.")
    ],
    sources: [
      source("Ambient techno production analysis", "Reference for texture-led arrangement in electronic music.", "needs")
    ],
    commonMistakes: "Students think atmospheric means 'nothing happens'; the structure is in the rate and depth of textural change, not in melodic contrast.",
    conclusion: "Atmospheric form is texture as narrative: the arrangement is defined by the speed and depth of textural change, not by thematic contrast."
  },
  {
    id: "festival-melodic-techno",
    title: "Festival Melodic Techno Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "melodic techno",
    form: "big-room-melodic",
    tempo: "124-130 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A large-scale melodic techno form optimized for festival main stages, with bigger drops, wider harmonic contrasts, and more dramatic tension arcs.",
    traits: ["big drops", "wide contrast", "dramatic tension", "festival scale"],
    sections: [
      section("Cinematic intro", 32, 0.12, 0.06, "Wide cinematic pads, crowd-engaging texture, no kick.", "The cinematic intro is a call for attention — it addresses the audience directly."),
      section("Kick lock", 16, 0.35, 0.08, "Powerful kick drum with long reverb, establishing the space.", "The kick in festival techno is large; it fills the space before the music does.", "drum fill"),
      section("Groove", 16, 0.48, 0.12, "Hi-hats and claps join, creating the full groove.", "Groove makes the crowd move; without it, the scale is just volume."),
      section("Melody enters", 32, 0.62, 0.20, "Broad, emotional melody — often with wide intervals and large reverb.", "Festival melodies are singable; they are designed for a crowd, not headphones."),
      section("Build-up", 32, 0.78, 0.92, "Extended build with snare rolls, filter sweep, and harmonic tension.", "The build-up is the crowd's preparation time; everyone knows what comes next.", "riser peak"),
      section("Drop", 32, 0.98, 0.24, "Maximum release — all layers open, bass heavy, melody triumphant.", "The festival drop is a shared catharsis: the crowd releases together."),
      section("Mid-break", 24, 0.42, 0.78, "Stripped to melody and pads, rebuilding anticipation.", "The mid-break is necessary for the second drop to hit as hard as the first."),
      section("Final build-drop", 48, 0.96, 0.86, "Combined build-drop sequence with maximum intensity.", "The final sequence is the track's closing statement — it must feel definitive."),
      section("Outro", 16, 0.22, 0.05, "Reverb tails, fade, the crowd takes over.", "The outro hands the energy to the DJ and the crowd.")
    ],
    examples: [
      example("Festival melodic techno schematic", "Study model", "N/A", "melodic techno", ["cinematic intro", "kick", "melody", "build", "drop", "break", "final build-drop", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Main-stage melodic techno arc", "Study model", "N/A", "melodic techno", ["intro", "groove", "melody", "rise", "peak", "reset", "final peak"], "Shows how festival form scales up the tension-release arc.")
    ],
    sources: [
      source("Festival techno production guides", "Communityourced; arrangement patterns for large-scale venues.", "needs")
    ],
    commonMistakes: "Students write drops that are loud but not earned; festival form requires that the build creates anticipation proportional to the drop size.",
    conclusion: "Festival melodic techno is scaled storytelling: every gesture is larger, every contrast wider, because the room demands it."
  },

  // ============================================================
  // 5. TRANCE — 4 new forms
  // ============================================================
  {
    id: "classic-uplift-arc",
    title: "Classic Uplift Arc",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "trance",
    form: "uplift-arc",
    tempo: "136-142 BPM",
    tempoGroup: "fast",
    difficulty: "easy",
    definition: "The classic uplifting trance form: intro, build-up, breakdown, build, climax, and outro — driven by harmonic rise and emotional catharsis.",
    traits: ["uplifting climax", "long breakdown", "harmonic rise", "emotional catharsis"],
    sections: [
      section("Intro — pulse", 32, 0.18, 0.05, "Kick, hi-hats, and a filtered arpeggio establish the trance pulse.", "The intro establishes the 4/4 heartbeat and the signature arpeggio texture."),
      section("Bass", 16, 0.38, 0.08, "Bassline locks into the kick-arp pulse.", "The bassline in trance is simple; it provides foundation for the harmonic layers above.", "drum fill"),
      section("Melody enters", 32, 0.52, 0.18, "Main lead melody or chord progression — often plaintive, searching.", "The melody gives the form a voice; the track begins to speak."),
      section("Build-up 1", 32, 0.68, 0.82, "Percussion acceleration, string layers, filter rise.", "The first build-up is preparation; the listener knows a release is coming.", "riser peak"),
      section("Mini-climax", 16, 0.82, 0.32, "Early release — full arrangement, but not the main climax.", "The mini-climax gives a taste of catharsis without exhausting the form."),
      section("Breakdown", 32, 0.25, 0.92, "Drums removed, pads and melody sustain — maximum tension.", "The breakdown is the heart of uplifting trance; emotion is laid bare without rhythm.", "silence"),
      section("Build-up 2", 32, 0.48, 0.88, "Gradual re-entry of elements — kick, bass, percussion, strings.", "The second build-up reconstructs the track from the breakdown's vulnerability.", "riser peak"),
      section("Climax", 32, 0.98, 0.22, "Full arrangement — layered strings, soaring melody, maximum density.", "The climax is the promised catharsis; the journey from breakdown to climax is the form's entire emotional logic."),
      section("Resolution", 32, 0.68, 0.14, "Elements fall away, melody persists, energy descends.", "Resolution is the aftermath of catharsis; the listener lands."),
      section("Outro", 16, 0.22, 0.05, "Kick, arp, and filtered reduction.", "The outro returns to the intro's pulse, completing the circle.")
    ],
    examples: [
      example("Classic uplifting trance layout", "Study model", "N/A", "trance", ["intro", "bass", "melody", "build", "mini-climax", "breakdown", "build", "climax", "resolution", "outro"], "Generalized model of uplifting trance structure."),
      example("Trance energy arc study", "Study model", "N/A", "trance", ["pulse", "build", "break", "build", "peak", "outro"], "Shows the classic tension-release-tension-release arc of trance.")
    ],
    sources: [
      source("Trance production — Myloops arrangement guide", "Practical guide for uplifting trance structure.", "needs"),
      source("Uplifting trance — Native Instruments blog", "Reference for trance arrangement conventions.", "needs")
    ],
    commonMistakes: "Students write a breakdown that is too short; the breakdown needs enough duration for the listener to feel the full weight of the reset.",
    conclusion: "Uplifting trance form is catharsis engineering: the breakdown creates vulnerability, the build-up creates anticipation, and the climax delivers emotional release."
  },
  {
    id: "extended-breakdown-trance",
    title: "Extended Breakdown Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "trance",
    form: "extended-breakdown",
    tempo: "134-140 BPM",
    tempoGroup: "fast",
    difficulty: "medium",
    definition: "A trance form where the breakdown is the structural and emotional centrepiece — often exceeding 64 bars — with an extended melodic development section.",
    traits: ["extended breakdown", "melodic development", "emotional depth", "patient arc"],
    sections: [
      section("Intro", 32, 0.15, 0.05, "Minimal pulse, filtered arpeggio, gentle texture.", "The intro is brief and functional; the form is eager to reach the breakdown."),
      section("Groove", 32, 0.42, 0.10, "Full rhythm section with live-feel percussion variation.", "Groove establishes motion that will be suspended during the breakdown."),
      section("Rise to breakdown", 32, 0.60, 0.72, "Tension rises through filtering and percussion acceleration.", "The rise signals that the track is approaching its central event.", "riser peak"),
      section("Extended breakdown", 64, 0.18, 0.94, "All drums removed — pads, melody, and harmonies sustain for 64+ bars.", "The extended breakdown is not empty space; it is the form's emotional container.", "silence"),
      section("Melody variation", 32, 0.28, 0.62, "Melody develops or transforms within the breakdown space.", "Melodic development inside the breakdown proves the breakdown is active, not passive."),
      section("Build-up", 32, 0.52, 0.88, "Elements return slowly — kick first, then bass, then percussion.", "The build-up is the slow re-entry from emotional depth back to physical motion.", "drum fill"),
      section("Climax", 32, 0.96, 0.28, "Full arrangement with developed melody and heightened density.", "The climax is earned by the extended breakdown; it hits harder because of how long the track stayed vulnerable."),
      section("Outro", 32, 0.28, 0.06, "Gradual reduction to pulse and texture.", "The outro is a gentle landing after the emotional journey.")
    ],
    examples: [
      example("Extended breakdown trance schematic", "Study model", "N/A", "trance", ["intro", "groove", "rise", "breakdown (64 bars)", "melody variation", "build", "climax", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Long-breakdown trance arrangement study", "Study model", "N/A", "trance", ["pulse", "full groove", "filter", "break", "melodic development", "re-entry", "peak"], "Shows how extended breakdowns function as structural devices.")
    ],
    sources: [
      source("Trance breakdown analysis — production forums", "Community analysis of extended breakdown techniques.", "needs")
    ],
    commonMistakes: "Students fill the breakdown with busy material; the extended breakdown's power is in its stillness, not its activity.",
    conclusion: "Extended breakdown form makes emptiness structural: the breakdown is not an interruption — it is the point of the track."
  },
  {
    id: "driving-trance",
    title: "Driving Trance Journey",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "trance",
    form: "continuous-drive",
    tempo: "138-145 BPM",
    tempoGroup: "fast",
    difficulty: "easy",
    definition: "A high-energy trance form with minimal breakdowns and sustained bassline drive, prioritizing forward motion over emotional contrast.",
    traits: ["continuous drive", "minimal breakdowns", "bassline focus", "forward momentum"],
    sections: [
      section("Immediate kick", 16, 0.32, 0.08, "Kick drum enters within seconds — no long intro.", "Driving trance does not wait; the kick starts the journey immediately."),
      section("Bassline lock", 16, 0.48, 0.10, "Pulsing bassline locks in, creating continuous energy.", "The bass is the engine; it does not stop for the entire track.", "drum fill"),
      section("Percussion layers", 16, 0.58, 0.14, "Open hats, rides, and secondary percussion add speed.", "Percussion layers increase without breaking the bassline's continuity."),
      section("Rising arp", 32, 0.70, 0.48, "Arpeggio enters and gradually rises in filter and density.", "The arp adds harmonic motion while the rhythm section remains unchanged."),
      section("Tension ramp", 24, 0.82, 0.82, "Snares, crashes, and filter rise create tension without dropping energy.", "The tension ramp maintains full energy while increasing anticipation.", "riser peak"),
      section("Peak sustain", 32, 0.94, 0.32, "All elements at maximum — sustained high-energy plateau.", "The peak is not a moment; it is a sustained state of high drive."),
      section("Brief reset", 16, 0.72, 0.48, "Filter closes, hats close, but kick and bass continue.", "The reset is a breath, not a breakdown — momentum is preserved."),
      section("Final push", 32, 0.96, 0.38, "Full energy returns with added intensity or arrangement variation.", "The final push closes the journey with the highest drive level."),
      section("Outro", 16, 0.35, 0.06, "Kick and bass persist while other elements fade.", "The outro preserves mix-out compatibility — the engine runs until the very end.")
    ],
    examples: [
      example("Driving trance arrangement model", "Study model", "N/A", "trance", ["kick", "bass", "percussion", "arp", "ramp", "peak", "reset", "final push", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("High-energy trance structural archetype", "Study model", "N/A", "trance", ["immediate kick", "bass drive", "sustain", "push"], "Shows how driving trance maintains energy without breakdowns.")
    ],
    sources: [
      source("Trance production guides — howtomakeelectronicmusic.com", "Practical guide for driving trance arrangement.", "needs")
    ],
    commonMistakes: "Students think driving trance is 'just loud'; the arrangement still needs a clear tension arc — it just happens without breakdown pauses.",
    conclusion: "Driving trance form is engine-based architecture: the bassline never stops, and the arrangement is about what rides on top of the drive."
  },
  {
    id: "progressive-trance-evolution",
    title: "Progressive Trance Evolution",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "trance",
    form: "progressive-evolution",
    tempo: "130-136 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A slower-evolving trance form blending progressive house patience with trance harmonic development, longer sections, and tech-infused sound design.",
    traits: ["progressive length", "trance harmonies", "tech-infused", "slow evolution"],
    sections: [
      section("Deep intro", 32, 0.10, 0.05, "Minimal texture with tech-infused percussion and distant arpeggios.", "The intro is patient — it builds the sound world before the rhythm arrives."),
      section("Tech groove", 32, 0.35, 0.08, "Kick with off-beat hi-hats and a tech-infused percussion pattern.", "The groove is more complex than standard trance, reflecting the progressive influence.", "drum fill"),
      section("Bass enters", 16, 0.48, 0.12, "Bassline enters — often a grooving, filtered pattern rather than a simple pulse.", "The bass mediates between the tech groove and the coming harmonic material."),
      section("Harmonic development 1", 32, 0.58, 0.22, "First chord progression or pad layer, slowly evolving.", "Harmonic development emerges gradually, as if the chords are discovering themselves."),
      section("Harmonic development 2", 32, 0.68, 0.38, "Second harmonic layer or key shift, deepening the progression.", "Multiple harmonic layers create the progressive trance signature: depth through cumulative harmony."),
      section("Build", 24, 0.78, 0.82, "Long, layered build with percussion acceleration and filter sweep.", "The build respects the progressive tempo — it takes time, it does not rush.", "riser peak"),
      section("Peak", 32, 0.92, 0.28, "Maximum release — layered harmonies, driving bass, full percussion.", "The peak is the intersection of trance catharsis and progressive patience."),
      section("Progressive decomposition", 32, 0.55, 0.18, "Gradual element removal with harmonic resolution.", "Decomposition is not a breakdown; it is the harmonic story gently closing."),
      section("Outro", 32, 0.22, 0.05, "Tech percussion fades, atmosphere returns.", "The outro is a return to the opening space — the journey is complete.")
    ],
    examples: [
      example("Progressive trance evolution schematic", "Study model", "N/A", "trance", ["deep intro", "tech groove", "bass", "harmony 1", "harmony 2", "build", "peak", "decomposition", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Tech-trance hybrid form study", "Study model", "N/A", "trance", ["pulse", "groove", "development", "build", "release", "close"], "Shows the genre hybrid formation between progressive house and trance.")
    ],
    sources: [
      source("Progressive trance — production forum analysis", "Communityourced analysis of progressive trance arrangement.", "needs")
    ],
    commonMistakes: "Students apply trance breakdown structure to progressive tempos; progressive trance requires longer sections to honour the slower pace.",
    conclusion: "Progressive trance form is tempo-respecting evolution: every section is longer because the form believes the listener will stay."
  },

  // ============================================================
  // 6. DRUM & BASS — 4 new forms
  // ============================================================
  {
    id: "roller-structure",
    title: "Roller Structure",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "drum & bass",
    form: "roller",
    tempo: "170-175 BPM",
    tempoGroup: "fast",
    difficulty: "easy",
    definition: "A groove-focused DnB form where rolling breakbeats and basslines sustain continuous energy with minimal drops, minimal breakdowns, and maximum flow.",
    traits: ["rolling breaks", "continuous groove", "minimal drops", "flow-state"],
    sections: [
      section("Beat intro", 16, 0.28, 0.05, "Breakbeat pattern introduces the rolling rhythm.", "The beat in roller DnB is the star; it must be compelling enough to carry the track alone."),
      section("Bass enters", 16, 0.45, 0.08, "Sub-bass or rolling bassline locks into the break.", "The bass and break form a single groove entity; they are not separable."),
      section("Atmo layer", 16, 0.55, 0.12, "Ambient pad, vocal snippet, or atmospheric texture enters.", "Atmosphere adds colour without breaking the rolling momentum."),
      section("Rolling groove", 32, 0.68, 0.16, "Full arrangement — beat, bass, atmosphere — locked and rolling.", "The rolling groove is the default state; it can sustain for a long time."),
      section("Variation 1", 16, 0.72, 0.28, "Beat pattern shifts slightly or a new percussion element enters.", "Variation 1 is a small lift within the roll — a window, not a break.", "fill"),
      section("Variation 2", 16, 0.78, 0.22, "Bassline filter opens or closes, changing the groove's tonality.", "Variation 2 is the second lift within the roll, preventing fatigue.", "drum fill"),
      section("Rolling peak", 32, 0.88, 0.18, "Maximum groove density — all elements firing.", "The rolling peak is the flow state; the track is at its most hypnotic."),
      section("Outro", 16, 0.32, 0.05, "Elements exit, beat persists, final reduction.", "The outro preserves the roll until the last second.")
    ],
    examples: [
      example("DnB roller arrangement model", "Study model", "N/A", "drum & bass", ["beat", "bass", "atmo", "groove", "variation 1", "variation 2", "peak", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Liquid roller structural archetype", "Study model", "N/A", "liquid DnB", ["break", "bass", "pads", "roll", "variation", "climax", "outro"], "Shows the roller form in a liquid DnB context.")
    ],
    sources: [
      source("DnB production — EDMProd guide", "Practical guide for drum & bass arrangement.", "needs"),
      source("DnB roller arrangement analysis — production forums", "Comunity analysis of the roller form convention.", "needs")
    ],
    commonMistakes: "Students build a drop into a roller and break the flow; the roller form depends on continuous momentum, not dramatic contrast.",
    conclusion: "Roller form is groove as architecture: the track does not tell a story — it creates a state and sustains it."
  },
  {
    id: "dancefloor-dnb",
    title: "Dancefloor DnB Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "drum & bass",
    form: "dancefloor-dnb",
    tempo: "172-178 BPM",
    tempoGroup: "fast",
    difficulty: "easy",
    definition: "A high-contrast DnB form designed for club impact, with clear build-drop-breakdown sections and accessible melodic hooks.",
    traits: ["club impact", "build-drop", "accessible hooks", "high contrast"],
    sections: [
      section("Intro", 16, 0.20, 0.06, "Filtered break, atmosphere, and anticipation.", "The intro is functional — it lets the DJ mix in and the crowd orient."),
      section("Rolling beat", 16, 0.38, 0.08, "Full breakbeat with hi-hats and percussion.", "The rolling beat is the foundation; it must be clean and powerful.", "drum fill"),
      section("Bass enters", 16, 0.50, 0.12, "Bassline enters — often mid-range and aggressive.", "Dancefloor bass is designed for physical impact in a club system."),
      section("Hook", 16, 0.60, 0.18, "Melodic hook or synth riff — the track's identity.", "The hook must be memorable enough to survive the drop."),
      section("Build", 32, 0.75, 0.88, "Percussion acceleration, filter sweep, rising tension.", "The build prepares the crowd; the drop is the payoff.", "riser peak"),
      section("Drop", 32, 0.96, 0.28, "Full arrangement at maximum intensity — bass, break, hook.", "The drop is the club moment; it must feel like the arrival of energy."),
      section("Breakdown", 16, 0.30, 0.82, "Drums removed, hook or pad sustains atmosphere.", "The breakdown is brief but essential — it creates the space for the second drop.", "silence"),
      section("Second build", 24, 0.78, 0.84, "Second build-up with additional elements or arrangement.", "The second build proves the form can repeat without losing impact."),
      section("Second drop", 32, 0.98, 0.30, "Full drop with variation or extension.", "The second drop is the form's confirmation; it must hit as hard as the first."),
      section("Outro", 16, 0.25, 0.05, "Filtered reduction for mix-out.", "The outro returns to the opening texture for DJ functionality.")
    ],
    examples: [
      example("Dancefloor DnB arrangement schematic", "Study model", "N/A", "drum & bass", ["intro", "beat", "bass", "hook", "build", "drop", "breakdown", "second build", "second drop", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Club DnB structural archetype", "Study model", "N/A", "drum & bass", ["mix intro", "break", "bass", "rise", "drop", "reset", "rise", "drop"], "Shows the build-drop-breakdown arc applied to DnB tempos.")
    ],
    sources: [
      source("Dancefloor DnB production — UKF/community guides", "Community analysis of dancefloor DnB arrangement.", "needs")
    ],
    commonMistakes: "Students write a drop without a hook; the hook is what makes the drop recognizable, not the bass.",
    conclusion: "Dancefloor DnB form is club catharsis at 174 BPM: the breakbeat provides intensity, the hook provides memory, and the drop provides release."
  },
  {
    id: "neurofunk-pressure",
    title: "Neurofunk Pressure Arc",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "drum & bass",
    form: "neurofunk-pressure",
    tempo: "172-176 BPM",
    tempoGroup: "fast",
    difficulty: "hard",
    definition: "A dark, technically intricate DnB form with complex bass design, tense atmospheres, and precision-engineering tension arcs.",
    traits: ["complex bass", "dark atmosphere", "precision tension", "technical intricacy"],
    sections: [
      section("Atmosphere", 16, 0.10, 0.14, "Dark ambient texture, filtered noise, impending mood.", "The neurofunk atmosphere is never neutral — it signals danger from the start."),
      section("Break enters", 16, 0.30, 0.08, "Complex breakbeat pattern enters — often with ghost notes.", "The break in neurofunk is not a loop; it is a programmed rhythmic statement.", "drum fill"),
      section("Bass design A", 16, 0.48, 0.28, "First bass pattern — intricate, modulated, aggressive.", "The bass in neurofunk is the lead instrument; it carries both rhythm and melody."),
      section("Bass design B", 16, 0.55, 0.32, "Second bass pattern — contrasting texture or modulation.", "Multiple bass patterns create the neurofunk signature: the bass evolves within the form."),
      section("Tension build", 32, 0.68, 0.88, "Complex filter automation, percussion layering, atmospheric intensification.", "The tension build is a precision instrument — every filter move is calculated.", "riser peak"),
      section("Pressure release", 32, 0.90, 0.38, "Full arrangement — the most complex bass pattern with full break.", "The release in neurofunk is not simple — the full arrangement is dense, not empty."),
      section("Technical breakdown", 16, 0.35, 0.72, "Reduced to bass design and atmosphere — a showcase of sound design.", "The technical breakdown demonstrates that neurofunk is as much about sound design as arrangement.", "silence"),
      section("Final assault", 32, 0.94, 0.42, "Maximum complexity — all bass patterns, full break, full atmosphere.", "The final assault is the track's statement of technical mastery."),
      section("Collapse", 16, 0.18, 0.12, "Elements degrade into noise and atmosphere.", "The collapse is not a resolution — it is the system powering down.")
    ],
    examples: [
      example("Neurofunk pressure arc model", "Study model", "N/A", "drum & bass", ["atmo", "break", "bass A", "bass B", "build", "pressure release", "tech break", "final assault", "collapse"], "Generalized model; no copyrighted tracks referenced."),
      example("Technical DnB arrangement study", "Study model", "N/A", "drum & bass", ["texture", "rhythm", "bass evolution", "tension", "full complexity", "reduction"], "Shows how neurofunk emphasizes sound design as structural element.")
    ],
    sources: [
      source("Neurofunk production — producer community", "Community analysis of neurofunk arrangement practices.", "needs")
    ],
    commonMistakes: "Students build a complex bass and stop; neurofunk form requires that the bass design be placed within a tension arc, not left as a loop.",
    conclusion: "Neurofunk form is precision engineering: every filter sweep, every bass modulation, every break edit is a calculated component of an intricate tension machine."
  },
  {
    id: "liquid-dnb-narrative",
    title: "Liquid DnB Narrative",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "drum & bass",
    form: "liquid-narrative",
    tempo: "170-174 BPM",
    tempoGroup: "fast",
    difficulty: "medium",
    definition: "A melodic, atmospheric DnB form where emotional chord progressions, vocal or instrumental melodies, and rolling breaks create a narrative arc.",
    traits: ["melodic focus", "emotional chords", "atmospheric breaks", "narrative arc"],
    sections: [
      section("Atmospheric intro", 32, 0.10, 0.04, "Warm pads, piano or guitar, field recordings — no break.", "The atmospheric intro establishes the emotional key before the rhythm arrives."),
      section("Break enters", 16, 0.30, 0.06, "Rolling break enters gently — often a smooth, uncluttered pattern.", "The break in liquid DnB is warm, not aggressive; it supports, not dominates."),
      section("Bass", 16, 0.42, 0.08, "Warm sub-bass or melodic bassline supports the atmosphere.", "The bass in liquid is felt, not shown — it provides depth without drama."),
      section("Melody", 16, 0.52, 0.14, "Main melody — piano, strings, or vocal — enters.", "The melody is the narrative voice; the listener attaches emotion to it.", "fill"),
      section("Development", 32, 0.62, 0.28, "Melody develops, chords expand, arrangement fills out.", "Development deepens the narrative; the same melody gains new meaning with harmonic context."),
      section("Emotional rise", 24, 0.75, 0.68, "Strings layer, percussion intensifies, emotional tension builds.", "The emotional rise is the narrative turning point — the story reaches its peak feeling.", "riser peak"),
      section("Climax", 32, 0.90, 0.22, "Full arrangement — melody, strings, rolling break, emotional peak.", "The climax is the emotional destination of the narrative arc."),
      section("Reflection", 32, 0.55, 0.14, "Elements fall away, melody persists, atmosphere returns.", "Reflection allows the listener to sit with the emotional residue of the climax."),
      section("Close", 32, 0.22, 0.06, "Break fades, pads and melody dissolve.", "The close returns to the atmosphere of the intro — the story is complete.")
    ],
    examples: [
      example("Liquid DnB narrative model", "Study model", "N/A", "drum & bass", ["atmo intro", "break", "bass", "melody", "development", "emotional rise", "climax", "reflection", "close"], "Generalized model; no copyrighted tracks referenced."),
      example("Melodic DnB structural archetype", "Study model", "N/A", "drum & bass", ["intro", "groove", "theme", "rise", "peak", "settle", "outro"], "Shows how liquid DnB applies songwriting narrative to breakbeat tempos.")
    ],
    sources: [
      source("Liquid DnB production guides", "Community and educational sources for liquid drum & bass arrangement.", "needs")
    ],
    commonMistakes: "Students write a beautiful intro but never develop the melody; liquid DnB requires the melody to evolve across the form, not just repeat.",
    conclusion: "Liquid DnB form is emotional narrative at 174 BPM: the breakbeat provides the pulse, but the chord progression and melody tell the story."
  },

  // ============================================================
  // 7. UK GARAGE — 3 new forms
  // ============================================================
  {
    id: "2-step-club-form",
    title: "2-Step Club Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "UK garage",
    form: "2-step",
    tempo: "128-138 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A syncopated UKG form built around the 2-step rhythm pattern, with bassline-skip interplay and minimal, section-light arrangement.",
    traits: ["2-step rhythm", "bassline-skip", "syncopated groove", "light arrangement"],
    sections: [
      section("Intro — skip", 16, 0.18, 0.05, "Shuffling hi-hats and rim clicks establish the skip.", "The skip rhythm is the 2-step identity; it teaches the listener the swing before the kick arrives."),
      section("Kick lock", 8, 0.32, 0.07, "Kick enters on 1 and 3 — minimal, swinging.", "The kick in 2-step is not four-on-the-floor; it swings and leaves space."),
      section("Bassline", 16, 0.48, 0.12, "Syncopated bassline enters — rhythmic, not harmonic.", "The bassline in 2-step shares rhythmic space with the kick; they dance around each other.", "drum fill"),
      section("Vocal/hook", 16, 0.55, 0.16, "Vocal phrase or hook enters as a textural element.", "The vocal in 2-step is often treated as another instrument in the skip arrangement."),
      section("Garage groove", 32, 0.68, 0.18, "Full groove — skip, bass, vocal, extras — locked.", "The garage groove is the form's comfortable state; it can breathe here."),
      section("Section shift", 16, 0.72, 0.38, "Bass pattern changes or arrangement variation.", "The section shift is subtle — a bassline change is often enough to signal a new section.", "transition fill"),
      section("Peak", 32, 0.82, 0.22, "Maximum density with added percussion or vocal layers.", "The peak in 2-step is not a drop — it is the groove at its fullest."),
      section("Outro — skip", 16, 0.24, 0.05, "Bass exits, kick fades, skip rhythm closes.", "The outro returns to the opening skip — the form completes the rhythmic circle.")
    ],
    examples: [
      example("2-step arrangement model", "Study model", "N/A", "UK garage", ["skip", "kick", "bass", "vocal", "groove", "shift", "peak", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Classic UKG structural archetype", "Study model", "N/A", "UK garage", ["shuffle intro", "bass", "vocal", "groove", "variation", "full groove"], "Shows the characteristic syncopated structure of 2-step.")
    ],
    sources: [
      source("UK garage production — genre analysis", "Community analysis of UKG arrangement patterns.", "needs")
    ],
    commonMistakes: "Students write a four-on-the-floor kick into 2-step and break the swing; the kick and bassline must be rhythmic partners, not competitors.",
    conclusion: "2-step form is skip architecture: the form is defined by what happens in the gaps between the kick, the bass, and the vocal."
  },
  {
    id: "vocal-garage",
    title: "Vocal Garage Structure",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "UK garage",
    form: "vocal-garage",
    tempo: "128-135 BPM",
    tempoGroup: "medium",
    difficulty: "easy",
    definition: "A UKG form centred on R&B-influenced vocal arrangements, with verses, choruses, and bridges mapped onto 2-step rhythms.",
    traits: ["R&B influence", "vocal arrangement", "verse-chorus mapping", "2-step foundation"],
    sections: [
      section("Intro", 16, 0.15, 0.05, "Minimal rhythm, filtered vocal snippet or pad.", "The intro is brief; the vocal is the focus and should enter relatively quickly."),
      section("Verse", 16, 0.35, 0.12, "Vocal verse over reduced 2-step arrangement.", "The verse is where the vocal story begins; the arrangement supports without competing.", "fill"),
      section("Pre-chorus", 8, 0.55, 0.62, "Tension rises through vocal phrasing and arrangement lift.", "The pre-chorus in vocal garage lifts the energy without a traditional build."),
      section("Chorus", 16, 0.75, 0.22, "Full arrangement with vocal hook — the song's centre.", "The chorus is the payoff; the 2-step rhythm supports the vocal melody."),
      section("Verse 2", 16, 0.38, 0.14, "Second verse with arrangement variation.", "The second verse keeps the vocal story moving while the beat stays familiar."),
      section("Bridge", 16, 0.58, 0.48, "Harmonic or vocal shift before final return.", "The bridge provides contrast in a form that keeps its rhythmic language consistent."),
      section("Final chorus", 24, 0.85, 0.24, "Extended chorus with ad-libs or arrangement expansion.", "The final chorus is the vocal's closing statement; the arrangement expands to celebrate it."),
      section("Outro", 16, 0.22, 0.06, "Arrangement reduces, vocal fragments, beat fades.", "The outro lets the vocal dissolve into the 2-step rhythm.")
    ],
    examples: [
      example("Vocal UKG arrangement schematic", "Study model", "N/A", "UK garage", ["intro", "verse", "pre-chorus", "chorus", "verse 2", "bridge", "final chorus", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("R&B-infused UKG structural study", "Study model", "N/A", "UK garage", ["vocal intro", "verse", "lift", "hook", "verse", "change", "final hook", "outro"], "Shows the R&B songwriting influence on UKG arrangement.")
    ],
    sources: [
      source("UKG vocal arrangement — production community", "Community analysis of vocal arrangement in UK garage.", "needs")
    ],
    commonMistakes: "Students treat the vocal as a layer over a track; in vocal garage, the arrangement is built around the vocal structure, not the other way around.",
    conclusion: "Vocal garage form is songwriting within rhythm: the verse-chorus structure is adapted to 2-step tempo and swing, not replaced by it."
  },
  {
    id: "modern-ukg-arrangement",
    title: "Modern UKG Arrangement",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "UK garage",
    form: "modern-ukg",
    tempo: "126-140 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A contemporary UKG form blending classic 2-step with modern production — darker sound design, bassline focus, and genre-fluid arrangement.",
    traits: ["modern production", "bassline focus", "darker sound", "genre-fluid"],
    sections: [
      section("Atmospheric intro", 16, 0.14, 0.06, "Dark pad or bass texture, distant percussion, no clear rhythm.", "The modern UKG intro is atmospheric; it signals a shift from the classic sound."),
      section("2-step pulse", 16, 0.32, 0.08, "Syncopated kick and hi-hats establish the contemporary 2-step feel.", "The pulse is the anchor — modern UKG keeps the classic rhythm but updates the production.", "drum fill"),
      section("Bassline", 16, 0.52, 0.18, "Dark, modulated bassline enters — often with glide or wobble.", "The bassline in modern UKG is more aggressive and central than in classic garage."),
      section("Vocal/texture", 16, 0.58, 0.22, "Vocal snippet, spoken word, or textural hook enters.", "The vocal element is often treated as a sample rather than a sung melody."),
      section("Full groove", 32, 0.70, 0.24, "All elements locked — rhythm, bass, atmosphere.", "The full groove in modern UKG is darker and denser than classic garage."),
      section("Bass switch", 16, 0.78, 0.42, "Bassline pattern changes — a new sequence or modulation.", "The bass switch is the primary structural event in modern UKG.", "transition fill"),
      section("Peak", 32, 0.88, 0.26, "Maximum density with added percussion or vocal processing.", "The peak is the groove at its most intense, often with bass at center."),
      section("Outro", 16, 0.26, 0.06, "Atmosphere returns, elements exit, bass decays.", "The outro returns to the dark atmosphere of the intro.")
    ],
    examples: [
      example("Modern UKG arrangement model", "Study model", "N/A", "UK garage", ["atmo intro", "2-step pulse", "bass", "vocal", "full groove", "bass switch", "peak", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Contemporary UKG structural archetype", "Study model", "N/A", "UK garage", ["dark intro", "syncopation", "bass focus", "breakdown", "bass variation", "full intensity"], "Shows the evolution of UKG arrangement in the modern context.")
    ],
    sources: [
      source("Modern UKG — production community analysis", "Community analysis of contemporary UKG arrangement trends.", "needs")
    ],
    commonMistakes: "Students treat modern UKG as 'darker 2-step' with the same arrangement; the bassline becomes the primary structural driver in modern UKG, not just the rhythm.",
    conclusion: "Modern UKG form is the evolution of 2-step: the rhythm remains, but the bassline takes a central structural role, and the atmosphere darkens."
  },

  // ============================================================
  // 8. HARDER STYLES — 3 new forms
  // ============================================================
  {
    id: "hardstyle-abcd",
    title: "Hardstyle A-B-C-D Architecture",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "hardstyle",
    form: "abcd",
    tempo: "145-155 BPM",
    tempoGroup: "fast",
    difficulty: "medium",
    definition: "A hardstyle form structured in four distinct phases (A-B-C-D): intro, build, climax, and break, with pitched kick variation and anti-climax techniques.",
    traits: ["ABCD structure", "pitched kick", "anti-climax", "hardstyle signature"],
    sections: [
      section("A — Intro", 16, 0.20, 0.05, "Atmospheric intro with hardstyle kick teaser, filtered melody.", "Phase A is the introduction — it sets the key and mood without the full intensity."),
      section("A2 — Kick preview", 16, 0.38, 0.10, "Kick enters with a preview of the main riff.", "The kick preview lets the crowd know this is hardstyle without fully committing.", "drum fill"),
      section("B — Build", 32, 0.62, 0.84, "Extended build with snare rolls, pitched kick acceleration, rising tension.", "Phase B is the preparation — the pitched kick escalation is the hardstyle build signature.", "riser peak"),
      section("C — Climax", 32, 0.94, 0.32, "Full arrangement: main lead, kick, bass — maximum intensity.", "Phase C is the climax — the complete hardstyle experience at full power."),
      section("C2 — Anti-climax", 16, 0.72, 0.68, "Arrangement drops energy but not tempo — kick continues, melody fades.", "The anti-climax is a hardstyle innovation: energy dips while tempo holds, creating tension for the next climax."),
      section("D — Break", 16, 0.28, 0.72, "Drums removed — melody or vocal sustains in a vulnerable space.", "Phase D is the emotional reset — the hardest form allows a moment of softness.", "silence"),
      section("B2 — Second build", 24, 0.68, 0.82, "Pitched kick and snare roll build-up returns.", "The second build re-establishes the energy after the break."),
      section("C3 — Final climax", 32, 0.98, 0.32, "Final climax with extra elements or key change.", "The final climax is the form's closing statement — the last and biggest peak."),
      section("Outro", 16, 0.24, 0.06, "Kick and lead fade, atmosphere returns.", "The outro closes the form's journey.")
    ],
    examples: [
      example("ABCD hardstyle arrangement schematic", "Study model", "N/A", "hardstyle", ["A intro", "A2 kick", "B build", "C climax", "C2 anti-climax", "D break", "B2 build", "C3 climax", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Modern hardstyle structural archetype", "Study model", "N/A", "hardstyle", ["intro", "build", "climax", "drop", "break", "build", "final climax"], "Shows the adaptation of the ABCD convention in contemporary hardstyle.")
    ],
    sources: [
      source("Hardstyle production — community guides", "Community analysis of hardstyle ABCD arrangement.", "needs"),
      source("Hardstyle arrangement — Fear FM production guides", "Reference for hardstyle structural conventions.", "needs")
    ],
    commonMistakes: "Students treat hardstyle climax as a drop; the climax is a sustained peak, not a moment — the ABCD form requires each phase to have duration.",
    conclusion: "Hardstyle ABCD form is phase architecture: each letter represents a distinct functional state, and the form's power is in the contrast between them."
  },
  {
    id: "reverse-bass-form",
    title: "Reverse Bass Form",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "hardstyle",
    form: "reverse-bass",
    tempo: "145-152 BPM",
    tempoGroup: "fast",
    difficulty: "medium",
    definition: "A hardstyle form distinguished by the reverse bass technique — a distorted, reversed kick-tail that creates the genre's signature rolling groove.",
    traits: ["reverse bass", "rolling groove", "distorted kick", "early hardstyle feel"],
    sections: [
      section("Intro", 16, 0.18, 0.05, "Filtered kick preview and atmosphere — the reverse bass is hinted.", "The intro teases the reverse bass without revealing the full rolling groove."),
      section("Reverse bass intro", 16, 0.35, 0.08, "The reverse bass technique is introduced — kick with swelling distorted tail.", "The reverse bass is the main instrument; it is both rhythm and texture.", "drum fill"),
      section("Groove lock", 16, 0.48, 0.12, "Hi-hats and percussion join the rolling reverse bass.", "The groove lock makes the reverse bass a dance movement, not just a sound design feature."),
      section("Melody/hook", 16, 0.58, 0.18, "Simple melody or screech enters over the rolling bass.", "The melody in reverse bass form is secondary — it colours the rolling foundation."),
      section("Build — kick roll", 24, 0.72, 0.82, "Pitched kick acceleration leading into the climax.", "The kick roll is the classic transition into the full reverse bass climax.", "riser peak"),
      section("Climax", 32, 0.92, 0.30, "Full arrangement: reverse bass full, melody, percussion, maximum rolling energy.", "The climax is the reverse bass at its fullest — the rolling groove becomes the entire arrangement."),
      section("Breakdown", 16, 0.28, 0.72, "Melody sustains, reverse bass pauses, atmosphere builds.", "The breakdown gives the rolling bass a rest, making its return more impactful.", "silence"),
      section("Final climax", 32, 0.96, 0.32, "Reverse bass returns with full force and added layers.", "The final climax re-establishes the rolling groove, now intensified by the absence."),
      section("Outro", 16, 0.22, 0.06, "Reverse bass fades, elements exit.", "The outro lets the rolling groove dissolve.")
    ],
    examples: [
      example("Reverse bass arrangement model", "Study model", "N/A", "hardstyle", ["intro", "reverse bass intro", "groove", "melody", "build", "climax", "breakdown", "final climax", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Early hardstyle reverse bass form", "Study model", "N/A", "hardstyle", ["filter intro", "reverse bass", "groove", "screech", "kick roll", "peak", "melodic break", "return"], "Shows the classic early hardstyle arrangement with reverse bass as the structural centre.")
    ],
    sources: [
      source("Reverse bass technique — hardstyle production community", "Community analysis of reverse bass production and arrangement.", "needs")
    ],
    commonMistakes: "Students treat reverse bass as a sound design trick; in this form, the reverse bass is the structural backbone — the arrangement serves it, not the other way.",
    conclusion: "Reverse bass form is rolling architecture: the kick-tail creates a groove so distinctive that the entire arrangement is built to support and showcase it."
  },
  {
    id: "rawstyle-tension",
    title: "Rawstyle Tension Structure",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "hardstyle",
    form: "rawstyle-tension",
    tempo: "150-160 BPM",
    tempoGroup: "fast",
    difficulty: "hard",
    definition: "A darker, harder hardstyle form with gated kicks, aggressive sound design, and sustained tension arcs that delay resolution.",
    traits: ["gated kicks", "dark tension", "delayed resolution", "aggressive sound design"],
    sections: [
      section("Dark intro", 16, 0.12, 0.12, "Industrial noise, distorted atmos, no melodic content.", "The dark intro establishes the rawstyle mood: it is hostile, not welcoming."),
      section("Kick preview", 16, 0.32, 0.18, "Gated, punched kick enters — raw and aggressive.", "The rawstyle kick is intentionally harsh; it signals that this is the harder edge of the genre.", "drum fill"),
      section("Groove", 16, 0.48, 0.22, "Percussion and bass complement the gated kick.", "The groove in rawstyle is minimal; the kick carries most of the rhythmic weight."),
      section("Tension build 1", 32, 0.62, 0.88, "Extended build with gated kick acceleration, noise layering.", "The tension build in rawstyle is longer and more uncomfortable than in standard hardstyle.", "riser peak"),
      section("False climax", 16, 0.78, 0.64, "Brief release that cuts before full satisfaction — a structural fake-out.", "The false climax is a signature rawstyle technique: the drop never fully arrives."),
      section("Tension build 2", 24, 0.74, 0.92, "Second build — even darker, even more aggressive.", "The second build raises the stakes after the false climax.", "riser peak"),
      section("True climax", 32, 0.94, 0.38, "Full release — gated kick, bass, noise, maximum intensity.", "The true climax is earned by the delayed resolution; it hits harder because it was withheld."),
      section("Breakdown — atmosphere", 16, 0.22, 0.58, "Sustained noise or drone — no melody, no relief.", "The rawstyle breakdown is not melodic; it maintains tension through atmosphere alone.", "silence"),
      section("Final assault", 32, 0.96, 0.42, "Most intense section — raw kicks, distorted everything.", "The final assault closes the form at maximum aggression."),
      section("Outro — decay", 16, 0.16, 0.10, "Elements decay into noise and feedback.", "The rawstyle outro decays rather than resolves.")
    ],
    examples: [
      example("Rawstyle tension arrangement model", "Study model", "N/A", "hardstyle", ["dark intro", "kick", "groove", "tension 1", "false climax", "tension 2", "true climax", "break", "final assault", "decay"], "Generalized model; no copyrighted tracks referenced."),
      example("Modern rawstyle structural archetype", "Study model", "N/A", "hardstyle", ["noise intro", "gated kick", "build", "fake drop", "re-build", "actual drop", "dark break", "final"], "Shows the delayed-resolution technique central to rawstyle.")
    ],
    sources: [
      source("Rawstyle production — hardstyle community", "Community analysis of rawstyle tension and arrangement techniques.", "needs")
    ],
    commonMistakes: "Students write rawstyle as 'hardstyle but louder'; rawstyle form is defined by the delayed resolution and the false climax — the listener's satisfaction is intentionally postponed.",
    conclusion: "Rawstyle form is tension-withholding architecture: satisfaction is promised, delayed, promised again, and finally delivered — harder because it was earned through patience."
  },

  // ============================================================
  // 9. BREAKS — 2 new forms
  // ============================================================
  {
    id: "progressive-breaks",
    title: "Progressive Breaks Journey",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "breaks",
    form: "progressive-breaks",
    tempo: "120-135 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A breakbeat-driven form combining progressive house's slow harmonic development with breakbeat's syncopated rhythm, creating a journey-like structure.",
    traits: ["breakbeat", "progressive development", "slow harmony", "journey structure"],
    sections: [
      section("Textural intro", 32, 0.08, 0.04, "Wide pads, atmospheric texture, distant percussion.", "The textural intro is a canvas — it suggests a space, not a tempo."),
      section("Break tease", 16, 0.18, 0.06, "A hint of breakbeat — filtered, distant.", "The break tease suggests the rhythm without committing to it."),
      section("Break enters", 16, 0.32, 0.08, "Full breakbeat pattern enters — rolling and syncopated.", "The breakbeat is the form's engine; once it enters, the journey begins.", "drum fill"),
      section("Bass", 16, 0.44, 0.10, "Bassline locks into the breakbeat.", "The bass and break form a single rhythmic-phonic entity."),
      section("Harmonic layer", 32, 0.54, 0.16, "Pad or chord progression enters — slow, evolving.", "The harmonic layer is the emotional dimension; it lifts the break from rhythm to music."),
      section("Development", 32, 0.64, 0.28, "Harmonic progression develops, breakbeat varies.", "Development in progressive breaks is slow — the form trusts the listener to follow."),
      section("Rise", 24, 0.76, 0.78, "Percussion density increases, filter sweep, harmonic build.", "The rise is progressive and patient — it takes time because the form is a journey, not a sprint.", "riser peak"),
      section("Peak", 32, 0.90, 0.26, "Full arrangement — break, bass, harmony, maximum density.", "The peak is the arrival after the journey — but the breakbeat remains the anchor."),
      section("Decomposition", 32, 0.52, 0.14, "Elements fall away, harmony persists, break reduces.", "Decomposition is gentle; it lets the listener descend from the peak."),
      section("Close", 32, 0.14, 0.05, "Atmosphere returns, breakbeat fades.", "The close returns to the textural space of the intro — the journey is complete.")
    ],
    examples: [
      example("Progressive breaks arrangement model", "Study model", "N/A", "breaks", ["texture", "break tease", "break", "bass", "harmony", "development", "rise", "peak", "decomp", "close"], "Generalized model; no copyrighted tracks referenced."),
      example("Hybrid breaks-progressive structural archetype", "Study model", "N/A", "breaks", ["ambient", "rhythm hint", "full break", "bass", "chords", "evolution", "build", "climax", "release"], "Shows the genre convergence between breaks and progressive house.")
    ],
    sources: [
      source("Progressive breaks production — community analysis", "Community analysis of breakbeat-progressive hybrid arrangement.", "needs")
    ],
    commonMistakes: "Students use breakbeat as a drum loop over a progressive house arrangement; progressive breaks requires that the breakbeat influence the arrangement's pacing, not just its drum sound.",
    conclusion: "Progressive breaks form is rhythm-led journey: the breakbeat determines the journey's pace, and the harmonic development gives it emotional direction."
  },
  {
    id: "nu-skool-breaks",
    title: "Nu-Skool Breaks Structure",
    category: "club",
    categoryLabel: "Club / electronic",
    genre: "breaks",
    form: "nu-skool",
    tempo: "130-140 BPM",
    tempoGroup: "medium",
    difficulty: "medium",
    definition: "A modern breakbeat form with funk-influenced basslines, chopped breaks, and big synth hooks — inheriting the late-90s nu-skool breaks tradition.",
    traits: ["chopped breaks", "funk bass", "big synth hooks", "modern production"],
    sections: [
      section("Intro — break tease", 16, 0.18, 0.05, "Filtered break sample or glitched percussion.", "The break tease is playful — nu-skool is not afraid to show its samples."),
      section("Kick hat", 8, 0.30, 0.06, "Kick and hi-hats establish the funky foundation.", "The kick-hat foundation is simple; the complexity comes from the break."),
      section("Break enters", 16, 0.45, 0.10, "Full breakbeat pattern — chopped, swung, syncopated.", "The break is the signature; it should be recognisable as a break before it resolves into a beat.", "drum fill"),
      section("Funk bass", 16, 0.55, 0.14, "Sliding, syncopated bassline enters — funky and prominent.", "The funk bass in nu-skool is the counterpart to the break; they create tension through their syncopation."),
      section("Synth hook", 16, 0.65, 0.18, "Big synth riff or stab enters — the track's identity.", "The synth hook is the nu-skool calling card; it is bold and melodic."),
      section("Build", 24, 0.75, 0.78, "Percussion acceleration, filter sweep, break intensifies.", "The build in nu-skool is energetic but not as tense as house builds — it is more playful.", "riser peak"),
      section("Drop", 32, 0.90, 0.28, "Full arrangement — break, bass, hook, all elements active.", "The drop is the release of the funky energy that has been building."),
      section("Breakdown", 16, 0.32, 0.58, "Stripped to break and bass — hook drops out.", "The breakdown is minimal; the break and bass can carry interest alone."),
      section("Second drop", 32, 0.92, 0.30, "Full arrangement with hook variation or added layers.", "The second drop confirms the form and adds a twist."),
      section("Outro", 16, 0.24, 0.06, "Break reduces, elements exit, last hook echoes.", "The outro is a playful fade — the break is the last sound heard.")
    ],
    examples: [
      example("Nu-skool breaks arrangement model", "Study model", "N/A", "breaks", ["break tease", "kick-hat", "break", "bass", "hook", "build", "drop", "breakdown", "second drop", "outro"], "Generalized model; no copyrighted tracks referenced."),
      example("Modern breakbeat structural archetype", "Study model", "N/A", "breaks", ["tease", "foundation", "break", "bassline", "riff", "rise", "release", "break", "release", "outro"], "Shows the modern evolution of nu-skool breaks arrangement.")
    ],
    sources: [
      source("Nu-skool breaks — genre history and production analysis", "Community analysis of nu-skool breaks arrangement.", "needs"),
      source("Breakbeat production — MusicRadar guides", "Practical reference for breakbeat arrangement techniques.", "needs")
    ],
    commonMistakes: "Students write a breakbeat track without a strong hook; nu-skool breaks requires the synth hook to be as central as the break.",
    conclusion: "Nu-skool breaks form is funky architecture: the breakbeat provides the energy, the bass provides the groove, and the synth hook provides the identity."
  },

  // ============================================================
  // END: 4 existing + 29 new = 33 total forms
  // ============================================================
];

// ===== HELPERS =====
function section(name, bars, energy, tension, functionText, why, transition) {
  return { name, bars, energy, tension, functionText, why, transition };
}

function example(title, artist, year, style, timecodes, note) {
  return { title, artist, year, style, timecodes, note };
}

function source(title, note, status) {
  return { title, note, status };
}

// ===== STATE =====
const state = {
  selectedId: "club-arc",
  selectedSection: 0,
  explanationMode: "simple",
  revealStep: Infinity,
  compare: false
};

// ===== DOM REFS =====
const els = {
  genre: document.getElementById("genreFilter"),
  form: document.getElementById("formFilter"),
  tempo: document.getElementById("tempoFilter"),
  difficulty: document.getElementById("difficultyFilter"),
  search: document.getElementById("searchInput"),
  formList: document.getElementById("formList"),
  resultCount: document.getElementById("resultCount"),
  category: document.getElementById("selectedCategory"),
  title: document.getElementById("selectedTitle"),
  definition: document.getElementById("selectedDefinition"),
  meta: document.getElementById("metaGrid"),
  timeline: document.getElementById("timeline"),
  energy: document.getElementById("energyCurve"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionExplanation: document.getElementById("sectionExplanation"),
  examples: document.getElementById("examplesList"),
  sources: document.getElementById("sourcesList"),
  comparison: document.getElementById("comparisonView"),
  reveal: document.getElementById("revealButton"),
  simple: document.getElementById("simpleButton"),
  pro: document.getElementById("proButton"),
  compare: document.getElementById("compareButton")
};

// ===== FILTER HELPERS =====
function unique(values) {
  return ["All", ...Array.from(new Set(values)).sort()];
}

function optionHtml(values) {
  return values.map(value => `<option value="${value}">${value}</option>`).join("");
}

function initFilters() {
  els.genre.innerHTML = optionHtml(unique(forms.map(item => item.categoryLabel)));
  els.form.innerHTML = optionHtml(unique(forms.map(item => item.form)));
  els.tempo.innerHTML = optionHtml(["All", "slow", "medium", "fast", "any"]);
  els.difficulty.innerHTML = optionHtml(unique(forms.map(item => item.difficulty)));
}

function currentForm() {
  return forms.find(item => item.id === state.selectedId) || forms[0];
}

function filteredForms() {
  const query = els.search.value.trim().toLowerCase();
  return forms.filter(item => {
    const matchesGenre = els.genre.value === "All" || item.categoryLabel === els.genre.value;
    const matchesForm = els.form.value === "All" || item.form === els.form.value;
    const matchesTempo = els.tempo.value === "All" || item.tempoGroup === els.tempo.value;
    const matchesDifficulty = els.difficulty.value === "All" || item.difficulty === els.difficulty.value;
    const haystack = `${item.title} ${item.genre} ${item.form} ${item.definition} ${item.traits.join(" ")} ${item.sections.map(s => s.name).join(" ")}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesGenre && matchesForm && matchesTempo && matchesDifficulty && matchesQuery;
  });
}

// ===== RENDERERS =====
function renderLibrary() {
  const list = filteredForms();
  els.resultCount.textContent = `${list.length} forms`;
  els.formList.innerHTML = list.map(item => `
    <div class="form-card ${item.id === state.selectedId ? "selected" : ""}" role="button" tabindex="0" data-id="${item.id}">
      <strong>${item.title}</strong>
      <p>${item.definition}</p>
      <div class="tag-row">${item.traits.slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}</div>
    </div>
  `).join("");
}

function renderOverview(form) {
  els.category.textContent = form.categoryLabel;
  els.title.textContent = form.title;
  els.definition.textContent = form.definition;
  const meta = [
    ["Genre", form.genre],
    ["Form", form.form],
    ["Tempo", form.tempo],
    ["Difficulty", form.difficulty]
  ];
  els.meta.innerHTML = meta.map(([label, value]) => `<div class="meta-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function renderTimeline(form) {
  const totalBars = form.sections.reduce((sum, item) => sum + item.bars, 0);
  
  // Timeline blocks with section buttons
  let timelineHtml = form.sections.map((item, index) => {
    const width = Math.max(9, item.bars / totalBars * 100);
    const hidden = index > state.revealStep ? "hidden-step" : "";
    const selected = index === state.selectedSection ? "selected" : "";
    return `<button class="section-block category-${form.category} ${hidden} ${selected}" style="flex: ${width} 1 0" type="button" data-index="${index}">
      <strong>${item.name}</strong>
      <small>${item.bars} bars</small>
    </button>`;
  }).join("");
  
  // Insert transition markers between section buttons
  let timelineWithTransitions = form.sections.map((item, index) => {
    let button = `<button class="section-block category-${form.category} ${index > state.revealStep ? "hidden-step" : ""} ${index === state.selectedSection ? "selected" : ""}" style="flex: ${Math.max(9, item.bars / totalBars * 100)} 1 0" type="button" data-index="${index}">
      <strong>${item.name}</strong>
      <small>${item.bars} bars</small>
    </button>`;
    // Add transition marker after this section (except last)
    if (item.transition && index < form.sections.length - 1) {
      button += `<div class="transition-marker" title="${item.transition}">${item.transition}</div>`;
    }
    return button;
  }).join("");
  
  els.timeline.innerHTML = timelineWithTransitions;

  // Energy bars + tension overlay
  els.energy.innerHTML = form.sections.map(item => {
    const energyH = Math.round(8 + item.energy * 44);
    const tensionH = Math.round(8 + item.tension * 44);
    return `<div class="energy-group">
      <div class="tension-bar" style="height: ${tensionH}px" title="Tension: ${item.tension}"></div>
      <div class="energy-bar" style="height: ${energyH}px" title="Energy: ${item.energy}"></div>
    </div>`;
  }).join("");
}

function renderSection(form) {
  const item = form.sections[state.selectedSection] || form.sections[0];
  els.sectionTitle.textContent = item.name;
  const modeText = state.explanationMode === "simple"
    ? item.why
    : `${item.functionText} In formal terms, this section controls expectation, contrast, and listener orientation inside the larger ${form.form} design.`;

  // Show energy + tension values in section detail
  const energyPct = Math.round(item.energy * 100);
  const tensionPct = Math.round(item.tension * 100);

  els.sectionExplanation.innerHTML = `
    <div class="explain-card"><strong>Function</strong><p>${item.functionText}</p></div>
    <div class="explain-card"><strong>Why it works</strong><p>${modeText}</p></div>
    <div class="values-row">
      <span class="value-badge energy-badge">⚡ Energy ${energyPct}%</span>
      <span class="value-badge tension-badge">〰️ Tension ${tensionPct}%</span>
    </div>
    ${item.transition ? `<div class="explain-card"><strong>Transition out</strong><p>${item.transition}</p></div>` : ""}
    <div class="explain-card"><strong>Student check</strong><p>Ask: what changed here: energy, texture, harmony, density, rhythm, or listener expectation?</p></div>
  `;
}

function renderExamples(form) {
  els.examples.innerHTML = form.examples.map(item => `
    <div class="example-card">
      <strong>${item.title}</strong>
      <p>${item.artist} / ${item.year} / ${item.style}</p>
      <div class="timecode-list">${item.timecodes.map(code => `<span>${code}</span>`).join("")}</div>
      <p>${item.note}</p>
    </div>
  `).join("");
}

function renderSources(form) {
  els.sources.innerHTML = form.sources.map(item => `
    <div class="source-card">
      <strong>${item.title}</strong>
      <p>${item.note}</p>
      <p class="verify ${item.status === "needs" ? "needs" : ""}">${item.status === "needs" ? "потрібна перевірка" : "verified"}</p>
    </div>
  `).join("") + `<div class="source-card"><strong>Typical student mistake</strong><p>${form.commonMistakes}</p></div>`;
}

function renderComparison(form) {
  if (!state.compare) {
    els.comparison.innerHTML = `<div class="compare-card"><strong>Comparison mode is off</strong><p>Use Compare to place this form beside a nearby model and discuss what changes.</p></div>`;
    return;
  }

  const other = forms.find(item => item.category !== form.category) || forms.find(item => item.id !== form.id);
  els.comparison.innerHTML = `
    <div class="compare-card"><strong>${form.title}</strong><p>${form.conclusion}</p></div>
    <div class="compare-card"><strong>${other.title}</strong><p>${other.conclusion}</p></div>
    <div class="compare-card"><strong>Teaching prompt</strong><p>Compare section function first, names second. Similar labels can do different dramatic work.</p></div>
  `;
}

// ===== MAIN RENDER =====
function render() {
  const form = currentForm();
  renderLibrary();
  renderOverview(form);
  renderTimeline(form);
  renderSection(form);
  renderExamples(form);
  renderSources(form);
  renderComparison(form);
  els.simple.classList.toggle("active", state.explanationMode === "simple");
  els.pro.classList.toggle("active", state.explanationMode === "pro");
  els.compare.classList.toggle("active", state.compare);
}

// ===== HANDLERS =====
function installHandlers() {
  [els.genre, els.form, els.tempo, els.difficulty, els.search].forEach(input => input.addEventListener("input", render));

  els.formList.addEventListener("click", event => {
    const button = event.target.closest("[data-id]");
    if (!button) return;
    state.selectedId = button.dataset.id;
    state.selectedSection = 0;
    state.revealStep = Infinity;
    render();
  });

  els.timeline.addEventListener("click", event => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    state.selectedSection = Number(button.dataset.index);
    render();
  });

  els.reveal.addEventListener("click", () => {
    const form = currentForm();
    if (state.revealStep === Infinity) state.revealStep = 0;
    else state.revealStep = state.revealStep + 1 >= form.sections.length ? Infinity : state.revealStep + 1;
    state.selectedSection = state.revealStep === Infinity ? 0 : state.revealStep;
    render();
  });

  els.simple.addEventListener("click", () => { state.explanationMode = "simple"; render(); });
  els.pro.addEventListener("click", () => { state.explanationMode = "pro"; render(); });
  els.compare.addEventListener("click", () => { state.compare = !state.compare; render(); });
}

// ===== INIT =====
initFilters();
installHandlers();
render();
