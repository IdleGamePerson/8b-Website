const GRAMMAR = [
    {
      id: "alphabet",
      title: "Alphabet",
      description: `
        8bisch hat zwei Alphabete: echtes 8bisch und Pseudo-8bisch. Nur Pseudo-8bisch kann auf Computern geschrieben werden, deshalb wird es in dieser Website benutzt. Dies ist nicht so ein großes Problem, da beide Alphabete funktional gleich sind.<br>Das Alphabet von 8bisch ist: a ɔ o u ɛ e ɪ p t k ɡ d b f v n m z s ʃ l j h.
      `,
      examples: []
    },
    /*{
      id: "adverbien",
      title: "Adverbien",
      description: `
        Adverbien sind unveränderlich und stehen direkt hinter dem Verb.
        Sie modifizieren die Handlung, nicht das Substantiv.
      `,
      examples: [
        {
          con: "Veru fast.",
          de: "Er kommt schnell."
        }
      ]
    },*/
    {
      id: "aussprechreglen",
      title: "Aussprechregeln",
      description: `
        Jeder Buchstabe wird so ausgesprochen wie in der IPA. Es gibt ein Zeichen  ́, welches die Aussprache weiter angibt.<br>Bestimmung der Silben:<br>- Jede Silbe endet mit einem Vokal, außer in diesen Sonderfällen:<br>1. Konsonanten am Ende eines Wortes sind auch am Ende der letzten Silbe.<br>2. Der erste Konsonant in Gruppen von 3 Konsonanten, die nebeneinander sind, ist am Ende der Silbe vor der Gruppe, statt der nach der Gruppe.<br>3. Hat ein Konsonant das Zeichen  ́, gilt dieser als Teil der Silbe davor, statt danach.<br>Betonte Silbe: Die vorletzte Silbe eines Wortes ist immer die betonte.
      `,
      examples: []
    },
    {
      id: "satzstruktur",
      title: "Satzstruktur",
      description: `
        8bisch hat zwei erlaubte Satzstrukturen: Subjekt - Verb im Infinitiv - Akkusativobjekt (für informelle Konversation) und Subjekt - Akkusativobjekt - Verb im Infinitiv (für formelle Konversation).
      `,
      examples: []
    },
    {
      id: "artikel",
      title: "Artikel",
      description: `
        Vor jedem Substantiv muss ein Artikel stehen. Es gibt den bestimmten Artikel 'de' und den unbestimmten Artikel 'ba'. Die Form des Artikels hängt vom Kasus des folgenden Substantives an.
      `,
      examples: []
    },
    {
      id: "negation",
      title: "Negation",
      description: `
        Jedes Wort in 8bisch kann negiert werden, indem das Partikel 'nɛ' vor das Wort platziert wird.
      `,
      examples: []
    },
    {
      id: "zeitformen",
      title: "Zeitformen",
      description: `
        Am Anfang eines Satzes kann das Partikel 'ple' platziert werden (oder eine Form davon), um die Zeitform des Satzes zu ändern. Ohne 'ple' gelten Sätze als Präsens.
      `,
      examples: []
    },
    {
      id: "pronomen",
      title: "Pronomen",
      description: `
        Pronomen können als Substantive benutzt werden. Sie benötigen keine Artikel.<br>Sie haben keinen Plural. Bei ihnen müssen Formen für Kasus gebildet werden, nämlich mit den Suffixen -e für Akkusativ, -a für Genitiv und -o für Dativ.
      `,
      examples: []
    },
    {
      id: "fragen",
      title: "Fragen",
      description: `
        Um nach einem Wort zu fragen, kann das Wort mit 'gve' (oder der passenden Form davon) ersetzt werden.<br>Ja-Nein-Fragen: Um eine Ja-Nein-Frage zu stellen, addiere das Partikel 'hɛ' am Ende des Satzes.
      `,
      examples: []
    },
    {
      id: "konjunktionen",
      title: "Konjunktionen",
      description: `
        Konjunktionen können zwischen Wörtern, Wortgruppen und Sätzen platziert werden, um diese zu verbinden.
      `,
      examples: []
    },
    {
      id: "adjektive",
      title: "Adjektive",
      description: `
        Ein Adjektiv kann nach einem Wort platziert werden, um das Wort weiter zu beschreiben.
      `,
      examples: []
    },
    {
      id: "zweite satzstruktur",
      title: "Zweite Satzstruktur",
      description: `
        Ein Satz darf aus nur einem einzigen Substantiv bestehen, welches mit Adjektiven usw. modifiziert werden kann.
      `,
      examples: []
    },
    {
      id: "genitiv",
      title: "Genitiv",
      description: `
        Substantive können als Adjektive benutzt werden und Wörter modifizieren, wo sie als Genitivobjekte gelten.
      `,
      examples: []
    },
    {
      id: "plural",
      title: "Plural",
      description: `
        Das Suffix -e kann bei Substantiven für den Plural benutzt werden.
      `,
      examples: []
    },
    {
      id: "zusammengesetzte woerter",
      title: "Zusammengesetzte Wörter",
      description: `
        Zwei oder mehr Wörter können in ein zusammengesetztes Wort kombiniert werden. Die Wortart des zusammengesetzten Wortes ist bestimmt von der Wortart des letzten Wortes im zusammengesetzten Wort.<br>In einem zusammengesetzten Wort beschreiben die Wörter, die zuerst kommen, die Wörter, die danach kommen, weiter.<br>Kommt ein Verb im Infinitiv in das zusammengesetzte Wort, fällt das -ɛ am Ende des Verbes weg, außer wenn dieses Verb das letzte Wort im zusammengesetzten Wort ist.
      `,
      examples: []
    },
    {
      id: "relativsaetze",
      title: "Relativsätze",
      description: `
        Ein Relativsatz kann gebildet werden, indem man nach einem Substantiv das Partikel 'o' und danach ein kompletter Satz geschrieben wird, welcher der Relativsatz ist.
      `,
      examples: []
    },
    {
      id: "komplementsaetze",
      title: "Komplementsätze",
      description: `
        Komplementsätze können gebildet werden, in dem man in einem Satz das Substantiv durch das Partikel 'ta' ersetzt und nach diesem Partikel einen weiteren Satz schreibt.
      `,
      examples: []
    },
    {
      id: "verbmodifikatoren",
      title: "Verbmodifikatoren",
      description: `
        Vor ein Verb kann ein anderes Verb platziert werden, welches das Verb modifiziert.<br>Nur manche Verben können als Verbmodifikatoren benutzt werden.<br>In dieser Website werden solche Verben mit (M) in der Wortart markiert.
      `,
      examples: []
    },
    {
      id: "konjunktiv",
      title: "Konjunktiv",
      description: `
        Am Anfang eines Satzes kann das Partikel 'kɔ' geschrieben werden, damit der Satz als Konjunktiv gilt.<br>Dieses Partikel wird nach dem Zeitformpartikel geschrieben, falls dieses vorhanden ist.
      `,
      examples: []
    },
    {
      id: "dativ",
      title: "Dativ",
      description: `
        Um einem Satz ein Dativobjekt hinzuzufügen, addiert man ein Substantiv am Ende eines Satzes. Dieses Substantiv ist das Dativobjekt.
      `,
      examples: []
    },
    {
      id: "partizipien",
      title: "Partizipien",
      description: `
        Wenn man das -ɛ am Ende eines Verbes durch ein passendes Suffix (-ɔ bei Partizip I, -ɔn bei Partizip II) addiert, ist es ein als Adjektiv benutzbares Partizip.
      `,
      examples: []
    },
    {
      id: "praepositionen",
      title: "Präpositionen",
      description: `
        Nach einem Substantiv, oder am Anfang eines Satzes, kann ein Paar an einer Präposition und einem Zusatzwort platziert werden. Dies gibt Information.
      `,
      examples: []
    },
    {
      id: "adverbien",
      title: "Adverbien",
      description: `
        Adverbien funktionieren gleich wie Präpositionen, aber erfordern kein Zusatzwort.
      `,
      examples: []
    },
    {
      id: "steigerungsformen",
      title: "Steigerungsformen",
      description: `
        Adjektive können im Komparativ (mit Suffix -ɪ) und Superlativ (mit Suffix -u) stehen.
      `,
      examples: []
    },
  ];  