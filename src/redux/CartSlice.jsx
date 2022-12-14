import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("Cart/getCart", async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data;
});

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
            state.data = action.payload
            state.loading = 'idle'
        }
    });
  },
});


export const CartActions = CartSlice.actions;

export default CartSlice;