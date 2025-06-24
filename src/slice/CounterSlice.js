import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment_counter: (state) => {
      state.count++;
    },
    decrement_counter: (state) => {
      state.count--;
    },
  },
});

export default counterSlice.reducer;
export const { increment_counter, decrement_counter } = counterSlice.actions;
