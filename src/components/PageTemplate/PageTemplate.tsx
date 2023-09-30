"use client";
import styles from "./PageTemplate.module.scss";
import clsx from "clsx";

function PageTemplate({
  sideMenu,
  page,
}: {
  sideMenu?: React.ReactNode;
  page?: React.ReactNode;
}) {
  return <div className={styles.PageTemplate}>
    {sideMenu}
    {page}
  </div>;
}

export default PageTemplate;
