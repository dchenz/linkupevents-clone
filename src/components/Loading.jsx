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

// Will move into global theming later
const color = "#e34329";

export default function Loading(props) {
  return (
    <Box sx={loadingStyles}>
      <BounceLoader
        size={128}
        color={color}
        pr={3}
      />
      <Typography
        variant="h4"
        color={color}
        pl={3}
      >
        {props.caption}
      </Typography>
    </Box>
  );
}