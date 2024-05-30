import styles from "./Tasks.module.css";
import Columns from "../../Components/Columns";
import Header from "../../Components/Header";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useCallback, useState } from "react";
import InputWrapper from "../../Components/InputWrapper";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import CreateTaskModal from "../../Components/CreateTaskModal";
import NavBar from "../../Components/NavBar";

function Tasks() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setOpenModal((prevState) => !prevState);
  }, [setOpenModal]);

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <CreateTaskModal open={openModal} toggle={toggleModal} />
      <div className={styles.header}>
        <Header text="Задачи" />
      </div>
      <br />
      <div className={styles.createBtnWrapper}>
        <Button label="Создать" onClick={toggleModal} />
      </div>
      <Columns />
    </div>
  );
}

export default Tasks;
