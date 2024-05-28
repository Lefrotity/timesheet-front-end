import styles from "./Tasks.module.css";
import Columns from "../../Components/Columns";
import { useParams } from "react-router-dom";

function Tasks() {
  let { id } = useParams();

  return (
    <div className={styles.wrapper}>
      {id}
      <Columns />
    </div>
  );
}

export default Tasks;
