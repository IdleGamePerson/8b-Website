# Vn = Vokal ohne Akzent
# Kn = Konsonant ohne Akzent
# Va Ka = je mit Akzent
from rich import print
string = "KnVnKnKnKnVnVnKaVnKn"
string = string.replace("Vn", "Vn:").replace("Va", "Va:").replace(":Ka", "Ka:").replace(":KnKnKn", "Kn:KnKn") + ":"
syllables = string.split(":")
syllables.pop(len(syllables)-1)
if syllables[len(syllables)-1] == "Kn":
    syllables.pop(len(syllables)-1)
    syllables[len(syllables)-1] += "Kn"
else:
    syllables.pop(len(syllables)-1)
check = False
for i in range(len(syllables)):
    if "Va" in syllables[i]:
        syllables[i] = ":" + syllables[i]
        check = True
if not check:
    syllables[len(syllables)-2] = ":" + syllables[len(syllables)-2]
a = 0
output = ""
for syl in syllables:
    a = 1 - a
    bl = False
    if syl[0] == ":":
        output += "[blue]"
        bl = True
    if not bl:
        if a == 1:
            output += "[red]"
        else:
            output += "[green]"
    output += syl
output = output.replace(":", "")
print(output)
