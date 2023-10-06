"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";

function History() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(1));
  return (
    <div className={styles.container}>
      1
    </div>
  );
}
export default History;
