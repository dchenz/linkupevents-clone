import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { BounceLoader } from "react-spinners";
import "./styles.css";

export default function Loading(props) {
  const theme = useTheme();
  return (
    <Box className="loading-splash">
      <BounceLoader
        size={128}
        color={theme.palette.primary.main}
        p={2}
      />
      <Typography
        variant="h4"
        color="primary"
        p={2}
      >
        {props.caption}
      </Typography>
    </Box>
  );
}