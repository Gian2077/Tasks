import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/slices/tasks/taskSlice.js";
import { toggleStep, deleteStep } from "../../store/slices/steps/stepSlice";
import { ButtonStepToggleStatus } from "../ButtonStepToggleStatus";
import styles from "./Step.module.css";
import { ButtonStepDelete } from "../ButtonStepDelete";
import { ButtonStepEdit } from "../ButtonStepEdit";
export function Step({ step }) {
  const dispatch = useDispatch();
  const stepRef = useRef(null);
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
    const step = stepRef.current;
    if (!step) return;
    const text = textRef.current;
    checkOverflow(text);
    step.style.setProperty(
      "--overflow-width",
      `-${calcOverflow(text) + 10}cqw`,
    );
    step.style.setProperty(
      "--animation-speed",
      `${calcOverflow(text) / 30 > 2 ? calcOverflow(text) / 30 : 5}s`,
    );
    window.addEventListener("resize", checkOverflow);
    return window.removeEventListener("resize", checkOverflow);
  }, [step.title]);
  return (
    <>
      <li
        className={`${styles.li} ${step.completed ? styles.completed : ""}`}
        ref={stepRef}
      >
        <div className={styles.wrapper}>
          <h4
            className={`${styles.title} ${isOverflowing ? styles.overflowing : ""}`}
            ref={textRef}
          >
            {step.title}
          </h4>
        </div>
        <div className={styles.actions}>
          <ButtonStepToggleStatus
            onClick={() => dispatch(toggleStep(step))}
            step={step}
          />
          <ButtonStepEdit onClick={() => dispatch(openDialog(step))} />
          <ButtonStepDelete onClick={() => dispatch(deleteStep(step.id))} />
        </div>
      </li>
    </>
  );
}
