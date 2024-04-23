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
import { useDispatch, useSelector } from "react-redux";
import Alert from '@mui/material/Alert';

import { RootState } from "@/redux/store";
import { loginUser } from "@/utils/authLogic";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { redirect, useRouter } from 'next/navigation';

function SignIn() {
  // const [loading, setLoading] = useState(true);
  //const user = useSelector((state: RootState)=>state.user);
  // to use axios, we need to type const api = useAxios();
  const dispatch = useDispatch();
  const router = useRouter();
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const user = useSelector((state: RootState)=>state.auth.user);
  const [loading, setLoading] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  
  useEffect(()=>{
    const storedAuthTokens = localStorage.getItem('authTokens');
    if(storedAuthTokens){
      const authTokens = JSON.parse(storedAuthTokens);
      dispatch(setAuthTokens(authTokens));
      dispatch(setUser(jwtDecode(authTokens.access)));
      router.push('/dashboard/');
      setLoading(true);
    }
    
    if(user){
      router.push('/dashboard/');
    }else{
      setLoading(true) ;
    }
    
  },[]);
  
  const handleSubmit = async ()=>{
    const credentials = {'username': username, 'password': password};
    const res = await loginUser(credentials);
    if (res){
      localStorage.setItem('authTokens', JSON.stringify(res));
      setDisplayError(false);
      setDisplaySuccess(true);
      setTimeout(() => {
        dispatch(setAuthTokens(res));
        dispatch(setUser(jwtDecode(res.access)));
        router.push('/dashboard');
          }, 3000);
    }else{
      setDisplayError(true);
    }
  }
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  
  return (
    !user && loading &&(
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
                {displaySuccess &&    
                <Alert className={styles.alert} variant="outlined" severity="success">Successful login.</Alert>
                 }
                {displayError &&    
                <Alert className={styles.alert} variant="outlined" severity="error"><span className="fw-bold">Login Failed:</span>
                <br/>
                Wrong credentials or missing access rights to application
                </Alert>
                 }
                
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
                  href="/"
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
        
     
    </main>)
  );
}

export default SignIn;
