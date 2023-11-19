import { Box, Button, Card, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ProductInterface from "../../products/interfaces/productInterface";
import {
  addQuantityOfProduct,
  getQuantityOfProduct,
  subQuantityOfProduct,
} from "../utils/cartUtil";
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
          <Button
            variant="contained"
            sx={ButtonStyle}
            onClick={() => {
              {
                subQuantityOfProduct(product._id!);
                if (quantity > 0) return setQuantity((q) => (q -= 1));
                return 
              }
            }}
          >
            -
          </Button>
          <Typography>quantity: {quantity}</Typography>
          <Button
            variant="contained"
            sx={ButtonStyle}
            onClick={() => {
              addQuantityOfProduct(product._id!);
              setQuantity((q) => (q += 1));
            }}
          >
            +
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductInCartCard;
