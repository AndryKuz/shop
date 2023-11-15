import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../components/utils/constants";



export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkAPI) => {
    const res = await axios.get(`${baseUrl}`);
    // return res.data;
    const data = res.data;
    const categories = data.map(item => item.category);
    return categories;
  }
);

const initialState = {
  list: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  isLoading: false,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, {payload}) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(getCategory.rejected, (state) => {
        state.isLoading = false;

      });
  },
});

export default categoriesSlice.reducer;
