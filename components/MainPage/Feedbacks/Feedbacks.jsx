import Link from "next/link";
import Container from "../../Common/Container/Container";
import Title from "../../Common/Title/Title";
import FeedbacksList from "./FeedbacksList/FeedbacksList";

const Feedbacks = () => {
  return (
    <Container styled="flex flex-col gap-32">
      <Title>Відгуки</Title>
      <FeedbacksList />
      <Link href={"#"} className="main-btn h-[48px]">
        Записатися на консультацію
      </Link>
    </Container>
  );
};

export default Feedbacks;
