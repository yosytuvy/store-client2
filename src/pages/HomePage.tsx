// import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
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
      <Box
        sx={{
          textAlign: "center",
          padding: 2,
          display: "flex",
          flexDirection: "column ",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            padding: 5,
          }}
        >
          Top 5 Categories:
        </Typography>
        <Grid container spacing={3}>
          {topCategories.map((category, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: 200,
                    height: 200,
                    borderRadius: 4,
                  },
                }}
              >
                <Paper>
                  <Typography variant="subtitle1" align="center">
                    {category.name}
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 200,
                      width: 200,
                      borderRadius: 4,
                    }}
                    alt="phone image"
                    src={category.url}
                  />
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" align="center" sx={{ padding: 5 }}>
          Top 5 Products:
        </Typography>
        <Grid container spacing={3}>
          {topProducts.map((product, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: 200,
                    height: 200,
                    borderRadius: 4,
                  },
                }}
              >
                <Paper>
                  <Typography variant="subtitle1" align="center">
                    {product.name}
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: "80%",
                      width: 200,
                      borderRadius: 4,
                    }}
                    alt="product image"
                    src={product.image}
                  />
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", padding: 10 }}>
          <MuiSelect />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
