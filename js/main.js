import { DLEX_COLOR_SYSTEM, DLEX_TYPOGRAPHY_SYSTEM } from './tokens.js';

// State
let currentFormat = 'hex'; // 'hex' | 'rgb' | 'hsl' | 'var'
let activeTab = 'specimen';
let currentTheme = localStorage.getItem('dlex_theme') || 'light';

// Helper: Hex to RGB
function hexToRgb(hex) {
  if (!hex || !hex.startsWith('#')) return null;
  const cleaned = hex.replace('#', '');
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

// Helper: RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Helper: Format Color String
function formatColorValue(swatch) {
  if (currentFormat === 'var') {
    return `var(${swatch.varName})`;
  }

  if (swatch.value && swatch.value.startsWith('rgba')) {
    return swatch.value;
  }

  const rgb = hexToRgb(swatch.hex);
  if (!rgb) return swatch.hex;

  if (currentFormat === 'rgb') {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  } else if (currentFormat === 'hsl') {
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }
  return swatch.hex.toUpperCase();
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// Copy to clipboard
async function copyToClipboard(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`Nusxalandi: ${label || text}`);
  } catch (err) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast(`Nusxalandi: ${label || text}`);
  }
}

// Theme Handling
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('dlex_theme', theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.setAttribute('title', theme === 'dark' ? 'Kunduzgi rejim' : 'Tungi rejim');
    themeBtn.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// Render Interactive Palette (Tab 2)
function renderInteractivePalette(searchQuery = '') {
  const container = document.getElementById('detailedPaletteContainer');
  if (!container) return;

  container.innerHTML = '';
  const query = searchQuery.toLowerCase().trim();

  DLEX_COLOR_SYSTEM.forEach(category => {
    // Filter swatches if query is present
    const filteredSwatches = category.swatches.filter(s => {
      if (!query) return true;
      const formattedVal = formatColorValue(s).toLowerCase();
      const nameMatch = category.category.toLowerCase().includes(query);
      const shadeMatch = s.shade.toLowerCase().includes(query);
      const hexMatch = (s.hex || '').toLowerCase().includes(query);
      const varMatch = s.varName.toLowerCase().includes(query);
      return nameMatch || shadeMatch || hexMatch || varMatch || formattedVal.includes(query);
    });

    if (filteredSwatches.length === 0) return;

    const card = document.createElement('div');
    card.className = 'detailed-category-card';

    const header = document.createElement('div');
    header.className = 'detailed-category-header';
    header.innerHTML = `
      <div class="category-title-wrap">
        <h3>${category.category}</h3>
        <p>${category.description}</p>
      </div>
      <button class="export-btn copy-category-btn" data-category="${category.category}" title="Ushbu toifa ranglarini JSON nusxalash">
        Toifani nusxalash
      </button>
    `;
    card.appendChild(header);

    const swatchesGrid = document.createElement('div');
    swatchesGrid.className = 'detailed-swatches-grid';

    filteredSwatches.forEach(swatch => {
      const cell = document.createElement('div');
      cell.className = 'detailed-swatch-cell';
      const displayVal = formatColorValue(swatch);
      const bgColor = swatch.value || swatch.hex;

      cell.innerHTML = `
        <div class="swatch-cell-color" style="background-color: ${bgColor};">
          <span class="swatch-cell-copy-hint">Nusxa</span>
        </div>
        <div class="swatch-cell-meta">
          <div class="swatch-cell-shade">
            <span>${category.category}</span>
            <span>${swatch.shade}</span>
          </div>
          <div class="swatch-cell-val">${displayVal}</div>
        </div>
      `;

      cell.addEventListener('click', () => {
        copyToClipboard(displayVal, `${category.category} ${swatch.shade} (${displayVal})`);
      });

      swatchesGrid.appendChild(cell);
    });

    card.appendChild(swatchesGrid);
    container.appendChild(card);
  });

  // Attach category copy events
  container.querySelectorAll('.copy-category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const catName = e.currentTarget.getAttribute('data-category');
      const catObj = DLEX_COLOR_SYSTEM.find(c => c.category === catName);
      if (catObj) {
        const tokensMap = {};
        catObj.swatches.forEach(s => {
          tokensMap[s.shade] = s.value || s.hex;
        });
        copyToClipboard(JSON.stringify({ [catName]: tokensMap }, null, 2), `${catName} toifasi`);
      }
    });
  });
}

// Render Typography Studio Cards (Tab 3)
function renderTypographyStudio(customText = '') {
  const container = document.getElementById('typoStudioCards');
  if (!container) return;

  container.innerHTML = '';
  const textToRender = customText || "Design is intelligence made visible.";

  DLEX_TYPOGRAPHY_SYSTEM.forEach(item => {
    const card = document.createElement('div');
    card.className = 'typo-card-item';

    card.innerHTML = `
      <div class="typo-card-meta">
        <span class="typo-badge">${item.token}</span>
        <div class="typo-specs-list">
          <span>O'lcham: <strong>${item.fontSize}</strong></span>
          <span>Satr balandligi: <strong>${item.lineHeight}</strong></span>
          <span>Vazn: <strong>${item.weight}</strong></span>
        </div>
        <button class="export-btn copy-typo-btn" title="CSS qoidalarini nusxalash">
          CSS nusxalash
        </button>
      </div>
      <div class="typo-card-preview" style="
        font-size: ${item.fontSize};
        line-height: ${item.lineHeight};
        font-weight: ${item.weightNum};
        letter-spacing: ${item.tracking};
        color: ${item.color || 'var(--text-main)'};
      ">
        ${item.token.startsWith('Body') ? (customText || item.sample) : textToRender}
      </div>
    `;

    card.querySelector('.copy-typo-btn').addEventListener('click', () => {
      const cssSnippet = `/* ${item.token} */\nfont-size: ${item.fontSize};\nline-height: ${item.lineHeight};\nfont-weight: ${item.weightNum};\nletter-spacing: ${item.tracking};`;
      copyToClipboard(cssSnippet, `${item.token} CSS`);
    });

    container.appendChild(card);
  });
}

// Generate Export Code
function generateExportCode(type = 'css') {
  if (type === 'css') {
    let out = `:root {\n  /* Dlex Design System Tokens */\n`;
    DLEX_COLOR_SYSTEM.forEach(cat => {
      out += `  /* ${cat.category} */\n`;
      cat.swatches.forEach(s => {
        out += `  ${s.varName}: ${s.value || s.hex};\n`;
      });
      out += `\n`;
    });
    out += `  /* Typography Scale */\n`;
    DLEX_TYPOGRAPHY_SYSTEM.forEach(t => {
      out += `  ${t.varName}: ${t.fontSize};\n`;
    });
    out += `}`;
    return out;
  } else if (type === 'tailwind') {
    const colors = {};
    DLEX_COLOR_SYSTEM.forEach(cat => {
      const slug = cat.slug;
      colors[slug] = {};
      cat.swatches.forEach(s => {
        colors[slug][s.shade] = s.value || s.hex;
      });
    });
    return `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify({ dlex: colors }, null, 6).replace(/\"/g, "'")}\n    }\n  }\n};`;
  } else if (type === 'json') {
    const data = {
      name: "Dlex Design Tokens",
      version: "1.0.0",
      colors: {},
      typography: {}
    };
    DLEX_COLOR_SYSTEM.forEach(cat => {
      data.colors[cat.category] = {};
      cat.swatches.forEach(s => {
        data.colors[cat.category][s.shade] = {
          value: s.value || s.hex,
          variable: s.varName
        };
      });
    });
    DLEX_TYPOGRAPHY_SYSTEM.forEach(t => {
      data.typography[t.token] = {
        fontSize: t.fontSize,
        lineHeight: t.lineHeight,
        weight: t.weightNum,
        sample: t.sample
      };
    });
    return JSON.stringify(data, null, 2);
  }
  return '';
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(currentTheme);

  // Theme button toggle
  const themeToggle = document.getElementById('themeToggleBtn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(currentTheme);
    });
  }

  // Format Switcher Buttons
  document.querySelectorAll('.format-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentFormat = e.currentTarget.getAttribute('data-format');
      renderInteractivePalette(document.getElementById('paletteSearchInput')?.value || '');
      showToast(`Format o'zgartirildi: ${currentFormat.toUpperCase()}`);
    });
  });

  // Tab Navigation
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-tab');
      document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      e.currentTarget.classList.add('active');
      const pane = document.getElementById(`tab-${targetTab}`);
      if (pane) pane.classList.add('active');
      activeTab = targetTab;
    });
  });

  // Specimen Swatch click handlers (Tab 1)
  document.querySelectorAll('.specimen-swatch-clickable').forEach(swatchEl => {
    swatchEl.addEventListener('click', () => {
      const colorVal = swatchEl.getAttribute('data-color');
      const name = swatchEl.getAttribute('data-name');
      copyToClipboard(colorVal, `${name} (${colorVal})`);
    });
  });

  // Search in palette
  const searchInput = document.getElementById('paletteSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderInteractivePalette(e.target.value);
    });
  }

  // Typography custom tester input
  const typoInput = document.getElementById('typoTesterInput');
  if (typoInput) {
    typoInput.addEventListener('input', (e) => {
      renderTypographyStudio(e.target.value);
    });
  }

  // Export panel tabs
  let currentExportType = 'css';
  const exportCodeBox = document.getElementById('exportCodeContainer');
  if (exportCodeBox) {
    exportCodeBox.textContent = generateExportCode(currentExportType);
  }

  document.querySelectorAll('.export-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.export-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentExportType = e.currentTarget.getAttribute('data-type');
      if (exportCodeBox) {
        exportCodeBox.textContent = generateExportCode(currentExportType);
      }
    });
  });

  // Copy full export code button
  const copyExportBtn = document.getElementById('copyExportBtn');
  if (copyExportBtn) {
    copyExportBtn.addEventListener('click', () => {
      if (exportCodeBox) {
        copyToClipboard(exportCodeBox.textContent, `${currentExportType.toUpperCase()} kodlari`);
      }
    });
  }

  // Download token file
  const downloadTokensBtn = document.getElementById('downloadTokensBtn');
  if (downloadTokensBtn) {
    downloadTokensBtn.addEventListener('click', () => {
      const content = generateExportCode(currentExportType);
      const ext = currentExportType === 'json' ? 'json' : currentExportType === 'tailwind' ? 'js' : 'css';
      const filename = `dlex-tokens.${ext}`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast(`${filename} yuklab olindi!`);
    });
  }

  // Initial renders
  renderInteractivePalette();
  renderTypographyStudio();
});
