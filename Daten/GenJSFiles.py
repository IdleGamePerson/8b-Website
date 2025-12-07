import csv

def read_csv_as_list(path):
    rows = []
    with open(path, "r", newline="", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            # row ist bereits eine Liste von Strings ohne äußere Anführungszeichen
            rows.append(row)
    return rows

# Beispiel:
csv_list = read_csv_as_list("Daten/8bischWords.csv")
csv_list.pop(0)

def word_to_id(word):
    a = word
    a = a.replace("ṕ", "p")
    a = a.replace("t́", "t")
    a = a.replace("ḱ", "k")
    a = a.replace("ɡ́", "ɡ")
    a = a.replace("d́", "d")
    a = a.replace("b́", "b")

    a = a.replace("f́", "f")
    a = a.replace("v́", "v")
    a = a.replace("ń", "n")
    a = a.replace("ḿ", "m")
    a = a.replace("ź", "z")
    a = a.replace("ś", "s")

    a = a.replace("ʃ́", "ʃ")
    a = a.replace("ĺ", "l")
    a = a.replace("j́", "j")
    a = a.replace("h́", "h")
    
    return a

def helper(defs):
    return defs.split("; ")

ob = "{"
cb = "}"

with open("Data/8bisch/words.js", "w", encoding="utf-8") as g:
    def Write(str):
        g.write(str + "\n")
    Write("const WORDS = [")
    for row in csv_list:
        Write(f'  {ob} id: "{word_to_id(row[0])}", word: "{row[0]}", pos: "{row[1]}",')
        Write(f'    de: {str(helper(row[2]))},')
        Write(f'    origin: "{row[3]}",')
        Write(f'    example: {ob}')
        Write(f'      conlang: "{row[4]}",')
        Write(f'      de: "{row[5]}",')
        Write(f'    {cb}, formsTable: {ob} columns: ["", "Wort"], rows: [')
        for form in helper(row[6]):
            l = form.rsplit(" ", 1)
            Write(f'      {ob} label: "{l[0]}", cells: ["{l[1]}"] {cb},')
        Write(f'  ]{cb}{cb},')
    Write("];")

# Beispiel:
csv_list = read_csv_as_list("Daten/8bischGrammar.csv")
csv_list.pop(0)

def format(string):
    return string.lower().replace(" ", "_")

with open("Data/8bisch/grammar.js", "w", encoding="utf-8") as g:
    def Write(str):
        g.write(str + "\n")
    Write(f'const GRAMMAR = [')
    for row in csv_list:
        Write(f'    {ob}')
        Write(f'      id: "{format(row[0])}",')
        Write(f'      title: "{row[0]}",')
        Write(f'      description: `')
        Write(f'        {row[1]}')
        Write(f'      `,')
        Write(f'      examples: []')
        Write(f'    {cb},')
    Write(f'  ];')

csv_list = read_csv_as_list("Daten/8bArticles.csv")
csv_list.pop(0)

with open("Data/Website/articleData.js", "w", encoding="utf-8") as g:
    def Write(str):
        g.write(str + "\n")
    Write(f'const articles = [')
    for row in csv_list:
        Write(f'    {ob}')
        Write(f'      title: "{row[0]}",')
        Write(f'      category: "{row[1]}",')
        Write(f'      vector: [{row[2]}, {row[3]}, {row[4]}],')
        Write(f'      description: "{row[6]}",')
        Write(f'      link: "{row[5]}"')
        Write(f'    {cb},')
    Write(f'  ];')

csv_list = read_csv_as_list("Daten/8bNewspapers.csv")
csv_list.pop(0)

with open("Data/Website/newspaperData.js", "w", encoding="utf-8") as g:
    def Write(str):
        g.write(str + "\n")
    Write(f'const newspapers = [')
    for row in csv_list:
        Write(f'    {ob}')
        Write(f'      date: [{row[0]}, {row[1]}, {row[2]}],')
        Write(f'      content: "{row[3]}"')
        Write(f'    {cb},')
    Write(f'  ];')