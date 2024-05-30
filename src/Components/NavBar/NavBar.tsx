import { Button } from "primereact/button";
import styles from "./NavBar.module.css";
import AuthService from "../../services/AuthService";

const NavBar = () => {
  return (
    <>
      <div className={styles.gap}></div>
      <div className={styles.container}>
        <div>
          <a href="/projects">
            <Button label="Проекты" text severity="help" />
          </a>
        </div>
        <div>
          <a href="/signin">
            <Button
              label="Выйти"
              text
              severity="danger"
              onClick={AuthService.logout}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
