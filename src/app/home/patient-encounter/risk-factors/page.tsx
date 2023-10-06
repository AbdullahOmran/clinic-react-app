"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";
import { Form } from "react-bootstrap";

function RiskFactors() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(4));
  return (
    <div className={styles.container}>
      <Form>
      <Form.Check 
        className="mb-2"
        type="switch"
        label="High Blood Pressure"
      />
      <Form.Check 
        type="switch"
        className="mb-2"
        label="High Cholestrol"
      />
      <Form.Check 
        type="switch"
        className="mb-2"
        label="Smoking"
      />
      <Form.Check 
        type="switch"
        className="mb-2"
        label="Diabetes"
      />
      <Form.Check 
        type="switch"
        className="mb-2"
        label="Obesity"
      />
      <Form.Check 
        type="switch"
        label="Other"
      />
      </Form>
    </div>
  );
}
export default RiskFactors;