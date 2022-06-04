import React, { forwardRef } from "react";
import MUIIconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const IconButton = forwardRef(({ tooltip, external, ...props }, ref) => {

  const btn = (
    <MUIIconButton
      {...props}
      ref={ref}
      color={props.color ?? "secondary"}
      target={external ? "_blank" : props.target}
      rel={external ? "noopener noreferrer" : props.rel}
    >
      {props.children}
    </MUIIconButton>
  );

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