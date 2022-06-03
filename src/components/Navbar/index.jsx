import React from "react";
import { PageRoutes } from "../../configuration/routes";
import Navbar from "./Navbar";

const routesConfig = [
  { name: "Home", href: PageRoutes.home },
  { name: "About", href: PageRoutes.about },
  { name: "Events", href: PageRoutes.allEvents },
  { name: "Discover", href: PageRoutes.clubs },
  { name: "Calendar", href: PageRoutes.calendar }
];

export default function PageNavbar() {
  return <Navbar routes={routesConfig} />;
}