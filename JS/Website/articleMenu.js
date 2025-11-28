function loadArticleMenu() {
    const html = `
      <h1>Artikel</h1>
      <div class="article-controls">
        <input type="text" id="searchInput" placeholder="Artikel suchen..." class="article-search" />
        <select id="sortSelect" class="article-sort">
          <option value="random">Zufall</option>
          <option value="alpha">Alphabetisch</option>
          <option value="x">Vektor X</option>
          <option value="y">Vektor Y</option>
          <option value="z">Vektor Z</option>
        </select>
        <button id="randomBtn" class="article-random">Zufälliger Artikel</button>
      </div>
      <div id="articleList" class="article-list"></div>
    `;
  
    document.getElementById('content').innerHTML = html;
  
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const randomBtn = document.getElementById("randomBtn");
  
    function updateList() {
      renderArticleList(searchInput.value, sortSelect.value);
    }
  
    searchInput.addEventListener("input", updateList);
    sortSelect.addEventListener("change", updateList);
    randomBtn.addEventListener("click", () => {
        showRandomArticle(searchInput.value);
      });      
  
    updateList();
  }  
  
  function renderArticleList(filter = "", sort = "random") {
    const lowerFilter = filter.toLowerCase();
    const listContainer = document.getElementById("articleList");
  
    let filtered = articles.map((a, i) => ({ article: a, index: i })) // damit wir index behalten
      .filter(({ article }) => {
        const plainDescription = article.description.replace(/<[^>]*>?/gm, "");
        return (
          article.title.toLowerCase().includes(lowerFilter) ||
          article.category.toLowerCase().includes(lowerFilter) ||
          plainDescription.toLowerCase().includes(lowerFilter)
        );
      });
  
    // Sortieren
    switch (sort) {
      case "alpha":
        filtered.sort((a, b) => a.article.title.localeCompare(b.article.title));
        break;
      case "x":
        filtered.sort((a, b) => b.article.vector[0] - a.article.vector[0]);
        break;
      case "y":
        filtered.sort((a, b) => b.article.vector[1] - a.article.vector[1]);
        break;
      case "z":
        filtered.sort((a, b) => b.article.vector[2] - a.article.vector[2]);
        break;
      default: // random
        filtered.sort(() => Math.random() - 0.5);
    }
  
    // Anzeigen
    let html = "";
    filtered.forEach(({ article, index }) => {
      html += `
        <div class="article-card">
          <h2>${article.title}</h2>
          <p><b>Kategorie:</b> ${article.category}</p>
          <p><b>8b-Vektor:</b> [${article.vector.join(", ")}]</p>
          <button onclick="showArticle(${index})">Artikel lesen</button>
        </div>
      `;
    });
  
    listContainer.innerHTML = html;
  }  
  
  function showArticle(index) {
    const article = articles[index];
  
    let html = `
      <h1>${article.title}</h1>
      <p><b>8b-Vektor:</b> [${article.vector.join(", ")}]</p>
      <hr>
      ${article.description}
      <div class="article-detail-buttons">
        <button onclick="loadArticleMenu()">Zurück</button>
        ${article.link ? `<button onclick="window.open('${article.link}', '_blank')">Öffnen</button>` : ""}
      </div>
    `;
  
    document.getElementById('content').innerHTML = html;
  }
  
  
  function showRandomArticle(filter = "") {
    const lowerFilter = filter.toLowerCase();
  
    const filtered = articles.map((a, i) => ({ article: a, index: i }))
      .filter(({ article }) => {
        const plainDescription = article.description.replace(/<[^>]*>?/gm, "");
        return (
          article.title.toLowerCase().includes(lowerFilter) ||
          article.category.toLowerCase().includes(lowerFilter) ||
          plainDescription.toLowerCase().includes(lowerFilter)
        );
      });
  
    if (filtered.length === 0) {
      alert("Keine Artikel gefunden.");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * filtered.length);
    showArticle(filtered[randomIndex].index);
  }
  