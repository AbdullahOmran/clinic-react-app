"use client";
import Alert from "@mui/material/Alert";
import styles from "./alertsStack.module.scss";
import clsx from "clsx";
import Slide from "@mui/material/Slide";
import { jsx } from "@emotion/react";
import { useRef } from "react";

function MyAlert({ msg,variant,severity,...Props }: {idx:any, msg:string,variant:any,severity:any  }) {

  

  return  <Slide direction="down" in={true} mountOnEnter unmountOnExit>
  <Alert
    style={{width: '100%'}}
    variant={variant}
    severity={severity}
    onClose={() => {alert( Props.idx)}}
  >
    {msg}
  </Alert>
</Slide>;
}

export default MyAlert;
