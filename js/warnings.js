    function generateWarnings(page, pageId) {
      if (!page || page.redirectTo || pageId === 'hauptseite' || pageId === 'alle-seiten' || pageId === 'wichtige-seiten' || pageId === 'kategorien' || pageId.startsWith('category-')) {
        return '';
      }
      
      const warnings = [];
      
      // Auto-generated warnings
      
      // 1. Check content length (excluding HTML tags and whitespace)
      const charCount = stripHtmlTags(page.content || '').length;
      
      if (charCount >= 50000) {
        warnings.push({
          type: 'error',
          text: `Diese Seite ist extrem lang (${charCount.toLocaleString('de-DE')} Zeichen) und könnte lange Ladezeiten verursachen. Erwägen Sie, den Inhalt auf mehrere Seiten aufzuteilen.`
        });
      } else if (charCount >= 25000) {
        warnings.push({
          type: 'warning',
          text: `Diese Seite ist sehr umfangreich (${charCount.toLocaleString('de-DE')} Zeichen). Das Laden könnte etwas länger dauern.`
        });
      } else if (charCount >= 10000) {
        warnings.push({
          type: 'warning',
          text: `Diese Seite enthält viel Inhalt (${charCount.toLocaleString('de-DE')} Zeichen). Verwenden Sie das Inhaltsverzeichnis zur Navigation.`
        });
      } else if (charCount >= 5000) {
        warnings.push({
          type: 'info',
          text: `Diese Seite ist umfangreich (${charCount.toLocaleString('de-DE')} Zeichen). Scrollen Sie nach unten für mehr Inhalt.`
        });
      } else if (charCount >= 2000) {
        warnings.push({
          type: 'info',
          text: `Diese Seite enthält ${charCount.toLocaleString('de-DE')} Zeichen Inhalt.`
        });
      }
      
      // 2. Check structure (250+ chars without HTML tag)
      const htmlContent = page.content || '';
      const segments = htmlContent.split(/<[^>]+>/);
      let hasLongSegment = false;
      for (const segment of segments) {
        const segmentText = segment.trim();
        if (segmentText.length >= 250) {
          hasLongSegment = true;
          break;
        }
      }
      
      if (hasLongSegment) {
        warnings.push({
          type: 'warning',
          text: 'Diese Seite ist nicht gut strukturiert. Längere Textabschnitte sollten mit Überschriften oder Absätzen unterteilt werden.'
        });
      }
      
      // 3. Check last edited date
      if (page.edited) {
        const lastEdited = new Date(page.edited);
        const now = new Date();
        const daysDiff = Math.floor((now - lastEdited) / (1000 * 60 * 60 * 24));
        
        /*if (daysDiff > 60) {
          warnings.push({
            type: 'warning',
            text: `Diese Seite wurde zuletzt vor ${daysDiff} Tagen bearbeitet und könnte veraltete Informationen enthalten.`
          });
        }*/
      }
      
      // Custom page warnings
      if (page.warnings && Array.isArray(page.warnings)) {
        warnings.push(...page.warnings);
      }
      
      // Generate HTML
      if (warnings.length === 0) {
        return '';
      }
      
      let html = '';
      for (const warning of warnings) {
        const typeClass = `warning-box-${warning.type || 'info'}`;
        let icon = '';
        
        if (warning.type === 'error') {
          icon = '<svg class="warning-box-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
        } else if (warning.type === 'warning') {
          icon = '<svg class="warning-box-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';
        } else {
          icon = '<svg class="warning-box-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
        }
        
        html += `<div class="warning-box ${typeClass}">${icon}<div>${warning.text}</div></div>`;
      }
      
      return html;
    }
