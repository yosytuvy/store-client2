import { Route, Routes } from "react-router-dom";
import ROUTES from "./routerModel";
import Login from "../features/users/pages/Login";
import Signup from "../features/users/pages/Signup";
import Category from "../features/products/pages/Category";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../features/products/pages/ProductPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.signup} element={<Signup />} />
      <Route
        path={ROUTES.category}
        element={
          <Category title="Electrical products" filters={["1", "2", "3"]} />
        }
      />
      <Route path={ROUTES.product} element={<ProductPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
