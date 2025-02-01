import Description from "./Description/Description";
import Container from "../../Common/Container/Container";
import Cards from "./Cards/Cards";
import Title from "../../Common/Title/Title";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <Container>
      <Title styled={styles.title}>Послуги</Title>
      <div className={styles.desc_wrapper}>
        <Description />
      </div>
      <Cards />
    </Container>
  );
};

export default Services;
