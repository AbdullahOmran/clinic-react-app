"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveCalendarSubNavItem,
  setActiveSideMenuItem,
} from "@/redux/userSlice";
import { Badge, CloseButton, Container, ListGroup, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import clsx from "clsx";
import { CiViewList } from "react-icons/ci";

function PendingApprovals() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(4));
  dispatch(setActiveCalendarSubNavItem(4));
  return (
    <div className={styles.container}>
      <Container>
        <Row className="mb-1 mt-2">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
            Pending Appointments
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
              <Button className="p-1" variant="contained">
                Approve
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
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
              <Button className="p-1" variant="contained">
                Approve
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
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
              <Button className="p-1" variant="contained">
                Approve
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
            </ListGroup.Item>
            
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}
export default PendingApprovals;
