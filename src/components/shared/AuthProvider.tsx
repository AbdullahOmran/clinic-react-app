"use client";
import { setAuthTokens, setIsDoctor, setIsSecretary, setUser } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function AuthProvider({ children }: { children: React.ReactNode }){
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector((state: RootState)=>state.auth.user);
    // this flag is used to avoid the first rendering
    const [loading, setLoading] = useState(false);
    interface userDataOptions {
      username?: string;
      doctor_id?: string;
      first_name?: string;
      last_name?: string;
      secretary_id?: string;
    }
  useEffect(()=>{
    const storedAuthTokens = localStorage.getItem('authTokens');
    if(storedAuthTokens){
      const authTokens = JSON.parse(storedAuthTokens);
      dispatch(setAuthTokens(authTokens));
      const userData: userDataOptions = jwtDecode(authTokens.access);
      dispatch(setUser(userData));
      dispatch(setIsDoctor(Boolean(userData?.doctor_id)));
      dispatch(setIsSecretary(Boolean(userData?.secretary_id)));
      setLoading(true);
    }
    
  if((!user) && loading){
      router.push('/');
    }else{
        setLoading(true);
    }
  },[loading]);

    return(
        <>
        {user && loading && children}
        </>
    );
}