/**
  This overrides the button and text color on Discover's category picker
  because the default MUI colors do not look nice there.
 */
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