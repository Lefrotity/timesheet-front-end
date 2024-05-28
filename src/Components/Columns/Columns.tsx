import React from "react";
import styles from "./Columns.module.css";
import Column from "./Column/Column";

const Columns = () => {
  // филтрануть таски и раскидать по нужным колонкам
  const tasks = [
    { id: 1, name: "todo", code: 1 },
    { id: 2, name: "dev", code: 2 },
    { id: 3, name: "test", code: 3 },
    { id: 4, name: "done", code: 4 },
  ];

  return (
    <div className={styles.wrapper}>
      <Column title="Созданные" cardData={tasks} />
      <Column title="В работе" cardData={tasks} />
      <Column title="Тестирование" cardData={[]} />
      <Column title="Выполненные" cardData={tasks} />
    </div>
  );
};

export default Columns;
