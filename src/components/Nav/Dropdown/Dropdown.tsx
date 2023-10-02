"use client";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";

function Dropdown({ className , display="none"}: { className?: string , display?: string}) {
  return (
    <div style={{display:display}} className={clsx({ [styles.content]: true, className: true })}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maiores rerum perspiciatis cum dolores quibusdam iusto accusantium et, hic tenetur.</p>
    </div>
  );
}

export default Dropdown;
