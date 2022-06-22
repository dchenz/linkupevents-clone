import { Paper } from "@mui/material";
import React, { forwardRef } from "react";

/**
 * Wrapper over the page footer element.
 * Used to give look of MUI Paper and be able to apply padding directly.
 */
const PaperFooter = forwardRef((props, ref) =>
  <Paper {...props} component="footer" ref={ref}>
    {props.children}
  </Paper>
);
PaperFooter.displayName = "paperfooter";

export default PaperFooter;