"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
} from "@/redux/userSlice";
import { Form, Row,Col } from "react-bootstrap";
import { patientState, setHistoryOfPresentIllness, setMedicalHistory, setMedications, setSurgicalHistory } from "@/redux/patientSlice";
import { RootState } from "@/redux/store";

function History() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActivePatientEncounterSubNavItem(1));
  const patientData:  patientState= useSelector((state: RootState)=>state.patient);
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Medical History</Form.Label>
          <Form.Control
          value={patientData.medicalHistory}
          onChange={(e: any) => {
            dispatch(setMedicalHistory(e.target.value));
          }}
           as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Surgical History</Form.Label>
          <Form.Control
          value={patientData.surgicalHistory}
          onChange={(e: any) => {
            dispatch(setSurgicalHistory(e.target.value));
          }}
           as="textarea" rows={3} />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>History of present illness</Form.Label>
          <Form.Control 
          value={patientData.historyOfPresentIllness}
          onChange={(e: any) => {
            dispatch(setHistoryOfPresentIllness(e.target.value));
          }}
          as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Medications</Form.Label>
          <Form.Control
          value={patientData.medications}
          onChange={(e: any) => {
            dispatch(setMedications(e.target.value));
          }}
           as="textarea" rows={3} />
        </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default History;
