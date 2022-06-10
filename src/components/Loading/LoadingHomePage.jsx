import { Box, Container, Grid, Skeleton } from "@mui/material";
import React from "react";
import LoadingEventsGrid from "../../components/Loading/LoadingEventsGrid";

export default function LoadingHomePage() {
  return (
    <Container>
      <Grid container my={4}>
        <Grid item md={12} width="100%" px={2} py={4}>
          <Skeleton variant="rectangular" width="100%" height={80} />
        </Grid>
        <Grid item md={12} width="100%">
          <Box p={2} mb={3}>
            <LoadingEventsGrid />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

