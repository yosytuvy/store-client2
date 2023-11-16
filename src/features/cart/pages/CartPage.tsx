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
  console.log(productsInCart);

  return (
    <Box>
      {productsInCart &&
        productsInCart.length &&
        productsInCart.every((p) => p !== undefined) &&
        productsInCart.map((product, i) => (
          <ProductInCartCard key={i} product={product!} />
        ))}
      <Button>checkout</Button>
    </Box>
  );
};

export default CartPage;
