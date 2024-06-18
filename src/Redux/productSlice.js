import { createSlice } from "@reduxjs/toolkit";
import { fetchProductList } from "./operations";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    isLoading: false,
  },
  reducers: {
    switchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { switchLoading } = productSlice.actions;
export const productReducer = productSlice.reducer;
