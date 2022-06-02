import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SocialsButton from "./SocialsButton";

export default function ContactLinks({ society }) {
  return (
    <Box component={Paper} p={3} mb={3}>
      <Typography variant="h5">
        Contact
      </Typography>
      <Box my={2}>
        <Typography>
          Email: {society.socials.email}
        </Typography>
      </Box>
      <Box mt={2}>
        {
          Object.entries(society.socials).map((item, k) =>
            <SocialsButton
              key={k}
              type={item[0]}
              value={item[1]}
            />
          )
        }
      </Box>
    </Box>
  );
}