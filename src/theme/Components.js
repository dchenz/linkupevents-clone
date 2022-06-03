import Colors from "./Colors";

export default {
  MuiButton: {
    variants: [
      {
        props: { variant: "text", color: "primary" },
        style: {
          color: Colors.secondary.main
        }
      }
    ]
  }
};