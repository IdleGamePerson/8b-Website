function loadNewspaperMenu() {
  // Sortieren: neueste zuerst
  const sorted = [...newspapers].sort((a, b) => {
    const dA = new Date(Date.UTC(a.date[2], a.date[1] - 1, a.date[0]));
    const dB = new Date(Date.UTC(b.date[2], b.date[1] - 1, b.date[0]));
    return dB - dA; // Neueste zuerst
  });

  let html = `
    <h1>🗞️ Die 8b-Zeitung</h1>
    <div class="newspaper-selector">
  `;

  // Buttons (in Reihenfolge: neueste links)
  sorted.forEach((paper, index) => {
    const [d, m, y] = paper.date;
    let dateStr;

    dateStr = `<date-val>(${d}, ${m}, ${y}, false)</date-val>`;

    html += `
      <button class="newspaper-button" onclick="openNewspaper(${index})">
        ${dateStr}
      </button>
    `;
  });

  html += `</div><div id="newspaperContent"></div>`;
  document.getElementById("content").innerHTML = html;

  // Neueste Zeitung (Index 0) automatisch öffnen
  openNewspaper(0);
}

function openNewspaper(index) {
  const sorted = [...newspapers].sort((a, b) => {
    const dA = new Date(Date.UTC(a.date[2], a.date[1] - 1, a.date[0]));
    const dB = new Date(Date.UTC(b.date[2], b.date[1] - 1, b.date[0]));
    return dB - dA;
  });

  const paper = sorted[index];
  const [d, m, y] = paper.date;
  document.getElementById("newspaperContent").innerHTML = `
    <hr>
    <div class="newspaper-body"><h2>Die 8b Zeitung - <date-val>(${d}, ${m}, ${y}, true)</date-val></h2><hr>${paper.content}</div>
  `;
} // <h2>Die 8b Zeitung – <date-val>(16, 9, 2025)</date-val></h2><hr>