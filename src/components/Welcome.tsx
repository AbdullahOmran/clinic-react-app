"use client";
import styles from "./compStyles/Welcome.module.scss";


function Welcome() {
   
  return (
    <div className={styles.button}>
        <span>&nbsp;welcome&nbsp;</span>
        <span className={styles.hoverText} aria-hidden="true">&nbsp;welcome&nbsp;</span>
    </div>
  );
}
export default Welcome;