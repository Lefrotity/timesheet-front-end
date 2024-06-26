import React, { useCallback, useState } from "react";
import styles from "./Card.module.css";
import { Button } from "primereact/button";
import { COLORS, PRIORITY_COLORS } from "../../conts/main";
import PriorityCard from "../PriorityCard";
import ProgressBadge from "../ProgressBadge";
import UpdateTaskModal from "../UpdateTaskModal";

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

const Card = ({ data, updateTask, deleteTask, users }) => {
  const statusColor = COLORS[data.workflow];
  const cardStyle = { borderColor: statusColor };

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setOpenModal((prevState) => !prevState);
  }, [setOpenModal]);

  return (
    <div className={styles.cardWrapper} style={cardStyle} onClick={toggleModal}>
      <UpdateTaskModal
        users={users}
        task={data}
        open={openModal}
        toggle={toggleModal}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <div className={styles.shortInfo}>
        <div className={styles.title}>
          <b>#{data.id}</b> {data.title}
        </div>
        <br />
        <div className={styles.description}>
          {data.description || "No description"}
        </div>
        <br />
        <div className={styles.info}>
          <PriorityCard type={data.priority} />
          <ProgressBadge type={data.workflow} />
        </div>
        <div className={styles.deadlineDate}>
          {new Date(data.deadlineDate)
            .toLocaleDateString()
            .replaceAll(".", "/")}
        </div>
      </div>
    </div>
  );
};

export default Card;
