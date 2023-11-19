import { FC } from "react";
import ProductInterface from "../interfaces/productInterface";
import { Box, Grid } from "@mui/material";
import Item from "./Item";

type ProductCardProps = { product: ProductInterface; onClick: () => void };

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <>
      <Grid item xs={2} sm={4} md={4} key={product._id}>
        <Item
          onClick={onClick}
          sx={{
            margin: 3,
            borderRadius: 5,
            backgroundColor: "#cdf7f7",
            "&:hover": {
              transform: "scale(1.02)",
              cursor: "pointer",
            },
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: "100%", maxHeight: "150px", borderRadius: 6 }}
          />
          <Box>{product.name}</Box>
          <Box>Company: {product.company}</Box>
          <Box>${product.price}</Box>
        </Item>
      </Grid>
    </>
  );
};

export default ProductCard;
