"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSideMenuItem,setActivePatientEncounterSubNavItem } from "@/redux/userSlice";
import { Form,Row,Col } from "react-bootstrap";
import { patientState, setAllergies, setImmuzinations } from "@/redux/patientSlice";
import { RootState } from "@/redux/store";

function AllergiesAndImmuzinations() {
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(1));
    dispatch(setActivePatientEncounterSubNavItem(3));
    const patientData:  patientState= useSelector((state: RootState)=>state.patient);
  return (
    <div className={styles.container}>
      <Form>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Allergies</Form.Label>
          <Form.Control
          value = {patientData.allergies}
          onChange={(e: any) => {
            dispatch(setAllergies(e.target.value));
          }}
           as="textarea" rows={5} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Immuzinations</Form.Label>
          <Form.Control
          value = {patientData.immuzinations}
          onChange={(e: any) => {
            dispatch(setImmuzinations(e.target.value));
          }}
           as="textarea" rows={5} />
        </Form.Group>
        </Row>
        </Form>
    </div>
  );
}
export default AllergiesAndImmuzinations;
