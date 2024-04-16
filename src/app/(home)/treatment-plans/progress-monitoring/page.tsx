"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/userSlice";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import clsx from "clsx";
import { BsCheckCircle, BsPencilSquare, BsPlusCircle, BsXCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";

function ProgressMonitoring() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  dispatch(setActiveTreatmentPlansSubNavItem(2));

  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <Button className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete All
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete Encounter
                <span className="visually-hidden">unread messages</span>
              </Button>

              <Button className="p-1 ms-auto" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Encounter
                <span className="visually-hidden">unread messages</span>
              </Button>

              
              <Button className="p-1" variant="primary">
              <BsPencilSquare className={styles.icon}/>
                Edit Encounter
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <CiViewList className={styles.viewListIcon} />
              All Encounters
            </h3>
          </Row>
          <Row className="g-4">
            
            <Table className={styles.table} hover striped responsive="xl">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Goals</th>
                  <th>Medications</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td> - </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>

                  <td> - </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>

                  <td>Table cell</td>
                  <td> - </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default ProgressMonitoring;
