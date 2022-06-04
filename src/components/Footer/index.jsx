import { BrightnessHigh, BrightnessLow, Email, Facebook } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ThemeContext } from "../../AppTheme";
import { Properties } from "../../configuration/properties";
import IconButton from "../IconButton";
import ArcLogoIcon from "./ArcLogoIcon";
import PaperFooter from "./PaperFooter";

const iconSize = 28;

export default function Footer() {
  const { themeVariant, toggleTheme } = useContext(ThemeContext);
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
                tooltip="Toggle theme"
                onClick={toggleTheme}
              >
                {
                  themeVariant == "light" ?
                    <BrightnessHigh
                      sx={{ fontSize: iconSize }}
                      htmlColor={theme.palette.text.secondary}
                    /> :
                    <BrightnessLow
                      sx={{ fontSize: iconSize }}
                      htmlColor={theme.palette.text.secondary}
                    />
                }
              </IconButton>
              <IconButton external href={Properties.linkupFacebookLink}>
                <Facebook
                  sx={{ fontSize: iconSize }}
                  htmlColor={theme.palette.text.secondary}
                />
              </IconButton>
              <IconButton href={`mailto:${Properties.linkupEmailAddress}`}>
                <Email
                  sx={{ fontSize: iconSize }}
                  htmlColor={theme.palette.text.secondary}
                />
              </IconButton>
              <IconButton external href={Properties.arcClubsLink}>
                <ArcLogoIcon
                  size={iconSize}
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