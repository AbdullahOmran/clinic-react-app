"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
} from "@/redux/userSlice";
import { Form, Row, Col, InputGroup } from "react-bootstrap";

function VitalSigns() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActivePatientEncounterSubNavItem(2));
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Body Temperature</Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Enter Body Temperature"
                aria-label="ID"
                type="number"
                aria-describedby="BodyTemperature___ik987"
              />
               <InputGroup.Text id="BodyTemperature___ik987">C</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Blood Pressure</Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Enter Blood Pressure"
                aria-label="ID"
                type="number"
                aria-describedby="BloodPressure___ik977"
              />
               <InputGroup.Text id="BloodPressure___ik977">mmHg</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Pulse Rate</Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Enter Pulse Rate"
                aria-label="ID"
                type="number"
                aria-describedby="PulseRate___jk987"
              />
               <InputGroup.Text id="PulseRate___jk987">BPM</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Respiration Rate</Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Enter Respiration Rate"
                aria-label="ID"
                type="number"
                aria-describedby="RespirationRate___ak977"
              />
               <InputGroup.Text id="RespirationRate___ak977">Breaths per Minute</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default VitalSigns;
