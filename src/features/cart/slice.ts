import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInCartInterface } from "./interfaces/cartItemInterface";

interface CurrentState {
  cart: ProductInCartInterface[] | null;
}

const initialState: CurrentState = {
  cart: null,
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<{ product: ProductInCartInterface }>
    ) => {
      const { product } = action.payload;
      if (!state.cart) {
        state.cart = [product]
      }
      state.cart.push(product);
    },
    addQuantityOfProduct: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      state.cart?.find((product) => {
        if (product.productId === productId) product.quantity += 1;
      });
    },
    subQuantityOfProduct: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      state.cart?.find((product) => {
        if (product.productId === productId) product.quantity -= 1;
      });
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      const index = state.cart?.findIndex(
        (product) => product.productId === productId
      );
      if (index && index != -1) state.cart?.splice(index, 1);
    },
  },
});

export const {
  addProductToCart,
  addQuantityOfProduct,
  removeProductFromCart,
  subQuantityOfProduct,
} = slice.actions;

export default slice.reducer;
