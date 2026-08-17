import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasks/taskSlice";
import stepReducer from "./slices/steps/stepSlice";
import dateReducer from "./slices/date/dateSlice";
import dialogReducer from "./slices/dialog/dialogSlice";
import expReducer from "./slices/exp/expSlice";
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    steps: stepReducer,
    date: dateReducer,
    dialog: dialogReducer,
    exp: expReducer,
  },
});
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.tasks.tasks));
  localStorage.setItem("steps", JSON.stringify(state.steps.steps));
  localStorage.setItem("nextId", JSON.stringify(state.tasks.nextId));
  localStorage.setItem("nextStepId", JSON.stringify(state.steps.nextId));
  localStorage.setItem("exp", JSON.stringify(state.exp.exp));
});
