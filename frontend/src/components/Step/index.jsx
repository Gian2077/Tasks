import styles from "./Step.module.css";
export function Step({ Step }) {
  return (
    <>
      <li className={styles.li}>
        <div className={styles.wrapper}>
          <h4>{Step}</h4>
        </div>
        <div className={styles.actions}>
          <i className={`${styles.i} bi bi-check-circle`}></i>
        </div>
      </li>
    </>
  );
}
