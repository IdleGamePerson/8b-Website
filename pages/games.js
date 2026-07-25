const pagesGames = {
    'the 8b rooms': {
      title: 'The 8b Rooms',
      content: `
        <div class="infobox">
          <div class="infobox-header">The 8b Rooms</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Rooms-ähnlich</span>
            </div>
          </div>
        </div>
        <a href="https://idlegameperson.github.io/The_7b_Rooms/">The 8b Rooms</a> ist <strong>ein 8b-Spiel.</strong><br>
        Man startet in Raum 0 mit 3 HP, was auch das Maximum ist, und man muss zu Raum 999 kommen, ohne zu sterben, um zu gewinnen.<br>
        Bewegen: Man kann sich mit WASD bewegen. Dies erfordert jedoch Energie. Man kann auch mit Q sprinten, was Bewegungsgeschwindigkeit verdoppelt, aber 5x so viel Energie erfordert. Verliert man alle seine Energie, verliert man 1 HP und man kann sich nicht bewegen, bis sie sich wieder auf 100% auffüllt.<br>
        Verstecke: Es gibt Schränke. Man kann sich mit E in einem Schrank verstecken. Während man versteckt ist, verliert man 20% Sauerstoff pro Sekunde. Verliert man all sein Sauerstoff, verliert man 1 HP und wird aus dem Versteck rausgekickt.<br>
        Medizin: Erscheint zu 12% in einem Raum, man kann es einsammeln (Maximum 20). Gibt 1 HP.<br>
        Bücher: Es gibt auf dem Weg Bücher, die man einsammeln kann, aber sie haben keinen Effekt.
        <h2>Gegner</h2>
        Gegner sind das Hauptproblem des Spiels. Es gibt 4 Gegner:
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Erscheinung</td>
                <td>Attackierweise</td>
                <td>Nimmt _ HP</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Schüler</td>
                <td>10% Chance pro Raum ab Raum 40</td>
                <td>Flackert Licht, erscheint 7 Sekunden danach. Man muss sich verstecken.</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Lehrer</td>
                <td>20% Chance pro Raum ab Raum 70</td>
                <td>Attackiert wenn man in einem Raum mit ihm stillsteht (außer wenn man in einem Versteck ist) (Toleranz: 2s nach Betreten des Raumes)</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Vakuum</td>
                <td>15% Chance pro Raum ab Raum 90</td>
                <td>Erscheint als falsch nummerierte Tür, die beim Betreten attackiert</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Uhr</td>
                <td>5% Chance pro Raum ab Raum 100</td>
                <td>Attackiert wenn man zu lange in Raum mit ihm bleibt</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote>Ich hab nix zu sagen also erwähne ich einfach mal die Zahl 9</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-07-18',
      edited: '2026-07-18',
      related: [],
      weight: 1
    },
    'vermeidungssimulator': {
      title: 'Vermeidungssimulator',
      content: `
        <div class="infobox">
          <div class="infobox-header">Vermeidungssimulator</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Spiel</span>
            </div>
          </div>
        </div>
        <a href="https://idlegameperson.github.io/Vermeidungssimulator/">Vermeidungssimulator</a> ist <strong>ein 8b-Spiel.</strong><br>
        Man spielt als kleiner Kreis. Es gibt auch einen großen Kreis, der einen mit 2/3 der Geschwindigkeit von sich selbst folgt. Als letztes gibt es einen schwarzen Ring.<br>
        Wenn man den großen Kreis berührt, verliert man. Wenn man den schwarzen Ring berührt, bekommt man einen schwarzen Ring und wird 1,5% schneller, exponentiell.
        <h2>Upgrades</h2>
        Im Hauptmenü kann man Upgrades kaufen. Am Anfang kann man nur das Upgrade auf 0,0 kaufen und sonst kann ein Upgrade gekauft werden, wenn man ein benachbartes Upgrade gekauft hat.<br>
        Upgrades:
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <td>Koordinaten</td>
                <td>Upgrade</td>
                <td>Kosten</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0,0</td>
                <td>Großer Kreis 10% langsamer</td>
                <td>25 schwarze Ringe</td>
              </tr>
              <tr>
                <td>0,1</td>
                <td>Du bist 5% schneller</td>
                <td>50 schwarze Ringe</td>
              </tr>
              <tr>
                <td>0,-1</td>
                <td>Großer Kreis 5% langsamer</td>
                <td>100 schwarze Ringe</td>
              </tr>
              <tr>
                <td>0,2</td>
                <td>Nur 5s Wartezeit nach Spielende</td>
                <td>100 schwarze Ringe</td>
              </tr>
              <tr>
                <td>-1,0</td>
                <td>10% Chance auf +1 Ring</td>
                <td>125 schwarze Ringe</td>
              </tr>
              <tr>
                <td>0,-2</td>
                <td>Doppelte schwarze Ringe</td>
                <td>125 schwarze Ringe</td>
              </tr>
              <tr>
                <td>-1,-1</td>
                <td>Zweiter schwarzer Ring erscheint</td>
                <td>250 schwarze Ringe</td>
              </tr>
              <tr>
                <td>-2,-1</td>
                <td>1 der schwarzen Ringe werden blau</td>
                <td>300 schwarze Ringe</td>
              </tr>
              <tr>
                <td>1,0</td>
                <td>Grüner Kreis 10% kleiner</td>
                <td>1 blauer Ring</td>
              </tr>
              <tr>
                <td>1,2</td>
                <td>Kreise beschleunigen nur um 1,25%</td>
                <td>3 blaue Ringe</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Alpha-Version</h2>
        Vermeidungssimulator hatte eine Alpha. Sie hatte keine Upgrades, und auch einige kleinere Änderungen, wie dass Beschleunigung pro Ring linear um 1% statt exponentiell um 1,5% wächst.
        <blockquote>NEIN ICH BIN BEI 27 GESTORBEN</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-07-22',
      edited: '2026-07-23',
      related: [],
      weight: 1
    },
    'insolvenzklicker': {
      title: 'Insolvenzklicker',
      content: `
        <div class="infobox">
          <div class="infobox-header">Insolvenzklicker</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Challenge</span>
            </div>
          </div>
        </div>
        Insolvenzklicker ist <strong>ein 8b-Spiel.</strong><br>
        Man muss 500 Punkte erreichen, indem man auf +1 drückt. Alle 50 Punkte geht die Phase hoch, was das Spiel schwieriger macht:
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <td>Phase</td>
                <td>Effekt</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nix besonderes</td>
              </tr>
              <tr>
                <td>2</td>
                <td>4 Knöpfe, davon nur einer +1, +1 wechselt sich alle 1,2-1,8s</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hintergrund ist -1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Knöpfe außer +1 sind zu 2/7 0 und zu je 1/7 -1 bis -5</td>
              </tr>
              <tr>
                <td>5</td>
                <td>-5 Wand erscheint alle 8-12s über Knöpfen und Hintergrund (0,25s Vorwarnungszeit) und bleibt 1,8s</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Der +1 Knopf ist kleiner</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Knöpfe bewegen sich</td>
              </tr>
              <tr>
                <td>8</td>
                <td>+1 Knopf bewegt sich dreimal so schnell</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Wand erscheint doppelt so oft und nur 0,1s Vorwarnungszeit</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Knöpfe wechseln sich dreimal so häufig</td>
              </tr>
              <tr>
                <td>Post-Game</td>
                <td>Verliere passiv Punkte</td>
              </tr>
            </tbody>
          </table>
        </div>
        Phasen gehen nie runter.
        <blockquote>o</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-07-25',
      edited: '2026-07-25',
      related: [],
      weight: 1
    },
    "n42s rng": {
      title: "n42's RNG",
      warnings: [
          {
            type: 'info',
            text: `Nicht zu verwechseln mit <a href="#" onclick="event.preventDefault(); navigateTo('8b rng')">8b RNG.</a>`
          }
      ],
      content: `
        <div class="infobox">
          <div class="infobox-header">n42's RNG</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Glücksspiel</span>
            </div>
          </div>
        </div>
        <a href="https://idlegameperson.github.io/n42s_RNG/">n42's RNG</a> ist <strong>ein 8b-Spiel.</strong><br>
        Man generiert mit einem alle 2,5s drückbaren Knopf Seltenheiten, um Münzen zu erhalten.<br>
        Folgendes ist die Liste an allen Seltenheiten im Spiel: Gewöhnlich, Ungewöhnlich, Selten, Sehr selten, Episch, Legendär, Mythisch, Exotisch, Perfekt, Mysteriös, Verrückt, Extrem, Ultimativ, Super, Ewig, Himmlisch, Göttlich, Transzendent, Omega, Unendlich, Hyper-Unendlich.<br>
        Jede Seltenheit hat 5 Unterkategorien I, II, III, IV, V (außer Hyper-Unendlich, welches unendlich viele hat). Gewöhnlich I ist 1 zu 6 und gibt 1 Münze.<br>
        Jede Unterkategorie ist 1.2x seltener und gibt 1.1x mehr Münzen als die vorherige und jede Seltenheit ist 2.48832x seltener und gibt 1.61051x mehr Münzen als die vorherige.
        <h2>Upgrades</h2>
        0,0 kann immer gekauft werden und andere Upgrades nur, wenn man ein benachbartes Upgrade besitzt.
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <td>Koordinaten</td>
                <td>Upgrade</td>
                <td>Kosten (Münzen)</td>
                <td>Details</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0,0</td>
                <td>Glück +0,2</td>
                <td>10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>0,1</td>
                <td>Glück +0,2</td>
                <td>20</td>
                <td>-</td>
              </tr>
              <tr>
                <td>0,2</td>
                <td>Glück +0,3</td>
                <td>30</td>
                <td>-</td>
              </tr>
              <tr>
                <td>0,3</td>
                <td>Glück x1,1</td>
                <td>50 (x1,06/Kauf)</td>
                <td>Wiederholbar</td>
              </tr>
              <tr>
                <td>1,0</td>
                <td>Münzmultiplikator +0,2</td>
                <td>10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2,0</td>
                <td>Münzmultiplikator +0,2</td>
                <td>25</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2,1</td>
                <td>Münzmultiplikator +0,3</td>
                <td>30</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2,2</td>
                <td>Münzmultiplikator +0,3</td>
                <td>50 (x1,08/Kauf)</td>
                <td>Wiederholbar</td>
              </tr>
              <tr>
                <td>3,0</td>
                <td>Knopf häufiger drückbar</td>
                <td>100</td>
                <td>-0,3s</td>
              </tr>
              <tr>
                <td>4,0</td>
                <td>Knopf häufiger drückbar</td>
                <td>250</td>
                <td>-0,2s</td>
              </tr>
              <tr>
                <td>4,1</td>
                <td>Autoklicker auf Knopf</td>
                <td>500</td>
                <td>10 Sek./Klick</td>
              </tr>
              <tr>
                <td>4,2</td>
                <td>Immer min. Selten III</td>
                <td>1000</td>
                <td>Sonst Wurf regeneriert</td>
              </tr>
              <tr>
                <td>4,3</td>
                <td>Immer min. Sehr selten II</td>
                <td>1500</td>
                <td>Sonst Wurf regeneriert</td>
              </tr>
              <tr>
                <td>5,0</td>
                <td>10% Chance für 2x Münzen</td>
                <td>750</td>
                <td>-</td>
              </tr>
              <tr>
                <td>5,1</td>
                <td>10% Chance für Seltenheit +1</td>
                <td>2500</td>
                <td>-</td>
              </tr>
              <tr>
                <td>5,2</td>
                <td>0,3% Chance für 100x Münzen</td>
                <td>6500</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote>Ja ich hab die ÜBER SELTENE Seltenheit bekommen WOW</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-07-23',
      edited: '2026-07-23',
      related: [],
      weight: 1
    },
    'rng': {
      title: 'RNG',
      redirectTo: "n42's rng"
    },
    'als obob spiel': {
      title: 'Als Obob Spiel',
      content: `
        <div class="infobox">
          <div class="infobox-header">Als Obob Spiel</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Als Obob Spiel</span>
            </div>
          </div>
        </div>
        Das Als Obob Spiel ist <strong>ein Spiel.</strong> Es wurde von <a href="#" onclick="event.preventDefault(); navigateTo('n94')">n94</a> in Python programmiert.<br>
        Im Spiel wird wiederholt "als obob" angezeigt. Dann kann man einen Text eingeben.<br>
        Es gibt einen geheimen Text, bei dem das Spiel mit der Endnachricht "bob hat dich gefressen" endet.
        <blockquote>Bob hat mich gefressen :)</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-05-23',
      edited: '2026-05-23',
      related: [],
      weight: 1
    },
    'als obob': {
      title: 'Als Obob',
      redirectTo: 'als obob spiel'  
    },
    'als ob': {
      title: 'Als ob',
      redirectTo: 'als obob spiel'  
    },
    'dog clicker': {
      title: 'Dog Clicker',
      content: `
        <div class="infobox">
          <div class="infobox-header">Dog Clicker</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Incremental</span>
            </div>
          </div>
        </div>
        Dog Clicker ist <strong>ein Spiel.</strong> Es wurde von <a href="#" onclick="event.preventDefault(); navigateTo('n94')">n94</a> mit Orteil's IGM programmiert.<br>
        Es gibt eine Währung "Liebe", und man erhält, indem man auf das Herz, das es gibt, klickt, 1 Liebe.
        <h2>Gebäude</h2>
        Es gibt verschiedene Gebäude. Sie kosten Liebe und produzieren Liebe pro Sekunde.
        <ul>
          <li>Hundefutter: Kostet 100, 1/sek.</li>
          <li>Hundeleine: Kostet 999, 10/sek.</li>
          <li>Training: Kostet 10k, 100/sek.</li>
        </ul>
        Kostenskalierung: Nach einem Kauf werden die Kosten 1,1x teurer, exponentiell.
        <h2>Upgrades</h2>
        Upgrades sind einmalige Käufe.
        <ul>
          <li>Leckeres Essen: Kostet 625. Wird bei 2 Hundefutter freigeschaltet, und verdoppelt Produktion dieser.</li>
          <li>Trainingeffizienz: Kostet 2,5m. Wird bei 2 Training freigeschaltet, und verdoppelt Produktion dieser.</li>
        </ul>
        <h2>Liebe-r</h2>
        Alle 10 Sekunden erscheint ein Liebe-r, der 5sek. auf dem Bildschirm bleibt und beim Klicken 3-5 Sekunden an passiven Einkommen plus 2 an Liebe gibt.
        <h2>aaklicker</h2>
        aaklicker ist exakt das gleiche Spiel, aber mit anderen Bezeichnungen für Dinge:
        <ul>
          <li>Liebe -> aas getränk</li>
          <li>das Herz -> das Trinkglas</li>
          <li>Hundefutter -> aa Poop Factory</li>
          <li>Hundeleine -> aa ist nicht cool</li>
          <li>Training -> aa der Backfisch</li>
          <li>Leckeres Essen -> aa ist schlecht in jedem Spiel</li>
          <li>Trainingeffizienz -> Nasenhaarperücke</li>
          <li>Liebe-r -> (unbenannte Dinge)</li>
        </ul>
        <blockquote>Die zahl muss größer werden</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-05-24',
      edited: '2026-05-24',
      related: [],
      weight: 1
    },
    'aaklicker': {
      title: 'aaklicker',
      redirectTo: 'dog clicker'  
    },
    '8b rng': {
      title: '8b RNG',
      warnings: [
          {
            type: 'info',
            text: `Nicht zu verwechseln mit <a href="#" onclick="event.preventDefault(); navigateTo('n42s rng')">n42's RNG.</a>`
          }
      ],
      content: `
        <div class="infobox">
          <div class="infobox-header">8b RNG</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Glücksspiel</span>
            </div>
          </div>
        </div>
        8b RNG ist eine einzige Formel: 1/rand(0,1).<br>
        Es gibt einen Luck Trank der manchmal erscheint und die Zahl quadriert<br>
        Bei einer Zahl über 100 erscheint ein low quality Stern
        <blockquote>FÜNF TAUSEND!!!!!!</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-07-18',
      edited: '2026-07-23',
      related: [],
      weight: 1
    },
    'runterkill': {
      title: 'Runterkill',
      content: `
        <div class="infobox">
          <div class="infobox-header">Runterkill</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Sport</span>
            </div>
          </div>
        </div>
        Runterkill ist ist <strong>ein Spiel.</strong><br>
        In Runterkill spielt man auf dem inoffiziell anerkannten 2. Pausenhof vor dem Haupteingang, um genau zu sein, der Wiese auf diesem.<br>
        Man muss andere "runterkillen", d.h. von der Wiese runterschieben. Wer jemanden runterkillt, erhält einen Punkt, weg runtergekillt wird, darf nach einigen Sekunden wieder auf die Wiese.<br>
        Man muss stehen. Man darf nicht spawnkillen.<br>
        Der Spieler mit den meisten Punkten beim Ende der Pause ist der Gewinner.
        <blockquote>Aua</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-05-23',
      edited: '2026-05-23',
      related: [],
      weight: 1
    },
    'geographielehrerin survival': {
      title: 'Geographielehrerin Survival',
      content: `
        <div class="infobox">
          <div class="infobox-header">Geographielehrerin Survival</div>
          <div class="infobox-content">
            <div class="infobox-row">
              <span class="infobox-label">Genre</span>
              <span class="infobox-value">Sport</span>
            </div>
          </div>
        </div>
        Geographielehrerin Survival ist ist <strong>ein Spiel.</strong><br>
        In Geographielehrerin Survival spielt man auf dem inoffiziell anerkannten 2. Pausenhof vor dem Haupteingang.<br>
        <h2>Anfang & Rollen</h2>
        <h3>Schüler</h3>
        Die normale Rolle. Schüler wissen, wer die Geographielehrerin ist und wer der Schulleiter ist.
        <h3>Geographielehrerin</h3>
        Der Gegner des Spiels. Am Anfang wählen alle Spieler zusammen, wer die Geographielehrerin ist. Die Geographielehrerin weiß nicht, wer der Schulleiter ist.
        <h3>Schulleiter</h3>
        Auf dem gleichen Team wie die Schüler und sehr wichtig für diese. Nachdem die Geographielehrerin gewählt wurde, wählen die Schüler geheim untereinander, wer der Schulleiter ist.
        <h2>Das Spiel</h2>
        Es ist quasi Fangen, wo die Geographielehrerin die Schüler fangen muss. Wird ein Schüler von der Geographielehrerin gefangen, wird der Schüler eliminiert.<br>
        Wenn die Geographielehrerin jedoch den Schulleiter fängt, passiert etwas anderes. In diesem Fall startet der Schulleiter-Modus. In diesem darf der Schulleiter auch die Geographielehrerin fangen. Wenn dies passiert, gewinnt SOFORT das Schülerteam und die Geographielehrerin verliert.<br>
        Der Schulleiter darf die Geographielehrerin nur im Schulleiter-Modus fangen. Der Schulleiter muss, wenn er gefangen wurde, laut sagen, dass er gefangen wurde.<br>
        Die Geographielehrerin gewinnt, falls alle Schüler (nicht inkl. Schulleiter) gefangen wurden.
        <h2>Strategien</h2>
        <h3>Schüler</h3>
        <ul>
          <li>Vermeide, gefangen zu werden.</li>
          <li>Vielleicht die Geographielehrerin austricksen, um ausversehen den Schulleiter zu fangen?</li>
        </ul>
        <h3>Geographielehrerin</h3>
        <ul>
          <li>Fange die Schüler.</li>
          <li>Achte darauf, falls sich jemand verdächtig verhält. Vielleicht ist er der Schulleiter.</li>
        </ul>
        <h3>Schulleiter</h3>
        <ul>
          <li>Bleibe unauffällig.</li>
          <li>Lasse dich vielleicht absichtlich gefangen werden?</li>
        </ul>
        <blockquote>Hallo wie geht es dir</blockquote>
      `,
      categories: ['spiele'],
      created: '2026-05-23',
      edited: '2026-05-23',
      related: [],
      weight: 1
    },
  };