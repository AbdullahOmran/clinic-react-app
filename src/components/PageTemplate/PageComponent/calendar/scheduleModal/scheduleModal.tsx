"use client";
import styles from "./ScheduleModal.module.scss";
import {
  Form,
  Button,
  Modal,
  ListGroup,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { BsCapsule, BsPlusCircle, BsStopwatch } from "react-icons/bs";
import { FaSyringe } from "react-icons/fa6";

function ScheduleModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Schedule New Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <div className="fw-bold">
            Appointment Type
            </div>
          </Row>
          <Row>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                label="New Inspection"
                checked
              />
            </Col>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                label="Consultation"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Available Time Slots</Form.Label>
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
                <Form.Label className="fw-bold">Patient name</Form.Label>
                <Form.Control type="text" placeholder="Search..." autoFocus />
              </Form.Group>
              <ListGroup className={styles.listGroup}>
                <ListGroup.Item className={styles.item} action>
                  Ahmed
                </ListGroup.Item>
                <ListGroup.Item className={styles.item} action>
                  Mohamed
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          <BsPlusCircle className={styles.icon} />
          Schedule
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ScheduleModal;
