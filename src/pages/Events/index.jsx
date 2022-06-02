import React from "react";
import { Helmet } from "react-helmet";
import Page from "./AllEventsPage";

export default function AllEventsPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>LinkUp - Browse All Events</title>
      </Helmet>
      <Page />
    </React.Fragment>
  );
}