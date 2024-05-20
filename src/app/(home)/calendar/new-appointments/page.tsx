"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  appendAlert,
  setActiveCalendarSubNavItem,
  setActiveSideMenuItem,
} from "@/redux/userSlice";
import { Badge, Button, CloseButton, Container, ListGroup, Row } from "react-bootstrap";
import clsx from "clsx";
import { CiViewList } from "react-icons/ci";
import useAxios from "@/utils/useAxios";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import usePatient from "@/api/usePatient";
import useAppointment from "@/api/useAppointment";
import dayjs from "dayjs";
import { setAppointmentId, setDoctorId } from "@/redux/appointmentSlice";
import { useRouter } from "next/navigation";
import { setAction, setId } from "@/redux/patientSlice";

function NewAppointments() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(0));
  const appointmentsList = useSelector((state: RootState)=>state.appointment.appointments);
  const patientsList = useSelector((state: RootState)=>state.patient.patients);
  const patient = usePatient();
  const api = useAxios();
  const appointmentApi = useAppointment();
  useEffect(()=>{
    patient.getPatients();
    appointmentApi.getAppointments();
   },[]);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Container>
        <Row className="mb-1 mt-2">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
            Pending Appointments
          </h3>
        </Row>
        <Row className="g-4 mb-2">
          <ListGroup as="ol" numbered>
          
            
            {Array.from({length: appointmentsList.length}).map((_,idx)=>(
            ((appointmentsList[idx].date==dayjs().format("YYYY-MM-DD"))&&
            (appointmentsList[idx].status=="P")&&(appointmentsList[idx].patient)&&(
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
              <Button 
              onClick={()=>{
                const appointmentId = appointmentsList[idx].id;
                const appointmentType = appointmentsList[idx].appointment_type;
                dispatch(setAppointmentId(appointmentId));
                appointmentApi.update(appointmentId,{status:"A"});
                dispatch(setAction('edit'));
                dispatch(setId(appointmentsList[idx].patient));
                if (appointmentType == "I")
                  router.push('/patient-encounter/');
                else
                  router.push('/treatment-plans/');
              }}
              
              className="p-1" variant="primary">
                Accept
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
            </ListGroup.Item>))
            
          ))}
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}
export default NewAppointments;
