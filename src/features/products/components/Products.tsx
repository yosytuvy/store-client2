import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import products from "../demoData/products";
import { FC } from "react";
// import { useAppSelector } from "../../../redux/hooks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
type ProductsProps = {
  category: string;
};
const Products: FC<ProductsProps> = ({ category }) => {
  // const products = useAppSelector((state) =>
  //   state.products.products?.filter((product) => product.category === category)
  // );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.map(
          (product) =>
            product.category === category && (
              <Grid item xs={2} sm={4} md={4} key={product.id}>
                <Item>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                  />
                  <Box>{product.name}</Box>
                  <Box>Company: {product.company}</Box>
                  <Box>₪{product.price}</Box>
                </Item>
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default Products;
