import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  completeTask,
  uncompleteTask,
} from "../../store/slices/tasks/taskSlice";
import { openDialog } from "../../store/slices/dialog/dialogSlice.js";
import styles from "./Steps.module.css";
import { Step } from "../Step";
import { ButtonStepAdd } from "../ButtonStepAdd";
import {
  completeTaskWithExp,
  uncompleteTaskWithExp,
} from "../../store/slices/tasks/taskThunks.js";
export function Steps({ task, steps }) {
  const dispatch = useDispatch();
  const allCompleted =
    steps.length > 0 && steps.every((step) => step.completed);
  useEffect(() => {
    if (allCompleted) {
      dispatch(completeTaskWithExp({ id: steps[0].task_id }));
    } else {
      dispatch(uncompleteTaskWithExp({ id: steps[0].task_id }));
    }
  }, [allCompleted, dispatch, task]);
  return (
    <div className={styles.steps}>
      <ol className={styles.ol}>
        {steps.map((step) => {
          return <Step key={step.id} step={step} />;
        })}
      </ol>
      <ButtonStepAdd
        onClick={() => {
          dispatch(openDialog({ task_id: steps[0].task_id }));
        }}
      />
    </div>
  );
}
