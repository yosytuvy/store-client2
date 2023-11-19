import { FC } from "react";
import ProductInterface from "../features/products/interfaces/productInterface";
import { Box, Grid, Typography } from "@mui/material";
import { boxStyles, innerBoxStyles } from "../styles/styles";
import { NavigateFunction } from "react-router-dom";
type ProductItemProps = {
  product: ProductInterface;
  navigate: NavigateFunction;
};

const ProductItem: FC<ProductItemProps> = ({ product, navigate }) => {
  return (
    <Grid item xs={2}>
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
  );
};

export default ProductItem;
