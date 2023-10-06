"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem,setActiveSubNavItem } from "@/redux/doctorSlice";
import { Form,Row,Col } from "react-bootstrap";

function AllergiesAndImmuzinations() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActiveSubNavItem(3));
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Allergies</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Immuzinations</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        </Row>
        </Form>
    </div>
  );
}
export default AllergiesAndImmuzinations;
