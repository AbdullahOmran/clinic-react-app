"use client";
import styles from "./Header.module.scss";
import clsx from "clsx";

function Header({
  items,
  logo,
}: {
  items?: React.ReactNode;
  logo?: React.ReactNode;
}) {
  return <header className={styles.Header}></header>;
}

export default Header;
