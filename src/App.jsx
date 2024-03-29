import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppTheme from "./AppTheme";
import Footer from "./components/Footer";
import PageNavbar from "./components/Navbar";
import { PageRoutes } from "./configuration/routes";
import "./index.css";
import AboutPage from "./pages/About";
import DiscoverSocietiesPage from "./pages/Discover";
import EventPage from "./pages/Event";
import AllEventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import SocietyPage from "./pages/Society";
import ScrollTop from "./ScrollTop";

export default function App() {
  return (
    <div className="app">
      <AppTheme>
        <BrowserRouter>
          <ScrollTop />
          <PageNavbar />
          <div className="app-body">
            <Routes>
              <Route exact path={PageRoutes.home} element={<HomePage />} />
              <Route path={PageRoutes.about} element={<AboutPage />} />
              {/* Event template can be accessed using short/long variants */}
              <Route path={PageRoutes.allEvents} element={<AllEventsPage />} />
              <Route path={PageRoutes.eventTemplateShort + "/:id"} element={<EventPage />} />
              <Route path={PageRoutes.eventTemplateLong + "/:id"} element={<EventPage />} />
              {/* Club template can be accessed using short/long variants */}
              <Route path={PageRoutes.clubs} element={<DiscoverSocietiesPage />} />
              <Route path={PageRoutes.clubTemplateShort + "/:id"} element={<SocietyPage />} />
              <Route path={PageRoutes.clubTemplateLong + "/:id"} element={<SocietyPage />} />
              <Route path="*" element={<Navigate to={PageRoutes.home} replace />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AppTheme>
    </div>
  );
}