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
csv_list = read_csv_as_list("Arbeiten/Daten/8bArticles.csv")
csv_list.pop(0)

ob = "{"
cb = "}"

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