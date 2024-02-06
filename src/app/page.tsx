"use client";
import styles from "./page.module.scss";
import PrimaryTextField from "@/components/PrimaryTextField";
import PrimaryButton from "@/components/PrimaryButton";
import Welcome from "@/components/Welcome";
import Link from "next/link";
import Loader from "@/components/Loader";
import clsx from "clsx";
import {BsFillPersonFill, BsFillLockFill} from "react-icons/bs";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { increment } from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";


import { RootState } from "@/redux/store";
import { login } from "@/redux/authSlice";
function Home() {
  // const [loading, setLoading] = useState(true);
  //const user = useSelector((state: RootState)=>state.user);
  const dispatch = useDispatch();
  
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const handleSubmit = ()=>{
    const user = {'username': username, 'password': password};
    dispatch(login(user));
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  


  return (
    <main className={styles.main}>
      
          <Image
            alt="healthcare"
            src="/images/healthcareBackground.jpg"
            layout="fill"
            objectFit="cover"
            unoptimized
          />
          <div className={styles.loginBox}>
            <div className={styles.imgBox}>
              <Image
                className={styles.medcyImage}
                src="/images/medcy.png"
                width={450}
                height={450}
                style={{backgroundColor:"transparent"}}
                alt="Medcy"
                unoptimized
              />
            </div>
            <div className={styles.contents}>
              <div className={styles.loginForm}>
                <div
                  className={clsx({
                    [styles.userImage]: true,
                    [styles.Item]: true,
                  })}
                >
                  <Image
                    src="/images/loginAvatar.png"
                    width={100}
                    height={100}
                    alt="LOGIN"
                    unoptimized
                  />
                  <Welcome />
                </div>
            
                <PrimaryTextField
                  icon = {<BsFillPersonFill size = {18}/>}
                  className={clsx({ [styles.Item]: true })}
                  text="Username"
                  type="text"
                  onChange= {(value:string)=>setUsername(value)}
                />
                
                <PrimaryTextField onChange= {(value:string)=>setPassword(value)} icon = {<BsFillLockFill size = {18}/>} text="Password" type="password" />
                <Link
                  className={clsx({
                    [styles.Item]: true,
                    [styles.forgotPassword]: true,
                  })}
                  href="/home/dashboard"
                >
                  Forgot password
                </Link>
                <PrimaryButton
                  className={clsx({ [styles.Item]: true })}
                  onClick={handleSubmit}
                  text="login"
                />
                
              </div>
            </div>
          </div>
        
     
    </main>
  );
}

export default Home;
