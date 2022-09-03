import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboardSlice";
const Store = configureStore({
  reducer: { dashboard: dashboardSlice.reducer },
});

export default Store;
