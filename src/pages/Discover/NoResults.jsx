import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

export default function NoResults() {
  return (
    <Box className="society-no-results" py={2}>
      <Typography variant="h5">
        No results 😔
      </Typography>
    </Box>
  );
}