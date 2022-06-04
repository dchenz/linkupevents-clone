import React, { createContext, useCallback, useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme";

export const ThemeContext = createContext({
  themeVariant: null,
  toggleTheme: null
});

export default function AppTheme(props) {
  const [themeVariant, setThemeVariant] = useState(useMemo(loadThemeFromCache, []));
  const muiTheme = useMemo(() => getTheme(themeVariant), [themeVariant]);
  const toggleTheme = useCallback(() => {
    const newTheme = themeVariant == "light" ? "dark" : "light";
    setThemeVariant(newTheme);
    saveThemeToCache(newTheme);
  }, [themeVariant]);
  return (
    <ThemeContext.Provider value={{ themeVariant, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

function loadThemeFromCache() {
  try {
    const cachedTheme = localStorage.getItem("THEME");
    if (cachedTheme == "light" || cachedTheme == "dark") {
      return cachedTheme;
    }
  // eslint-disable-next-line no-empty
  } catch {
    // Return default dark theme if no valid cached theme
  }
  saveThemeToCache("dark");
  return "dark";
}

function saveThemeToCache(theme) {
  try {
    localStorage.setItem("THEME", theme);
  // eslint-disable-next-line no-empty
  } catch {
    // Unlikely, but ignore full localStorage errors
  }
}
