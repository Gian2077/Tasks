import styles from "./Footer.module.css";
export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p id={styles.developer}>Developed by Gian2077</p>
        <p id={styles.version}>Version 2.0.0</p>
      </footer>
    </>
  );
}
