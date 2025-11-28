class ZeitungStruktur extends HTMLElement {
    connectedCallback() {
      // Textinhalt vom Tag nehmen
      const text = this.innerHTML;
  
      // Ersetzen durch deine gewünschte Struktur
      this.outerHTML = `<br><br><b>${text}</b><br>`;
    }
  }
  
  // Custom Element registrieren
  customElements.define("z-s", ZeitungStruktur);