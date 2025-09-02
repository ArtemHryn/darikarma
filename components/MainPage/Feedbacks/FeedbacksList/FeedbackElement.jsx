import Image from "next/image";

const FeedbackElement = ({ num }) => {
  return (
    <Image
      src={`/assets/images/feedbacks/${num}.webp`}
      width={300}
      height={200}
      className="w-[400px] h-300 object-cover"
      alt={`Відгук ${num}`}
    />
  );
};

export default FeedbackElement;
