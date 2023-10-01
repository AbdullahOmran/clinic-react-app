"use client";
import styles from "./PageComponent.module.scss";
import clsx from "clsx";

function PageComponent({ node }: { node: React.ReactNode }) {
  return <div className={styles.PageComponent}>{node}</div>;
}

export default PageComponent;
