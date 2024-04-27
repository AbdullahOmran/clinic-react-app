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
import { useForm } from "react-hook-form";
import { TimeRange, setBufferTime } from "@/redux/appointmentSettingsSlice";
import { useDispatch } from "react-redux";


function BufferTimeModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {

 const dispatch = useDispatch();
  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  type TimeRange = {
    startTime: string;
    endTime:string;
  }
  const [timeRanges,setTimeRanges] = React.useState<Array<TimeRange>>([]);
  const addChip = (data:any)=>{
    const newArray:Array<TimeRange> = [...timeRanges, data];
   setTimeRanges(newArray);
   
  };
 const onSubmit = ()=>{
  const data:Array<TimeRange> = [...timeRanges];
dispatch(setBufferTime(data));
handleClose();
 };
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buffer Time</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row>
            <Col>
              <div className={styles.selectGroup}>
                <div className={styles.selectList}>
                  {timeRanges.map((item, id) => (
                    <Chip
                      key={id}
                      label={item.startTime+" to "+item.endTime}
                      onClick={() => {
                        alert("chip clicked");
                      }}
                      onDelete={() => {
                        const data:Array<TimeRange> = [...timeRanges];
                        data.splice(id,1);
                        setTimeRanges(data);
                      }}
                    />
                  ))}
                </div>
                <Button type="submit" form="buffer-timerange-form">Add</Button>
              </div>
            </Col>
            <Col>
            <Form id="buffer-timerange-form" onSubmit={handleSubmit(addChip)}>

              <Form.Group className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                {...register("startTime",{required:true})}
                type="time" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                 {...register("endTime",{required:true})}

                type="time" />
              </Form.Group>
            </Form>
            </Col>
          </Row>
        </div>
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
