"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveSubNavItem,
} from "@/redux/doctorSlice";
import { Form, Row, Col, Dropdown, ListGroup } from "react-bootstrap";

function EncounterImpression() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActiveSubNavItem(5));
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
          <Form.Label>Symptoms</Form.Label>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">Headache</ListGroup.Item>
              <ListGroup.Item as="li">Sneezing</ListGroup.Item>
              <ListGroup.Item as="li">Cough</ListGroup.Item>
            </ListGroup>
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Possible Diagnosis</Form.Label>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">Colds</ListGroup.Item>
              <ListGroup.Item as="li">Flu</ListGroup.Item>
            </ListGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Add Symptom
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group as={Col}>
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Add Diagnosis
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default EncounterImpression;
