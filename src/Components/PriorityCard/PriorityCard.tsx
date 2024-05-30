import React from "react";
import styles from "./PriorityCard.module.css";
import { Button } from "primereact/button";
import { COLORS, PRIORITY, PRIORITY_COLORS } from "../../conts/main";

//       id: 0,
//       title: "string",
//       description: "string",
//       priority: "HIGH",
//       deadlineDate: "2024-05-28T13:24:33.682Z",
//       createdDate: "2024-05-28T13:24:33.682Z",
//       closedDate: "2024-05-28T13:24:33.682Z",

//       assignedUser: {
//         id: 0,
//       },
//       project: {
//         id: 0,
//         namespace: "string",
//       },
//       workflow: "NEW",

const PriorityCard = ({ type }) => {
  const priorityColor = PRIORITY_COLORS[type];
  const priorityCardStyle = { backgroundColor: priorityColor };

  return (
    <div className={styles.badge} style={priorityCardStyle}>
      {PRIORITY[type]}
    </div>
  );
};

export default PriorityCard;
