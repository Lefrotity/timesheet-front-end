import { Button } from "primereact/button";
import styles from "./ProjectItem.module.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";

const ProjectItem = ({ id, namespace }) => {
  const op = useRef(null);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        console.log("Go to To do, In progress...");
      }}
    >
      <div className={styles.id}>
        <b>#{id}</b>
      </div>

      <div className={styles.namespace}>{namespace}</div>

      <div className={styles.controls}>
        <Button
          text
          label="Настройки"
          onClick={(e) => {
            e.stopPropagation();
            op.current.toggle(e);
          }}
        />
        <OverlayPanel ref={op}>
          <Button text label="Редактировать" />
          <Button text severity="danger" label="Удалить" />
        </OverlayPanel>
      </div>
    </div>
  );
};

export default ProjectItem;
