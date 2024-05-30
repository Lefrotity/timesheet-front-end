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
import useTasks from "../../Hooks/useTasks";
import { useParams } from "react-router-dom";

function Tasks() {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const { tasks, loading, updateLoading, createTask, updateTask, deleteTask } =
    useTasks(id);

  const toggleModal = useCallback(() => {
    setOpenModal((prevState) => !prevState);
  }, [setOpenModal]);

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <CreateTaskModal
        open={openModal}
        toggle={toggleModal}
        createTask={createTask}
        updateLoading={updateLoading}
      />
      <div className={styles.header}>
        <Header text="Задачи" />
      </div>
      <br />
      <div className={styles.createBtnWrapper}>
        <Button label="Создать" onClick={toggleModal} />
      </div>
      <br />
      <Columns tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default Tasks;
