import { useSelector, useDispatch } from "react-redux";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { reorderTasks } from "../../store/slices/task/taskSlice";
import { EmptyState } from "../EmptyState";
import { Task } from "../Task";
import { Tasks } from "../Tasks";
import styles from "./TaskGroup.module.css";
export function TaskGroup({ title, type }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.type === type),
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    dispatch(reorderTasks({ type, activeId: active.id, overId: over.id }));
  };
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <Tasks>
            {tasks.map((task) => {
              return <Task key={task.id} task={task} />;
            })}
            {tasks.length === 0 && <EmptyState />}
          </Tasks>
        </SortableContext>
      </DndContext>
    </section>
  );
}
