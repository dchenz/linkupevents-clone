import { createTheme } from "@mui/material/styles";
import colorStyles from "./Colors";
import applyHeadingStyles from "./Headings";

const theme = createTheme({
  palette: colorStyles
});

applyHeadingStyles(theme);

export default theme;