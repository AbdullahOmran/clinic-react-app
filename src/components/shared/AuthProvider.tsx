"use client";
import { setAuthTokens, setUser } from "@/redux/authSlice";
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
  useEffect(()=>{
    const storedAuthTokens = localStorage.getItem('authTokens');
    if(storedAuthTokens){
      const authTokens = JSON.parse(storedAuthTokens);
      dispatch(setAuthTokens(authTokens));
      dispatch(setUser(jwtDecode(authTokens.access)));
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