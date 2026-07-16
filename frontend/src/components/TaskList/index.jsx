import { EmptyState } from "../EmptyState";
import { Task } from "../Task";
import { Tasks } from "../Tasks";
import styles from "./TaskList.module.css";
export function TaskList({ title, tasks }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <Tasks>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
        {tasks.length === 0 && <EmptyState />}
      </Tasks>
    </section>
  );
}
