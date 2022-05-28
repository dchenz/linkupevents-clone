import React, { forwardRef } from "react";
import MUIIconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const IconButton = forwardRef(({ tooltip, ...props }, ref) => {

  const btn = <MUIIconButton {...props} ref={ref}>
    {props.children}
  </MUIIconButton>;

  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        {btn}
      </Tooltip>
    );
  }

  return btn;
}
);
IconButton.displayName = "iconbutton";

export default IconButton;