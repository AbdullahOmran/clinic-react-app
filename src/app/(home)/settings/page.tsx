"use client";
import { useDispatch } from "react-redux";
import styles from "./page.module.scss";
import { setActiveSideMenuItem } from "@/redux/userSlice";


export default function Settings(){
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(6));
    return(<div>
kkkkkk
    </div>);
}