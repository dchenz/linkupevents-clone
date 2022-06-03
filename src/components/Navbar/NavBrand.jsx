import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../configuration/routes";
import "./styles.css";

export default function NavBrand(props) {
  return (
    <Link id="nav-brand" to={PageRoutes.home}>
      <img
        src={props.image}
        alt="Brand logo"
        height="48"
      />
      <Typography
        variant="span"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        {props.title}
      </Typography>
    </Link>
  );
}

