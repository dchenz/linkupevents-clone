export const baseColors = {
  primary: {
    main: "#fc6e26",
    light: "#fc6e26",
    dark: "#e34329",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#404040",
    light: "#545454",
    dark: "#1f1f1f",
    contrastText: "#ffffff"
  },
  info: {
    main: "#bdbdbd",
    light: "#bdbdbd",
    dark: "#a6a6a6"
  },
  "custom.facebook": {
    main: "#4267b2"
  },
  "custom.sparc": {
    main: "#7ac143",
    light: "#7ac143",
    dark: "#7ac143",
    contrastText: "#ffffff"
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  }
};

export const lightColors = {
  ...baseColors,
  background: {
    default: "#f5f5f5",
    paper: "#ffffff"
  },
  navbar: {
    main: "#f5f5f5"
  }
};

export const darkColors = {
  ...baseColors,
  secondary: {
    main: "#afafaf",
    light: "#e4e4e4",
    dark: "#9a9a9a",
    contrastText: "#000000"
  },
  background: {
    default: "#191919",
    paper: "#2a2a2a"
  },
  navbar: {
    main: "#303038"
  },
  text: {
    primary: "#cccccc",
    secondary: "rgba(174, 174, 174, 0.87)",
    disabled: "rgba(120, 120, 120, 0.87)"
  }
};
