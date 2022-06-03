import { ArrowForward, Search } from "@mui/icons-material";
import { FormGroup, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import IconButton from "../IconButton";

export default function SearchField(props) {
  const [value, setValue] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.onSearch(value);
    }}>
      <Typography>{props.title}</Typography>
      <FormGroup row>
        <TextField
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="secondary" />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton type="submit">
                <ArrowForward />
              </IconButton>
            )
          }}
          sx={{ flexGrow: 1 }}
          value={value}
          placeholder={props.placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormGroup>
    </form>
  );
}

