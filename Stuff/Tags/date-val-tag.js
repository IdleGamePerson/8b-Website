class DateVal extends HTMLElement {
  connectedCallback() {
    const raw = this.textContent.trim();

    // Erlaubt Format (18, 9, 2025) oder (18, 9, 2025, true/false)
    const match = raw.match(/\(?\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+)(?:\s*,\s*(true|false))?\s*\)?/);
    if (!match) {
      this.textContent = "❓Ungültiges Datum";
      return;
    }

    const day = parseInt(match[1]);
    const month = parseInt(match[2]);
    const year = parseInt(match[3]);
    const weekdayMode = match[4]; // undefined | "true" | "false"

    let formatted = "";

    // Formatierung je nach aktuellem Kalender
    if (typeof currentCalendar !== "undefined" && currentCalendar === "8b") {
      const converted = to8b(day, month, year);
      formatted = short8bDate(converted.day, converted.month, converted.year);
    } else {
      formatted = `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`;
    }

    // Wenn 4. Wert existiert → Wochentag hinzufügen (immer gregorianisch)
    if (weekdayMode !== undefined) {
      const dateObj = new Date(Date.UTC(year, month - 1, day));

      const weekdaysShort = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      const weekdaysLong = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ];

      const weekday =
        weekdayMode === "true"
          ? weekdaysLong[dateObj.getUTCDay()]
          : weekdaysShort[dateObj.getUTCDay()];

      formatted = `${weekday}, ${formatted}`;
    }

    this.textContent = formatted;
  }
}

// Custom Element registrieren
customElements.define("date-val", DateVal);
