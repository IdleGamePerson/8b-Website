// -----------------------------------------------
// Hilfsfunktionen
// -----------------------------------------------
function hmToMinutes(hm) {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
}

function timeToPosition(time) {
  const [h, m] = time.split(":").map(Number);
  const minutes = h * 60 + m;
  const startSchool = 7 * 60 + 50;
  const endSchool = 17 * 60 + 20;

  if (minutes < startSchool) {
    return (minutes / startSchool) * 100;
  } else if (minutes <= endSchool) {
    return 100 + ((minutes - startSchool) / (endSchool - startSchool)) * 350;
  } else {
    return 450 + ((minutes - endSchool) / (1440 - endSchool)) * 100;
  }
}

function getWeekdayName(date) {
  const days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
  return days[date.getDay()];
}

function formatDate(date) {
  const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const dayName = days[date.getUTCDay()];

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `<date-val>(${day}, ${month}, ${year}, false)</date-val>`;
}


function applyChangeToLessons(lessons, change) {
  const cs = hmToMinutes(change.start);
  const ce = hmToMinutes(change.end);
  const result = [];

  for (const lesson of lessons) {
    const ls = hmToMinutes(lesson.start);
    const le = hmToMinutes(lesson.ende);

    if (ce <= ls || cs >= le) {
      result.push(lesson);
      continue;
    }

    if (ls < cs) result.push({ ...lesson, ende: change.start });
    if (ce < le) result.push({ ...lesson, start: change.end });
  }

  result.push({
    fach: change.fach,
    raum: change.raum,
    start: change.start,
    ende: change.end,
    beschreibung: change.beschreibung,
    color: change.color,
    hoverColor: change.hoverColor
  });

  return result
    .filter(l => hmToMinutes(l.start) < hmToMinutes(l.ende))
    .sort((a, b) => hmToMinutes(a.start) - hmToMinutes(b.start));
}

// -----------------------------------------------
// Hauptfunktionen
// -----------------------------------------------
function loadTimetableMenu() {
  const today = new Date();
  const daysToShow = 25;
  const dayList = Array.from({ length: daysToShow }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  let html = `
    <h1>Stundenplan</h1>
    <div class="timetable-wrapper">
      <div class="timetable-header">
        <div class="time-column"></div>
        ${dayList.map(d => `<div class="day-header">${formatDate(d)}</div>`).join("")}
      </div>
      <div class="timetable-container">
        <div class="time-column">
  `;

  // Zeitlinien
  for (let h = 0; h <= 24; h++) {
    const label = h.toString().padStart(2, "0") + ":00";
    const top = timeToPosition(label);
    html += `<div class="time-label" style="top:${top}px">${label}</div>`;
    html += `<div class="time-line" style="top:${top}px"></div>`;
  }
  html += `</div>`;

  // Tages-Spalten
  dayList.forEach(dateObj => {
    const weekday = getWeekdayName(dateObj);
    let lessons = timetable[weekday] ? [...timetable[weekday]] : [];
    const dateStr = dateObj.toLocaleDateString("en-CA");
    const changes = timetableChanges.filter(c => c.date === dateStr);

    for (const change of changes) {
      lessons = applyChangeToLessons(lessons, change);
    }

    html += `<div class="day-column">`;

    lessons.forEach(lesson => {
      if (hmToMinutes(lesson.start) >= hmToMinutes(lesson.ende)) return;
      const top = timeToPosition(lesson.start);
      const bottom = timeToPosition(lesson.ende);
      const height = bottom - top;
      if (height < 2) return;

      const bg = lesson.color || "#444";
      const hover = lesson.hoverColor || "#666";

      html += `
        <div class="lesson-box"
             style="top:${top}px; height:${height}px; background-color:${bg}"
             data-fach="${lesson.fach}"
             data-start="${lesson.start}"
             data-ende="${lesson.ende}"
             data-raum="${lesson.raum}"
             data-beschreibung="${encodeURIComponent(lesson.beschreibung)}"
             data-color="${bg}"
             data-hover="${hover}">
          <div class="lesson-content">
            ${lesson.fach} <span class="lesson-raum">${lesson.raum}</span>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  html += `</div></div>`;
  document.getElementById("content").innerHTML = html;

  // Events nachträglich binden
  document.querySelectorAll(".lesson-box").forEach(box => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = box.dataset.hover;
    });
    box.addEventListener("mouseout", () => {
      box.style.backgroundColor = box.dataset.color;
    });
    box.addEventListener("click", () => {
      showLessonDetailWithColors(
        box.dataset.fach,
        box.dataset.start,
        box.dataset.ende,
        box.dataset.raum,
        decodeURIComponent(box.dataset.beschreibung),
        box.dataset.color,
        box.dataset.hover
      );
    });
  });
}

function showLessonDetailWithColors(fach, start, ende, raum, beschreibung, color, hoverColor) {
  const html = `
    <h1>${fach}</h1>
    <p><b>Zeit:</b> ${start} - ${ende}</p>
    <p><b>Raum:</b> ${raum}</p>
    <hr>
    <p>${beschreibung}</p>
    <button onclick="loadTimetableMenu()">Zurück</button>
  `;
  document.getElementById("content").innerHTML = html;
}