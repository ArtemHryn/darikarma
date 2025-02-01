import Image from "next/image";

import styles from "./Card.module.scss";

const Card = ({ card, id }) => {
  const { name, about, price } = card;
  return (
    <li className={styles.item}>
      <Image
        src={`/assets/images/services/card${id + 1}.webp`}
        width={200}
        height={160}
        className={styles.img}
        alt={name}
      />
      <article className={styles.wrapper}>
        <p className={styles.name}>{name}</p>
        <div>
          <ul className={styles.about_list}>
            {about.map((text, id) => (
              <li key={id}>
                <p className={styles.about_text}>{text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.price}>{price}</p>
          <button className={styles.button} aria-label="відкрити детальну інфу">
            Детальніше
          </button>
        </div>
      </article>
    </li>
  );
};

export default Card;
