"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCalendarSubNavItem,
  setActiveSideMenuItem,
} from "@/redux/userSlice";
import {
  Badge,
  Button,
  CloseButton,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Calendar, { TileArgs, TileContentFunc } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsCalendarEventFill } from "react-icons/bs";
import ScheduleModal from "@/components/PageTemplate/PageComponent/calendar/scheduleModal/scheduleModal";
import { setDate } from "@/redux/appointmentSlice";
import useAppointment from "@/api/useAppointment";
import { RootState } from "@/redux/store";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Schedule() {
  const dispatch = useDispatch();
  const appointmentsList = useSelector((state: RootState)=>state.appointment.appointments);
  const patientsList = useSelector((state: RootState)=>state.patient.patients);
  const appointmentApi = useAppointment();
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(1));
  const [calendarValue, calendarOnChange] = useState<Value>(new Date());
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const handleCloseScheduleModal= () => setShowScheduleModal(false);
  const handleShowScheduleModal = (datetime: Date) => {
    setShowScheduleModal(true);
    dispatch(setDate(datetime.toISOString().substring(0,10)));
  };
 useEffect(()=>{
  appointmentApi.getAppointments();
 },[]);
  const calendarContent: TileContentFunc = ({
    activeStartDate,
    date,
    view,
  }: TileArgs) => {
    if (date.getMonth() == 1) {
      return (
        <div>
          <Badge bg="primary">{Math.round(Math.random() * 10)}</Badge>
          <Badge bg="secondary">{Math.round(Math.random() * 10)}</Badge>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
    <div className={styles.container}>
      <Container>
        <Row className="mb-1 mt-2">
          <h3>
            <BsCalendarEventFill className={styles.headerIcon} />
            Day View
          </h3>
        </Row>
        <Row className="mb-1 mt-2">
        <ListGroup as="ol" numbered>
          {Array.from({length: appointmentsList.length}).map((_,idx)=>(

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
                <Badge bg="primary">New</Badge>
                
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
              <CloseButton className="ms-3" />
            </ListGroup.Item>
            
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
            onClickDay={handleShowScheduleModal}
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
    <ScheduleModal show={showScheduleModal} handleClose={handleCloseScheduleModal}  />
    </>
  );
}
export default Schedule;
