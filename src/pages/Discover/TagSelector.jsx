import { FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import SetCheckbox from "../../components/SetCheckbox";
import { Tags } from "./Tags";

export default function TagSelector(props) {
  return (
    <FormGroup>
      {
        Tags.map((tag, k) =>
          <FormControlLabel
            key={k}
            label={tag}
            control={
              <SetCheckbox
                set={props.tags}
                item={tag}
                onChange={props.onChange}
              />
            }
          />
        )
      }
    </FormGroup>
  );
}
