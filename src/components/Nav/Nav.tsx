"use client";
import styles from "./Nav.module.scss";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import Dropdown from "./Dropdown/Dropdown";
import { BsBellFill, BsCart3, BsTranslate } from "react-icons/bs";
import { useState, useEffect } from "react";

function Nav() {
  const [displayNotiMenu, setDisplayNotiMenu] = useState("none");
  const [displayCardMenu, setDisplayCardMenu] = useState("none");
  const [displayLangMenu, setDisplayLangMenu] = useState("none");
  const [displayUserMenu, setDisplayUserMenu] = useState("none");

  return (
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
            quality={100}
            alt="Medcy"
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
                quality={100}
                alt="UserImg"
              />
            </div>
            <Dropdown display={displayUserMenu} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;