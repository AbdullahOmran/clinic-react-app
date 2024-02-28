
import { createSlice } from "@reduxjs/toolkit";

export interface appointmentState {
  doctorId: number;
  secretaryId: number;
  patientId: number;
  date: string;
  time: any;
}
const initialState: appointmentState = {
    doctorId: -1,
    secretaryId: -1,
    patientId: -1,
    date: '',
    time: '14:00:00',
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
    setDate: (state, action)=>{
        state.date = action.payload;
    },
    setTime: (state, action)=>{
        state.time = action.payload;
    },
  },
});

export const { 
    setDoctorId,
    setSecretaryId,
    setPatientId,
    setDate,
    setTime,
            } = appointmentSlice.actions;
export default appointmentSlice.reducer;