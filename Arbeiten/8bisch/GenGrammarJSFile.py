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
csv_list = read_csv_as_list("Arbeiten/Daten/8bischGrammar.csv")
csv_list.pop(0)

def format(string):
    return string.lower().replace(" ", "_")

ob = "{"
cb = "}"

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