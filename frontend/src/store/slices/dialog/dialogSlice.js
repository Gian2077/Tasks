import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showDialog: false,
  targetTask: null,
};
const dialogSlice = createSlice({
  name: "dialog",
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
  },
});
export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
