import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  total: 0,
  price: 900,
  off: 50,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.count = action.payload;
      state.total = state.count * (state.price * (state.off / 100));
    },
    Increase: (state) => {
      state.count++;
      state.total = state.count * (state.price * (state.off / 100));
    },
    Decrease: (state) => {
      state.count--;
      state.total = state.count * (state.price * (state.off / 100));
    },
    Clear: (state) => {
      state.count = 0;
      state.total = 0;
    },
    CheckOut: (state) => {
      state.count = 0;
      state.total = 0;
      state.checkOut = true;
    },
  },
});

export const { Add, Increase, Decrease, Clear, CheckOut } = cartSlice.actions;
export default cartSlice.reducer;
