"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface doctorState {
  activeSideMenuItem: number,
  activePatientEncounterSubNavItem: number,
  activeTreatmentPlansSubNavItem: number,
  activeCalendarSubNavItem: number,
}
const initialState: doctorState = {
  activeSideMenuItem: 0,
  activePatientEncounterSubNavItem: 0,
  activeTreatmentPlansSubNavItem: 0,
  activeCalendarSubNavItem: 0,
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
    setActiveTreatmentPlansSubNavItem: (state, action) => {
        state.activeTreatmentPlansSubNavItem = action.payload ;
    },
    setActiveCalendarSubNavItem: (state, action)=>{
        state.activeCalendarSubNavItem = action.payload ;
    },
  },
});

export const { setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
  setActiveTreatmentPlansSubNavItem,
  setActiveCalendarSubNavItem,
            } = doctorSlice.actions;
export default doctorSlice.reducer;
