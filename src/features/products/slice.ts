import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductInterface from "./interfaces/productInterface";

interface CurrentState {
  products: ProductInterface[] | null;
}

const initialState: CurrentState = {
  products: null,
};

export const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductInterface[]>) => {
      state.products = action.payload;
    },
    setRating: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.products?.map((product) => {
        if (product._id === id) product.rating += 1;
      });
    },
  },
});

export const { setProducts, setRating } = slice.actions;

export default slice.reducer;
