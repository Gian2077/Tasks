import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./taskThunks";
const savedTasks = localStorage.getItem("tasks");
const initialState = {
  tasks: savedTasks ? JSON.parse(savedTasks) : [],
  nextId: savedTasks ? JSON.parse(localStorage.getItem("nextId")) : 1,
  loading: false,
  error: null,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
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
    },
    toggleTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (!task) return;
      task.completed = !task.completed;
      task.dateCompleted = task.completed ? new Date().toISOString() : null;
    },
    completeTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (!task || task.completed) return;
      task.completed = true;
      task.dateCompleted = new Date().toISOString();
    },
    uncompleteTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (!task || !task.completed) return;
      task.completed = false;
      task.dateCompleted = null;
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
    resetTasks(state, action) {
      const taskIds = action.payload;
      state.tasks = state.tasks.map((task) =>
        taskIds.includes(task.id)
          ? {
              ...task,
              completed: false,
              dateCompleted: null,
            }
          : task,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.tasks;
        state.nextId = action.payload.nextId;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
  openDialog,
  closeDialog,
  addTask,
  toggleTask,
  completeTask,
  uncompleteTask,
  editTask,
  deleteTask,
  resetTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
