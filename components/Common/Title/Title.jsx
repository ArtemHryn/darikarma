const Title = ({ children, styled, variant = "h1" }) => {
  const Tag = variant;
  return <Tag className={`${styled}`}>{children}</Tag>;
};

export default Title;
