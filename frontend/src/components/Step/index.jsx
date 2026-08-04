import { useDispatch } from "react-redux";
import { toggleStep } from "../../store/slices/steps/stepSlice";
import { ButtonStepToggleStatus } from "../ButtonStepToggleStatus";
import styles from "./Step.module.css";
export function Step({ step }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={`${styles.li} ${step.completed ? styles.completed : ""}`}>
        <div className={styles.wrapper}>
          <h4>{step.title}</h4>
        </div>
        <div className={styles.actions}>
          <ButtonStepToggleStatus
            onClick={() => dispatch(toggleStep(step))}
            step={step}
          />
        </div>
      </li>
    </>
  );
}
