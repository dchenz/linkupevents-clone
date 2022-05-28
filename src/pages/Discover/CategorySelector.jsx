import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { mainCategories, subCategoryMappings } from "./Categories";
import "./styles.css";

export default function CategorySelector(props) {
  const [mainCategory, subCategory] = props.category;
  return (
    <ButtonGroup
      orientation="vertical"
      variant="text"
      className="society-categories"
    >
      {
        mainCategories.map((name, k) =>
          <React.Fragment key={k}>
            <CategoryButton
              selected={mainCategory === name}
              onClick={() => props.onClick([name])}
            >
              {name}
            </CategoryButton>
            {
              props.category[0] === name ?
                <ExpandedCategorySelector
                  mainCategory={mainCategory}
                  subCategory={subCategory}
                  onClick={props.onClick}
                /> : null
            }
          </React.Fragment>
        )
      }
    </ButtonGroup>
  );
}

function ExpandedCategorySelector(props) {
  const subcategories = subCategoryMappings[props.mainCategory];
  // Category has no sub-categories
  if (!(subcategories?.length)) {
    return null;
  }
  return (
    <ButtonGroup
      orientation="vertical"
      variant="text"
      className="society-categories group-nested"
    >
      {
        subcategories.map((name, k) =>
          <CategoryButton
            key={k}
            selected={props.subCategory === name}
            onClick={() => props.onClick([props.mainCategory, name])}
          >
            {name}
          </CategoryButton>
        )
      }
    </ButtonGroup>
  );
}

function CategoryButton(props) {
  return (
    <Button
      variant={props.selected ? "contained" : "text"}
      onClick={props.onClick}
      disableRipple
    >
      {props.children}
    </Button>
  );
}