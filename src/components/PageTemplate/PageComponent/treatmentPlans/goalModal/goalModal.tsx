"use client";
import { useRef } from "react";
import styles from "./goalModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
// import { appendGoal } from "@/redux/treatmentSlice";

function GoalModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Goal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Goal</Form.Label>
            <Form.Control  type="text"  placeholder="Write here" autoFocus />
          </Form.Group>
         
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
        variant="primary" onClick={()=>{
        
          handleClose();
        }}>
          <BsPlusCircle className={styles.icon} />
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GoalModal;
