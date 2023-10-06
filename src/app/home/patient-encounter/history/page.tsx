"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveSubNavItem,
} from "@/redux/doctorSlice";
import { Form, Row,Col } from "react-bootstrap";

function History() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActiveSubNavItem(1));
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Medical History</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Surgical History</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>History of present illness</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Medications</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default History;
