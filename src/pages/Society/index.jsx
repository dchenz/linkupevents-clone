import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import getSociety from "../../api/GetSociety";
import getSocietyEvents from "../../api/GetSocietyEvents";
import LoadingSocietyPage from "../../components/Loading/LoadingSocietyPage";
import Page from "./SocietyPage";

export default function SocietyPage() {
  const [society, setSociety] = useState(null);
  const [societyEvents, setSocietyEvents] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const societyData = await getSociety(id);
      // Only fetch events if society has a linkup_id in response
      if (societyData?.linkup_id) {
        setSocietyEvents(await getSocietyEvents(societyData.linkup_id));
      } else {
        setSocietyEvents([]);
      }
      setSociety(societyData);
    })();
  }, [id]);

  if (!society) {
    return (
      <React.Fragment>
        <Helmet>
          <title>Clubs</title>
        </Helmet>
        <LoadingSocietyPage />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Clubs - {society.club_name}</title>
      </Helmet>
      <Page society={society} events={societyEvents} />
    </React.Fragment>
  );
}