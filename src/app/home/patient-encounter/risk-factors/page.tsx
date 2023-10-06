"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";

function RiskFactors() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(4));
  return (
    <div className={styles.container}>
      4
    </div>
  );
}
export default RiskFactors;
