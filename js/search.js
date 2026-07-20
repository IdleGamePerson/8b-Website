
    function stripHtmlTags(html) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const text = tempDiv.textContent || tempDiv.innerText || '';
      // Remove all whitespace and count only actual characters
      return text.replace(/\s+/g, '');
    }

    function normalizeSearchText(value) {
  return stripHtmlTags(String(value || ''))
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Akzente entfernen
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(value) {
  return normalizeSearchText(value)
    .split(' ')
    .filter(word => word.length >= 2);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
    }
  }

  return matrix[b.length][a.length];
}

function fuzzyWordMatch(queryWord, textWord) {
  if (!queryWord || !textWord) return 0;

  if (textWord === queryWord) return 1;
  if (textWord.startsWith(queryWord)) return 0.85;
  if (textWord.includes(queryWord)) return 0.7;

  if (queryWord.length >= 4) {
    const distance = levenshtein(queryWord, textWord);
    const maxLength = Math.max(queryWord.length, textWord.length);
    const similarity = 1 - distance / maxLength;

    if (similarity >= 0.78) return similarity * 0.65;
  }

  return 0;
}

function scoreText(query, text, weight = 1) {
  const normalizedQuery = normalizeSearchText(query);
  const normalizedText = normalizeSearchText(text);

  if (!normalizedQuery || !normalizedText) return 0;

  if (normalizedText === normalizedQuery) return 100 * weight;
  if (normalizedText.startsWith(normalizedQuery)) return 80 * weight;
  if (normalizedText.includes(normalizedQuery)) return 60 * weight;

  const queryWords = tokenize(query);
  const textWords = tokenize(text);

  if (!queryWords.length || !textWords.length) return 0;

  let score = 0;
  let matchedWords = 0;

  for (const queryWord of queryWords) {
    let bestMatch = 0;

    for (const textWord of textWords) {
      bestMatch = Math.max(bestMatch, fuzzyWordMatch(queryWord, textWord));
    }

    if (bestMatch > 0) {
      matchedWords++;
      score += bestMatch * 20;
    }
  }

  const coverage = matchedWords / queryWords.length;

  if (coverage === 0) return 0;

  return score * coverage * weight;
}

function createSnippet(content, query, maxLength = 90) {
  const plainText = stripHtmlTags(content || '').replace(/\s+/g, ' ').trim();
  const normalizedText = normalizeSearchText(plainText);
  const queryWords = tokenize(query);

  let bestIndex = -1;

  for (const word of queryWords) {
    const index = normalizedText.indexOf(word);
    if (index !== -1) {
      bestIndex = index;
      break;
    }
  }

  if (bestIndex === -1) {
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + '…'
      : plainText;
  }

  const start = Math.max(0, bestIndex - 35);
  const snippet = plainText.slice(start, start + maxLength);

  return `${start > 0 ? '…' : ''}${snippet}${start + maxLength < plainText.length ? '…' : ''}`;
}

function getPageSearchResult(id, page, query, redirectMap) {
  const title = stripHtmlTags(page.title || '');
  const content = stripHtmlTags(page.content || '');

  let score = 0;
  let reason = '';

  const titleScore = scoreText(query, title, 5);
  const contentScore = scoreText(query, content, 1);
  const categoryScore = scoreText(query, page.category || '', 2);

  score += titleScore + contentScore + categoryScore;

  if (titleScore > 0) reason = 'Titel';
  else if (contentScore > 0) reason = 'Inhalt';
  else if (categoryScore > 0) reason = 'Kategorie';

  if (page.important) score += 12;

  if (page.related) {
    for (const relatedId of page.related) {
      const relatedPage = pages[relatedId];
      if (!relatedPage) continue;

      const relatedScore = scoreText(query, relatedPage.title, 1.5);

      if (relatedScore > 0) {
        score += relatedScore;
        if (!reason) reason = 'Verwandte Seite';
      }
    }
  }

  if (page.redirectTo) {
    score += 4;
    if (!reason) reason = 'Weiterleitung';
  }

  if (score <= 0) return null;

  return {
    id,
    title: page.title,
    type: 'page',
    important: page.important,
    redirectTo: page.redirectTo || false,
    targetPage: page.redirectTo || null,
    score,
    reason,
    snippet: createSnippet(page.content || page.title || '', query),
    edited: page.edited || null,
    sortTitle: title
  };
}

function handleSearch(query) {
  const resultsContainer = document.getElementById('search-results');

  if (!query || !query.trim()) {
    resultsContainer.classList.add('hidden');
    return;
  }

  const ignoredPages = new Set([
    'hauptseite',
    'alle-seiten',
    'wichtige-seiten',
    'kategorien'
  ]);

  const redirectMap = new Map();

  Object.entries(pages).forEach(([id, page]) => {
    if (!page.redirectTo) return;

    if (!redirectMap.has(page.redirectTo)) {
      redirectMap.set(page.redirectTo, []);
    }

    redirectMap.get(page.redirectTo).push({ id, page });
  });

  const categoryResults = Object.entries(categories)
    .map(([id, cat]) => {
      const titleScore = scoreText(query, cat.name, 5);
      const descriptionScore = scoreText(query, cat.description, 1.5);
      const score = titleScore + descriptionScore + 8;

      if (score <= 8) return null;

      return {
        id: `category-${id}-alpha`,
        title: cat.name,
        type: 'category',
        important: false,
        redirectTo: false,
        score,
        reason: titleScore > 0 ? 'Kategorie' : 'Beschreibung',
        snippet: cat.description || '',
        edited: null,
        sortTitle: cat.name
      };
    })
    .filter(Boolean);

  const rawPageResults = [];

  Object.entries(pages).forEach(([id, page]) => {
    if (ignoredPages.has(id)) return;

    const result = getPageSearchResult(id, page, query, redirectMap);

    if (result) {
      rawPageResults.push(result);
    }
  });

  const bestByTarget = new Map();

  for (const result of rawPageResults) {
    const key = result.redirectTo || result.id;
    const existing = bestByTarget.get(key);

    if (!existing || result.score > existing.score) {
      bestByTarget.set(key, result);
    }
  }

  const pageResults = Array.from(bestByTarget.values());

  const allResults = [...categoryResults, ...pageResults];

  allResults.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;

    const getTypePriority = result => {
      if (result.type === 'category') return 3;
      if (result.important) return 2;
      return 1;
    };

    const priorityDiff = getTypePriority(b) - getTypePriority(a);
    if (priorityDiff !== 0) return priorityDiff;

    if (a.edited && b.edited) {
      const dateDiff = new Date(b.edited).getTime() - new Date(a.edited).getTime();
      if (dateDiff !== 0) return dateDiff;
    }

    if (a.edited && !b.edited) return -1;
    if (!a.edited && b.edited) return 1;

    return String(a.sortTitle).localeCompare(String(b.sortTitle), 'de');
  });

  const results = allResults.slice(0, 10);

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="px-4 py-3 text-gray-400">
        Keine Ergebnisse gefunden
      </div>
    `;
  } else {
    resultsContainer.innerHTML = results.map(result => {
      const displayTitle = result.redirectTo
        ? `${escapeHtml(result.title)} <span class="text-xs text-purple-400">→</span>`
        : escapeHtml(result.title);

      const clockIcon = result.edited
        ? getRecentEditClockIcon(result.edited, 'medium')
        : '';

      return `
        <button
          onclick="navigateTo('${escapeHtml(result.id)}')"
          class="w-full px-4 py-3 text-left hover:bg-purple-600/30 transition-colors border-b border-purple-500/10 last:border-b-0"
        >
          <div class="font-medium text-purple-200 flex items-center gap-1">
            ${clockIcon}

            ${result.important ? `
              <svg class="inline w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            ` : ''}

            ${result.type === 'category' ? `
              <svg class="inline w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
            ` : ''}

            ${result.redirectTo ? `
              <svg class="inline w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            ` : ''}

            <span>${displayTitle}</span>
          </div>
        </button>
      `;
    }).join('');
  }

  resultsContainer.classList.remove('hidden');
}

    function showSearchResults() {
      const query = document.getElementById('search-input').value;
      if (query.trim()) {
        handleSearch(query);
      }
    }

    