const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

const courseTitle = document.getElementById("course-title");
const content = document.getElementById("course-content");
const notFound = document.getElementById("course-not-found");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const progressBar = document.getElementById("progress-bar");

let course = null;
let pageIndex = 0;


// Fortschrittsbalken aktualisieren
function updateProgress() {
  const percent = ((pageIndex + 1) / course.pages.length) * 100;
  progressBar.style.width = percent + "%";
}


// Seitentypen anzeigen
function renderInfo(page) {
  const div = document.createElement("div");
  div.className = "course-page";

  const h2 = document.createElement("h2");
  h2.textContent = page.title;
  div.appendChild(h2);

  const p = document.createElement("p");
  p.innerHTML = page.text;
  div.appendChild(p);

  content.appendChild(div);
}

function renderVocab(page) {
  const div = document.createElement("div");
  div.className = "course-page";

  const h2 = document.createElement("h2");
  h2.textContent = page.title;
  div.appendChild(h2);

  const table = document.createElement("table");
  table.className = "vocab-table";

  const header = document.createElement("tr");
  ["Wort", "Deutsch", "Englisch"].forEach(t => {
    const th = document.createElement("th");
    th.textContent = t;
    header.appendChild(th);
  });
  table.appendChild(header);

  page.words.forEach(w => {
    const tr = document.createElement("tr");

    [w.con, w.de, w.en].forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  div.appendChild(table);
  content.appendChild(div);
}

function renderQuestion(page) {
    const div = document.createElement("div");
    div.className = "course-page";
  
    const h2 = document.createElement("h2");
    h2.textContent = page.title;
    div.appendChild(h2);
  
    const q = document.createElement("p");
    q.textContent = page.question;
    div.appendChild(q);
  
    const answerList = document.createElement("ul");
    answerList.className = "answer-list";
  
    const feedback = document.createElement("p");
    feedback.className = "feedback-text";
    div.appendChild(feedback);
  
    page.answers.forEach((ans) => {
      const li = document.createElement("li");
      li.textContent = ans.text;
      li.className = "answer-option";
  
      li.addEventListener("click", () => {
  
        if (ans.correct) {
          // Richtige Antwort
          li.classList.add("correct");
  
          feedback.textContent = "Korrekt!";
          feedback.style.color = "#10b981";
  
          nextBtn.disabled = false;
  
          // Jetzt ALLE Antworten sperren
          document.querySelectorAll(".answer-option")
            .forEach(opt => opt.style.pointerEvents = "none");
  
        } else {
          // Falsche Antwort → NICHT sperren!
          li.classList.add("wrong");
  
          const exp = ans.explain || "Das ist leider nicht korrekt.";
          feedback.textContent = exp;
          feedback.style.color = "#f87171";
        }
      });
  
      answerList.appendChild(li);
    });
  
    div.appendChild(answerList);
    content.appendChild(div);
  
    nextBtn.disabled = true;
  }  

// Zentrale Renderfunktion
function renderPage() {
  content.innerHTML = "";

  const page = course.pages[pageIndex];

  if (page.type === "info") renderInfo(page);
  if (page.type === "vocab") renderVocab(page);
  if (page.type === "question") renderQuestion(page);

  // Buttons aktualisieren
  prevBtn.disabled = pageIndex === 0;

  // Wenn wir NICHT auf einer Frage sind → Weiter freischalten
  if (page.type !== "question") {
    nextBtn.disabled = false;
  }

  updateProgress();
}


// INIT
function init() {
  course = COURSES.find(c => c.id === courseId);

  if (!course) {
    notFound.classList.remove("hidden");
    return;
  }

  courseTitle.textContent = course.title;
  renderPage();

  prevBtn.addEventListener("click", () => {
    if (pageIndex > 0) {
      pageIndex--;
      renderPage();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (pageIndex < course.pages.length - 1) {
      pageIndex++;
      renderPage();
    } else {
      // Letzte Seite → zurück zur Startseite
      window.location.href = "8bisch.html";
    }
  });
}

init();