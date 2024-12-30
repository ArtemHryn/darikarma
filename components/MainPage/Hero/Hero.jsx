import Image from "next/image";
import { Link } from "@/i18n/routing";
import Container from "../../Common/Container/Container";
import TitleNoStyles from "../../Common/TitleNoStyles/TitleNoStyles";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <Container styled={styles.container}>
      <div className={styles.main_wrapper}>
        <p className={styles.project_text}>Проєкт трансформації свідомості</p>
        <TitleNoStyles styled={styles.title}>Dari.Karma</TitleNoStyles>
        <p className={styles.choose_your_faith}>
          Обери свою дію, яка змінить тебе і весь світ!
        </p>
        <Image
          width={615}
          height={588}
          src={"/assets/images/main_hero/main_hero.webp"}
          alt="darikarma"
          className={styles.img}
        />
        <div className={styles.link_wrapper}>
          <Link href={"#services"} className={`${styles.link}`}>
            Перейти до послуг
          </Link>
          <Link
            href={"/calculator"}
            className={`${styles.link} ${styles.additional_link_style}`}
          >
            Калькулятор матриці
          </Link>
        </div>
      </div>
      <Image
        width={615}
        height={588}
        src={"/assets/images/main_hero/main_hero.webp"}
        alt="darikarma"
        className={styles.img_desktop}
      />
    </Container>
  );
};

export default Hero;
