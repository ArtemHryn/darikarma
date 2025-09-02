import Container from "../../Common/Container/Container";
import Title from "../../Common/Title/Title";
import Buttons from "./Buttons/Buttons";
import KarmaBlock from "./KarmaBlock/KarmaBlock";
import MatrixBlock from "./MatrixBlock/MatrixBlock";

import styles from "./TransformGames.module.scss";

const TransformGames = () => {
  return (
    <Container>
      <div className={styles.title_wrapper}>
        <Title>Трансформаційні ігри</Title>
        <p className={styles.meet}>(зустрічі у Києві та онлайн)</p>
      </div>
      <div className={styles.blocks_wrapper}>
        <KarmaBlock />
        <MatrixBlock />
      </div>
      <Buttons />
    </Container>
  );
};

export default TransformGames;
