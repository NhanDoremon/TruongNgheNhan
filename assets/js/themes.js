(() => {
  const names = [
    ['original', 'Navy'],
    ['light', 'Light']
  ];

  // 1. Ensure only ONE theme-picker exists in the DOM
  let pickers = document.querySelectorAll('.theme-picker');
  let picker = pickers[0];

  if (!picker) {
    picker = document.createElement('div');
    picker.className = 'theme-picker';
    picker.setAttribute('role', 'group');
    picker.setAttribute('aria-label', 'Choose color theme');
    picker.innerHTML = '<strong>THEME</strong>' + names.map(([id, name]) => 
      `<button class="theme-choice" data-theme="${id}" aria-pressed="false"><span class="theme-dot ${id}"></span>${name}</button>`
    ).join('');
    document.body.append(picker);
  } else {
    // If duplicates were saved in the HTML export, remove the extra ones
    for (let i = 1; i < pickers.length; i++) {
      pickers[i].remove();
    }
  }

  // 2. Read stored preference (URL param takes precedence for quick checking)
  let selected = 'original';
  try {
    const urlTheme = new URLSearchParams(location.search).get('theme');
    if (urlTheme && (urlTheme === 'light' || urlTheme === 'original')) {
      selected = urlTheme;
    } else {
      selected = localStorage.getItem('portfolio-theme') || 'original';
    }
  } catch (e) {}

  // 3. Theme application logic
  function choose(id) {
    if (!names.some(n => n[0] === id)) id = 'original';
    
    document.body.classList.remove('theme-light', 'theme-graphite');
    if (id === 'light') document.body.classList.add('theme-light');
    if (id === 'graphite') document.body.classList.add('theme-graphite');

    document.querySelectorAll('.theme-choice').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.theme === id));
    });

    const colors = {
      original: ['#99e0d5', '#102d35', '#e6f3f3', '#60727c'],
      light: ['#a7623f', '#fff', '#704a35', '#a9907d'],
      graphite: ['#c2b1f4', '#27233c', '#eee9ff', '#817c95']
    }[id] || colors.original;

    document.querySelectorAll('.identity-hero .btn').forEach(b => {
      const primary = b.classList.contains('btn-primary');
      b.style.setProperty('background', primary ? colors[0] : 'transparent', 'important');
      b.style.setProperty('color', primary ? colors[1] : colors[2], 'important');
      b.style.setProperty('border-color', primary ? colors[0] : colors[3], 'important');
    });

    try {
      localStorage.setItem('portfolio-theme', id);
    } catch (e) {}
  }

  // 4. Global click listener for any theme-choice button (bulletproof event delegation)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-choice');
    if (btn && btn.dataset.theme) {
      e.preventDefault();
      choose(btn.dataset.theme);
    }
  });

  // 5. Initialize current theme
  choose(selected);
})();
