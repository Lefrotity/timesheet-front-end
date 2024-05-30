import { Button } from "primereact/button";
import styles from "./ProjectItem.module.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import InputWrapper from "../../InputWrapper";
import { InputText } from "primereact/inputtext";

const ProjectItem = ({
  id,
  namespace,
  updateLoading,
  updateProject,
  deleteProject,
}) => {
  const op = useRef(null);
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [newName, setNewName] = useState("");

  const toggleModal = useCallback(() => {
    setShowEditModal((prev) => !prev);
  }, [setShowEditModal]);

  // no use for useCallback
  // TODO: create consts for route paths
  const onItemClick = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div className={styles.wrapper} onClick={onItemClick}>
      <Dialog
        header="Редактировать"
        visible={showEditModal}
        onHide={toggleModal}
        onClick={(e) => e.stopPropagation()}
      >
        <InputWrapper label="Название">
          <InputText
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </InputWrapper>
        <br />
        <div className={styles.center}>
          <Button
            loading={updateLoading}
            label="Изменить"
            onClick={() => {
              updateProject({ id, namespace: newName });
              toggleModal();
            }}
          />
        </div>
      </Dialog>
      <div className={styles.id}>
        <b>#{id}</b>
      </div>

      <div className={styles.namespace}>{namespace}</div>

      <div className={styles.controls}>
        <Button
          loading={updateLoading}
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
          <Button
            loading={updateLoading}
            text
            label="Редактировать"
            onClick={toggleModal}
          />
          <Button
            loading={updateLoading}
            text
            severity="danger"
            label="Удалить"
            onClick={() => deleteProject(id)}
          />
        </OverlayPanel>
      </div>
    </div>
  );
};

export default ProjectItem;
