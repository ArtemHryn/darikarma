import Card from "./Card/Card";

import styles from "./Cards.module.scss";
import Hidder from "./Hidder/Hidder";

const cards = [
  {
    title: "Кармічний менеджмент",
    text: "Тут буде опис матриці долі. Опис опис матриці долі Тут буде долі",
    link: "",
  },
  {
    title: "Матриця долі",
    text: "Тут буде опис матриці долі. Опис опис матриці долі Тут буде долі",
    link: "/matrix-consultations",
  },
  {
    title: "Трансформаційні ігри",
    text: "Тут буде опис матриці долі. Опис опис матриці долі Тут буде опис ",
    link: "#transform_games",
  },
];

const Cards = () => {
  return (
    <ul className={styles.card_list}>
      {cards.map((item, id) => (
        <li
          key={id}
          className={`${styles.card_item} ${styles.card_item}_${id + 1}`}
        >
          <Hidder />
          <Card item={item} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
