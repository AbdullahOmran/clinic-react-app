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
import dayjs  from "dayjs";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Calendar, { TileArgs, TileContentFunc, TileDisabledFunc } from "react-calendar";
import { BsCalendarEventFill } from "react-icons/bs";
import ScheduleModal from "@/components/PageTemplate/PageComponent/calendar/scheduleModal/scheduleModal";
import { setDate } from "@/redux/appointmentSlice";
import useAppointment from "@/api/useAppointment";
import { RootState } from "@/redux/store";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const dayValues = [
  "Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday",
];

function Schedule() {
  const dispatch = useDispatch();
  const appointmentsList = useSelector((state: RootState)=>state.appointment.appointments);
  const appointmentsSettingsData = useSelector((state: RootState)=>state.appointmentSettings);
  const patientsList = useSelector((state: RootState)=>state.patient.patients);
  
  const appointmentApi = useAppointment();
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(1));
  const [calendarValue, calendarOnChange] = useState<Value>(new Date());
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const handleCloseScheduleModal= () => setShowScheduleModal(false);
  const handleShowScheduleModal = (datetime: Date) => {
    setShowScheduleModal(true);
    const date = dayjs(datetime);
    dispatch(setDate(date.format('YYYY-MM-DD')));

    // dispatch(setDate(datetime.toISOString().substring(0,10)));
  };
 useEffect(()=>{
  appointmentApi.getAppointments();
 },[]);
 const days = appointmentsSettingsData.availability.days;
const daysIndices = days.map((day) =>dayValues.indexOf(day));
  const calendarContent: TileContentFunc = ({
    activeStartDate,
    date,
    view,
  }: TileArgs) => {
    
    if (daysIndices.includes(date.getDay())) {
      return (
        <div>
          
          <Badge bg="primary">
            {appointmentsList.filter((obj)=>obj.appointment_type=="I" && obj.date ==dayjs(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,"YYYY-M-D").format('YYYY-MM-DD')).length}
          </Badge>
          <Badge bg="secondary">
            {appointmentsList.filter((obj)=>obj.appointment_type=="C" &&obj.date ==dayjs(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,"YYYY-M-D").format('YYYY-MM-DD')).length}
          </Badge>
          
        </div>
      );
    } else {
      return null;
    }
  };
  const calendarDisabledDays: TileDisabledFunc = ({
    activeStartDate,
    date,
    view,
  }: TileArgs) => {
    return !daysIndices.includes(date.getDay());
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
            (appointmentsList[idx].patient&&(
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
            tileDisabled={calendarDisabledDays}
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
