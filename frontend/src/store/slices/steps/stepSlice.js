import { createSlice } from "@reduxjs/toolkit";
import { resetTasks } from "../tasks/taskSlice";
import { fetchSteps } from "./stepThunks";
const savedSteps = localStorage.getItem("steps");
const initialState = {
  steps: savedSteps ? JSON.parse(savedSteps) : [],
  loading: false,
  error: null,
};
const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    toggleStep(state, action) {
      const step = state.steps.find((s) => s.id === action.payload.id);
      if (!step) return;
      step.completed = !step.completed;
    },
    resetSteps(state, action) {
      const taskIds = action.payload;
      state.steps = state.steps.map((step) =>
        taskIds.includes(step.task_id)
          ? {
              ...step,
              completed: false,
            }
          : step,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSteps.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSteps.fulfilled, (state, action) => {
        state.loading = false;
        state.steps = action.payload;
      })
      .addCase(fetchSteps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { toggleStep, resetSteps } = stepSlice.actions;
export default stepSlice.reducer;
