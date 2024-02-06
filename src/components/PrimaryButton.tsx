"use client";

import styles from "./compStyles/PrimaryButton.module.scss";
import clsx from "clsx";

type buttonParams  = {
  text: string,
  style?:object,
  onClick?:any,
  className?:any
}
function PrimaryButton({text,style,className,onClick}:buttonParams) {
  return <button onClick={onClick} style={style} className={clsx({[styles.button]:true,[className]:true})}>{text}</button>;
}
export default PrimaryButton;
