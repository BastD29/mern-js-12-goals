import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import goalReducer from "./goalSlice3";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
