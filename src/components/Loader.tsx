"use client";
import styles from "./compStyles/Loader.module.scss";
import clsx from "clsx";

function Loader() {
  return (
    <div className={styles.loader}>
      <div>
        <svg width="64px" height="48px">
          <polyline
            className={clsx({ [styles.polyline]: true, [styles.back]: true })}
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          ></polyline>
          <polyline
            className={clsx({ [styles.polyline]: true, [styles.front]: true })}
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          ></polyline>
        </svg>
      </div>
      <div className={styles.lowerLoader}>
        <span className={clsx({[styles.span]:true, [styles.backText]:true})}>Loading...</span>
        <span className={clsx({[styles.span]:true, [styles.frontText]:true})}>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
