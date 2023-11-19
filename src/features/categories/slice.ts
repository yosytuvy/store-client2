import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CategoryInterface from "../products/interfaces/categoryInterface";

interface CurrentState {
  categories: CategoryInterface[] | null;
}

const initialState: CurrentState = {
  categories: null,
};

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryInterface[]>) => {
      state.categories = action.payload;
    },
    setCategoryRating: (state, action: PayloadAction<string>) => {
      state.categories?.find((category) => {
        if (category.name === action.payload) category.rating += 1;
      });
    },
  },
});

export const { setCategories, setCategoryRating } = slice.actions;

export default slice.reducer;
