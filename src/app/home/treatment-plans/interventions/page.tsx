"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/doctorSlice";
import { Button, Card, CloseButton, Col, Container, Row, Stack } from "react-bootstrap";
import { BsPlusCircle, BsXCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";

function Interventions() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  dispatch(setActiveTreatmentPlansSubNavItem(1));

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

            <Button
              onClick={() => {
                alert("hh");
              }}
              className="p-1 ms-auto"
              variant="primary"
            >
              <BsPlusCircle className={styles.icon} />
              Add Medication
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Stack>
        </Row>
        <Row className="mb-1">
          <h3 className={styles.header}>
            <CiViewList className={styles.viewListIcon} />
            Medications List
          </h3>
        </Row>
        <Row xl={4} md={2} className="g-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="position-relative">
                <CloseButton className="position-absolute end-0 p-2"/>
                <Card.Img variant="top" src="/images/drug_img.jpg" />
                <Card.Body>
                  <Card.Title>Medication Name</Card.Title>
                  <Card.Text>
                    <p className="m-1">Dosage</p>
                    <p className="m-1">Frequency</p>
                    <p className="m-1">Duration</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Interventions;
