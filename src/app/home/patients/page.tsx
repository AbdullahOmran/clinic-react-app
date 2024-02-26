"use client";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { setActiveSideMenuItem } from "@/redux/userSlice";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import clsx from "clsx";
import {
  BsCheckCircle,
  BsPencilSquare,
  BsPlusCircle,
  BsXCircle,
} from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { setAction } from "@/redux/patientSlice";
import { useRouter } from "next/navigation";

function Patients() {
  const dispatch = useDispatch();
  const router = useRouter();
  dispatch(setActiveSideMenuItem(7));
  const addPatient = ()=>{
    dispatch(setAction('add'));
    router.push('/home/patient-encounter/');
  }
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="mb-4 mt-2">
            <Stack direction="horizontal" gap={3}>
              <InputGroup className="w-25" >
                <InputGroup.Text>
                <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                />
              </InputGroup>

              <Button onClick={addPatient} className="p-1 ms-auto" variant="primary">
                <BsPlusCircle className={styles.icon} />
                Add Patient
                <span className="visually-hidden">unread messages</span>
              </Button>

              <Button className="p-1" variant="primary">
                <BsPencilSquare className={styles.icon} />
                Edit Patient
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button className="p-1" variant="primary">
                <BsXCircle className={styles.icon} />
                Delete Patient
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Stack>
          </Row>
          <Row className="mb-1">
            <h3 className={styles.header}>
              <CiViewList className={styles.viewListIcon} />
              All Patients
            </h3>
          </Row>
          <Row className="g-4">
            <Table className={styles.table} hover striped responsive="xl">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                  
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
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

                  <td> - </td>
                </tr>
                <tr>
                  <td>3</td>
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
export default Patients;
