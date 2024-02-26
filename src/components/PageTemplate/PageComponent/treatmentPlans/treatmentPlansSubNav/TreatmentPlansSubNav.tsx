"use client";
import styles from "./TreatmentPlansSubNav.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function TreatmentPlansSubNav() {
  const activeItem = useSelector((state:RootState)=>state.user.activeTreatmentPlansSubNavItem);
  return (
    
      <ul className={styles.itemsGroup}>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===0 })}
            href="/home/treatment-plans/goals"
          >
            <div>Goals</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true , [styles.active]: activeItem ===1})}
            href="/home/treatment-plans/interventions"
          >
            <div>Interventions</div>
          </Link>
        </li>
        
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===2 })}
            href="/home/treatment-plans/progress-monitoring"
          >
            <div>Progress Monitoring</div>
          </Link>
        </li>
       
      </ul>
    
  );
}
export default TreatmentPlansSubNav;
