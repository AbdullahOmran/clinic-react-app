"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSideMenuItem,
  setActivePatientEncounterSubNavItem,
} from "@/redux/userSlice";
import { Button, Col, Form, InputGroup, Row, Stack } from "react-bootstrap";
import { patientState, setAddress, setAge, setBloodGroup, setEducation, setEmail, setGender, setMaritalStatus, setName, setOccupation, setPhone } from "@/redux/patientSlice";
import { RootState } from "@/redux/store";
import  usePatient  from "@/api/usePatient";
import { useEffect } from "react";

function Demographics() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActivePatientEncounterSubNavItem(0));
  const patientData:  patientState= useSelector((state: RootState)=>state.patient);
  const patientApi = usePatient();
  useEffect(()=>{
    if (patientData.action == 'edit'){
      patientApi.getPatient(patientData.id);
    }
  });
  return (
    <div className={styles.container}>
      <Form>
        
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Patient ID</Form.Label>
            <InputGroup>
              <InputGroup.Text id="patientID___23jik">ID</InputGroup.Text>
              <Form.Control
                placeholder="ID"
                value = {patientData.id}
                aria-label="ID"
                aria-describedby="patientID___23jik"
                disabled
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              onChange={(e: any) => {
                dispatch(setName(e.target.value));
              }}
              value={patientData.name}
              type="text"
              placeholder="Enter Full Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
            value = {patientData.phone}
            onChange={(e: any) => {
              dispatch(setPhone(e.target.value));
            }}
             type="number" placeholder="Enter Phone Number" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control 
            value = {patientData.age}
            onChange={(e: any) => {
              dispatch(setAge(e.target.value));
            }}
            type="number" placeholder="Enter Age" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
            value = {patientData.email}
            onChange={(e: any) => {
              dispatch(setEmail(e.target.value));
            }}
             type="email" placeholder="Enter Email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Gender</Form.Label>
            <Form.Select
            value = {patientData.gender}
             onChange={(e: any) => {
              dispatch(setGender(e.target.value));
            }}
             defaultValue="Choose...">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Marital Status</Form.Label>
            <Form.Select
            value = {patientData.maritalStatus}
             onChange={(e: any) => {
              dispatch(setMaritalStatus(e.target.value));
            }}
             defaultValue="Choose...">
              <option>Choose...</option>
              <option>Married</option>
              <option>single</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control
            value = {patientData.address}
            onChange={(e: any) => {
              dispatch(setAddress(e.target.value));
            }} type="text" placeholder="Enter Address" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Blood Group</Form.Label>
            <Form.Select 
            value = {patientData.bloodGroup}
            onChange={(e: any) => {
              dispatch(setBloodGroup(e.target.value));
            }}
            defaultValue="Choose...">
              <option>Choose...</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Education</Form.Label>
            <Form.Control
            value = {patientData.education}
            onChange={(e: any) => {
              dispatch(setEducation(e.target.value));
            }} 
            type="text" placeholder="Education" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Occupation</Form.Label>
            <Form.Control
            value = {patientData.occupation}
            onChange={(e: any) => {
              dispatch(setOccupation(e.target.value));
            }}
            type="text" placeholder="Occupation" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          
        <Stack className="mt-3" direction="horizontal" gap={1}>
          <Button onClick={patientApi.submit} className="w-25">Save</Button>  
          <Button className="w-25">Cancel</Button>
          </Stack>
        </Row>
      </Form>
    </div>
  );
}
export default Demographics;
