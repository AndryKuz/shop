import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "../../features/categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
    },
})