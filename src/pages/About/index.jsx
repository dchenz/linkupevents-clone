import React from "react";
import { Helmet } from "react-helmet";
import Page from "./AboutPage";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>LinkUp - About Us</title>
      </Helmet>
      <Page />
    </React.Fragment>
  );
}