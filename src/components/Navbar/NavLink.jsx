import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NavLink(props) {
  return (
    <Link to={props.href}>
      <Button sx={{ color: "#000", fontSize: "1rem" }}>
        {props.name}
      </Button>
    </Link>
  );
}