import React, { useCallback, useMemo } from "react";
import styles from "./Columns.module.css";
import Column from "./Column/Column";
import { WORKFLOW } from "../../conts/main";

const Columns = ({ tasks, updateTask, deleteTask, users }) => {
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
        users={users}
        title="Созданные"
        tasks={toDoCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Column
        users={users}
        title="В работе"
        tasks={inProgressCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Column
        users={users}
        title="Тестирование"
        tasks={testingCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Column
        users={users}
        title="Выполненные"
        tasks={doneCol}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Columns;
