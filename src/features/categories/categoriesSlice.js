import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { bASEUrl } from "../../components/utils/constants";



export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkAPI) => {
    const {data} = await axios.get(`${bASEUrl}/categories`);
    return data;
    
   
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
