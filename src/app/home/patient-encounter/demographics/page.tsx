"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem } from "@/redux/doctorSlice";

function Demographics() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
  return (
    <div className={styles.container}>
    </div>
  );
}
export default Demographics;
