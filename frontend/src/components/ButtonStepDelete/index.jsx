import styles from "./ButtonStepDelete.module.css";
export function ButtonStepDelete({ onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </>
  );
}
