
import { appointmentObj } from "@/api/useAppointment";
import { createSlice } from "@reduxjs/toolkit";

export interface appointmentState {
id:number;
  doctorId: number;
  secretaryId: number;
  patientId: number;
  date: string;
  time: any;
  status:string;
  appointment_type: string;
  appointments: Array<appointmentObj>;
}
const initialState: appointmentState = {
    id: -1,
    doctorId: -1,
    secretaryId: -1,
    patientId: -1,
    date: '',
    status:'S',
    appointment_type: 'I',
    time: '14:00:00',
    appointments: [],
  
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointmentId: (state, action)=>{
        state.id = action.payload;
    },
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
    setAppointments: (state, action)=>{
        state.appointments = action.payload;
    },
    setAppointmentType: (state, action)=>{
        state.appointment_type = action.payload;
    },
    setStatus: (state, action)=>{
        state.status = action.payload;
    },
  },
});

export const { 
    setDoctorId,
    setSecretaryId,
    setStatus,
    setPatientId,
    setDate,
    setTime,
    setAppointmentId,
    setAppointments,
    setAppointmentType,
            } = appointmentSlice.actions;
export default appointmentSlice.reducer;