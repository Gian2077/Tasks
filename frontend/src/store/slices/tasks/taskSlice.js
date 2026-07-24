import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./taskThunks";
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
    resetTasks(state, action) {
      const { DAY, DAY_WEEK, MONTH, YEAR } = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (!task.completed) return task;
        const dateObject = new Date(task.dateCompleted);
        const dayCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[2],
        );
        const dayWeekCompleted = Number(dateObject.getUTCDay());
        const monthCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[1],
        );
        const yearCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[0],
        );
        switch (task.type) {
          case "Daily":
            if (MONTH !== monthCompleted || DAY > dayCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "Weekly":
            if (DAY !== dayCompleted && DAY_WEEK === 0) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            } else if (DAY_WEEK < dayWeekCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "Monthly":
            if (YEAR !== yearCompleted || MONTH > monthCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "Yearly":
            if (YEAR !== yearCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
        }
        return task;
      });
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
  targetTask,
  addTask,
  toggleTask,
  editTask,
  deleteTask,
  resetTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
