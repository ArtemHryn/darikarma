import Image from "next/image";
import TitleNoStyles from "../../Common/TitleNoStyles/TitleNoStyles";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        width={109}
        height={112}
        src={"/assets/images/footer/dariLogo.webp"}
        alt="Logo"
        className={styles.img}
      />
      <TitleNoStyles styled={styles.title}>Dari.Karma</TitleNoStyles>
    </div>
  );
};

export default Logo;
