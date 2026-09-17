import styles from "./FormStep.module.css";
export function FormStep({ onSubmit, taskId, stepTitle }) {
  return (
    <>
      <form action={onSubmit} className={styles.form}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={stepTitle}
          placeholder="Step Title"
        />
        <button className={styles.btn}>
          {stepTitle ? "Edit Step" : "Add Step"}
        </button>
      </form>
    </>
  );
}
