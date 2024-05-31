import styles from "./Tasks.module.css";
import Columns from "../../Components/Columns";
import Header from "../../Components/Header";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useCallback, useEffect, useState } from "react";
import InputWrapper from "../../Components/InputWrapper";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import CreateTaskModal from "../../Components/CreateTaskModal";
import NavBar from "../../Components/NavBar";
import useTasks from "../../Hooks/useTasks";
import { useParams } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";

function Tasks() {
  const { id } = useParams();
  const { users } = useUsers();
  const [openModal, setOpenModal] = useState(false);
  const [dropdownUsers, setDropdownUsers] = useState([]);

  useEffect(() => {
    setDropdownUsers(
      users.map((user) => ({
        name: `${user.firstname} ${user.lastname}`,
        value: user.id,
      }))
    );
  }, [users, setDropdownUsers]);

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
        users={dropdownUsers}
      />
      <div className={styles.header}>
        <Header text="Задачи" />
      </div>
      <br />
      <div className={styles.createBtnWrapper}>
        <Button label="Создать" onClick={toggleModal} />
      </div>
      <br />
      <Columns
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        users={dropdownUsers}
      />
    </div>
  );
}

export default Tasks;
