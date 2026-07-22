import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialog,
  addTask,
  editTask,
} from "../../store/slices/tasks/taskSlice.js";
import styles from "./Dialog.module.css";
import { FormTask } from "../FormTask/index.jsx";
export function Dialog() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.tasks.showDialog);
  const targetTask = useSelector((state) => state.tasks.targetTask);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  const handleFormSubmit = (formData) => {
    const data = {
      title: formData.get("title"),
      type: formData.get("type"),
      description:
        formData.get("description") || "This task has no description.",
    };
    if (targetTask) {
      dispatch(
        editTask({
          id: targetTask.id,
          ...data,
        }),
      );
    } else {
      dispatch(addTask(data));
    }
    dispatch(closeDialog());
  };
  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {targetTask ? "Edit Task" : "Add Task"}
          </h2>
          <button
            className={styles.btn}
            onClick={() => dispatch(closeDialog())}
          >
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
