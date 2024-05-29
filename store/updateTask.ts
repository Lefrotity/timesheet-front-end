import { makeAutoObservable } from "mobx";

class UpdateTask {
  name = "";
  description = "";
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

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UpdateTask();
