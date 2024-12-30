import { cormorant_sc } from "@/app/[locale]/layout";

const TitleNoStyles = ({ children, styled, variant = "h1" }) => {
  const Tag = variant;
  return (
    <Tag className={`${styled} ${cormorant_sc.className}`}>{children}</Tag>
  );
};

export default TitleNoStyles;
