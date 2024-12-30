import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

import styles from "./SwitchLanguage.module.scss";

const SwitchLanguage = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { locale } = useParams();
  const [checked, setChecked] = useState(locale !== "uk");

  const handleChange = (isChecked) => {
    const newLocale = isChecked ? "ru" : "uk";
    setChecked(isChecked);
    setTimeout(() => router.push(pathName, { locale: newLocale }), 250);
  };

  return (
    <div className={styles.lang_wrapper}>
      <input
        type="checkbox"
        onChange={({ target }) => handleChange(target.checked)}
        checked={checked}
      />
      <label>
        <span>UA</span>
      </label>
    </div>
  );
};

export default SwitchLanguage;
