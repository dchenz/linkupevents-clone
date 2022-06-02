import React from "react";
import { Helmet } from "react-helmet";
import Page from "./DiscoverPage";

export default function DiscoverPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>LinkUp - Discover New Clubs</title>
      </Helmet>
      <Page />
    </React.Fragment>
  );
}