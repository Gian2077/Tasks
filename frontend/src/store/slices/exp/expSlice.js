import { createSlice } from "@reduxjs/toolkit";
const savedExp = localStorage.getItem("exp");
const initialState = {
  exp: savedExp ? JSON.parse(savedExp) : 0,
};
const expSlice = createSlice({
  name: "exp",
  initialState,
  reducers: {
    addExp(state, action) {
      state.exp = Math.max(0, state.exp + action.payload);
    },
  },
});
export const { addExp } = expSlice.actions;
export default expSlice.reducer;
