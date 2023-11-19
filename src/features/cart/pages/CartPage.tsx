import { Box } from "@mui/material";
import ProductInCartCard from "../components/ProductInCartCard";
import { getProductsIds } from "../utils/cartUtil";
import { useAppSelector } from "../../../redux/hooks";
import SignupModal from "../../users/components/SignupModal";

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
      sx={{
        position: "relative",
        width: "100%",
        height: "99%",
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ height: 70 }}></Box>
      <Box display="grid" justifyItems="center">
        {productsInCart &&
          productsInCart.length &&
          productsInCart.every((p) => p !== undefined) &&
          productsInCart.map((product, i) => (
            <ProductInCartCard key={i} product={product!} />
          ))}
        <Box
          sx={{
            margin: 3,
            color: "white",
            backgroundColor: "black",
            borderRadius: 5,
            "&:hover": {
              transform: "scale(1.05)",
              color: "white",
              backgroundColor: "blue",
            },
          }}
        >
          <SignupModal />
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
