import React from "react";
import styles from "./Column.module.css";
import Card from "../../Card";

const Column = ({ title, tasks }) => {
  console.log("tasks", tasks);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.gape}></div>
      {tasks.map((task) => (
        <Card key={task.id} data={task} />
      ))}
    </div>
  );
};

export default Column;
