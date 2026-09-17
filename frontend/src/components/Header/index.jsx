import styles from "./Header.module.css";
import { ExperienceBar } from "../ExperienceBar";
export function Header() {
  return (
    <>
      <header className={styles.header}>
        <ExperienceBar />
        <h1>Tasks</h1>
      </header>
    </>
  );
}
