"use client";
import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSideMenuItem,
  setActiveTreatmentPlansSubNavItem,
} from "@/redux/userSlice";
import { CloseButton, Container, ListGroup, Row, Stack } from "react-bootstrap";
import { Button } from "@mui/material";
import clsx from "clsx";
import GoalModal from "@/components/PageTemplate/PageComponent/treatmentPlans/goalModal/goalModal";
import { useState } from "react";
import { BsPlusCircle, BsXCircle } from "react-icons/bs";
import {CiViewList} from "react-icons/ci";
import { RootState } from "@/redux/store";

function Goals() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(2));
  dispatch(setActiveTreatmentPlansSubNavItem(0));
  
  const [showGoalModal, setShowGoalModal] = useState(false);
  const handleCloseGoalModal= () => setShowGoalModal(false);
  const handleShowGoalModal = () => setShowGoalModal(true);
  const encounterGoals = useSelector((state:RootState)=>state.treatment.goals);
  return (
    <div className={styles.container}>
      <>
        <div className={styles.container}>
          <Container>
            <Row className="mb-4 mt-2">
              <Stack direction="horizontal" gap={3}>
                <Button className="p-1" variant="contained">
                  <BsXCircle className={styles.icon} />
                  Delete All
                  <span className="visually-hidden">unread messages</span>
                </Button>

                
                <Button
                  onClick={handleShowGoalModal}
                  className="p-1 ms-auto"
                  variant="contained"
                >
                  <BsPlusCircle className={styles.icon} />
                  Add Goal
                  <span className="visually-hidden">unread messages</span>
                </Button>
              </Stack>
            </Row>
            <Row className="mb-1">
              <h3 className={styles.header}>
                <CiViewList className={styles.viewListIcon} />
                Goals of the treatment plan
              </h3>
            </Row>
            <Row className="mb-3">
              <ListGroup as="ol" numbered>
                {encounterGoals.map((goal,index) =>(
                  <ListGroup.Item
                  as="li"
                  action
                  key={index}
                  className={clsx({
                    "d-flex justify-content-between align-items-center ": true,
                    [styles.item]: true,
                  })}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{goal}</div>
                  </div>
                  <CloseButton className="ms-3" />
                </ListGroup.Item>
                ))}
                
              </ListGroup>
            </Row>
          </Container>
        </div>
        <GoalModal
          show={showGoalModal}
          handleClose={handleCloseGoalModal}
        />
      </>
    </div>
  );
}
export default Goals;
