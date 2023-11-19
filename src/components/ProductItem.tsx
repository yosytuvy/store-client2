import { FC } from "react";
import ProductInterface from "../features/products/interfaces/productInterface";
import { Box, Grid, Typography } from "@mui/material";
import { boxStyles, innerBoxStyles } from "../styles/styles";
import { NavigateFunction } from "react-router-dom";
import { setProductRating } from "../features/products/slice";
import { useAppDispatch } from "../redux/hooks";
import axios from "axios";

type ProductItemProps = {
  product: ProductInterface;
  navigate: NavigateFunction;
};

const ProductItem: FC<ProductItemProps> = ({ product, navigate }) => {
  const dispatch = useAppDispatch()
  const onClick = async () => {
    try {
      await axios.put(`https://store-epuk.onrender.com/api/products/${product._id}`);
      dispatch(setProductRating(product._id!))
      navigate(`/productPage/${product._id!}`)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid item xs={2}>
      <Box
        component="div"
        onClick={onClick}
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
