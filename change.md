Um diese Website zu modifizieren, sind hier einige Infos, um dies zu machen.
Notiz: Dies enthält nur einfache Änderungen. Komplexere Änderungen können auch gemacht werden, aber hier sind keine Tipps dazu.

Um den Titel der Website von "Die 8b-Website" zu ändern, er ist in diesen Orten:
2x in index.html
1x in js/tools.js
1x in important/config.js

Um Farben zu ändern, muss nur style.css geändert werden.

Um Seiten hinzuzufügen, kann man eine Datei aus pages ändern.
Um eine neue Datei für Seiten in pages.js hinzuzufügen, muss diese das gleiche Format wie die bestehenden Dateien in pages.js haben. Zusätzlich muss der Name des const-Objektes anders sein als der der anderen const-Objekten in den Dateien in pages.js.
Man muss auch diesen Namen zu den anderen in pages-gen.js hinzufügen, und man muss in index.html den Link zur neuen Datei in den Block bei Zeilen 162-168 hinzufügen.

Automatisch generierte Warnungsboxen werden mit dem Code in warnings.js generiert, um sie zu ändern, ändere warnings.js.