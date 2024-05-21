"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/userSlice";
import {  Card, CloseButton, Col, Container, ListGroup, Row, Stack } from "react-bootstrap";
import Button from "@mui/material/Button";
import { BsCheckCircle, BsPlusCircle, BsXCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import MedicationModal from "@/components/PageTemplate/PageComponent/treatmentPlans/medicationModal/medicationModal";
import clsx from "clsx";

function Prescriptions() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(3));
  
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <Button className="p-1" variant="contained">
                <BsXCircle className={styles.icon} />
                Delete All
                <span className="visually-hidden">unread messages</span>
              </Button>
      
              <Button
               
                className="p-1 ms-auto"
                variant="contained"
              >
                <BsPlusCircle className={styles.icon} />
                Generate Prescription
                <span className="visually-hidden">unread messages</span>
              </Button>
              
             
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <CiViewList className={styles.viewListIcon} />
              Prescriptions List
            </h3>
          </Row>
          <Row className="g-4 mb-2">
          <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Prescription1</div>
                  Date
                </div>
                <Button className="p-1" variant="contained">
                Show
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Prescription2</div>
                  Date
                </div>
                <Button className="p-1" variant="contained">
                Show
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Prescription3</div>
                  Date
                </div>
                <Button className="p-1" variant="contained">
                Show
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                action
                className={clsx({
                  "d-flex justify-content-between align-items-center ": true,
                  
                })}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Prescription4</div>
                  Date
                </div>
                <Button  className="p-1" variant="contained">
                  Show
                  <span className="visually-hidden">unread messages</span>
                </Button>
                <CloseButton className="ms-3" />
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row className="mb-1">
                <div className={styles.viewer}>
                  Select an item to show
                </div>
          </Row>
        </Container>
      </div>
      
    </>
  );
}
export default Prescriptions;
