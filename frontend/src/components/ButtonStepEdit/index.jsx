import styles from "./ButtonStepEdit.module.css";
export function ButtonStepEdit({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <i className="bi bi-pencil"></i>
    </button>
  );
}
