import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../configuration/routes";
import "./styles.css";

export default function SocietyCard({ society }) {
  const theme = useTheme();
  const cardStyle = {
    color: theme.palette.text.primary,
    "&:hover": { backgroundColor: theme.palette.background.default }
  };
  return (
    <Grid item md={6}>
      <Link className="no-decor" to={`${PageRoutes.clubTemplateLong}/${society.clean_id}`} >
        <Box className="society-card" sx={cardStyle}>
          <div className="society-card-img">
            <img
              src={society.icon_url}
              alt={society.club_name}
              width="100%"
            />
          </div>
          <div className="society-card-body">
            <Typography className="society-card-title">
              <b>{society.club_name}</b>
            </Typography>
            <Typography className="society-card-description">
              {society.description}
            </Typography>
          </div>
        </Box>
      </Link>
    </Grid>
  );
}