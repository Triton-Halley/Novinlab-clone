import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { currentPage: "dashboard" },
  reducers: {
    updatePage(state, action) {
      state.currentPage = action.payload.page;
    },
  },
});

export const dashboardAction = dashboardSlice.actions;

export default dashboardSlice;
