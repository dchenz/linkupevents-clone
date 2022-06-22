import { BrightnessHigh, BrightnessLow, Email, Facebook } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { Properties } from "../../configuration/properties";
import { ThemeContext } from "../../theme";
import IconButton from "../IconButton";
import ArcLogoIcon from "./ArcLogoIcon";
import PaperFooter from "./PaperFooter";

const iconSize = 28;

/**
 * Footer component present on the bottom of every page.
 *
 * Left column includes text about the website and copyright disclaimers.
 * Right column includes links to social media and a button to toggle theme.
 */
export default function Footer() {
  const { themeVariant, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const themeButtonIcon = themeVariant == "light" ?
    <BrightnessHigh
      sx={{ fontSize: iconSize }}
      htmlColor={theme.palette.text.secondary}
    /> :
    <BrightnessLow
      sx={{ fontSize: iconSize }}
      htmlColor={theme.palette.text.secondary}
    />;

  return (
    <Box component={PaperFooter} py={2}>
      <Container>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>

          <Grid item md={9} width="100%" px={2} py={1}>
            <Typography variant="span" color="text.secondary">
              This is a clone. Visit the real LinkUp at <a href="https://linkupevents.com.au" target="_blank" rel="noopener noreferrer">linkupevents.com.au</a>.
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
                {themeButtonIcon}
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