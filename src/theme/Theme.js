import { createTheme } from "@mui/material/styles";
import { darkColors, lightColors } from "./Colors";
import componentStyles from "./Components";
import applyHeadingStyles from "./Headings";

/**
 * Create a MUI theme object using the given variant.
 *
 * @param {string} variant light or dark.
 */
export default function getTheme(variant) {
  const styles = variant == "light" ? lightColors : darkColors;
  const theme = createTheme({
    palette: styles,
    components: componentStyles(styles)
  });
  // Heading styles are overriden because default sizes are too large
  applyHeadingStyles(theme);
  return theme;
}

