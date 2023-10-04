"use client";
import styles from "./compStyles/PrimaryTextField.module.scss";
import "./compStyles/PrimaryTextField.scss";
import useState from "react";
import clsx from "clsx";

type textFieldParams = {
  text: string,
  type: string,
  icon?:any,
  style?: object,
  className?: any,
};
function PrimaryTextField({icon, text, type, style, className}: textFieldParams) {
  let content = [<span key={0} className={styles.span} style={{ transitionDelay: "0ms" }}>
      {text[0]}
    </span>,];
  for (let index = 1; index < text.length; index++) {
    const element = text[index];
    const delay = index * 50;
    content.push(
      <span key={index} className={styles.span} style={{ transitionDelay: `${delay}ms` }}>
        {element}
      </span>
    );
  }

  return (
    
      icon ?(
        <div style = {style} className={clsx({[styles.parent]:true,[className]: true})}>
          {icon}
        <div
          style={{flexGrow:1}}
          className={clsx({
            formControl: true,
            [styles.formControl]: true,
          })}
        >
          <input className={styles.input} type={type} required />
          <label className={styles.label}>{content}</label>
        </div>
      </div>
      ):(
        <div
          style={style}
          className={clsx({
            formControl: true,
            [styles.formControl]: true,
            [className]: true,
          })}
        >
          <input className={styles.input} type={type} required />
          <label className={styles.label}>{content}</label>
        </div>
      )
    
   
  );
}
export default PrimaryTextField;
