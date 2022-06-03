import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import SparcLogoIcon from "./SparcLogoIcon";

const membershipTypes = [
  ["arc", "Arc Member"],
  ["non-arc", "Non-Arc Member"],
  ["associate", "Associate Member"]
];

export default function MembershipJoin({ society }) {
  return (
    <Box component={Paper} p={3} mb={3}>
      <Typography variant="h5">
        Membership
      </Typography>
      {
        society.fees ?
          <Box mt={2}>
            <MembershipPrice fees={society.fees} />
          </Box> : null
      }
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

function MembershipPrice({ fees }) {
  const prices = [];
  for (const [key, name] of membershipTypes) {
    if (fees[key]) {
      prices.push(
        <Typography key={key}>
          {name}: ${fees[key]}
        </Typography>
      );
    }
  }
  if (prices.length == 0) {
    return <Typography>FREE</Typography>;
  }
  return (
    <React.Fragment>
      {prices}
    </React.Fragment>
  );
}