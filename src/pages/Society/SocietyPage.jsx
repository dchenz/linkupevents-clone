import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import EventsGrid from "../../components/EventGrid";
import ContactLinks from "./ContactLinks";
import MembershipJoin from "./MembershipJoin";

export default function SocietyPage({ society, events }) {
  return (
    <Container>
      <Grid container mt={4} sx={{ textAlign: { xs: "center", md: "left"}}}>
        <Grid item md={2} width="100%" p={2} sx={{ img: { maxWidth: "250px" } }}>
          <img
            src={society.icon_url}
            alt={society.club_name}
            width="100%"
          />
        </Grid>
        <Grid item md={10} width="100%" p={2} >
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
      <Grid container mt={2} mb={4}>
        <Grid item md={8} width="100%" display="flex" p={2}>
          <Box component={Paper} p={3} flexGrow={1}>
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
        {
          events.length ?
            <Grid item md={12} width="100%" p={2}>
              <Box component={Paper} p={3} flexGrow={1}>
                <Box mt={3}>
                  <EventsGrid data={events} rows={3} />
                </Box>
              </Box>
            </Grid> : null
        }
      </Grid>
    </Container>
  );
}