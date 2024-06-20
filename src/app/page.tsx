"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Lottie from "lottie-react";
import landing1 from "./animation/doctor.json";
import question from "./animation/question.json";
import { PiArrowFatLineDownThin } from "react-icons/pi";
import {
  FcDonate,
  FcKindle,
  FcCalendar,
  FcGraduationCap,
  FcPieChart,
} from "react-icons/fc";
import { Avatar, Typography, colors } from "@mui/material";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
           
          <h3 className="text-primary"><span style={{color:"red"}}>M</span>EDCY</h3>
          <ul className={styles.mainnav}>
            <li className={styles.li}>
              <a className={styles.a} href="#other-Links">
                Home
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#features">
               Features 
              </a>
            </li>
            {/* active */}
            <li className={styles.li}>
              <a className={styles.a} href="#gallery">
               Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Lottie
              style={{ height: "20", width: "400px" }}
              animationData={landing1}
            />
          </div>
          <div className={styles.text}>
            <h1>Revolutionize Your Clinic Management</h1>
            <p>
                  Efficient, user-friendly, and secure solutions for modern healthcare practices.
            </p>
            <div className={styles.button}>
              <Link href="/signUp" className={styles.signup}>
Sign Up              </Link>
              <Link href="/signIn" className={styles.signin}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.godown}>
          <a href="#features">
            <PiArrowFatLineDownThin size={50} />
          </a>
        </div>
      </div>
      <div id="features" className={styles.features}>
        <div className={styles.container}>
          <h1>Features</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.image}>
                <FcCalendar size={80} />
              </div>
              <h2>Appointment Scheduling</h2>
              <p>Easily manage patient appointments with our intuitive scheduling system.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <FcKindle size={80} />
              </div>
              <h2>Patient Records</h2>
              <p>Securely store and access patient information anytime, anywhere.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <FcPieChart size={80} />
              </div>
              <h2>Reports & Analytics</h2>
              <p>Gain insights into your clinic’s performance with detailed reports."</p>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <FcDonate size={80} />
              </div>
              <h2>Billing & Invoicing</h2>
              <p>Automate billing processes and generate invoices with a few clicks.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.learn}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/images/landing-image.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.text}>
            <h1>تابع دروسك بالجدول الخاص بك</h1>
            <p>تعلم من افضل المدرسين علي منصه اليوتيوب</p>
          </div>
        </div>
      </div> */}
      <HowItWorks />
      {/* <div className={styles.quiz}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>حل اسئله مختلفه ومتنوعه</h1>
            <p>حل اسئله بوكليت ودروس ووحدات من مصادر مختلفه</p>
          </div>
          <div className={styles.image}>
            <Lottie
              style={{ height: "20", width: "400px" }}
              animationData={question}
            />
          </div>
        </div>
      </div> */}
      <Testimonials />
      <div className={styles.footer}>
        <p>
          Copyright © 2024 <span>Abdullah Omran</span> All Right Reserved
        </p>
      </div>
    </>
  );
}
