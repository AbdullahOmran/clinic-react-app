"use client";
import styles from "./CalendarSubNav.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function CalendarSubNav() {
  const activeItem = useSelector((state:RootState)=>state.user.activeCalendarSubNavItem);
  const isDoctor = useSelector((state: RootState)=>state.auth.isDoctor);
  const isSecretary = useSelector((state: RootState)=>state.auth.isSecretary);
  return (
    
      <ul className={styles.itemsGroup}>
        {isDoctor &&
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===0 })}
            href="/calendar/new-appointments/"
          >
            <div>New Appointments</div>
          </Link>
        </li>
        }
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true , [styles.active]: activeItem ===1})}
            href="/calendar/schedule/"
          >
            <div>Schedule</div>
          </Link>
        </li>
        
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===2 })}
            href="/calendar/completed/"
          >
            <div>Completed</div>
          </Link>
        </li>
        {isDoctor &&
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===4 })}
            href="/calendar/pending-approvals/"
          >
            <div>Pending-approvals</div>
          </Link>
        </li>
        }
       
      </ul>
    
  );
}
export default CalendarSubNav;
