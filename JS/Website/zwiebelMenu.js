function loadZwiebelMenu() {
    let html = `
      <h1>Die Zwiebel</h1>
      <div class="zwiebel-search">
        <input type="text" id="zwiebelKapitel" placeholder="Kapitelname">
        <input type="number" id="zwiebelSub" placeholder="Subkapitel">
        <button onclick="jumpToZwiebel()">Gehe zu</button>
      </div>
      <div id="zwiebelContent">
    `;
  
    // Alle Kapitel rendern
    zwiebel.forEach((kap, kapIndex) => {
      html += `<h2 id="kap${kapIndex}">${kap.kapitel}</h2>`;
      kap.subkapitel.forEach((text, subIndex) => {
        html += `<h3 id="kap${kapIndex}sub${subIndex}">Subkapitel ${subIndex + 1}</h3>`;
        html += `<div class="zwiebel-text">${text}</div>`;
      });
    });
  
    html += `</div>`;
    document.getElementById("content").innerHTML = html;
  }
  
  function jumpToZwiebel() {
    const kapName = document.getElementById("zwiebelKapitel").value.toLowerCase().trim();
    const subNum = parseInt(document.getElementById("zwiebelSub").value) || null;
  
    let kapIndex = -1;
  
    // Kapitel suchen
    zwiebel.forEach((kap, i) => {
      if (kap.kapitel.toLowerCase().includes(kapName)) {
        kapIndex = i;
      }
    });
  
    if (kapIndex === -1) return alert("Kapitel nicht gefunden!");
  
    // Ziel-ID bestimmen
    let targetId = `kap${kapIndex}`;
    if (subNum && zwiebel[kapIndex].subkapitel[subNum - 1]) {
      targetId = `kap${kapIndex}sub${subNum - 1}`;
    }
  
    // Scrollen
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  