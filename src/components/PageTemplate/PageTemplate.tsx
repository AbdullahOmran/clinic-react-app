"use client";
import styles from "./PageTemplate.module.scss";
import SideMenu from "../SideMenu/SideMenu";
import clsx from "clsx";
import PageComponent from "./PageComponent/PageComponent";

function PageTemplate({node}:{node: React.ReactNode}) {
  return (
    <div className={styles.PageTemplate}>
      <SideMenu />
      <PageComponent node= {node} />
    </div>
  );
}

export default PageTemplate;
