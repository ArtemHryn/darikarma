"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Hidder.module.scss";

const Hidder = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div
      className={`${styles.hider} ${showCard ? styles.show : ""}`}
      onMouseEnter={() => setShowCard(true)}
    >
      <Image
        src={"/assets/images/my_tools/hider.webp"}
        width={304}
        height={460}
        alt="hidder"
      />
    </div>
  );
};

export default Hidder;
