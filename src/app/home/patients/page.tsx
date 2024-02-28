"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSideMenuItem } from "@/redux/userSlice";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import clsx from "clsx";
import {
  BsCheckCircle,
  BsPencilSquare,
  BsPlusCircle,
  BsXCircle,
} from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { patientState, setAction, setId } from "@/redux/patientSlice";
import { useRouter } from "next/navigation";
import usePatient, { PatientObj } from "@/api/usePatient";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";

function Patients() {
  const dispatch = useDispatch();
  const patientsData: patientState = useSelector((state: RootState)=>state.patient);
  const patient = usePatient();
  const router = useRouter();
  dispatch(setActiveSideMenuItem(7));
  const addPatient = ()=>{
    dispatch(setAction('add'));
    router.push('/home/patient-encounter/');
  }
  const editPatient = (pk: number)=>{
    dispatch(setAction('edit'));
    dispatch(setId(pk));
    router.push('/home/patient-encounter/');
  };
  const deletePatient = (pk: number)=>{
    patient.deletePatient(pk);
    router.push('/home/patients/');
  };
  
  useEffect(()=>{
    patient.getPatients();
  });
  const editButton =(pk: number)=> <Button onClick={()=>editPatient(pk)} variant="primary">Edit</Button>;
  const deleteButton =(pk: number)=> <Button onClick={()=>deletePatient(pk)} variant="primary">Delete</Button>;

  const [actionButton, setActionButton] = useState<string>('-');

  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <InputGroup className="w-25" >
                <InputGroup.Text>
                <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                />
              </InputGroup>

              <Button onClick={addPatient} className="p-1 ms-auto" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Patient
                <span className="visually-hidden">unread messages</span>
              </Button>

              <Button
              onClick={()=>setActionButton('Edit')}
              className="p-1" variant="primary">
                <BsPencilSquare className={styles.icon} />
                Edit Patient
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button
              onClick={()=>setActionButton('Delete')}
               className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete Patient
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <CiViewList className={styles.viewListIcon} />
              All Patients
            </h3>
          </Row>
          <Row className="g-4">
            <Table className={styles.table} hover striped responsive="xl">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({length: patientsData.patients.length}).map((_,idx)=>(
                <tr key={idx}>
                  <td>{patientsData.patients[idx].id}</td>
                  <td>{patientsData.patients[idx].first_name + ' ' +patientsData.patients[idx].last_name} </td>
                  <td>{patientsData.patients[idx].age}</td>
                  <td>{patientsData.patients[idx].contact_number}</td>
                  <td> 
                      {actionButton == '-' ? '-': null}
                      {actionButton == 'Edit' ? editButton(patientsData.patients[idx].id): null}
                      {actionButton == 'Delete' ? deleteButton(patientsData.patients[idx].id): null}
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Patients;
