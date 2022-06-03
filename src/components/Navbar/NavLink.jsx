import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavLink(props) {
  return (
    <Link to={props.href}>
      <Button className="nav-link-btn">
        {props.name}
      </Button>
    </Link>
  );
}