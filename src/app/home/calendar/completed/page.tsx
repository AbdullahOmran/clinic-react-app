"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveCalendarSubNavItem,
  setActiveSideMenuItem,
} from "@/redux/doctorSlice";
import { Badge, Button, CloseButton, Container, ListGroup, Row } from "react-bootstrap";
import clsx from "clsx";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import Calendar, { TileArgs, TileContentFunc } from "react-calendar";
import { BsCalendarEventFill } from "react-icons/bs";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Completed() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(2));
  const [calendarValue, calendarOnChange] = useState<Value>(new Date());
  const calendarContent: TileContentFunc = ({
    activeStartDate,
    date,
    view,
  }: TileArgs) => {
    if (date.getMonth() == 1) {
      return (
        <div>
          <Badge bg="primary">{Math.round(Math.random() * 10)}</Badge>
          <Badge bg="secondary">{Math.round(Math.random() * 10)}</Badge>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className={styles.container}>
      <Container>
        <Row className="mb-1 mt-2">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
             Accepted Appointments
          </h3>
        </Row>
        <Row className="g-4 mb-2">
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Patient Name</div>
                <Badge bg="primary">New</Badge>
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
            </ListGroup.Item>
            
            <ListGroup.Item
              as="li"
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Patient Name</div>
                <Badge bg="secondary">Consultation</Badge>
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
            </ListGroup.Item>
            
            <ListGroup.Item
              as="li"
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Patient Name</div>
                <Badge bg="secondary">Consultation</Badge>
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Row>
        <Row className="mb-1 mt-5">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
             Rejected Appointments
          </h3>
        </Row>
        <Row className="g-4 mb-2">
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Patient Name</div>
                <Badge bg="primary">New</Badge>
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
            </ListGroup.Item>
            
            <ListGroup.Item
              as="li"
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Patient Name</div>
                <Badge bg="secondary">Consultation</Badge>
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
            </ListGroup.Item>
            
            <ListGroup.Item
              as="li"
              action
              className={clsx({
                "d-flex justify-content-between align-items-center ": true,
              })}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Patient Name</div>
                <Badge bg="secondary">Consultation</Badge>
              </div>
              <div className="p-1" >
                02:00 PM <span className={styles.interval}>:</span> 02:20 PM
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Row>
        <Row className="mb-1 mt-4">
          <h3>
            <BsCalendarEventFill className={styles.headerIcon} />
            Month View
          </h3>
        </Row>
        <Row className="mb-1 mt-2 d-flex justify-content-center align-items-center">
          <Calendar
            className={styles.calendar}
            tileContent={calendarContent}
            onChange={calendarOnChange}
            value={calendarValue}
            onClickDay={(value:Date)=>alert(value.getFullYear())}
          />
          <div className="mt-2 ms-4 d-flex justify-content-start align-items-center">
            <div className={styles.redCircle}></div>
            <span>new appointments</span>
            <div className={styles.blueCircle}> </div>
            <span>consultations</span>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Completed;
