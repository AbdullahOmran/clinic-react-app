"use client";
import { createSlice } from "@reduxjs/toolkit";
import { redirect } from 'next/navigation'
import { loginUser } from "@/utils/authLogic";
export interface authState {
  user?: any,
  authTokens?: any,
}
const initialState: authState = {
  user:null,
  authTokens:null,
  
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
    login: (state, action) => {
      const res = loginUser(action.payload)
      
      res.then((value)=>{
        if (value){
         // success
          console.log('success');
        }else{
         // error
          console.log('failed');
        }  
      });
        
    },
  },
});

export const { setUser,
    setAuthTokens,
    login,     
   } = authSlice.actions;
export default authSlice.reducer;
