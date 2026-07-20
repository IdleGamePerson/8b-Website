const pages = {
  'hauptseite': {
    title: 'Willkommen auf der 8b-Website!',
    content: `
      <p>Herzlich willkommen auf der <strong>offiziellen 8b-Website</strong>! 🎉</p>
      <p>Hier findest du alle Insider, Memes, und unvergesslichen Momente unserer Klasse gesammelt an einem Ort.</p>
      
      <h2>📚 Was findest du hier?</h2>
      <ul>
        <li><strong>Insider</strong> - Die legendären Sprüche und Momente</li>
        <li><strong>Ereignisse</strong> - Unvergessliche Geschichten</li>
        <li><strong>Unterricht</strong> - Alles aus dem Klassenzimmer</li>
        <li><strong>Freizeit</strong> - Sport, Pausen und mehr</li>
        <li><strong>Digital</strong> - Klassenchat und Online-Momente</li>
      </ul>
      
      <h2>🧭 Navigation</h2>
      <p>Nutze die <strong>Suchleiste</strong> oben, um nach bestimmten Insidern zu suchen, oder öffne das <strong>Menü</strong> für mehr Optionen!</p>
      
      <blockquote>Die 8b - Eine Klasse, viele Legenden!</blockquote>
    `,
    categories: [],
    weight: 0.5
  },
  // Redirect pages
  'vattenfall': {
    title: 'Boykottiert Vattenfall!',
    redirectTo: 'boykottiert-vattenfall'
  },
  'klassenchat': {
    title: 'Klassenchat',
    redirectTo: 'die-klassenchat-legenden'
  },
  'sport': {
    title: 'Sport',
    redirectTo: 'sport-unterricht'
  },
  'lehrer': {
    title: 'Lehrer',
    redirectTo: 'herr-mueller-zitate'
  },
  'fenster': {
    title: 'Fenster',
    redirectTo: 'die-fenster-debatte'
  },
  'alle-seiten': {
    title: 'Alle Seiten',
    content: '', // Will be generated dynamically
    weight: 0.1
  },
  'wichtige-seiten': {
    title: 'Wichtige Seiten',
    content: '', // Will be generated dynamically
    weight: 0.1,
    isSpecial: true
  },
  'kategorien': {
    title: 'Kategorien',
    content: '', // Will be generated dynamically
    weight: 0.1,
    isSpecial: true
  },
  'boykottiert-vattenfall': {
    title: 'Boykottiert Vattenfall!',
    index: 7.5,
    indexStats: [
      { label: 'Relevanz', value: 'Sehr hoch' },
      { label: 'Häufigkeit', value: 'Täglich' },
      { label: 'Legendenstatus', value: '⭐⭐⭐⭐⭐' },
      { label: 'Aktualität', value: 'Zeitlos' }
    ],
    indexProsCons: {
      pros: [
        { text: 'Absolut zeitlos', strength: 'strong' },
        { text: 'Alle kennen ihn', strength: 'strong' },
        { text: 'Passt immer', strength: 'normal' }
      ],
      cons: [
        { text: 'Irgendwann abgenutzt', strength: 'weak' }
      ]
    },
    infoboxes: [
      {
        title: '⚡ Schnellinfo',
        rows: [
          { label: 'Typ', value: 'Klassiker-Insider' },
          { label: 'Ursprung', value: 'Spontaner Ausruf' },
          { label: 'Häufigkeit', value: '⭐⭐⭐⭐⭐' },
          { label: 'Status', value: 'Zeitlos' },
          { label: 'Anlässe', value: 'Alles mit Strom' }
        ]
      }
    ],
    content: `
      <p>Einer der <strong>legendärsten Insider</strong> der 8b! 💡</p>
      
      <h2>Ursprung</h2>
      <p>Alles begann, als jemand in der Klasse verkündete: <em>"Boykottiert Vattenfall!"</em></p>
      <p>Seitdem ist dieser Spruch nicht mehr aus dem Klassenalltag wegzudenken.</p>
      
      <h2>Verwendung</h2>
      <p>Wird gerne verwendet, wenn:</p>
      <ul>
        <li>Das Licht im Klassenraum ausfällt</li>
        <li>Jemand das Licht anmacht oder ausmacht</li>
        <li>Irgendetwas mit Strom zu tun hat</li>
        <li>Oder einfach random zwischendurch, genau wie bei <a href="#" onclick="event.preventDefault(); navigateTo('peter-fox')">Peter Fox Moments</a></li>
      </ul>
      
      <h2>Im Unterricht</h2>
      <p>Besonders beliebt während <a href="#" onclick="event.preventDefault(); navigateTo('vertretungsstunden-chaos')">Vertretungsstunden</a>, wenn die Lehrer nicht wissen, was sie mit uns anfangen sollen.</p>
      
      <blockquote>Strom ist teuer, Insider sind gratis!</blockquote>
    `,
    categories: ['insider', 'unterricht'],
    created: '2024-01-15',
    edited: '2024-02-03',
    related: ['peter-fox', 'herr-mueller-zitate'],
    weight: 1.5,
    important: true,
    warnings: [
      {
        type: 'info',
        text: 'Dieser Insider ist ein absoluter Klassiker und wird von der gesamten Klasse verstanden!'
      }
    ]
  },
  'peter-fox': {
    title: 'Peter Fox Moments',
    infoboxes: [
      {
        title: '🎤 Song-Info',
        rows: [
          { label: 'Künstler', value: 'Peter Fox' },
          { label: 'Top Hit', value: 'Haus am See' },
          { label: 'Beliebtheit', value: '⭐⭐⭐⭐⭐' },
          { label: 'Anlässe', value: 'Spontan & überall' },
          { label: 'Genre', value: 'Deutscher Hip-Hop' }
        ]
      }
    ],
    content: `
      <p>Die <strong>Peter Fox</strong> Referenzen in der 8b sind unübertroffen! 🎤</p>
      
      <h2>Top Hits in der 8b</h2>
      <ol>
        <li><strong>"Haus am See"</strong> - Der Klassiker bei jeder Gelegenheit</li>
        <li><strong>"Schwarz zu Blau"</strong> - Wenn Berlin-Vibes aufkommen</li>
        <li><strong>"Alles Neu"</strong> - Nach jeder Veränderung im Stundenplan</li>
      </ol>
      
      <h2>Wann wird gesungen?</h2>
      <p>Spontane Peter Fox Momente treten auf bei:</p>
      <ul>
        <li>Langeweile im Unterricht (genau wie <a href="#" onclick="event.preventDefault(); navigateTo('mathe-trauma')">Mathe</a>)</li>
        <li>Wandertagen und Ausflügen</li>
        <li>Immer wenn jemand "Haus" sagt</li>
        <li><a href="#" onclick="event.preventDefault(); navigateTo('vertretungsstunden-chaos')">Vertretungsstunden</a>, wenn keiner weiß, was wir machen sollen</li>
      </ul>
      
      <h2>Verbindung zu anderen Insidern</h2>
      <p>Peter Fox Momente passen perfekt zu <a href="#" onclick="event.preventDefault(); navigateTo('boykottiert-vattenfall')">Boykottiert Vattenfall</a> - beides wird spontan und random gerufen!</p>
    `,
    weight: 1.2,
    categories: ['insider', 'freizeit'],
    related: ['boykottiert-vattenfall', 'vertretungsstunden-chaos']
  },
  'mathe-trauma': {
    title: 'Das Mathe-Trauma',
    infoboxes: [
      {
        title: '📐 Fach-Info',
        rows: [
          { label: 'Fach', value: 'Mathematik' },
          { label: 'Beliebtheit', value: '⭐☆☆☆☆' },
          { label: 'Schwierigkeit', value: 'Sehr hoch' },
          { label: 'Hilfsmittel', value: 'Taschenrechner' },
          { label: 'Typischer Satz', value: '"Haben wir doch schon..."' }
        ]
      }
    ],
    content: `
      <p>Mathe in der 8b ist... <em>eine Erfahrung</em>. 📐</p>
      
      <h2>Symptome</h2>
      <ul>
        <li>Spontanes Aufstöhnen bei "Bitte Seite X aufschlagen"</li>
        <li>Kollektives Schweigen bei Fragen</li>
        <li>Der eine Schüler, der IMMER die Antwort weiß</li>
        <li>Taschenrechner-Abhängigkeit</li>
      </ul>
      
      <h2>Berühmte Zitate</h2>
      <blockquote>"Das haben wir doch letztes Jahr schon gemacht!"</blockquote>
      <blockquote>"Kann mir jemand die Hausaufgaben schicken?"</blockquote>
      
      <h2>Rettung in der Not</h2>
      <p>Wenn Mathe zu stressig wird, hilft nur noch:</p>
      <ul>
        <li>Um Hilfe im <a href="#" onclick="event.preventDefault(); navigateTo('die-klassenchat-legenden')">Klassenchat</a> betteln</li>
        <li>Auf eine <a href="#" onclick="event.preventDefault(); navigateTo('vertretungsstunden-chaos')">Vertretungsstunde</a> hoffen</li>
        <li>Oder einfach <a href="#" onclick="event.preventDefault(); navigateTo('peter-fox')">Peter Fox</a> singen zur Ablenkung</li>
      </ul>
      
      <p><strong>Hinweis:</strong> Keine echten Traumata wurden bei der Erstellung dieser Seite verletzt.</p>
    `,
    weight: 1.0,
    created: '2023-10-01',
    edited: '2023-10-15',
    categories: ['unterricht'],
    related: ['herr-mueller-zitate', 'die-klassenchat-legenden'],
    warnings: [
      {
        type: 'warning',
        text: 'Diese Seite wurde seit über 60 Tagen nicht mehr aktualisiert und könnte veraltete Informationen enthalten.'
      }
    ]
  },
  'der-keks-krieg': {
    title: 'Der große Keks-Krieg',
    content: `
      <p>Es war ein dunkler Tag in der Geschichte der 8b... 🍪☁️</p>
      
      <h2>Die Vorgeschichte</h2>
      <p>Jemand brachte Kekse mit. Nicht genug für alle. <strong>Chaos brach aus.</strong></p>
      <p>Ähnlich dramatisch wie <a href="#" onclick="event.preventDefault(); navigateTo('die-fenster-debatte')">die Fenster-Debatte</a>, aber mit mehr Krümeln.</p>
      
      <h2>Die Fraktionen</h2>
      <ul>
        <li><strong>Team Schoko</strong> - "Nur Schoko-Kekse sind echte Kekse!"</li>
        <li><strong>Team Butterkeks</strong> - "Klassiker sind unschlagbar!"</li>
        <li><strong>Team Egal</strong> - "Hauptsache Kekse!"</li>
      </ul>
      
      <h2>Das Ergebnis</h2>
      <p>Bis heute ist der Konflikt <em>ungelöst</em>. Die Spannung ist greifbar, sobald jemand eine Keksdose öffnet.</p>
      <p>Der Streit wurde intensiv im <a href="#" onclick="event.preventDefault(); navigateTo('die-klassenchat-legenden')">Klassenchat</a> diskutiert - mit über 200 Nachrichten an einem Abend!</p>
      
      <blockquote>Kekse: Die einzige Sache, die die 8b spalten kann.</blockquote>
    `,
    weight: 1.3,
    categories: ['ereignisse', 'freizeit'],
    related: ['die-fenster-debatte', 'die-klassenchat-legenden']
  },
  'herr-mueller-zitate': {
    title: 'Die besten Lehrer-Zitate',
    content: `
      <p>Eine Sammlung der <strong>unvergesslichsten Aussagen</strong> unserer Lehrer! 👨‍🏫</p>
      
      <h2>Hall of Fame</h2>
      <blockquote>"Das solltet ihr eigentlich schon können..."</blockquote>
      <blockquote>"Ruhe jetzt, oder wir schreiben einen Test!"</blockquote>
      <blockquote>"Ich warte..."</blockquote>
      <blockquote>"Wer war das?"</blockquote>
      
      <h2>Zitate-Rangliste</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Rang</th>
              <th>Zitat</th>
              <th>Lehrer</th>
              <th>Fach</th>
              <th>Häufigkeit</th>
              <th>Legendenstatus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>"Das solltet ihr eigentlich schon können..."</td>
              <td>Frau Schmidt</td>
              <td>Mathe</td>
              <td>Täglich</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>2</td>
              <td>"Ich warte..."</td>
              <td>Herr Müller</td>
              <td>Deutsch</td>
              <td>Stündlich</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>3</td>
              <td>"In meiner anderen Klasse..."</td>
              <td>Frau Becker</td>
              <td>Englisch</td>
              <td>Wöchentlich</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>4</td>
              <td>"Das kommt in der Arbeit dran."</td>
              <td>Herr Wagner</td>
              <td>Geschichte</td>
              <td>Monatlich</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>5</td>
              <td>"Wer war das?"</td>
              <td>Alle</td>
              <td>Alle Fächer</td>
              <td>Täglich</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Die Klassiker</h2>
      <ul>
        <li>"Schreibt das auf, das ist wichtig!"</li>
        <li>"Hat jemand Fragen? Nein? Gut, dann Hausaufgaben..." (meistens in <a href="#" onclick="event.preventDefault(); navigateTo('mathe-trauma')">Mathe</a>)</li>
        <li>"Handys weg!" (wird im <a href="#" onclick="event.preventDefault(); navigateTo('die-klassenchat-legenden')">Klassenchat</a> oft zitiert)</li>
        <li>"Das erkläre ich jetzt nicht nochmal!"</li>
      </ul>
      
      <h2>Siehe auch</h2>
      <ul>
        <li><a href="#" onclick="event.preventDefault(); navigateTo('vertretungsstunden-chaos')">Vertretungsstunden-Chaos</a> - Wenn die normalen Lehrer fehlen</li>
        <li><a href="#" onclick="event.preventDefault(); navigateTo('mathe-trauma')">Das Mathe-Trauma</a> - Besonders viele Zitate stammen aus diesem Fach</li>
      </ul>
      
      <p><em>Diese Zitate sind natürlich alle fiktiv und liebevoll gemeint!</em></p>
    `,
    weight: 1.1,
    important: true,
    categories: ['unterricht', 'insider'],
    related: ['mathe-trauma', 'vertretungsstunden-chaos']
  },
  'vertretungsstunden-chaos': {
    title: 'Vertretungsstunden-Chaos',
    content: `
      <p>Wenn der Vertretungsplan einen Treffer zeigt... 🎯</p>
      
      <h2>Die 5 Phasen einer Vertretungsstunde</h2>
      <ol>
        <li><strong>Euphorie</strong> - "YESSS, kein <a href="#" onclick="event.preventDefault(); navigateTo('mathe-trauma')">Mathe</a>!"</li>
        <li><strong>Verwirrung</strong> - "Wer ist eigentlich unser Vertretungslehrer?"</li>
        <li><strong>Verhandlung</strong> - "Können wir nicht einfach Film schauen?"</li>
        <li><strong>Resignation</strong> - "Okay, dann halt Aufgaben..."</li>
        <li><strong>Chaos</strong> - <a href="#" onclick="event.preventDefault(); navigateTo('peter-fox')">Peter Fox</a> singen und <a href="#" onclick="event.preventDefault(); navigateTo('boykottiert-vattenfall')">Vattenfall boykottieren</a></li>
      </ol>
      
      <h2>Vertretungsstunden-Bingo</h2>
      <ul>
        <li>☐ Lehrer kommt 10 Min zu spät</li>
        <li>☐ "Arbeitet still für euch"</li>
        <li>☐ Jemand "vergisst" die Aufgaben</li>
        <li>☐ Spontane Diskussion über alles außer dem Thema</li>
        <li>☐ Nachricht im <a href="#" onclick="event.preventDefault(); navigateTo('die-klassenchat-legenden')">Klassenchat</a>: "Was machen wir gerade?"</li>
      </ul>
      
      <h2>Typische Sprüche</h2>
      <p>Mehr davon findest du bei den <a href="#" onclick="event.preventDefault(); navigateTo('herr-mueller-zitate')">Lehrer-Zitaten</a>!</p>
    `,
    weight: 1.0,
    categories: ['unterricht', 'ereignisse'],
    related: ['herr-mueller-zitate', 'peter-fox', 'die-klassenchat-legenden']
  },
  'die-klassenchat-legenden': {
    title: 'Klassenchat-Legenden',
    content: `
      <p>Der Klassenchat - wo Legenden geboren werden! 📱</p>
      
      <h2>Typische Nachrichten</h2>
      <ul>
        <li><code>22:47</code> - "Was waren die Hausaufgaben?"</li>
        <li><code>22:48</code> - "Hatte jemand mit?"</li>
        <li><code>22:49</code> - <em>7 Leute tippen...</em></li>
        <li><code>22:50</code> - Alle schicken das Gleiche</li>
      </ul>
      
      <h2>Nachrichten-Statistik (letzte 7 Tage)</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Nachrichten</th>
              <th>Sticker</th>
              <th>Sprachnachrichten</th>
              <th>Hausaufgaben-Fragen</th>
              <th>Memes gepostet</th>
              <th>Aktivitätszeit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Max M.</td>
              <td>247</td>
              <td>89</td>
              <td>2</td>
              <td>0</td>
              <td>34</td>
              <td>23:00-01:00</td>
            </tr>
            <tr>
              <td>Lisa K.</td>
              <td>183</td>
              <td>45</td>
              <td>8</td>
              <td>12</td>
              <td>7</td>
              <td>15:00-20:00</td>
            </tr>
            <tr>
              <td>Tom S.</td>
              <td>156</td>
              <td>102</td>
              <td>0</td>
              <td>2</td>
              <td>89</td>
              <td>Immer</td>
            </tr>
            <tr>
              <td>Anna B.</td>
              <td>12</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>0</td>
              <td>22:30-23:00</td>
            </tr>
            <tr>
              <td>Felix W.</td>
              <td>3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>Nie (liest nur)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Die Chat-Archetypen</h2>
      <ul>
        <li><strong>Der Späte</strong> - Fragt Sonntag 23:59 nach den <a href="#" onclick="event.preventDefault(); navigateTo('mathe-trauma')">Mathe-Hausaufgaben</a> für Montag</li>
        <li><strong>Der Helfer</strong> - Hat immer alles und schickt Fotos</li>
        <li><strong>Der Memer</strong> - Antwortet nur mit Stickern und <a href="#" onclick="event.preventDefault(); navigateTo('peter-fox')">Peter Fox</a> Lyrics</li>
        <li><strong>Der Geist</strong> - Liest alles, schreibt nie</li>
      </ul>
      
      <h2>Legendäre Chat-Momente</h2>
      <ul>
        <li>Die <a href="#" onclick="event.preventDefault(); navigateTo('der-keks-krieg')">Keks-Debatte</a> mit über 200 Nachrichten</li>
        <li>Die <a href="#" onclick="event.preventDefault(); navigateTo('die-fenster-debatte')">Fenster-Diskussion</a>, die nie endet</li>
        <li>Spontane <a href="#" onclick="event.preventDefault(); navigateTo('boykottiert-vattenfall')">Boykottiert Vattenfall</a> Momente um 2 Uhr nachts</li>
      </ul>
      
      <blockquote>Ein Screenshot im Klassenchat bleibt für die Ewigkeit.</blockquote>
    `,
    weight: 1.4,
    important: true,
    categories: ['digital', 'insider'],
    related: ['der-keks-krieg', 'die-fenster-debatte', 'mathe-trauma']
  },
  'sport-unterricht': {
    title: 'Sport-Unterricht Erlebnisse',
    content: `
      <div class="infobox">
        <div class="infobox-header" onclick="toggleInfobox('sportinfo-box')">
          <span>🏃 Sport-Info</span>
          <svg class="infobox-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
        <div class="infobox-content" id="sportinfo-box">
          <div class="infobox-row">
            <span class="infobox-label">Fach:</span>
            <span class="infobox-value">Sport</span>
          </div>
          <div class="infobox-row">
            <span class="infobox-label">Beliebteste Sportart:</span>
            <span class="infobox-value">Völkerball</span>
          </div>
          <div class="infobox-row">
            <span class="infobox-label">Beliebtheit:</span>
            <span class="infobox-value">⭐⭐⭐⭐☆</span>
          </div>
          <div class="infobox-row">
            <span class="infobox-label">Top-Ausrede:</span>
            <span class="infobox-value">Sachen vergessen</span>
          </div>
          <div class="infobox-row">
            <span class="infobox-label">Drama-Level:</span>
            <span class="infobox-value">Teams-Auswahl</span>
          </div>
        </div>
      </div>
      
      <p>Sport in der 8b - Eine Achterbahn der Emotionen! ��������♂️</p>
      
      <h2>Die Teams-Auswahl</h2>
      <p>Das spannendste Drama jeder Sportstunde:</p>
      <ul>
        <li>Die ersten zwei sind immer die Gleichen</li>
        <li>Strategisches "Ich hab mich noch nicht bewegt, also pick mich nicht"</li>
        <li>Der eine, der IMMER zuletzt gewählt wird (und dann das Spiel gewinnt)</li>
      </ul>
      
      <h2>Sportarten-Ranking</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Sportart</th>
              <th>Beliebtheit</th>
              <th>Verletzungsrisiko</th>
              <th>Anstrengung</th>
              <th>Spaßfaktor</th>
              <th>Beste Ausrede</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Völkerball</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>Hoch</td>
              <td>Mittel</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>"Ich wurde schon getroffen!"</td>
            </tr>
            <tr>
              <td>Basketball</td>
              <td>⭐�����������</td>
              <td>Mittel</td>
              <td>Hoch</td>
              <td>⭐⭐⭐⭐</td>
              <td>"Ich bin zu klein"</td>
            </tr>
            <tr>
              <td>Fußball</td>
              <td>⭐⭐⭐</td>
              <td>Mittel</td>
              <td>Sehr Hoch</td>
              <td>⭐⭐⭐</td>
              <td>"Ich hab die falschen Schuhe"</td>
            </tr>
            <tr>
              <td>Badminton</td>
              <td>⭐⭐⭐</td>
              <td>Niedrig</td>
              <td>Mittel</td>
              <td>⭐⭐⭐</td>
              <td>"Der Federball ist kaputt"</td>
            </tr>
            <tr>
              <td>Leichtathletik</td>
              <td>⭐</td>
              <td>Niedrig</td>
              <td>Sehr Hoch</td>
              <td>⭐</td>
              <td>"Mir ist schon beim Zuschauen schlecht"</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Ausreden-Ranking</h2>
      <ol>
        <li>🥇 "Ich hab meine Sportsachen vergessen"</li>
        <li>🥈 "Mir ist schlecht"</li>
        <li>🥉 "Ich hab mir den Fuß vertreten"</li>
      </ol>
      
      <h2>Völkerball</h2>
      <p>Das einzige Spiel, bei dem <strong>alle</strong> plötzlich sportlich werden.</p>
      <p>Die Intensit���t ist vergleichbar mit <a href="#" onclick="event.preventDefault(); navigateTo('der-keks-krieg')">dem Keks-Krieg</a>!</p>
      
      <h2>Nach dem Sport</h2>
      <p>Bilder und Videos landen natürlich sofort im <a href="#" onclick="event.preventDefault(); navigateTo('die-klassenchat-legenden')">Klassenchat</a>. 📱</p>
    `,
    weight: 1.0,
    categories: ['freizeit', 'unterricht'],
    related: ['der-keks-krieg', 'die-klassenchat-legenden']
  },
  'die-fenster-debatte': {
    title: 'Die ewige Fenster-Debatte',
    content: `
      <p>Fenster auf oder zu? Die größte Frage der Menschheit! 🪟</p>
      
      <h2>Die zwei Lager</h2>
      
      <h3>Team Fenster Auf 🌬️</h3>
      <ul>
        <li>"Es ist viel zu stickig hier!"</li>
        <li>"Frische Luft hilft beim Denken!" (besonders in <a href="#" onclick="event.preventDefault(); navigateTo('mathe-trauma')">Mathe</a>)</li>
        <li>"Corona ist noch nicht vorbei!"</li>
      </ul>
      
      <h3>Team Fenster Zu ������</h3>
      <ul>
        <li>"Es zieht!"</li>
        <li>"Mir ist kalt!"</li>
        <li>"Die Blätter fliegen weg!"</li>
      </ul>
      
      <h2>Der Kompromiss</h2>
      <p>Fenster wird auf <strong>Kipp</strong> gestellt. Niemand ist zufrieden. Der Kreislauf wiederholt sich in 10 Minuten.</p>
      
      <h2>Im Klassenchat</h2>
      <p>Die Debatte geht auch online weiter! Siehe <a href="#" onclick="event.preventDefault(); navigateTo('die-klassenchat-legenden')">Klassenchat-Legenden</a> für mehr Drama.</p>
      
      <h2>Verwandte Konflikte</h2>
      <p>Ähnlich dramatisch wie <a href="#" onclick="event.preventDefault(); navigateTo('der-keks-krieg')">der Keks-Krieg</a> - die 8b kann sich einfach nicht einigen!</p>
      
      <blockquote>Die Fenster-Frage hat schon mehr Freundschaften zerstört als Monopoly.</blockquote>
    `,
    weight: 1.1,
    categories: ['ereignisse', 'unterricht'],
    related: ['der-keks-krieg', 'die-klassenchat-legenden', 'mathe-trauma']
  }
};