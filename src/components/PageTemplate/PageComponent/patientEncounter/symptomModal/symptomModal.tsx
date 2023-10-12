"use client";
import styles from "./symptomModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

function SymptomModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Symptoms</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Complaint</Form.Label>
            <Form.Control type="text" placeholder="Write here" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Symptom</Form.Label>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item className={styles.item} action >
                Headache
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} action >
                Sneezing
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} action >
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

export default SymptomModal;
