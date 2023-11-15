import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
// import { useAppSelector } from "../../../redux/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductInterface from "../interfaces/productInterface";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type ProductsProps = {
  category: string;
};
const Products: FC<ProductsProps> = ({ category }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductInterface[] | null>(null);
  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8181/api/products/category/${category}`
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsByCategory();
  }, [category]);
  //  const products = useAppSelector((state) =>
  //   state.products.products?.filter((product) => product.category === category)
  // );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.map((product, i) => (
          <ProductCard
            product={product}
            key={i}
            onClick={() => navigate(`/productPage/${product._id}`)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
