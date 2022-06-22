import { Paper } from "@mui/material";
import PropTypes from "prop-types";
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
PaperFooter.propTypes = {
  children: PropTypes.node
};

export default PaperFooter;