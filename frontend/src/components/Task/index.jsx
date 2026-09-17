import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { openDialog } from "../../store/slices/dialog/dialogSlice.js";
import { deleteTask } from "../../store/slices/task/taskSlice.js";
import { toggleTaskWithExp } from "../../store/slices/task/taskThunks.js";
import styles from "./Task.module.css";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/index.jsx";
import { ButtonTaskEdit } from "../ButtonTaskEdit/index.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/index.jsx";
import { Steps } from "../Steps/index.jsx";
import { ButtonStepAdd } from "../ButtonStepAdd/index.jsx";
export function Task({ task }) {
  const dispatch = useDispatch();
  const steps = useSelector((state) =>
    state.steps.steps.filter((step) => step.task_id === task.id),
  );
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };
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
    return () => window.removeEventListener("resize", checkOverflow);
  }, [task.title]);
  return (
    <>
      <li ref={setNodeRef} style={style} className={`${styles.task} `}>
        <details className={styles.details}>
          <summary
            className={`${styles.summary} ${task.completed ? styles.completed : ""}`}
            ref={taskRef}
          >
            <button
              {...attributes}
              {...listeners}
              className={`${styles.btn} cursor-grab active:cursor-grabbing touch-one`}
            >
              <i className="bi bi-grip-vertical"></i>
            </button>
            <div className={styles.wrapper}>
              <h3
                className={`${styles.title} ${isOverflowing ? styles.overflowing : ""}`}
                ref={textRef}
              >
                {task.title}
              </h3>
            </div>
            <div className={styles.actions}>
              {steps.length === 0 && (
                <ButtonTaskToggleStatus
                  onClick={() => dispatch(toggleTaskWithExp(task))}
                  task={task}
                />
              )}
              <ButtonTaskEdit onClick={() => dispatch(openDialog(task))} />
              <ButtonTaskDelete onClick={() => dispatch(deleteTask(task.id))} />
            </div>
          </summary>
          <p>{task.description}</p>
          {steps.length > 0 && <Steps task={task} steps={steps} />}
          {steps.length === 0 && (
            <div className={styles.wrapper}>
              <ButtonStepAdd
                onClick={() => dispatch(openDialog({ task_id: task.id }))}
                firstStep={steps.length === 0}
              />
            </div>
          )}
        </details>
      </li>
    </>
  );
}
