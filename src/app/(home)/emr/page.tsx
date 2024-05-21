"use client";
import { useDispatch } from "react-redux";
import styles from "./page.module.scss";
import { setActiveSideMenuItem } from "@/redux/userSlice";
import {  useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import {
  
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
import Button from "@mui/material/Button";
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


export default function Emr(){
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(5));
    const patientsData: patientState = useSelector((state: RootState)=>state.patient);
  const patient = usePatient();
  const router = useRouter();
  useEffect(()=>{
    patient.getPatients();
  },[]);

    return(<>
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
  
                <Button  className="p-1 ms-auto" variant="contained">
                  <BsPlusCircle className={styles.icon} />
                  Add Patient
                  <span className="visually-hidden">unread messages</span>
                </Button>
  
                <Button
                
                className="p-1" variant="contained">
                  <BsPencilSquare className={styles.icon} />
                  Edit Patient
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <Button
               
                 className="p-1" variant="contained">
                  <BsXCircle className={styles.icon} />
                  Delete Patient
                  <span className="visually-hidden">unread messages</span>
                </Button>
              </Stack>
            </Row>
            <Row className="mb-1">
              <h3 className={styles.header}>
                <CiViewList className={styles.viewListIcon} />
                EMR
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
                   
                  </tr>
                </thead>
                <tbody>
                  {Array.from({length: patientsData.patients.length}).map((_,idx)=>(
                  <tr key={idx}>
                    <td>{patientsData.patients[idx].id}</td>
                    <td>{patientsData.patients[idx].first_name + ' ' +patientsData.patients[idx].last_name} </td>
                    <td>{patientsData.patients[idx].age}</td>
                    <td>{patientsData.patients[idx].contact_number}</td>
                    
                  </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      </>);
}