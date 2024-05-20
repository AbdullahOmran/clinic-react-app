"use client";
import { RootState } from "@/redux/store";
import styles from "./diagnosisModal.module.scss";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setImpression, updateImpressionDiagnosis } from "@/redux/patientSlice";
import { UseFormRegisterReturn, useForm } from "react-hook-form";

function DiagnosisModal({
  show,
  handleClose,
  impressionId,
}: {
  show: boolean;
  handleClose: any;
  impressionId: number;
}) {
  const dispatch = useDispatch();
  const impressions = useSelector((state:RootState)=>state.patient.impression);
  const symptom = useSelector((state:RootState)=>state.patient.symptom);
  const {register, handleSubmit, watch, formState:{errors}} = useForm({});
  const registeredDiagnosis: UseFormRegisterReturn= register('diagnosis', {required: true}); 
  const onSubmit = (data: any)=>{
    dispatch(updateImpressionDiagnosis({id:impressionId, diagnosis:data.diagnosis}));
  handleClose();
   };
  return (
   
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Diagnoses</Modal.Title>
        
      </Modal.Header>
      <Modal.Body>
        <Form  id = "diagnosis-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Diagnosis</Form.Label>
            <Form.Control type="text"
            {...registeredDiagnosis}
            
            placeholder="Write here" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Diagnosis</Form.Label>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item className={styles.item} 
              onClick={(e)=>{
                e.preventDefault();
                dispatch(updateImpressionDiagnosis({id:impressionId, diagnosis:"Flu"}));
                handleClose();
              }}
              action >
                Flu
              </ListGroup.Item>
              <ListGroup.Item className={styles.item} 
              onClick={(e)=>{
                e.preventDefault();
                dispatch(updateImpressionDiagnosis({id:impressionId, diagnosis:"Colds"}));
                handleClose();
              }}
              action >
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
        <Button type="submit" variant="primary" form="diagnosis-form" >
          <BsPlusCircle className={styles.icon} />
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DiagnosisModal;
