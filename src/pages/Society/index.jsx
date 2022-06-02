import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSociety from "../../api/GetSociety";
import Loading from "../../components/Loading";
import ContactLinks from "./ContactLinks";
import MembershipJoin from "./MembershipJoin";

export default function Society() {
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
    <Container>
      <Grid container my={4} p={2}>
        <Grid item md={3} width="100%" p={1} sx={{ img: { maxWidth: "250px" } }}>
          <img
            src={society.icon_url}
            alt={society.club_name}
            width="100%"
          />
        </Grid>
        <Grid item md={9} width="100%" p={1} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h1">
            {society.club_name}
          </Typography>
          <Box mt={1}>
            {
              society.tags.map((value, k) =>
                <Chip key={k} label={value} color="primary" />
              )
            }
            {
              society.categories.map((value, k) =>
                <Chip key={k} label={value} color="secondary" />
              )
            }
          </Box>
        </Grid>
      </Grid>
      <Grid container my={4}>
        <Grid item md={8} width="100%" p={2}>
          <Box component={Paper} p={3}>
            <Typography variant="h5">
              Description
            </Typography>
            <Box mt={2}>
              <Typography whiteSpace="pre-line">
                {society.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} width="100%" p={2}>
          <MembershipJoin society={society} />
          <ContactLinks society={society} />
        </Grid>
      </Grid>
    </Container>
  );
}