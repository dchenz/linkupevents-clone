import { Paper } from "@mui/material";
import React, { forwardRef } from "react";

const PaperFooter = forwardRef((props, ref) =>
  <Paper {...props} component="footer" ref={ref}>
    {props.children}
  </Paper>
);
PaperFooter.displayName = "paperfooter";

export default PaperFooter;