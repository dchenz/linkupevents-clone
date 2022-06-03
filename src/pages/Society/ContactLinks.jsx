import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SocialsButton from "./SocialsButton";

export default function ContactLinks({ society }) {
  let { email, ...socials } = society.socials;
  // Some societies have email as "0" for some reason
  if (email == "0") {
    email = null;
  }
  const hasSocials = Object.keys(socials).length > 0;
  // Return NULL if no email nor social media links
  if (!email && !hasSocials) {
    return null;
  }
  return (
    <Box component={Paper} p={3}>
      <Typography variant="h5">
        Contact
      </Typography>
      {
        email ?
          <Box my={2}>
            <Typography>
              Email: {email}
            </Typography>
          </Box> : null
      }
      {
        hasSocials ?
          <Box mt={2}>
            {
              Object.entries(socials).map((item, k) =>
                <SocialsButton
                  key={k}
                  type={item[0]}
                  value={item[1]}
                />
              )
            }
          </Box> : null
      }
    </Box>
  );
}