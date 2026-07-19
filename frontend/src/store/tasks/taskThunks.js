import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../../api/taskService";
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await getTasks();
  (localStorage.setItem("tasks"), JSON.stringify(response.data));
  const nextId =
    response.data.length > 0
      ? Math.max(...response.data.map((task) => task.id)) + 1
      : 1;
  localStorage.setItem("nextId", nextId);
});
