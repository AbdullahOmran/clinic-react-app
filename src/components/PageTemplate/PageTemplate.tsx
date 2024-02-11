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
import AlertsStack from "./PageComponent/alertsStack/alertsStack";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import MyAlert from "./PageComponent/alertsStack/Alert";


function PageTemplate({ children }: { children: React.ReactNode }) {
  const alerts = useSelector((state:RootState)=>state.doctor.alerts);
  return (
    <div className={styles.PageTemplate}>
      <DoctorSideMenu />
      <PageComponent>{children}</PageComponent>
      <AlertsStack>
        {Array.from({length:alerts.length}).map((_,id)=>{
          
          return <MyAlert idx = {id} key={id} msg={alerts[id][0]} variant={alerts[id][1]} severity={alerts[id][2]} />
        })}
      </AlertsStack>
    </div>
  );
}

export default PageTemplate;
