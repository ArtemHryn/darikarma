import Image from "next/image";
import Description from "../Description/Description";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

const cards = [
  {
    name: "Експрес",
    about: [
      "Будь-яке питання.",
      "30-45 хвилин;",
      "Рекомендації щодо пропрацювання;",
    ],
    price: "25$",
  },
  {
    name: "Тематична (супровід)",
    about: [
      "Будь-яка тема.",
      "Кармічний рецепт",
      "Матеріали, підтримка, додаткові зустрічі",
    ],
    price: "140$",
  },
  {
    name: "Тематична (працюю сам)",
    about: [
      "Будь-яка тема.",
      "до 120 хвилин;",
      "Рекомендації або кармічний рецепт",
    ],
    price: "80$",
  },
];

const Cards = () => {
  return (
    <ul className={styles.list}>
      <div className={styles.row}>
        <Card key={cards[0].name} card={cards[0]} id={0} />
        <div className={styles.descWrapper}>
          <Description />
          <Image
            src="/assets/images/services/hand.webp"
            width={229}
            height={239}
            alt="hand"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.row}>
        {cards.slice(1).map((item, id) => (
          <Card key={item.name} card={item} id={id + 1} />
        ))}
      </div>
    </ul>
  );
};

export default Cards;
