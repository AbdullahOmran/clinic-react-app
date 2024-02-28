"use client";
import Alert from "@mui/material/Alert";
import styles from "./alertsStack.module.scss";
import clsx from "clsx";
import Slide from "@mui/material/Slide";
import { jsx } from "@emotion/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeAlert } from "@/redux/userSlice";


function MyAlert({ msg,variant,severity,...Props }: {idx:any, msg:string,variant:any,severity:any  }) {
  const dispatch = useDispatch();
  
  

  return  <Slide direction="down" in={true} mountOnEnter unmountOnExit>
  <Alert
    style={{width: '100%'}}
    variant={variant}
    severity={severity}
    onClose={() => {dispatch(removeAlert(Props.idx));}}
  >
    {msg}
  </Alert>
</Slide>;
}

export default MyAlert;
