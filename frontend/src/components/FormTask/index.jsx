import { useState, useEffect } from "react";
import styles from "./FormTask.module.css";
export function FormTask({ onSubmit, taskTitle, taskType, taskDescription }) {
  const [type, setType] = useState("");
  useEffect(() => {
    if (taskType) {
      setType(taskType);
    }
  }, [taskType]);
  return (
    <>
      <form action={onSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="daily"
              value="Daily"
              required
              checked={type === "Daily"}
              onChange={() => setType("Daily")}
            />
            <label htmlFor="daily">Daily</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="weekly"
              value="Weekly"
              checked={type === "Weekly"}
              onChange={() => setType("Weekly")}
            />
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="monthly"
              value="Monthly"
              checked={type === "Monthly"}
              onChange={() => setType("Monthly")}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="yearly"
              value="Yearly"
              checked={type === "Yearly"}
              onChange={() => setType("Yearly")}
            />
            <label htmlFor="yearly">Yearly</label>
          </div>
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={taskTitle}
            placeholder="Task Title"
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Task Description"
            defaultValue={taskDescription}
          ></textarea>
        </div>
        <button className={styles.btn}>
          {taskTitle ? "Edit Task" : "Add Task"}
        </button>
      </form>
    </>
  );
}
