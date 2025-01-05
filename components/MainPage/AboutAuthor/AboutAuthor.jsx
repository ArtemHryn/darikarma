import Image from "next/image";
import Container from "../../Common/Container/Container";
import Title from "../../Common/Title/Title";

import styles from "./AboutAuthor.module.scss";
import AuthorEducation from "./AuthorEducation/AuthorEducation";

const AboutAuthor = () => {
  return (
    <Container styled={styles.container}>
      <Title styled={styles.title}>Автор проєкту</Title>
      <div className={styles.content}>
        <p className={styles.author_text}>
          <span>Дарина Дупак — </span>професійний ініційований консультант із
          призначення, діагностики та корекції долі.
        </p>
        <Image
          width={460}
          height={707}
          alt="автор"
          src={"/assets/images/about_author/about_author.webp"}
          className={styles.img}
        />
        <AuthorEducation />
      </div>
    </Container>
  );
};

export default AboutAuthor;
