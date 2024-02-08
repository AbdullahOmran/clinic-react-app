"use client";
import { ListGroup } from "react-bootstrap";
import styles from "./UserContent.module.scss";
import clsx from "clsx";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";

function UserContent() {
  const dispatch = useDispatch();
  const logout = ()=>{
    const tokens  = localStorage.getItem('authTokens');
    if(tokens){
      localStorage.removeItem('authTokens');
    }
    dispatch(setAuthTokens(null));
    dispatch(setUser(null));
    window.location.reload();
  }
  return (
    <ListGroup  variant="flush">
      <ListGroup.Item variant="primary" action>My Profile</ListGroup.Item>
      <ListGroup.Item variant="primary" action>Account Settings</ListGroup.Item>
      <ListGroup.Item variant="primary" action onClick={logout}>Sign out</ListGroup.Item>
    </ListGroup>
  );
}
export default UserContent;
