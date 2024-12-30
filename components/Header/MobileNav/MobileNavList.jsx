import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./MobileNav.module.scss";
import { Link } from "../../../i18n/routing";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import { cormorant } from "@/app/[locale]/layout";

const MobileNavList = ({ navLink, setShowNavigation, showNavigation }) => {
  const { locale } = useParams();
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Функція для обробки кліку поза елементом
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowNavigation(false);
      }
    };

    // Функція для обробки клавіші Esc
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowNavigation(false);
      }
    };

    // Додаємо обробники подій
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    // Очищення обробників при розмонтуванні компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setShowNavigation]);
  return (
    <div
      ref={wrapperRef}
      className={`${styles.menu_wrapper} ${
        showNavigation ? "" : styles.menu_wrapper_hidden
      }`}
    >
      <button
        onClick={() => setShowNavigation(false)}
        className={styles.button}
      >
        <svg
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.close_icon}
        >
          <rect
            width="29"
            height="1"
            rx="0.5"
            transform="matrix(0.708016 -0.706196 0.708016 0.706196 0 21)"
            fill="#9072AF"
          />
          <rect
            width="29"
            height="1"
            rx="0.5"
            transform="matrix(0.708016 0.706196 -0.708016 0.706196 1 0)"
            fill="#9072AF"
          />
        </svg>
      </button>
      <ul className={styles.nav_list}>
        {navLink.map((item, id) => (
          <li key={id}>
            <Link
              href={item.link}
              locale={locale}
              onClick={() => setShowNavigation(false)}
              className={`${cormorant.className} ${styles.nav_link}`}
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

export default MobileNavList;
