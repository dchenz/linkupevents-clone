import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { PageRoutes } from "../../configuration/routes";
import LinkupLogo from "./logo.png";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";

const ROUTES = [
  { name: "Home", href: PageRoutes.home },
  { name: "About", href: PageRoutes.about },
  { name: "Events", href: PageRoutes.allEvents },
  { name: "Discover", href: "/discover" },
  { name: "Calendar", href: PageRoutes.calendar }
];

export default function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: "#fff" }} position="sticky">
      <Toolbar>
        <NavBrand
          title="LinkupEvents"
          image={LinkupLogo}
        />
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          {
            ROUTES.map((route, k) =>
              <NavLink key={k} {...route} />
            )
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}