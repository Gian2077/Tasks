import { use, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openDialog,
  toggleTask,
  deleteTask,
} from "../../store/slices/tasks/taskSlice.js";
import styles from "./Task.module.css";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/index.jsx";
import { ButtonTaskEdit } from "../ButtonTaskEdit/index.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/index.jsx";
export function Task({ task }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const showDialog = useSelector((state) => state.tasks.showDialog);
  const targetTask = useSelector((state) => state.tasks.targetTask);
  const taskRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const checkOverflow = (text) => {
    const overflowing = text.scrollWidth > text.clientWidth;
    setIsOverflowing(overflowing);
  };
  const calcOverflow = (text) => {
    return text.scrollWidth - text.clientWidth;
  };
  useLayoutEffect(() => {
    const task = taskRef.current;
    if (!task) return;
    const text = textRef.current;
    checkOverflow(text);
    task.style.setProperty(
      "--overflow-width",
      `-${calcOverflow(text) + 10}cqw`,
    );
    task.style.setProperty(
      "--animation-speed",
      `${calcOverflow(text) / 30 > 2 ? calcOverflow(text) / 30 : 5}s`,
    );
    window.addEventListener("resize", checkOverflow);
    return window.removeEventListener("resize", checkOverflow);
  }, [task.title]);
  return (
    <>
      <li className={`${styles.task} `}>
        <details className={styles.details}>
          <summary
            className={`${styles.summary} ${task.completed ? styles.completed : ""}`}
            ref={taskRef}
          >
            <div className={styles.wrapper}>
              <h3
                className={`${styles.title} ${isOverflowing ? styles.overflowing : ""}`}
                ref={textRef}
              >
                {task.title}
              </h3>
            </div>
            <div className={styles.actions}>
              <ButtonTaskToggleStatus
                onClick={() => dispatch(toggleTask(task))}
                task={task}
              />
              <ButtonTaskEdit onClick={() => dispatch(openDialog(task))} />
              <ButtonTaskDelete onClick={() => dispatch(deleteTask(task.id))} />
            </div>
          </summary>
          <p>{task.description}</p>
        </details>
      </li>
    </>
  );
}
