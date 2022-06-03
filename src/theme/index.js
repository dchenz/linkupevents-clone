import { createTheme } from "@mui/material/styles";
import colorStyles from "./Colors";
import componentStyles from "./Components";
import applyHeadingStyles from "./Headings";

const theme = createTheme({
  palette: colorStyles,
  components: componentStyles
});

applyHeadingStyles(theme);

export default theme;