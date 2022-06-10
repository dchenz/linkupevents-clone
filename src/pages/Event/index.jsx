import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import getEvent from "../../api/GetEvent";
import LoadingEventPage from "../../components/Loading/LoadingEventPage";
import Page from "./EventPage";

export default function EventPage() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getEvent(id)
      .then(setEvent);
  }, []);

  if (!event) {
    return (
      <React.Fragment>
        <Helmet>
          <title>Events</title>
        </Helmet>
        <LoadingEventPage />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Events - {event.title}</title>
      </Helmet>
      <Page event={event} />
    </React.Fragment>
  );
}