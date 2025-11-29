const WORDS = [
  { id: "de", word: "de", pos: "Partikel",
    de: ["bestimmter Artikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["de"] },
      { label: "Akkusativ", cells: ["dɔ"] },
      { label: "Genitiv", cells: ["dɪ"] },
      { label: "Dativ", cells: ["du"] },
  ]}},
  { id: "ba", word: "ba", pos: "Partikel",
    de: ["unbestimmter Artikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Nominativ", cells: ["ba"] },
      { label: "Akkusativ", cells: ["bɔ"] },
      { label: "Genitiv", cells: ["bɪ"] },
      { label: "Dativ", cells: ["bu"] },
  ]}},
  { id: "nɛ", word: "nɛ", pos: "Partikel",
    de: ["Negationspartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["nɛ"] },
  ]}},
  { id: "o", word: "o", pos: "Partikel",
    de: ["Relativsatzpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["o"] },
  ]}},
  { id: "ta", word: "ta", pos: "Partikel",
    de: ["Komplementsatzpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ta"] },
  ]}},
  { id: "kɔ", word: "kɔ", pos: "Partikel",
    de: ["Konjunktivpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kɔ"] },
  ]}},
  { id: "ple", word: "ple", pos: "Partikel",
    de: ["Zeitformpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Präteritum/Perfekt", cells: ["ple"] },
      { label: "Plusquamperfekt", cells: ["plo"] },
      { label: "Futur I", cells: ["plɪ"] },
      { label: "Futur II", cells: ["plu"] },
  ]}},
  { id: "hɛ", word: "hɛ", pos: "Partikel",
    de: ["Ja-Nein-Fragepartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["hɛ"] },
  ]}},
  { id: "gve", word: "gve", pos: "Partikel",
    de: ["Fragepartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Frage nach Substantiv", cells: ["gve"] },
      { label: "Frage nach Verb", cells: ["gva"] },
      { label: "Frage nach Adjektiv", cells: ["gvɛ"] },
      { label: "Frage nach Adverb", cells: ["gvɪ"] },
      { label: "Frage nach Präposition", cells: ["gvɔ"] },
      { label: "Frage nach Konjunktion", cells: ["gvu"] },
  ]}},
  { id: "e", word: "e", pos: "Konjunktion",
    de: ["und"],
    origin: "Italienisch 'e'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["e"] },
  ]}},
  { id: "ɪn", word: "ɪn", pos: "Präposition",
    de: ["in"],
    origin: "Englisch 'in'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ɪn"] },
  ]}},
  { id: "kɛ", word: "kɛ", pos: "Präposition",
    de: ["zu"],
    origin: "Indonesisch 'ke'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kɛ"] },
  ]}},
  { id: "kon", word: "kon", pos: "Konjunktion",
    de: ["mit"],
    origin: "Italienisch 'con'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kon"] },
  ]}},
  { id: "na", word: "na", pos: "Präposition",
    de: ["auf"],
    origin: "Polnisch 'na'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["na"] },
  ]}},
  { id: "bɛ", word: "bɛ", pos: "Verb",
    de: ["sein"],
    origin: "Englisch 'be'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv", cells: ["bɛ"] },
      { label: "Partizip I", cells: ["bɔ"] },
      { label: "Partizip II", cells: ["bɔn"] },
  ]}},
  { id: "dla", word: "dla", pos: "Präposition",
    de: ["für"],
    origin: "Russisch 'для'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["dla"] },
  ]}},
  { id: "ɛs", word: "ɛs", pos: "Substantiv",
    de: ["er/sie/es"],
    origin: "Deutsch 'es'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Singular", cells: ["ɛs"] },
      { label: "Plural", cells: ["ɛse"] },
  ]}},
  { id: "akɛ", word: "akɛ", pos: "Adjektiv",
    de: ["an"],
    origin: "Italienisch 'acceso'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["akɛ"] },
      { label: "Komparativ", cells: ["akɛɪ"] },
      { label: "Superlativ", cells: ["akɛu"] },
  ]}},
  { id: "ad", word: "ad", pos: "Präposition",
    de: ["bei"],
    origin: "Englisch 'at'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ad"] },
  ]}},
  { id: "avɛ", word: "avɛ", pos: "Verb",
    de: ["haben"],
    origin: "Italienisch 'avere'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv", cells: ["avɛ"] },
      { label: "Partizip I", cells: ["avɔ"] },
      { label: "Partizip II", cells: ["avɔn"] },
  ]}},
  { id: "jadɛ", word: "jadɛ", pos: "Verb",
    de: ["werden"],
    origin: "Indonesisch 'menjadi'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Infinitiv", cells: ["jadɛ"] },
      { label: "Partizip I", cells: ["jadɔ"] },
      { label: "Partizip II", cells: ["jadɔn"] },
  ]}},
  { id: "mele", word: "mele", pos: "Substantiv",
    de: ["sie (Plural)"],
    origin: "Indonesisch 'mereka'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Singular", cells: ["mele"] },
      { label: "Plural", cells: ["melee"] },
  ]}},
  { id: "pɔ", word: "pɔ", pos: "Präposition",
    de: ["nach"],
    origin: "Polnisch 'po'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["pɔ"] },
  ]}},
  { id: "um", word: "um", pos: "Präposition",
    de: ["um"],
    origin: "Deutsch 'um'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["um"] },
  ]}},
  { id: "psɛd", word: "psɛd", pos: "Präposition",
    de: ["vor (zeitlich)"],
    origin: "Polnisch 'przed'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["psɛd"] },
  ]}},
  { id: "davan", word: "davan", pos: "Präposition",
    de: ["vor (räumlich)"],
    origin: "Italienisch 'davanti'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["davan"] },
  ]}},
  { id: "sopa", word: "sopa", pos: "Präposition",
    de: ["über"],
    origin: "Italienisch 'sopra'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["sopa"] },
  ]}},
  { id: "no", word: "no", pos: "Konjunktion",
    de: ["aber"],
    origin: "Russisch 'но'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["no"] },
  ]}},
  { id: "lɔp", word: "lɔp", pos: "Konjunktion",
    de: ["oder"],
    origin: "Polnisch 'lub'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["lɔp"] },
  ]}},
  { id: "lebɪ", word: "lebɪ", pos: "Adjektiv",
    de: ["mehr"],
    origin: "Indonesisch 'lebih'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["lebɪ"] },
      { label: "Komparativ", cells: ["lebɪɪ"] },
      { label: "Superlativ", cells: ["lebɪu"] },
  ]}},
  { id: "olɪ", word: "olɪ", pos: "Adjektiv",
    de: ["nur"],
    origin: "Englisch 'only'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Positiv", cells: ["olɪ"] },
      { label: "Komparativ", cells: ["olɪɪ"] },
      { label: "Superlativ", cells: ["olɪu"] },
  ]}},
  { id: "fɪno", word: "fɪno", pos: "Präposition",
    de: ["bis"],
    origin: "Italienisch 'fino'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["fɪno"] },
  ]}},
  { id: "ma", word: "ma", pos: "Substantiv",
    de: ["man"],
    origin: "Deutsch 'man'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Singular ma, Plural", cells: ["mae"] },
  ]}},
  { id: "kɔnto", word: "kɔńto", pos: "Präposition",
    de: ["gegen"],
    origin: "Italienisch 'contro'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["kɔńto"] },
  ]}},
  { id: "mɪ", word: "mɪ", pos: "Substantiv",
    de: ["wir"],
    origin: "Russisch 'мы'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "Singular", cells: ["mɪ"] },
      { label: "Plural", cells: ["mɪe"] },
  ]}},
  { id: "ponɔf", word: "ponɔf", pos: "Adverb",
    de: ["wieder"],
    origin: "Polnisch 'ponownie'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "Wort"], rows: [
      { label: "-", cells: ["ponɔf"] },
  ]}},
];
