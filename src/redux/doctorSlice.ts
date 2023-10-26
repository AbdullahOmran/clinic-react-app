"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface doctorState {
  activeSideMenuItem: number,
  activePatientEncounterSubNavItem: number,
}
const initialState: doctorState = {
  activeSideMenuItem: 0,
  activePatientEncounterSubNavItem: 0,
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setActiveSideMenuItem: (state, action) => {
        state.activeSideMenuItem = action.payload ;
    },
    setActivePatientEncounterSubNavItem: (state, action) => {
        state.activePatientEncounterSubNavItem = action.payload ;
    },
  },
});

export const { setActiveSideMenuItem,setActivePatientEncounterSubNavItem} = doctorSlice.actions;
export default doctorSlice.reducer;
