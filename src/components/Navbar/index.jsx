import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Menu, MenuItem, Toolbar } from "@mui/material";
import React, { useRef, useState } from "react";
import IconButton from "../../components/IconButton";
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
  const btnRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppBar sx={{ backgroundColor: "#fff" }} position="sticky">
      <Toolbar>
        <NavBrand
          title="LinkupEvents"
          image={LinkupLogo}
        />
        <Box flexGrow={1}></Box>
        {/* LARGE SCREENS */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {
            ROUTES.map((route, k) =>
              <NavLink key={k} {...route} />
            )
          }
        </Box>
        {/* SMALL SCREENS */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Menu
            anchorEl={btnRef?.current}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            keepMounted
          >
            {
              ROUTES.map((route, k) =>
                <MenuItem key={k} onClick={() => setMenuOpen(false)}>
                  <NavLink {...route} />
                </MenuItem>
              )
            }
          </Menu>
          <IconButton
            ref={btnRef}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}