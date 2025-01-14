import Image from "next/image";
import Container from "../../Common/Container/Container";
import Title from "../../Common/Title/Title";
import Cards from "./Cards/Cards";

import styles from "./MyTools.module.scss";

const MyTools = () => {
  return (
    <Container styled={styles.container}>
      <Title>Мої інструменти</Title>
      <Cards />
      <svg
        viewBox="0 0 1440 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.bg_svg}
      >
        <path
          d="M-319 97.2157C-295.035 84.1708 -272.131 69.4153 -247 58.2237C-179.896 28.3398 -132.004 16.3654 -57 7.23413C4.93728 -0.306367 91.5099 -7.24883 148 26.2302C182.645 46.7628 193.87 93.4487 162 119.211C143.747 133.967 110.86 125.08 110 102.215C108.498 62.3084 179.694 34.058 217 33.2288C268.291 32.0888 333.797 27.6376 373 51.2251C426.211 83.2411 449.336 116.207 462 167.201C471.739 206.417 473.94 235.076 483 267.181C493.809 305.482 692.557 174.132 759 167.201C886.057 144.645 846.473 293.176 902 293.176C957.527 293.176 786.173 423.892 821 407.152C866.005 385.52 899.193 346.721 932 313.172C992.406 251.399 1049.13 588.552 1129 545.124C1218.88 496.255 1389.38 -20.0495 1457 51.2251C1515.3 112.682 1482.97 324.809 1501 403.153C1508.44 435.492 1512.42 468.523 1518 501.133C1519.65 510.754 1520.65 520.233 1526 528.128"
          stroke="#B0869D"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
      </svg>
      <Image
        src={"/assets/images/my_tools/decor.webp"}
        width={663}
        height={504}
        alt="decore"
        className={styles.decor_img}
      />
    </Container>
  );
};

export default MyTools;
