import React from "react";
import styles from "./Card.module.css";

// разбить на мелкую дату
const Card = ({ data }) => {
  const style = { borderColor: "#b215bd" };
  return <div className={styles.cardWrapper} style={style}></div>;
};

export default Card;
