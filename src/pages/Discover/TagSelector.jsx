import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
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
              <Checkbox
                checked={props.tags.includes(tag)}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.tags.push(tag);
                  } else {
                    props.tags.splice(props.tags.indexOf(tag), 1);
                  }
                  props.onChange([...props.tags]);
                }}
              />
            }
          />
        )
      }
    </FormGroup>
  );
}