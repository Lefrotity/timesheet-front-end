import { Dialog } from "primereact/dialog";
import styles from "./CreateTaskModal.module.css";
import InputWrapper from "../InputWrapper";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { observer } from "mobx-react-lite";
import createTaskStore from "../../../store/createTask";
import { Dropdown } from "primereact/dropdown";
import {
  DROPDOWN_PRIORITIES,
  DROPDOWN_TECHNOLIGIES,
  PRIORITY_RAW_NAMES,
} from "../../conts/main";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useParams } from "react-router-dom";

const CreateTaskModal = observer(
  ({ open, toggle, createTask, updateLoading, users }) => {
    const { id } = useParams();

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
      userId,
      changeUserId,
    } = createTaskStore;

    return (
      <Dialog header="Создание Задачи" visible={open} onHide={toggle}>
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
        {/* <InputWrapper label="Категория">
          <Dropdown
            value={selectedTechnoligy}
            options={DROPDOWN_TECHNOLIGIES}
            optionLabel="name"
            onChange={(e) => {
              changeTechnology(e.target.value);
            }}
          />
        </InputWrapper>
        <br /> */}
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
        <InputWrapper label="Исполнитель">
          <Dropdown
            value={userId}
            options={users}
            optionLabel="name"
            onChange={(e) => {
              changeUserId(e.target.value);
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
        <br />
        <div className={styles.createBtnWrapper}>
          <Button
            loading={updateLoading}
            label="Создать"
            onClick={() => {
              createTask({
                title: name || "No name",
                description,
                priority: selectedPriority || PRIORITY_RAW_NAMES.LOW,
                deadlineDate: deadlineDate || new Date(),
                projectId: +id,
                workflow: "NEW",
                userId: userId || 1,
              });
              toggle();
            }}
          />
        </div>
      </Dialog>
    );
  }
);

export default CreateTaskModal;
