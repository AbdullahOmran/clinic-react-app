"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { BsPlusCircle, BsXCircle,BsFillClipboard2PulseFill} from "react-icons/bs";
import {
  setActiveSideMenuItem,
  setActiveSubNavItem,
} from "@/redux/doctorSlice";
import {
  Row,
  Button,
  ListGroup,
  Badge,
  CloseButton,
  Container,
  Stack,
} from "react-bootstrap";
import clsx from "clsx";

function EncounterImpression() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(1));
  dispatch(setActiveSubNavItem(5));
  return (
    <div className={styles.container}>
      <Container>
        <Row className="mb-4 mt-2">
          <Stack direction="horizontal" gap={3}>
            
            <Button className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete All
                <span className="visually-hidden">unread messages</span>
              </Button>
            
            <Button className="p-1 ms-auto" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Create Treatment Plan
                <span className="visually-hidden">unread messages</span>
              </Button>
            <Button className="p-1" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Symptom
                <span className="visually-hidden">unread messages</span>
              </Button>
          </Stack>
        </Row>
        <Row className="mb-1">
        
          <h3 className={styles.header}>
          <BsFillClipboard2PulseFill className={styles.clipboardIcon}/>
            Symptoms & Diagnosis
            </h3>
        </Row>
        <Row className="mb-3">
          <ListGroup  as="ol" numbered>
            <ListGroup.Item
              as="li"
              action
              className={clsx({"d-flex justify-content-between align-items-center ":true,[styles.item]:true})}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Symptom</div>
                Possible Diagnosis
              </div>
              <Button className="p-1" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Diagnosis
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              action
              className={clsx({"d-flex justify-content-between align-items-center ":true,[styles.item]:true})}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Symptom</div>
                Possible Diagnosis
              </div>
              <Button className="p-1" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Diagnosis
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              action
              className={clsx({"d-flex justify-content-between align-items-center ":true,[styles.item]:true})}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Symptom</div>
                Possible Diagnosis
              </div>
              <Button className="p-1" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Diagnosis
                <span className="visually-hidden">unread messages</span>
              </Button>
              <CloseButton className="ms-3" />
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              action
              className={clsx({"d-flex justify-content-between align-items-center ":true,[styles.item]:true})}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Symptom</div>
                Possible Diagnosis
              </div>
              <Button className="p-1" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Diagnosis
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
export default EncounterImpression;
