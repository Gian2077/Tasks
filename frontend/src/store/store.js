import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";
import dateReducer from "./date/dateSlice";
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    date: dateReducer,
  },
});
