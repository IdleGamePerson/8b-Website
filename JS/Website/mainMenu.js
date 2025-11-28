let currentCalendar = "gregorianisch"; // globaler Zustand bleibt bestehen

function loadMainMenu() {
  const secondsSinceStart =
    Math.floor((Date.now() - new Date("2025-09-15T07:50:00Z")) / 1000);

  // Heutiges Datum im gewählten Kalender bestimmen
  const today = new Date();
  let todayText = "";

  if (currentCalendar === "8b") {
    const converted = to8b(
      today.getUTCDate(),
      today.getUTCMonth() + 1,
      today.getUTCFullYear()
    );
    todayText = short8bDate(converted.day, converted.month, converted.year);
  } else {
    todayText = `${String(today.getUTCDate()).padStart(2, "0")}.${String(
      today.getUTCMonth() + 1
    ).padStart(2, "0")}.${today.getUTCFullYear()}`;
  }

  const calendarText =
    currentCalendar === "8b"
      ? "🗓️ Aktueller Kalender: 8b"
      : "🗓️ Aktueller Kalender: Gregorianisch";

  document.getElementById("content").innerHTML = `
    <div class="main-menu">
      <h1>Willkommen in der 8b-Website!</h1>
      <hr>
      <b>Was ist die 8b?</b><br>
      Die 8b ist eine Schulklasse. Sie hat extrem viele Insider-Memes.<br>
      Sie hat auch <i>ziemlich viele</i> Videospiele programmiert.
      <hr>
      <b>Statistiken:</b><br>
      Personen in der 8b: 26<br>
      Existenzsekunden der 8b: ${secondsSinceStart}<br>
      Bester Geldklicker Speedrun: 27:49,11
      <hr>
      <div class="calendar-container">
        <button id="calendarSwitch" onclick="toggleCalendarMode()">
          ${calendarText}
        </button>
        <span id="todayDisplay">Heute ist: ${todayText}</span>
      </div>
    </div>
  `;
}

function toggleCalendarMode() {
  const button = document.getElementById("calendarSwitch");
  const todaySpan = document.getElementById("todayDisplay");

  if (currentCalendar === "gregorianisch") {
    currentCalendar = "8b";
    button.textContent = "🗓️ Aktueller Kalender: 8b";
  } else {
    currentCalendar = "gregorianisch";
    button.textContent = "🗓️ Aktueller Kalender: Gregorianisch";
  }

  // Heute-Datum aktualisieren
  const today = new Date();
  let todayText = "";

  if (currentCalendar === "8b") {
    const converted = to8b(
      today.getUTCDate(),
      today.getUTCMonth() + 1,
      today.getUTCFullYear()
    );
    todayText = short8bDate(converted.day, converted.month, converted.year);
  } else {
    todayText = `${String(today.getUTCDate()).padStart(2, "0")}.${String(
      today.getUTCMonth() + 1
    ).padStart(2, "0")}.${today.getUTCFullYear()}`;
  }

  todaySpan.textContent = `Heute ist: ${todayText}`;

  console.log("Kalendermodus gewechselt zu:", currentCalendar);
}

  // Hauptmenü automatisch beim Start laden
  window.addEventListener("DOMContentLoaded", () => {
    loadMainMenu();
  });