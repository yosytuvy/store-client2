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
    <Card
      sx={{
        width: "50%",
        margin: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
      }}
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
            sx={{
              backgroundColor: "gold",
              height: 50,
              width: 50,
              borderRadius: "50%",
              margin: 2,
              color: "black",
            }}
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
            variant="contained"
            sx={{
              backgroundColor: "gold",
              height: 50,
              width: 50,
              borderRadius: "50%",
              margin: 2,
              color: "black",
            }}
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
