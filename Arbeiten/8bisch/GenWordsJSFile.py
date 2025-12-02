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
csv_list = read_csv_as_list("8bisch/words.csv")
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

with open("8b-Website/Data/8bisch/words.js", "w", encoding="utf-8") as g:
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