export default (styles) => ({
  MuiButton: {
    variants: [
      {
        props: { variant: "text", color: "primary" },
        style: {
          color: styles.text.primary
        }
      }
    ]
  }
});