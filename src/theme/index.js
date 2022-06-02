import { createTheme } from "@mui/material/styles";

const theme = createTheme();

// eslint-disable-next-line no-unused-vars
const getHeadingStyles = ({ breakpoints, ...styles }, baseSize) => ({
  ...styles,
  fontSize: `${baseSize}rem`,
  [theme.breakpoints.down("md")]: {
    fontSize: `${baseSize - 0.2}rem`
  }
});

theme.typography.h1 = getHeadingStyles(theme.typography.h1, 2.7);

theme.typography.h2 = getHeadingStyles(theme.typography.h2, 2.3);

theme.typography.h3 = getHeadingStyles(theme.typography.h3, 2.1);

theme.typography.h4 = getHeadingStyles(theme.typography.h4, 1.7);

theme.typography.h5 = getHeadingStyles(theme.typography.h5, 1.5);

theme.typography.h6 = getHeadingStyles(theme.typography.h6, 1.3);

export default theme;