"use client";
import styles from "./PageTemplate.module.scss";
import DoctorSideMenu from "../SideMenu/doctorSideMenu/doctorSideMenu";
import clsx from "clsx";
import PageComponent from "./PageComponent/PageComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function PageTemplate({children}:{children: React.ReactNode}) {
  const user = useSelector((state: RootState)=>state.auth.user);
  const router = useRouter();
  useEffect(()=>{
    if(!user){
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
