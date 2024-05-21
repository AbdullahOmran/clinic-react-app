"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/userSlice";
import {  Card, CloseButton, Col, Container, Row, Stack } from "react-bootstrap";
import { Button } from "@mui/material";
import { BsCheckCircle, BsPlusCircle, BsXCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import MedicationModal from "@/components/PageTemplate/PageComponent/treatmentPlans/medicationModal/medicationModal";
import clsx from "clsx";
import { RootState } from "@/redux/store";

function Interventions() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  dispatch(setActiveTreatmentPlansSubNavItem(1));
  const [showMedicationModal, setShowMedicationModal] = useState(false);
  const handleCloseMedicationModal= () => setShowMedicationModal(false);
  const handleShowMedicationModal = () => setShowMedicationModal(true);
  const encounterMedications = useSelector((state:RootState)=>state.treatment.medications);
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <Button className="p-1" variant="contained">
                <BsXCircle className={styles.icon} />
                Delete All
                <span className="visually-hidden">unread messages</span>
              </Button>
      
              <Button
                onClick={handleShowMedicationModal}
                className="p-1 ms-auto"
                variant="contained"
              >
                <BsPlusCircle className={styles.icon} />
                Add Medication
                <span className="visually-hidden">unread messages</span>
              </Button>
              
              <Button
                onClick={handleShowMedicationModal}
                className="p-1"
                variant="contained"
              >
                <BsPlusCircle className={styles.icon} />
                Add New Medication
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button
                onClick={handleShowMedicationModal}
                className="p-1"
                variant="contained"
              >
                <BsCheckCircle className={styles.icon} />
                Drug Interaction checker
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <CiViewList className={styles.viewListIcon} />
              Medications List
            </h3>
          </Row>
          <Row xl={4} md={2} className="g-4">
            {encounterMedications.map((medication: any, idx) => (
              <Col key={idx}>
                <Card className={clsx({"position-relative":true, [styles.card]:true})}>
                  <CloseButton className="position-absolute end-0 p-2"/>
                  <Card.Img variant="top" src="/images/drug_img.jpg" />
                  <Card.Body>
                    <Card.Title>{medication.name}</Card.Title>
                    <Card.Text>
                      <p className="m-1"><span className="fw-bold">Dosage:</span> {medication.dosage} mg</p>
                      <p className="m-1"><span className="fw-bold">Frequency:</span> {medication.frequency} daily</p>
                      <p className="m-1"><span className="fw-bold">Duration:</span> {medication.duration} weeks</p>
                      <p className="m-1"><span className="fw-bold">Route:</span> orally or topically</p>
                      <p className="m-1"><span className="fw-bold">Instructions:</span> with food, at bedtime</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <MedicationModal show={showMedicationModal} handleClose={handleCloseMedicationModal}  />
    </>
  );
}
export default Interventions;
