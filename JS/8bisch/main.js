// js/main.js

// ==========================
//  Custom alphabet sorting
// ==========================

let currentSort = "alpha";

// WORDS kommt aus data.js, aktuell: von häufig nach selten
WORDS.forEach((w, i) => {
  w.freqIndex = i; // 0 = am häufigsten, 1 = zweithäufigstes, ...
});

// Dein Alphabet:
const ALPHABET = [
  "a", "ɔ", "o", "u", "ɛ", "e", "ɪ",
  "p", "t", "k", "ɡ", "d", "b",
  "f", "v",
  "n", "m",
  "z", "s", "ʃ",
  "l", "j", "h"
];

// Mapping für Zeichen → Reihenfolge
const CHAR_ORDER = {};
ALPHABET.forEach((c, i) => CHAR_ORDER[c] = i);

// Vergleichsfunktion für zwei Wörter
function compareWordsPre(a, b) {
  const w1 = a.id;
  const w2 = b.id;
  const len = Math.min(w1.length, w2.length);

  for (let i = 0; i < len; i++) {
    const c1 = w1[i];
    const c2 = w2[i];

    const o1 = CHAR_ORDER[c1] ?? 999;
    const o2 = CHAR_ORDER[c2] ?? 999;

    if (o1 !== o2) return o1 - o2;
  }

  return w1.length - w2.length;
}

function compareFreq(a, b) {
  const fa = a.freqIndex ?? 99999;
  const fb = b.freqIndex ?? 99999;
  return fa - fb;  // kleiner = häufiger
}

const POS_ORDER = {
  "Partikel": 1,
  "Konjunktion": 2,
  "Präposition": 3,
  "Adverb": 4,
  "Pronomen": 5,
  "Substantiv": 6,
  "Verb": 7,
  "Adjektiv": 8
};

function comparePOS(a, b) {
  const pa = POS_ORDER[a.pos] ?? 999;
  const pb = POS_ORDER[b.pos] ?? 999;

  if (pa !== pb) return pa - pb;

  // innerhalb der Wortart alphabetisch (dein 8bisch-Alphabet)
  return compareWordsPre(a, b);
}

function compareWords(a, b) {
  if (currentSort === "alpha") return compareWordsPre(a, b);
  if (currentSort === "freq")  return compareFreq(a, b);
  if (currentSort === "pos")   return comparePOS(a, b);

  return 0;
}

const sortSelect = document.getElementById("sort-select");

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;

  // Wenn nichts gesucht wurde → alle Wörter nach neuer Sortierung
  const query = searchInput.value.trim();
  performSearch(query);
});

// ==========================
//       Suchlogik
// ==========================
const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results-list");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");

let searchTimeout = null;

// Normalisiert Strings → akzent-unabhängige Suche
function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


// Renderfunktion für die Ergebnisliste
function renderResults(results) {
  resultsList.innerHTML = "";

  // Anzahl anzeigen
  resultCount.textContent = `${results.length} Ergebnis${results.length === 1 ? "" : "se"}`;

  if (!results.length) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  // Alphabetisch sortieren
  results.sort(compareWords);

  // Liste füllen
  results.forEach((entry) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = `word.html?id=${encodeURIComponent(entry.id)}`;
    link.textContent = entry.word;
    link.className = "result-link";

    const meta = document.createElement("span");
    meta.className = "result-meta";
    const dePreview = entry.de ? entry.de.join(", ") : "";
    meta.textContent = `${entry.pos || ""} · ${dePreview} `;

    li.appendChild(link);
    li.appendChild(meta);
    resultsList.appendChild(li);
  });
}


// Hauptsuchfunktion
function performSearch(query) {
  const q = normalize(query.trim());

  // Wenn leer → alles anzeigen
  if (!q) {
    renderResults(WORDS);
    return;
  }

  const matches = WORDS.filter((entry) => {
    const inId = normalize(entry.id).includes(q);
    const inWord = normalize(entry.word).includes(q);

    const inDe = (entry.de || [])
      .map((w) => normalize(w))
      .some((w) => w.includes(q));

    const inEn = (entry.en || [])
      .map((w) => normalize(w))
      .some((w) => w.includes(q));

    // Suche über Formentabelle
    let inForms = false;
    if (entry.formsTable?.rows) {
      for (const row of entry.formsTable.rows) {
        for (const cell of row.cells || []) {
          if (normalize(cell).includes(q)) {
            inForms = true;
            break;
          }
        }
        if (inForms) break;
      }
    }

    return inId || inWord || inDe || inEn || inForms;
  });

  renderResults(matches);
}


// Input → Suche (mit Debounce, damit es nicht flackert)
searchInput.addEventListener("input", () => {
  const value = searchInput.value;

  if (searchTimeout) clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    performSearch(value);
  }, 120);
});


// Beim Laden der Seite → alle Wörter anzeigen
renderResults(WORDS);

// ==========================
//   Grammatik-Navigation
// ==========================

document.getElementById("grammar-list").addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  const id = e.target.dataset.id;
  if (!id) return;

  window.location.href = `grammar.html?id=${id}`;
});

// ===============================
//   GRAMMATIK-MENÜ AUTOMATISCH
// ===============================

const grammarList = document.getElementById("grammar-list");

// Liste automatisch generieren
function buildGrammarMenu() {
  grammarList.innerHTML = "";

  GRAMMAR.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry.title;
    li.dataset.id = entry.id;    // <-- Wichtig!
    grammarList.appendChild(li);
  });
}

// Klick → grammatik-Seite öffnen
grammarList.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  const id = e.target.dataset.id;
  if (!id) return;

  window.location.href = `grammar.html?id=${id}`;
});

buildGrammarMenu();

// ===============================
//   KURSE-LISTE (rechts)
// ===============================

const coursesList = document.getElementById("courses-list");

function buildCoursesMenu() {
  coursesList.innerHTML = "";

  COURSES.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry.title;
    li.dataset.id = entry.id;
    coursesList.appendChild(li);
  });
}

coursesList.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  const id = e.target.dataset.id;
  const course = COURSES.find(c => c.id === id);

  if (!course) return;

  window.location.href = `course.html?id=${id}`;
});


buildCoursesMenu();