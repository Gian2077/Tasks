import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../store/slices/tasks/taskSlice.js";
import { closeDialog } from "../../store/slices/dialog/dialogSlice.js";
import { addStep, editStep } from "../../store/slices/steps/stepSlice.js";
import styles from "./Dialog.module.css";
import { FormTask } from "../FormTask/index.jsx";
import { FormStep } from "../FormStep/index.jsx";
export function Dialog() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.showDialog);
  const targetTask = useSelector((state) => state.dialog.targetTask);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  const handleFormSubmit = (formData) => {
    if (targetTask?.task_id) {
      if (targetTask?.title) {
        const data = {
          id: targetTask.id,
          title: formData.get("title"),
          task_id: targetTask.task_id,
        };
        dispatch(editStep(data));
      } else {
        const data = {
          title: formData.get("title"),
          task_id: targetTask.task_id,
        };
        dispatch(addStep(data));
      }
    } else {
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
    }
    dispatch(closeDialog());
  };
  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {targetTask?.task_id
              ? targetTask?.title
                ? "Edit Step"
                : "Add Step"
              : targetTask
                ? "Edit Task"
                : "Add Task"}
          </h2>
          <button
            className={styles.btn}
            onClick={() => dispatch(closeDialog())}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className={styles.body}>
          {isOpen && !targetTask?.task_id ? (
            <FormTask
              onSubmit={handleFormSubmit}
              taskTitle={targetTask?.title}
              taskType={targetTask?.type}
              taskDescription={targetTask?.description}
            />
          ) : isOpen && targetTask?.task_id ? (
            <FormStep
              onSubmit={handleFormSubmit}
              taskId={targetTask?.task_id}
              stepTitle={targetTask?.title}
            />
          ) : null}
        </div>
      </dialog>
    </>
  );
}
