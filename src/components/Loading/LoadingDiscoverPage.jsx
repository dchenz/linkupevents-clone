import { Box, Container, Grid, Skeleton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import SearchField from "../SearchField";

export default function LoadingDiscoverPage() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Container>
      <Grid container my={4}>
        <Grid item lg={3} width="100%" p={2}>
          <Skeleton variant="rectangular" width="100%" height={isLargeScreen ? 300 : 100} />
        </Grid>
        <Grid item lg={9} width="100%" p={2}>
          <Skeleton variant="rectangular" width="100%">
            <Box p={2} mb={3}>
              <SearchField placeholder="" />
            </Box>
          </Skeleton>
          <br />
          <Skeleton variant="rectangular" width="100%" height={400} />
        </Grid>
      </Grid>
    </Container>
  );
}