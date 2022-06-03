import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useTheme } from "@mui/material/styles";

export default function NavLink(props) {
  const theme = useTheme();
  const buttonStyles = {
    fontSize: "1rem",
    color: theme.palette.primary.dark + " !important"
  };
  return (
    <Link to={props.href}>
      <Button sx={buttonStyles}>
        {props.name}
      </Button>
    </Link>
  );
}