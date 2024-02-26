"use client";
import styles from "./CalendarSubNav.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function CalendarSubNav() {
  const activeItem = useSelector((state:RootState)=>state.user.activeCalendarSubNavItem);
  return (
    
      <ul className={styles.itemsGroup}>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===0 })}
            href="/home/calendar/new-appointments/"
          >
            <div>New Appointments</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true , [styles.active]: activeItem ===1})}
            href="/home/calendar/schedule/"
          >
            <div>Schedule</div>
          </Link>
        </li>
        
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===2 })}
            href="/home/calendar/completed/"
          >
            <div>Completed</div>
          </Link>
        </li>
        
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===4 })}
            href="/home/calendar/pending-approvals/"
          >
            <div>Pending-approvals</div>
          </Link>
        </li>
       
      </ul>
    
  );
}
export default CalendarSubNav;
