import { Facebook } from "@mui/icons-material";
import { AvatarGroup, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Properties } from "../../configuration/properties";
import { PageRoutes } from "../../configuration/routes";
import EventTime from "../../pages/Events/EventTime";
import AvatarLink from "../AvatarLink";
import IconButton from "../IconButton";
import "./styles.css";

export default function EventCard({ event }) {
  const ref = useRef();
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (ref?.current) {
      // Must be same ratio as 1920x1080
      setHeight(ref?.current?.clientWidth / 1.777778);
    }
  }, [ref]);

  const displayedHosts = useMemo(() => {
    return event.hosts.filter((host) =>
      host.image != Properties.ignoreHostImage);
  }, [event]);

  return (
    <Card className="event-card">
      <Link to={`${PageRoutes.eventTemplateLong}/${event.id}`}>
        <CardMedia
          ref={ref}
          component="img"
          src={event.image_url}
          alt={event.title}
          width="100%"
          height={height}
        />
      </Link>
      <CardContent sx={{ flexGrow: 1 }}>
        <EventTime start={event.time_start} finish={event.time_finish} />
        <Typography sx={{ wordBreak: "break-word" }}>
          {event.title}
        </Typography>
      </CardContent>
      <CardActions>
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
            displayedHosts.map((host, k) =>
              <AvatarLink
                key={k}
                name={host.name}
                href={host.url}
                image={host.image}
              />
            )
          }
        </AvatarGroup>
      </CardActions>
    </Card>
  );
}




