import styles from "./Tasks.module.css";
export function Tasks({ children }) {
  return (
    <>
      <ul className={styles.tasks}>{children}</ul>
    </>
  );
}
