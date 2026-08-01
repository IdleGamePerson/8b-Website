    function renderPage(pageId) {
      // Check if it's a redirect page
      const page = pages[pageId];
      if (page && page.redirectTo) {
        // Automatically redirect to the target page
        navigateTo(page.redirectTo);
        return;
      }
      
      // Check if it's a sorted "alle-seiten" page
      if (pageId.startsWith('alle-seiten-')) {
        const sortBy = pageId.substring(12); // Remove "alle-seiten-"
        document.getElementById('page-title').textContent = 'Alle Seiten';
        updatePageTitle('Alle Seiten');
        document.getElementById('page-text').innerHTML = generateAllPagesContent(sortBy);
        updateSidebar(null, true);
        document.getElementById('btn-back').disabled = historyIndex <= 0;
        document.getElementById('btn-forward').disabled = historyIndex >= history.length - 1;
        return;
      }
      
      // Check if it's a sorted "wichtige-seiten" page
      if (pageId.startsWith('wichtige-seiten-')) {
        const sortBy = pageId.substring(16); // Remove "wichtige-seiten-"
        document.getElementById('page-title').textContent = 'Wichtige Seiten';
        updatePageTitle('Wichtige Seiten');
        document.getElementById('page-text').innerHTML = generateImportantPagesContent(sortBy);
        updateSidebar(null, true);
        document.getElementById('btn-back').disabled = historyIndex <= 0;
        document.getElementById('btn-forward').disabled = historyIndex >= history.length - 1;
        return;
      }
      
      // Check if it's a category page with sorting
      if (pageId.startsWith('category-')) {
        const parts = pageId.split('-');
        let categoryId, sortBy;
        
        // Check if there's a sort parameter
        if (parts.length >= 3 && ['alpha', 'edited', 'created', 'length'].includes(parts[parts.length - 1])) {
          sortBy = parts.pop();
          categoryId = parts.slice(1).join('-');
        } else {
          categoryId = pageId.substring(9);
          sortBy = 'alpha';
        }
        
        const category = categories[categoryId];
        
        if (!category) {
          document.getElementById('page-title').textContent = 'Kategorie nicht gefunden';
          document.getElementById('page-text').innerHTML = '<p>Diese Kategorie existiert nicht.</p>';
          updateSidebar(null, true);
          return;
        }
        
        document.getElementById('page-title').innerHTML = `<span class="inline-flex items-center gap-2"><svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>${category.name}</span>`;
        document.getElementById('page-text').innerHTML = generateCategoryContent(categoryId, sortBy);
        
        // Update navigation buttons
        document.getElementById('btn-back').disabled = historyIndex <= 0;
        document.getElementById('btn-forward').disabled = historyIndex >= history.length - 1;
        
        updateSidebar(null, true);
        return;
      }
      
      if (!page) {
        document.getElementById('page-title').textContent = 'Seite nicht gefunden';
        updatePageTitle('Seite nicht gefunden');
        document.getElementById('page-text').innerHTML = '<p>Diese Seite existiert leider nicht. 😢</p>';
        updateSidebar(null, false);
        return;
      }

      // Set page title with important icon and/or clock icon if needed
      let titleHtml = '';
      
      // Add recent edit clock icon if applicable
      if (page.edited) {
        const clockIcon = getRecentEditClockIcon(page.edited, 'large');
        if (clockIcon) {
          titleHtml += clockIcon;
        }
      }
      
      // Add important icon if needed
      if (page.important) {
        titleHtml += `<svg class="w-8 h-8 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
      }
      
      // Set the final title
      if (titleHtml) {
        document.getElementById('page-title').innerHTML = `<span class="inline-flex items-center gap-3">${titleHtml}${page.title}</span>`;
      } else {
        document.getElementById('page-title').textContent = page.title;
      }
      
      updatePageTitle(page.title);
      
      if (pageId === 'hauptseite') {
        document.getElementById('page-title').textContent = 'Hauptseite';
        updatePageTitle('Hauptseite');
        document.getElementById('page-text').innerHTML = page.content;
        updateSidebar(page, false);
      } else if (pageId === 'alle-seiten') {
        document.getElementById('page-title').textContent = 'Alle Seiten';
        updatePageTitle('Alle Seiten');
        document.getElementById('page-text').innerHTML = generateAllPagesContent('alpha');
        updateSidebar(null, true);
      } else if (pageId === 'wichtige-seiten') {
        document.getElementById('page-title').textContent = 'Wichtige Seiten';
        updatePageTitle('Wichtige Seiten');
        document.getElementById('page-text').innerHTML = generateImportantPagesContent('alpha');
        updateSidebar(null, true);
      } else if (pageId === 'kategorien') {
        document.getElementById('page-title').textContent = 'Kategorien';
        updatePageTitle('Kategorien');
        document.getElementById('page-text').innerHTML = generateCategoriesContent();
        updateSidebar(null, true);
      } else {
        let html = '';
        
        // Add warnings at the top
        const warningsHtml = generateWarnings(page, pageId);
        if (warningsHtml) {
          html += warningsHtml;
        }
        
        // Add 9b-Index if present
        if (page.index || page.indexStats || page.indexProsCons) {
          let indexHtml = `<div class="infobox">`;
          
          // Header with toggle
          let headerText = '9b-INDEX';
          if (page.indexStats && page.indexStats.length > 0) headerText += ' & STATISTIKEN';
          if (page.indexProsCons) headerText += ' & PRO/KONTRA';
          const infoboxId = `infobox-${Math.random().toString(36).substr(2, 9)}`;
          indexHtml += `<div class="infobox-header" onclick="toggleInfobox('${infoboxId}')">
            <span>${headerText}</span>
            <svg class="infobox-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>`;
          
          indexHtml += `<div class="infobox-content" id="${infoboxId}">`;
          
          // Index section
          if (page.index) {
            const indexDesc = getIndexDescription(page.index);
            if (indexDesc) {
              indexHtml += `
                <div class="text-center mb-3 pb-3 border-b border-purple-500/20">
                  <div class="text-5xl font-bold text-purple-200 mb-2">${page.index}</div>
                  <div class="text-xs font-heading font-semibold text-purple-200">${indexDesc.text}</div>
                </div>
              `;
            }
          }
          
          // Stats section
          if (page.indexStats && page.indexStats.length > 0) {
            page.indexStats.forEach(stat => {
              indexHtml += `
                <div class="infobox-row">
                  <span class="infobox-label">${stat.label}:</span>
                  <span class="infobox-value">${stat.value}</span>
                </div>
              `;
            });
          }
          
          // Pro/Cons section
          if (page.indexProsCons) {
            if ((page.indexStats && page.indexStats.length > 0) || page.index) {
              indexHtml += `<div class="border-t border-purple-500/20 my-3"></div>`;
            }
            
            // Pros
            if (page.indexProsCons.pros && page.indexProsCons.pros.length > 0) {
              indexHtml += `<div class="mb-3">`;
              indexHtml += `<div class="text-xs font-semibold text-green-400 mb-2">✓ PRO</div>`;
              page.indexProsCons.pros.forEach(pro => {
                let strengthIcon = '';
                let strengthColor = '';
                if (pro.strength === 'strong') {
                  strengthIcon = '★★★';
                  strengthColor = 'text-green-300';
                } else if (pro.strength === 'normal') {
                  strengthIcon = '★★☆';
                  strengthColor = 'text-green-400';
                } else {
                  strengthIcon = '★☆☆';
                  strengthColor = 'text-green-500';
                }
                indexHtml += `
                  <div class="flex items-start gap-2 mb-1.5 text-xs">
                    <span class="${strengthColor} flex-shrink-0">${strengthIcon}</span>
                    <span class="text-gray-300">${pro.text}</span>
                  </div>
                `;
              });
              indexHtml += `</div>`;
            }
            
            // Cons
            if (page.indexProsCons.cons && page.indexProsCons.cons.length > 0) {
              indexHtml += `<div>`;
              indexHtml += `<div class="text-xs font-semibold text-red-400 mb-2">✗ KONTRA</div>`;
              page.indexProsCons.cons.forEach(con => {
                let strengthIcon = '';
                let strengthColor = '';
                if (con.strength === 'strong') {
                  strengthIcon = '★★★';
                  strengthColor = 'text-red-300';
                } else if (con.strength === 'normal') {
                  strengthIcon = '★★☆';
                  strengthColor = 'text-red-400';
                } else {
                  strengthIcon = '★☆☆';
                  strengthColor = 'text-red-500';
                }
                indexHtml += `
                  <div class="flex items-start gap-2 mb-1.5 text-xs">
                    <span class="${strengthColor} flex-shrink-0">${strengthIcon}</span>
                    <span class="text-gray-300">${con.text}</span>
                  </div>
                `;
              });
              indexHtml += `</div>`;
            }
          }
          
          indexHtml += `</div></div>`;
          
          html += indexHtml;
        }
        
        // Add page content
        html += page.content;
        
        document.getElementById('page-text').innerHTML = html;
        updateSidebar(page, false);
      }

      // Update navigation buttons
      document.getElementById('btn-back').disabled = historyIndex <= 0;
      document.getElementById('btn-forward').disabled = historyIndex >= history.length - 1;
    }