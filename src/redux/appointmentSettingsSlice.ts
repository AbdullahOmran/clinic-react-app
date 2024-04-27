
import { createSlice } from "@reduxjs/toolkit";

export type Availability  = {
  startTime?: string;
  endTime?: string;
  days?: Array<string>;
};
export type TimeRange = {
  startTime: string;
  endTime: string;
};
export interface appointmentSettingsState {
  availability: Availability;
  bufferTime: Array<TimeRange>;
  duration: number;
  maxAppointments: number;
}

const initialState: appointmentSettingsState = {
  availability: {},
  bufferTime: [],
  duration: 15,
  maxAppointments: 2,
  
};

export const appointmentSettingsSlice = createSlice({
  name: "appointmentSettings",
  initialState,
  reducers: {
    setAvailability: (state, action)=>{
        state.availability = action.payload;
    },
    setBufferTime: (state, action)=>{
        state.bufferTime = action.payload;
    },
    setDuration: (state, action)=>{
        state.duration = action.payload;
    },
    setMaxAppointments: (state, action)=>{
        state.maxAppointments = action.payload;
    },
   
  },
});

export const {   
    setAvailability,
    setBufferTime,
    setDuration,
    setMaxAppointments,
            } = appointmentSettingsSlice.actions;
export default appointmentSettingsSlice.reducer;