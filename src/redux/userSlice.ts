"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  // define states
  activeSideMenuItem: number,
  activePatientEncounterSubNavItem: number,
  activeTreatmentPlansSubNavItem: number,
  activeCalendarSubNavItem: number,
  alerts: Array<Array<string>>,
}
const initialState: userState = {
  // initialize states
  activeSideMenuItem: 0,
  activePatientEncounterSubNavItem: 0,
  activeTreatmentPlansSubNavItem: 0,
  activeCalendarSubNavItem: 0,
  alerts: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveSideMenuItem: (state, action) => {
      state.activeSideMenuItem = action.payload ;
  },
  setActivePatientEncounterSubNavItem: (state, action) => {
      state.activePatientEncounterSubNavItem = action.payload ;
  },
  setActiveTreatmentPlansSubNavItem: (state, action) => {
      state.activeTreatmentPlansSubNavItem = action.payload ;
  },
  setActiveCalendarSubNavItem: (state, action)=>{
      state.activeCalendarSubNavItem = action.payload ;
  },
  appendAlert:(state,action)=>{
    state.alerts.push(action.payload);
  },
  },
});

export const { setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
  setActiveTreatmentPlansSubNavItem,
  setActiveCalendarSubNavItem,
  appendAlert,} = userSlice.actions;
export default userSlice.reducer;
