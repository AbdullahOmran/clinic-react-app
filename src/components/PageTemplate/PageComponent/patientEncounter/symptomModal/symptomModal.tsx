"use client";
import { useRef } from "react";
import styles from "./symptomModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { UseFormRegisterReturn, useForm } from "react-hook-form";
import { setImpression, setSymptom } from "@/redux/patientSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function SymptomModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  const dispatch = useDispatch();
  const impressions = useSelector((state:RootState)=>state.patient.impression);
  const {register, handleSubmit, watch, formState:{errors}} = useForm({});
  const registeredSymptom: UseFormRegisterReturn= register('symptom', {required: true}); 
  const onSubmit = (data: any)=>{
    dispatch(setImpression([...impressions,{diagnosis:"", symptom:data.symptom}]));

      handleClose();
   };
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Symptoms</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id = "symptom-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Complaint</Form.Label>
            <Form.Control
            {...registeredSymptom}
            type="text" 
            
            placeholder="Write here" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Symptom</Form.Label>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item className={styles.item} 
              onClick={(e)=>{
                e.preventDefault();
                // registeredSymptom.value ="Headache";
                
                dispatch(setImpression([...impressions,{diagnosis:"", symptom:"Headache"}]));
                dispatch(setSymptom("Headache"));
                
                handleClose();
              }}
              
              
               action >
                Headache
              </ListGroup.Item>
              <ListGroup.Item className={styles.item}
              onClick={(e)=>{
                e.preventDefault();
                // registeredSymptom.value ="Sneezing";
                dispatch(setImpression([...impressions,{diagnosis:"", symptom:"Sneezing"}]));
                dispatch(setSymptom("Sneezing"))
                handleClose();
              }}
              action >
                Sneezing
              </ListGroup.Item>
              <ListGroup.Item className={styles.item}
              onClick={(e)=>{
                e.preventDefault();
                // registeredSymptom.value ="Cough";
                dispatch(setImpression([...impressions,{diagnosis:"", symptom:"Cough"}]));
                dispatch(setSymptom("Cough"))
                handleClose();
              }}
              action >
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
        <Button type="submit" variant="primary" form="symptom-form" >
          <BsPlusCircle className={styles.icon} />
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SymptomModal;
