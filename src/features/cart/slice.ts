import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInCartInterface } from "./interfaces/cartItemInterface";

interface CurrentState {
  cart: ProductInCartInterface[] | null;
}

const initialState: CurrentState = {
  cart: null,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCartSlice: (
      state,
      action: PayloadAction< ProductInCartInterface >
    ) => {
      const product  = action.payload;
      if (!state.cart) {
        state.cart = [product]
      }
      state.cart.push(product);
    },
    addQuantityOfProductSlice: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      state.cart?.find((product) => {
        if (product.productId === productId) product.quantity += 1;
      });
    },
    subQuantityOfProductSlice: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      state.cart?.find((product) => {
        if (product.productId === productId) product.quantity -= 1;
      });
    },
    removeProductFromCartSlice: (
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
  addProductToCartSlice,
  addQuantityOfProductSlice,
  removeProductFromCartSlice,
  subQuantityOfProductSlice,
} = slice.actions;

export default slice.reducer;
