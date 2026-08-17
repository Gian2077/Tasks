import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../../../api/taskService.js";
import {
  resetTasks,
  toggleTask,
  completeTask,
  uncompleteTask,
} from "./taskSlice.js";
import { shouldReset } from "../../../utils/recurrenceUtils.js";
import { resetSteps } from "../steps/stepSlice.js";
import { EXP_PER_TYPE } from "../../../utils/expConstants.js";
import { addExp } from "../exp/expSlice.js";
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await getTasks();
  localStorage.setItem("tasks", JSON.stringify(response.data));
  const nextId =
    response.data.length > 0
      ? Math.max(...response.data.map((task) => task.id)) + 1
      : 1;
  localStorage.setItem("nextId", nextId);
  return { tasks: response.data, nextId };
});
export const checkCompleted = createAsyncThunk(
  "tasks/checkCompleted",
  async (_, { dispatch, getState }) => {
    const state = getState();
    const { DAY, DAY_WEEK, MONTH, YEAR } = state.date;
    const tasksById = Object.fromEntries(
      state.tasks.tasks.map((task) => [task.id, task]),
    );
    const resetTaskIds = state.tasks.tasks
      .filter((task) => shouldReset(task, DAY, DAY_WEEK, MONTH, YEAR))
      .map((task) => task.id);
    const resetStepIds = state.steps.steps
      .filter((step) => {
        const parentTask = tasksById[step.task_id];
        if (!parentTask) return false;
        return shouldReset(
          {
            completed: step.completed,
            dateCompleted: step.dateCompleted,
            type: parentTask.type,
          },
          DAY,
          DAY_WEEK,
          MONTH,
          YEAR,
        );
      })
      .map((step) => step.id);
    dispatch(resetSteps(resetStepIds));
    dispatch(resetTasks(resetTaskIds));
  },
);
export const toggleTaskWithExp = createAsyncThunk(
  "tasks/toggleTaskWithExp",
  async (task, { dispatch }) => {
    const willComplete = !task.completed;
    dispatch(toggleTask(task));
    dispatch(
      addExp(willComplete ? EXP_PER_TYPE[task.type] : -EXP_PER_TYPE[task.type]),
    );
  },
);
export const completeTaskWithExp = createAsyncThunk(
  "tasks/completeTaskWithExp",
  async (task, { dispatch }) => {
    if (task.completed) return;
    dispatch(completeTask(task));
    dispatch(addExp(EXP_PER_TYPE[task.type]));
  },
);
export const uncompleteTaskWithExp = createAsyncThunk(
  "tasks/uncompleteTaskWithExp",
  async (task, { dispatch }) => {
    if (!task.completed) return;
    dispatch(uncompleteTask(task));
    dispatch(addExp(-EXP_PER_TYPE[task.type]));
  },
);
