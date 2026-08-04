import styles from "./ButtonTaskEdit.module.css";
export function ButtonTaskEdit({ onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i className="bi bi-pencil"></i>
      </button>
    </>
  );
}
