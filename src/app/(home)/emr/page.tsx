"use client";
import { useDispatch } from "react-redux";
import styles from "./page.module.scss";
import { setActiveSideMenuItem } from "@/redux/userSlice";


export default function Emr(){
    const dispatch = useDispatch();
    dispatch(setActiveSideMenuItem(5));
    return(<div>
        kkkkkk
    </div>);
}