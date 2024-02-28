"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  BsPlusCircle,
  BsXCircle,
  BsFillClipboard2PulseFill,
} from "react-icons/bs";
import {
  setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
} from "@/redux/userSlice";
import {
  Row,
  Button,
  ListGroup,
  Badge,
  CloseButton,
  Container,
  Stack,
} from "react-bootstrap";
import clsx from "clsx";
import { useEffect, useState } from "react";
import SymptomModal from "@/components/PageTemplate/PageComponent/patientEncounter/symptomModal/symptomModal";
import DiagnosisModal from "@/components/PageTemplate/PageComponent/patientEncounter/diagnosisModal/diagnosisModal";

function EncounterImpression() {
  const [showSymptomModal, setShowSymptomModal] = useState(false);
  const handleCloseSymptomModal= () => setShowSymptomModal(false);
  const handleShowSymptomModal = () => setShowSymptomModal(true);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);
  const handleCloseDiagnosisModal= () => setShowDiagnosisModal(false);
  const handleShowDiagnosisModal = () => setShowDiagnosisModal(true);

  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActivePatientEncounterSubNavItem(5));
  useEffect(()=>{
    
  });
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

              <Button className="p-1 ms-auto" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Create Treatment Plan
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button onClick={handleShowSymptomModal} className="p-1" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Symptom
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <BsFillClipboard2PulseFill className={styles.clipboardIcon} />
              Symptoms & Diagnoses
            </h3>
          </Row>
          <Row className="mb-3">
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  [styles.item]: true,
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Symptom</div>
                  Possible Diagnosis
                </div>
                <Button onClick={handleShowDiagnosisModal} className="p-1" variant="primary">
                  <BsPlusCircle className={styles.icon} />
                  Add Diagnosis
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  [styles.item]: true,
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Symptom</div>
                  Possible Diagnosis
                </div>
                <Button onClick={handleShowDiagnosisModal} className="p-1" variant="primary">
                  <BsPlusCircle className={styles.icon} />
                  Add Diagnosis
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  [styles.item]: true,
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Symptom</div>
                  Possible Diagnosis
                </div>
                <Button onClick={handleShowDiagnosisModal} className="p-1" variant="primary">
                  <BsPlusCircle className={styles.icon} />
                  Add Diagnosis
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  [styles.item]: true,
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Symptom</div>
                  Possible Diagnosis
                </div>
                <Button onClick={handleShowDiagnosisModal} className="p-1" variant="primary">
                  <BsPlusCircle className={styles.icon} />
                  Add Diagnosis
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Container>
      </div>
      <SymptomModal show={showSymptomModal} handleClose={handleCloseSymptomModal}  />
      <DiagnosisModal show={showDiagnosisModal} handleClose={handleCloseDiagnosisModal}  />
    </>
  );
}
export default EncounterImpression;
