import { ArrowForward, Search } from "@mui/icons-material";
import { FormGroup, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton type="submit">
          <ArrowForward />
        </IconButton>
      </FormGroup>
    </form>
  );
}

