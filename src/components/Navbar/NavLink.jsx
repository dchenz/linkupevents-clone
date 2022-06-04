import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavLink(props) {
  const theme = useTheme();
  const buttonStyles = {
    fontSize: "1rem",
    color: props.active ? theme.palette.primary.dark : theme.palette.primary.main
  };
  return (
    <Link to={props.href}>
      <Button sx={buttonStyles}>
        {props.name}
      </Button>
    </Link>
  );
}