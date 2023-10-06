"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";

function VitalSigns() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(2));
  return (
    <div className={styles.container}>
      2
    </div>
  );
}
export default VitalSigns;
