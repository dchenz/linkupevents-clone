import { createTheme } from "@mui/material/styles";
import componentStyles from "./Components";
import applyHeadingStyles from "./Headings";
import { lightColors, darkColors } from "./Colors";

export default function getTheme(variant) {
  const styles = variant == "light" ? lightColors : darkColors;
  const theme = createTheme({
    palette: styles,
    components: componentStyles(styles)
  });
  applyHeadingStyles(theme);
  return theme;
}

