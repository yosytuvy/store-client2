import { Box, Button, Card, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ProductInterface from "../../products/interfaces/productInterface";
import {
  addQuantityOfProduct,
  getQuantityOfProduct,
  subQuantityOfProduct,
} from "../utils/cartUtil";
type ProductInCartCardProps = { product: ProductInterface };

const ProductInCartCard: FC<ProductInCartCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  useEffect(() => {
    const quantity = getQuantityOfProduct(product._id!) as number;
    setQuantity(quantity);
  }, []);
  return (
    <Card>
      <Typography>{product.name}</Typography>
      <Box component="img" src={product.image}></Box>
      <Typography>price: {product.price}</Typography>
      <Button
        onClick={() => {
          {
            subQuantityOfProduct(product._id!);
            if (quantity > 0) setQuantity((q) => (q -= 1));
          }
        }}
      >
        -
      </Button>
      <Typography>quantity: {quantity}</Typography>
      <Button
        onClick={() => {
          addQuantityOfProduct(product._id!);
          setQuantity((q) => (q += 1));
        }}
      >
        +
      </Button>
    </Card>
  );
};

export default ProductInCartCard;
