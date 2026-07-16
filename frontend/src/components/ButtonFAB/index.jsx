import styles from "./ButtonFAB.module.css";
export function ButtonFAB({ onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i className="bi bi-plus"></i>
      </button>
    </>
  );
}
