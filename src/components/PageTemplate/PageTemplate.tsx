"use client";
import styles from "./PageTemplate.module.scss";
import DoctorSideMenu from "../SideMenu/doctorSideMenu/doctorSideMenu";
import clsx from "clsx";
import PageComponent from "./PageComponent/PageComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { jwtDecode } from "jwt-decode";

function PageTemplate({children}:{children: React.ReactNode}) {
  const user = useSelector((state: RootState)=>state.auth.user);
  const router = useRouter();
  
  let authTokens: any = null;
  useEffect(()=>{
    const storedAuthTokens = localStorage.getItem('authTokens');
    if(storedAuthTokens){
       authTokens = JSON.parse(storedAuthTokens);
    }
    
  },[]);
  useEffect(()=>{
    if(!authTokens){
      router.push('/');
    }
  },[]);
  return (
    user &&
    <div className={styles.PageTemplate}>
      <DoctorSideMenu />
      <PageComponent>
        {children}
      </PageComponent>
    </div>
    
  );
}

export default PageTemplate;
