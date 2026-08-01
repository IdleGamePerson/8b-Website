    function getRecentEditClockIcon(editedDate, size = 'medium') {
      const lastEdited = new Date(editedDate);
      const now = new Date();
      const daysDiff = Math.floor((now - lastEdited) / (1000 * 60 * 60 * 24));
      
      // Only show for edits within last 30 days
      if (daysDiff > 30) {
        return '';
      }
      
      let color = '';
      if (daysDiff <= 1) {
        color = 'text-blue-500'; // 0-1 days: Blue
      } else if (daysDiff <= 3) {
        color = 'text-green-500'; // 2-3 days: Green
      } else if (daysDiff <= 7) {
        color = 'text-yellow-500'; // 4-7 days: Yellow
      } else if (daysDiff <= 15) {
        color = 'text-orange-500'; // 8-15 days: Orange
      } else {
        color = 'text-red-500'; // 16-30 days: Red
      }
      
      // Size variants with stroke widths
      let sizeClass = 'w-5 h-5'; // default medium
      let strokeWidth = '1.5';
      if (size === 'small') {
        sizeClass = 'w-4 h-4';
        strokeWidth = '1.5';
      } else if (size === 'large') {
        sizeClass = 'w-10 h-10';
        strokeWidth = '2.2';
      }
      
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" class="inline ${sizeClass} ${color} mr-1" style="vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;
    }

    function updatePageCount() {
      const count = Object.entries(pages).filter(([id, page]) => 
        !page.isSpecial && 
        !page.redirectTo
      ).length;
      document.getElementById('page-count').textContent = `${count} Seiten`;
    }

    function updatePageTitle(pageTitle) {
      document.title = `${pageTitle} – Die 9b-Website`;
    }

    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('de-DE', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
      });
    }