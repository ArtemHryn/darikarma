"use client";

import { useState } from "react";
import styles from "./MobileNav.module.scss";
import MobileNavList from "./MobileNavList";

const MobileNav = ({ navLink }) => {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <>
      <button className={styles.button} onClick={() => setShowNavigation(true)}>
        <svg
          viewBox="0 0 56 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.show_icon}
        >
          <rect width="56" height="1" rx="0.5" fill="#9072AF" />
          <rect y="8" width="56" height="1" rx="0.5" fill="#9072AF" />
          <rect y="16" width="56" height="1" rx="0.5" fill="#9072AF" />
        </svg>
      </button>
      <MobileNavList
        navLink={navLink}
        setShowNavigation={setShowNavigation}
        showNavigation={showNavigation}
      />
    </>
  );
};

export default MobileNav;
