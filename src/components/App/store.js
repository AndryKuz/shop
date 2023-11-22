import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "../../features/api/apiSlice";

import categoriesSlice from "../../features/categories/categoriesSlice";
import productsSlice from "../../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
