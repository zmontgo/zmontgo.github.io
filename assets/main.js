const DARK_THEME = '(prefers-color-scheme: dark)'
const LIGHT_THEME = '(prefers-color-scheme: light)'

function changeWebsiteTheme(scheme) {
  console.log(scheme);
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
    function listener({matches, media}) {
        if(!matches) { // Not matching anymore = not interesting
          return
        }
        if(media === DARK_THEME) {
          console.log('Bad')
          changeWebsiteTheme('dark')
        } else if (media === LIGHT_THEME) {
          changeWebsiteTheme('light')
        }
    }
    const mqDark = window.matchMedia(DARK_THEME)
    mqDark.addListener(listener)
    const mqLight = window.matchMedia(LIGHT_THEME)
    mqLight.addListener(listener)
}

detectColorScheme()