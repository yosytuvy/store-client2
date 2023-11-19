import { FC } from "react";
import CategoryInterface from "../features/products/interfaces/categoryInterface";
import { Grid, Typography } from "@mui/material";
import CategoryItem from "./CategoryItem";
import { NavigateFunction } from "react-router-dom";

type CategoriesGridProps = {
  topCategories: CategoryInterface[];
  navigate: NavigateFunction;
};

const CategoriesGrid: FC<CategoriesGridProps> = ({
  topCategories,
  navigate,
}) => {
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{
          padding: 5,
        }}
      >
        Top 5 Categories:
      </Typography>
      <Grid
        container
        spacing={8}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {topCategories.map((category, i) => (
          <CategoryItem
            key={i}
            category={category}
            navigate={navigate}
          />
        ))}
      </Grid>
    </>
  );
};

export default CategoriesGrid;
