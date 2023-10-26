"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,

} from "@/redux/doctorSlice";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

function Goals() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  

  return (
    <div className={styles.container}>
     ff
    </div>
  );
}
export default Goals;
