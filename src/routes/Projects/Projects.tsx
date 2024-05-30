import { Button } from "primereact/button";
import Header from "../../Components/Header";
import ProjectList from "../../Components/ProjectList";
import styles from "./Projects.module.css";
import { useCallback, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import InputWrapper from "../../Components/InputWrapper";
import { InputText } from "primereact/inputtext";
import useProjects from "../../Hooks/useProjects";

function Projects() {
  const {
    projects,
    loading,
    updateLoading,
    createProject,
    updateProject,
    deleteProject,
  } = useProjects();

  const [openModal, setOpenModal] = useState(false);
  const [projName, setProjName] = useState("");

  const toggleModal = useCallback(() => {
    setOpenModal((prevState) => !prevState);
  }, [setOpenModal]);

  return (
    <div className={styles.wrapper}>
      <Dialog
        header="Создание проекта"
        visible={openModal}
        onHide={toggleModal}
      >
        <InputWrapper label="Имя проекта">
          <InputText
            value={projName}
            onChange={(e) => setProjName(e.target.value)}
          />
        </InputWrapper>

        <br />

        <Button
          label="Создать"
          onClick={() => {
            createProject(projName);
            toggleModal();
          }}
        />
      </Dialog>

      <div className={styles.header}>
        <Header text="Проекты" />
      </div>
      <br />
      <div className={styles.createBtnWrapper}>
        <Button label="Создать Проект" onClick={toggleModal} />
      </div>
      <br />
      <br />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ProjectList
          projects={projects}
          updateProject={updateProject}
          updateLoading={updateLoading}
          deleteProject={deleteProject}
        />
      )}
    </div>
  );
}

export default Projects;
