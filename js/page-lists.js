    function generateCategoryContent(categoryId, sortBy = 'alpha') {
      const category = categories[categoryId];
      if (!category) return '<p>Kategorie nicht gefunden.</p>';
      
      const pagesInCategory = Object.entries(pages)
        .filter(([id, page]) => 
          page.categories && 
          page.categories.includes(categoryId) && 
          !page.redirectTo &&
          !page.isSpecial
        );
      
      // Sort based on sortBy parameter
      pagesInCategory.sort((a, b) => {
        if (sortBy === 'index') {
          const aIndex = a[1].index || 0;
          const bIndex = b[1].index || 0;
          if (aIndex !== bIndex) return bIndex - aIndex;
        } else if (sortBy === 'edited') {
          const aDate = a[1].edited ? new Date(a[1].edited).getTime() : 0;
          const bDate = b[1].edited ? new Date(b[1].edited).getTime() : 0;
          if (aDate !== bDate) return bDate - aDate;
        } else if (sortBy === 'created') {
          const aDate = a[1].created ? new Date(a[1].created).getTime() : 0;
          const bDate = b[1].created ? new Date(b[1].created).getTime() : 0;
          if (aDate !== bDate) return bDate - aDate;
        } else if (sortBy === 'length') {
          const aLength = a[1].content ? stripHtmlTags(a[1].content).length : 0;
          const bLength = b[1].content ? stripHtmlTags(b[1].content).length : 0;
          if (aLength !== bLength) return bLength - aLength;
        }
        // Secondary sort: alphabetical
        return a[1].title.localeCompare(b[1].title, 'de');
      });
      
      let html = `<p>${category.description}</p>`;
      
      // Add sorting buttons
      html += '<div class="flex flex-wrap gap-2 my-4">';
      const sortOptions = [
        { key: 'alpha', label: 'Alphabetisch', icon: 'M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4' },
        { key: 'edited', label: 'Nach Bearbeitung', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
        { key: 'created', label: 'Nach Erstellung', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { key: 'length', label: 'Nach Länge', icon: 'M4 8h16M4 16h16' }
      ];
      
      sortOptions.forEach(opt => {
        const isActive = sortBy === opt.key;
        const btnClass = isActive 
          ? 'bg-purple-600 border-purple-400' 
          : 'bg-slate-700/40 border-purple-500/30 hover:bg-slate-700/60';
        html += `
          <button onclick="navigateTo('category-${categoryId}-${opt.key}')" 
                  class="${btnClass} px-3 py-2 rounded-lg border transition-all flex items-center gap-2 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${opt.icon}"/>
            </svg>
            ${opt.label}
          </button>
        `;
      });
      html += '</div>';
      
      if (pagesInCategory.length === 0) {
        html += '<p><em>Noch keine Seiten in dieser Kategorie.</em></p>';
      } else {
        html += `<h2>Seiten in dieser Kategorie (${pagesInCategory.length})</h2><ul>`;
        pagesInCategory.forEach(([id, page]) => {
          html += `<li>`;
          
          // Add recent edit clock icon
          if (page.edited) {
            const clockIcon = getRecentEditClockIcon(page.edited);
            if (clockIcon) {
              html += clockIcon;
            }
          }
          
          if (page.important) {
            html += `<svg class="inline w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
          }
          html += `<a href="#" onclick="event.preventDefault(); navigateTo('${id}')">${page.title}</a>`;
          
          // Add sort-specific info
          if (sortBy === 'edited' && page.edited) {
            html += ` <span class="text-gray-500 text-xs">(${formatDate(page.edited)})</span>`;
          } else if (sortBy === 'created' && page.created) {
            html += ` <span class="text-gray-500 text-xs">(${formatDate(page.created)})</span>`;
          } else if (sortBy === 'length') {
            const length = page.content ? stripHtmlTags(page.content).length : 0;
            html += ` <span class="text-gray-500 text-xs">(${length.toLocaleString('de-DE')} Zeichen)</span>`;
          }
          
          html += `</li>`;
        });
        html += '</ul>';
      }
      
      return html;
    }

    function generateCategoriesContent() {
      let html = '<p>Eine Übersicht aller Kategorien auf der 9b-Website!</p>';
      
      // Count pages per category and sort
      const categoriesWithCount = Object.entries(categories).map(([catId, cat]) => {
        const pagesInCategory = Object.entries(pages)
          .filter(([id, page]) => 
            page.categories && 
            page.categories.includes(catId) && 
            !page.redirectTo &&
            !page.isSpecial
          ).length;
        
        return { catId, cat, pagesInCategory };
      }).sort((a, b) => {
        // Sort by page count (descending), then alphabetically
        if (a.pagesInCategory !== b.pagesInCategory) {
          return b.pagesInCategory - a.pagesInCategory;
        }
        return a.cat.name.localeCompare(b.cat.name, 'de');
      });
      
      html += '<div class="grid gap-4 mt-6">';
      categoriesWithCount.forEach(({ catId, cat, pagesInCategory }) => {
        
        html += `
          <a href="#" onclick="event.preventDefault(); navigateTo('category-${catId}')" 
             class="block p-6 bg-slate-700/40 hover:bg-slate-700/60 border border-purple-500/30 hover:border-purple-400/50 rounded-xl transition-all group">
            <div class="flex items-start gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-purple-200 group-hover:text-purple-100 mb-2 font-heading">${cat.name}</h3>
                <p class="text-gray-400 mb-3">${cat.description}</p>
                <div class="flex items-center gap-2 text-sm text-purple-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span>${pagesInCategory} ${pagesInCategory === 1 ? 'Seite' : 'Seiten'}</span>
                </div>
              </div>
              <svg class="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        `;
      });
      html += '</div>';
      
      html += `<p class="mt-6"><em>Insgesamt ${Object.keys(categories).length} Kategorien verfügbar.</em></p>`;
      
      return html;
    }

    function generateAllPagesContent(sortBy = 'alpha') {
      const sortedPages = Object.entries(pages)
        .filter(([id, page]) => 
          !page.redirectTo &&
          !page.isSpecial &&
          !id.startsWith('category-')
        );
      
      // Sort based on sortBy parameter
      sortedPages.sort((a, b) => {
        if (sortBy === 'index') {
          const aIndex = a[1].index || 0;
          const bIndex = b[1].index || 0;
          if (aIndex !== bIndex) return bIndex - aIndex;
        } else if (sortBy === 'edited') {
          const aDate = a[1].edited ? new Date(a[1].edited).getTime() : 0;
          const bDate = b[1].edited ? new Date(b[1].edited).getTime() : 0;
          if (aDate !== bDate) return bDate - aDate;
        } else if (sortBy === 'created') {
          const aDate = a[1].created ? new Date(a[1].created).getTime() : 0;
          const bDate = b[1].created ? new Date(b[1].created).getTime() : 0;
          if (aDate !== bDate) return bDate - aDate;
        } else if (sortBy === 'length') {
          const aLength = a[1].content ? stripHtmlTags(a[1].content).length : 0;
          const bLength = b[1].content ? stripHtmlTags(b[1].content).length : 0;
          if (aLength !== bLength) return bLength - aLength;
        }
        // Secondary sort: alphabetical
        return a[1].title.localeCompare(b[1].title, 'de');
      });
      
      let html = '<p>Eine Übersicht aller verfügbaren Seiten auf der 9b-Website:</p>';
      
      // Add sorting buttons
      html += '<div class="flex flex-wrap gap-2 my-4">';
      const sortOptions = [
        { key: 'alpha', label: 'Alphabetisch', icon: 'M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4' },
        { key: 'edited', label: 'Nach Bearbeitung', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
        { key: 'created', label: 'Nach Erstellung', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { key: 'length', label: 'Nach Länge', icon: 'M4 8h16M4 16h16' }
      ];
      
      sortOptions.forEach(opt => {
        const isActive = sortBy === opt.key;
        const btnClass = isActive 
          ? 'bg-purple-600 border-purple-400' 
          : 'bg-slate-700/40 border-purple-500/30 hover:bg-slate-700/60';
        html += `
          <button onclick="navigateTo('alle-seiten-${opt.key}')" 
                  class="${btnClass} px-3 py-2 rounded-lg border transition-all flex items-center gap-2 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${opt.icon}"/>
            </svg>
            ${opt.label}
          </button>
        `;
      });
      html += '</div>';
      
      // All pages
      html += '<h2>Alle Seiten</h2><ul>';
      sortedPages.forEach(([id, page]) => {
        html += `<li>`;
        
        // Add recent edit clock icon
        if (page.edited) {
          const clockIcon = getRecentEditClockIcon(page.edited);
          if (clockIcon) {
            html += clockIcon;
          }
        }
        
        if (page.important) {
          html += `<svg class="inline w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
        }
        html += `<a href="#" onclick="event.preventDefault(); navigateTo('${id}')">${page.title}</a>`;
        
        // Add sort-specific info
        if (sortBy === 'edited' && page.edited) {
          html += ` <span class="text-gray-500 text-xs">(${formatDate(page.edited)})</span>`;
        } else if (sortBy === 'created' && page.created) {
          html += ` <span class="text-gray-500 text-xs">(${formatDate(page.created)})</span>`;
        } else if (sortBy === 'length') {
          const length = page.content ? stripHtmlTags(page.content).length : 0;
          html += ` <span class="text-gray-500 text-xs">(${length.toLocaleString('de-DE')} Zeichen)</span>`;
        }
        
        html += '</li>';
      });
      html += '</ul>';
      html += `<p><em>Insgesamt ${sortedPages.length} Seiten verfügbar.</em></p>`;
      
      return html;
    }

    function generateImportantPagesContent(sortBy = 'alpha') {
      const importantPages = Object.entries(pages)
        .filter(([id, page]) => 
          page.important &&
          !page.redirectTo &&
          !page.isSpecial
        );
      
      // Sort based on sortBy parameter
      importantPages.sort((a, b) => {
        if (sortBy === 'index') {
          const aIndex = a[1].index || 0;
          const bIndex = b[1].index || 0;
          if (aIndex !== bIndex) return bIndex - aIndex;
        } else if (sortBy === 'edited') {
          const aDate = a[1].edited ? new Date(a[1].edited).getTime() : 0;
          const bDate = b[1].edited ? new Date(b[1].edited).getTime() : 0;
          if (aDate !== bDate) return bDate - aDate;
        } else if (sortBy === 'created') {
          const aDate = a[1].created ? new Date(a[1].created).getTime() : 0;
          const bDate = b[1].created ? new Date(b[1].created).getTime() : 0;
          if (aDate !== bDate) return bDate - aDate;
        } else if (sortBy === 'length') {
          const aLength = a[1].content ? stripHtmlTags(a[1].content).length : 0;
          const bLength = b[1].content ? stripHtmlTags(b[1].content).length : 0;
          if (aLength !== bLength) return bLength - aLength;
        }
        // Secondary sort: alphabetical
        return a[1].title.localeCompare(b[1].title, 'de');
      });
      
      let html = '<p>Die wichtigsten Seiten der 9b-Website!</p>';
      
      // Add sorting buttons
      html += '<div class="flex flex-wrap gap-2 my-4">';
      const sortOptions = [
        { key: 'alpha', label: 'Alphabetisch', icon: 'M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4' },
        { key: 'edited', label: 'Nach Bearbeitung', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
        { key: 'created', label: 'Nach Erstellung', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { key: 'length', label: 'Nach Länge', icon: 'M4 8h16M4 16h16' }
      ];
      
      sortOptions.forEach(opt => {
        const isActive = sortBy === opt.key;
        const btnClass = isActive 
          ? 'bg-purple-600 border-purple-400' 
          : 'bg-slate-700/40 border-purple-500/30 hover:bg-slate-700/60';
        html += `
          <button onclick="navigateTo('wichtige-seiten-${opt.key}')" 
                  class="${btnClass} px-3 py-2 rounded-lg border transition-all flex items-center gap-2 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${opt.icon}"/>
            </svg>
            ${opt.label}
          </button>
        `;
      });
      html += '</div>';
      
      if (importantPages.length === 0) {
        html += '<p><em>Noch keine wichtigen Seiten markiert.</em></p>';
      } else {
        html += '<h2>Wichtige Seiten</h2><ul>';
        importantPages.forEach(([id, page]) => {
          html += `<li>`;
          
          // Add recent edit clock icon
          if (page.edited) {
            const clockIcon = getRecentEditClockIcon(page.edited);
            if (clockIcon) {
              html += clockIcon;
            }
          }
          
          html += `<svg class="inline w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
          html += `<a href="#" onclick="event.preventDefault(); navigateTo('${id}')">${page.title}</a>`;
          
          // Add sort-specific info
          if (sortBy === 'edited' && page.edited) {
            html += ` <span class="text-gray-500 text-xs">(${formatDate(page.edited)})</span>`;
          } else if (sortBy === 'created' && page.created) {
            html += ` <span class="text-gray-500 text-xs">(${formatDate(page.created)})</span>`;
          } else if (sortBy === 'length') {
            const length = page.content ? stripHtmlTags(page.content).length : 0;
            html += ` <span class="text-gray-500 text-xs">(${length.toLocaleString('de-DE')} Zeichen)</span>`;
          }
          
          html += '</li>';
        });
        html += '</ul>';
        html += `<p><em>${importantPages.length} wichtige ${importantPages.length === 1 ? 'Seite' : 'Seiten'} markiert.</em></p>`;
      }
      
      return html;
    }