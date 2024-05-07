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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TimeRange, setBufferTime } from "@/redux/appointmentSettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";


function BufferTimeModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {

 const dispatch = useDispatch();
 const appointmentSettingsData = useSelector((state:RootState) => state.appointmentSettings);

  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  type TimeRange = {
    start_time: string;
    end_time:string;
  }
  const [timeRanges,setTimeRanges] = React.useState<Array<TimeRange>>([]);
  useEffect(()=>{
    setTimeRanges(appointmentSettingsData.bufferTime);
  },[]);
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
                      label={item.start_time+" to "+item.end_time}
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
                                 

                {...register("start_time",{required:true})}
                type="time" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                 {...register("end_time",{required:true})}

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
        <Button variant="primary" onClick={onSubmit}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BufferTimeModal;
