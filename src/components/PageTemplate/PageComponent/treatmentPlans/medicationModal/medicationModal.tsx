"use client";
import styles from "./medicationModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

function MedicationModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Medications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Medication</Form.Label>
            <Form.Control type="text" placeholder="Search..." autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Medication</Form.Label>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item className={styles.item} action >
                Flurest
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} action >
                Comitrex
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

export default MedicationModal;
