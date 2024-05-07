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
import styles from "./availabilityModal.module.scss";
import { Form, Button, Modal, ListGroup, Row, Col } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAvailability } from "@/redux/appointmentSettingsSlice";
import useAppointment from "@/api/useAppointment";
import { RootState } from "@/redux/store";

const names = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

function AvailabilityModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) {
  const appointment = useAppointment();
  const appointmentSettingsData = useSelector((state:RootState) => state.appointmentSettings);
  // React.useEffect(() => {
  // appointment.getAppointmentSettings();
  
  // },[]);
  const [dayName, setDayName] = React.useState<string[]>(appointmentSettingsData.availability.days);
  const handleChangeMultiple = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
   
    setDayName(value);
  };

  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: object) => {
    dispatch(setAvailability({...data, days:dayName}));
    handleClose();
  };
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Availability</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="availability-form" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <FormControl sx={{ m: 1,width:"100%"}}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Days
                </InputLabel>
                <Select<string[]>
                  multiple
                  native
                  
                  value={dayName}
                  // @ts-ignore Typings are not considering `native`
                  onChange={handleChangeMultiple}
                  
                  label="Native"
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                >
                  {names.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
                
              </FormControl>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
              
              >
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                 type="time" 
                 value={appointmentSettingsData.availability.start_time}
                 {...register("start_time",{required:true})}
                 />
              </Form.Group>
              <Form.Group
                className="mb-3"
               
              >
                <Form.Label>End Time</Form.Label>
                <Form.Control 
                type="time"
                value={appointmentSettingsData.availability.end_time} 
                {...register("end_time",{required:true})}
                 />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button  type="submit" variant="primary" form="availability-form">
        {/* onClick={handleClose} */}
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AvailabilityModal;
