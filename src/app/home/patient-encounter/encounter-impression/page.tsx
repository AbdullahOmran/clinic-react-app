"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";

function EncounterImpression() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(5));
  return (
    <div className={styles.container}>
      5
    </div>
  );
}
export default EncounterImpression;
