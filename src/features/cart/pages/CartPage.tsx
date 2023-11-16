import { Box, Button } from "@mui/material";
import ProductInCartCard from "../components/ProductInCartCard";
import { getProductsIds } from "../utils/cartUtil";
import { useAppSelector } from "../../../redux/hooks";

const CartPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const productsIds = getProductsIds();
  const productsInCart = products?.filter((product) => {
    if (productsIds?.includes(product._id!)) return product;
  });

  const imageURL =
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Box
      display="grid"
      justifyItems="center"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: 0,
      }}
    >
      {productsInCart &&
        productsInCart.length &&
        productsInCart.every((p) => p !== undefined) &&
        productsInCart.map((product, i) => (
          <ProductInCartCard key={i} product={product!} />
        ))}
      <Button
        sx={{
          color: "white",
          backgroundColor: "black",
          borderRadius: 5,
          margin: 5,
          "&:hover": {
            transform: "scale(1.05)",
            color: "white",
            backgroundColor: "blue",
          },
        }}
      >
        checkout
      </Button>
    </Box>
  );
};

export default CartPage;
