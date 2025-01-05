import styles from "./Title.module.scss";

const Title = ({ children, styled, variant = "h1" }) => {
  const Tag = variant;
  return (
    <Tag className={`${styles.title} ${styled ? styled : ""}`}>{children}</Tag>
  );
};

export default Title;
