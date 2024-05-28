import React from "react";
import styles from "./ProgressBadge.module.css";
import { Button } from "primereact/button";
import {
  COLORS,
  PRIORITY,
  PRIORITY_COLORS,
  WORKFLOW_TRANSLATION,
} from "../../conts/main";

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

const ProgressBadge = ({ type }) => {
  const statusColor = COLORS[type];
  const badgeStyle = { backgroundColor: statusColor };

  return (
    <div className={styles.badge} style={badgeStyle}>
      {WORKFLOW_TRANSLATION[type]}
    </div>
  );
};

export default ProgressBadge;
