import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../../features/api/apiSlice";

import categoriesSlice from "../../features/categories/categoriesSlice";
import productsSlice from "../../features/products/productsSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  
});
