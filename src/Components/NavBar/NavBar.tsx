import { Button } from "primereact/button";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="/projects">
        <Button label="Проекты" text severity="help" />
      </a>
    </div>
  );
};

export default NavBar;
