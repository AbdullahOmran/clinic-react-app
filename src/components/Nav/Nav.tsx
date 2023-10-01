"use client";
import styles from "./Nav.module.scss";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.Nav}>
      <div  className={styles.logo}>
      <Link className={styles.link} href="/home/dashboard/" >
      <Image
      //replace this image with icon
                className={styles.medcyImage}
                src="/images/medcy.jpg"
                width={60}
                height={60}
                quality={100}
                alt="Medcy"
              />
      </Link>
      </div>
      
      <ul className={styles.itemsGroup}>
        <li className={styles.item}>
          Notif
        </li>
        <li className={styles.item}>
          Card
        </li>
        <li className={styles.item}>
          lang
        </li>
        <li className={styles.item}>
          Img
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
