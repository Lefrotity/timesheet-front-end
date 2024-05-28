import React, { useCallback, useMemo } from "react";
import styles from "./Columns.module.css";
import Column from "./Column/Column";
import { WORKFLOW } from "../../conts/main";

const Columns = () => {
  const tasks = [
    {
      id: 0,
      title: "Задача на интеллект",
      description: "Сложная задача шо капец",
      priority: "HIGH",
      deadlineDate: "2024-05-28T13:24:33.682Z",
      createdDate: "2024-05-28T13:24:33.682Z",
      closedDate: "2024-05-28T13:24:33.682Z",
      assignedUser: {
        id: 0,
      },
      project: {
        id: 0,
        namespace: "string",
      },
      workflow: "NEW",
    },
    {
      id: 1,
      title: "string",
      description: "string",
      priority: "HIGH",
      deadlineDate: "2024-05-28T13:24:33.682Z",
      createdDate: "2024-05-28T13:24:33.682Z",
      closedDate: "2024-05-28T13:24:33.682Z",
      assignedUser: {
        id: 0,
      },
      project: {
        id: 0,
        namespace: "string",
      },
      workflow: "TO_DO",
    },
    {
      id: 2,
      title: "string",
      description: "string",
      priority: "HIGH",
      deadlineDate: "2024-05-28T13:24:33.682Z",
      createdDate: "2024-05-28T13:24:33.682Z",
      closedDate: "2024-05-28T13:24:33.682Z",
      assignedUser: {
        id: 0,
      },
      project: {
        id: 0,
        namespace: "string",
      },
      workflow: "IN_PROGRESS",
    },
    {
      id: 3,
      title: "string",
      description: "string",
      priority: "HIGH",
      deadlineDate: "2024-05-28T13:24:33.682Z",
      createdDate: "2024-05-28T13:24:33.682Z",
      closedDate: "2024-05-28T13:24:33.682Z",
      assignedUser: {
        id: 0,
      },
      project: {
        id: 0,
        namespace: "string",
      },
      workflow: "TEST",
    },
    {
      id: 4,
      title: "string",
      description: "string",
      priority: "HIGH",
      deadlineDate: "2024-05-28T13:24:33.682Z",
      createdDate: "2024-05-28T13:24:33.682Z",
      closedDate: "2024-05-28T13:24:33.682Z",
      assignedUser: {
        id: 0,
      },
      project: {
        id: 0,
        namespace: "string",
      },
      workflow: "DONE",
    },
  ];

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
      <Column title="Созданные" tasks={toDoCol} />
      <Column title="В работе" tasks={inProgressCol} />
      <Column title="Тестирование" tasks={testingCol} />
      <Column title="Выполненные" tasks={doneCol} />
    </div>
  );
};

export default Columns;
