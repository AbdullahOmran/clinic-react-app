"use client";
import styles from "./PatientEncounterSubNav.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function PatientEncounterSubNav() {
  const activeItem = useSelector((state:RootState)=>state.user.activePatientEncounterSubNavItem);
  const isDoctor = useSelector((state: RootState)=>state.auth.isDoctor);
  const isSecretary = useSelector((state: RootState)=>state.auth.isSecretary);
  return (
    
      <ul className={styles.itemsGroup}>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===0 })}
            href="/home/patient-encounter/demographics"
          >
            <div>Patient Demographics</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true , [styles.active]: activeItem ===1})}
            href="/home/patient-encounter/history"
          >
            <div>History</div>
          </Link>
        </li>
        {isDoctor &&
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===2 })}
            href="/home/patient-encounter/vital-signs"
          >
            <div>Vital Signs</div>
          </Link>
        </li>
        }
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===3 })}
            href="/home/patient-encounter/allergies-and-immuzinations"
          >
            <div>Allergies and Immuzinations</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===4 })}
            href="/home/patient-encounter/risk-factors"
          >
            <div>Risk Factors</div>
          </Link>
        </li>
        {isDoctor &&
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true, [styles.active]: activeItem ===5 })}
            href="/home/patient-encounter/encounter-impression"
          >
            <div>Encounter Impression</div>
          </Link>
        </li>
        }
      </ul>
    
  );
}
export default PatientEncounterSubNav;
