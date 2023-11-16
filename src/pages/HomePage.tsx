import { Typography, Grid, Paper, Box } from "@mui/material";
import categories from "../features/products/demoData/categories";
import MuiSelect from "../components/MUI/MuiSelect";
import { boxStyles, innerBoxStyles } from "../styles/styles";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProducts } from "../features/products/slice";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8181/api/products");
        if (!data) return;
        dispatch(setProducts(data));
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const sortedCategories = [...categories].sort((a, b) => b.rating - a.rating);
  const topCategories = sortedCategories.slice(0, 5);
  const sortedProducts = products && [...products].sort((a, b) => b.rating! - a.rating!) || [];
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
        <Grid
          container
          spacing={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {topCategories.map((category, index) => (
            <Grid item xs={2} key={index}>
              <Box sx={boxStyles}>
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
        <Grid
          container
          spacing={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {topProducts.map((product, index) => (
            <Grid item xs={2} key={index}>
              <Box sx={boxStyles}>
                <Paper>
                  <Typography variant="subtitle1" align="center">
                    {product.name}
                  </Typography>
                  <Box
                    component="img"
                    sx={innerBoxStyles}
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
