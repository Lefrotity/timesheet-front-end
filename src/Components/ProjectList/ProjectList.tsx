import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css";

const ProjectList = ({
  projects,
  updateProject,
  deleteProject,
  updateLoading,
}) => {
  return (
    <div className={styles.wrapper}>
      {projects.map(({ id, namespace }) => (
        <ProjectItem
          key={id}
          id={id}
          namespace={namespace}
          updateProject={updateProject}
          deleteProject={deleteProject}
          updateLoading={updateLoading}
        />
      ))}
    </div>
  );
};

export default ProjectList;
