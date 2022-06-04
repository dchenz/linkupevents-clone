import { Facebook, InsertInvitation } from "@mui/icons-material";
import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useMemo } from "react";
import AvatarLink from "../../components/AvatarLink";
import IconButton from "../../components/IconButton";
import downloadICS from "./CalendarInvite";
import "./styles.css";

export default function EventPage({ event }) {

  const categories = useMemo(() => {
    if (event.categories) {
      return event.categories.filter((c) => c != "Unknown");
    }
    return [];
  }, [event]);

  return (
    <Container>
      <Grid container mt={4}>
        <Grid item md={5} width="100%" p={2}>
          <img src={event.image_url} alt={event.title} width="100%" />
        </Grid>
        <Grid item md={7} width="100%" p={2}>
          <Typography variant="h1">
            {event.title}
          </Typography>
          <Box mt={1} display="flex" gap={1}>
            {
              event.uni ?
                <Chip label={event.uni.toUpperCase()} color="primary" /> : null
            }
            {
              categories.map((value, k) =>
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
              <Typography className="formatted-text">
                {event.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} width="100%" p={2}>
          <Box component={Paper} p={3} mb={3}>
            <Typography variant="h5">
              Hosts
            </Typography>
            {
              event.hosts.map((host, k) =>
                <Box key={k} mt={2} sx={{ display: "flex", alignItems: "center" }}>
                  <AvatarLink
                    name={host.name}
                    href={host.url}
                    image={host.image}
                  />
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
              <Typography className="formatted-text">
                {
                  event.location ?? "None specified. Please check the Facebook event for details."
                }
              </Typography>
            </Box>
          </Box>
          {/* Icon Button pushes itself to the right, so reduce left/right padding */}
          <Box component={Paper} px={2} py={3}>
            <IconButton
              external href={event.url}
              color="custom.facebook"
              tooltip="View on Facebook"
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              tooltip="Add to calendar"
              onClick={() => downloadICS(event)}
            >
              <InsertInvitation fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

