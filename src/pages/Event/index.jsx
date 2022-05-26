import { Facebook, InsertInvitation } from "@mui/icons-material";
import { Avatar, Box, Chip, Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getEvent from "../../api/GetEvent";
import Loading from "../../components/Loading";
import downloadICS from "./CalendarInvite";

export default function Event() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getEvent(id)
      .then(setEvent);
  }, []);

  if (event == null) {
    return <Loading caption="Fetching event info..." />;
  }

  const chips = [];
  if (event.uni) {
    chips.push(event.uni.toUpperCase());
  }
  if (event.categories && !event.categories.includes("Unknown")) {
    chips.push(...event.categories);
  }

  return (
    <Container>
      <Grid container my={4} p={2}>
        <Grid item md={5} width="100%" p={1}>
          <img src={event.image_url} alt={event.title} width="100%" />
        </Grid>
        <Grid item md={7} width="100%" p={1} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">
            {event.title}
          </Typography>
          <Box mt={1}>
            {
              chips.map((value, k) =>
                <Chip key={k} label={value} />
              )
            }
          </Box>
        </Grid>
      </Grid>
      <Grid container my={4}>
        <Grid item md={8} width="100%" p={2}>
          <Box component={Paper} p={5}>
            <Typography variant="h5">
              Description
            </Typography>
            <br />
            <Typography whiteSpace="pre-line">
              {event.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} width="100%" p={2}>
          <Box component={Paper} px={3} py={5} mb={3}>
            <Typography variant="h5">
              Hosts
            </Typography>
            {
              event.hosts.map((host, k) =>
                <Box key={k} mt={2} sx={{ display: "flex", alignItems: "center" }}>
                  <a href={host.url} target="_blank" rel="noreferrer noopener">
                    <Avatar src={host.image} alt={host.name} />
                  </a>
                  <Typography textAlign="right" width="100%">
                    {host.name}
                  </Typography>
                </Box>
              )
            }
          </Box>
          <Box component={Paper} p={3} mb={3}>
            <Typography variant="h5">
              Time
            </Typography>
            <Box mt={2}>
              <Typography>
                {format(event.time_start, "EEEE, do MMMM yyyy 'at' h:mmaaa")}
              </Typography>
            </Box>
          </Box>
          <Box component={Paper} p={3} mb={3}>
            <Typography variant="h5">
              Location
            </Typography>
            <Box mt={2}>
              <Typography>
                {
                  event.location ?? "None specified. Please check the Facebook event for details."
                }
              </Typography>
            </Box>
          </Box>
          <Box component={Paper} p={3} mb={3}>
            <IconButton href={event.url} target="_blank" rel="noreferrer noopener">
              <Facebook fontSize="large" htmlColor="#4267B2" />
            </IconButton>
            <IconButton onClick={() => downloadICS(event)}>
              <InsertInvitation fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

