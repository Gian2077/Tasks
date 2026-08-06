import styles from "./ButtonStepAdd.module.css";
export function ButtonStepAdd({ onClick, firstStep }) {
  return (
    <button
      className={firstStep ? styles.btn : styles.button}
      onClick={onClick}
    >
      {firstStep ? "Add First Step" : <i className="bi bi-plus"></i>}
    </button>
  );
}
