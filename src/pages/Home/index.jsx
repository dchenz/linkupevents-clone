import React from "react";
import { Helmet } from "react-helmet";
import Page from "./HomePage";

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>LinkUp - Uni Event Tracker</title>
      </Helmet>
      <Page />
    </React.Fragment>
  );
}