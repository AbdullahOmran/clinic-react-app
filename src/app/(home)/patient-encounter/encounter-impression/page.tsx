"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
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
import useAppointment, { appointmentObj } from "@/api/useAppointment";
import { RootState } from "@/redux/store";
import useTreatment from "@/api/useTreatment";
import { useRouter } from "next/navigation";

type appointmentObject = appointmentObj | undefined;

function EncounterImpression() {
  const [showSymptomModal, setShowSymptomModal] = useState(false);
  const handleCloseSymptomModal= () => setShowSymptomModal(false);
  const handleShowSymptomModal = () => setShowSymptomModal(true);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);
  const handleCloseDiagnosisModal= () => setShowDiagnosisModal(false);
  const handleShowDiagnosisModal = () => setShowDiagnosisModal(true);
  const appointmentId = useSelector((state:RootState)=>state.appointment.id);
  const appointmentsList = useSelector((state: RootState)=>state.appointment.appointments);
  const appointmentDetails: appointmentObject = appointmentsList.find((obj)=>obj.id === appointmentId);
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActivePatientEncounterSubNavItem(5));
  const impressions = useSelector((state:RootState)=>state.patient.impression);
  const [impressionId, setImpressionId] = useState(0);
  const treatmentApi = useTreatment();
  const router = useRouter();
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

              <Button {...((appointmentDetails?.appointment_type=="C")&&({disabled:true}))}
              onClick={()=>{
                treatmentApi.submit();
                router.push('/treatment-plans/');
              }}
               className="p-1 ms-auto" variant="primary">
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
              {impressions.map((element, index)=>(
                <ListGroup.Item
                key={index}
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  [styles.item]: true,
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{element.symptom}</div>
                  {element.diagnosis?element.diagnosis:<div>Possible Diagnosis</div>}
                </div>
                <Button onClick={()=>{
                  const impressionId = index;
                  setImpressionId(impressionId);
                  handleShowDiagnosisModal();
                  }} className="p-1" variant="primary">
                  <BsPlusCircle className={styles.icon} />
                  set Diagnosis
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              ))}
              
              
            </ListGroup>
          </Row>
        </Container>
      </div>
      <SymptomModal show={showSymptomModal} handleClose={handleCloseSymptomModal}  />
      <DiagnosisModal impressionId = {impressionId} show={showDiagnosisModal} handleClose={handleCloseDiagnosisModal}  />
    </>
  );
}
export default EncounterImpression;
