"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/doctorSlice";
import { Button, Card, CloseButton, Col, Container, Row, Stack } from "react-bootstrap";
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
              <Button className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete All
                <span className="visually-hidden">unread messages</span>
              </Button>
      
              <Button
               
                className="p-1 ms-auto"
                variant="primary"
              >
                <BsPlusCircle className={styles.icon} />
                Add Medication
                <span className="visually-hidden">unread messages</span>
              </Button>
              
              <Button
              
                className="p-1"
                variant="primary"
              >
                <BsPlusCircle className={styles.icon} />
                Add New Medication
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button
                
                className="p-1"
                variant="primary"
              >
                <BsCheckCircle className={styles.icon} />
                Drug Interaction checker
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
          <Row className="g-4">
            
          </Row>
        </Container>
      </div>
      
    </>
  );
}
export default Prescriptions;
