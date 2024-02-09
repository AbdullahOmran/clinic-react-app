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
  
  return (
    
    <div className={styles.PageTemplate}>
      <DoctorSideMenu />
      <PageComponent>
        {children}
      </PageComponent>
    </div>
    
  );
}

export default PageTemplate;
