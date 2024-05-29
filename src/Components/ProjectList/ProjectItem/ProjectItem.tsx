import { Button } from "primereact/button";
import styles from "./ProjectItem.module.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ id, namespace }) => {
  const op = useRef(null);
  const navigate = useNavigate();

  // no use for useCallback
  // TODO: create consts for route paths
  const onItemClick = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div className={styles.wrapper} onClick={onItemClick}>
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
        <OverlayPanel
          ref={op}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Button text label="Редактировать" />
          <Button text severity="danger" label="Удалить" />
        </OverlayPanel>
      </div>
    </div>
  );
};

export default ProjectItem;
