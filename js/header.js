    function navigateTo(pageId) {
      if (pageId === currentPage) return;
      
      // Add to history
      if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
      }
      history.push(pageId);
      historyIndex = history.length - 1;
      
      currentPage = pageId;
      renderPage(pageId);
      
      // Scroll to top of content area
      const mainContent = document.querySelector('main > div:first-child');
      if (mainContent) {
        mainContent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      
      // Close search results
      document.getElementById('search-results').classList.add('hidden');
      document.getElementById('search-input').value = '';
    }

    function goBack() {
      if (historyIndex > 0) {
        historyIndex--;
        currentPage = history[historyIndex];
        renderPage(currentPage);
      }
    }

    function goForward() {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        currentPage = history[historyIndex];
        renderPage(currentPage);
      }
    }

    function openRandomPage() {
      const pageEntries = Object.entries(pages).filter(([id, page]) => 
        !page.redirectTo && 
        id !== 'hauptseite' &&
        id !== 'alle-seiten' &&
        id !== 'wichtige-seiten' &&
        id !== 'kategorien' &&
        !id.startsWith('category-') &&
        id !== currentPage
      );
      
      if (pageEntries.length === 0) return;
      
      // Calculate total weight
      const totalWeight = pageEntries.reduce((sum, [, page]) => sum + (page.weight || 1), 0);
      
      // Random selection based on weight
      let random = Math.random() * totalWeight;
      let selectedId = pageEntries[0][0];
      
      for (const [id, page] of pageEntries) {
        random -= (page.weight || 1);
        if (random <= 0) {
          selectedId = id;
          break;
        }
      }
      
      navigateTo(selectedId);
    }

    function toggleMenu() {
      menuOpen = !menuOpen;
      const dropdown = document.getElementById('menu-dropdown');
      const arrow = document.getElementById('menu-arrow');
      
      if (menuOpen) {
        dropdown.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
      } else {
        dropdown.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
      }
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      const menuBtn = e.target.closest('button[onclick="toggleMenu()"]');
      const menuDropdown = document.getElementById('menu-dropdown');
      
      if (!menuBtn && !menuDropdown.contains(e.target) && menuOpen) {
        toggleMenu();
      }

      const searchContainer = e.target.closest('.relative');
      const searchResults = document.getElementById('search-results');
      if (!searchContainer && !searchResults.classList.contains('hidden')) {
        searchResults.classList.add('hidden');
      }
    });

    function initDropdownPages() {
      const container = document.getElementById('dropdown-pages');
      container.innerHTML = dropdownPages.map(fav => {
        return `
          <button onclick="navigateTo('${fav.pageId}'); toggleMenu();" class="w-full px-4 py-3 text-left hover:bg-purple-600/30 transition-colors flex items-center gap-3">
            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${fav.icon}
            </svg>
            <span>${fav.title}</span>
          </button>
        `;
      }).join('');
    }
