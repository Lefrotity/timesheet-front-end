import { Dialog } from "primereact/dialog";
import styles from "./CreateTaskModal.module.css";
import InputWrapper from "../InputWrapper";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { observer } from "mobx-react-lite";
import createTask from "../../../store/createTask";
import { Dropdown } from "primereact/dropdown";
import { DROPDOWN_PRIORITIES, DROPDOWN_TECHNOLIGIES } from "../../conts/main";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const CreateTaskModal = observer(({ open, toggle }) => {
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
  } = createTask;

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
        <Button label="Создать" />
      </div>
    </Dialog>
  );
});

export default CreateTaskModal;
