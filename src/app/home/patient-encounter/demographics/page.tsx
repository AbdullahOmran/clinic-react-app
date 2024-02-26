"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
} from "@/redux/userSlice";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

function Demographics() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActivePatientEncounterSubNavItem(0));
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Patient ID</Form.Label>
            <InputGroup>
              <InputGroup.Text id="patientID___23jik">ID</InputGroup.Text>
              <Form.Control
                placeholder="ID"
                aria-label="ID"
                aria-describedby="patientID___23jik"
                disabled
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Marital Status</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Married</option>
            <option>single</option>
          </Form.Select>
        </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Blood Group</Form.Label>
            <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" placeholder="Education" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Occupation</Form.Label>
            <Form.Control type="text" placeholder="Occupation" />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default Demographics;
