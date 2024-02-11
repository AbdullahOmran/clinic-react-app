"use client";
import { Stack } from "react-bootstrap";
import styles from "./alertsStack.module.scss";
import clsx from "clsx";

function AlertsStack({ children }: { children?: React.ReactNode }) {
  return <Stack className={styles.alerts}>
    {children}
  </Stack>;
}

export default AlertsStack;
