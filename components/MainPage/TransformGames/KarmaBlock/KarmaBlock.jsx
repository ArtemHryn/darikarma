import Title from "../../../Common/Title/Title";

import styles from "./KarmaBlock.module.scss";

const KarmaBlock = () => {
  return (
    <article className={styles.text_wrapper}>
      <Title variant="h2" styled={styles.title}>
        Кармічні подорожі
      </Title>
      <p className={styles.description}>
        Кармічні подорожі – це унікальний формат ігор, які дозволяють учасникам
        глибше пізнати себе, розкрити приховані аспекти своєї особистості та
        зрозуміти, як їхні дії впливають на життя інших. Ігри кармічних
        подорожей занурюють учасників у світ інтерактивних історій
      </p>
    </article>
  );
};

export default KarmaBlock;
