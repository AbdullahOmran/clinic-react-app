"use client";
import { ReactNode } from "react";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";

function Dropdown({ children, className , display="none"}: {children?:React.ReactNode, className?: string , display?: string}) {
  return (
    <div style={{display:display}} className={clsx({ [styles.content]: true, className: true })}>
        {children}
    </div>
  );
}

export default Dropdown;
