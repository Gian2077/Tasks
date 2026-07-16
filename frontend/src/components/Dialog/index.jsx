import { useEffect, useRef, use } from "react";
import styles from "./Dialog.module.css";
import taskContext from "../../context/TaskContext";
import { FormTask } from "../FormTask/index.jsx";
export function Dialog({ isOpen, onClose }) {
  const { closeDialog, targetTask, addTask, editTask } = use(taskContext);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  const handleFormSubmit = (formData) => {
    if (targetTask) {
      editTask(formData);
    } else {
      addTask(formData);
    }
    closeDialog();
  };
  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {targetTask ? "Edit Task" : "Add Task"}
          </h2>
          <button className={styles.btn} onClick={onClose}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className={styles.body}>
          {isOpen && (
            <FormTask
              onSubmit={handleFormSubmit}
              taskTitle={targetTask?.title}
              taskType={targetTask?.type}
              taskDescription={targetTask?.description}
            />
          )}
        </div>
      </dialog>
    </>
  );
}
