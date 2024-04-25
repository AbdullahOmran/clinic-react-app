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
import { Theme, useTheme } from "@mui/material/styles";
import styles from "./bufferTimeModal.module.scss";
import { Form, Button, Modal, ListGroup, Row, Col } from "react-bootstrap";
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

function BufferTimeModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buffer Time</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <div className={styles.selectGroup}>
                <div className={styles.selectList}>
                  {Array.from({ length: 5 }).map((id, item) => (
                    <Chip
                      label="abdullah"
                      onClick={() => {
                        alert("");
                      }}
                      onDelete={() => {
                        alert("");
                      }}
                    />
                  ))}
                </div>
                <Button>Add</Button>
              </div>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BufferTimeModal;
