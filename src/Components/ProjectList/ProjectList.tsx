import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  const projects = [
    { id: 0, namespace: "Hello proj 1" },
    { id: 1, namespace: "Greetings proj 2" },
    { id: 2, namespace: "Sup proj 3" },
    { id: 3, namespace: "How's your going proj 4" },
  ];
  return (
    <div className={styles.wrapper}>
      {projects.map(({ id, namespace }) => (
        <ProjectItem key={id} id={id} namespace={namespace} />
      ))}
    </div>
  );
};

export default ProjectList;
