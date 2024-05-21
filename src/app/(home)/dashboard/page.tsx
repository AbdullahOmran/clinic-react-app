"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.scss";
import { RootState } from "@/redux/store";
import { setActiveSideMenuItem } from "@/redux/userSlice";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

import {
  FcApproval,
  FcFlashOn,
  FcHighPriority,
  FcInspection,
} from "react-icons/fc";
import Link from "next/link";
function Dashboard() {
  //  const doctor = useSelector((state: RootState)=>state.doctor);
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(0));

  const data = [
    { id: 0, value: 10, label: "Consultaion" },
    { id: 2, value: 20, label: "New inspection" },
  ];

  // line chart
  const uData = [0, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.dash}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.box}>
          <div className={styles.row1}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div>
                  <h1>Appointments</h1>
                  <h3>+20</h3>
                  <h2 className={styles.Correct}>+14</h2>
                </div>
                <div className={styles.icon}>
                  <FcApproval size={40} />
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <h1>Rejected</h1>
                  <h3>-2</h3>
                  <h2 className={styles.wrong}>-12</h2>
                </div>
                <div className={styles.icon}>
                  <FcHighPriority size={40} />
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <h1>Total Earnings</h1>
                  <h3>+3600</h3>
                  <h2 className={styles.Correct}>+1000</h2>
                </div>
                <div className={styles.icon}>
                  <FcFlashOn size={40} />
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <h1>Patients</h1>
                  <h3>+24</h3>
                  <h2>+14</h2>
                </div>
                <div className={styles.icon}>
                  <FcInspection size={40} />
                </div>
              </div>
            </div>
            <div className={styles.lineChart}>
              <LineChart
                width={500}
                height={300}
                series={[
                  { data: pData, label: "Earnings" },
                  { data: uData, label: "Cost" },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.pieChart}>
              {" "}
              <PieChart
                series={[
                  {
                    data,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "red",
                    },
                  },
                ]}
                height={200}
              />
            </div>
            <div className={styles.features}>
              <h1 className={styles.title}>Latest News</h1>
              <div className={styles.box}>
                <div className={styles.img}>
                  {/* <Image
                    src="/images/landing-image.png"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  /> */}
                </div>
                <div className={styles.text}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
