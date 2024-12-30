import Logo from "./Logo/Logo";

import styles from "./Footer.module.scss";
import Navigation from "./Navigation/Navigation";

const Footer = ({ navLink }) => {
  return (
    <footer>
      <div className={styles.container}>
        <Logo />
        <Navigation navLink={navLink} />
      </div>
    </footer>
  );
};

export default Footer;
