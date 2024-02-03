"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/doctorSlice";
import { Button, Card, CloseButton, Col, Container, Row, Stack } from "react-bootstrap";
import { BsCheckCircle, BsPlusCircle, BsXCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import MedicationModal from "@/components/PageTemplate/PageComponent/treatmentPlans/medicationModal/medicationModal";
import clsx from "clsx";

function Interventions() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  dispatch(setActiveTreatmentPlansSubNavItem(1));
  const [showMedicationModal, setShowMedicationModal] = useState(false);
  const handleCloseMedicationModal= () => setShowMedicationModal(false);
  const handleShowMedicationModal = () => setShowMedicationModal(true);
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <Button className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete All
                <span className="visually-hidden">unread messages</span>
              </Button>
      
              <Button
                onClick={handleShowMedicationModal}
                className="p-1 ms-auto"
                variant="primary"
              >
                <BsPlusCircle className={styles.icon} />
                Add Medication
                <span className="visually-hidden">unread messages</span>
              </Button>
              
              <Button
                onClick={handleShowMedicationModal}
                className="p-1"
                variant="primary"
              >
                <BsPlusCircle className={styles.icon} />
                Add New Medication
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button
                onClick={handleShowMedicationModal}
                className="p-1"
                variant="primary"
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
            {Array.from({ length: 5 }).map((_, idx) => (
              <Col key={idx}>
                <Card className={clsx({"position-relative":true, [styles.card]:true})}>
                  <CloseButton className="position-absolute end-0 p-2"/>
                  <Card.Img variant="top" src="/images/drug_img.jpg" />
                  <Card.Body>
                    <Card.Title>Lisinopril</Card.Title>
                    <Card.Text>
                      <p className="m-1"><span className="fw-bold">Dosage:</span> 5-40 mg</p>
                      <p className="m-1"><span className="fw-bold">Frequency:</span> once daily</p>
                      <p className="m-1"><span className="fw-bold">Duration:</span> 3 weeks</p>
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
