// js/word-page.js

const params = new URLSearchParams(window.location.search);
const wordId = params.get("id");

const wordDetails = document.getElementById("word-details");
const notFound = document.getElementById("not-found");

function createInlineList(label, items) {
  const section = document.createElement("div");
  section.className = "word-section";

  const h3 = document.createElement("h3");
  h3.textContent = label;
  section.appendChild(h3);

  const ul = document.createElement("ul");
  ul.className = "inline-list";

  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  section.appendChild(ul);
  return section;
}

function renderFormsTable(formsTable) {
  if (!formsTable || !formsTable.columns || !formsTable.rows) {
    return null;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "word-section forms-table-wrapper";

  const title = document.createElement("h3");
  title.textContent = "Formentabelle";
  wrapper.appendChild(title);

  const table = document.createElement("table");
  table.className = "forms-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");

  formsTable.columns.forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col;
    headRow.appendChild(th);
  });

  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  formsTable.rows.forEach((row) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = row.label || "";
    tr.appendChild(th);

    (row.cells || []).forEach((cellText) => {
      const td = document.createElement("td");
      td.textContent = cellText;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  wrapper.appendChild(table);

  return wrapper;
}

function renderWord(entry) {
  document.title = `Wort: ${entry.word}`;

  const title = document.createElement("h2");
  title.textContent = entry.word;
  wordDetails.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "word-meta";
  meta.textContent = entry.pos ? `Wortart: ${entry.pos}` : "";
  wordDetails.appendChild(meta);

  // Übersetzungen
  if (entry.de && entry.de.length) {
    wordDetails.appendChild(createInlineList("Deutsche Bedeutung", entry.de));
  }

  // Ursprung
  if (entry.origin) {
    const originSection = document.createElement("div");
    originSection.className = "word-section";

    const h3 = document.createElement("h3");
    h3.textContent = "Ursprung";
    originSection.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = entry.origin;
    originSection.appendChild(p);

    wordDetails.appendChild(originSection);
  }

  // Beispiel
  /*if (entry.example) {
    const exSection = document.createElement("div");
    exSection.className = "word-section";

    const h3 = document.createElement("h3");
    h3.textContent = "Beispielsatz";
    exSection.appendChild(h3);

    const pCon = document.createElement("p");
    pCon.textContent = entry.example.conlang || "";
    exSection.appendChild(pCon);

    const pDe = document.createElement("p");
    pDe.textContent = entry.example.de
      ? `DE: ${entry.example.de}`
      : "";
    exSection.appendChild(pDe);

    wordDetails.appendChild(exSection);
  }*/

  // Formentabelle
  const forms = renderFormsTable(entry.formsTable);
  if (forms) {
    wordDetails.appendChild(forms);
  }
}

function init() {
  if (!wordId) {
    notFound.classList.remove("hidden");
    return;
  }

  const entry = WORDS.find((w) => w.id === wordId);

  if (!entry) {
    notFound.classList.remove("hidden");
    return;
  }

  renderWord(entry);
}

init();
