const WORDS = [
  { id: "o", word: "o", pos: "Partikel",
    de: ["Relativsatzpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["o", "nɛo"] },
  ]}},
  { id: "ta", word: "ta", pos: "Partikel",
    de: ["Komplementsatzpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["ta", "nɛta"] },
  ]}},
  { id: "kɔ", word: "kɔ", pos: "Partikel",
    de: ["Konjunktivpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["kɔ", "nɛkɔ"] },
  ]}},
  { id: "ple", word: "ple", pos: "Partikel",
    de: ["Zeitformpartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Präteritum/Perfekt", cells: ["ple", "nɛple"] },
      { label: "Plusquamperfekt", cells: ["plo", "nɛplo"] },
      { label: "Futur I", cells: ["plɪ", "nɛplɪ"] },
      { label: "Futur II", cells: ["plu", "nɛplu"] },
  ]}},
  { id: "hɛ", word: "hɛ", pos: "Partikel",
    de: ["Ja-Nein-Fragepartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["hɛ", "nɛhɛ"] },
  ]}},
  { id: "gve", word: "gve", pos: "Partikel",
    de: ["Fragepartikel"],
    origin: "-",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Frage nach Substantiv", cells: ["gve", "nɛgve"] },
      { label: "Frage nach Verb", cells: ["gva", "nɛgva"] },
      { label: "Frage nach Adjektiv", cells: ["gvɛ", "nɛgvɛ"] },
      { label: "Frage nach Adverb", cells: ["gvɪ", "nɛgvɪ"] },
      { label: "Frage nach Präposition", cells: ["gvɔ", "nɛgvɔ"] },
      { label: "Frage nach Konjunktion", cells: ["gvu", "nɛgvu"] },
  ]}},
  { id: "e", word: "e", pos: "Konjunktion",
    de: ["und"],
    origin: "Italienisch 'e'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["e", "nɛe"] },
  ]}},
  { id: "ɪn", word: "ɪn", pos: "Präposition",
    de: ["in"],
    origin: "Englisch 'in'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["ɪn", "nɛɪn"] },
  ]}},
  { id: "kɛ", word: "kɛ", pos: "Präposition",
    de: ["zu"],
    origin: "Indonesisch 'ke'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["kɛ", "nɛkɛ"] },
  ]}},
  { id: "kon", word: "kon", pos: "Konjunktion",
    de: ["mit"],
    origin: "Italienisch 'con'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["kon", "nɛkon"] },
  ]}},
  { id: "na", word: "na", pos: "Präposition",
    de: ["auf"],
    origin: "Polnisch 'na'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["na", "nɛna"] },
  ]}},
  { id: "bɛ", word: "bɛ", pos: "Verb",
    de: ["sein"],
    origin: "Englisch 'be'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Kein Partizip", cells: ["bɛ", "nɛbɛ"] },
      { label: "Partizip I", cells: ["bɔ", "nɛbɔ"] },
      { label: "Partizip II", cells: ["bɔn", "nɛbɔn"] },
  ]}},
  { id: "dla", word: "dla", pos: "Präposition",
    de: ["für"],
    origin: "Russisch 'для'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["dla", "nɛdla"] },
  ]}},
  { id: "ɛs", word: "ɛs", pos: "Substantiv",
    de: ["er/sie/es"],
    origin: "Deutsch 'es'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Nominativ Singular", cells: ["ɛs", "nɛɛs"] },
      { label: "Dativ Singular", cells: ["aɛs", "nɛaɛs"] },
      { label: "Nominativ Plural", cells: ["ɛse", "nɛɛse"] },
      { label: "Dativ Plural", cells: ["aɛse", "nɛaɛse"] },
  ]}},
  { id: "akɛ", word: "akɛ", pos: "Adjektiv",
    de: ["an"],
    origin: "Italienisch 'acceso'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Basisform", cells: ["akɛ", "nɛakɛ"] },
      { label: "Komparativ", cells: ["akɛɪ", "nɛakɛɪ"] },
      { label: "Superlativ", cells: ["akɛu", "nɛakɛu"] },
  ]}},
  { id: "ad", word: "ad", pos: "Präposition",
    de: ["bei"],
    origin: "Englisch 'at'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["ad", "nɛad"] },
  ]}},
  { id: "aveɛ", word: "aveɛ", pos: "Verb",
    de: ["haben"],
    origin: "Italienisch 'avere'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Kein Partizip", cells: ["aveɛ", "nɛaveɛ"] },
      { label: "Partizip I", cells: ["aveɔ", "nɛaveɔ"] },
      { label: "Partizip II", cells: ["aveɔn", "nɛaveɔn"] },
  ]}},
  { id: "jadɛ", word: "jadɛ", pos: "Verb",
    de: ["werden"],
    origin: "Indonesisch 'menjadi'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Kein Partizip", cells: ["jadɛ", "nɛjadɛ"] },
      { label: "Partizip I", cells: ["jadɔ", "nɛjadɔ"] },
      { label: "Partizip II", cells: ["jadɔn", "nɛjadɔn"] },
  ]}},
  { id: "mele", word: "mele", pos: "Substantiv",
    de: ["sie (Plural)"],
    origin: "Indonesisch 'mereka'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "Nominativ Singular", cells: ["mele", "nɛmele"] },
      { label: "Dativ Singular", cells: ["amele", "nɛamele"] },
      { label: "Nominativ Plural", cells: ["melee", "nɛmelee"] },
      { label: "Dativ Plural", cells: ["amelee", "nɛamelee"] },
  ]}},
  { id: "pɔ", word: "pɔ", pos: "Präposition",
    de: ["nach"],
    origin: "Polnisch 'po'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["pɔ", "nɛpɔ"] },
  ]}},
  { id: "um", word: "um", pos: "Präposition",
    de: ["um"],
    origin: "Deutsch 'um'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["um", "nɛum"] },
  ]}},
  { id: "psɛd", word: "psɛd", pos: "Präposition",
    de: ["vor (zeitlich)"],
    origin: "Polnisch 'przed'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["psɛd", "nɛpsɛd"] },
  ]}},
  { id: "davan", word: "davan", pos: "Präposition",
    de: ["vor (räumlich)"],
    origin: "Italienisch 'davanti'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["davan", "nɛdavan"] },
  ]}},
  { id: "sopa", word: "sopa", pos: "Präposition",
    de: ["über"],
    origin: "Italienisch 'sopra'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["sopa", "nɛsopa"] },
  ]}},
  { id: "no", word: "no", pos: "Konjunktion",
    de: ["aber"],
    origin: "Russisch 'но'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["no", "nɛno"] },
  ]}},
  { id: "lɔp", word: "lɔp", pos: "Konjunktion",
    de: ["oder"],
    origin: "Polnisch 'lub'.",
    example: {
      conlang: "[Kommen später].",
      de: "[Kommen später]",
    }, formsTable: { columns: ["", "positiv", "negativ"], rows: [
      { label: "-", cells: ["lɔp", "nɛlɔp"] },
  ]}},
];