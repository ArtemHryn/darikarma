import Link from "next/link";
import { cormorant } from "../../../../app/[locale]/layout";

import styles from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.wrappers}>
      <button
        type="button"
        className={`${cormorant.className} ${styles.button}`}
      >
        Зіграти онлайн
      </button>
      <Link
        href={
          "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTg4OTQ2MzQwMTA0MDc5?igsh=cm44eXpyNmhxdmo1"
        }
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.button} ${styles.link}`}
      >
        Зіграти офлайн
      </Link>
    </div>
  );
};

export default Buttons;
