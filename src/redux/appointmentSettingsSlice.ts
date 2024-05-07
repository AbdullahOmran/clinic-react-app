
import { createSlice } from "@reduxjs/toolkit";

export type Availability  = {
  start_time: string;
  end_time: string;
  days: string[];
};
export type TimeRange = {
  start_time: string;
  end_time: string;
};
export interface appointmentSettingsState {
  availability: Availability;
  bufferTime: TimeRange[];
  duration: number;
  maxAppointments: number;
}

const initialState: appointmentSettingsState = {
  availability: {
    days:[],
  start_time:"00:00:00",
  end_time:"00:00:00"
},
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