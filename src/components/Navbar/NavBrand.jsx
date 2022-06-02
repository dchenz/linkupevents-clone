import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../configuration/routes";
import "./styles.css";

export default function NavBrand(props) {
  return (
    <Link className="nav-brand" to={PageRoutes.home}>
      <img
        src={props.image}
        alt="Brand logo"
        height="48"
      />
      <Typography
        sx={{
          ml: "0.5rem",
          fontWeight: 700,
          letterSpacing: "0.1rem",
          fontSize: "1.5rem",
          color: "#000",
          display: { xs: "none", md: "block" }
        }}
      >
        {props.title}
      </Typography>
    </Link>
  );
}

