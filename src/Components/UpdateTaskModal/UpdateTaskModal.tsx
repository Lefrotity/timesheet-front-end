import { Dialog } from "primereact/dialog";
import styles from "./UpdateTaskModal.module.css";
import InputWrapper from "../InputWrapper";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { observer } from "mobx-react-lite";
import updateTaskStore from "../../../store/updateTask";
import { Dropdown } from "primereact/dropdown";
import { DROPDOWN_PRIORITIES, DROPDOWN_TECHNOLIGIES } from "../../conts/main";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useEffect } from "react";

const UpdateTaskModal = observer(
  ({ task, open, toggle, updateTask, deleteTask }) => {
    const {
      name,
      changeName,
      description,
      changeDescription,
      selectedTechnoligy,
      changeTechnology,
      selectedPriority,
      changePriority,
      deadlineDate,
      changeDeadlineDate,
    } = updateTaskStore;

    useEffect(() => {
      changeName(task.title);
      changeDescription(task.description);
      changePriority(task.priority);
      changeDeadlineDate(new Date(task.deadlineDate));
    }, []);

    return (
      <Dialog
        header="Редактирование Задачи"
        visible={open}
        onHide={toggle}
        onClick={(e) => e.stopPropagation()}
      >
        <InputWrapper label="Название">
          <InputText
            value={name}
            onChange={(e) => {
              changeName(e.target.value);
            }}
          />
        </InputWrapper>
        <br />
        <InputWrapper label="Описание">
          <InputTextarea
            value={description}
            onChange={(e) => {
              changeDescription(e.target.value);
            }}
          />
        </InputWrapper>
        <br />
        <InputWrapper label="Категория">
          <Dropdown
            value={selectedTechnoligy}
            options={DROPDOWN_TECHNOLIGIES}
            optionLabel="name"
            onChange={(e) => {
              changeTechnology(e.target.value);
            }}
          />
        </InputWrapper>
        <br />
        <InputWrapper label="Приоритет">
          <Dropdown
            value={selectedPriority}
            options={DROPDOWN_PRIORITIES}
            optionLabel="name"
            onChange={(e) => {
              changePriority(e.target.value);
            }}
          />
        </InputWrapper>
        <br />
        <InputWrapper label="Дата сдачи">
          <Calendar
            value={deadlineDate}
            onChange={(e) => changeDeadlineDate(e.value)}
            showIcon
            minDate={new Date()}
          />
        </InputWrapper>
        <p>Дропдаун для пиопле</p>
        <br />
        <div className={styles.createBtnWrapper}>
          <Button
            label="Обновить"
            onClick={() => {
              updateTask({});
              toggle();
            }}
          />
          <Button
            severity="danger"
            label="Удалить"
            onClick={() => {
              deleteTask(task.id);
              toggle();
            }}
          />
        </div>
      </Dialog>
    );
  }
);

export default UpdateTaskModal;
