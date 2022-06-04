import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";
import React from "react";
import CategorySelector from "./CategorySelector";
import TagSelector from "./TagSelector";

export default function ExpandableFilters(props) {
  const selector = (
    <React.Fragment>
      <Box component={Paper} p={2}>
        <Typography variant="h6" mb={2}>
          Categories
        </Typography>
        <CategorySelector
          category={props.categoryPath}
          onClick={props.setCategoryPath}
        />
      </Box>
      <Box component={Paper} p={2}>
        <Typography variant="h6" mb={2}>
          Filters
        </Typography>
        <TagSelector
          tags={props.selectedTags}
          onChange={props.setSelectedTags}
        />
      </Box>
    </React.Fragment>
  );
  if (!props.expandable) {
    return selector;
  }
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore color="secondary" />}>
        <Typography>
          Show filters
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0 !important" }}>
        {selector}
      </AccordionDetails>
    </Accordion>
  );
}