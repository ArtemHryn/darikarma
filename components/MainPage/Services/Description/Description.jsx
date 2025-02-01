import Image from "next/image";

import styles from "./Description.module.scss";

const Description = () => {
  return (
    <>
      <p className={styles.desc}>Варіант для тих, хто не знає, що обрати</p>
      <Image
        src={"/assets/images/services/star.webp"}
        width={20}
        height={21}
        className={styles.img}
        alt="star"
      />
      <svg
        viewBox="0 0 394 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line}
      >
        <path
          d="M385 95.4998C322.838 100.891 254.028 123.1 198.733 87.6674C164.821 65.937 155.849 38.1743 188.594 13.5217C207.348 -0.597866 209.305 10.1781 204.305 24.1772C203.001 28.5785 190.925 45.4818 186.805 49.1772M0.593821 80.7461C31.2009 81.1274 129.065 84.2995 170.805 61.1772M186.805 49.1772C184.113 51.5925 174.419 59.1751 170.805 61.1772M186.805 49.1772L170.805 61.1772"
          stroke="#B0869D"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M386.5 99.5L385.5 91L392.5 93.5L386.5 99.5Z"
          stroke="#B0869D"
          strokeOpacity="0.7"
        />
      </svg>
    </>
  );
};

export default Description;
