import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductInterface from "./interfaces/productInterface";

interface CurrentState {
  products: ProductInterface[] | null;
}

const initialState: CurrentState = {
  products: null,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductInterface[]>) => {
      state.products = action.payload;
    },
    setProductRating: (state, action: PayloadAction< string >) => {
      const  id = action.payload;
      state.products?.map((product) => {
        if (product._id === id) product.rating += 1;
      });
    },
  },
});

export const { setProducts, setProductRating } = slice.actions;

export default slice.reducer;
