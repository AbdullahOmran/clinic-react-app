"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCalendarSubNavItem,
  setActiveSideMenuItem,
} from "@/redux/userSlice";
import { Badge,  CloseButton, Container, ListGroup, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import clsx from "clsx";
import { CiViewList } from "react-icons/ci";
import { useEffect, useState } from "react";
import Calendar, { TileArgs, TileContentFunc } from "react-calendar";
import { BsCalendarEventFill } from "react-icons/bs";
import { RootState } from "@/redux/store";
import useAppointment from "@/api/useAppointment";
import dayjs, { Dayjs } from "dayjs";
import usePatient from "@/api/usePatient";

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Completed() {
  const dispatch = useDispatch();
  const appointmentApi = useAppointment();
  const appointmentsList = useSelector((state: RootState)=>state.appointment.appointments);
  const appointmentsSettingsData = useSelector((state: RootState)=>state.appointmentSettings);
  const patientsList = useSelector((state: RootState)=>state.patient.patients);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const patient = usePatient();
 
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(2));
  useEffect(()=>{
    patient.getPatients();
    appointmentApi.getAppointments();
   },[]);
  const [calendarValue, calendarOnChange] = useState<Value>(new Date());
  const calendarContent: TileContentFunc = ({
    activeStartDate,
    date,
    view,
  }: TileArgs) => {
    if (date.getMonth() == 1) {
      return (
        <div>
          
        </div>
      );
    } else {
      return null;
    }
  };
  
  return (
    <div className={styles.container}>
      <Container>
        <Row className="mb-1 mt-2">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
             Accepted Appointments
          </h3>
        </Row>
        <Row className="g-4 mb-2">
          <ListGroup as="ol" numbered>
          {Array.from({length: appointmentsList.length}).map((_,idx)=>(
            ((appointmentsList[idx].date==selectedDate.format("YYYY-MM-DD"))&&(appointmentsList[idx].status=="A")&&appointmentsList[idx].patient&&(
            <ListGroup.Item
              as="li"
              key={idx}
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              
              <div className="ms-2 me-auto">
                <div className="fw-bold">{patientsList.find((obj)=>obj.id == appointmentsList[idx].patient)?.first_name
                 + ' ' + patientsList.find((obj)=>obj.id == appointmentsList[idx].patient)?.last_name}</div>
                 {
(appointmentsList[idx].appointment_type == "I")&&
                <Badge bg="primary">New Inspection</Badge>
                 }
                 {
(appointmentsList[idx].appointment_type == "C")&&
                <Badge bg="secondary">Consultation</Badge>
                 }
                
              </div>
              <div className="p-1" >
              {dayjs(appointmentsList[idx].time, "HH:mm:ss").format("hh:mm a")} <span className={styles.interval}>:</span>
              {dayjs(appointmentsList[idx].time, "HH:mm:ss").add(appointmentsSettingsData.duration,'m').format("hh:mm a")}
              </div>
              <CloseButton className="ms-3" />
            </ListGroup.Item>))
            
          ))}
            
          </ListGroup>
        </Row>
        <Row className="mb-1 mt-5">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
             Rejected Appointments
          </h3>
        </Row>
        <Row className="g-4 mb-2">
          <ListGroup as="ol" numbered>
          {Array.from({length: appointmentsList.length}).map((_,idx)=>(
            ((appointmentsList[idx].date==selectedDate.format("YYYY-MM-DD"))&&(appointmentsList[idx].status=="R")&&appointmentsList[idx].patient&&(
            <ListGroup.Item
              as="li"
              key={idx}
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              
              <div className="ms-2 me-auto">
                <div className="fw-bold">{patientsList.find((obj)=>obj.id == appointmentsList[idx].patient)?.first_name
                 + ' ' + patientsList.find((obj)=>obj.id == appointmentsList[idx].patient)?.last_name}</div>
                 {
(appointmentsList[idx].appointment_type == "I")&&
                <Badge bg="primary">New Inspection</Badge>
                 }
                 {
(appointmentsList[idx].appointment_type == "C")&&
                <Badge bg="secondary">Consultation</Badge>
                 }
                
              </div>
              <div className="p-1" >
              {dayjs(appointmentsList[idx].time, "HH:mm:ss").format("hh:mm a")} <span className={styles.interval}>:</span>
              {dayjs(appointmentsList[idx].time, "HH:mm:ss").add(appointmentsSettingsData.duration,'m').format("hh:mm a")}
              </div>
              <CloseButton className="ms-3" />
            </ListGroup.Item>))
            
          ))}
            
          </ListGroup>
        </Row>
        <Row className="mb-1 mt-4">
          <h3>
            <BsCalendarEventFill className={styles.headerIcon} />
            Month View
          </h3>
        </Row>
        <Row className="mb-1 mt-2 d-flex justify-content-center align-items-center">
          <Calendar
            className={styles.calendar}
            tileContent={calendarContent}
            onChange={calendarOnChange}
            value={calendarValue}
            onClickDay={(date:Date)=>{setSelectedDate(dayjs(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,"YYYY-M-D"));
          }}
          />
          <div className="mt-2 ms-4 d-flex justify-content-start align-items-center">
            <div className={styles.redCircle}></div>
            <span>new appointments</span>
            <div className={styles.blueCircle}> </div>
            <span>consultations</span>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Completed;
