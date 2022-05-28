import { Grid } from "@mui/material";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResults from "./NoResults";
import SocietyCard from "./SocietyCard";

export default function SocietyResultsList(props) {

  if (!props.results?.length) {
    return <NoResults />;
  }

  return (
    <InfiniteScroll
      dataLength={props.results.length}
      next={props.onNext}
      hasMore={props.hasMore}
    >
      <Grid container>
        {
          props.results.map((item, k) =>
            <SocietyCard key={k} society={item} />
          )
        }
      </Grid>
    </InfiniteScroll>
  );
}

