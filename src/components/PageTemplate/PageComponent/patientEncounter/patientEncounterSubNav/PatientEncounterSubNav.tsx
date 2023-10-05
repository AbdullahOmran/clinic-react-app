import styles from "./PatientEncounterSubNav.module.scss";
import clsx from "clsx";
import Link from "next/link";
function PatientEncounterSubNav() {
  return (
    
      <ul className={styles.itemsGroup}>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true })}
            href="/home/patient-encounter/demographics"
          >
            <div>Demographics</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true })}
            href="/home/patient-encounter/history"
          >
            <div>History</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true })}
            href="/home/patient-encounter/vital-signs"
          >
            <div>Vital Signs</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true })}
            href="/home/patient-encounter/allergies-and-immuzinations"
          >
            <div>Allergies and Immuzinations</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true })}
            href="/home/patient-encounter/risk-factors"
          >
            <div>Risk Factors</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx({ [styles.link]: true })}
            href="/home/patient-encounter/encounter-impression"
          >
            <div>Encounter Immpression</div>
          </Link>
        </li>
      </ul>
    
  );
}
export default PatientEncounterSubNav;
