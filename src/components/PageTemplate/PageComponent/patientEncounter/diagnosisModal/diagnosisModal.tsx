"use client";
import styles from "./diagnosisModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

function DiagnosisModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Diagnoses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Diagnosis</Form.Label>
            <Form.Control type="text" placeholder="Write here" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Diagnosis</Form.Label>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item className={styles.item} action >
                Flu
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} action >
                Colds
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

export default DiagnosisModal;
