import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { bASEUrl } from "../../components/utils/constants";
import { shuffle } from "../../components/utils/common";



export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const {data} = await axios.get(`${bASEUrl}/products`);
    return data;
    
  }
);
const initialState = {
  list: [],
  filtered: [],
  related: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  isLoading: false,
  initialState,
  reducers: {
    filteredLessPrice: (state, {payload}) => {
      state.filtered = state.list.filter(({price}) => price < payload)
    },
    getRelatedProducts: (state, {payload}) => {
      const list = state.list.filter(({ category: { id }}) => id === payload);
      state.related = shuffle(list);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, {payload}) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;

      });
  },
});
export const { filteredLessPrice, getRelatedProducts } = productsSlice.actions;
export default productsSlice.reducer;
