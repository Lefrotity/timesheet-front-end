import React from "react";
import styles from "./Column.module.css";
import Card from "../../Card";

const Column = ({ title, cardData }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.gape}></div>
      {cardData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Column;
