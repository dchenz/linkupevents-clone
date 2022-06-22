import { Facebook } from "@mui/icons-material";
import { AvatarGroup, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Properties } from "../../configuration/properties";
import { PageRoutes } from "../../configuration/routes";
import AvatarLink from "../AvatarLink";
import IconButton from "../IconButton";
import EventTime from "./EventTime";
import "./styles.css";

/**
 * This card component is used to display an event.
 *
 * 1) Top image is the event banner photo and links to LinkUp's page for the event.
 * 2) Top line of text is the event time (see EventTime.jsx).
 * 3) Bottom line of text is the event title.
 * 4) Avatar icons will display host images and link to their Facebook pages. Note that hosts without images are not shown here.
 * 5) Facebook icon is added for direct access to event pages on Facebook.
 *
 * @param {{
 *  event: {
 *      hosts: {
 *        name: string,
 *        url: string,
 *        image: string
 *      }[],
 *      id: string,
 *      image_url: string,
 *      title: string,
 *      time_start: Date,
 *      time_finish: Date,
 *      title: string,
 *      url: string,
 *      ...other
 * } }} props
 */
export default function EventCard({ event }) {
  const ref = useRef();
  const [height, setHeight] = useState("auto");

  /*
    Event banner images come in so many different dimensions.
    The image will be set to a specific height on render to ensure consistency across
    event cards being displayed together. This method also preserves aspect ratio.
  */
  useEffect(() => {
    if (ref?.current) {
      // Must be same ratio as 1920x1080
      setHeight(ref?.current?.clientWidth / 1.777778);
    }
  }, [ref]);

  // Don't render host avatars if they don't have images (has default image)
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
          external href={event.url}
          tooltip="View on Facebook"
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



