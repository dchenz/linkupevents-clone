import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { createContext, useCallback, useMemo, useState } from "react";
import getTheme from "./Theme";
import { loadTheme, saveTheme } from "./ThemeCache";

// ThemeContext is used to allow all child components
// access to the current theme and be able to toggle it
export const ThemeContext = createContext({
  themeVariant: null,
  toggleTheme: null
});

/**
  Wrapper over the entire app that handles all theme management functions.
  It allows all child components the ability to toggle theme between the two
  values "light" and "dark". When theme is toggled, this wrapper also
  handles caching to localStorage so the theme persists across browser reloads.
*/
export default function AppTheme(props) {

  // Load theme from cache, if it exists, when the app is created
  const [themeVariant, setThemeVariant] = useState(useMemo(loadTheme, []));

  // Create a MUI theme. themeVariant is either "light" or "dark".
  const muiTheme = useMemo(() => getTheme(themeVariant), [themeVariant]);

  // This is passed down to all child components via React Context
  const toggleTheme = useCallback(() => {
    const newTheme = themeVariant == "light" ? "dark" : "light";
    setThemeVariant(newTheme); // Save to state
    saveTheme(newTheme); // Save to localStorage cache
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

AppTheme.propTypes = {
  children: PropTypes.node
};