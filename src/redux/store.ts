"use client";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import  doctorSlice  from "./doctorSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        doctor: doctorSlice,
        auth: authSlice,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
