import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  completeTask,
  uncompleteTask,
} from "../../store/slices/tasks/taskSlice";
import styles from "./Steps.module.css";
import { Step } from "../Step";

export function Steps({ steps }) {
  const dispatch = useDispatch();
  const allCompleted =
    steps.length > 0 && steps.every((step) => step.completed);
  useEffect(() => {
    if (allCompleted) {
      dispatch(completeTask({ id: steps[0].task_id }));
    } else {
      dispatch(uncompleteTask({ id: steps[0].task_id }));
    }
  }, [allCompleted, dispatch]);
  return (
    <>
      <ol className={styles.ol}>
        {steps.map((step) => {
          return <Step key={step.id} step={step} />;
        })}
      </ol>
    </>
  );
}
