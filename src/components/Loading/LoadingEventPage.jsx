import { Box, Chip, Container, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

export default function LoadingEventPage() {
  return (
    <Container>
      <Grid container mt={4}>
        <Grid item md={5} width="100%" p={2}>
          <Skeleton variant="rectangular" width="100%" height={250} />
        </Grid>
        <Grid item md={7} width="100%" p={2}>
          <Typography variant="h1">
            <Skeleton variant="h1" />
          </Typography>
          <Box mt={1} display="flex" gap={1}>
            <Skeleton variant="rectangular" width="33%">
              <Chip label="" />
            </Skeleton>
          </Box>
        </Grid>
      </Grid>
      <Grid container mt={2} mb={4}>
        <Grid item md={8} width="100%" display="flex" p={2}>
          <Skeleton variant="rectangular" width="100%" height={400}>
          </Skeleton>
        </Grid>
        <Grid item md={4} width="100%" p={2}>
          <Skeleton variant="rectangular" width="100%" height={400}>
          </Skeleton>
        </Grid>
      </Grid>
    </Container>
  );
}

