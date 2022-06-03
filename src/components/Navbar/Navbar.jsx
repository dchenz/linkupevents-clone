import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Menu, MenuItem, Toolbar } from "@mui/material";
import React, { useRef, useState } from "react";
import IconButton from "../../components/IconButton";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";

export default function Navbar({ routes }) {
  const btnRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppBar color="background" position="sticky">
      <Toolbar>
        <NavBrand
          title="LinkupEvents"
          image="/static/media/logo.png"
        />
        <Box flexGrow={1}></Box>
        {/* LARGE SCREENS */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {
            routes.map((route, k) =>
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
              routes.map((route, k) =>
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