import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PageRoutes } from "./configuration/routes";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Discover from "./pages/Discover";
import Event from "./pages/Event";
import EventTable from "./pages/Events";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={PageRoutes.home} element={<Home />} />
        <Route path={PageRoutes.about} element={<About />} />
        <Route path={PageRoutes.allEvents} element={<EventTable />} />
        <Route path={PageRoutes.eventTemplate + "/:id"} element={<Event />} />
        <Route path={PageRoutes.discover} element={<Discover />} />
        <Route path={PageRoutes.calendar} element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

