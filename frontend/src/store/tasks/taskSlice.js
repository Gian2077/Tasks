import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./tasksThunk";
const savedTasks = localStorage.getItem("tasks");
const initialState = {
  tasks: savedTasks ? JSON.parse(savedTasks) : [],
  nextId: savedTasks ? JSON.parse(localStorage.getItem("nextId")) : 1,
  showDialog: false,
  targetTask: null,
  loading: false,
  error: null,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    openDialog(state, action) {
      state.showDialog = true;
      state.targetTask = action.payload ?? null;
    },
    closeDialog(state) {
      state.showDialog = false;
      state.targetTask = null;
    },
    addTask(state, action) {
      const task = {
        id: state.nextId,
        publicId: crypto.randomUUID(),
        completed: false,
        dateCreated: new Date().toISOString(),
        dateCompleted: null,
        ...action.payload,
      };
      state.tasks.push(task);
      state.nextId++;
      localStorage.setItem("nextId", state.nextId);
    },
    toggleTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (!task) return;
      task.completed = !task.completed;
      task.dateCompleted = task.completed ? new Date().toISOString() : null;
    },
    editTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (!task) return;
      task.title = action.payload.title;
      task.type = action.payload.type;
      task.description = action.payload.description;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
export const {
  openDialog,
  closeDialog,
  addTask,
  toggleTask,
  editTask,
  deleteTask,
} = taskSlice.actions;
export default taskSlice.reducer;
