"use client";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  
  
} from "@mui/material";
import { Theme, useTheme } from '@mui/material/styles';
import styles from "./availabilityModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import React from "react";




const names = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];



function AvailabilityModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
 
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Availability</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Regular Working Days</Form.Label>
            
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Symptom</Form.Label>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item className={styles.item} action>
                Headache
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} action>
                Sneezing
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} action>
                Cough
              </ListGroup.Item>
            </ListGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          <BsPlusCircle className={styles.icon} />
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AvailabilityModal;
