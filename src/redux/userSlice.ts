"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  // define states
  value: number;
}
const initialState: userState = {
  // initialize states
  value: 0,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
