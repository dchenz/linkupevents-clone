import { Facebook, Search } from "@mui/icons-material";
import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import IconButton from "../../components/IconButton";
import { Properties } from "../../configuration/properties";
import { PageRoutes } from "../../configuration/routes";
import EventTime from "./EventTime";
import "./styles.css";

export default function EventCard({ event }) {
  const [height, setHeight] = useState("auto");
  const ref = useRef();
  useEffect(() => {
    if (ref?.current) {
      // Must be same ratio as 1920x1080
      setHeight(ref?.current?.clientWidth / 1.777778);
    }
  }, [ref]);

  return (
    <Grid item md={4} width="100%">
      <Card className="event-card">
        <CardMedia
          ref={ref}
          component="img"
          src={event.image_url}
          alt={event.title}
          width="100%"
          height={height}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <EventTime start={event.time_start} finish={event.time_finish} />
          <Typography sx={{ wordBreak: "break-word" }}>
            {event.title}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            tooltip="View event"
            href={`${PageRoutes.eventTemplate}/${event.id}`}
          >
            <Search />
          </IconButton>
          <IconButton
            tooltip="View on Facebook"
            href={event.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook />
          </IconButton>
          <AvatarGroup max={3} sx={{ flexGrow: 1 }}>
            {
              event.hosts
                .filter((host) => host.image != Properties.ignoreHostImage)
                .map((host, k) =>
                  <a key={k} href={host.url} target="_blank" rel="noreferrer noopener">
                    <Avatar src={host.image} alt={host.name} />
                  </a>
                )
            }
          </AvatarGroup>
        </CardActions>
      </Card>
    </Grid >
  );
}

