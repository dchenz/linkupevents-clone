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
            control={<TagCheckbox {...props} label={tag} />}
          />
        )
      }
    </FormGroup>
  );
}

function TagCheckbox(props) {
  const onChange = (e) => {
    if (e.target.checked) {
      props.tags.push(props.label);
    } else {
      props.tags.splice(props.tags.indexOf(props.label), 1);
    }
    props.onChange([...props.tags]);
  };
  return (
    <Checkbox
      checked={props.tags.includes(props.label)}
      onChange={onChange}
    />
  );
}