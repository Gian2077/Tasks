import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSteps } from "../../../api/stepService.js";
export const fetchSteps = createAsyncThunk("steps/fetchSteps", async () => {
  const response = await getSteps();
  localStorage.setItem("steps", JSON.stringify(response.data));
  return response.data;
});
