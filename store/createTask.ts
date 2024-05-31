import { makeAutoObservable } from "mobx";

class CreateTask {
  name = "";
  description = "";
  userId = null;
  selectedTechnoligy = null;
  selectedPriority = null;
  deadlineDate = null;

  changeName = (value) => {
    this.name = value;
  };

  changeDescription = (value) => {
    this.description = value;
  };

  changeTechnology = (value) => {
    this.selectedTechnoligy = value;
  };

  changePriority = (value) => {
    this.selectedPriority = value;
  };

  changeDeadlineDate = (value) => {
    this.deadlineDate = value;
  };

  changeUserId = (value) => {
    this.userId = value;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new CreateTask();
