import React from "react";
import Navbar from "./components/Navbar";
import EventTable from "./pages/Events";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Event from "./pages/Event";
import { PageRoutes } from "./configuration/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path={PageRoutes.home} element={<EventTable />} />
          <Route path={PageRoutes.about} element={<About />} />
          <Route path={PageRoutes.allEvents} element={<EventTable />} />
          <Route path={PageRoutes.eventTemplate + "/:id"} element={<Event />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

