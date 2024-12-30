import MobileNav from "./MobileNav/MobileNav";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.scss";

const Header = ({ navLink }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MobileNav navLink={navLink} />
        <Navigation navLink={navLink} />
      </div>
    </header>
  );
};

export default Header;
