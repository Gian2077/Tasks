import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus";
import styles from "./Steps.module.css";

export function Steps() {
  return (
    <>
      <ol className={styles.ol}>
        <li className={styles.li}>
          <div className={styles.wrapper}>
            <h4>Step 1</h4>
          </div>
          <div className={styles.actions}>
            <i className={`${styles.i} bi bi-check-circle`}></i>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.wrapper}>
            <h4>Step 2</h4>
          </div>
          <div className={styles.actions}>
            <i className={`${styles.i} bi bi-check-circle`}></i>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.wrapper}>
            <h4>Step 3</h4>
          </div>
          <div className={styles.actions}>
            <i className={`${styles.i} bi bi-check-circle`}></i>
          </div>
        </li>
      </ol>
    </>
  );
}
