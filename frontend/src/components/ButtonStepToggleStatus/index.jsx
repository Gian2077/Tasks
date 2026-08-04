import styles from "./ButtonStepToggleStatus.module.css";
export function ButtonStepToggleStatus({ onClick, step }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i
          className={
            step.completed
              ? `bi bi-x-circle ${styles.red}`
              : `bi bi-check-circle ${styles.green}`
          }
        ></i>
      </button>
    </>
  );
}
