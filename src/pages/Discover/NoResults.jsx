import { Box, Typography } from "@mui/material";
import React from "react";

export default function NoResults() {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }} py={2}>
      <Typography variant="h5">
        No results 😔
      </Typography>
    </Box>
  );
}