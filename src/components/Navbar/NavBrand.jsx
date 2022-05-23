import { Typography } from "@mui/material";
import React from "react";

export default function NavBrand(props) {
  return (
    <React.Fragment>
      <img
        src={props.image}
        alt="Brand logo"
        height="48"
      />
      <Typography
        component="a"
        href="/"
        sx={{
          ml: "0.5rem",
          fontWeight: 700,
          letterSpacing: "0.1rem",
          fontSize: "1.5rem",
          color: "#000",
          textDecoration: "none"
        }}
      >
        {props.title}
      </Typography>
    </React.Fragment>
  );
}