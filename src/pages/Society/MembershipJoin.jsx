import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import SparcLogoIcon from "./SparcLogoIcon";

export default function MembershipJoin({ society }) {
  const isFree = society.fees ?
    Object.values(society.fees).every((cost) => cost == 0) : true;
  return (
    <Box component={Paper} p={3} mb={3}>
      <Typography variant="h5">
        Membership
      </Typography>
      <Box mt={2}>
        {
          isFree ?
            <Typography>FREE</Typography> :
            <React.Fragment>
              <Typography>
                Arc Member: {getPrice(society, "arc")}
              </Typography>
              <Typography>
                Non-Arc Member: {getPrice(society, "non-arc")}
              </Typography>
              <Typography>
                Associate Member: {getPrice(society, "associate")}
              </Typography>
            </React.Fragment>
        }
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          color="custom.sparc"
          href={`https://member.arc.unsw.edu.au/s/clubdetail?clubid=${society.club_id}`}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<SparcLogoIcon />}
        >
          Join on Sparc
        </Button>
      </Box>
    </Box>
  );
}

function getPrice(society, key) {
  if (society.fees) {
    if (society.fees[key] == 0) {
      return "FREE";
    }
    return "$" + society.fees[key];
  }
  return null;
}