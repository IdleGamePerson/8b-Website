const timetable = {
    Montag: [
      { fach: "Latein", raum: "112", start: "07:50", ende: "09:20", beschreibung: 'Wir lernen mit Römern zu kommunizieren was nur nützlich sein wird wenn Zeitreise erfunden wird' },
      { fach: "Sport", raum: "", start: "09:35", ende: "10:20", beschreibung: '<i>(männlich / weiblich getrennt)</i> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts' },
      { fach: "Englisch", raum: "006/307", start: "10:20", ende: "11:05", beschreibung: 'Wir lernen Englisch, als ob man nicht einfach YouTube Videos auf English gucken könnte und schneller lernen könnte.' },
      { fach: "Profilfach", raum: "", start: "11:20", ende: "12:05", beschreibung: '<b>Sport:</b> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts<br><b>Französisch (305):</b> Wir lernen eine weitere Sprache. Als ob wir nicht genug lernen müssten.<br><b>Griechisch (302):</b> Wir lernen Griechisch aber nicht das neue dass die Leute in Griechenland heute sprechen sondern das alte<br><b>Wissenschaft + Technik (212):</b> Wir lernen wie man vertechnikt wird' },
      { fach: "Profilfach", raum: "", start: "12:10", ende: "12:55", beschreibung: '<b>Sport:</b> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts<br><b>Französisch (305):</b> Wir lernen eine weitere Sprache. Als ob wir nicht genug lernen müssten.<br><b>Griechisch (302):</b> Wir lernen Griechisch aber nicht das neue dass die Leute in Griechenland heute sprechen sondern das alte<br><b>Wissenschaft + Technik (212):</b> Wir lernen wie man vertechnikt wird' }
    ],
    Dienstag: [
      { fach: "Deutsch", raum: "112", start: "07:50", ende: "09:20", beschreibung: 'Wir lernen eine Sprache, die wir schon kennen.' },
      { fach: "Englisch", raum: "109/304", start: "09:35", ende: "11:05", beschreibung: 'Wir lernen Englisch, als ob man nicht einfach YouTube Videos auf English gucken könnte und schneller lernen könnte.' },
      { fach: "Profilfach", raum: "", start: "11:20", ende: "12:05", beschreibung: '<b>Sport (006, Theorieunterricht):</b> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts<br><b>Französisch (305):</b> Wir lernen eine weitere Sprache. Als ob wir nicht genug lernen müssten.<br><b>Griechisch (302):</b> Wir lernen Griechisch aber nicht das neue dass die Leute in Griechenland heute sprechen sondern das alte<br><b>Wissenschaft + Technik (212):</b> Wir lernen wie man vertechnikt wird' },
      { fach: "Physik", raum: "313", start: "14:00", ende: "14:45", beschreibung: 'Wir lernen was eine Physik ist' },
      { fach: "Physik", raum: "313", start: "14:50", ende: "15:35", beschreibung: 'Wir lernen was eine Physik ist' },
      { fach: "Gk + Wt", raum: "307", start: "15:45", ende: "16:30", beschreibung: '<b>Gemeinschaftskunde + Wirtschaft:</b> Wir lernen wie man Geld bekommt und wie man in Gemeinschaft ist.' },
      { fach: "Gk + Wt", raum: "307", start: "16:35", ende: "17:20", beschreibung: '<b>Gemeinschaftskunde + Wirtschaft:</b> Wir lernen wie man Geld bekommt und wie man in Gemeinschaft ist.' }
    ],
    Mittwoch: [
      { fach: "Mathe", raum: "306", start: "07:50", ende: "09:20", beschreibung: 'Wir lernen Addition und andere Sachen die versteckt Addition sind.' },
      { fach: "Latein", raum: "005", start: "09:35", ende: "10:20", beschreibung: 'Wir lernen mit Römern zu kommunizieren was nur nützlich sein wird wenn Zeitreise erfunden wird' },
      { fach: "Musik", raum: "005", start: "10:20", ende: "11:05", beschreibung: '50% Chance wir lernen etwas cooles, sonst singen wir.' },
      { fach: "Rk/Re/Eth", raum: "020/108/209", start: "11:20", ende: "12:05", beschreibung: '<b>Religion (katholisch/evangelisch):</b> Wir lernen etwas über Sachen. Wir wissen nicht ob sie stimmen, aber wir lernen sie.<br><b>Ethik:</b> Wir machen Ethik.' }
    ],
    Donnerstag: [
      { fach: "Geschichte", raum: "304", start: "07:50", ende: "09:20", beschreibung: 'Wir lernen Sachen die schon passiert sind und heute komplett irrelevant sind.' },
      { fach: "Deutsch", raum: "112", start: "09:35", ende: "11:05", beschreibung: 'Wir lernen eine Sprache, die wir schon kennen.' },
      { fach: "Latein [Test]", raum: "112", start: "11:20", ende: "12:05", beschreibung: 'Wir lernen mit Römern zu kommunizieren was nur nützlich sein wird wenn Zeitreise erfunden wird<br><b>Ein Vokabeltest passiert.</b>' },
      { fach: "Englisch", raum: "006/112", start: "12:10", ende: "12:55", beschreibung: 'Wir lernen Englisch, als ob man nicht einfach YouTube Videos auf English gucken könnte und schneller lernen könnte.' }
    ],
    Freitag: [
      { fach: "Mathe", raum: "111", start: "07:50", ende: "09:20", beschreibung: 'Wir lernen Addition und andere Sachen die versteckt Addition sind.' },
      { fach: "Chemie", raum: "214", start: "09:35", ende: "11:05", beschreibung: 'Wir lernen Sachen über Chemikalien (dies ist eine Annahme, nicht bewiesen)' },
      { fach: "Profilfach", raum: "", start: "11:20", ende: "12:05", beschreibung: '<b>Sport:</b> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts<br><b>Französisch (305):</b> Wir lernen eine weitere Sprache. Als ob wir nicht genug lernen müssten.<br><b>Griechisch (302):</b> Wir lernen Griechisch aber nicht das neue dass die Leute in Griechenland heute sprechen sondern das alte<br><b>Wissenschaft + Technik (212):</b> Wir lernen wie man vertechnikt wird' },
      { fach: "Profilfach", raum: "", start: "12:10", ende: "12:55", beschreibung: '<b>Sport:</b> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts<br><b>Französisch (305):</b> Wir lernen eine weitere Sprache. Als ob wir nicht genug lernen müssten.<br><b>Griechisch (302):</b> Wir lernen Griechisch aber nicht das neue dass die Leute in Griechenland heute sprechen sondern das alte<br><b>Wissenschaft + Technik (212):</b> Wir lernen wie man vertechnikt wird' },
      { fach: "Kunst", raum: "A108 DHG", start: "14:00", ende: "14:45", beschreibung: 'Wir lernen nichts.' },
      { fach: "Kunst", raum: "A108 DHG", start: "14:50", ende: "15:35", beschreibung: 'Wir lernen nichts.' },
      { fach: "Sport", raum: "", start: "15:45", ende: "16:30", beschreibung: '<i>(männlich / weiblich getrennt)</i> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts' },
      { fach: "Sport", raum: "", start: "16:35", ende: "17:20", beschreibung: '<i>(männlich / weiblich getrennt)</i> Wir lernen... warte, ich muss überlegen...  nein ich habe nichts' }
    ]
  };


  const timetableChanges = [
    { date: "2025-11-06", start: "07:50", end: "11:05", fach: "Ausfall", raum: "", beschreibung: "Geschichte und Deutsch fallen aus", color: "#446", hoverColor: "#668" },
    { date: "2025-11-07", start: "09:35", end: "11:05", fach: "Chemie", raum: "214", beschreibung: "Wir lernen Sachen über Chemikalien (dies ist eine Annahme, nicht bewiesen)<br>Ein UB wird passieren. Was ist ein UB? Unklar.", color: "#646", hoverColor: "#868" },
    { date: "2025-11-10", start: "10:20", end: "11:05", fach: "Englisch [HA]", raum: "112", beschreibung: "Wir lernen Englisch, als ob man nicht einfach YouTube Videos auf English gucken könnte und schneller lernen könnte.<br><b>Hausaufgabe:</b> Vokabeln 192 ad - 195 waste", color: "#464", hoverColor: "#686" },
    { date: "2025-11-10", start: "11:20", end: "12:55", fach: "Profilfach [KA]", raum: "", beschreibung: "<b>Profilfach Klassenarbeit - Eine Klassenarbeit</b>", color: "#644", hoverColor: "#866" },
    { date: "2025-11-11", start: "14:00", end: "14:45", fach: "Physik [HA]", raum: "112", beschreibung: "Wir lernen was eine Physik ist<br><b>Hausaufgabe:</b> Seite 105 Aufgaben Material A", color: "#464", hoverColor: "#686" },
    { date: "2025-11-11", start: "15:45", end: "17:20", fach: "Gk + Wt [KA]", raum: "307", beschreibung: "<b>Gk + Wt Klassenarbeit - Sehr demokratisch</b>", color: "#644", hoverColor: "#866" },
    { date: "2025-11-12", start: "07:50", end: "12:05", fach: "Ausfall", raum: "", beschreibung: "Schule fällt aus", color: "#446", hoverColor: "#668" },
    { date: "2025-11-14", start: "11:20", end: "12:55", fach: "Latein-Kabarett", raum: "Festsaal", beschreibung: "Ein Latein-Kabarett passiert!?", color: "#664", hoverColor: "#886" },
    { date: "2025-11-14", start: "14:00", end: "15:25", fach: "Ausfall", raum: "", beschreibung: "Kunst fällt aus", color: "#446", hoverColor: "#668" },
    { date: "2025-11-18", start: "09:35", end: "11:05", fach: "Englisch [KA]", raum: "109/304", beschreibung: "<b>Englisch Klassenarbeit - Nur für die Schüler in 109, die 304-Schüler nicht</b>", color: "#644", hoverColor: "#866" },
    { date: "2025-11-19", start: "10:20", end: "11:05", fach: "Musik [HA]", raum: "005", beschreibung: "50% Chance wir lernen etwas cooles, sonst singen wir.<br><b>Hausaufgabe:</b> Einen Song analysieren laut Angaben auf AB", color: "#464", hoverColor: "#686" },
    { date: "2025-11-20", start: "09:35", end: "11:05", fach: "Deutsch [KA]", raum: "112", beschreibung: "<b>Deutsch Klassenarbeit - auf Deutsch</b>", color: "#644", hoverColor: "#866" },
    { date: "2025-11-28", start: "07:50", end: "09:20", fach: "Mathe [KA]", raum: "111", beschreibung: "<b>Mathe Klassenarbeit - Quadratwurzeln sind einfach nur ^0.5</b>", color: "#644", hoverColor: "#866" },
  ];  
  /*
      color = "#644", hoverColor = "#866": KAs (addiere " [KA]" am Ende von Fach)
      color = "#464", hoverColor = "#686": HAs (addiere " [HA]" am Ende von Fach)
      color = "#446", hoverColor = "#668": Ausfälle
      color = "#466", hoverColor = "#688": Vertretungen
      color = "#646", hoverColor = "#868": Weirde Änderungen
      color = "#664", hoverColor = "#886": Spezialsachen
  */