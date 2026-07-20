
    function scrollToHeading(headingText) {
      const pageText = document.getElementById('page-text');
      const headings = pageText.querySelectorAll('h2, h3');
      
      for (const heading of headings) {
        if (heading.textContent.trim() === headingText) {
          const mainContent = document.querySelector('main > div:first-child');
          const headerOffset = 20;
          const elementPosition = heading.getBoundingClientRect().top;
          const offsetPosition = elementPosition + mainContent.scrollTop - headerOffset;
          
          mainContent.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          break;
        }
      }
    }

    function updateSidebar(page, isSpecialPage) {
      // Update statistics
      if (!isSpecialPage && page) {
        const charCount = stripHtmlTags(page.content || '').length;
        
        document.getElementById('stat-chars').textContent = charCount.toLocaleString('de-DE');
        document.getElementById('stat-created').textContent = page.created ? formatDate(page.created) : '-';
        document.getElementById('stat-edited').textContent = page.edited ? formatDate(page.edited) : '-';
      } else {
        document.getElementById('stat-chars').textContent = '-';
        document.getElementById('stat-created').textContent = '-';
        document.getElementById('stat-edited').textContent = '-';
      }
      
      // Update categories
      const categoriesSection = document.getElementById('sidebar-categories');
      const categoriesList = document.getElementById('sidebar-categories-list');
      if (!isSpecialPage && page && page.categories && page.categories.length > 0) {
        categoriesList.innerHTML = page.categories.map(catId => {
          const cat = categories[catId];
          if (!cat) return '';
          return `
            <a href="#" onclick="event.preventDefault(); navigateTo('category-${catId}')" 
               class="flex items-center gap-2 px-3 py-2 bg-purple-900/30 hover:bg-purple-800/40 rounded-lg border border-purple-500/20 transition-all">
              <span class="text-purple-200">${cat.name}</span>
            </a>
          `;
        }).join('');
        categoriesSection.classList.remove('hidden');
      } else {
        categoriesSection.classList.add('hidden');
      }
      
      // Update table of contents
      const tocSection = document.getElementById('sidebar-toc');
      const tocList = document.getElementById('sidebar-toc-list');
      if (!isSpecialPage && page) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = page.content;
        const headings = tempDiv.querySelectorAll('h2, h3');
        
        if (headings.length > 0) {
          let tocHtml = '';
          let h2Count = 0;
          let h3Count = 0;
          
          headings.forEach(heading => {
            const text = heading.textContent.trim();
            if (heading.tagName === 'H2') {
              h2Count++;
              h3Count = 0;
              tocHtml += `
                <div onclick="scrollToHeading('${text.replace(/'/g, "\\'")}')" class="text-purple-200 hover:text-purple-100 py-1 cursor-pointer transition-colors">
                  ${h2Count}. ${text}
                </div>
              `;
            } else if (heading.tagName === 'H3') {
              h3Count++;
              tocHtml += `
                <div onclick="scrollToHeading('${text.replace(/'/g, "\\'")}')" class="text-purple-300 hover:text-purple-200 py-1 pl-4 cursor-pointer transition-colors text-xs">
                  ${h2Count}.${h3Count}. ${text}
                </div>
              `;
            }
          });
          
          tocList.innerHTML = tocHtml;
          tocSection.classList.remove('hidden');
        } else {
          tocSection.classList.add('hidden');
        }
      } else {
        tocSection.classList.add('hidden');
      }
      
      // Update related pages
      const relatedSection = document.getElementById('sidebar-related');
      const relatedList = document.getElementById('sidebar-related-list');
      if (!isSpecialPage && page && page.related && page.related.length > 0) {
        relatedList.innerHTML = page.related.map(relatedId => {
          const relatedPage = pages[relatedId];
          if (!relatedPage) return '';
          return `
            <a href="#" onclick="event.preventDefault(); navigateTo('${relatedId}')" 
               class="flex items-center gap-2 px-3 py-2 bg-purple-900/30 hover:bg-purple-800/40 rounded-lg border border-purple-500/20 transition-all group">
              <svg class="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
              <span class="text-purple-200 group-hover:text-purple-100 transition-colors">${relatedPage.title}</span>
            </a>
          `;
        }).join('');
        relatedSection.classList.remove('hidden');
      } else {
        relatedSection.classList.add('hidden');
      }
    }
    
    function toggleSidebarSection(section) {
      sidebarState[section] = !sidebarState[section];
      const content = document.getElementById(`${section}-content`);
      const arrow = document.getElementById(`${section}-arrow`);
      
      if (sidebarState[section]) {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(-90deg)';
      }
    }
