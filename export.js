const fs = require('fs');
const vm = require('vm');

const INPUT_FOLDER = './pages';
const OUTPUT_FILE = './pages.txt';


// =========================
// 1. pages.js laden
// =========================
function loadPages(folderPath) {
    const files = fs.readdirSync(folderPath)
        .filter(file => file.endsWith('.js'));

    const allPages = {};

    for (const file of files) {
        const fullPath = `${folderPath}/${file}`;

        let raw = fs.readFileSync(fullPath, 'utf8');

        // Kommentare entfernen
        raw = raw
            .replace(/\/\/.*$/gm, '')
            .replace(/\/\*[\s\S]*?\*\//g, '');

        // Erstes const/let/var durch exportObject ersetzen
        raw = raw.replace(
            /\b(const|let|var)\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=/,
            'exportObject ='
        );

        const context = {
            exportObject: undefined
        };

        vm.createContext(context);

        try {
            vm.runInContext(raw, context, {
                timeout: 1000
            });
        } catch (err) {
            console.error(`Fehler in ${file}:`, err);
            continue;
        }

        if (
            !context.exportObject ||
            typeof context.exportObject !== 'object'
        ) {
            console.warn(
                `${file}: Kein gültiges Objekt gefunden.`
            );
            continue;
        }

        Object.assign(allPages, context.exportObject);
    }

    return allPages;
}


// =========================
// 2. Hilfsfunktionen
// =========================
function formatDate(dateStr) {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}.${m}.${y}`;
}

function formatStrength(strength) {
    return strength ? ` (${strength})` : '';
}


// =========================
// 3. Konvertierung
// =========================
function convertToText(pages) {
    let output = '';
    let count = 0;

    for (const key in pages) {
        const page = pages[key];

        // 🔴 NEU: Redirects UND Spezialseiten ignorieren
        if (page.redirectTo || page.isSpecial === true) {
            continue;
        }

        count++;

        output += `=== ${page.title || 'Ohne Titel'} ===\n\n`;

        if (page.index !== undefined) {
            output += `pH-Wert: ${page.index}\n\n`;
        }

        if (page.indexStats?.length) {
            output += `Statistiken:\n`;
            page.indexStats.forEach(stat => {
                output += `- ${stat.label}: ${stat.value}\n`;
            });
            output += `\n`;
        }

        if (page.indexProsCons) {
            const { pros, cons } = page.indexProsCons;

            if (pros?.length) {
                output += `Vorteile:\n`;
                pros.forEach(p => {
                    output += `+ ${p.text}${formatStrength(p.strength)}\n`;
                });
                output += `\n`;
            }

            if (cons?.length) {
                output += `Nachteile:\n`;
                cons.forEach(c => {
                    output += `- ${c.text}${formatStrength(c.strength)}\n`;
                });
                output += `\n`;
            }
        }

        if (page.content) {
            output += `Inhalt:\n${page.content}\n\n`;
        }

        if (page.categories?.length) {
            output += `Kategorien: ${page.categories.join(', ')}\n\n`;
        }

        if (page.created) {
            output += `Erstellt: ${formatDate(page.created)}\n`;
        }
        if (page.edited) {
            output += `Bearbeitet: ${formatDate(page.edited)}\n`;
        }
        output += `\n`;

        if (page.related?.length) {
            output += `Verwandte Seiten: ${page.related.join(', ')}\n\n`;
        }

        const important = page.important === true ? 'Ja' : 'Nein';
        output += `Wichtig: ${important}\n\n`;

        if (page.warnings?.length) {
            output += `Hinweise:\n`;
            page.warnings.forEach(w => {
                output += `! [${w.type}] ${w.text}\n`;
            });
            output += `\n`;
        }

        output += `------------------------------\n\n`;
    }

    return { output, count };
}


// =========================
// 4. Ausführung
// =========================
function main() {
    const pages = loadPages(INPUT_FOLDER);
    const { output, count } = convertToText(pages);

    fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');

    console.log(`Fertig. ${count} Seiten exportiert (Redirects & Spezialseiten ignoriert).`);
}

main();