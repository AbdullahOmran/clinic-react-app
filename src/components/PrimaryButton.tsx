"use client";

import styles from "./compStyles/PrimaryButton.module.scss";
import clsx from "clsx";

type buttonParams  = {
  text: string,
  style?:object,
  className?:any
}
function PrimaryButton({text,style,className}:buttonParams) {
  return <button style={style} className={clsx({[styles.button]:true,[className]:true})}>{text}</button>;
}
export default PrimaryButton;
