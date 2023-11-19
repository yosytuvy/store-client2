import { FC } from "react";
import ProductInterface from "../features/products/interfaces/productInterface";
import { NavigateFunction } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import ProductItem from "./ProductItem";

type ProductsGridProps = {
  products: ProductInterface[];
  navigate: NavigateFunction;
};

const ProductsGrid: FC<ProductsGridProps> = ({ products, navigate }) => {
  return (
    <>
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
        {products.map((product, i) => (
          <ProductItem key={i} product={product} navigate={navigate} />
        ))}
      </Grid>
    </>
  );
};

export default ProductsGrid;
