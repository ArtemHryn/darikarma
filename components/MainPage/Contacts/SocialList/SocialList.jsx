import Link from "next/link";

import styles from "./SocialList.module.scss";

const list = [
  { name: "Instagram", link: "https://www.instagram.com/dari.karma/" },
  { name: "Telegram (особистий)", link: "https://t.me/darikarma" },
  { name: "YouTube", link: "https://www.youtube.com/@darikarma_channel" },
  { name: "buymeacoffee", link: "https://buymeacoffee.com/dari.karma" },
  { name: "Telegram (канал)", link: "https://t.me/darikarma_channel" },
  { name: "TikTok", link: "https://www.tiktok.com/@dari.karma" },
];

const SocialList = () => {
  return (
    <ul className={`${styles.list}`}>
      {list.map(({ name, link }, i) => (
        <li key={link} className={`${styles.list_item}`}>
          <Link
            href={link}
            className={`${
              i % 2 === 0 ? "main-btn" : "additional-btn ml-auto"
            } ${styles.link}`}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
