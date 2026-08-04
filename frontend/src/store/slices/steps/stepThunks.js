import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSteps } from "../../../api/stepService.js";
export const fetchSteps = createAsyncThunk("steps/fetchSteps", async () => {
  const response = await getSteps();
  localStorage.setItem("steps", JSON.stringify(response.data));
  const nextId =
    response.data.length > 0
      ? Math.max(...response.data.map((step) => step.id)) + 1
      : 1;
  localStorage.setItem("nextStepId", nextId);
  return { steps: response.data, nextId };
});
