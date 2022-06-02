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
                Arc Member: ${society.fees["arc"]}
              </Typography>
              <Typography>
                Non-Arc Member: ${society.fees["nn-arc"]}
              </Typography>
              <Typography>
                Associate Member: ${society.fees["associate"]}
              </Typography>
            </React.Fragment>
        }
      </Box>
      <Box mt={2}>
        <Button
          href={`https://member.arc.unsw.edu.au/s/clubdetail?clubid=${society.club_id}`}
          target="_blank"
          rel="noopener noreferrer"
          color="success"
          startIcon={<SparcLogoIcon />}
        >
          Join on Sparc
        </Button>
      </Box>
    </Box>
  );
}