"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/doctorSlice";


function Interventions() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  dispatch(setActiveTreatmentPlansSubNavItem(1));
  
  return (
    <div className={styles.container}>
      ff
    </div>
  );
}
export default Interventions;
