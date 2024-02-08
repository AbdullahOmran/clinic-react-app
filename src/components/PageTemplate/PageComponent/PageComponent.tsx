"use client";
import styles from "./PageComponent.module.scss";
import clsx from "clsx";
// children here are the pages such as the dashboard page with its sub nav
function PageComponent({ children }: { children: React.ReactNode }) {
  return <div className={styles.PageComponent}>{children}</div>;
}

export default PageComponent;
