import { Route, Routes } from "react-router-dom";
import ROUTES from "./routerModel";
import Login from "../features/users/pages/Login";
import Signup from "../features/users/pages/Signup";
import Category from "../features/products/pages/Category";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../features/products/pages/ProductPage";
import CartPage from "../features/cart/pages/CartPage";
import Compare from "../features/products/pages/Compare";
import Checkout from "../features/products/pages/Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.signup} element={<Signup />} />
      <Route
        path={ROUTES.category}
        element={
          <Category/>
        }
      />
      <Route path={ROUTES.productPage} element={<ProductPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path={ROUTES.cartPage} element={<CartPage/>}/>
      <Route path={ROUTES.compare} element={<Compare />} />
      <Route path={ROUTES.checkout} element={<Checkout />} />
    </Routes>
  );
};

export default Router;
