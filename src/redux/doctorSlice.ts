"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface doctorState {
  activeSideMenuItem: number,
  activeSubNavItem: number,
}
const initialState: doctorState = {
  activeSideMenuItem: 0,
  activeSubNavItem: 0,
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setActiveSideMenuItem: (state, action) => {
        state.activeSideMenuItem = action.payload ;
    },
    setActiveSubNavItem: (state, action) => {
        state.activeSubNavItem = action.payload ;
    },
  },
});

export const { setActiveSideMenuItem,setActiveSubNavItem} = doctorSlice.actions;
export default doctorSlice.reducer;
