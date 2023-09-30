"use client";
import styles from "./page.module.scss";
import PrimaryTextField from "@/components/PrimaryTextField";
import PrimaryButton from "@/components/PrimaryButton";
import Welcome from "@/components/Welcome";
import Link from "next/link";
import Loader from "@/components/Loader";
import clsx from "clsx";
import {BsFillPersonFill, BsFillLockFill} from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <main className={styles.main}>
      {!loading ? (
        <>
          <Image
            alt="healthcare"
            src="/images/healthcareBackground.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className={styles.loginBox}>
            <div className={styles.imgBox}>
              <Image
                className={styles.medcyImage}
                src="/images/medcy.jpg"
                width={450}
                height={450}
                quality={100}
                alt="Medcy"
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
                  />
                  <Welcome />
                </div>

                <PrimaryTextField
                  icon = {<BsFillPersonFill size = {18}/>}
                  className={clsx({ [styles.Item]: true })}
                  text="Username"
                  type="text"
                />
                
                <PrimaryTextField icon = {<BsFillLockFill size = {18}/>} text="Password" type="password" />
                <Link
                  className={clsx({
                    [styles.Item]: true,
                    [styles.forgotPassword]: true,
                  })}
                  href="/about"
                >
                  Forgot password
                </Link>
                <PrimaryButton
                  className={clsx({ [styles.Item]: true })}
                  text="login"
                />
                <PrimaryButton
                  className={clsx({ [styles.Item]: true })}
                  text="sign up"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Home;
