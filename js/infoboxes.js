    function toggleInfobox(infoboxId) {
      const content = document.getElementById(infoboxId);
      const icon = content.previousElementSibling.querySelector('.infobox-toggle-icon');
      
      content.classList.toggle('collapsed');
      icon.classList.toggle('collapsed');
    }

    function getIndexDescription(index) {
      if (!index) return null;
      
      if (index >= 8) {
        return { text: 'Absolut legendär!', color: 'text-red-400' };
      } else if (index >= 7) {
        return { text: 'Unglaublich 9b!', color: 'text-yellow-400' };
      } else if (index >= 5) {
        return { text: 'Definitiv 9b!', color: 'text-purple-400' };
      } else if (index >= 3) {
        return { text: 'Ziemlich 9b!', color: 'text-blue-400' };
      } else if (index >= 1) {
        return { text: 'Etwas 9b!', color: 'text-gray-400' };
      } else {
        return { text: 'Kaum 9b...', color: 'text-gray-500' };
      }
    }