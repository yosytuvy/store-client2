import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/slice";
import cartReducer from "../features/cart/slice"
import categoriesReducer from "../features/categories/slice"
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    categories: categoriesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;