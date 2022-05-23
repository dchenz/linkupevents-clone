import { Box, Typography } from "@mui/material";
import React from "react";
import { BounceLoader } from "react-spinners";

const loadingStyles = {
  width: "100%",
  height: "calc(100vh - 70px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default function Loading(props) {
  return (
    <Box sx={loadingStyles}>
      <BounceLoader
        size={128}
        color={props.color}
        pr={3}
      />
      <Typography
        variant="h4"
        color={props.color}
        pl={3}
      >
        {props.caption}
      </Typography>
    </Box>
  );
}