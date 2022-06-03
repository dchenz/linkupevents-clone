import { Avatar, Tooltip } from "@mui/material";
import React from "react";

export default function AvatarLink(props) {
  return (
    <Tooltip title={props.name}>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Avatar
          src={props.image}
          alt={props.name}
        />
      </a>
    </Tooltip>
  );
}