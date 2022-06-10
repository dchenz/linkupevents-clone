import { Box, Container, Skeleton } from "@mui/material";
import React from "react";
import LoadingEventsGrid from "../../components/Loading/LoadingEventsGrid";

export default function LoadingAllEventsPage() {
  return (
    <Container>
      <Box my={4} p={2}>
        <Skeleton variant="rectangular" width="100%" height={200}>
          <Box p={3}></Box>
        </Skeleton>
      </Box>
      <Box p={2}>
        <LoadingEventsGrid />
      </Box>
    </Container>
  );
}


