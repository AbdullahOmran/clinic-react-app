"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
    setActiveCalendarSubNavItem,
  setActiveSideMenuItem,
  
} from "@/redux/doctorSlice";


function NewAppointments() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(0));
  return (
    <div className={styles.container}>
      hi
    </div>
  );
}
export default NewAppointments;
