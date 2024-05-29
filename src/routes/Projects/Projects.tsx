import { Button } from "primereact/button";
import Header from "../../Components/Header";
import ProjectList from "../../Components/ProjectList";
import styles from "./Projects.module.css";
import { useCallback, useState } from "react";
import { Dialog } from "primereact/dialog";
import InputWrapper from "../../Components/InputWrapper";
import { InputText } from "primereact/inputtext";

function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [projName, setProjName] = useState("");

  const toggleModal = useCallback(() => {
    setOpenModal((prevState) => !prevState);
  }, [setOpenModal]);

  const createProj = () => {
    console.log("created");
    toggleModal();
  };

  return (
    <div className={styles.wrapper}>
      {/* TODO: move on separate component */}
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

        <Button label="Создать" onClick={createProj} />
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
      <ProjectList />
    </div>
  );
}

export default Projects;
