// js/grammar-page.js

const params = new URLSearchParams(window.location.search);
const grammarId = params.get("id");

const container = document.getElementById("grammar-details");
const notFound = document.getElementById("grammar-not-found");

function renderGrammar(entry) {
  document.title = entry.title;

  // Titel
  const h2 = document.createElement("h2");
  h2.textContent = entry.title;
  container.appendChild(h2);

  // Beschreibung
  const desc = document.createElement("p");
  desc.innerHTML = entry.description;
  container.appendChild(desc);

  // Beispiele
  if (entry.examples.length > 0) {
    const h3 = document.createElement("h3");
    h3.textContent = "Beispiele";
    container.appendChild(h3);

    entry.examples.forEach(ex => {
      const block = document.createElement("div");
      block.className = "example-block";

      const con = document.createElement("p");
      con.textContent = ex.con;
      block.appendChild(con);

      const de = document.createElement("p");
      de.textContent = "DE: " + ex.de;
      block.appendChild(de);

      container.appendChild(block);
    });
  }
}

function init() {
  const entry = GRAMMAR.find(g => g.id === grammarId);

  if (!entry) {
    notFound.classList.remove("hidden");
    return;
  }

  renderGrammar(entry);
}

init();