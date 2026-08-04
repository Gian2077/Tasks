import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../../../api/taskService.js";
import { resetTasks } from "./taskSlice.js";
import { shouldReset } from "../../../utils/recurrenceUtils.js";
import { resetSteps } from "../steps/stepSlice.js";
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
    const resetTaskIds = state.tasks.tasks
      .filter((task) => shouldReset(task, DAY, DAY_WEEK, MONTH, YEAR))
      .map((task) => task.id);
    dispatch(resetSteps(resetTaskIds));
    dispatch(resetTasks(resetTaskIds));
  },
);
