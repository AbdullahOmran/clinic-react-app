"use client";
import { RootState } from "@/redux/store";
import styles from "./ScheduleModal.module.scss";
import {
  Form,
  Button,
  Modal,
  ListGroup,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { BsCapsule, BsPlusCircle, BsStopwatch } from "react-icons/bs";
import { FaSyringe } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { setDoctorId, setPatientId, setSecretaryId } from "@/redux/appointmentSlice";
import usePatient from "@/api/usePatient";
import useAppointment from "@/api/useAppointment";

function ScheduleModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  const dispatch = useDispatch();
  const appointmentApi = useAppointment();
  const patientList = useSelector((state: RootState) => state.patient.patients);
  const user = useSelector((state: RootState) => state.auth.user);
  const patient = usePatient();
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    patient.getPatients();
    dispatch(setSecretaryId(user.secretary_id));
  },[]);
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Schedule New Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <div className="fw-bold">Doctor</div>
          </Row>
          <Row className="mb-2">
            <Form.Select onChange={(e)=>dispatch(setDoctorId(Number(e.currentTarget.value)))} className="w-50 mx-2">
              <option value={-1}>Choose...</option>
              <option value={5}>AbdullahOmran</option>
            </Form.Select>
          </Row>
          <Row>
            <div className="fw-bold">Appointment Type</div>
          </Row>
          <Row>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                label="New Inspection"
                checked
              />
            </Col>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                label="Consultation"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Available Time Slots
                </Form.Label>
                <ListGroup className={styles.listGroup}>
                  {Array.from({ length: patientList.length }).map((_, idx) => (
                    <ListGroup.Item
                      key={idx}
                      onClick={(e) => e.preventDefault()}
                      className={styles.item}
                      action
                    >
                      {patientList[idx].first_name +
                        " " +
                        patientList[idx].last_name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            </Col>
            <Col className="my-auto">
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Patient name</Form.Label>
                <Form.Control
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  autoFocus
                />
              </Form.Group>
              <ListGroup className={styles.listGroup}>
                {Array.from({ length: patientList.length }).map((_, idx) => (
                  <ListGroup.Item
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      if (searchInputRef.current)
                        searchInputRef.current.value =
                          patientList[idx].first_name +
                          " " +
                          patientList[idx].last_name;
                      dispatch(setPatientId(patientList[idx].id));
                    }}
                    className={styles.item}
                    action
                  >
                    {patientList[idx].first_name +
                      " " +
                      patientList[idx].last_name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{appointmentApi.submit();handleClose()}}>
          <BsPlusCircle className={styles.icon} />
          Schedule
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ScheduleModal;
