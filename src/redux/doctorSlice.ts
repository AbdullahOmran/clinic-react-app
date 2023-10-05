"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface doctorState {
  activeSideMenuItem: number;
}
const initialState: doctorState = {
  activeSideMenuItem: 0,
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setActiveSideMenuItem: (state, action) => {
        state.activeSideMenuItem = action.payload ;
    },
  },
});

export const { setActiveSideMenuItem} = doctorSlice.actions;
export default doctorSlice.reducer;
