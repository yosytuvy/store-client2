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
  productToCompare?: ProductInterface;
};
const Products: FC<ProductsProps> = ({ category, productToCompare }) => {
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
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {!productToCompare &&
          products?.map((product, i) => (
            <ProductCard
              product={product}
              key={i}
              onClick={() => navigate(`/productPage/${product._id}`)}
            />
          ))}
        {productToCompare &&
          products?.map((product, i) => {
            if (productToCompare._id === product._id) return;
            return (
              <ProductCard
                product={product}
                key={i}
                onClick={() => navigate(`/compare/${product._id}/${productToCompare._id}`)}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default Products;
