import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import getSociety from "../../api/GetSociety";
import Loading from "../../components/Loading";
import Page from "./SocietyPage";

export default function SocietyPage() {
  const [society, setSociety] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getSociety(id)
      .then(setSociety);
  }, []);

  if (society === null) {
    return <Loading caption="Fetching club info..." />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Clubs - {society.club_name}</title>
      </Helmet>
      <Page society={society} />
    </React.Fragment>
  );
}