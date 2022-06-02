import { createTheme } from "@mui/material/styles";

const theme = createTheme();

// eslint-disable-next-line no-unused-vars
const getHeadingStyles = ({ breakpoints, ...styles }, baseSize) => ({
  ...styles,
  fontSize: `${baseSize}rem`,
  [theme.breakpoints.down("md")]: {
    fontSize: `${baseSize - 0.5}rem`
  }
});

theme.typography.h1 = getHeadingStyles(theme.typography.h1, 3);

theme.typography.h2 = getHeadingStyles(theme.typography.h2, 2.6);

theme.typography.h3 = getHeadingStyles(theme.typography.h3, 2.4);

theme.typography.h4 = getHeadingStyles(theme.typography.h4, 2.2);

theme.typography.h5 = getHeadingStyles(theme.typography.h5, 2);

theme.typography.h6 = getHeadingStyles(theme.typography.h6, 1.8);

export default theme;