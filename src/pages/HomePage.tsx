import axios from "axios";
import { Box } from "@mui/material";
import { boxHome, innerBoxHome } from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProducts } from "../features/products/slice";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CategoryInterface from "../features/products/interfaces/categoryInterface";
import getTopFive from "../helpers/getTopFive";
import ProductInterface from "../features/products/interfaces/productInterface";
import CategoriesGrid from "../components/CategoriesGrid";
import ProductsGrid from "../components/ProductsGrid";

const HomePage = () => {
  const categoriesRef = useRef<CategoryInterface[] | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (products && categoriesRef.current) return;
        const { data } = await axios.get("http://localhost:8181/api/products");
        dispatch(setProducts(data));
        const { data: categories } = await axios.get(
          "http://localhost:8181/api/categories"
        );
        categoriesRef.current = categories;
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const topCategories =
    (categoriesRef.current &&
      (getTopFive(categoriesRef.current) as CategoryInterface[])) ||
    [];
  const topProducts =
    (products && (getTopFive(products) as ProductInterface[])) || [];
  const imageURL =
    "https://images.unsplash.com/photo-1560015534-cee980ba7e13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Box
      component="div"
      sx={{
        ...boxHome,
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Box sx={{ innerBoxHome }}>
        <CategoriesGrid
          categories={topCategories}
          navigate={navigate}
          categoriesRef={categoriesRef}
        />
        <ProductsGrid products={topProducts} navigate={navigate} />
        <Box sx={{ textAlign: "center", padding: 10 }}></Box>
      </Box>
    </Box>
  );
};

export default HomePage;
