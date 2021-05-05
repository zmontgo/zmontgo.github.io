const DARK_THEME = '(prefers-color-scheme: dark)'
const LIGHT_THEME = '(prefers-color-scheme: light)'

function changeWebsiteTheme(scheme) {
  const scheme = e.matches ? 'dark' : 'light';
  
  if (scheme === 'dark') {
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
    mqDark.addEventListener('change', changeWebsiteTheme());
}

changeWebsitetheme();
