const DARK_THEME = '(prefers-color-scheme: dark)';

function changeWebsiteTheme(scheme) {
  const new_scheme = scheme.matches ? 'dark' : 'light';
  
  if (new_scheme === 'dark') {
    root.style.setProperty('--background-color', "#222");
    root.style.setProperty('--text-color', "#fff");
    root.style.setProperty('--text-grey-color', "#999");
  } else {
    root.style.setProperty('--background-color', "#fff");
    root.style.setProperty('--text-color', "#000");
    root.style.setProperty('--text-grey-color', "#666");
  }
}

function detectColorScheme() {
    if(!window.matchMedia) {
      return
    }
    const mqDark = window.matchMedia(DARK_THEME);
    mqDark.addEventListener('change', e => { changeWebsiteTheme() });
  
    // Check if needed to be changed on page load
    changeWebsiteTheme(mqDark);
}

detectColorScheme();
