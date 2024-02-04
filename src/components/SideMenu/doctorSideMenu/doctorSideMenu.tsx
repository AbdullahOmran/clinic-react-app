"use client";
import Link from "next/link";
import styles from "./doctorSideMenu.module.scss";
import { BsCalendarEventFill, BsGearFill, BsHouseFill, BsPersonFill } from "react-icons/bs";
import clsx from "clsx";
import {Icon} from "@iconify/react";
import {FaTimeline,FaPaste} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


function DoctorSideMenu() {
  const activeItem = useSelector((state: RootState)=>state.doctor.activeSideMenuItem);

  return (
    <div className={styles.SideMenu}>
      <ul className={styles.itemsGroup}>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===0})} href="/home/dashboard">
            <BsHouseFill />
            <div>Dashboard</div>
          </Link>
        </li>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===1})} href="/home/patient-encounter/demographics">
            <Icon icon="medical-icon:i-family-practice"/>
            <div>Patient Encounter</div>
          </Link>
        </li>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===2})} href="/home/treatment-plans/goals">
            <FaTimeline />
            <div>Treatment Plans</div>
          </Link>
        </li>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===3})} href="/home/prescriptions/">
            <FaPaste />
            <div>Prescriptions</div>
          </Link>
        </li>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===4})} href="/home/calendar/new-appointments/">
            <BsCalendarEventFill />
            <div>Calendar</div>
          </Link>
        </li>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===5})} href="/">
            <Icon icon="medical-icon:i-medical-records"/>
            <div>Medical Records</div>
          </Link>
        </li>
        <li>
          <Link className={clsx({[styles.item]:true,[styles.active]:activeItem===6})} href="/">
            <BsGearFill />
            <div>Settings</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DoctorSideMenu;
