import React, { useCallback, useMemo } from "react";
import styles from "./Columns.module.css";
import Column from "./Column/Column";
import { WORKFLOW } from "../../conts/main";

const Columns = ({ tasks, updateTask, deleteTask }) => {
  const toDoCol = useMemo(
    () =>
      tasks.filter(
        ({ workflow }) =>
          workflow === WORKFLOW.NEW || workflow === WORKFLOW.TO_DO
      ),
    [tasks]
  );

  const inProgressCol = useMemo(
    () => tasks.filter(({ workflow }) => workflow === WORKFLOW.IN_PROGRESS),
    [tasks]
  );

  const testingCol = useMemo(
    () => tasks.filter(({ workflow }) => workflow === WORKFLOW.TEST),
    [tasks]
  );

  const doneCol = useMemo(
    () => tasks.filter(({ workflow }) => workflow === WORKFLOW.DONE),
    [tasks]
  );

  return (
    <div className={styles.wrapper}>
      <Column
        title="Созданные"
        tasks={toDoCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Column
        title="В работе"
        tasks={inProgressCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Column
        title="Тестирование"
        tasks={testingCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Column
        title="Выполненные"
        tasks={doneCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Columns;
