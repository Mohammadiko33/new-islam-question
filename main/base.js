// Theme toggle script: injects a floating button and toggles [data-theme="dark"] on <html>
(function () {
  const storageKey = 'site-theme';

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }

  function storeTheme(value) {
    try {
      localStorage.setItem(storageKey, value);
    } catch (e) {
      // ignore
    }
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    // update button icon if present
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.dataset.theme = theme;
      btn.querySelector('.icon').textContent = theme === 'dark' ? '🌙' : '☀️';
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  function init() {
    const stored = getStoredTheme();
    const initial = stored ? stored : (systemPrefersDark() ? 'dark' : 'light');
    applyTheme(initial);

    // create floating toggle button
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'تغییر تم (روشن/تاریک)');
    btn.innerHTML = `<span class="icon">${initial === 'dark' ? '🌙' : '☀️'}</span><span class="label">تغییر تم</span>`;
    btn.dataset.theme = initial;
    btn.setAttribute('aria-pressed', initial === 'dark' ? 'true' : 'false');

    function toggleThemeFromUI() {
      const now = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'dark' : 'light';
      const next = now === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    }

    btn.addEventListener('click', toggleThemeFromUI);

    // allow keyboard shortcut: Shift+T to toggle
    window.addEventListener('keydown', function (e) {
      if ((e.key === 'T' || e.key === 't') && (e.shiftKey)) {
        e.preventDefault();
        btn.click();
      }
    });

    // insert floating button after DOM ready (handle case where DOMContentLoaded already fired)
    function appendButtons() {
      if (!document.body) return;
      // avoid double-insert
      if (!document.getElementById('theme-toggle')) document.body.appendChild(btn);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', appendButtons);
    } else {
      // DOM already ready
      appendButtons();
    }
  }

  // Run immediately in case DOM already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
