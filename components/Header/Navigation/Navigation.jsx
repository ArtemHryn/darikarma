"use client";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { cormorant } from "@/app/[locale]/layout";

import styles from "./Navigation.module.scss";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";

const Navigation = ({ navLink }) => {
  const { locale } = useParams();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav_list}>
        {navLink.map((item, id) => (
          <li key={id} className={styles.nav_item}>
            <Link
              href={item.link}
              className={`${styles.nav_link} ${cormorant.className}`}
              locale={locale}
            >
              {item.name[locale]}
            </Link>
          </li>
        ))}
      </ul>
      <SwitchLanguage />
    </div>
  );
};

export default Navigation;
