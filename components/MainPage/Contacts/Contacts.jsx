import Container from "../../Common/Container/Container";
import Title from "../../Common/Title/Title";
import SocialList from "./SocialList/SocialList";
import Image from "next/image";

const Contacts = () => {
  return (
    <Container styled="flex flex-col gap-10">
      <Image
        src="/assets/images/contacts/moon.svg"
        width={362}
        height={555}
        alt="icon"
        className="absolute w-[147px] h-[226px] top-[10%] right-[-10%] xm:w-[240px] xm:h-[365px] xm:right-[-18%] xl:w-[320px] xl:h-[495px] xl:right-[-10%] z-0"
      />
      <Title styled={"text-balanced"}>
        Багато корисностей у моїх соц. мережах:
      </Title>
      <SocialList />
    </Container>
  );
};

export default Contacts;
