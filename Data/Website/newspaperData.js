const newspapers = [
    {
      date: [15, 9, 2025],
      content: "<b>Ende der Sommerferien</b><br>Die Sommerferien sind jetzt zu Ende.<z-s>Klassensprecherwahl</z-s>Die Klassensprecher wurden gewählt. n29 hat fast jeden dazu gebracht, n90 zu wählen.<br>Die Gewinner waren n90 und n69.<z-s>Profilfachausfall</z-s>Französisch ist komplett ausgefallen. Von den anderen Profilfächern ist die zweite Hälfte ausgefallen."
    },
    {
      date: [16, 9, 2025],
      content: "<b>Deutsch Ausfall</b><br>Die erste Hälfte von Deutsch ist ausgefallen.<z-s>Wirtschaft Ausfall</z-s>Gemeinschaftskunde + Wirtschaft ist ausgefallen."
    },
    {
      date: [17, 9, 2025],
      content: "<b>iPad-Einführung</b><br>In der 8b wurden die iPads eingeführt. Jeder Schüler bekommt ein Schul-iPad.<br>Die 8b hat gelernt, wie man Goodnotes (schlechte Notizen) benutzt. Hierfür wurde fast der komplette Unterrichtstag benutzt.<z-s>Vermeidungssimulator auf iPads spielbar</z-s>Vermeidungssimulator und andere 8b-Spiele sind nicht vom Blockierungs-Filter der iPads blockiert"
    },
    {
      date: [18, 9, 2025],
      content: "<b>Mehr Zeitverschwendung</b><br>Die iPad-Einführung wird weiter gemacht und dauert wieder fast den ganzen Tag.<z-s>Nutzlose HAs</z-s>Der Englischhehrer hat Hausaufgaben gegeben. Sie sind:<br> 1. nutzlos.<br> 2. physikalisch unmöglich."
    },
    {
      date: [19, 9, 2025],
      content: "<b>Zeitverschwendung++</b><br>In Mathe wurde erklärt wie man die Fobizz KI benutzt. In Chemie wurde erklärt wieso man nicht die Fobizz KI benutzen soll.<z-s>Profilfach ausgefallen</z-s>Das Profilfach ist ausgefallen.<z-s>>Komische Kunstphilosophie</z-s>Kunst is ausgefallen, aber es war undeutlich, ob Kunst ausgefallen ist oder nicht.<br>Zwei Drittel der Schüler sind gekommen. Der Kunstlehrer hat trotzdem Kunstunterricht gemacht und die Schüler nicht erlaubt, zu gehen."
    },
    {
      date: [22, 9, 2025],
      content: "<b>Hausaufgaben</b><br>Die Lateinlehrerin hat viel zu viel HAs gegeben.<br>In Latein wurde außerdem das Ablativus absolutus beigebracht.<z-s>n98 geht es nicht gut</z-s>n98 hatte im Wochenende eine starke Verletzung. Er konnte nicht bei Sport mitmachen.<br>Das ist schade :("
    },
    {
      date: [23, 9, 2025],
      content: "<b>Weirde Deutschaufgabe</b><br>Wir mussten einen Raum zeichnen der in einem Buch wörtlich beschrieben wurde.<br>Manche gezeichneten Räume waren gut, manche nicht.<z-s>Technik ausgefallen</z-s>Technik ist ausgefallen.<z-s>Ethik 2</z-s>In Gemeinschaftskunde + Wirtschaft wird das gleiche unterrichtet wie in Ethik."
    },
    {
      date: [24, 9, 2025],
      content: "<b>Termine der Terme</b><br>In Mathe ist das Thema jetzt Terme. Der Lehrer meint, dies wird sich lang nicht ändern."
    },
    {
      date: [25, 9, 2025],
      content: "<b>Lidl Werbung Time</b><br>In Geschichte wurde eine Doku angeguckt. Es kam eine unvorstellbare Anzahl an Lidl Werbungen.<z-s>Latein verursacht Massenpanik</z-s>Es war sehr unklar ob ein Vokabeltest geschrieben wird oder nicht.<z-s>Was ist das denn</z-s>In Englisch wurde das Gerundium beigebracht.<br>Das Wort Gerundium klingt scheiße."
    },
    {
      date: [26, 9, 2025],
      content: "<b>Gasbrenner</b><br>In Chemie wurde beigebracht, wie man die Gasbrenner benutzt<z-s>Technik entfällt</z-s>Technik entfällt<z-s>Kunstlehrer eil</z-s>Der Kunstlehrer scheint nach dem Kunstunterricht als geil."
    },
    {
      date: [29, 9, 2025],
      content: "<b>Nichts besonderes ist passiert</b><br>Nichts besonderes ist passiert."
    },
    {
      date: [30, 9, 2025],
      content: "<b>Deutschsache passiert</b><br>In Deutsch lesen wir eine Lektüre.<br>Die Lektüre wurde halb-informell geschrieben (im Gegensatz zu Deutsch normalerweise, was immer komplett formell ist), was ziemlich geil ist.<z-s>Englisch Vokabeltest</z-s>Ein Englisch Vokabeltest wurde geschrieben. Es gab 1en, 1-2en, 2en und eine 4-5 (schade für n90).<z-s>Mittagspause+</z-s>Physik ist ausgefallen und Technik auch."
    },
    {
      date: [1, 10, 2025],
      content: "<b>Latein ist bedrohlich</b><br>In Latein wurden sehr viele Hausaufgaben aufgegeben, wie immer. Dies hat dazu geführt dass Latein jetzt als eine Bedrohung der Stufe 3 gilt.<z-s>Die Musiksituation</z-s>In Musik haben wir gelernt was Dreiklänge sind. Denk immer dran dass 2<1 (Zitat der Musiklehrerin, ausversehen)<z-s>Suchtpotenzial: Viel zu hoch</z-s>In Ethik wurde die Handyzeit jeder Person besprochen. Der Median war 2h und der Mittelwert 5h."
    },
    {
      date: [2, 10, 2025],
      content: "<b>Geschichte physikalisch idiotisch</b><br>In Geschichte wurde eine Hausaufgabe gegeben die einfach fundamental keinen Sinn ergibt.<z-s>Deutsch verwirrend</z-s>Deutsch ist ausgefallen. Oder nicht? Oder doch? Oder doch nicht?<z-s>Latein Vokabeltest</z-s>In Latein gab es einen Vokabeltest.<z-s>Latein-Hausaufgabe mal einfach</z-s>Eine einfache Latein-Hausaufgabe wurde aufgegeben. Das war unerwartet."
    },
    {
      date: [13, 10, 2025],
      content: "<i>Es tut uns leid für die Pause in letztens passierten Zeitungen, der Schreiber hatte eine Krankheit.</i><z-s>Latein Klassenarbeit</z-s>In Latein gab es eine nervige Klassenarbeit.<z-s>n98 geht es wieder gut</z-s>Endlich!"
    },
    {
      date: [14, 10, 2025],
      content: "<b>Deutsch war Lesezeit</b><br>Die Lektüre wurde weitergelesen.<z-s>Dichte</z-s>Wir haben in Physik über die Dichte gelernt."
    },
    {
      date: [15, 10, 2025],
      content: "<b>Dichte 2</b><br>Wir haben in Mathe über die Dichte gelernt.<z-s>Latein ausgefallen</z-s>Latein ist ausgefallen (eigentlich nicht, es war Vertretung, aber die Vertretungslehrerin hatte keinen Unterricht)."
    },
    {
      date: [16, 10, 2025],
      content: "<b>Was passiert hier</b><br>In Geschichte haben wir einen Film angeschaut der sogar für einen Fantasiefilm viel zu unrealistisch ist.<z-s>Mehr Lektüre</z-s>In Deutsch wurde über die Lektüre geredet<z-s>Latein ausgefallen?</z-s>Latein ist ausgefallen. Zumindest wurde das jedem gesagt, aber dann war doch Latein. Schade."
    },
    {
      date: [17, 10, 2025],
      content: "<b>Schokolade</b><br>Der Mathelehrer berichtete, dass er zwei komplette Tafeln Schokolade pro Tag konsumiert.<z-s>Dichte 3</z-s>Wir haben in Chemie über die Dichte gelernt.<z-s>Zahntechnik</z-s>Der Techniklehrer hatte einen Zahnarzttermin, weswegen Technik ein wenig früher endete.<z-s>Kunst ausgefallen</z-s>Kunst ist ausgefallen."
    },
    {
      date: [20, 10, 2025],
      content: "<b>Englisch Vertretung</b><br>In Englisch war eine Vertretung vom Deutschlehrer."
    },
    {
      date: [21, 10, 2025],
      content: "<b>Lektüre v2</b><br>In Deutsch schauen wir uns den Film für die Lektüre an.<z-s>WAS PASSIERT HILFE AAAAAAAAA</z-s>Es war SEHR verwirrend was ausfällt und was nicht. Die Schule hatte nämlich technische Probleme."
    },
    {
      date: [22, 10, 2025],
      content: "<b>Mathe KA</b><br>In Mathe war eine Klassenarbeit. NNNNNNNN"
    },
    {
      date: [23, 10, 2025],
      content: "<b>Geschichte fällt aus</b><br>Geschichte ist ausgefallen.<z-s>Latein HA nicht da</z-s>Keine HAs in Latein das erste Mal seit 1844."
    },
    {
      date: [24, 10, 2025],
      content: "<b>Chemie verliert IQ</b><br>In Chemie gab es ein Arbeitsblatt.<z-s>Stuhl-Downgrade</z-s>Die Stühle in Technik sind scheiße.<z-s>Anfang der Herbstferien</z-s>Die Herbstferien haben angefangen."
    },
    {
      date: [3, 11, 2025],
      content: "<b>Herbstferien zu Ende</b><br>Die Herbstferien haben geendet.<z-s>Wieso so viele HAs</z-s>Wer erwartet hat, dass die Lateinlehrerin aufgrund wortwörtlich<br>dem ersten Tag nach Ferien keine/wenig HAs geben würde, liegt falsch.<z-s>Englisch KA</z-s>In Englisch war eine relativ normale Klassenarbeit: Eine Sache wo man lesen muss,<br>eine Übersetzungsaufgabe und viel zu viele Aufgaben über dieses 'Advice'-Ding."
    },
    {
      date: [4, 11, 2025],
      content: "<b>Deutsch fällt aus</b><br>Unerwartet ist Deutsch ausgefallen.<z-s>Wechsel</z-s>In Englisch wurde Gemeinschaftskunde unterrichtet. In Gemeinschaftskunde wurde Englisch unterrichtet.<z-s>iPad-Banach-Tarski-Paradoxon</z-s>n42 hat ein Bild auf dem iPad 15000-mal dupliziert, was das übrige Datenvolumen um 20 GB erhöht hat."
    },
    {
      date: [5, 11, 2025],
      content: "<b>Raumerweiterung</b><br>In Mathe starten wir mit irrationalen Zahlen. Der Mathelehrer hat das Wort 'Raumerweiterung' gesagt.<z-s>Latein-HA nicht lateinisch</z-s>Die aufgegebene Latein Hausaufgabe war in Deutsch."
    },
    {
      date: [6, 11, 2025],
      content: "<b>Fast alles ist ausgefallen</b><br>Geschichte und Deutsch sind ausgefallen.<z-s>Yo</z-s>Kein Latein Vokabeltest am Donnerstag."
    },
    {
      date: [7, 11, 2025],
      content: "<b>Was ist ein UB</b><br>Ein UB ist in Chemie passiert.<z-s>Kunst ist sehr gut</z-s>In Kunst existiert eine neue und gute Aufgabe."
    },
    {
      date: [10, 11, 2025],
      content: "<b>Ziemlich bedrohlich</b><br>Eine Klassenarbeit ist passiert."
    },
    {
      date: [11, 11, 2025],
      content: "<b>Deutsch fällt wieder aus</b><br>Als ob.<z-s>Englischlehrer oder so</z-s>Der Englischlehrer hat innerhalb einem Unterricht so 150 Relativsätze benutzt.<z-s>Gk + Wt KA</z-s>Noch ne KA"
    },
    {
      date: [13, 11, 2025],
      content: "<b>Nix</b><br>Nix wichtiges passierte."
    },
    {
      date: [14, 11, 2025],
      content: "<b>Latein-Kabarett</b><br>Das Latein-Kabarett passierte. Es war irgendwie gut.<z-s>Kunst Ausfall</z-s>Kunst ist ausgefallen."
    },
    {
      date: [17, 11, 2025],
      content: "<b>Technik ist am Yay werden</b><br>In Technik werden PET Renner gebaut."
    },
    {
      date: [18, 11, 2025],
      content: "<b>Aufgeben ist super</b><br>Jeder gab auf.<z-s>Wertvoll</z-s>In Gk haben wir eine Art Tier List für welche Werte in der Gemeinschaft am wichtigsten sind gemacht.<br>Manche Menschen haben weirde Listen gemacht.<br>Lebensfreude zu haben ist kein Wert. Es ist eine Sache. Die man machen kann.<z-s>Gk KA zurückgegeben</z-s>Die Gk KA wurde zurückgegeben. n08 hat n42 beleidigt weil n42 eine 3 hatte. n08 hatte auch eine 3."
    },
    {
      date: [19, 11, 2025],
      content: "<b>Panik</b><br>Panik existiert aufgrund Deutsch-KA morgen und Existenz von n08."
    },
    {
      date: [20, 11, 2025],
      content: "<b>Offiziell anerkannter Geschichtsunterricht</b><br>Der Geschichtsunterricht war sehr funktionierend heute.<z-s>Deutsch KA</z-s>Die Deutsch KA passierte.<z-s>Vokabeltest verspätet</z-s>Der Vokabeltest wurde wegen der Deutsch KA verspätet."
    },
    {
      date: [21, 11, 2025],
      content: "<b>Ne</b><br>Nix ist passiert"
    },
    {
      date: [24, 11, 2025],
      content: "<b>Latein SoL</b><br>In Latein war eine SoL (Stunde ohne Lehrer). Wir hatten trotzdem Hausaufgaben.<z-s>Scheiße</z-s>Der Technik Test wurde ausgegeben (er war rigged)."
    },
    {
      date: [25, 11, 2025],
      content: "<b>Mittagsschule Ausfall</b><br>Mittagsschule ist ausgefallen."
    },
    {
      date: [26, 11, 2025],
      content: "<b>Test</b><br>In Latein war ein bedrohlicher Test."
    },
    {
      date: [27, 11, 2025],
      content: "<b>Geschichte SoL</b><br>In Geschichte war ein SoL, diesmal nicht bedrohlich.<z-s>Ich fühle mich bedroht</z-s>Latein war weird. Ich fühle mich bedroht."
    },
    {
      date: [28, 11, 2025],
      content: "<b>Mathe KA</b><br>Eine Mathe KA war.<z-s>Syndrome</z-s>Das 'Syndrome'-Meme entstand."
    },
    {
      date: [1, 12, 2025],
      content: "<b>Nope!</b><br>Nichts passierte. Naja, nix wichtiges."
    },
    {
      date: [2, 12, 2025],
      content: "<b>Physik KA</b><br>Die Physik KA passierte.<z-s>n94 kann nicht deutschen</z-s>n94 hat die deutsche Sprache verlernt. Aber nur während Gk + Wt Unterricht."
    },
    {
      date: [3, 12, 2025],
      content: "<b>Vermeidungsvermeidung</b><br>Die Prävention sollte passieren, ist sie aber nicht."
    },
    {
      date: [4, 12, 2025],
      content: "<b>?</b><br>Geschichte sehr geschichtlich. Panik startete.<z-s>Ich hasse dies</z-s>Latein Vokabeltest war mal wieder rigged."
    },
    {
      date: [5, 12, 2025],
      content: "<b>Chemie KA</b><br>Es war eine Chemie KA. Außerdem fangen wir in Chemie mit Atomen an.<z-s>Technik Ausfall</z-s>Technik fällt aus."
    },
  ];
