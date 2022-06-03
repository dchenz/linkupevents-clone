import React from "react";
import { Checkbox } from "@mui/material";

// Used when there is a set of checkbox values
// that determine if the checkboxes are selected.
export default function SetCheckbox(props) {
  const onChange = (e) => {
    if (e.target.checked) {
      props.set.push(props.item);
    } else {
      props.set.splice(props.set.indexOf(props.item), 1);
    }
    props.onChange([...props.set]);
  };
  return (
    <Checkbox
      checked={props.set.includes(props.item)}
      onChange={onChange}
    />
  );
}