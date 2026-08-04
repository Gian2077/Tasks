import styles from "./FormStep.module.css";
export function FormStep({ onSubmit, taskId }) {
  return (
    <>
      <form action={onSubmit} className={styles.form}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Step Title"
        />
        <button className={styles.btn}>Add Step</button>
      </form>
    </>
  );
}
