import { Box, Card, IconButton, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ProductInterface from "../../products/interfaces/productInterface";
import {
  addQuantityOfProduct,
  getQuantityOfProduct,
  removeProductFromCart,
  subQuantityOfProduct,
} from "../utils/cartUtil";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { ButtonStyle, cardStyle } from "../styles/styles";
type ProductInCartCardProps = { product: ProductInterface };

const ProductInCartCard: FC<ProductInCartCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  useEffect(() => {
    const quantity = getQuantityOfProduct(product._id!) as number;
    setQuantity(quantity);
  }, []);
  return (
    <Card
      sx={cardStyle}
    >
      <Box
        component="img"
        src={product.image}
        sx={{ width: 250, height: 250, borderRadius: 15 }}
      ></Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ margin: 2 }}>
          {product.name}
        </Typography>
        <Typography sx={{ margin: 2, borderBottom: "1px solid #ccc" }}>
          price: {product.price}$
        </Typography>
        <Box
          sx={{
            display: "flex",
            margin: 3,
            alignItems: "center",
          }}
        >
          <IconButton
            color="primary"
            onClick={() => {
              {
                subQuantityOfProduct(product._id!);
                if (quantity > 0) return setQuantity((q) => (q -= 1));
                removeProductFromCart(product._id!)
              }
            }}
          >
            <RemoveCircleOutline />
          </IconButton>
          <Typography sx={{ color: "blue" }}>{quantity}</Typography>
          <IconButton
            color="primary"
            onClick={() => {
              addQuantityOfProduct(product._id!);
              setQuantity((q) => (q += 1));
            }}
          >
            <AddCircleOutline />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductInCartCard;
