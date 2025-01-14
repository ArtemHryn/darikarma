import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.scss";

const Card = ({ item, id }) => {
  const { title, text, link } = item;
  return (
    <>
      <Image
        src={`/assets/images/my_tools/card${id + 1}.webp`}
        width={304}
        height={286}
        alt={title}
      />
      <div className={styles.text_wrapper}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_text}>{text}</p>
        <Link href={link} className={styles.link}>
          Детальніше
        </Link>
      </div>
    </>
  );
};

export default Card;
