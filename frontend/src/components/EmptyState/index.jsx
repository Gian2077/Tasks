import styles from "./EmptyState.module.css";
export function EmptyState() {
  return (
    <>
      <div className={styles.container}>
        <i className="bi bi-file-earmark"></i>
      </div>
    </>
  );
}
