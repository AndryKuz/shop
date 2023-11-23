import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { bASEUrl } from "../../utils/constants";



export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkAPI) => {
    const {data} = await axios.get(`${bASEUrl}/categories`);
    return data;
    
   
  }
);



export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    cart: [],
    isLoading: false,

  },
  reducers: {
    addItemToCart: (state, {payload}) => {
      let newCart = [...state.cart];

      const foundId = state.cart.find(({ id })=> id === payload.id);
      if(foundId) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
          ? {...item, quantity: payload.quantity || item.quantity + 1}
          : item
        })
      } else {
        newCart.push({...payload, quantity: 1})
        
      }
      state.cart = newCart;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCategory.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getCategory.fulfilled, (state, {payload}) => {
  //       state.list = payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(getCategory.rejected, (state) => {
  //       state.isLoading = false;

  //     });
  // },
});
export const { addItemToCart } = userSlice.actions;

export default userSlice.reducer;
