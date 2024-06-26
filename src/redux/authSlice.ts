"use client";
import { createSlice } from "@reduxjs/toolkit";
import { redirect } from 'next/navigation'
import { loginUser } from "@/utils/authLogic";
import { jwtDecode } from "jwt-decode";
export interface authState {
  user: any,
  authTokens: any,
  isSecretary: boolean,
  isDoctor: boolean,
}
const initialState: authState = {
  user:null,
  authTokens:null,
  isSecretary:false,
  isDoctor:false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload ;
    },
    setAuthTokens: (state, action) => {
        state.authTokens = action.payload ;
    },
    setIsSecretary:(state, action) => {
      state.isSecretary = action.payload;
    },
    setIsDoctor:(state, action) => {
      state.isDoctor = action.payload;
    },
    // login: (state, action) => {
    //   // const res = loginUser(action.payload)
    //   // res.then((value)=>{
    //   //   if (value){
    //   //    // success
    //   //     console.log('success');
    //   //      setAuthTokens(value);
    //   //      setUser(jwtDecode(value.access));
           

    //   //   }else{
    //   //    // error
    //   //     console.log('failed');
    //   //   }  
    //   // });
    //   state.user = 2;
      
      
        
    // },
  },
});

export const { setUser,
    setAuthTokens, setIsSecretary, setIsDoctor
   } = authSlice.actions;
export default authSlice.reducer;
