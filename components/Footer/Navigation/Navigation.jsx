import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

import styles from "./Navigation.module.scss";
import { cormorant } from "@/app/[locale]/layout";

const Navigation = ({ navLink }) => {
  const locale = useLocale();
  return (
    <ul className={styles.nav_list}>
      {navLink.map((item, id) => (
        <li key={id} className={styles.nav_item}>
          <Link
            href={item.link}
            locale={locale}
            className={`${cormorant.className} ${styles.nav_link}`}
          >
            {item.name[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
