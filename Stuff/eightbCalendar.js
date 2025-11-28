// eightbCalendar.js
// Das offizielle Zeitsystem der 8b 😎
// Enthält Funktionen zum Konvertieren zwischen dem gregorianischen Kalender und dem 8b-Kalender.

const EIGHTB_START = new Date(Date.UTC(1911, 4, 8)); // 8. Mai 1911 (0-indexiert)

/** Prüft, ob ein 8b-Jahr ein Schaltjahr ist */
function isLeap8bYear(year) {
  return year % 4 === 0 && year % 128 !== 0;
}

/** Gibt die Anzahl der Tage in einem 8b-Jahr zurück */
function daysIn8bYear(year) {
  return 364 + (isLeap8bYear(year) ? 2 : 1);
}

/** Gregorianisch → 8b-Kalender */
function to8b(day, month, year) {
  // Fix: Verhindert, dass JS Jahre 0–99 als 1900–1999 interpretiert
  let date;
  if (year >= 0 && year < 100) {
    date = new Date(Date.UTC(0, month - 1, day));
    date.setUTCFullYear(year);
  } else {
    date = new Date(Date.UTC(year, month - 1, day));
  }

  const diffDays = Math.floor((date - EIGHTB_START) / 86400000);
  let remaining = diffDays;
  let year8b = 0;

  if (remaining >= 0) {
    while (remaining >= daysIn8bYear(year8b)) {
      remaining -= daysIn8bYear(year8b);
      year8b++;
    }
  } else {
    while (remaining < 0) {
      year8b--;
      remaining += daysIn8bYear(year8b);
    }
  }

  let month8b, day8b;
  if (remaining < 364) {
    month8b = Math.floor(remaining / 26) + 1;
    day8b = (remaining % 26) + 1;
  } else {
    const specialIndex = remaining - 363; // 1 = erster, 2 = zweiter Spezialtag
    month8b = "NaN";
    day8b = specialIndex;
  }

  return { day: day8b, month: month8b, year: year8b };
}

/** 8b-Kalender → Gregorianisch */
function from8b(day8b, month8b, year8b) {
  let days = 0;

  if (year8b >= 0) {
    for (let y = 0; y < year8b; y++) days += daysIn8bYear(y);
  } else {
    for (let y = -1; y >= year8b; y--) days -= daysIn8bYear(y);
  }

  if (month8b === "NaN") {
    days += 363 + day8b;
  } else {
    days += (month8b - 1) * 26 + (day8b - 1);
  }

  const gregDate = new Date(EIGHTB_START.getTime() + days * 86400000);

  // Fix: richtige Behandlung von Jahren 0–99
  let year = gregDate.getUTCFullYear();
  if (year >= 0 && year < 100) {
    const fixed = new Date(Date.UTC(0, gregDate.getUTCMonth(), gregDate.getUTCDate()));
    fixed.setUTCFullYear(year);
    gregDate.setTime(fixed.getTime());
  }

  return {
    day: gregDate.getUTCDate(),
    month: gregDate.getUTCMonth() + 1,
    year: gregDate.getUTCFullYear()
  };
}

/** Kurzform eines 8b-Kalender-Datums */
function short8bDate(day8b, month8b, year8b) {
  if (month8b === "NaN") {
    // Spezialtag → "1s.112"
    return `${day8b}s.${year8b}`;
  }

  if (day8b < 1 || day8b > 26) return `NaN.${year8b}`;
  const letter = String.fromCharCode(64 + day8b); // 65 = 'A'
  const monthStr = month8b.toString().padStart(2, "0");
  return `${letter}${monthStr}.${year8b}`;
}