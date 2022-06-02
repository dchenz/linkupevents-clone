import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import getEvent from "../../api/GetEvent";
import Loading from "../../components/Loading";
import Page from "./EventPage";

export default function EventPage() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getEvent(id)
      .then(setEvent);
  }, []);

  if (event === null) {
    return <Loading caption="Fetching event info..." />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>LinkUp - Events - {event.title}</title>
      </Helmet>
      <Page event={event} />
    </React.Fragment>
  );
}