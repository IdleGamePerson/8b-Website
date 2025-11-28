const articles = [
    {
      title: 'An object',
      category: 'Was auch immer',
      vector: [0.76, -0.04, 0.69],
      description: 'An object ist ein Objekt. Niemand weiß genau, was für ein Objekt, aber es ist ein Objekt.',
      link: ""
    },
    {
      title: 'The 8b Rooms',
      category: '8b-Spiele',
      vector: [0.85, 0.17, 0.69],
      description: 'The 8b Rooms ist ein von Roblox DOORS inspiriertes Spiel.<br>Man startet in Raum 0 mit 3 HP. Das Ziel ist es, zu überleben, bis man Raum 999 erreicht.<hr><b>Raumstruktur:</b><br> - Räume bestehen aus 2 bis 10 Rechtecken.<br> - Im letzten Rechteck ist eine Tür zum nächsten Raum.<hr><b>Bücher:</b><br>Es gibt Bücher, die man sammeln kann. Bücher haben verschiedene Werte:<br><table><tr><td><b>Farbe</b></td><td><b>Wert</b></td></tr><tr><td>Rot</td><td>1</td></tr><tr><td>Orange</td><td>2</td></tr><tr><td>Gelb</td><td>5</td></tr><tr><td>Grün</td><td>10</td></tr><tr><td>Hellblau</td><td>25</td></tr><tr><td>Blau</td><td>50</td></tr><tr><td>Lila</td><td>100</td></tr></table><hr><b>Bewegung:</b><br>Bewegen mit WASD nimmt Energie. Man sprintet mit Q.<br><b>Verstecke:</b><br>Man kann sich mit E verstecken, was 20% Sauerstoff pro Sekunde nimmt.<br><i>Auf komplettem Verlust einer dieser Werte verliert man 1 HP.</i><hr><h3><b>Gegner</b></h3><b>Schüler (10% pro Raum ab 40)</b><br>Warnt 7 Sekunden vor Erscheinung, indem er das Licht flackert. Wenn er dich sieht, nimmt er 3 HP.<br><b>Lehrer (20% pro Raum ab 70)</b><br>Erscheint in einem Raum. Ab 2 Sekunden aktiviert er sich, was heißt, dass du 1 HP verlierst, falls du stillstehst. Dies gilt in Verstecken nicht.<br><b>Vakuum (15% pro Raum ab 90)</b><br>Sieht aus wie eine falsch nummerierte Tür, die 2 HP auf Berührung nimmt.<br><b>Uhr (5% pro Raum ab 100)</b><br>Erscheint in den Statistiken. Nimmt 3 HP, wenn du den Raum nicht schnell genug verlässt.<hr><b>Items:</b><br>Erscheinen mit einer 12% Chance pro Raum. Man hat 4 Item-Slots.<br>Liste an Items:<table><tr><td><b>Item-Name</b></td><td><b>Stackt bis</b></td><td><b>Benutzbar bei</b></td><td><b>Effekt auf Benutzung</b></td></tr><tr><td>Medizin</td><td>5</td><td>HP ist kleiner als 3</td><td>Erhöht HP um 1</tr></table>',
      link: 'https://idlegameperson.github.io/The_7b_Rooms/'
    },
    {
      title: 'n42´s RNG',
      category: '8b-Spiele',
      vector: [0.75, -0.09, 0.51],
      description: 'In n42´s RNG generiert man mit einem Knopf <i>(alle 2,5s drückbar)</i> Seltenheiten.<br>Seltenheiten: Gewöhnlich, Ungewöhnlich, Selten, Sehr selten, Episch, Legendär, Mythisch, Exotisch, Perfekt, Mysteriös, Verrückt, Extrem, Ultimativ, Super, Ewig, Himmlisch, Göttlich, Transzendent, Omega, Unendlich, Hyper-Unendlich.<br>Dabei hat jede Seltenheit (außer Hyper-Unendlich) 5 Unterkategorien I, II, III, IV, V; und Hyper-Unendlich hat unendlich Unterkategorien. Gewöhnlich I ist 1 zu 6 und gibt 1 Münze.<br>Jede Unterkategorie einer Seltenheit ist 1.2x seltener und gibt 10% mehr Münzen als die vorherige.<br>Jede Seltenheit ist 2.48832x seltener und gibt 61.051% mehr Münzen als die vorherige.<hr><b>Upgrades</b><br>Können gekauft werden, wenn man ein benachbartes Upgrade hat.<table><tr><td><b>Koordinaten</b></td><td><b>Upgrade</td><td><b>Kosten (Münzen)</b></td><td><b>Details</b></td></tr><tr><td><b>0,0</b></td><td>Glück +0,2</td><td>10</td></tr><tr><td><b>0,1</b></td><td>Glück +0,2</td><td>20</td></tr><tr><td><b>0,2</b></td><td>Glück +0,3</td><td>30</td></tr><tr><td><b>0,3</b></td><td>Glück x1,1</td><td>50 (x1,06/Kauf)</td><td>Wiederholbar</td></tr><tr><td><b>1,0</b></td><td>Münzmultiplikator +0,2</td><td>10</td></tr><tr><td><b>2,0</b></td><td>Münzmultiplikator +0,2</td><td>25</td></tr><tr><td><b>2,1</b></td><td>Münzmultiplikator +0,3</td><td>30</td></tr><tr><td><b>2,2</b></td><td>Münzmultiplikator +0,3</td><td>50 (x1,08/Kauf)</td><td>Wiederholbar</td></tr><tr><td><b>3,0</b></td><td>Knopf häufiger drückbar (-0,3s)</td><td>100</td></tr><tr><td><b>4,0</b></td><td>Knopf häufiger drückbar (-0,2s)</td><td>250</td></tr><tr><td><b>4,1</b></td><td>Autoklicker auf Knopf (10 Sek/Klick)</td><td>500</td></tr><tr><td><b>4,2</b></td><td>Immer min. Selten III</td><td>1000</td><td>Sonst Regeneration</td></tr><tr><td><b>4,3</b></td><td>Immer min. Sehr selten II</td><td>1500</td><td>Sonst Regeneration</td></tr><tr><td><b>5,0</b></td><td>10% Chance für x2 Münzen</td><td>750</td></tr><tr><td><b>5,1</b></td><td>10% Chance für Seltenheit +5</td><td>2500</td></tr><tr><td><b>5,2</b></td><td>0,3% Chance für x100 Münzen</td><td>6500</td></tr></table>',
      link: 'https://idlegameperson.github.io/n42s_RNG/'
    },
    {
      title: 'Die Zahl 115',
      category: 'Antimaterie',
      vector: [0.37, -0.48, 0.11],
      description: 'Die Zahl 115 ist eine Geheimzahl für das Wort <i>"Du"</i>.<br>Es wird meistens als Beleidigung benutzt.<br><br><b>Geschichte</b><br>Jemand hat mal nen <u>Rechtschreibfehler</u> gemacht.',
      link: ""
    },
    {
      title: 'Quaderkaffee',
      category: 'Was auch immer',
      vector: [0.9, -0.25, 0.81],
      description: 'Quaderkaffee ist quaderförmiger Kaffee.',
      link: ""
    },
    {
      title: 'TFF3125',
      category: 'Gaming',
      vector: [0.63, 0.31, 0.47],
      description: 'TFF3125 ist der <b>Geometry Dash</b> Account von <i>n42</i> und <i>n94</i>.<br>Statistiken:<table><tr><td><b>Statistik</b></td><td><b>Wert</b></td></tr><tr><td>Sterne</td><td>1027</td></tr><tr><td>Weltranglistenposition</td><td>999634</td></tr><tr><td>Monde</td><td>108</td></tr><tr><td>goldene Münzen</td><td>85</td></tr><tr><td>silberne Münzen</td><td>128</td></tr><tr><td>Easy Demons</td><td>19</td></tr><tr><td>Medium Demons</td><td>1</td></tr><tr><td>Created Levels</td><td>85</td></tr></table>',
      link: ""
    },
    {
      title: 'Banane',
      category: 'Was auch immer',
      vector: [0.18, -0.28, 0.1],
      description: '<i>Banane</i> ist ein Substantiv, welches bei keinem anderen zu der Situation passendem Substantiv benutzt wird.',
      link: ""
    },
    {
      title: 'Lidl',
      category: 'Was auch immer',
      vector: [0.58, 0.31, 0.47],
      description: '<small>Stelle dir während Lesen vor: Doors Seek Musik</small><br>Lidl ist ein Markt. <b>Der Geschichtslehrer warnt!</b>',
      link: ""
    },
    {
      title: 'n-System',
      category: 'Antimaterie',
      vector: [0.76, 0.31, 0.02],
      description: 'Das <b>n-System</b> ist ein System, welches jedem 8b-Schüler einen Code gibt.<br>Codestruktur: n<i>(Zahl zwischen 00-99)</i><hr>Jeder n-Code hat dazugehörende Infos:<br>- Position: Position des Schülers in der offiziellen Klassenliste.<br>- Geschlecht: Das Geschlecht des Schülers.<br>- Nobelpreise: Anzahl an gewonnenen Nobelpreisen des Schülers.<br>- Zusatzinfos: Zusätzliche Informationen über den Schüler.',
      link: ""
    },
    {
      title: 'Insolvenzklicker',
      category: '8b-Spiele',
      vector: [0.63, 0.1, 0.9],
      description: 'In Insolvenzklicker muss man 500 Punkte erreichen, in dem man auf +1 drückt. Die Phase geht alle 50 Punkte hoch, was das Spiel verschwierigt: <table><tr><td><b>Phase</b></td><td><b>Besonderes</b></td></tr><tr><td>1</td><td>Nix besonderes</td></tr><tr><td>2</td><td>4 Knöpfe, davon nur 1 +1</td></tr><tr><td>3</td><td>Hintergrund -1</td></tr><tr><td>4</td><td>Nicht +1 Knopf sind -1 bis -5</td></tr><tr><td>5</td><td>Machmal erscheint -5 Wand</td></tr><tr><td>6</td><td>+1 ist kleiner</td></tr><tr><td>7</td><td>Knöpfe bewegen sich</td></tr><tr><td>8</td><td>+1 Knopf schneller</td></tr><tr><td>9</td><td>Wand Buffs</td></tr><tr><td>10</td><td>- Knopf Buffs</td></tr><tr><td>Post-Game</td><td>Verliere passiv Punkte</td></tr></table>Phasen gehen nie runter.',
      link: ""
    },
    {
      title: '8b-Vektor',
      category: 'Antimaterie',
      vector: [0.28, 0.27, 0.01],
      description: 'Der <u>8b-Vektor</u> eines Objektes besteht aus 3 Zahlen zwischen -1 und 1.<br>Bedeutungen der Zahlen:<table><tr><td><b>Koordinate</b></td><td><b>Bedeutung bei -1</b></td><td><b>Bedeutung bei 0</b></td><td><b>Bedeutung bei 1</b</td></tr><tr><td><b>x (1. Zahl)</b></td><td>Anti-8b</td><td>Nicht 8b</td><td>8b</td></tr><tr><td><b>y (2. Zahl)</b></td><td>Selten</td><td>Normal</td><td>Häufig</td></tr><tr><td><b>z (3. Zahl)</b></td><td>Traurig</td><td>Neutral</td><td>Glücklich</td></tr></table>',
      link: ""
    },
    {
      title: 'AMG',
      category: 'Intelligenzallergie',
      vector: [0.93, 0.58, -0.16],
      description: 'Das AMG ist eine 8b-enthaltende Schule.<br>Das BMG ist das AMG 2.0: Die Antwort ist immer 3.',
      link: ""
    },
    {
      title: '8b RNG',
      category: '8b-Spiele',
      vector: [0.8, 0.25, 0.69],
      description: 'Das Spiel ist eine einzige Formel: 1/rand(0,1).<br>Es gibt nen Luck Trank der manchmal erscheint und Zahl quadriert',
      link: ""
    },
    {
      title: 'Nuklearpritt',
      category: 'Was auch immer',
      vector: [0.76, 0, 0.5],
      description: '<b>Chemische Komposition</b><br> - 32% Pritt<br> - 44% Uran<br> - 20% Plutonium<br> - 4% Antimaterie<hr><b>Kosten</b><br>{10, 10 [1 [2] 2] 2} € <i>(siehe BAN-Notation)</i><hr><b>Alternative Namen</b><br> - Atompritt<br> - PrittDonald´s Pritt<br> - Pritt: 2D Edition<br> - Eher instabiles Pritt',
      link: ""
    },
    {
      title: 'ä',
      category: 'Was auch immer',
      vector: [0.4, -0.18, 0.04],
      description: 'Du kannst in jeder Situation mit dem Buchstaben <b>A</b> das A zum <b>Ä</b> machen, um den Text lustig zu machen.<br>Beispiel: Jä.',
      link: ""
    },
    {
      title: 'Weltmeisterschaften',
      category: 'Was auch immer',
      vector: [0.72, -0.43, 0.39],
      description: 'Frage auf der Weltmeisterschaft eines Spiels nach den Regeln des Spiels.',
      link: ""
    },
    {
      title: 'Bubble Simulator',
      category: '8b-Spiele',
      vector: [0.35, -0.15, 0.47],
      description: 'In Bubble Simulator erscheint alle 5 Sekunden eine Blase mit der Zahl 0. Es kann max. 1500 Blasen geben.<br>Blasen mit gleicher Zahl (n) können zu einer Blase mit n+1 kombiniert werden, was <i>floor((2-d)<sup>n</sup>)</i> Punkte gibt. (d = 0,2)<hr><h3>Upgrades</h3><br><b>Wiederholbar</b><table><tr><td><b>Name</b></td><td><b>Kosten</b></td><td><b>Kostenmultiplikator<br>pro Kauf</b></td><td><b>Maximale<br>Kaufanzahl</td><td><b>Effekt</b></td></tr><tr><td><b>Startnummer</b></td><td>50</td><td>4,4</td><td>unendlich</td><td>Erhöht Zahl, mit der<br>Blasen erscheinen, um 1</td></tr><tr><td><b>Blasenrate</b></td><td>10</td><td>1,6</td><td>22</td><td>Blasen erscheinen 20%<br>schneller (max. 10/s)</td></tr><tr><td><b>Punktgewinn</td><td>250</td><td>1,6</td><td>unendlich</td><td>Dividiert d durch 1,25</td></tr><tr><td><b>Bereichgröße</b></td><td>1000</td><td>3,5</td><td>5</td><td>Macht Blasenbereich<br>2,5% kleiner</td></tr></table><b>Nicht wiederholbar</b><br>Fabrik: 7500 Punkte. Produziert jede Sekunde Punkte = die Quadratwurzel von der Summe der Blasenzahlen.<br>Erhöhe: 10000 Punkte. Erhöht erhaltene Punkte um (2,5*höchste Blasenzahl)%.',
      link: "https://idlegameperson.github.io/Bubble_Simulator"
    },
    {
      title: 'Vermeidungssimulator',
      category: '8b-Spiele',
      vector: [0.24, -0.2, 0.61],
      description: 'Vermeidungssimulator ist ein Spiel. Man spielt als ein kleiner Kreis, der sich zur Maus bewegt.<br>Es gibt einen großen Kreis, der zum kleinen geht. Auf Berührung dieser zwei Kreise verliert man.<br>Es gibt einen schwarzen Kreis. Auf Berührung der schwarzen und kleinen Kreise bekommt man 1 Punkt.<br>Alle 10 Punkte werden die kleinen und großen Kreise linear 10% schneller.',
      link: ""
    },
    {
    title: 'AA',
    category: 'Intelligenzallergie',
    vector: [-0.13, 0.19, -0.6],
    description: 'AA ist die Beschreibung für was schlechtes.',
    link: ""
    },
    {
    title: 'Balatro',
    category: 'Gaming',
    vector: [0.04, 0.57, 0.38],
    description: 'Balatro ist ein Spiel. Es ist ziemlich relevant in der 8b aufgrund mehreren Sachen:<br>1. n42 spielt Balatro.<br>2. n94 kann das Wort "Balatro" nicht aussprechen.<br>3. Balatro ist die Inspiration für einige 8b-Spiele.',
    link: ""
    },
    {
    title: 'Abcdefghijklmnoqrstuvwxyz',
    category: 'Was auch immer',
    vector: [0.03, -0.52, 0.67],
    description: 'Wenn du das Alphabet sagst, NICHT P SAGEN!',
    link: ""
    },
    {
    title: 'B',
    category: 'Was auch immer',
    vector: [0.2, 0.23, -0.05],
    description: 'Ein einfacherer Weg um zu sagen dass man die Frage nicht antworten will.',
    link: ""
    },
    {
    title: 'Formelle Konversationen',
    category: 'Was auch immer',
    vector: [0.58, 0.34, 0.36],
    description: 'Wenn man formell redet, egal, wie absurd das Thema ist, ist das lustig.',
    link: ""
    },
    {
      title: 'Zufälliger 2D Platformer',
      category: '8b-Spiele',
      vector: [0.16, -0.38, 0.51],
      description: 'Dieses Spiel ist ein 2D Platformer, welcher mit WAD kontrolliert wird.<br>Man spielt als ein Quadrat. Man startet in Raum 1 im oberen linken Feld.<br>Raum n ist ein (n+19)x(n+19) Labyrinth mit (n+19)<sup>2</sup>/200 Gegnern. Man muss ins untere rechte Feld kommen, um in den nächsten Raum zu kommen.<hr><h3><b>Gegner</b></h3>Man hat 3 Leben. Gegner bewegen sich zufällig,<br>aber haben eine höhere Chance, zum Spieler zu gehen. Auf Berührung eines Gegners<br>verliert man ein Leben und der Gegner wird zu einem Zufallsfeld teleportiert.<br><b>Auf 0 Leben verliert man.</b>',
      link: 'https://idlegameperson.github.io/2D_Platformer/'
    },
    {
      title: 'Ein ganz normales Mathespiel',
      category: '8b-Spiele',
      vector: [0.04, 0.13, 0.23],
      description: 'In diesem Spiel startet man in Runde 1 mit 30€, 2 +, 2 -, 1 * und 1 /.<br>Es gibt eine Zahl, eine Zielzahl, und eine geschriebene Zahl. In jeder Runde startet man mit einer Zahl und Endzahl je zufällig zwischen 1 und 100*2<sup>Runde/10</sup>.<hr><b>Gameplay</b><br>Man schreibt mit seinen Ziffern die geschriebene Zahl. Danach kann man eine seiner Operatoren benutzen, um das folgende zur Zahl zu machen und dann die geschriebene Zahl zu 0 zu setzen:<br>  <i>+</i>: Die geschriebene Zahl zur Zahl addieren.<br>  <i>-</i>: Die geschriebene Zahl von der Zahl subtrahieren.<br>  <i>*</i>: Die Zahl mit der geschriebenen Zahl multiplizieren.<br>  <i>/</i>: Die Zahl durch die geschriebene Zahl dividieren und abrunden.<br>Man kommt in die nächste Runde, in dem man die Zahl auf die Endzahl setzt. Dies gibt nach normalen Runden 8€-12€ und nach Bosskämpfen 16€-24€.<hr><b>Shop</b><br>Im Shop kann man mit € Ziffern und Operatoren kaufen. Dies kostet:<table><tr><td><b>Sache</b></td><td>Kosten</td></tr><tr><td>Eine Ziffer</td><td>3€</td></tr><tr><td>+</td><td>5€</td></tr><tr><td>-</td><td>5€</td></tr><tr><td>*</td><td>8€</td></tr><tr><td>/</td><td>7€</td></tr></table><hr><b>Bosskämpfe</b><br>Jede 10. Runde ist ein Bosskampf. Bosskämpfe haben besondere Bedingungen:<table><tr><td><b>Chance</b></td><td><b>Bosskampf</b></td></tr><tr><td>40%</td><td>Du musst eine sehr große Zahl berechnen. <i>(Start- und Endzahlen zwischen 100*2<sup>Runde/10</sup> und 100*2<sup>Runde/5</sup>)</i></td></tr><tr><td>30%</td><td>Du kannst eine Operation nicht benutzen. <i>(je 7,5% Chance für +, -, *, /)</i></td></tr><tr><td>20%</td><td>Benutzungen erfordern 2 der Sache.</td></tr><tr><td>10%</td><td>Käufe sind doppelt so teuer.</td></tr>',
      link: "https://idlegameperson.github.io/EGNM/"
    },
    {
      title: 'Time Survival',
      category: '8b-Spiele',
      vector: [0.82, 0.33, 0.51],
      description: 'In Time Survival muss man so lange wie möglich überleben.<br>Der Spieler ist ein X (Geschwindigkeit: 10km/h) mit 5 Leben, der mit WASD oder den Pfeiltasten kontrollierbar ist.<hr><b>Kreise</b><br>Es gibt Kreise auf dem Bildschirm. Wenn man sie berührt, verliert man Leben. Auf 0 Leben stirbt man. Kreisarten:<table><tr><td><b>Kreisfarbe</b></td><td><b>Erscheint ab _ Sek.</b></td><td><b>Geschwindigkeit</b></td><td><b>Besonderheit</b></td></tr><tr><td>Grün</td><td>0</td><td>20km/h</td><td>Keine</td></tr><tr><td>Blau</td><td>20</td><td>6km/h</td><td>Folgt dem Spieler</td></tr><tr><td>???</td><td>??</td><td>?????</td><td>????? ? ?????</td></tr></table><hr><b>Items</b><br>Nach 10 Sekunden können Items erscheinen. Man hat ein Item-Inventar, welches 3 Items enthalten kann. Man kann sie mit den Tasten 1, 2 und 3 benutzen. Items bewegen sich mit 10km/h auf dem Bildschirm.<table><tr><td><b>Item</b></td><td><b>Chance</b></td><td><b>Dauer</b></td><td><b>Effekt</b></td><td><b>Details</b></td></tr><tr><td>Herz</td><td>50%</td><td>-</td><td>+1 Leben</td><td>Keine</td></tr><tr><td>Apfel</td><td>10%</td><td>2s</td><td>Geschwindigkeitsboost</td><td>+60%</td></tr><tr><td>Stachelball</td><td>10%</td><td>-</td><td>10 verteidigende Stachelbälle erscheinen</td><td>Berühren sie Kreise, zerstören sie den Kreis und sich selbst. Können auch Items zerstören.</td></tr><tr><td>Blitz</td><td>10%</td><td>1s</td><td>Blaue Kreise werden verwirrt</td><td>Bewegen sich nicht mehr</td></tr><tr><td>Uhr</td><td>10%</td><td>1s</td><td>Zeitverschiebung</td><td>Kreisgeschwindigkeit -50%</td></tr><tr><td>Schild</td><td>10%</td><td>1s</td><td>Unendlich Leben</td><td>Keine</td></tr>',
      link: ""
    },
    {
      title: 'Der Papst',
      category: 'Was auch immer',
      vector: [0.31, -0.61, 0.24],
      description: 'Nenne Leute einfach random den Papst. Es ist lustig.',
      link: ""
    },
    {
      title: 'Vermeidungssimulator 2',
      category: '8b-Spiele',
      vector: [0.31, -0.1, 0.52],
      description: 'In Vermeidungssimulator 2 spielt man als einen kleinen Kreis. Es gibt einen großen Kreis, der einen folgt, mit einer Geschwindigkeit von 2/3 von einem selbst.<br>Es gibt auch einen schwarzen Ring.<br>Wenn du den großen Kreis berührst, verlierst du. Wenn du den schwarzen Ring berührst,<br>bekommst du einen schwarzen Ring und du + der große Kreis werden exponentiell +1,5% schneller.<hr><b>Hauptmenü + Upgrades</b><br>Man kommt auf Spielstart oder Verlust in das Hauptmenü. Dort kann man seine Ringe ausgeben,<br>um Upgrades zu kaufen, und dann ein neues Spiel starten (aber nur, wenn man 10 Sekunden gewartet hat + der Bildschirm größer ist als 1000x600px).<br>Am Anfang kann nur das Upgrade auf Koordinaten 0,0 gekauft werden und sonst nur Upgrades kaufen, wenn man ein benachbartes Upgrade besitzt.<br>Upgrade-Liste:<table><tr><td><b>Koordinaten</b></td><td><b>Upgrade</b></td><td><b>Kosten</b></td></tr><tr><td>0,0</td><td>Großer Kreis 10% langsamer</td><td>25 schwarze Ringe</td></tr><tr><td>0,1</td><td>Du bist 5% schneller</td><td>50 schwarze Ringe</td></tr><tr><td>0,-1</td><td>Großer Kreis 5% langsamer</td><td>100 schwarze Ringe</td></tr><tr><td>0,2</td><td>Nur 5s Wartezeit nach Spielende</td><td>100 schwarze Ringe</td></tr><tr><td>-1,0</td><td>10% Chance auf +1 Ring</td><td>125 schwarze Ringe</td></tr><tr><td>0,-2</td><td>Doppelte schwarze Ringe</td><td>125 schwarze Ringe</td></tr><tr><td>-1,-1</td><td>Zweiter schwarzer Ring erscheint</td><td>250 schwarze Ringe</td></tr><tr><td>-2,-1</td><td>1% der schwarzen Ringe werden blau</td><td>300 schwarze Ringe</td></tr><tr><td>1,0</td><td>Grüner Kreis 10% kleiner</td><td>1 blauer Ring</td></tr><tr><td>1,2</td><td>Kreise beschleunigen nur um 1,25%</td><td>3 blaue Ringe</td></tr></table>',
      link: 'https://idlegameperson.github.io/Vermeidungssimulator/'
    },
    {
      title: 'Nöht',
      category: 'Was auch immer',
      vector: [0.29, 0.22, 0.7],
      description: 'Nöht kann man sagen wenn etwas schlechtes passiert ist',
      link: ""
    },
    {
      title: 'Knochenanzahl',
      category: 'Was auch immer',
      vector: [0.73, 0.24, 0.62],
      description: 'Auf einem Online-Technik-Arbeitsblatt stand, dass ein Mensch <b>212 Knochen</b> hat, obwohl er 206 hat.<br>Dann haben manche Menschen die Zahl 212 überdeckt und ersetzt, manchmal durch 206, manchmal durch <u>andere absurde Sachen</u> wie:<br>- 932<br>- TREE(3)<br>- unendlich<br>- 1<br>- 0<br>- einige<br>- 100 bis 200<br>- 5,7',
      link: ""
    },
    {
      title: 'Profecto',
      category: 'Was auch immer',
      vector: [0.17, 0.05, 0.32],
      description: 'Profecto ist ein <i><u>gutes</u></i> lateinisches Wort (was ziemlich komisch ist, aber so ist es halt.)<hr>"Paulo post" kommt nah, aber ist nicht so gut wie Profecto.',
      link: ""
    },
    {
      title: 'Latein-KA',
      category: 'Katastrophen',
      vector: [-0.83, 0.48, -0.89],
      description: 'Die Latein-KA wurde nur <b>4</b> Tage vor der Passierung angekündigt. Und es wurde nicht gesagt was drankommen wird.',
      link: ""
    },
    {
      title: '222222222222',
      category: '22222222222222',
      vector: [2, 2, 2],
      description: '22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222<br>22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222',
      link: "2222222222222222222222222222222222222"
    },
    {
      title: 'Egak',
      category: 'Was auch immer',
      vector: [0.66, -0.37, 0.23],
      description: 'Statt Egal kann man Egak schreiben. Dies ist falschgeschrieben, aber das ist ja fast jedem egak',
      link: ""
    },
    {
      title: 'Lateinius Durchfallus',
      category: 'Was auch immer',
      vector: [0.69, 0.93, -0.47],
      description: 'Lateinius Durchfallus ist der Erfinder von Latein.',
      link: ""
    },
    {
      title: 'Photosynthese',
      category: 'Was auch immer',
      vector: [0.48, 0.55, 0.33],
      description: 'Photosynthese ist es, wenn man einen anderen Schüler in n79 reinschiebt<br>und sagt "Mach jetzt Photosynthese mit ihm" oder was ähnliches.',
      link: ""
    },
    {
      title: 'IQ 41',
      category: 'Was auch immer',
      vector: [0.7, 0.26, 0.43],
      description: 'IQ von 41 ist ein kleiner IQ',
      link: ""
    },
    {
      title: 'Der Schachhund',
      category: 'Was auch immer',
      vector: [0.67, 0.56, 0.4],
      description: 'Der Schachhund ist ein von n79 KI-generiertes Bild von einem Schach spielenden Hund.',
      link: ""
    },
    {
      title: 'Sehr große Zahlen',
      category: 'Was auch immer',
      vector: [0.26, -0.32, 0.56],
      description: 'Sehr große Zahlen sind gut',
      link: ""
    },
    {
      title: '8b-Kalender',
      category: 'Antimaterie',
      vector: [0.18, -0.52, 0.08],
      description: 'Der 8b-Kalender ist ein Zeitrechnungssystem der 8b. Es ist <b>gut</b><hr><b>Wie es klappt</b><br>- Es gibt 14 Monate mit je 26 Tagen. Jeder Tag eines Monats repräsentiert einen 8b-Schüler.<br>- Am Ende des Jahres ein Spezialtag, nicht Teil eines Monats.<br>- In Schaltjahren gibt es 2 Spezialtage am Ende des Jahres.<br>- Ein Jahr ist ein Schaltjahr, wenn es durch 4, aber nicht durch 128 teilbar ist.<br>- Der erste Tag des Jahres 0 bedeutet der 8. Mai 1911 im gregorianischen Kalender.<hr><b>Schreibweise</b><br>- Zwei Teile zusammen geschrieben ohne Leerzeichen dazwischen.<br>- Zweiter Teil ist ein "." und dann das Jahr.<br>- Erster Teil, wenn kein Spezialtag, ist zuerst der dazugehörige Buchstabe für den Tag, und dann der Monat (erste Ziffer 0, wenn Monat unter 10).<br>- Erster Teil, wenn Spezialtag, ist zuerst die Angabe der Spezialtagnummer und dann ein "S".<br>- Beispiele: E01.104, S13.97, 1S.112, K09.107',
      link: ""
    },
    /*
    {
      title: 'D.U.S.W.M.K.E.W.M.N.W',
      category: 'Analoge 8b-Spiele',
      vector: [0.14, 0.05, 0.32],
      description: '"Das unbenannte Spiel wo man Karten ersetzt welche man nicht will"',
      link: ""
    },
    {
      title: 'Bewegungszeit',
      category: 'Analoge 8b-Spiele',
      vector: [0.01, -0.2, 0.18],
      description: 'Bewegungszeit ist ein Spiel wo man sich bewegt',
      link: ""
    },
    {
      title: 'Die Banane',
      category: 'Analoge 8b-Spiele',
      vector: [0.44, 0.23, 0.78],
      description: 'Die Banane ist ein normales Quizspiel',
      link: ""
    },
    */
  ];