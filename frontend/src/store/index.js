import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasks/taskSlice";
import stepReducer from "./slices/steps/stepSlice";
import dateReducer from "./slices/date/dateSlice";
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    steps: stepReducer,
    date: dateReducer,
  },
});
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.tasks.tasks));
  localStorage.setItem("steps", JSON.stringify(state.steps.steps));
  localStorage.setItem("nextId", JSON.stringify(state.tasks.nextId));
});
