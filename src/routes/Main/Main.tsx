import styles from "./Main.module.css";
import Columns from "../../Components/Columns";

function Main() {
  return (
    <div className={styles.wrapper}>
      <Columns />
    </div>
  );
}

export default Main;
