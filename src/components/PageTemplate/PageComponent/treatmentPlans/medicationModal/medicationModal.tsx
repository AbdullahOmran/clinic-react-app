"use client";
import { useRef } from "react";
import styles from "./medicationModal.module.scss";
import { Form, Button, Modal, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { BsCapsule, BsPlusCircle, BsStopwatch } from "react-icons/bs";
import { FaSyringe } from "react-icons/fa6";
import { useDispatch } from "react-redux";
// import { appendMedication } from "@/redux/treatmentSlice";

function MedicationModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  
  return (
    <Modal className={styles.modal} size = "lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Medications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              
              <Form.Group className="mb-3">
                <Form.Label>Select Medication</Form.Label>
                <ListGroup className={styles.listGroup}>
                  <ListGroup.Item className={styles.item} action>
                    Flurest
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.item} action>
                    Comitrex
                  </ListGroup.Item>
                </ListGroup>
              </Form.Group>
            </Col>
            <Col className="my-auto">
            <Form.Group className="mb-3">
                <Form.Label>Medication name</Form.Label>
                <Form.Control  type="text" placeholder="Search..." autoFocus />
              </Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Text><BsCapsule/></InputGroup.Text>
                <Form.Control
                type="text"
               
                  placeholder="Dosage"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text><FaSyringe/></InputGroup.Text>
                <Form.Control
                type="number"
            
                  placeholder="Frequency"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text><BsStopwatch/></InputGroup.Text>
                <Form.Control
                type="number"
        
                  placeholder="Duration"
                />
              </InputGroup>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{
          
          handleClose();}}>
          <BsPlusCircle className={styles.icon} />
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MedicationModal;
