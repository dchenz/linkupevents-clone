import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { mainCategories } from "./Categories";

export default function CategorySelector(props) {
  return (
    <ButtonGroup orientation="vertical" variant="text">
      {
        mainCategories.map((name, k) =>
          <Button
            key={k}
            variant={props.selected == name ? "contained" : "text"}
            sx={{ justifyContent: "left" }}
            onClick={() => props.onChange(name)}
          >
            {name}
          </Button>
        )
      }
    </ButtonGroup>
  );
}



