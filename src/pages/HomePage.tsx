import { Typography, Grid, Box } from "@mui/material";
import MuiSelect from "../components/MUI/MuiSelect";
import {
  boxHome,
  boxStyles,
  innerBoxHome,
  innerBoxStyles,
} from "../styles/styles";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProducts } from "../features/products/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryInterface from "../features/products/interfaces/categoryInterface";

const HomePage = () => {
  const [categories, setCategories] = useState<CategoryInterface[] | null>(
    null
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8181/api/products");
        if (!data) return;
        dispatch(setProducts(data));
        const  {data: categories} = await axios.get("http://localhost:8181/api/categories");
        setCategories(categories)
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const sortedCategories = categories && [...categories].sort((a, b) => b.rating - a.rating) || []
  const topCategories = sortedCategories.slice(0, 5);
  const sortedProducts =
    (products && [...products].sort((a, b) => b.rating! - a.rating!)) || [];
  const topProducts = sortedProducts.slice(0, 5);

  const imageURL =
    "https://images.unsplash.com/photo-1560015534-cee980ba7e13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <Box
        component="div"
        sx={{
          ...boxHome,
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <Box sx={{ innerBoxHome }}>
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
            {topCategories.map((category, index) => (
              <Grid item xs={2} key={index}>
                <Box
                component="div"
                onClick={() => navigate(`/category/${category.name}`)}
                  sx={{
                    ...boxStyles,
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ color: "white" }}
                    >
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
                      src={category.image}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" align="center" sx={{ padding: 5 }}>
            Top 5 Products:
          </Typography>
          <Grid
            container
            spacing={8}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {topProducts.map((product, index) => (
              <Grid item xs={2} key={index}>
                <Box
                  component="div"
                  onClick={() => navigate(`/productPage/${product._id!}`)}
                  sx={{
                    ...boxStyles,
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ color: "white" }}
                    >
                      {product.name}
                    </Typography>
                    <Box
                      component="img"
                      sx={innerBoxStyles}
                      alt="product image"
                      src={product.image}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", padding: 10 }}>
            <MuiSelect />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
