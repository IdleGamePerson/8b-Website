    // ==================== ZUSTAND ====================
    let currentPage = 'hauptseite';
    let history = ['hauptseite'];
    let historyIndex = 0;
    let menuOpen = false;
    
    // Sidebar collapse state
    const sidebarState = {
      statistics: false,
      categories: false,
      toc: false,
      related: false
    };

    // ==================== CONFIG ====================
    const defaultConfig = {
      site_title: 'Die 8b-Website'
    };

    let config = { ...defaultConfig };

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange: async (newConfig) => {
          config = { ...defaultConfig, ...newConfig };
          document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
        },
        mapToCapabilities: (cfg) => ({
          recolorables: [],
          borderables: [],
          fontEditable: undefined,
          fontSizeable: undefined
        }),
        mapToEditPanelValues: (cfg) => new Map([
          ['site_title', cfg.site_title || defaultConfig.site_title]
        ])
      });
    }