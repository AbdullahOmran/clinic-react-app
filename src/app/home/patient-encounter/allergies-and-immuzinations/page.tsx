"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";

function AllergiesAndImmuzinations() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(3));
  return (
    <div className={styles.container}>
      3
    </div>
  );
}
export default AllergiesAndImmuzinations;
