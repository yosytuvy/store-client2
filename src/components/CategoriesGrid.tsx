import { FC } from "react";
import CategoryInterface from "../features/products/interfaces/categoryInterface";
import { Grid, Typography } from "@mui/material";
import CategoryItem from "./CategoryItem";
import { NavigateFunction } from "react-router-dom";

type CategoriesGridProps = {
  categories: CategoryInterface[];
  navigate: NavigateFunction;
  categoriesRef: React.MutableRefObject<CategoryInterface[] | null>;
};

const CategoriesGrid: FC<CategoriesGridProps> = ({
  categories,
  navigate,
  categoriesRef,
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
        {categories.map((category, i) => (
          <CategoryItem
            key={i}
            category={category}
            navigate={navigate}
            categoriesRef={categoriesRef}
          />
        ))}
      </Grid>
    </>
  );
};

export default CategoriesGrid;
