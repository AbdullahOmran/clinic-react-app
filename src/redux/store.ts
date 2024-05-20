"use client";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import  doctorSlice  from "./doctorSlice";
import authSlice from "./authSlice";
import patientSlice from "./patientSlice";
import appointmentSlice from "./appointmentSlice";
import appointmentSettingsSlice from "./appointmentSettingsSlice";
import treatmentSlice from "./treatmentSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        doctor: doctorSlice,
        auth: authSlice,
        patient: patientSlice,
        appointment: appointmentSlice,
        appointmentSettings:appointmentSettingsSlice,
        treatment:treatmentSlice,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
