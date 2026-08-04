import styles from "./ButtonTaskDelete.module.css";
export function ButtonTaskDelete({ onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </>
  );
}
