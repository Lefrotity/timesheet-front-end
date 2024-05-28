import Header from "../../Components/Header";
import ProjectList from "../../Components/ProjectList";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header text="Проекты" />
      </div>
      <br />
      <br />
      <ProjectList />
    </div>
  );
}

export default Projects;
