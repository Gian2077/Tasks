import { createSlice } from "@reduxjs/toolkit";
const DATE = new Date().toISOString();
const initialState = {
  DAY: Number(DATE.split("T")[0].split("-")[2]),
  DAY_WEEK: new Date().getUTCDay(),
  MONTH: Number(DATE.split("T")[0].split("-")[1]),
  YEAR: Number(DATE.split("T")[0].split("-")[0]),
};
const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    refreshDate(state) {
      const date = new Date().toISOString();
      state.DAY = Number(date.split("T")[0].split("-")[2]);
      state.DAY_WEEK = new Date().getUTCDay();
      state.MONTH = Number(date.split("T")[0].split("-")[1]);
      state.YEAR = Number(date.split("T")[0].split("-")[0]);
    },
  },
});

export const { refreshDate } = dateSlice.actions;

export default dateSlice.reducer;
