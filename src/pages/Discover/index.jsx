import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import getSocieties from "../../api/GetSocieties";
import Loading from "../../components/Loading";
import SearchField from "../../components/SearchField";
import { resolveCategoryValues } from "./Categories";
import CategorySelector from "./CategorySelector";
import SocietyResultsList from "./SocietyResultsList";
import TagSelector from "./TagSelector";

export default function Discover() {
  const [societies, setSocieties] = useState(null);
  const [maxResults, setMaxResults] = useState(0);
  const [page, setPage] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  // Path should only be maximum 2 elements
  // Accounts for the possibility of 2 main categories having the same sub-category
  const [categoryPath, setCategoryPath] = useState(["All"]);

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

  const getNextPage = () => {
    if (societies.length == maxResults) {
      return;
    }
    getSocieties(page + 1, searchString, resolveCategoryValues(categoryPath), selectedTags)
      .then((data) => {
        // Append new data
        setSocieties([...societies, ...data.hits]);
        setPage(page + 1);
      });
  };

  if (societies === null) {
    return <Loading caption="Fetching clubs..." />;
  }

  return (
    <Container>
      <Grid container my={4}>
        <Grid item md={3} width="100%" p={2}>
          <Box component={Paper} p={2}>
            <Typography variant="h6" mb={2}>
              Categories
            </Typography>
            <CategorySelector
              category={categoryPath}
              onClick={setCategoryPath}
            />
          </Box>
          <Box component={Paper} p={2}>
            <Typography variant="h6" mb={2}>
              Filters
            </Typography>
            <TagSelector
              tags={selectedTags}
              onChange={setSelectedTags}
            />
          </Box>
        </Grid>
        <Grid item md={9} width="100%" p={2}>
          <Box component={Paper} p={2} mb={3}>
            <SearchField
              placeholder="Search for a club"
              onSearch={setSearchString}
            />
          </Box>
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