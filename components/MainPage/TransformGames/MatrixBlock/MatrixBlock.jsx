import Title from "../../../Common/Title/Title";

import styles from "./MatrixBlock.module.scss";

const MatrixBlock = () => {
  return (
    <article className={styles.text_wrapper}>
      <Title variant="h2" styled={styles.title}>
        Матриця долі
      </Title>
      <p className={styles.description}>
        Матриця долі – це унікальний формат ігор, які дозволяють учасникам
        глибше пізнати себе, розкрити приховані аспекти своєї особистості та
        зрозуміти, як їхні дії впливають на життя інших. Ігри кармічних
        подорожей занурюють учасників у світ інтерактивних історій
      </p>
    </article>
  );
};

export default MatrixBlock;
