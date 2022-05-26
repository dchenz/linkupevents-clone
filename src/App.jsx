import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PageRoutes } from "./configuration/routes";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Event from "./pages/Event";
import EventTable from "./pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={PageRoutes.home} element={<EventTable />} />
        <Route path={PageRoutes.about} element={<About />} />
        <Route path={PageRoutes.allEvents} element={<EventTable />} />
        <Route path={PageRoutes.eventTemplate + "/:id"} element={<Event />} />
        <Route path={PageRoutes.calendar} element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

