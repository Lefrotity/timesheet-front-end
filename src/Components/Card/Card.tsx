import React from "react";
import styles from "./Card.module.css";
import { Button } from "primereact/button";

// разбить на мелкую дату
const Card = ({ data }) => {
  const style = { borderColor: "#b215bd" };
  return (
    <div className={styles.cardWrapper} style={style}>
      <Button label="Submit" />
    </div>
  );
};

export default Card;
