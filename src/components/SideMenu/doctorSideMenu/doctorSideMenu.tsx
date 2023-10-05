"use client";
import Link from "next/link";
import styles from "./doctorSideMenu.module.scss";
import { BsCalendarEventFill, BsGearFill, BsHouseFill, BsPersonFill } from "react-icons/bs";
import clsx from "clsx";
import {Icon} from "@iconify/react";
import {FaTimeline,FaPaste} from "react-icons/fa6";

function DoctorSideMenu() {
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
            <Icon icon="medical-icon:i-family-practice"/>
            <div>Patient Encounter</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <FaTimeline />
            <div>Treatment Plans</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <FaPaste />
            <div>Prescriptions</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <BsCalendarEventFill />
            <div>Calendar</div>
          </Link>
        </li>
        <li>
          <Link className={styles.item} href="/">
            <Icon icon="medical-icon:i-medical-records"/>
            <div>Medical Records</div>
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

export default DoctorSideMenu;
