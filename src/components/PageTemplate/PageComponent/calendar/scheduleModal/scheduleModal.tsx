"use client";
import { RootState } from "@/redux/store";
import styles from "./scheduleModal.module.scss";
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
import { useEffect, useRef, useState } from "react";
import {
  setAppointmentType,
  setDoctorId,
  setPatientId,
  setSecretaryId,
  setTime,
} from "@/redux/appointmentSlice";
import usePatient from "@/api/usePatient";
import useAppointment from "@/api/useAppointment";
import dayjs from "dayjs";
import custParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import { TimeRange } from "@/redux/appointmentSettingsSlice";

dayjs.extend(custParseFormat);
dayjs.extend(isBetween);

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
    dispatch(setAppointmentType("C"));
  }, []);
  const appointmentSettingsData = useSelector(
    (state: RootState) => state.appointmentSettings
  );
  const bufferTimes = appointmentSettingsData.bufferTime;
  const appointmentDuration = appointmentSettingsData.duration;
  const maxAppointments = appointmentSettingsData.maxAppointments;
  const availableStartTime = dayjs(
    appointmentSettingsData.availability.start_time,
    "HH:mm:ss"
  );
  const availableEndTime = dayjs(
    appointmentSettingsData.availability.end_time,
    "HH:mm:ss"
  );
  const availableSlots = [];
  let slot = availableStartTime;
  let slotStart = dayjs();
  let intersection = false;
  let time_n: any = { start_time: "", end_time: "" };
  // console.log(slot);
  for (let i = 0; i < 150; i++) {
    intersection = false;
    if (availableEndTime.isSame(slot) || availableEndTime.isBefore(slot)) break;
    slotStart = slot;
    slot = slot.add(appointmentDuration, "m");

    for (time_n in bufferTimes) {
      if (
        slotStart.isBetween(
          dayjs(bufferTimes[time_n].start_time, "HH:mm:ss"),
          dayjs(bufferTimes[time_n].end_time, "HH:mm:ss"),
          undefined,
          "[)"
        ) ||
        slot.isBetween(
          dayjs(bufferTimes[time_n].start_time, "HH:mm:ss"),
          dayjs(bufferTimes[time_n].end_time, "HH:mm:ss")
        )
      ) {
        intersection = true;
      }
    }
    if (!intersection) availableSlots.push({ start: slotStart, end: slot });
  }
 const [enabledCheckBox, setEnabledCheckBox] = useState(true);
  return (
    <Modal className={styles.modal} size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Schedule New Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <div className="fw-bold">Doctor</div>
          </Row>
          <Row className="mb-2">
            <Form.Select
              onChange={(e) =>
                dispatch(setDoctorId(Number(e.currentTarget.value)))
              }
              className="w-50 mx-2"
            >
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
                onClick = {()=>{setEnabledCheckBox(false);
                  dispatch(setAppointmentType("I"));
                }}
                checked = {!enabledCheckBox}
              />
            </Col>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                label="Consultation"
                onClick = {()=>{setEnabledCheckBox(true);
                dispatch(setAppointmentType("C"));}}
                checked = {enabledCheckBox}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Available Time Slots
                </Form.Label>
                <Form.Select onChange={(e)=>{alert(enabledCheckBox);dispatch(setTime(e.currentTarget.value))}}>
                {availableSlots.map((obj, idx) => (
                    <option value={obj.start.format("HH:mm:ss")} key={idx}>
                      {obj.start.format("hh:mm a") +
                        " to " +
                        obj.end.format("hh:mm a")}
                    </option>
                  ))}
               
              </Form.Select>
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
        <Button
          variant="primary"
          onClick={() => {
            
            appointmentApi.submit();
            handleClose();
          }}
        >
          <BsPlusCircle className={styles.icon} />
          Schedule
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ScheduleModal;
