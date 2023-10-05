"use client";
import styles from "./PageTemplate.module.scss";
import DoctorSideMenu from "../SideMenu/doctorSideMenu/doctorSideMenu";
import clsx from "clsx";
import PageComponent from "./PageComponent/PageComponent";

function PageTemplate({node}:{node: React.ReactNode}) {
  return (
    <div className={styles.PageTemplate}>
      <DoctorSideMenu />
      <PageComponent node= {node} />
    </div>
  );
}

export default PageTemplate;
