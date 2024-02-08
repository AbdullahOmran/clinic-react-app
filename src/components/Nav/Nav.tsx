"use client";
import styles from "./Nav.module.scss";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import Dropdown from "./Dropdown/Dropdown";
import { BsBellFill, BsCart3, BsTranslate } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import UserContent from "./UserContent/UserContent";

function Nav() {
  const [displayNotiMenu, setDisplayNotiMenu] = useState("none");
  const [displayCardMenu, setDisplayCardMenu] = useState("none");
  const [displayLangMenu, setDisplayLangMenu] = useState("none");
  const [displayUserMenu, setDisplayUserMenu] = useState("none");
  const user = useSelector((state: RootState)=>state.auth.user);
  const router = useRouter();
  useEffect(()=>{
    if(!user){
      router.push('/');
    }
  },[]);

  return (
    user &&
    <nav className={styles.Nav}>
      <div className={styles.logo}>
        <Link className={styles.link} href="/home/dashboard/">
          <Image
            //replace this image with icon

            src="/images/medcy.png"
            width={100}
            style={{
              backgroundColor: "transparent",
              transform: "translate(-10%,-20%)",
            }}
            height={100}
            alt="Medcy"
            unoptimized
          />
        </Link>
      </div>

      <div className={styles.list}>
        <ul className={styles.itemsGroup}>
          <li
            onMouseLeave={() => {
              setDisplayNotiMenu("none");
            }}
            onMouseOver={() => {
              setDisplayNotiMenu("block");
            }}
            className={styles.item}
          >
            <div className={styles.notif}>
              <span className={styles.Badge}>12</span>
              <BsBellFill className={styles.icon} />
            </div>
            <Dropdown display={displayNotiMenu} />
          </li>
          <li
            onMouseLeave={() => {
              setDisplayCardMenu("none");
            }}
            onMouseOver={() => {
              setDisplayCardMenu("block");
            }}
            className={styles.item}
          >
            <div className={styles.card}>
              <span className={styles.Badge}>4</span>
              <BsCart3 className={styles.icon} />
            </div>
            <Dropdown display={displayCardMenu} />
          </li>
          <li
            onMouseLeave={() => {
              setDisplayLangMenu("none");
            }}
            onMouseOver={() => {
              setDisplayLangMenu("block");
            }}
            className={styles.item}
          >
            <div className={styles.lang}>
              <span className={styles.langBadge}>EN</span>
              <BsTranslate className={styles.icon} />
            </div>
            <Dropdown display={displayLangMenu} />
          </li>
          <li
            onMouseLeave={() => {
              setDisplayUserMenu("none");
            }}
            onMouseOver={() => {
              setDisplayUserMenu("block");
            }}
            className={clsx({ [styles.item]: true, [styles.userItem]: true })}
          >
            <div className={styles.userItemContent}>
              <h6>Abdullah Omran</h6>
              <Image
                src="/images/loginAvatar.png"
                width={50}
                height={50}
                alt="UserImg"
                unoptimized
              />
            </div>
            <Dropdown display={displayUserMenu}><UserContent></UserContent></Dropdown>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Nav;
