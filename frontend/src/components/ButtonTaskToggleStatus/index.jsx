import styles from "./ButtonTaskToggleStatus.module.css";
export function ButtonTaskToggleStatus({ onClick, task }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i
          className={
            task.completed
              ? `bi bi-x-circle ${styles.red}`
              : `bi bi-check-circle ${styles.green}`
          }
        ></i>
      </button>
    </>
  );
}
