import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PageRoutes } from "./configuration/routes";
import AboutPage from "./pages/About";
import CalendarPage from "./pages/Calendar";
import DiscoverSocietiesPage from "./pages/Discover";
import EventPage from "./pages/Event";
import AllEventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import SocietyPage from "./pages/Society";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={PageRoutes.home} element={<HomePage />} />
          <Route path={PageRoutes.about} element={<AboutPage />} />
          <Route path={PageRoutes.allEvents} element={<AllEventsPage />} />
          <Route path={PageRoutes.eventTemplate + "/:id"} element={<EventPage />} />
          <Route path={PageRoutes.discover} element={<DiscoverSocietiesPage />} />
          <Route path={PageRoutes.societyTemplate + "/:id"} element={<SocietyPage />} />
          <Route path={PageRoutes.calendar} element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

