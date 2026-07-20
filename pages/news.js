const pagesNews = {
    'zeitung': {
      title: '8b-Zeitung',
      content: `
        Die 8b-Zeitung ist <strong>eine Zeitung</strong> auf dieser Website.
        <br>Sie hat wöchentlich eine neue Ausgabe und sie existiert.
        <br>Sie ist zusätzlich auch eine der Zeitungen Deutschlands. Tatsächlich eine überdurchschnittlich ehrliche.
        <br>Die Rubriken sind Normales, Panik und 8b-Sachen.
        <br><b>Links</b>, nicht zu verwechseln mit Rechts:
        <ul>
          <li><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 29')">Neueste Ausgabe</a></li>
          <li><a href="#" onclick="event.preventDefault(); navigateTo('category-zeitungen')">Alle Ausgaben</a></li>
        </ul>
        <h2>Alle Ausgaben</h2>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <td>KW + Jahr</td>
                <td>Datum</td>
                <td>Ausgabennummer</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 29')">KW 29, 2026</a></td>
                <td>13.-17. Jul. 2026</td>
                <td>35.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 28')">KW 28, 2026</a></td>
                <td>6.-10. Jul. 2026</td>
                <td>34.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 27')">KW 27, 2026</a></td>
                <td>29.-3. Jun./Jul. 2026</td>
                <td>33.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 26')">KW 26, 2026</a></td>
                <td>22.-26. Juni 2026</td>
                <td>32.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 25')">KW 25, 2026</a></td>
                <td>15.-19. Juni 2026</td>
                <td>31.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 24')">KW 24, 2026</a></td>
                <td>8.-12. Juni 2026</td>
                <td>30.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 21')">KW 21, 2026</a></td>
                <td>18.-22. Mai 2026</td>
                <td>29.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 20')">KW 20, 2026</a></td>
                <td>11.-15. Mai 2026</td>
                <td>28.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 19')">KW 19, 2026</a></td>
                <td>4.-8. Mai 2026</td>
                <td>27.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 18')">KW 18, 2026</a></td>
                <td>27. Apr. 2026</td>
                <td>26.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 17')">KW 17, 2026</a></td>
                <td>20.-24. Apr. 2026</td>
                <td>25.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 16')">KW 16, 2026</a></td>
                <td>13.-17. Apr. 2026</td>
                <td>24.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 13')">KW 13, 2026</a></td>
                <td>23.-24. Mär. 2026</td>
                <td>23.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 12')">KW 12, 2026</a></td>
                <td>16.-20. Mär. 2026</td>
                <td>22.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 11')">KW 11, 2026</a></td>
                <td>9.-13. Mär. 2026</td>
                <td>21.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 10')">KW 10, 2026</a></td>
                <td>2.-6. Mär. 2026</td>
                <td>20.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 9')">KW 9, 2026</a></td>
                <td>23.-27. Feb. 2026</td>
                <td>19.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 7')">KW 7, 2026</a></td>
                <td>9.-12. Feb. 2026</td>
                <td>18.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 6')">KW 6, 2026</a></td>
                <td>2.-6. Feb. 2026</td>
                <td>17.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 5')">KW 5, 2026</a></td>
                <td>26.-28. Jan. 2026</td>
                <td>16.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 4')">KW 4, 2026</a></td>
                <td>19.-23. Jan. 2026</td>
                <td>15.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 3')">KW 3, 2026</a></td>
                <td>12.-16. Jan. 2026</td>
                <td>14.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 2')">KW 2, 2026</a></td>
                <td>7.-9. Jan. 2026</td>
                <td>13.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 51')">KW 51, 2025</a></td>
                <td>15.-19. Dez. 2025</td>
                <td>12.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 50')">KW 50, 2025</a></td>
                <td>8.-12. Dez. 2025</td>
                <td>11.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 49')">KW 49, 2025</a></td>
                <td>1.-5. Dez. 2025</td>
                <td>10.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 48')">KW 48, 2025</a></td>
                <td>24.-28. Nov. 2025</td>
                <td>9.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 47')">KW 47, 2025</a></td>
                <td>17.-21. Nov. 2025</td>
                <td>8.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 46')">KW 46, 2025</a></td>
                <td>10.-14. Nov. 2025</td>
                <td>7.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 45')">KW 45, 2025</a></td>
                <td>3.-7. Nov. 2025</td>
                <td>6.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 43')">KW 43, 2025</a></td>
                <td>20.-24. Okt. 2025</td>
                <td>5.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 42')">KW 42, 2025</a></td>
                <td>13.-17. Okt. 2025</td>
                <td>4.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 40')">KW 40, 2025</a></td>
                <td>29.-2. Sep./Okt. 2025</td>
                <td>3.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 39')">KW 39, 2025</a></td>
                <td>22.-26. Sep. 2025</td>
                <td>2.</td>
              </tr>
              <tr>
                <td><a href="#" onclick="event.preventDefault(); navigateTo('2025 kw 38')">KW 38, 2025</a></td>
                <td>15.-19. Sep. 2025</td>
                <td>1.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote>Ich freu mich auf die neue Ausgabe der 8b-Zeitung, aber ich</blockquote>
      `,
      categories: ['zeitungen', 'antimaterie'],
      created: '2026-02-28',
      edited: '2026-06-30',
      related: [],
      weight: 0
    },
    '2025 kw 38': {
      title: '8b-Zeitung - 2025, KW 38',
      content: `
        Dies ist die 1. Ausgabe der 8b-Zeitung für KW 38 2025, von dem 15. bis zu dem 19. September 2025.
        <h2>Normales</h2>
        <h3>Ende der Sommerferien</h3>
        Die Sommerferien endeten. Dies markiert den Start der 8b-Epoche.
        <h3>iPad Einführung</h3>
        Die iPads wurden am Mittwoch eingeführt, und jeder Schüler bekam ein Schul-iPad. Danach lernten wir sehr lange, wie man sie benutzt, inkl.:
        <ul>
          <li>Fast den ganzen Mittwoch (vor allem lernten wir die Benutzung von Badnotes)</li>
          <li>Fast den ganzen Donnerstag</li>
          <li>Freitag 1.-4. Stunde</li>
        </ul>
        <h3>Klassensprecherwahl</h3>
        Die Klassensprecher wurden am Montag gewählt. <a href="#" onclick="event.preventDefault(); navigateTo('n29')">n29</a> hat jeden dazu gebracht, <a href="#" onclick="event.preventDefault(); navigateTo('n90')">n90</a> zu wählen. Die Gewinner waren n90 und <a href="#" onclick="event.preventDefault(); navigateTo('n69')">n69</a>.
        <h2>Panik</h2>
        <h3>Nutzlose HAs</h3>
        Der Englischlehrer gab uns donnerstags Hausaufgaben. Sie waren:
        <ul>
          <li>nutzlos.</li>
          <li>physikalisch unmöglich.</li>
        </ul>
        <h3>To Fobizz or not to Fobizz</h3>
        Freitags lernten wir in Mathe wie man die Fobizz KI benutzt, in Chemie wieso man sie nicht benutzen sollte.
        <h3>Komische Kunstphilosophie</h3>
        Kunst ist ausgefallen, aber es war undeutlich, ob Kunst ausgefallen ist oder nicht.<br>Zwei Drittel der Schüler sind gekommen. Der Kunstlehrer hat trotzdem Kunstunterricht gemacht und die Schüler nicht erlaubt, zu gehen, obwohl es eigentlich ausgefallen ist.
        <h2>8b-Sachen</h2>
        <h3>8b-Spiele auf iPads spielbar</h3>
        8b-Spiele, wie z.B. Vermeidungssimulator, sind auf den Schul-iPads spielbar.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 5.+6. - Französisch ist komplett ausgefallen. Von den anderen Profilfächern ist jeweils die zweite Hälfte ausgefallen.</li>
          <li>Dienstag 1. - Die erste Hälfte von Deutsch ist ausgefallen.</li>
          <li>Dienstag 10.+11. - Gemeinschaftskunde ist ausgefallen.</li>
          <li>Freitag 5.+6. - Das Profilfach ist ausgefallen.</li>
          <li>Freitag 8.+9. - Kunst ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-02-28',
      edited: '2026-02-28',
      related: [],
      weight: 1
    },
    '2025 kw 39': {
      title: '8b-Zeitung - 2025, KW 39',
      content: `
        Dies ist die 2. Ausgabe der 8b-Zeitung für KW 39 2025, von dem 22. bis zu dem 26. September 2025.
        <h2>Normales</h2>
        <h3>Weirde Deutschaufgabe</h3>
        Wir mussten einen Raum zeichnen der in einem Buch wörtlich beschrieben wurde. Manche gezeichneten Räume waren gut, manche nicht.
        <h3>Ethik 2</h3>
        In Gemeinschaftskunde + Wirtschaft wird das gleiche unterrichtet wie in Ethik.
        <h3>Termine der Terme</h3>
        Seit Mittwoch ist das Thema in Mathe jetzt Terme. Der Lehrer meint, dies wird sich lang nicht ändern.
        <h3>Gasbrenner</h3>
        In Chemie wurde beigebracht, wie man die Gasbrenner benutzt
        <h2>Panik</h2>
        <h3>Latein HAs</h3>
        In Latein haben wir montags mal wieder viel zu viele HAs aufbekommen.
        <h3>Genervtius absolutus</h3>
        In Latein haben wir montags den Ablativus absolutus 'gelernt'.
        <h3>n98 geht es nicht gut</h3>
        n98 hatte im Wochenende eine starke Verletzung. Er konnte nicht bei Sport mitmachen. Das ist schade. :(. Außerdem existierte Latein.
        <h3>Latein verursacht Massenpanik</h3>
        Es war sehr unklar ob donnerstags ein Vokabeltest geschrieben wird oder nicht.
        <h3>Was ist das denn</h3>
        Freitags wurde in Englisch das Gerundium beigebracht.<br>Das Wort Gerundium klingt scheiße.
        <h2>8b-Sachen</h2>
        <h3>Lidl Werbung Time</h3>
        In Geschichte wurde eine Doku angeguckt. Es kam eine unvorstellbare Anzahl an <a href="#" onclick="event.preventDefault(); navigateTo('lidl')">Lidl</a> Werbungen.
        <h3>Kunstlehrer gut</h3>
        Der Kunstlehrer scheint nach dem Kunstunterricht als gut.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 5. - Technik ist ausgefallen.</li>
          <li>Freitag 5.+6. - Technik ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-06-24',
      related: [],
      weight: 1
    },
    '2025 kw 40': {
      title: '8b-Zeitung - 2025, KW 40',
      content: `
        Dies ist die 3. Ausgabe der 8b-Zeitung für KW 40 2025, von dem 29. September bis zu dem 2. Oktober 2025.
        <h2>Normales</h2>
        <h3>Englisch Vokabeltest</h3>
        Ein Englisch-Vokabeltest wurde dienstaggeschrieben. Es gab verschiedene Noten:
        <ul>
          <li>1en</li>
          <li>1-2en</li>
          <li>2en</li>
          <li>und eine 4-5 von <a href="#" onclick="event.preventDefault(); navigateTo('n90')">n90</a>, was schade ist.</li>
        </ul>
        <h3>Die Musiksituation</h3>
        In Musik haben wir über Dreiklänge gelernt und dass 2<1.
        <h3>WAS</h3>
        Die Latein HA war am Do einfach??????
        <h2>Panik</h2>
        <h3>Latein ist bedrohlich</h3>
        In Latein wurden montags sehr viele Hausaufgaben aufgegeben, wie immer. Dies hat dazu geführt dass Latein jetzt als eine Bedrohung der Stufe 3 gilt.
        <h3>Suchtpotenzial</h3>
        In Ethik wurde die Handyzeit jeder Person besprochen. Der Median war 2h und der Mittelwert 5h.
        <h3>Geschichte physikalisch idiotisch</h3>
        In Geschichte wurde eine Hausaufgabe gegeben die einfach fundamental keinen Sinn ergibt.
        <h3>Latein Vokabeltest</h3>
        u.
        <h2>8b-Sachen</h2>
        <h3>Deutschsache passiert</h3>
        In Deutsch lesen wir eine Lektüre. Die Lektüre wurde halb-informell geschrieben (im Gegensatz zu Deutsch normalerweise, was immer komplett formell ist), was ziemlich nice ist.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 5.-9. - Technik und Physik sind ausgefallen.</li>
          <li>Donnerstag 3.+4. - Deutsch ist ausgefallen. Oder nicht? Oder doch? Oder doch nicht?</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2025 kw 42': {
      title: '8b-Zeitung - 2025, KW 42',
      content: `
        Dies ist die 4. Ausgabe der 8b-Zeitung für KW 42 2025, von dem 13. bis zu dem 17. Oktober 2025.
        <h2>Normales</h2>
        <h3>Deutsch war Lesezeit</h3>
        In Deutsch wurde am Dienstag die Lektüre weitergelesen, und am Donnerstag redeten wir über sie.
        <h3>Dichte</h3>
        Wir wissen jetzt, was die Dichte ist:
        <ul>
          <li>Di: Wir haben in Physik über die Dichte gelernt.</li>
          <li>Mi: Wir haben in Mathe über die Dichte gelernt.</li>
          <li>Fr: Wir haben in Chemie über die Dichte gelernt.</li>
        </ul>
        <h3>Minimale Optimierung</h3>
        Der Techniklehrer hatte einen Zahnarzttermin, weswegen Technik ein wenig früher endete.
        <h2>Panik</h2>
        <h3>Latein KA</h3>
        In Latein war eine nervige Klassenarbeit.
        <h3>Was passiert hier</h3>
        In Geschichte haben wir einen Film angeschaut der sogar für einen Fantasiefilm viel zu unrealistisch ist.
        <h2>8b-Sachen</h2>
        <h3>n98 geht es wieder gut</h3>
        Endlich! Seit Montag geht es <a href="#" onclick="event.preventDefault(); navigateTo('n98')">n98</a> wieder gut.
        <h3>Das klingt ungesund</h3>
        Der Mathelehrer berichtete, dass er zwei komplette Tafeln Schokolade pro Tag konsumiert.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Mittwoch 3. - Latein ist ausgefallen (naja, eigentlich nicht, es war Vertretung, aber die Vertretungslehrerin hatte keinen Unterricht).</li>
          <li>Donnerstag 5. - Latein ist NICHT ausgefallen (obwohl das jedem gesagt wurde).</li>
          <li>Freitag 8.+9. - Kunst ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 43': {
      title: '8b-Zeitung - 2025, KW 43',
      content: `
        Dies ist die 5. Ausgabe der 8b-Zeitung für KW 43 2025, von dem 20. bis zu dem 24. Oktober 2025.
        <h2>Normales</h2>
        <h3>Lektüre v2</h3>
        Dienstags schauten wir uns in Deutsch den Film zur Lektüre an.
        <h3>Mathe KA</h3>
        In Mathe war am Mittwoch eine KA.
        <h3>Latein HA nicht da</h3>
        Am Donnerstag keine HAs in Latein das erste Mal seit 1844.
        <h3>Herbstferien</h3>
        Die Herbstferien starteten.
        <h2>Panik</h2>
        <h3>WAS PASSIERT HILFE AAAAAA</h3>
        Es war dienstags SEHR verwirrend was ausfällt und was nicht. Die Schule hatte nämlich technische Probleme.
        <h3>Chemie verliert IQ</h3>
        In Chemie gab es ein Arbeitsblatt.
        <h3>Stuhl-Downgrade</h3>
        Die Stühle in Technik sind scheiße.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 4. - Englisch wurde vom Deutschlehrer vertreten.</li>
          <li>Donnerstag 1.+2. - Geschichte ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 45': {
      title: '8b-Zeitung - 2025, KW 45',
      content: `
        Dies ist die 6. Ausgabe der 8b-Zeitung für KW 45 2025, von dem 3. bis zu dem 7. November 2025.
        <h2>Normales</h2>
        <h3>Herbstferien zu Ende</h3>
        Die Herbstferien endeten.
        <h3>Englisch KA</h3>
        In Englisch war montags eine relativ normale Klassenarbeit:
        <ul>
          <li>Eine Sache wo man lesen muss</li>
          <li>Eine Übersetzungsaufgabe</li>
          <li>Viel zu viele Aufgaben über dieses 'Advice'-Ding</li>
        </ul>
        <h3>Wechsel</h3>
        In Englisch wurde Gemeinschaftskunde unterrichtet. In Gemeinschaftskunde wurde Englisch unterrichtet.
        <h3>Raumerweiterung</h3>
        In Mathe starteten wir mit irrationalen Zahlen. Der Mathelehrer hat das Wort 'Raumerweiterung' gesagt.
        <h3>Latein-HA nicht lateinisch</h3>
        Die aufgegebene Latein HA war am Mittwoch auf Deutsch.
        <h3>Yo</h3>
        Kein Latein Vokabeltest am Donnerstag
        <h3>Was ist ein UB</h3>
        Ein UB ist in Chemie passiert.
        <h3>Kunst ist sehr gut</h3>
        In Kunst gab es eine neue und gute Aufgabe.
        <h2>Panik</h2>
        <h3>Wieso so viele HAs</h3>
        Wer erwartet hat, dass die Lateinlehrerin aufgrund wortwörtlich<br>dem ersten Tag nach Ferien keine/wenig HAs geben würde, lag falsch.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 1.+2. - Deutsch ist ausgefallen.</li>
          <li>Donnerstag 1.-4. - Geschichte und Deutsch sind ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 46': {
      title: '8b-Zeitung - 2025, KW 46',
      content: `
        Dies ist die 7. Ausgabe der 8b-Zeitung für KW 46 2025, von dem 10. bis zu dem 14. November 2025.
        <h2>Normales</h2>
        <h3>Englischlehrer oder so</h3>
        Der Englischlehrer hat dienstags innerhalb einem Unterricht so 150 Relativsätze benutzt.
        <h3>Gk + Wt KA am Dienstag</h3>
        Noch eine KA
        <h2>Panik</h2>
        <h3>Ziemlich bedrohlich</h3>
        Eine Klassenarbeit ist passiert.
        <h2>8b-Sachen</h2>
        <h3>Latein-Kabarett</h3>
        Das Latein-Kabarett passierte, es war irgendwie gut.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 1.+2. - Deutsch ist ausgefallen.</li>
          <li>Freitag 8.+9. - Kunst ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 47': {
      title: '8b-Zeitung - 2025, KW 47',
      content: `
        Dies ist die 8. Ausgabe der 8b-Zeitung für KW 47 2025, von dem 17. bis zu dem 21. November 2025.
        <h2>Normales</h2>
        <h3>PEt ding</h3>
        In Technik werden jetzt PET-Renner gebaut.
        <h3>Aufgeben ist super</h3>
        Jeder gab auf.
        <h3>Wertvoll</h3>
        In Gk haben wir eine Art Tier List für welche Werte in der Gemeinschaft am wichtigsten sind gemacht.<br>Manche Menschen haben weirde Listen gemacht.<br>Lebensfreude zu haben ist kein Wert. Es ist eine Sache. Die man machen kann.
        <h3>Offiziell anerkannter Geschichtsunterricht</h3>
        Der Geschichtsunterricht war sehr funktionierend.
        <h3>Vokabeltest verspätet</h3>
        Der Latein Vokabeltest wurde wegen der Deutsch KA verspätet.
        <h2>Panik</h2>
        <h3>Panik</h3>
        Panik existiert aufgrund Deutsch-KA und Existenz von <a href="#" onclick="event.preventDefault(); navigateTo('n08')">n08</a>.
        <h3>Deutsch KA</h3>
        Die Deutsch KA war am Donnerstag.
        <h3>Gk KA zurückgegeben</h3>
        Die Gk KA wurde zurückgegeben. n08 hat <a href="#" onclick="event.preventDefault(); navigateTo('n42')">n42</a> beleidigt weil n42 eine 3 hatte. n08 hatte auch eine 3.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 48': {
      title: '8b-Zeitung - 2025, KW 48',
      content: `
        Dies ist die 9. Ausgabe der 8b-Zeitung für KW 48 2025, von dem 24. bis zu dem 28. November 2025.
        <h2>Normales</h2>
        <h3>Geschichte SoL</h3>
        In Geschichte war ein SoL, diesmal nicht bedrohlich.
        <h3>Mathe KA</h3>
        Eine Mathe KA war.
        <h2>Panik</h2>
        <h3>Latein SoL</h3>
        In Latein war am Montag eine SoL. Wir hatten trotzdem HAs.
        <h3>AAAAA</h3>
        Die EXTREM RIGGEDE Technik KA wurde ausgegeben.
        <h3>Test</h3>
        In Latein war ein bedrohlicher Text.
        <h3>Ich fühle mich bedroht</h3>
        Latein war weird. Ich fühle mich bedroht.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 8.-11. - Mittagsschule ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 49': {
      title: '8b-Zeitung - 2025, KW 49',
      content: `
        Dies ist die 10. Ausgabe der 8b-Zeitung für KW 49 2025, von dem 1. bis zu dem 5. Dezember 2025.
        <h2>Normales</h2>
        <h3>Physik KA</h3>
        Die Physik KA passierte.
        <h3>n94 kann nicht deutschen</h3>
        <a href="#" onclick="event.preventDefault(); navigateTo('n94')">n94</a> hat die deutsche Sprache verlernt (aber nur während Gk + Wt Unterricht)
        <h3>Vermeidungsvermeidung</h3>
        Die Prävention sollte mittwochs passieren, ist sie aber nicht.
        <h3>Chemie KA</h3>
        Die Chemie KA war. Außerdem fangen wir in Chemie mit Atomen an.
        <h2>Panik</h2>
        <h3>?</h3>
        Geschichte sehr geschichtlich. Panik startete.
        <h3>Oh nein</h3>
        Latein Vokabeltest mal wieder rigged.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Freitag 5.+6. - Technik ist ausgefallen.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 50': {
      title: '8b-Zeitung - 2025, KW 50',
      content: `
        Dies ist die 11. Ausgabe der 8b-Zeitung für KW 50 2025, von dem 8. bis zu dem 12. Dezember 2025.
        <h2>Normales</h2>
        <h3>Deutsch KA ausgegeben</h3>
        Die Deutsch KA wurde dienstags ausgegeben. Der Durchschnitt war gut.
        <h3>Englisch KA</h3>
        Am Dienstag wurde die sehr strukturierte Englisch KA geschrieben.
        <h3>Pyhsik KA ausgegeben</h3>
        ...
        <h3>KONVERSATION</h3>
        Eine Konversation wird zwischen der 8b und der Lateinlehrerin gehalten.
        <h3>A</h3>
        Eine weitere Ka, die Religion/Ethik KA, wurde geschrieben.
        <h3>NOCH EINE KA</h3>
        Die Geschichte KA wurde geschrieben.
        <h2>Panik</h2>
        Keine :D
        <h2>8b-Sachen</h2>
        <h3>Canva Dings</h3>
        In Physik lernten wir, wie man Canva benutzt.
        <h3>Deutsch war nice</h3>
        In Deutsch durften wir mit iMovie eine Werbung erstellen.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2025 kw 51': {
      title: '8b-Zeitung - 2025, KW 51',
      content: `
        Dies ist die 12. Ausgabe der 8b-Zeitung für KW 51 2025, von dem 15. bis zu dem 19. Dezember 2025.
        <h2>Normales</h2>
        <h3>Englisch Film</h3>
        In Englisch wurde die bisher schwierigste je passierte Englisch-KA ausgegeben. (Sie war trotzdem relativ einfach) Dafür wurde ein schlechter Film geschaut.
        <h3>Advent am AMG</h3>
        Advent am AMG passierte:
        <ul>
          <li>Tag 1: Große & 1. kleine Projekte durchgeführt</li>
          <li>Tag 2: Große & 2. kleine Projekte durchgeführt</li>
          <li>Tag 3: Aufbau</li>
        </ul>
        <h3>Wichteln</h3>
        Es wurde gewichtelt. Ich weiß nicht, was das bedeutet, ich kann nicht deutschguten.
        <h3>Quiz</h3>
        Ein zum Glück unbenotetes Weihnachts-Quiz passierte am Freitag.
        <h3>Die Präsentation</h3>
        Die P.R.Ä.S.E.N.T.A.T.I.O.N. passierte, wonach Ferien waren.
        <h2>Panik</h2>
        <h3>Latein KA</h3>
        Die Latein KA, die letzte KA 2025, passierte.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-05-03',
      related: [],
      weight: 1
    },
    '2026 kw 2': {
      title: '8b-Zeitung - 2026, KW 2',
      content: `
        Dies ist die 13. Ausgabe der 8b-Zeitung für KW 2 2026, von dem 7. bis zu dem 9. Januar 2026.
        <h2>Normales</h2>
        <h3>Ende der Ferien</h3>
        Die Weihnachtsferien endeten mittwochs. Außerdem ist 2025 kollabiert und ein neues Jahr musste gestartet werden.<br>Dieses neue Jahr hat jedoch einen Bug, wo n83 manchmal spawnt. Spawnraten werden ab jetzt am Ende der Zeitung genannt.
        <h3>Deutsch KA</h3>
        Am Donnerstag wurde die Deutsch KA geschrieben. Sie war sehr einfach.
        <h3>Drogenprävention</h3>
        Die Drogenprävention passierte. To prevent ist englisch für 'verhindern', also nehme ich an, dass Drogen verhindert wurden.
        <h3>Chemieentscheidung</h3>
        Es wurde entschieden, einen Ausflug zum Technorama irgendwann in 2026 zu machen.
        <h2>Panik</h2>
        <h3>Latein-KA zurück</h3>
        Die Latein KA wurde am Mittwoch ausgegeben. Dies wurde als offizielle Tragödie bezeichnet.
        <h3>Latein dumm</h3>
        Latein dumm. Neuer Grund 'Oktavheft' freigeschaltet.
        <h2>8b-Sachen</h2>
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Mittwoch: 3</li>
          <li>Donnerstag: 4</li>
          <li>Freitag: 5</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2026 kw 3': {
      title: '8b-Zeitung - 2026, KW 3',
      content: `
        Dies ist die 14. Ausgabe der 8b-Zeitung für KW 3 2026, von dem 12. bis zu dem 16. Januar 2026.
        <h2>Normales</h2>
        <h3>Problematisches Zeichnen</h3>
        In Technik wurde das technische Zeichnen beigebracht.
        <h3>Mathe</h3>
        Bei meinem Plan für was ich in die Zeitungen reinmachen soll stand da einfach das Wort Mathe. Ich weiß nicht woher es kam. Mache ich es wohl hier rein.
        <h3>Musik KA</h3>
        Die Musik KA wurde geschrieben.
        <h3>Ethik KA zurück</h3>
        Die Ethik KA wurde zurückgegeben. Die anderen vielleicht auch, hab keinen Plan.
        <h3>Kunst ist Paralleluniversum</h3>
        In Kunst mussten wir sehr viele parallele Linien zeichnen.
        <h2>Panik</h2>
        <h3>Impulsiv</h3>
        In Physik lernen wir über Impuls mit dem Formelzeichen P. Wieso P???
        <h3>Donnerstag: Schlechtester Tag der Geschichte des Universums</h3>
        In Geschichte: Nur langweilige Aufgaben und ein langweiliger Film. In Deutsch: Eine INHALTSANGABE! In Latein: Latein. In Englisch: NOCH MAL GESCHICHTE.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 1.+2. - Latein ist ausgefallen, weswegen der 12.1. zum Nationalfeiertag erklärt wurde.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 7</li>
          <li>Dienstag: 10</li>
          <li>Mittwoch: 20</li>
          <li>Donnerstag: 60</li>
          <li>Freitag: 200</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-05-03',
      related: [],
      weight: 1
    },
    '2026 kw 4': {
      title: '8b-Zeitung - 2026, KW 4',
      content: `
        Dies ist die 15. Ausgabe der 8b-Zeitung für KW 4 2026, von dem 19. bis zu dem 23. Januar 2026.
        <h2>Normales</h2>
        <h3>Was ist los</h3>
        Was ist los der ganze Donnerstag war kein Unterricht außer in English
        <h3>Keine Technik KA</h3>
        Die Technik KA war nicht, da sie ausgefallen ist.
        <h3>Vokabeltest</h3>
        Am Dienstag ein Vokabeltest welcher in zwei verschiedenen Dimensionen auf einmal existiert. (Sie ist auf einem 2D Papier gedruckt)
        <h3>Suboptimal</h3>
        Gk + Wt und Englisch wurden dienstags auf dem Stundenplan getauscht.
        <h3>Kraft</h3>
        In Physik haben wir über die Kraft gelernt, mit Formelzeichen F, welches dieses Mal Sinn ergibt weil das englische Wort für Kraft 'force' ist, im Gegensatz zu P.
        <h2>Panik</h2>
        <h3>Scheiß German</h3>
        I hate the German language.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Mittwoch 3. - Latein ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 1000</li>
          <li>Dienstag: 10000</li>
          <li>Mittwoch: 10^6</li>
          <li>Donnerstag: 10^9</li>
          <li>Freitag: 10^15</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-05-03',
      related: [],
      weight: 1
    },
    '2026 kw 5': {
      title: '8b-Zeitung - 2026, KW 5',
      content: `
        Dies ist die 16. Ausgabe der 8b-Zeitung für KW 5 2026, von dem 26. bis zu dem 28. Januar 2026.
        <h2>Normales</h2>
        Keine :|
        <h2>Panik</h2>
        <h3>Latein wird hyper-exponentiell nerviger</h3>
        Latein: Vokabelübung - Formenbildungsübung - Hausaufgabenkontrolle - Neue Hausaufgaben
        <h3>ABSOLUTE AAAAAA</h3>
        Die Beschreibung des Dienstages. (Er war langweilig.)
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Mittwoch 3. - Latein ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10^30</li>
          <li>Dienstag: 10^100</li>
          <li>Mittwoch: 10^10^6</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 6': {
      title: '8b-Zeitung - 2026, KW 6',
      content: `
        Dies ist die 17. Ausgabe der 8b-Zeitung für KW 6 2026, von dem 2. bis zu dem 6. Februar 2026.
        <h2>Normales</h2>
        <h3>Notenkonferenz</h3>
        Noten werden konferenzt.
        <h3>Zeugnisse</h3>
        Die Zeugnisse wurden freitags ausgegeben.
        <h3>N0BELPREIS AN N94</h3>
        <a href="#" onclick="event.preventDefault(); navigateTo('n94')">n94</a> machte mal wieder in Kunst sein Zeug.
        <h2>Panik</h2>
        <h3>Latein</h3>
        Dies ist ein schlechter Tag.
        <h3>Musik KA zurück</h3>
        Die Musik KA wurde zurückgegeben. <a href="#" onclick="event.preventDefault(); navigateTo('n08')">n08</a> wollte mit einer 4 flexen.
        <h2>8b-Sachen</h2>
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 8.-11. - Mittagsschule ist ausgefallen (wegen Notenkonferenz).</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10^10^10</li>
          <li>Dienstag: 10^10^100</li>
          <li>Mittwoch: 10^10^10^10</li>
          <li>Donnerstag: 10^^5</li>
          <li>Freitag: 10^^10</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 7': {
      title: '8b-Zeitung - 2026, KW 7',
      content: `
        Dies ist die 18. Ausgabe der 8b-Zeitung für KW 7 2026, von dem 9. bis zu dem 12. Februar 2026.
        <h2>Normales</h2>
        <h3>Englisch Vokabeltest</h3>
        Es gab in Englisch am Montag einen Vokabeltest und danach langweilige USA Sachen.
        <h3>M</h3>
        In Musik lernen wir über Techno Musik.
        <h3>Fastnacht</h3>
        Es war am Donnerstag Fastnacht und danach Ferien:
        <ul>
          <li>Zuerst gingen wir in die Schule falls wir die nervigen Leute, die die Tür blockierten, vermeiden konnten.</li>
          <li>Es gab verschiedene Leute mit Kostümen. Es startete Geschichtsunterricht wo Brett- und Kartenspiele gespielt wurden.</li>
          <li>Dann Deutsch - nichts passierte, wonach wir in die Sporthalle mussten.</li>
          <li>Dort waren random nervige Sachen und dann eine weitere Blockierung von nervigen Leuten und dann Ferien.</li>
        </ul>
        <h2>Panik</h2>
        <h3>Latein</h3>
        Muss man mehr sagen?
        <h3>Filme in Englisch</h3>
        Es wurden dienstags Filme in Englisch angeschaut. Die eine Gruppe hat einen guten Film angeschaut, ohne Aufgaben währenddessen. Die andere hatte einen absolut schlechten Film, viermal hintereinander, mit Aufgaben.
        <h2>8b-Sachen</h2>
        <h3>Videospiele in Technik</h3>
        Ja.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10^^50</li>
          <li>Dienstag: 10^^10^10</li>
          <li>Mittwoch: 10^^10^^3</li>
          <li>Donnerstag: 10^^10^^10</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 9': {
      title: '8b-Zeitung - 2026, KW 9',
      content: `
        Dies ist die 19. Ausgabe der 8b-Zeitung für KW 9 2026, von dem 23. bis zu dem 27. Februar 2026.
        <h2>Normales</h2>
        <h3>Wow</h3>
        In Gk + Wt zum ersten Mal Wt.
        <h3>?</h3>
        Wir müssen jetzt ein komplettes Techno Lied erfinden.
        <h3>Ende(Otto)</h3>
        Keine weiteren Sachen über Otto von Bismarck im Geschichtsunterricht.
        <h3>Schwefel</h3>
        In Chemie haben wir mit Schwefel experimentiert und dann irgendwas über chemische Reaktionen.
        <h2>Panik</h2>
        <h3>ugh</h3>
        Die Ferien endeten und es gab SOFORT Latein und nervige Lateinsachen.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 5. - Technik ist ausgefallen.</li>
          <li>Mittwoch 3. - Latein ist ausgefallen.</li>
          <li>Mittwoch 5. - Religion/Ethik ist ausgefallen.</li>
          <li>Donnerstag 6. - Englisch ist ausgefallen.</li>
          <li>Freitag 5.+6. - Technik ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10^^10^^10^10</li>
          <li>Dienstag: 10^^^4</li>
          <li>Mittwoch: 10^^^5</li>
          <li>Donnerstag: 10^^^10</li>
          <li>Freitag: 10^^^10^10</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 10': {
      title: '8b-Zeitung - 2026, KW 10',
      content: `
        Dies ist die 20. Ausgabe der 8b-Zeitung für KW 10 2026, von dem 2. bis zu dem 6. März 2026.
        <h2>Normales</h2>
        <h3>Kahoot</h3>
        Montags gab es ein Kahoot zum Abschluss des Themas Technisches Zeichnen in Technik.
        <h3>Mathe KA</h3>
        Mathe KA am Mittwoch
        <h3>Ablauf des Physikunterrichtes</h3>
        Wir redeten über Druck und die Einheit Pa, und auch über Quecksilber
        <h3>OTTO</h3>
        Es ging weiter mit Otto aber diesmal von Guericke/von Guck mal ich hab nix.
        <h2>Panik</h2>
        <h3>Die unmögliche Latein Sache</h3>
        Es gab donnerstags einen weiteren Vokabeltest.
        <h3>Die Geschichte</h3>
        Dienstags mussten wir in Deutsch eine Geschichte lesen, jedoch wurde durch eine temporale Anomalie 8:45 und 9:05 gleichgesetzt.
        <h3>Die andere Geschichte</h3>
        Dienstags mussten wir in Englisch eine Geschichte lesen, tatsächlich eine über den Oregon Trail (oh nein, die 8b hasst den Oregon Trail)
        <h2>8b-Sachen</h2>
        <h3>A?</h3>
        Dienstags hat jeder seine Englisch-HA vergessen, was logisch war da sie praktisch "Zeitreise in Vergangenheit tun" war.
        <h3>Normal.</h3>
        Dienstags wurde die übrige Zeit für das momentane Projekt in Technik verdoppelt.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Freitag 4.-11. - Das meiste ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10^^^10^^10</li>
          <li>Dienstag: 10^^^10^^^3</li>
          <li>Mittwoch: 10^^^^3</li>
          <li>Donnerstag: 10^^^^10</li>
          <li>Freitag: 10{5}10</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2026 kw 11': {
      title: '8b-Zeitung - 2026, KW 11',
      content: `
        Dies ist die 21. Ausgabe der 8b-Zeitung für KW 11 2026, von dem 9. bis zu dem 13. März 2026.
        <h2>Normales</h2>
        <h3>Ökosystem</h3>
        Technik ist jetzt über Ökosysteme.
        <h3>Englisch KA</h3>
        Es gab dienstags eine Englisch-KA.
        <h3>Deutsch Vera</h3>
        Vera fängt an, und die deutsche donnerstags ist schwierig.
        <h3>Mathe Vera</h3>
        Und freitags war die Mathe Vera, sie fand am Freitag statt.
        <h2>Panik</h2>
        <h3>Latein...</h3>
        Latein wiederholt sich, aber diesmal mit Innovation - dies war der Ablauf:
        <ul>
          <li>Cheating mit Oktavheft</li>
          <li>Deklinationsübung</li>
          <li>Vokabelcheating</li>
          <li>Übersetzung</li>
          <li>Neue HAs</li>
          <li>HA Kontrolle</li>
        </ul>
        Der Punkt, wo der einzige Teil des Unterrichtes "Neue HAs" ist, nähert sich.
        <h3>Latein Vokabeltest</h3>
        Es gibt wieder donnerstags ein Latein-Vokabeltest.
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 5.-11. - Alles nach Englisch ist ausgefallen.</li>
          <li>Mittwoch 4. - Musik ist ausgefallen.</li>
          <li>Freitag 1.+2. - Mathe wurde verschoben.</li>
          <li>Freitag 5.+6. - Das Profilfach ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10{6}10</li>
          <li>Dienstag: 10{10}10</li>
          <li>Mittwoch: 10{100}10</li>
          <li>Donnerstag: 10{10^10}10</li>
          <li>Freitag: 10{10^^3}10</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2026 kw 12': {
      title: '8b-Zeitung - 2026, KW 12',
      content: `
        Dies ist die 22. Ausgabe der 8b-Zeitung für KW 12 2026, von dem 16. bis zu dem 20. März 2026.
        <h2>Normales</h2>
        <h3>Englisch Vera</h3>
        Dienstags fand die Englisch Vera statt. Jeder realisierte: Echte Englischsprecher sprechen so unverständlich und schnell dass sie praktisch nicht Englisch sprechen.
        <h3>Wintersporttag</h3>
        Freitag war der Wintersporttag. Sport fand statt.
        <h2>Panik</h2>
        <h3>Latein Klassenarbeit</h3>
        Es fand eine Tragödie statt.
        <h3>Deutsch Klassenarbeit</h3>
        Es fand eine weitere Tragödie statt, diesmal in Interpretationsform. (Donnerstags)
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 5.+6. - Technik ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: 10{10^^10}10</li>
          <li>Dienstag: 10{10{3}10}10</li>
          <li>Mittwoch: 10{10{10}10}10</li>
          <li>Donnerstag: {10, 4, 1, 2}</li>
          <li>Freitag: {10, 5, 1, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2026 kw 13': {
      title: '8b-Zeitung - 2026, KW 13',
      content: `
        Dies ist die 23. Ausgabe der 8b-Zeitung für KW 13 2026, von dem 23. bis zu dem 24. März 2026.
        <h2>Normales</h2>
        <h3>Englisch Film</h3>
        Am Dienstag haben wir in Englisch einen Film auf Englisch angeschaut.
        <h3>Physik Videospiel</h3>
        In Physik haben wir ein Videospiel gespielt. Es war komisch und kooperativ, und n29 zerstörte.
        <h3>Osterferien</h3>
        Die Osterferien beginnen.
        <h2>Panik</h2>
        <h3>Ich hasse Latein</h3>
        Latein ist montags ausgefallen, aber die Lateinlehrerin gab trotzdem Aufgaben und sogar HAs.
        <h3>Deutsch Rechtschreibübung</h3>
        Dienstags mussten wir in Deutsch ein massives Arbeitsblatt über Großschreibung machen.
        <h2>8b-Sachen</h2>
        <h3>Englisch antimateriell</h3>
        Englisch war montags sehr A&A (absurd & antimateriell). Zitate:
        <ul>
          <li>What is the middle day?</li>
          <li>n97's family tree was dropped in his garden by a plane.</li>
          <li>I hope you don't have dementia.</li>
        </ul>
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 5. - Technik ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 1, 2}</li>
          <li>Dienstag: Graham's Zahl</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-03-27',
      edited: '2026-03-27',
      related: [],
      weight: 1
    },
    '2026 kw 16': {
      title: '8b-Zeitung - 2026, KW 16',
      content: `
        Dies ist die 24. Ausgabe der 8b-Zeitung für KW 16 2026, von dem 13. bis zu dem 17. April 2026.
        <h2>Normales</h2>
        <h3>Ferienende</h3>
        Die Osterferien endeten.
        <h3>Podcast in Musik</h3>
        In Musig muss man einen Podcast machen.
        <h3>WAS</h3>
        Do Latein: KEIN VOKABELTEST
        <h3>abc</h3>
        In Mathe lernen wir seit Freitag jetzt die "abc Formel"
        <h2>Panik</h2>
        <h3>Sofort Latein nach Ferienende</h3>
        Muss man mehr sagen. Zusätzlich sofort nervige Latein-HAs. Und sofort die Latein KA zurück. Es gab beides Einsen und Sechsen.
        <h3>Latein ist dumm</h3>
        Die Lateinlehrerin sagte mittwochs, es gibt morgen "vielleicht" einen Vokabeltest???
        <h3>AG traumatisierend</h3>
        Die AG ist absolut dumm, weil wir Tische und Stühle und so über 3 Stockwerke transportieren mussten, und dies alleine, wir haben jetzt mehrfache Demenz.
        <h3>TS3</h3>
        TS3.
        <h2>8b-Sachen</h2>
        <h3>Kunst ist gut?</h3>
        Es gab mal wieder sehr viel Antimaterie in Kunst.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 5.+6. - Technik ist ausgefallen.</li>
          <li>Dienstag 1.+2. - Deutsch ist ausgefallen.</li>
          <li>Dienstag 8.-11. - Die Mittagsschule ist ausgefallen.</li>
          <li>Donnerstag 1.+2. - Geschichte ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, {10, 10, 1, 2}, 1, 2}</li>
          <li>Dienstag: {10, 10, 2, 2}</li>
          <li>Mittwoch: {10, 10, 3, 2}</li>
          <li>Donnerstag: {10, 10, 10, 2}</li>
          <li>Freitag: {10, 10, {10, 10, 10, 2}, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 17': {
      title: '8b-Zeitung - 2026, KW 17',
      content: `
        Dies ist die 25. Ausgabe der 8b-Zeitung für KW 17 2026, von dem 20. bis zu dem 24. April 2026.
        <h2>Normales</h2>
        <h3>Englisch KA Zeug Reveal</h3>
        Details für die kommenden Aufgaben auf der Englisch KA wurden am Montag revealed.
        <h3>Bioindikatoren</h3>
        Die Präsentationen für die Bioindikatoren wurden montags präsentiert.
        <h3>Englisch Vera</h3>
        Die Englisch Vera Ergebnisse wurden am Dienstag ausgegeben. Und Deutsch Vera am Donnerstag übrigens auch.
        <h3>Geschichte KA</h3>
        Die Geschichte KA passierte.
        <h3>E KA überraschend</h3>
        Die Englisch KA wurde donnerstags ausgegeben, und sie war doch nicht so schwierig?
        <h3>Chemieunterricht war absorbierend</h3>
        Als ob.
        <h2>Panik</h2>
        <h3>Englisch KA.</h3>
        Die Englisch KA war am Dienstag. Ich wurde traumatisiert. Wegen der Englisch KA.
        <h3>b^2 - 4ac ist diskriminierend</h3>
        Diskriminierung ist nicht nett D:
        <h3>Latein...</h3>
        Latein Vokabeltest, ich hasse Latein
        <h3>Latein</h3>
        Latein
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 1, 3}</li>
          <li>Dienstag: {10, {10, 10, 1, 3}, 1, 3}</li>
          <li>Mittwoch: {10, 10, 2, 3}</li>
          <li>Donnerstag: {10, 10, 10, 3}</li>
          <li>Freitag: {10, 10, {10, 10, 10, 3}, 3}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 18': {
      title: '8b-Zeitung - 2026, KW 18',
      content: `
        Dies ist die 26. Ausgabe der 8b-Zeitung für KW 18 2026, von dem 27. bis zu dem 27. April 2026.
        <h2>Normales</h2>
        Keine :|
        <h2>Panik</h2>
        <h3>Latein</h3>
        Ja. (ich implodiere gleich)
        <h3>NwT Demenz</h3>
        NwT gibt auch Demenz, wie die AG am <a href="#" onclick="event.preventDefault(); navigateTo('2026 kw 16')">16.4.</a>
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 1, 4}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-02',
      edited: '2026-05-02',
      related: [],
      weight: 1
    },
    '2026 kw 19': {
      title: '8b-Zeitung - 2026, KW 19',
      content: `
        Dies ist die 27. Ausgabe der 8b-Zeitung für KW 19 2026, von dem 4. bis zu dem 8. Mai 2026.
        <h2>Normales</h2>
        <h3>Ok.</h3>
        <a href="#" onclick="event.preventDefault(); navigateTo('n79')">n79</a> sagte in Latein am Montag Oah 15.
        <h3>Vokabeltestverspätung</h3>
        Der Vokabeltest in Englisch wurde von Mo auf Do verspätet.
        <h3>WELCOME TO z'<0</h3>
        Die Podcasts in Musik sind fertig. (Wir mussten welche machen)
        <h3>Rk/Ev/Eth KA</h3>
        Ja, es gab 1 KA.
        <h2>Panik</h2>
        <h3>NwT wieder Demenz</h3>
        ...
        <h3>Wirtschaft KA</h3>
        Die Wirtschafts-KA wurde geschrieben, sie war einfach aber sie ist in der Panik Rubrik weil es eine GROßE DISKUSSION über die Antwort zu Frage 1 gab.
        <h3>Geschichte Film</h3>
        In Geschichte schauten wir einen schlechten Film.
        <h3>AG Ausfall</h3>
        Die AG ist entfallen aber dies wurde niemandem gesagt
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 3. - SportM ist ausgefallen.</li>
          <li>Dienstag 3.+4. - In Englisch war SoL.</li>
          <li>Dienstag 8.+9. - Physik ist ausgefallen.</li>
          <li>Mittwoch 1.+2. - Mathe ist ausgefallen.</li>
          <li>Freitag 1.+2. - Mathe ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 10, 4}</li>
          <li>Dienstag: {10, 10, 10, 5}</li>
          <li>Mittwoch: {10, 10, 10, 10}</li>
          <li>Donnerstag: {10, 10, 10, {10, 10, 10, 10}}</li>
          <li>Freitag: {10, 10, 1, 1, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-06',
      edited: '2026-05-06',
      related: [],
      weight: 1
    },
    '2026 kw 20': {
      title: '8b-Zeitung - 2026, KW 20',
      content: `
        Dies ist die 28. Ausgabe der 8b-Zeitung für KW 20 2026, von dem 11. bis zu dem 15. Mai 2026.
        <h2>Normales</h2>
        Keine :|
        <h2>Panik</h2>
        <h3>Latein KA</h3>
        hdehufhuieokdojkfionuzviwqvftzuwdoiuf
        <h2>8b-Sachen</h2>
        <h3>aaa</h3>
        <a href="#" onclick="event.preventDefault(); navigateTo('n29')">n29</a> hat ein nobelpreiswürdiges Gedicht geschrieben.
        <h3>Google KI hat IQ</h3>
        <a href="#" onclick="event.preventDefault(); navigateTo('n42')">n42</a> fragte die Google KI, ob <a href="#" onclick="event.preventDefault(); navigateTo('n79')">n79</a> der Mathelehrer ist, und sie sagte Ja. Sie meinte außerdem, Handys bestehen größtenteils aus Uran.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 3. - SportM ist ausgefallen.</li>
          <li>Montag 4. - Englisch ist bei Gruppe 1 ausgefallen.</li>
          <li>Dienstag 8.+9. - Physik ist ausgefallen.</li>
          <li>Donnerstag 1.-11. - Der ganze Tag ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, {10, 10, 1, 1, 2}, 1, 1, 2}</li>
          <li>Dienstag: {10, 10, 2, 1, 2}</li>
          <li>Mittwoch: {10, 10, 3, 1, 2}</li>
          <li>Donnerstag: {10, 10, 10, 1, 2}</li>
          <li>Freitag: {10, 10, {10, 10, 10, 1, 2}, 1, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-15',
      edited: '2026-05-15',
      related: [],
      weight: 1
    },
    '2026 kw 21': {
      title: '8b-Zeitung - 2026, KW 21',
      content: `
        Dies ist die 29. Ausgabe der 8b-Zeitung für KW 21 2026, von dem 18. bis zu dem 22. Mai 2026.
        <h2>Normales</h2>
        <h3>Mathe KA</h3>
        Mittwochs war ne Mathe KA
        <h3>Deutsch KA</h3>
        Eine Deutsch KA zur Gedichtinterpretation wurde am Donnerstag geschrieben, öa
        <h2>Panik</h2>
        <h3>WIRKLICH</h3>
        In Technik sind wir jetzt mit einem Projekt welches so ein halbes Jahr dauerte fertig und das nächste Projekt ist praktisch identisch zu diesem
        <h3>n90 ist eine Oper</h3>
        Jemand hat auf eine Umfrage im Musikunterricht bei der Frage, was für Opern wir kennen, <a href="#" onclick="event.preventDefault(); navigateTo('n90')">n90</a> geantwortet, weswegen die Musiklehrerin die Umfrage aufgrund Genervtheit stoppte. Ich stimme eigentlich zu dass n90 eine Oper ist
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 1.+2. - Deutsch wurde durch Wirtschaft ersetzt.</li>
          <li>Dienstag 8.-11. - Die Mittagsschule ist ausgefallen.</li>
          <li>Donnerstag 1.+2. - Geschichte wurde durch Chemie ersetzt.</li>
          <li>Donnerstag 5. - Latein ist ausgefallen. ENDLICH!!!!!!</li>
          <li>Freitag 1.+2. - Mathe ist ausgefallen.</li>
          <li>Freitag 5.+6. - Technik ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 1, 2, 2}</li>
          <li>Dienstag: {10, 10, 2, 2, 2}</li>
          <li>Mittwoch: {10, 10, 10, 2, 2}</li>
          <li>Donnerstag: {10, 10, {10, 10, 10, 2, 2}, 2, 2}</li>
          <li>Freitag: {10, 10, 1, 3, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-05-19',
      edited: '2026-05-22',
      related: [],
      weight: 1
    },
    '2026 kw 24': {
      title: '8b-Zeitung - 2026, KW 24',
      content: `
        Dies ist die 30. Ausgabe der 8b-Zeitung für KW 24 2026, von dem 8. bis zu dem 12. Juni 2026.
        <h2>Normales</h2>
        <h3>Ende der Pfingstferien</h3>
        Ende der Pfingstferien. Sofort Latein:(
        <h3>n79 in Backrooms genoclippt</h3>
        n79 ist am Montag während des Technikunterrichtes in die Backrooms genoclippt.
        <h3>Deutsch KA</h3>
        Die Deutsch KA wurde dienstags zurückgegeben.
        <h3>Physik KA verspätet</h3>
        Die Physik KA wurde verspätet.
        <h3>5 GFS am Freitag</h3>
        Das sind einige
        <h2>Panik</h2>
        <h3>Englisch Lektüre</h3>
        EINE ENGLISCH LEKTÜRE WIRD AB DIENSTAG GELESEN AAAAA.
        <h3>Latein Vokabeltest :(</h3>
        hccdjhkcljkdklsaöjdkhkjl
        <h2>8b-Sachen</h2>
        <h3>Wirtschaft Werbung</h3>
        In Wirtschaft durften wir selbst eine Werbung für etwas erstellen.
        <h3>Deutsch ding</h3>
        In Deutsch machen wir jetzt fürs ganze Schuljahr nur irgendwelche Spaßsachen, wie Filme erstellen.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 2, 3, 2}</li>
          <li>Dienstag: {10, 10, 10, 3, 2}</li>
          <li>Mittwoch: {10, 10, 1, 4, 2}</li>
          <li>Donnerstag: {10, 10, 1, 10, 2}</li>
          <li>Donnerstag: {10, 10, 1, 1, 3}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-06-08',
      edited: '2026-06-12',
      related: [],
      weight: 1
    },
    '2026 kw 25': {
      title: '8b-Zeitung - 2026, KW 25',
      content: `
        Dies ist die 31. Ausgabe der 8b-Zeitung für KW 25 2026, von dem 15. bis zu dem 19. Juni 2026.
        <h2>Normales</h2>
        <h3>Physik KA</h3>
        Die Physik KA war:
        <ul>
          <li>Sie war komplett Multiple Choice</li>
          <li>Die Formulierung für Frage 16 erzwingt eine Antwort für Frage 4</li>
          <li>Es gab eine Storyline?</li>
          <li>Frage 15 hat "ohne die Kraft zu ändern" und Antworten B und D waren "Kraft ändern"</li>
          <li>Ein 2m großer Hügel</li>
        </ul>
        <h3>Musik SoL</h3>
        Ja
        <h3>Chemie KA</h3>
        Die Chemie KA passierte.
        <h2>Panik</h2>
        Keine :D
        <h2>8b-Sachen</h2>
        <h3>"Kunst"</h3>
        In Kunst machen wir jetzt nix mehr.
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Nein.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 2, 1, 3}</li>
          <li>Dienstag: {10, 10, 10, 1, 3}</li>
          <li>Mittwoch: {10, 10, 1, 2, 3}</li>
          <li>Donnerstag: {10, 10, 10, 2, 3}</li>
          <li>Freitag: {10, 10, 1, 3, 3}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-06-15',
      edited: '2026-06-19',
      related: [],
      weight: 1
    },
    '2026 kw 26': {
      title: '8b-Zeitung - 2026, KW 26',
      content: `
        Dies ist die 32. Ausgabe der 8b-Zeitung für KW 26 2026, von dem 22. bis zu dem 26. Juni 2026.
        <h2>Normales</h2>
        <h3>Physik KA</h3>
        Die Technik KA war (Titel irrelevant)
        <h2>Panik</h2>
        Keine :D
        <h2>8b-Sachen</h2>
        <h3>Technorama Besuch</h3>
        Am Dienstag war ein Technorama Besuch als Ausflug was sehr nice war.<br>
        Es war krass, sogar der Trockner war hype !<br>
        Es war 75 Grad celsius
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Mittwoch 5. - Rk/Ev/Eth ist ausgefallen.</li>
          <li>Donnerstag 6. - Englisch ist ausgefallen.</li>
          <li>Freitag 5.+6. - Technik ist überraschenderweise ausgefallen.</li>
          <li>Freitag 8.+9. - Kunst ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 1, 10, 3}</li>
          <li>Dienstag: {10, 10, 1, 1, 4}</li>
          <li>Mittwoch: {10, 10, 1, 1, 5}</li>
          <li>Donnerstag: {10, 10, 1, 1, 10}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-06-22',
      edited: '2026-06-22',
      related: [],
      weight: 1
    },
    '2026 kw 27': {
      title: '8b-Zeitung - 2026, KW 27',
      content: `
        Dies ist die 33. Ausgabe der 8b-Zeitung für KW 27 2026, von dem 29. Juni bis zu dem 3. Juli 2026.
        <h2>Normales</h2>
        <h3>Europa Park Besuch</h3>
        Ja
        <h2>Panik</h2>
        Keine :D
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 5. - Technik ist ausgefallen.</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Dienstag: {10, 10, 1, 1, 1, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-06-30',
      edited: '2026-06-30',
      related: [],
      weight: 1
    },
    '2026 kw 28': {
      title: '8b-Zeitung - 2026, KW 28',
      content: `
        Dies ist die 34. Ausgabe der 8b-Zeitung für KW 28 2026, von dem 6. bis zu dem 10. Juli 2026.
        <h2>Normales</h2>
        <h3>Moscheebesuch am Dienstag</h3>
        Es war statt Deutsch ein MOSchee besuch.
        <h2>Panik</h2>
        <h3>Abi Streich</h3>
        Donnerstag war der Abi Streich aber er war extrem nervig und langweilig und redundant und wir hatten danach nicht mal aus dies ist ein F Tier Tag
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Montag 1.+2. - Latein ist ausgefallen.</li>
          <li>Dienstag 5. - Technik ist ausgefallen.</li>
          <li>Mittwoch 3. - Latein wurde ersetzt lets GO!!!!!!</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 2, 1, 1, 2}</li>
          <li>Dienstag: {10, 10, 10, 1, 1, 2}</li>
          <li>Mittwoch: {10, 10, 1, 2, 1, 2}</li>
          <li>Donnerstag: {10, 10, 1, 10, 1, 2}</li>
          <li>Freitag: {10, 10, 1, 1, 2, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-07-07',
      edited: '2026-07-07',
      related: [],
      weight: 1
    },
    '2026 kw 29': {
      title: '8b-Zeitung - 2026, KW 29',
      content: `
        Dies ist die 35. Ausgabe der 8b-Zeitung für KW 29 2026, von dem 13. bis zu dem 17. Juli 2026.
        <h2>Normales</h2>
        Keine :/
        <h2>Panik</h2>
        <h3>Technik KA zurück</h3>
        Die Technik KA wurde zurückgegeben und wir haben herausgefunden dass wir nicht wirklich so schlecht in Technik sind sondern die Bewertung extrem problematisch war.<br>
        Es war wirklich kontrovers, 
        <h2>8b-Sachen</h2>
        Keine :(
        <h2>Anderes</h2>
        <h3>Ausfälle</h3>
        <ul>
          <li>Dienstag 3.+4. - Englisch ist nicht ausgefallen, aber es war SoL</li>
        </ul>
        <h3>n83-Spawnraten</h3>
        <ul>
          <li>Montag: {10, 10, 1, 2, 2, 2}</li>
          <li>Dienstag: {10, 10, 1, 1, 3, 2}</li>
        </ul>
      `,
      categories: ['zeitungen'],
      created: '2026-07-07',
      edited: '2026-07-07',
      related: [],
      weight: 1
    },
  };