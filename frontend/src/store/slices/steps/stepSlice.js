import { createSlice } from "@reduxjs/toolkit";
import { fetchSteps } from "./stepThunks";
const savedSteps = localStorage.getItem("steps");
const initialState = {
  steps: savedSteps ? JSON.parse(savedSteps) : [],
  nextId: savedSteps ? JSON.parse(localStorage.getItem("nextStepId")) : 1,
  loading: false,
  error: null,
};
const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    addStep(state, action) {
      const step = {
        id: state.nextId,
        completed: false,
        dateCompleted: null,
        ...action.payload,
      };
      state.steps.push(step);
      state.nextId++;
    },
    toggleStep(state, action) {
      const step = state.steps.find((s) => s.id === action.payload.id);
      if (!step) return;
      step.completed = !step.completed;
      step.dateCompleted = step.completed ? new Date().toISOString() : null;
    },
    editStep(state, action) {
      const step = state.steps.find((s) => s.id === action.payload.id);
      if (!step) return;
      step.title = action.payload.title;
    },
    deleteStep(state, action) {
      state.steps = state.steps.filter((step) => step.id !== action.payload);
    },
    resetSteps(state, action) {
      const stepIds = action.payload;
      state.steps = state.steps.map((step) =>
        stepIds.includes(step.id)
          ? { ...step, completed: false, dateCompleted: null }
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
        state.steps = action.payload.steps;
        state.nextId = action.payload.nextId;
      })
      .addCase(fetchSteps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { addStep, toggleStep, editStep, deleteStep, resetSteps } =
  stepSlice.actions;
export default stepSlice.reducer;
