import { Email, Facebook } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Properties } from "../../configuration/properties";
import IconButton from "../IconButton";
import ArcLogoIcon from "./ArcLogoIcon";
import PaperFooter from "./PaperFooter";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box component={PaperFooter} py={2}>
      <Container>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item md={9} width="100%" px={2} py={1}>
            <Typography variant="span" color="text.secondary">
              App created by the LinkUp dev team.
              <br />
              All logos and content are the works of individual clubs and entities.
            </Typography>
          </Grid>
          <Grid item md={3} width="100%" p={1}>
            <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
              <IconButton
                href={Properties.linkupFacebookLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook
                  sx={{ fontSize: 32 }}
                  htmlColor={theme.palette.text.secondary}
                />
              </IconButton>
              <IconButton
                href={`mailto:${Properties.linkupEmailAddress}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Email
                  sx={{ fontSize: 32 }}
                  htmlColor={theme.palette.text.secondary}
                />
              </IconButton>
              <IconButton
                href={Properties.arcClubsLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArcLogoIcon
                  size={32}
                  color={theme.palette.text.secondary}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}