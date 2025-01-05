import Image from "next/image";

import styles from "./AuthorEducation.module.scss";

const AuthorEducation = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <article className={styles.article}>
          <Image
            width={65}
            height={65}
            alt="символ1"
            src={"/assets/images/about_author/symbol1.webp"}
          />
          <h2 className={styles.title}>
            Дипломованый менеджер соціокультурной діяльності
          </h2>
          <p>
            Проводжу трансформаційні івенти. Працюю над створенням особистісних
            брендів.
          </p>
        </article>
      </li>
      <li className={styles.list_item}>
        <article className={styles.article}>
          <Image
            width={65}
            height={65}
            alt="символ2"
            src={"/assets/images/about_author/symbol2.webp"}
          />
          <h2 className={styles.title}>
            Працюю за авторським методом Наталії Ладіні, відомого як Матриця
            Долі.
          </h2>
          <p>Володію поглибленими розрахунками методу і техніками зцілення.</p>
        </article>
      </li>
      <li className={styles.list_item}>
        <article className={styles.article}>
          <Image
            width={65}
            height={65}
            alt="символ3"
            src={"/assets/images/about_author/symbol3.webp"}
          />
          <p>
            Здобула ступінь магістра психології в Національному університеті
            імені В. І. Вернадського
          </p>
        </article>
      </li>
      <li className={styles.list_item}>
        <article className={styles.article}>
          <Image
            width={65}
            height={65}
            alt="символ4"
            src={"/assets/images/about_author/symbol3.webp"}
          />
          <p>
            Вивчаю кармічний менеджмент і причинно-наслідкові зв'язки в
            Інституті Азійської Класики
          </p>
        </article>
      </li>
    </ul>
  );
};

export default AuthorEducation;
