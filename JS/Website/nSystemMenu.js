function loadNSystemMenu() {
  let html = `
    <h1>Das n-System</h1>
    <div class="n-controls">
      <label for="nSort">Sortieren nach:</label>
      <select id="nSort" onchange="renderNTable()">
        <option value="nCode">n-Code</option>
        <option value="position">Position (Klassenliste)</option>
        <option value="geschlecht">Geschlecht</option>
        <option value="kalenderTag">8b-Kalender-Tag</option>
        <option value="nobel">Gewonnene Nobelpreise</option>
      </select>
    </div>
    <table id="nTable">
      <thead>
        <tr>
          <th>n-Code</th>
          <th>Position</th>
          <th>Geschlecht</th>
          <th>8b-Kalender-Tag</th>
          <th>Nobelpreise</th>
          <th>Zusatzinfo</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;

  document.getElementById("content").innerHTML = html;
  renderNTable();
}

function renderNTable() {
  const sortBy = document.getElementById("nSort").value;
  const tbody = document.querySelector("#nTable tbody");

  const data = [...nSystem];

  // Sortieren (NaN unten)
  data.sort((a, b) => {
    const A = a[sortBy];
    const B = b[sortBy];
    const aMissing = A === undefined || A === null || Number.isNaN(A);
    const bMissing = B === undefined || B === null || Number.isNaN(B);
    if (aMissing && !bMissing) return 1;
    if (bMissing && !aMissing) return -1;
    if (aMissing && bMissing) return 0;

    switch (sortBy) {
      case "nCode":
        return parseInt(A.slice(1)) - parseInt(B.slice(1));
      case "kalenderTag":
        return A - B;
      case "position":
        return A - B;
      case "geschlecht":
        return A.localeCompare(B);
      case "nobel":
        return b.nobel - a.nobel;
    }
  });

  tbody.innerHTML = data
    .map(s => {
      // 8b-Kalender-Tag + Buchstabe
      let tagDisplay = "NaN";
      if (s.kalenderTag && !Number.isNaN(s.kalenderTag)) {
        const num = s.kalenderTag;
        if (num >= 1 && num <= 26) {
          const letter = String.fromCharCode(64 + num); // A–Z
          tagDisplay = `${num} (${letter})`;
        } else {
          tagDisplay = num;
        }
      }

      return `
        <tr>
          <td>${s.nCode ?? "NaN"}</td>
          <td>${s.position ?? "NaN"}</td>
          <td>${s.geschlecht ?? "NaN"}</td>
          <td>${tagDisplay}</td>
          <td>${s.nobel ?? "NaN"}</td>
          <td>${s.info ?? "NaN"}</td>
        </tr>
      `;
    })
    .join("");
}