export const selectProductList = (state) => state.products.productList;

export const selectCartList = (state) => state.products.buyedProducts;

export const selectIsLoading = (state) => state.products.isLoading;
