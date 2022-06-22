// Name of localStorage entry
const lsKey = "THEME";

/**
 * Attempts to get the saved theme from localStorage,
 * if it exists and is valid,
 * otherwise use a default dark theme.
 *
 * @returns {string} light or dark
 */
export function loadTheme() {
  try {
    const cachedTheme = localStorage.getItem(lsKey);
    if (cachedTheme == "light" || cachedTheme == "dark") {
      return cachedTheme;
    }
  } catch {
    console.log("Reverting to default dark theme.");
  }
  saveTheme("dark");
  return "dark";
}

/**
 * Writes the theme to localStorage.
 *
 * @param {string} theme light or dark
 */
export function saveTheme(theme) {
  try {
    localStorage.setItem(lsKey, theme);
  } catch {
    console.log("Theme could not be saved.");
  }
}