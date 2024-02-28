
import { createSlice } from "@reduxjs/toolkit";

export interface appointmentState {
  doctorId: number;
  secretaryId: number;
  patientId: number;
  date: Date;
  time: any;
}
const initialState: appointmentState = {
    doctorId: -1,
    secretaryId: -1,
    patientId: -1,
    date: new Date(),
    time: new Date().getTime(),
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setDoctorId: (state, action)=>{
        state.doctorId = action.payload;
    },
    setSecretaryId: (state, action)=>{
        state.secretaryId = action.payload;
    },
    setPatientId: (state, action)=>{
        state.patientId = action.payload;
    },
    date: (state, action)=>{
        state.date = action.payload;
    },
    time: (state, action)=>{
        state.time = action.payload;
    },
  },
});

export const { 
    setDoctorId,
    setSecretaryId,
    setPatientId,
    date,
    time,
            } = appointmentSlice.actions;
export default appointmentSlice.reducer;