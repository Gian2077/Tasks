import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus";
import { Step } from "../Step";
import styles from "./Steps.module.css";

export function Steps() {
  return (
    <>
      <ol className={styles.ol}>
        <Step Step={"Step 1"}></Step>
        <Step Step={"Step 2"}></Step>
        <Step Step={"Step 3"}></Step>
      </ol>
    </>
  );
}
