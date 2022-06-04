import { Box, Container, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import getSocieties from "../../api/GetSocieties";
import Loading from "../../components/Loading";
import SearchField from "../../components/SearchField";
import { resolveCategoryValues } from "./Categories";
import ExpandableFilters from "./ExpandableFilters";
import SocietyResultsList from "./SocietyResultsList";

export default function DiscoverPage() {
  const [societies, setSocieties] = useState(null);
  const [maxResults, setMaxResults] = useState(0);
  const [page, setPage] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  // Path should only be maximum 2 elements
  // Accounts for the possibility of 2 main categories having the same sub-category
  const [categoryPath, setCategoryPath] = useState(["All"]);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Retrieves page number zero on initial load
  // and when user specifies categories, tags, search query
  useEffect(() => {
    getSocieties(0, searchString, resolveCategoryValues(categoryPath), selectedTags)
      .then((data) => {
        setMaxResults(data.nbHits);
        setSocieties(data.hits);
      });
    if (page != 0) {
      setPage(0);
    }
  }, [searchString, categoryPath, selectedTags]);

  const getNextPage = useCallback(() => {
    if (societies?.length == maxResults) {
      return;
    }
    getSocieties(page + 1, searchString, resolveCategoryValues(categoryPath), selectedTags)
      .then((data) => {
        // Append new data
        setSocieties([...societies, ...data.hits]);
        setPage(page + 1);
      });
  }, [societies]);

  if (societies === null) {
    return <Loading caption="Fetching clubs..." />;
  }

  const filterComponent = <ExpandableFilters
    categoryPath={categoryPath}
    setCategoryPath={setCategoryPath}
    selectedTags={selectedTags}
    setSelectedTags={setSelectedTags}
    expandable={!isLargeScreen}
  />;

  return (
    <Container>
      <Grid container my={4}>
        {
          isLargeScreen ?
            <Grid item lg={3} width="100%" p={2}>
              {filterComponent}
            </Grid> : null
        }
        <Grid item lg={9} width="100%" p={2}>
          <Box component={Paper} p={2} mb={3}>
            <SearchField
              placeholder="Search for a club"
              onSearch={setSearchString}
            />
          </Box>
          {
            isLargeScreen ? null :
              <Box mb={5}>
                {filterComponent}
              </Box>
          }
          <Box mb={2}>
            <Typography>
              Showing {maxResults} results
            </Typography>
          </Box>
          <Box component={Paper} p={2} mb={3}>
            <SocietyResultsList
              results={societies}
              onNext={getNextPage}
              hasMore={societies.length != maxResults}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}