"use client";
import Link from "next/link";
import styles from "./SideMenu.module.scss";
import { BsCalendarEventFill, BsGearFill, BsHouseFill, BsPersonFill } from "react-icons/bs";
import clsx from "clsx";

function SideMenu() {
  return (
    <div className={styles.SideMenu}>
      <ul className={styles.itemsGroup}>
        <li>
          <Link className={styles.item} href="/">
            <BsHouseFill />
            <div>Dashboard</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsPersonFill />
            <div>Doctors</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsHouseFill />
            <div>Patients</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsHouseFill />
            <div>Receptionists</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsCalendarEventFill />
            <div>Appointments</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsHouseFill />
            <div>Consultation</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsGearFill />
            <div>Settings</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
