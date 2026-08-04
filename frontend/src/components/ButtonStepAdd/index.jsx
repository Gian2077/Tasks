import styles from "./ButtonStepAdd.module.css";
export function ButtonStepAdd({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <i className="bi bi-plus"></i>
    </button>
  );
}
