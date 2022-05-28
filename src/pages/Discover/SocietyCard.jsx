import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { PageRoutes } from "../../configuration/routes";

export default function SocietyCard({ society }) {
  return (
    <Grid item md={6}>
      <Link className="society-card" to={`${PageRoutes.societyTemplate}/${society.clean_id}`}>
        <Box className="society-card-img">
          <img
            src={society.icon_url}
            alt={society.club_name}
            width="100%"
          />
        </Box>
        <Box className="society-card-body">
          <Typography className="society-card-title">
            <b>{society.club_name}</b>
          </Typography>
          <Typography className="society-card-description">
            {society.description}
          </Typography>
        </Box>
      </Link>
    </Grid>
  );
}