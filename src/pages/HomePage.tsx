import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import categories from "../features/products/demoData/categories";
import products from "../features/products/demoData/products";
import MuiSelect from "../components/MUI/MuiSelect";

const HomePage = () => {
  const sortedCategories = [...categories].sort((a, b) => b.rating - a.rating);
  const topCategories = sortedCategories.slice(0, 5);

  const sortedProducts = [...products].sort((a, b) => b.rating! - a.rating!);
  const topProducts = sortedProducts.slice(0, 5);

  return (
    <>
      <Typography variant="h5">Top 5 Categories:</Typography>
      <Grid container spacing={3}>
        {topCategories.map((category, index) => (
          <Grid item xs={2} key={index}>
            <Paper>
              <Typography variant="subtitle1">{category.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5">Top 5 Products:</Typography>
      <Grid container spacing={3}>
        {topProducts.map((product, index) => (
          <Grid item xs={3} key={index}>
            <Paper>
              <Typography variant="subtitle1">{product.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <MuiSelect />
    </>
  );
};

export default HomePage;

