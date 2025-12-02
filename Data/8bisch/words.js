const WORDS = [
  { id: "de", word: "de", pos: "Artikel",
    de: ['bestimmter Artikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["de"] },
      { label: "Akkusativ", cells: ["dɔ"] },
      { label: "Genitiv", cells: ["dɪ"] },
      { label: "Dativ", cells: ["du"] },
  ]}},
  { id: "ba", word: "ba", pos: "Artikel",
    de: ['unbestimmter Artikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["ba"] },
      { label: "Akkusativ", cells: ["bɔ"] },
      { label: "Genitiv", cells: ["bɪ"] },
      { label: "Dativ", cells: ["bu"] },
  ]}},
  { id: "nɛ", word: "nɛ", pos: "Partikel",
    de: ['Negationspartikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["nɛ"] },
  ]}},
  { id: "o", word: "o", pos: "Partikel",
    de: ['Relativsatzpartikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["o"] },
  ]}},
  { id: "ta", word: "ta", pos: "Partikel",
    de: ['Komplementsatzpartikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ta"] },
  ]}},
  { id: "kɔ", word: "kɔ", pos: "Partikel",
    de: ['Konjunktivpartikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kɔ"] },
  ]}},
  { id: "hɛ", word: "hɛ", pos: "Partikel",
    de: ['Ja-Nein-Fragepartikel'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["hɛ"] },
  ]}},
  { id: "va", word: "va", pos: "Fragewort",
    de: ['Fragewort für Substantive/Pronomen'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["va"] },
      { label: "Akkusativ", cells: ["vae"] },
      { label: "Genitiv", cells: ["vaa"] },
      { label: "Dativ", cells: ["vao"] },
  ]}},
  { id: "ve", word: "ve", pos: "Fragewort",
    de: ['Fragewort für Verben'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv", cells: ["ve"] },
      { label: "Partizip I", cells: ["veɔ"] },
      { label: "Partizip II", cells: ["veɔn"] },
  ]}},
  { id: "vɪ", word: "vɪ", pos: "Fragewort",
    de: ['Fragewort für Adjektive'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["vɪ"] },
      { label: "Komparativ", cells: ["vɪɪ"] },
      { label: "Superlativ", cells: ["vɪu"] },
  ]}},
  { id: "vu", word: "vu", pos: "Fragewort",
    de: ['Fragewort für Präpositionen/Adverbien'],
    origin: "-",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["vu"] },
  ]}},
  { id: "e", word: "e", pos: "Konjunktion",
    de: ['und'],
    origin: "Italienisch 'e'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["e"] },
  ]}},
  { id: "ɪn", word: "ɪn", pos: "Präposition",
    de: ['in'],
    origin: "Englisch 'in'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ɪn"] },
  ]}},
  { id: "kɛ", word: "kɛ", pos: "Präposition",
    de: ['zu'],
    origin: "Indonesisch 'ke'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kɛ"] },
  ]}},
  { id: "kon", word: "kon", pos: "Konjunktion",
    de: ['mit'],
    origin: "Italienisch 'con'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kon"] },
  ]}},
  { id: "na", word: "na", pos: "Präposition",
    de: ['auf'],
    origin: "Polnisch 'na'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["na"] },
  ]}},
  { id: "bɛ", word: "bɛ", pos: "Verb",
    de: ['sein'],
    origin: "Englisch 'be'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv Präsens", cells: ["bɛ"] },
      { label: "Infinitiv Perfekt", cells: ["bɛs"] },
      { label: "Infinitiv Plusquamperfekt", cells: ["bɛt"] },
      { label: "Infinitiv Futur I", cells: ["bɛn"] },
      { label: "Infinitiv Futur II", cells: ["bɛm"] },
      { label: "Partizip I", cells: ["bɔ"] },
      { label: "Partizip II", cells: ["bɔn"] },
  ]}},
  { id: "dla", word: "dla", pos: "Präposition",
    de: ['für'],
    origin: "Russisch 'для'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["dla"] },
  ]}},
  { id: "ɛs", word: "ɛs", pos: "Pronomen",
    de: ['er/sie/es'],
    origin: "Deutsch 'es'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["ɛs"] },
      { label: "Akkusativ", cells: ["ɛse"] },
      { label: "Genitiv", cells: ["ɛsa"] },
      { label: "Dativ", cells: ["ɛso"] },
  ]}},
  { id: "akɛ", word: "akɛ", pos: "Adjektiv",
    de: ['an'],
    origin: "Italienisch 'acceso'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["akɛ"] },
      { label: "Komparativ", cells: ["akɛɪ"] },
      { label: "Superlativ", cells: ["akɛu"] },
  ]}},
  { id: "ad", word: "ad", pos: "Präposition",
    de: ['bei'],
    origin: "Englisch 'at'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ad"] },
  ]}},
  { id: "avɛ", word: "avɛ", pos: "Verb",
    de: ['haben'],
    origin: "Italienisch 'avere'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv Präsens", cells: ["avɛ"] },
      { label: "Infinitiv Perfekt", cells: ["avɛs"] },
      { label: "Infinitiv Plusquamperfekt", cells: ["avɛt"] },
      { label: "Infinitiv Futur I", cells: ["avɛn"] },
      { label: "Infinitiv Futur II", cells: ["avɛm"] },
      { label: "Partizip I", cells: ["avɔ"] },
      { label: "Partizip II", cells: ["avɔn"] },
  ]}},
  { id: "jadɛ", word: "jadɛ", pos: "Verb",
    de: ['werden'],
    origin: "Indonesisch 'menjadi'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv Präsens", cells: ["jadɛ"] },
      { label: "Infinitiv Perfekt", cells: ["jadɛs"] },
      { label: "Infinitiv Plusquamperfekt", cells: ["jadɛt"] },
      { label: "Infinitiv Futur I", cells: ["jadɛn"] },
      { label: "Infinitiv Futur II", cells: ["jadɛm"] },
      { label: "Partizip I", cells: ["jadɔ"] },
      { label: "Partizip II", cells: ["jadɔn"] },
  ]}},
  { id: "mele", word: "mele", pos: "Pronomen",
    de: ['sie (Plural)'],
    origin: "Indonesisch 'mereka'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["mele"] },
      { label: "Akkusativ", cells: ["melee"] },
      { label: "Genitiv", cells: ["melea"] },
      { label: "Dativ", cells: ["meleo"] },
  ]}},
  { id: "pɔ", word: "pɔ", pos: "Präposition",
    de: ['nach'],
    origin: "Polnisch 'po'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["pɔ"] },
  ]}},
  { id: "um", word: "um", pos: "Präposition",
    de: ['um'],
    origin: "Deutsch 'um'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["um"] },
  ]}},
  { id: "psɛd", word: "psɛd", pos: "Präposition",
    de: ['vor (zeitlich)'],
    origin: "Polnisch 'przed'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["psɛd"] },
  ]}},
  { id: "davan", word: "davan", pos: "Präposition",
    de: ['vor (räumlich)'],
    origin: "Italienisch 'davanti'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["davan"] },
  ]}},
  { id: "sopa", word: "sopa", pos: "Präposition",
    de: ['über'],
    origin: "Italienisch 'sopra'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["sopa"] },
  ]}},
  { id: "no", word: "no", pos: "Konjunktion",
    de: ['aber'],
    origin: "Russisch 'но'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["no"] },
  ]}},
  { id: "lɔp", word: "lɔp", pos: "Konjunktion",
    de: ['oder'],
    origin: "Polnisch 'lub'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["lɔp"] },
  ]}},
  { id: "lebɪ", word: "lebɪ", pos: "Adjektiv",
    de: ['mehr'],
    origin: "Indonesisch 'lebih'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["lebɪ"] },
      { label: "Komparativ", cells: ["lebɪɪ"] },
      { label: "Superlativ", cells: ["lebɪu"] },
  ]}},
  { id: "olɪ", word: "olɪ", pos: "Adjektiv",
    de: ['nur'],
    origin: "Englisch 'only'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["olɪ"] },
      { label: "Komparativ", cells: ["olɪɪ"] },
      { label: "Superlativ", cells: ["olɪu"] },
  ]}},
  { id: "fɪno", word: "fɪno", pos: "Präposition",
    de: ['bis'],
    origin: "Italienisch 'fino'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["fɪno"] },
  ]}},
  { id: "ma", word: "ma", pos: "Pronomen",
    de: ['man'],
    origin: "Deutsch 'man'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["ma"] },
      { label: "Akkusativ", cells: ["mae"] },
      { label: "Genitiv", cells: ["maa"] },
      { label: "Dativ", cells: ["mao"] },
  ]}},
  { id: "kɔnto", word: "kɔńto", pos: "Präposition",
    de: ['gegen'],
    origin: "Italienisch 'contro'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kɔńto"] },
  ]}},
  { id: "mɪ", word: "mɪ", pos: "Pronomen",
    de: ['wir'],
    origin: "Russisch 'мы'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["mɪ"] },
      { label: "Akkusativ", cells: ["mɪe"] },
      { label: "Genitiv", cells: ["mɪa"] },
      { label: "Dativ", cells: ["mɪo"] },
  ]}},
  { id: "ponɔf", word: "ponɔf", pos: "Adverb",
    de: ['wieder'],
    origin: "Polnisch 'ponownie'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ponɔf"] },
  ]}},
  { id: "ʃedɛs", word: "ʃedɛs", pos: "Präposition",
    de: ['durch'],
    origin: "Russisch 'через'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ʃedɛs"] },
  ]}},
  { id: "zoto", word: "zoto", pos: "Präposition",
    de: ['unter'],
    origin: "Italienisch 'sotto'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["zoto"] },
  ]}},
  { id: "pezɛn", word: "pezɛn", pos: "Substantiv",
    de: ['Prozent', 'Hundertstel'],
    origin: "Indonesisch 'persen'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Singular", cells: ["pezɛn"] },
      { label: "Plural", cells: ["pezɛne"] },
  ]}},
  { id: "ɪ", word: "ɪ", pos: "Pronomen",
    de: ['ich'],
    origin: "Englisch 'I'",
    example: {
      conlang: "[Kommen später]",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["ɪ"] },
      { label: "Akkusativ", cells: ["ɪe"] },
      { label: "Genitiv", cells: ["ɪa"] },
      { label: "Dativ", cells: ["ɪo"] },
  ]}},
];
