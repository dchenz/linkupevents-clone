import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import TeamGraphic from "./team.png";

export default function About() {
  return (
    <Container>
      <Grid container my={4}>
        <Grid item md={12} py={3}>
          <Typography variant="h3">
            About us
          </Typography>
        </Grid>
        <Grid item md={6} pr={4}>
          <Typography>
            Welcome to LinkUp! LinkUp is a dedicated event tracker for universities.
            Our goal is to centralise events so that it&apos;s easier to find and navigate society events around campus.
            LinkUp is a good place to find new events or societies that you may otherwise not know about,
            as well as a way to interact with the community through the many events.
          </Typography>
          <br />
          <Typography>
            Started at the end of 2019 by UNSW students, LinkUp is mainly a project created in response
            to the lack of visibility of events on campus, especially towards new students
            (such as first years and transfer students). We wanted to be able to find events more easily,
            as we missed a number of free food events just because we didn&apos;t know about them.
            The feeling of discovering a free food event on campus (or any other event) just to find out
            that it took place a few days ago was just too common.
          </Typography>
        </Grid>
        <Grid item md={6} pl={4}>
          <div>
            <img
              src={TeamGraphic}
              alt="Graphic design of the Linkup team"
              width="100%"
            />
            <Typography className="team-caption">
              Our team is composed of multiple computer science and software engineering students, as well as a few commerce students.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}